"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getFirstChapterSlugForLevel } from "@/config/chapters";
import { resolvePostLoginPath } from "@/lib/roles";
import { sessionNeedsMfa } from "@/lib/auth-mfa";
import type { Goal, InterfaceLanguage, Level, UserRole } from "@/types";

// =====================================================================
// Authentication server actions
// =====================================================================

/**
 * Translate raw Supabase auth errors into friendly Russian messages so the
 * user understands what went wrong instead of seeing "email rate limit
 * exceeded" or other technical strings.
 */
function extractAuthErrorMessage(error: unknown): string {
  if (!error) return "";
  if (typeof error === "string") return error;

  const e = error as {
    message?: unknown;
    code?: unknown;
    status?: unknown;
    name?: unknown;
  };

  if (typeof e.message === "string" && e.message.trim() && e.message !== "{}") {
    return e.message;
  }
  // Some Auth errors put a nested object in `message`.
  if (e.message && typeof e.message === "object") {
    try {
      const nested = JSON.stringify(e.message);
      if (nested && nested !== "{}") return nested;
    } catch {
      // ignore
    }
  }
  if (typeof e.code === "string" && e.code) {
    return e.status ? `${e.code} (${e.status})` : e.code;
  }
  try {
    const raw = JSON.stringify(error);
    if (raw && raw !== "{}") return raw;
  } catch {
    // ignore
  }
  return "";
}

function friendlyAuthError(errorOrMessage: unknown): string {
  const message = extractAuthErrorMessage(errorOrMessage);
  const m = message.toLowerCase();

  if (!m) {
    return "Не удалось отправить письмо. Проверьте в Supabase: Custom SMTP и Redirect URLs (должен быть …/auth/callback).";
  }
  if (
    m.includes("authretryablefetcherror") ||
    m.includes('"status":500') ||
    m.includes('"status": 500') ||
    (typeof errorOrMessage === "object" &&
      errorOrMessage !== null &&
      (errorOrMessage as { status?: number; name?: string }).status === 500)
  ) {
    return "Сервер почты не смог отправить письмо (ошибка 500). В Supabase → Authentication → Emails → SMTP Settings проверьте Custom SMTP: хост, порт (465 или 587) и пароль приложения. Если SMTP только что включали — временно выключите его и попробуйте снова, либо исправьте настройки.";
  }
  if (
    m.includes("not authorized") ||
    m.includes("email address not authorized")
  ) {
    return "Supabase пока шлёт письма только участникам команды. Подключите рабочий Custom SMTP — тогда сброс заработает для учеников.";
  }
  if (m.includes("redirect") && (m.includes("allow") || m.includes("not"))) {
    return "Redirect URL не разрешён. В Supabase → Authentication → URL Configuration добавьте: https://ваш-домен/auth/callback";
  }
  if (m.includes("smtp") || m.includes("error sending") || m.includes("mail")) {
    return "Ошибка почтового сервера (SMTP). Проверьте логин, пароль приложения и порт в Custom SMTP.";
  }
  if (m.includes("rate limit") && m.includes("email")) {
    return "Сервер отправил слишком много писем за час. Подожди 15–30 минут и попробуй снова.";
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
    return "Email ещё не подтверждён. Проверь почту (включая папку «Спам»).";
  }
  if (m.includes("password") && (m.includes("weak") || m.includes("short"))) {
    return "Пароль слишком простой. Используй минимум 6 символов.";
  }
  if (m.includes("password should be")) {
    return "Пароль слишком короткий. Минимум 6 символов.";
  }
  if (m.includes("same password") || m.includes("different from the old")) {
    return "Новый пароль должен отличаться от текущего.";
  }
  if (m.includes("expired") || m.includes("otp") || m.includes("token")) {
    return "Ссылка для сброса устарела или уже использована. Запроси новую.";
  }
  return "Ошибка: " + message;
}

