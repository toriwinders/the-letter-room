import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { normalizeEmail } from "@/lib/waitlist";

export const runtime = "nodejs";

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
