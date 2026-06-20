"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Goal, InterfaceLanguage, Level } from "@/types";

// =====================================================================
// Authentication server actions
// =====================================================================

export async function signInWithEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const redirectPath = String(formData.get("redirect") ?? "/dashboard");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect(redirectPath);
}

export async function signUpWithEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const name = String(formData.get("name") ?? "");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  // Email confirmation may be required — redirect to login with notice.
  redirect("/login?notice=check-email");
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}

// =====================================================================
// Onboarding
// =====================================================================

export async function completeOnboarding(input: {
  name: string;
  level: Level | "UNKNOWN";
  goal: Goal;
  interfaceLanguage: InterfaceLanguage;
  dailyGoalMinutes: number;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const level: Level | null = input.level === "UNKNOWN" ? null : input.level;

  const { error } = await supabase
    .from("profiles")
    .update({
      name: input.name,
      level,
      goal: input.goal,
      interface_language: input.interfaceLanguage,
      daily_goal_minutes: input.dailyGoalMinutes,
      onboarded: true,
    })
    .eq("id", user.id);

  if (error) {
    redirect(`/onboarding?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

// =====================================================================
// Profile updates (settings page)
// =====================================================================

export async function updateProfile(input: {
  name?: string;
  level?: Level;
  goal?: Goal;
  interfaceLanguage?: InterfaceLanguage;
  dailyGoalMinutes?: number;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  const updates: Record<string, unknown> = {};
  if (input.name !== undefined) updates.name = input.name;
  if (input.level !== undefined) updates.level = input.level;
  if (input.goal !== undefined) updates.goal = input.goal;
  if (input.interfaceLanguage !== undefined)
    updates.interface_language = input.interfaceLanguage;
  if (input.dailyGoalMinutes !== undefined)
    updates.daily_goal_minutes = input.dailyGoalMinutes;

  const { error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  return { error: null };
}
