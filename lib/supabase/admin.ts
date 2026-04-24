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

const SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;
const EXPLICIT_SUPABASE_URL = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;

const DERIVED_SUPABASE_URL =
  SERVICE_ROLE_KEY && !EXPLICIT_SUPABASE_URL
    ? (() => {
        const payload = decodeJwtPayload(SERVICE_ROLE_KEY);
        return payload?.ref ? `https://${payload.ref}.supabase.co` : null;
      })()
    : null;

export function createSupabaseAdminClient() {
  if (!SERVICE_ROLE_KEY) {
    throw new Error("Missing environment variable: SUPABASE_SERVICE_ROLE_KEY");
  }

  const supabaseUrl = EXPLICIT_SUPABASE_URL ?? DERIVED_SUPABASE_URL;

  if (!supabaseUrl) {
    throw new Error(
      "Missing Supabase URL. Add SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL in Vercel.",
    );
  }

  return createClient(supabaseUrl, SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
