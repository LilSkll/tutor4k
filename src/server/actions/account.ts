"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { LEGAL_OPERATOR } from "@/config/legal";

export type UserDataExport = {
  exportedAt: string;
  service: string;
  operator: string;
  profile: Record<string, unknown> | null;
  learningProgress: Record<string, unknown>[];
  vocabulary: Record<string, unknown>[];
  exercisesHistory: Record<string, unknown>[];
  dailyActivity: Record<string, unknown>[];
  chatConversations: Record<string, unknown>[];
  chatMessages: Record<string, unknown>[];
};

/**
 * GDPR / 152-FZ data portability — full JSON export for the current user.
 */
export async function exportUserData(): Promise<
  { data: UserDataExport } | { error: string }
> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated" };

  const uid = user.id;

  const [
    profileRes,
    progressRes,
    vocabRes,
    historyRes,
    activityRes,
    convRes,
  ] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", uid).maybeSingle(),
    supabase.from("learning_progress").select("*").eq("user_id", uid),
    supabase.from("vocabulary").select("*").eq("user_id", uid),
    supabase
      .from("exercises_history")
      .select("*")
      .eq("user_id", uid)
      .order("created_at", { ascending: false })
      .limit(500),
    supabase.from("daily_activity").select("*").eq("user_id", uid),
    supabase.from("chat_conversations").select("*").eq("user_id", uid),
  ]);

  let messages: Record<string, unknown>[] = [];
  const convIds = (convRes.data ?? []).map((c) => c.id as string);
  if (convIds.length > 0) {
    const { data: msgData } = await supabase
      .from("chat_messages")
      .select("*")
      .in("conversation_id", convIds);
    messages = (msgData ?? []) as Record<string, unknown>[];
  }

  const payload: UserDataExport = {
    exportedAt: new Date().toISOString(),
    service: LEGAL_OPERATOR.serviceName,
    operator: LEGAL_OPERATOR.operatorNameRu,
    profile: (profileRes.data as Record<string, unknown>) ?? null,
    learningProgress: (progressRes.data ?? []) as Record<string, unknown>[],
    vocabulary: (vocabRes.data ?? []) as Record<string, unknown>[],
    exercisesHistory: (historyRes.data ?? []) as Record<string, unknown>[],
    dailyActivity: (activityRes.data ?? []) as Record<string, unknown>[],
    chatConversations: (convRes.data ?? []) as Record<string, unknown>[],
    chatMessages: messages,
  };

  return { data: payload };
}

/**
 * Permanently delete the user account and all cascaded data.
 * Requires password re-entry for security.
 */
export async function deleteUserAccount(input: {
  password: string;
}): Promise<{ error: string | null }> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) return { error: "Not authenticated" };

  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: input.password,
  });

  if (signInError) {
    return { error: "Invalid password" };
  }

  const admin = createSupabaseAdminClient();
  if (!admin) {
    return { error: "Account deletion is temporarily unavailable" };
  }

  const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
  if (deleteError) return { error: deleteError.message };

  await supabase.auth.signOut();
  return { error: null };
}

/**
 * Record consent timestamps on profile (signup or settings).
 */
export async function recordLegalConsent(input: {
  terms: boolean;
  privacy: boolean;
  marketing?: boolean;
}): Promise<{ error: string | null }> {
  if (!input.terms || !input.privacy) {
    return { error: "Terms and Privacy must be accepted" };
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const now = new Date().toISOString();
  const updates: Record<string, unknown> = {
    terms_accepted_at: now,
    privacy_accepted_at: now,
  };
  if (input.marketing !== undefined) {
    updates.marketing_consent = input.marketing;
    updates.marketing_consent_at = input.marketing ? now : null;
  }

  const { error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", user.id);

  if (error) return { error: error.message };
  return { error: null };
}
