import "server-only";

import type Stripe from "stripe";

import { createResendClient, getResendFromEmail } from "@/lib/resend";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type WaitlistSignupRecord = {
  id: number;
  email: string;
  confirmation_email_sent_at: string | null;
  confirmation_email_attempted_at?: string | null;
  confirmation_email_error?: string | null;
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
    <div style="background:#ffffff;padding:40px 24px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#3d3a35;text-align:left;">
      <div style="margin:0 auto;max-width:560px;text-align:left;">
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3d3a35;text-align:left;">
          Hey!
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3d3a35;text-align:left;">
          You&apos;re in. Welcome to The Letter Room.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3d3a35;text-align:left;">
          Human connection and real life experiences are going to be more important than ever.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3d3a35;text-align:left;">
          We text instead of call. We react instead of respond. We watch each other&apos;s lives from a distance and call it staying close. The Letter Room is changing that by sending something that shows up at your door and asks you to do something with it. Because what&apos;s better than getting a real letter that someone actually put time and care into.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3d3a35;text-align:left;">
          Inside, you&apos;ll receive a short reflection on modern life. This should feel like it&apos;s coming from the smartest, most observant friend you know. And that&apos;s paired with a conversation card related to the letter. It has a theme and a few prompts that are designed for you to carry on the conversation.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3d3a35;text-align:left;">
          The letter is for you. The card is for you and your people.
        </p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3d3a35;text-align:left;">
          Thank you for being a founding member, and taking a bet on this. Your first letter will be shipped out the first week of July. When it lands, I want to hear about it. Write me back - the return address is on the envelope. Post the card on your story. Send this to the friend you&apos;d actually want to have that conversation with. You&apos;re one of the first people in, and this thing grows because people like you tell people like them.
        </p>
        <p style="margin:0;font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3d3a35;text-align:left;">
          -tori
        </p>
      </div>
    </div>
  `;
}

async function sendConfirmationEmail(to: string) {
  const resend = createResendClient();

  const { data, error } = await resend.emails.send({
    from: getResendFromEmail(),
    to: [to],
    subject: "You just did something analog.",
    html: buildConfirmationEmailHtml(),
    text: [
      "Hey!",
      "",
      "You're in. Welcome to The Letter Room.",
      "",
      "Human connection and real life experiences are going to be more important than ever.",
      "",
      "We text instead of call. We react instead of respond. We watch each other's lives from a distance and call it staying close. The Letter Room is changing that by sending something that shows up at your door and asks you to do something with it. Because what's better than getting a real letter that someone actually put time and care into.",
      "",
      "Inside, you'll receive a short reflection on modern life. This should feel like it's coming from the smartest, most observant friend you know. And that's paired with a conversation card related to the letter. It has a theme and a few prompts that are designed for you to carry on the conversation.",
      "",
      "The letter is for you. The card is for you and your people.",
      "",
      "Thank you for being a founding member, and taking a bet on this. Your first letter will be shipped out the first week of July. When it lands, I want to hear about it. Write me back - the return address is on the envelope. Post the card on your story. Send this to the friend you'd actually want to have that conversation with. You're one of the first people in, and this thing grows because people like you tell people like them.",
      "",
      "-tori",
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
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
    .select(
      "id,email,confirmation_email_sent_at,confirmation_email_attempted_at,confirmation_email_error",
    )
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
    .select(
      "id,email,confirmation_email_sent_at,confirmation_email_attempted_at,confirmation_email_error",
    )
    .single();

  if (upsertError) {
    throw new Error(upsertError.message);
  }

  const existingRecord = existingBySession as WaitlistSignupRecord | null;
  const savedRecord = savedSignup as WaitlistSignupRecord | null;

  if (!savedRecord) {
    throw new Error("Stripe signup could not be saved.");
  }

  if (!existingRecord?.confirmation_email_sent_at) {
    const attemptedAt = new Date().toISOString();

    try {
      await sendConfirmationEmail(savedRecord.email);

      const { error: updateError } = await supabase
        .from("waitlist_signups")
        .update({
          confirmation_email_attempted_at: attemptedAt,
          confirmation_email_sent_at: new Date().toISOString(),
          confirmation_email_error: null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", savedRecord.id);

      if (updateError) {
        throw new Error(updateError.message);
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown Resend confirmation email error.";

      await supabase
        .from("waitlist_signups")
        .update({
          confirmation_email_attempted_at: attemptedAt,
          confirmation_email_error: message,
          updated_at: new Date().toISOString(),
        })
        .eq("id", savedRecord.id);

      console.error("Resend confirmation email failed", message);
    }
  }

  return { skipped: false };
}
