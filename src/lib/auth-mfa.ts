import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * TOTP MFA was removed from product settings (confused with one-time email
 * verification; enrollment UI caused settings flicker). Always false so login
 * / middleware never force /auth/mfa. Keep the helper so call sites compile.
 */
export async function sessionNeedsMfa(
  _supabase: SupabaseClient,
): Promise<boolean> {
  return false;
}
