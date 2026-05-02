import { NextResponse } from "next/server";

import { createResendClient, getResendFromEmail } from "@/lib/resend";

export const runtime = "nodejs";

function buildFreePromptHtml() {
  const p = (text: string, last = false) =>
    `<p style="margin:0 0 ${last ? "0" : "20px"};font-size:18px;line-height:1.65;letter-spacing:-0.04em;color:#3E1B2C;text-align:left;">${text}</p>`;

  return `
    <div style="background:#F2E8D0;padding:40px 24px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
      <div style="margin:0 auto;max-width:560px;text-align:left;">
        ${p("Here's your first conversation prompt from The Conversation Club.")}
        <div style="margin:0 0 24px;padding:24px;background:#ffffff;border-radius:12px;">
          <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#D8612D;">This month's question</p>
          <p style="margin:0;font-size:22px;line-height:1.35;letter-spacing:-0.04em;color:#3E1B2C;font-weight:600;">What's a conversation you had recently that you're still thinking about? What made it stick?</p>
        </div>
        ${p("Bring this to your next dinner. Or a long walk. Or a night on the couch with someone you haven't really talked to in a while.")}
        ${p('If you want more of this every month — a personal essay and a conversation card mailed to your door — <a href="https://conversationclub.co" style="color:#D8612D;">join the club</a>.')}
        ${p("-tori", true)}
      </div>
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