async function appOrigin(): Promise<string> {
  // Prefer the host the user is actually on, so reset links land on the same
  // deployment (vercel.app vs custom domain) and cookies match.
  try {
    const { headers } = await import("next/headers");
    const h = await headers();
    const hostHeader = h.get("x-forwarded-host") ?? h.get("host");
    const host = hostHeader?.split(",")[0]?.trim();
    if (host) {
      const protoHeader = h.get("x-forwarded-proto") ?? "https";
      const proto = protoHeader.split(",")[0]?.trim() || "https";
      return `${proto}://${host}`;
    }
  } catch {
    // ignore
  }
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return "http://localhost:3000";
}

export async function signInWithEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const redirectPath = String(formData.get("redirect") ?? "");

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(friendlyAuthError(error))}`);
  }

  let role: UserRole = "student";
  if (data.user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .maybeSingle();
    role = (profile?.role as UserRole | undefined) ?? "student";
  }

  if (await sessionNeedsMfa(supabase)) {
    redirect("/auth/mfa");
  }

  redirect(resolvePostLoginPath(role, redirectPath || null));
}

export async function signUpWithEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const name = String(formData.get("name") ?? "");
  const acceptTerms = formData.get("acceptTerms") === "on";
  const acceptPrivacy = formData.get("acceptPrivacy") === "on";
  const marketingConsent = formData.get("marketingConsent") === "on";
  const rawRole = String(formData.get("role") ?? "student").toLowerCase();
  const role: UserRole = rawRole === "teacher" ? "teacher" : "student";
  const teacherConfirm = formData.get("teacherConfirm") === "on";

  if (!acceptTerms || !acceptPrivacy) {
    redirect(
      `/signup?error=${encodeURIComponent("Необходимо принять Пользовательское соглашение и Политику конфиденциальности.")}`,
    );
  }

  if (role === "teacher" && !teacherConfirm) {
    redirect(
      `/signup?error=${encodeURIComponent(
        "Чтобы зарегистрироваться как преподаватель, подтвердите, что понимаете назначение Teacher Studio.",
      )}`,
    );
  }

  const now = new Date().toISOString();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        role,
        terms_accepted_at: now,
        privacy_accepted_at: now,
        marketing_consent: marketingConsent,
        marketing_consent_at: marketingConsent ? now : null,
      },
    },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(friendlyAuthError(error))}`);
  }

  // Persist role + consent if session is returned (email confirmation disabled).
  // Trigger also sets role from metadata when signup-role-trigger.sql is applied.
  if (data.user) {
    const { error: profileErr } = await supabase
      .from("profiles")
      .update({
        role,
        ...(role === "teacher" ? { onboarded: true } : {}),
        terms_accepted_at: now,
        privacy_accepted_at: now,
        marketing_consent: marketingConsent,
        marketing_consent_at: marketingConsent ? now : null,
      })
      .eq("id", data.user.id);
    if (profileErr) {
      console.error("signup profile update failed", profileErr.message);
      if (data.session) {
        redirect(
          `/signup?error=${encodeURIComponent(
            "Аккаунт создан, но роль не сохранилась. Войдите и напишите в поддержку.",
          )}`,
        );
      }
    }
  }

  if (data.session && data.user) {
    redirect(resolvePostLoginPath(role, null));
  }

  redirect(
    `/login?notice=${encodeURIComponent(
      role === "teacher"
        ? "check-email-teacher"
        : "check-email",
    )}`,
  );
}

