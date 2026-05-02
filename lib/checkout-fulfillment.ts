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
  const p = (text: string, last = false) =>
    `<p style="margin:0 0 ${last ? "0" : "20px"};font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3E1B2C;text-align:left;">${text}</p>`;

  return `
    <div style="background:#F2E8D0;padding:40px 24px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
      <div style="margin:0 auto;max-width:560px;text-align:left;">
        ${p("You're in.")}
        ${p("Welcome to The Conversation Club — so glad you're here.")}

        <div style="margin:0 0 24px;padding:24px;background:#ffffff;border-radius:12px;">
          <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#D8612D;">What you'll get every month</p>
          <p style="margin:0 0 12px;font-size:17px;line-height:1.55;letter-spacing:-0.03em;color:#3E1B2C;"><strong>The Letter</strong> — a personal essay from me on whatever I've been thinking about. Friendship, getting older, what we actually want our lives to feel like.</p>
          <p style="margin:0;font-size:17px;line-height:1.55;letter-spacing:-0.03em;color:#3E1B2C;"><strong>The Conversation Card</strong> — one theme, a few prompts, and the kind of questions that change a dinner once somebody asks them.</p>
        </div>

        ${p("Everything arrives in an envelope designed to feel like it matters. The letter is for you. The card is for you and your people.")}
        ${p("Your first letter ships the first week of next month. When it lands, bring the card to dinner. Or a long walk. Or a night on the couch with someone you haven't really talked to in a while.")}
        ${p('You\'re one of the first people in, and that means a lot. If you know someone who\'d love this, send them to <a href="https://conversationclub.co" style="color:#D8612D;text-decoration:underline;">conversationclub.co</a>.')}
        ${p("-tori", true)}
      </div>
    </div>
  `;
}

async function sendConfirmationEmail(to: string) {
  const resend = createResendClient();

  const { data, error } = await resend.emails.send({
    from: getResendFromEmail(),
    to: [to],
    subject: "You're in. Welcome to The Conversation Club.",
    html: buildConfirmationEmailHtml(),
    text: [
      "You're in.",
      "",
      "Welcome to The Conversation Club — so glad you're here.",
      "",
      "WHAT YOU'LL GET EVERY MONTH",
      "",
      "The Letter — a personal essay from me on whatever I've been thinking about. Friendship, getting older, what we actually want our lives to feel like.",
      "",
      "The Conversation Card — one theme, a few prompts, and the kind of questions that change a dinner once somebody asks them.",
      "",
      "Everything arrives in an envelope designed to feel like it matters. The letter is for you. The card is for you and your people.",
      "",
      "Your first letter ships the first week of next month. When it lands, bring the card to dinner. Or a long walk. Or a night on the couch with someone you haven't really talked to in a while.",
      "",
      "You're one of the first people in, and that means a lot. If you know someone who'd love this, send them to conversationclub.co.",
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
