import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { normalizeAddressPayload, normalizeEmail, type WaitlistAddressPayload } from "@/lib/waitlist";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string } & Partial<WaitlistAddressPayload>;
    const email = normalizeEmail(body.email ?? "");

    if (!email || !body.firstName || !body.addressLine1 || !body.city || !body.state || !body.postalCode || !body.country) {
      return NextResponse.json(
        { error: "Please complete the required mailing fields." },
        { status: 400 },
      );
    }

    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("waitlist_signups").upsert(
      {
        email,
        mailing_details_submitted_at: new Date().toISOString(),
        ...normalizeAddressPayload({
          addressLine1: body.addressLine1,
          addressLine2: body.addressLine2,
          city: body.city,
          country: body.country,
          firstName: body.firstName,
          lastName: body.lastName,
          postalCode: body.postalCode,
          state: body.state,
        }),
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
    console.error("mailing details save failed", error);

    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while saving your mailing details.";

    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}
