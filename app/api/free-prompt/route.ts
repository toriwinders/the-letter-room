import { NextResponse } from "next/server";

import { createResendClient, getResendFromEmail } from "@/lib/resend";

export const runtime = "nodejs";

function buildFreePromptHtml() {
  return `
<div style="font-family:sans-serif;font-size:16px;line-height:1.6;color:#222;">
  <p>Here's your first conversation prompt from The Conversation Club.</p>
  <p><strong>This month's question:</strong></p>
  <p>What's a conversation you had recently that you're still thinking about? What made it stick?</p>
  <p>Bring this to your next dinner. Or a long walk. Or a night on the couch with someone you haven't really talked to in a while.</p>
  <p>If you want more of this every month — a personal essay and a conversation card mailed to your door — <a href="https://conversationclub.co">join the club</a>.</p>
  <p>-tori</p>
</div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = (body.email ?? "").trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resend = createResendClient();

    const { error } = await resend.emails.send({
      from: getResendFromEmail(),
      to: [email],
      subject: "Your first conversation prompt",
      html: buildFreePromptHtml(),
      text: [
        "Here's your first conversation prompt from The Conversation Club.",
        "",
        "THIS MONTH'S QUESTION",
        "What's a conversation you had recently that you're still thinking about? What made it stick?",
        "",
        "Bring this to your next dinner. Or a long walk. Or a night on the couch with someone you haven't really talked to in a while.",
        "",
        "If you want more of this every month — a personal essay and a conversation card mailed to your door — join the club at conversationclub.co",
        "",
        "-tori",
      ].join("\n"),
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("free prompt email failed", error);

    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong sending the email.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
