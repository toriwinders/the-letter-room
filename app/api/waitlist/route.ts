import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createResendClient, getResendFromEmail } from "@/lib/resend";
import { normalizeEmail } from "@/lib/waitlist";

export const runtime = "nodejs";

function buildWaitlistEmailHtml() {
  return `
<div style="font-family:sans-serif;font-size:16px;line-height:1.6;color:#222;">
  <p>You're on the list.</p>
  <p>I'm building something for people who want more of the real stuff — real conversations, real connection, something you can hold in your hands.</p>
  <p>The Conversation Club is a monthly letter and conversation card, mailed to your door. The letter is a personal essay from me. The card is designed to turn a good dinner into a great one.</p>
  <p>I'm only opening this to the first 100 people, and you're one of them. When it's ready to launch, you'll hear from me first.</p>
  <p>In the meantime — think about who you'd bring the card to. That person already came to mind, didn't they?</p>
  <p>-tori</p>
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
