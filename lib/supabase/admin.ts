import "server-only";

import { createClient } from "@supabase/supabase-js";

function getEnv(name: "SUPABASE_URL" | "SUPABASE_SERVICE_ROLE_KEY") {
  const value =
    name === "SUPABASE_URL"
      ? process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
      : process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export function createSupabaseAdminClient() {
  return createClient(getEnv("SUPABASE_URL"), getEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