/** Send a password-reset email (Supabase Auth). */
export async function requestPasswordReset(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email) {
    redirect(
      `/forgot-password?error=${encodeURIComponent("Укажи email.")}`,
    );
  }

  const supabase = await createSupabaseServerClient();
  const origin = await appOrigin();
  // Dedicated recovery endpoint — always opens the new-password form
  // (teachers must not be redirected to Teacher Studio first).
  // Add `{origin}/auth/recovery` to Supabase Redirect URLs allowlist.
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/recovery`,
  });

  if (error) {
    console.error("[auth] resetPasswordForEmail failed:", {
      origin,
      emailDomain: email.split("@")[1] ?? "?",
      message: extractAuthErrorMessage(error),
      code: (error as { code?: string }).code,
      status: (error as { status?: number }).status,
    });
    redirect(
      `/forgot-password?error=${encodeURIComponent(friendlyAuthError(error))}`,
    );
  }

  // Always show success (don't leak whether the email exists).
  redirect("/forgot-password?notice=sent");
}

/** Set a new password after the user opens the recovery link. */
export async function updatePassword(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (password.length < 6) {
    redirect(
      `/auth/reset-password?error=${encodeURIComponent("Пароль слишком короткий. Минимум 6 символов.")}`,
    );
  }
  if (password !== confirm) {
    redirect(
      `/auth/reset-password?error=${encodeURIComponent("Пароли не совпадают.")}`,
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      `/forgot-password?error=${encodeURIComponent("Ссылка устарела. Запроси сброс пароля ещё раз.")}`,
    );
  }

  // Block logged-in users who open /auth/reset-password without a recovery flow.
  const { hasRecoveryCookie, clearRecoveryCookie, sessionLooksLikeRecovery } =
    await import("@/lib/auth-recovery");
  const { data: sessionData } = await supabase.auth.getSession();
  const allowed =
    (await hasRecoveryCookie()) ||
    sessionLooksLikeRecovery(sessionData.session);
  if (!allowed) {
    redirect(
      `/login?error=${encodeURIComponent("Смена пароля только по ссылке из письма или через Настройки.")}`,
    );
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    redirect(
      `/auth/reset-password?error=${encodeURIComponent(friendlyAuthError(error))}`,
    );
  }

  await clearRecoveryCookie();
  // End recovery session so role-based home redirects don't skip the login screen.
  await supabase.auth.signOut();
  redirect("/login?notice=password-updated");
}

/**
 * Change password while signed in (Settings / Teacher Studio).
 * Verifies the current password first.
 */
export async function changePasswordLoggedIn(formData: FormData) {
  const currentPassword = String(formData.get("currentPassword") ?? "");
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  const returnTo = String(formData.get("returnTo") ?? "/settings");

  const safeReturn =
    returnTo.startsWith("/") && !returnTo.startsWith("//")
      ? returnTo
      : "/settings";

  if (password.length < 6) {
    redirect(
      `${safeReturn}?pwdError=${encodeURIComponent("Пароль слишком короткий. Минимум 6 символов.")}`,
    );
  }
  if (password !== confirm) {
    redirect(
      `${safeReturn}?pwdError=${encodeURIComponent("Пароли не совпадают.")}`,
    );
  }
  if (!currentPassword) {
    redirect(
      `${safeReturn}?pwdError=${encodeURIComponent("Введите текущий пароль.")}`,
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) {
    redirect("/login");
  }

  const { error: reauthError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: currentPassword,
  });
  if (reauthError) {
    redirect(
      `${safeReturn}?pwdError=${encodeURIComponent("Текущий пароль неверный.")}`,
    );
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    redirect(
      `${safeReturn}?pwdError=${encodeURIComponent(friendlyAuthError(error))}`,
    );
  }

  redirect(`${safeReturn}?pwdNotice=${encodeURIComponent("password-changed")}`);
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
  goal?: Goal;
  interfaceLanguage?: InterfaceLanguage;
  dailyGoalMinutes?: number;
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
      goal: input.goal ?? "GENERAL",
      interface_language: input.interfaceLanguage ?? "ru",
      daily_goal_minutes: input.dailyGoalMinutes ?? 10,
      onboarded: true,
    })
    .eq("id", user.id);

  if (error) {
    redirect(`/onboarding?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  // First unlocked chapter for the active course (never skip the prereq chain).
  const { data: profileRow } = await supabase
    .from("profiles")
    .select("active_course_id")
    .eq("id", user.id)
    .maybeSingle();
  const courseId = (profileRow?.active_course_id as string) ?? "spanish";
  const { getCurrentChapterSlug } = await import("@/server/actions/data");
  const { getCourse } = await import("@/config/courses");
  const unlockedSlug = await getCurrentChapterSlug(courseId);
  const course = await getCourse(courseId);
  const chapterSlug =
    unlockedSlug ?? course.getChapters()[0]?.slug ?? getFirstChapterSlugForLevel(level);
  redirect(`/chapters/${chapterSlug}`);
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
  activeCourseId?: string;
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
  if (input.activeCourseId !== undefined)
    updates.active_course_id = input.activeCourseId;

  const { error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  return { error: null };
}
