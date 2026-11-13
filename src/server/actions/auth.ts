"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getFirstChapterSlugForLevel } from "@/config/chapters";
import { resolvePostLoginPath } from "@/lib/roles";
import { sessionNeedsMfa } from "@/lib/auth-mfa";
import { resolveAuthOrigin } from "@/lib/auth-origin";
import {
  extractAuthErrorMessage,
  friendlyAuthErrorCode,
} from "@/lib/auth-errors";
import { ensureProfileRoleMatchesMetadata } from "@/server/auth/signup-role";
import type { Goal, InterfaceLanguage, Level, UserRole } from "@/types";

const UI_LANGS = new Set<InterfaceLanguage>(["ru", "en", "es", "de"]);

function interfaceLanguageFromForm(formData: FormData): InterfaceLanguage {
  const raw = String(formData.get("interfaceLanguage") ?? "")
    .trim()
    .slice(0, 2)
    .toLowerCase();
  return UI_LANGS.has(raw as InterfaceLanguage)
    ? (raw as InterfaceLanguage)
    : "ru";
}

// =====================================================================
// Authentication server actions
// =====================================================================

/** Stable i18n key for ?error= — UI localizes via auth dicts (ru/en/es/de). */
function friendlyAuthError(errorOrMessage: unknown): string {
  return friendlyAuthErrorCode(errorOrMessage);
}

/** Prefer current host (.com vs vercel.app) so auth cookies match the tab. */
async function appOrigin(): Promise<string> {
  return resolveAuthOrigin();
}

function normalizeAuthEmail(raw: string): string {
  // Trim + lowercase so "User@Mail.com " matches the stored account.
  return raw.trim().toLowerCase();
}

function loginErrorRedirect(
  message: string,
  opts: { redirectPath?: string; lang?: string },
): never {
  const q = new URLSearchParams();
  q.set("error", message);
  if (opts.redirectPath) q.set("redirect", opts.redirectPath);
  const lang = opts.lang?.trim();
  if (lang === "en" || lang === "es" || lang === "de" || lang === "ru") {
    q.set("lang", lang);
  }
  redirect(`/login?${q.toString()}`);
}

export async function signInWithEmail(formData: FormData) {
  const email = normalizeAuthEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "");
  const redirectPath = String(formData.get("redirect") ?? "");
  const lang = String(formData.get("interfaceLanguage") ?? "").trim();

  if (!email || !password) {
    loginErrorRedirect("auth.error.emailPasswordRequired", {
      redirectPath,
      lang,
    });
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    loginErrorRedirect(friendlyAuthError(error), { redirectPath, lang });
  }

  let role: UserRole = "student";
  if (data.user) {
    role = await ensureProfileRoleMatchesMetadata(data.user, {
      userClient: supabase,
    });
  }

  if (await sessionNeedsMfa(supabase)) {
    redirect("/auth/mfa");
  }

  redirect(resolvePostLoginPath(role, redirectPath || null));
}

export async function signUpWithEmail(formData: FormData) {
  const email = normalizeAuthEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "");
  const name = String(formData.get("name") ?? "").trim();
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
  const origin = await appOrigin();
  // Confirmation link must hit /auth/callback so we exchange the code and
  // land in the app — not the marketing Site URL ("/") with no instructions.
  const postConfirmPath =
    role === "teacher" ? "/teacher/dashboard" : "/dashboard";
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback?next=${encodeURIComponent(postConfirmPath)}`,
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

  // Persist role + consent. Prefer service-role: with email confirmation
  // there is often no session yet, so a user-scoped update is blocked by RLS
  // and teachers were left as students when the DB trigger omitted role.
  if (data.user) {
    const synced = await ensureProfileRoleMatchesMetadata(data.user, {
      allowTeacherUpgrade: true,
      consent: {
        termsAcceptedAt: now,
        privacyAcceptedAt: now,
        marketingConsent,
        marketingConsentAt: marketingConsent ? now : null,
      },
      userClient: data.session ? supabase : undefined,
    });
    if (role === "teacher" && synced !== "teacher") {
      console.error("signup profile teacher role sync failed", {
        userId: data.user.id,
        synced,
      });
      if (data.session) {
        redirect(
          `/signup?error=${encodeURIComponent(
            "Аккаунт создан, но роль преподавателя не сохранилась. Войдите и напишите в поддержку.",
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
    )}&lang=${encodeURIComponent(interfaceLanguageFromForm(formData))}`,
  );
}

/** Send a password-reset email (Supabase Auth). */
export async function requestPasswordReset(formData: FormData) {
  const email = normalizeAuthEmail(String(formData.get("email") ?? ""));
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
  // Always land on the canonical host after reset so .com / vercel.app
  // don't leave users with a working session on one domain and an old
  // autofilled password on the other.
  const canonical =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (await appOrigin());
  redirect(`${canonical}/login?notice=password-updated`);
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
  const { data: profileRow } = await supabase
    .from("profiles")
    .select("active_course_id")
    .eq("id", user.id)
    .maybeSingle();
  const courseId = (profileRow?.active_course_id as string) ?? "spanish";

  // Credit prior CEFR bands so B2+ learners unlock the chosen band's first chapter.
  if (level) {
    const { creditPriorChaptersForLevel } = await import(
      "@/server/actions/data"
    );
    await creditPriorChaptersForLevel(level, courseId).catch((err) => {
      console.warn(
        "[completeOnboarding] creditPriorChaptersForLevel:",
        (err as Error).message,
      );
    });
  }

  const { getCurrentChapterSlug } = await import("@/server/actions/data");
  const { getCourse } = await import("@/config/courses");
  const unlockedSlug = await getCurrentChapterSlug(courseId);
  const course = await getCourse(courseId);
  const chapterSlug =
    unlockedSlug ??
    course.getChapters()[0]?.slug ??
    getFirstChapterSlugForLevel(level);
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

  if (input.level !== undefined && input.level !== "A1") {
    const { data: profileRow } = await supabase
      .from("profiles")
      .select("active_course_id")
      .eq("id", user.id)
      .maybeSingle();
    const courseId =
      (input.activeCourseId as string | undefined) ??
      (profileRow?.active_course_id as string) ??
      "spanish";
    const { creditPriorChaptersForLevel } = await import(
      "@/server/actions/data"
    );
    await creditPriorChaptersForLevel(input.level, courseId).catch((err) => {
      console.warn(
        "[updateProfile] creditPriorChaptersForLevel:",
        (err as Error).message,
      );
    });
  }

  revalidatePath("/", "layout");
  return { error: null };
}
