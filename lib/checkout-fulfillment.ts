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
      <div style="margin:0 auto;max-width:560px;">
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;color:#161311;">
          Hey there!
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;color:#161311;">
          You&apos;re officially a part of The Letter Room.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;color:#161311;">
          In a world where everything is digital-first, this is intentionally not.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;color:#161311;">
          Here&apos;s how it works. Something shows up addressed to you. You sit with it. And then get to bring it into real conversation.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;color:#161311;">
          Your first issue is already in motion and will be arriving by mail soon.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;color:#161311;">
          If you like it, tell me. Write back. Share it on social. Text your friends. Better yet, tell your friends about it next time you see them.
        </p>
        <p style="margin:0;font-size:18px;line-height:1.65;color:#161311;">
          Excited to hear what you think.
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
    subject: "Being offline is cool again.",
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
    try {
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
    } catch (error) {
      console.error("Resend confirmation email failed", error);
    }
  }

  return { skipped: false };
}
