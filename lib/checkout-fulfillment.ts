import "server-only";

import type Stripe from "stripe";

import { createResendClient, getResendFromEmail } from "@/lib/resend";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type WaitlistSignupRecord = {
  id: number;
  email: string;
  confirmation_email_sent_at: string | null;
};

function splitName(fullName: string | null | undefined) {
  const normalized = (fullName ?? "").trim();

  if (!normalized) {
    return {
      firstName: null,
      lastName: null,
    };
  }

  const [firstName, ...rest] = normalized.split(/\s+/);

  return {
    firstName,
    lastName: rest.length > 0 ? rest.join(" ") : null,
  };
}

function getBestAddress(session: Stripe.Checkout.Session) {
  const shippingDetails = session.collected_information?.shipping_details;
  const shippingAddress = shippingDetails?.address;
  const billingAddress = session.customer_details?.address;
  const address = shippingAddress ?? billingAddress ?? null;

  return {
    name: shippingDetails?.name ?? session.customer_details?.name ?? null,
    line1: address?.line1 ?? null,
    line2: address?.line2 ?? null,
    city: address?.city ?? null,
    state: address?.state ?? null,
    postalCode: address?.postal_code ?? null,
    country: address?.country ?? null,
  };
}

function buildConfirmationEmailHtml() {
  return `
    <div style="background:#fffdf6;padding:40px 24px;font-family:Georgia,'Times New Roman',serif;color:#161311;">
      <div style="margin:0 auto;max-width:560px;text-align:center;">
        <h1 style="margin:0 0 20px;font-size:32px;line-height:1.05;font-weight:500;">
          You're officially part of<br />The Letter Room.
        </h1>
        <p style="margin:0;font-size:18px;line-height:1.6;color:#4d4640;">
          Your email will have all the details. And we promise, only letters from here on out.
        </p>
      </div>
    </div>
  `;
}

async function sendConfirmationEmail(to: string) {
  const resend = createResendClient();

  const { error } = await resend.emails.send({
    from: getResendFromEmail(),
    to: [to],
    subject: "You're officially part of The Letter Room",
    html: buildConfirmationEmailHtml(),
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function handleCompletedCheckoutSession(
  session: Stripe.Checkout.Session,
) {
  const email = session.customer_details?.email?.trim().toLowerCase();

  if (!email) {
    throw new Error("Stripe session is missing a customer email.");
  }

  const address = getBestAddress(session);
  const names = splitName(address.name);
  const supabase = createSupabaseAdminClient();

  const { data: existingBySession, error: sessionLookupError } = await supabase
    .from("waitlist_signups")
    .select("id,email,confirmation_email_sent_at")
    .eq("stripe_checkout_session_id", session.id)
    .maybeSingle();

  if (sessionLookupError) {
    throw new Error(sessionLookupError.message);
  }

  if (existingBySession?.confirmation_email_sent_at) {
    return { skipped: true };
  }

  const { data: savedSignup, error: upsertError } = await supabase
    .from("waitlist_signups")
    .upsert(
      {
        email,
        first_name: names.firstName,
        last_name: names.lastName,
        shipping_name: address.name,
        address_line_1: address.line1,
        address_line_2: address.line2,
        city: address.city,
        state_region: address.state,
        postal_code: address.postalCode,
        country: address.country,
        stripe_checkout_session_id: session.id,
        stripe_customer_id:
          typeof session.customer === "string" ? session.customer : null,
        stripe_subscription_id:
          typeof session.subscription === "string" ? session.subscription : null,
        stripe_payment_link_id:
          typeof session.payment_link === "string" ? session.payment_link : null,
        waitlist_joined_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "email",
      },
    )
    .select("id,email,confirmation_email_sent_at")
    .single();

  if (upsertError) {
    throw new Error(upsertError.message);
  }

  const existingRecord = existingBySession as WaitlistSignupRecord | null;
  const savedRecord = savedSignup as WaitlistSignupRecord | null;

  if (!savedRecord) {
    throw new Error("Stripe signup could not be saved.");
  }

  if (!existingRecord?.confirmation_email_sent_at && !savedRecord.confirmation_email_sent_at) {
    await sendConfirmationEmail(savedRecord.email);

    const { error: updateError } = await supabase
      .from("waitlist_signups")
      .update({
        confirmation_email_sent_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", savedRecord.id);

    if (updateError) {
      throw new Error(updateError.message);
    }
  }

  return { skipped: false };
}
