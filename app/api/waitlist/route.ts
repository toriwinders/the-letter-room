import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createResendClient, getResendFromEmail } from "@/lib/resend";
import { normalizeEmail } from "@/lib/waitlist";

export const runtime = "nodejs";

function buildWaitlistEmailHtml() {
  const p = (text: string, last = false) =>
    `<p style="margin:0 0 ${last ? "0" : "20px"};font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3E1B2C;text-align:left;">${text}</p>`;

  return `
    <div style="background:#F2E8D0;padding:40px 24px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
      <div style="margin:0 auto;max-width:560px;text-align:left;">
        ${p("You're on the list.")}
        ${p("I'm building something for people who want more of the real stuff — real conversations, real connection, something you can hold in your hands.")}
        ${p("The Conversation Club is a monthly letter and conversation card, mailed to your door. The letter is a personal essay from me. The card is designed to turn a good dinner into a great one.")}
        ${p("I'm only opening this to the first 100 people, and you're one of them. When it's ready to launch, you'll hear from me first.")}
        ${p("In the meantime — think about who you'd bring the card to. That person already came to mind, didn't they?")}
        ${p("-tori", true)}
      </div>
    </div>
  `;
}

async function sendWaitlistConfirmation(to: string) {
  const resend = createResendClient();

  const { error } = await resend.emails.send({
    from: getResendFromEmail(),
    to: [to],
    subject: "You're on the list.",
    html: buildWaitlistEmailHtml(),
    text: [
      "You're on the list.",
      "",
      "I'm building something for people who want more of the real stuff — real conversations, real connection, something you can hold in your hands.",
      "",
      "The Conversation Club is a monthly letter and conversation card, mailed to your door. The letter is a personal essay from me. The card is designed to turn a good dinner into a great one.",
      "",
      "I'm only opening this to the first 100 people, and you're one of them. When it's ready to launch, you'll hear from me first.",
      "",
      "In the meantime — think about who you'd bring the card to. That person already came to mind, didn't they?",
      "",
      "-tori",
    ].join("\n"),
  });

  if (error) {
    console.error("Waitlist confirmation email failed:", error.message);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = normalizeEmail(body.email ?? "");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("waitlist_signups").upsert(
      {
        email,
        waitlist_joined_at: new Date().toISOString(),
      },
      {
        onConflict: "email",
      },
    );

    if (error) {
      throw error;
    }

    await sendWaitlistConfirmation(email);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("waitlist signup failed", error);

    const message =
      error instanceof Error ? error.message : "Something went wrong while saving your email.";

    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}
