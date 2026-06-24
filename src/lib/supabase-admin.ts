import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client.
 *
 * Bypasses Row-Level-Security — used ONLY by:
 *   - the ingest script (scripts/ingest-pdf.ts) to write knowledge chunks,
 *   - any privileged server-side maintenance.
 *
 * NEVER import this from a Client Component or expose the key to the
 * browser. The service_role key must live only in server-side env vars.
 *
 * Returns null if the key is not configured so callers can degrade
 * gracefully (the public anon-key client is used for normal app reads).
 */
let cached: SupabaseClient | null = null;

export function createSupabaseAdminClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return null;
  }

  if (cached) return cached;

  cached = createClient(url, key, {
    auth: {
      // The service role has no user session.
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return cached;
}
