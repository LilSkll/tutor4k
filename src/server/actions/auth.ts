"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Goal, InterfaceLanguage, Level } from "@/types";

// =====================================================================
// Authentication server actions
// =====================================================================

/**
 * Translate raw Supabase auth errors into friendly Russian messages so the
 * user understands what went wrong instead of seeing "email rate limit
 * exceeded" or other technical strings.
 */
function friendlyAuthError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("rate limit") && m.includes("email")) {
    return "Сервер отправил слишком много писем подтверждения за час. Подожди немного (15-30 минут) и попробуй снова, либо попроси администратора отключить подтверждение email.";
  }
  if (m.includes("rate limit")) {
    return "Слишком много попыток за короткое время. Подожди пару минут и попробуй снова.";
  }
  if (m.includes("already") && m.includes("registered")) {
    return "Аккаунт с таким email уже существует. Попробуй войти вместо регистрации.";
  }
  if (m.includes("already been registered")) {
    return "Пользователь с таким email уже зарегистрирован. Войди через страницу входа.";
  }
  if (m.includes("invalid login") || m.includes("invalid credentials")) {
    return "Неверный email или пароль. Проверь данные и попробуй снова.";
  }
  if (m.includes("email not confirmed")) {
    return "Email ещё не подтверждён. Проверь почту (включая папку «Спам») или попроси администратора отключить подтверждение email.";
  }
  if (m.includes("password") && (m.includes("weak") || m.includes("short"))) {
    return "Пароль слишком простой. Используй минимум 6 символов.";
  }
  if (m.includes("password should be")) {
    return "Пароль слишком короткий. Минимум 6 символов.";
  }
  // Fallback — keep the original but prefix for clarity.
  return "Ошибка: " + message;
}

export async function signInWithEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const redirectPath = String(formData.get("redirect") ?? "/dashboard");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(friendlyAuthError(error.message))}`);
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
    redirect(`/signup?error=${encodeURIComponent(friendlyAuthError(error.message))}`);
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
