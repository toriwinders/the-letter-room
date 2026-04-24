import "server-only";

import { createClient } from "@supabase/supabase-js";

function decodeJwtPayload(token: string) {
  const [, payload] = token.split(".");

  if (!payload) {
    return null;
  }

  try {
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(
      normalized.length + ((4 - (normalized.length % 4)) % 4),
      "=",
    );

    return JSON.parse(Buffer.from(padded, "base64").toString("utf8")) as {
      ref?: string;
    };
  } catch {
    return null;
  }
}

function getServiceRoleKey() {
  const value = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!value) {
    throw new Error("Missing environment variable: SUPABASE_SERVICE_ROLE_KEY");
  }

  return value;
}

function getSupabaseUrl() {
  const explicitUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (explicitUrl) {
    return explicitUrl;
  }

  const payload = decodeJwtPayload(getServiceRoleKey());

  if (payload?.ref) {
    return `https://${payload.ref}.supabase.co`;
  }

  throw new Error(
    "Missing Supabase URL. Add SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL in Vercel.",
  );
}

export function createSupabaseAdminClient() {
  return createClient(getSupabaseUrl(), getServiceRoleKey(), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
