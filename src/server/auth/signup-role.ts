import type { SupabaseClient, User } from "@supabase/supabase-js";
import type { UserRole } from "@/types";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";

/** Self-serve signup roles stored in auth user_metadata.role. */
export function roleFromAuthMetadata(
  meta: Record<string, unknown> | null | undefined,
): "student" | "teacher" | null {
  if (!meta) return null;
  const raw = String(meta.role ?? "")
    .trim()
    .toLowerCase();
  if (raw === "teacher") return "teacher";
  if (raw === "student") return "student";
  return null;
}

type ProfileRoleRow = { role: UserRole | null; onboarded?: boolean | null };

type ConsentPatch = {
  termsAcceptedAt: string;
  privacyAcceptedAt: string;
  marketingConsent: boolean;
  marketingConsentAt: string | null;
};

/**
 * Sync consent (and optionally teacher role) onto profiles.
 *
 * Teacher upgrade from auth metadata is ONLY allowed when
 * `allowTeacherUpgrade` is true (email/OAuth signup). Login must never
 * promote student → teacher from mutable user_metadata.
 */
export async function ensureProfileRoleMatchesMetadata(
  user: Pick<User, "id" | "user_metadata" | "app_metadata">,
  opts?: {
    consent?: ConsentPatch;
    /** Authenticated client — used when service role is unavailable. */
    userClient?: SupabaseClient;
    /**
     * When true (signup only), may set profiles.role = teacher from metadata.
     * Never pass true from login / email-confirm of existing learners.
     */
    allowTeacherUpgrade?: boolean;
  },
): Promise<UserRole> {
  const metaRole = roleFromAuthMetadata(
    (user.user_metadata ?? user.app_metadata) as Record<string, unknown>,
  );

  const db = createSupabaseAdminClient() ?? opts?.userClient ?? null;
  if (!db) {
    console.warn(
      "[signup-role] no admin/user client; cannot sync teacher role to profiles",
    );
    return metaRole === "teacher" && opts?.allowTeacherUpgrade
      ? "teacher"
      : "student";
  }

  const { data: profile, error: readErr } = await db
    .from("profiles")
    .select("role, onboarded")
    .eq("id", user.id)
    .maybeSingle();

  if (readErr) {
    console.error("[signup-role] profile read failed", readErr.message);
  }

  const current = ((profile as ProfileRoleRow | null)?.role ??
    "student") as UserRole;
  const onboarded = Boolean((profile as ProfileRoleRow | null)?.onboarded);

  const patch: Record<string, unknown> = {};

  if (opts?.consent) {
    patch.terms_accepted_at = opts.consent.termsAcceptedAt;
    patch.privacy_accepted_at = opts.consent.privacyAcceptedAt;
    patch.marketing_consent = opts.consent.marketingConsent;
    patch.marketing_consent_at = opts.consent.marketingConsentAt;
  }

  let nextRole: UserRole = current;

  if (current === "school_admin" || current === "teacher") {
    nextRole = current;
  } else if (
    opts?.allowTeacherUpgrade &&
    metaRole === "teacher" &&
    !onboarded
  ) {
    // Fresh signup only — never promote an onboarded student.
    patch.role = "teacher";
    patch.onboarded = true;
    nextRole = "teacher";
  } else {
    nextRole = current;
  }

  if (Object.keys(patch).length === 0) {
    return nextRole;
  }

  const { error: writeErr } = await db
    .from("profiles")
    .update(patch)
    .eq("id", user.id);

  if (writeErr) {
    console.error("[signup-role] profile sync failed", writeErr.message);
    return current;
  }

  return nextRole;
}
