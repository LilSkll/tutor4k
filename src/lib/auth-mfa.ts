import type { SupabaseClient } from "@supabase/supabase-js";

/** True when the user must enter a TOTP code to reach aal2. */
export async function sessionNeedsMfa(
  supabase: SupabaseClient,
): Promise<boolean> {
  try {
    const { data, error } =
      await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (error || !data) return false;
    return data.currentLevel === "aal1" && data.nextLevel === "aal2";
  } catch {
    return false;
  }
}
