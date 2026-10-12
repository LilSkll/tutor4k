import Link from "next/link";
import { signInWithEmail, signUpWithEmail } from "@/server/actions/auth";
import { translate } from "@/lib/i18n/auth";
import type { InterfaceLanguage } from "@/types";
import { OAuthDeferred } from "@/components/auth/oauth-deferred";
import { cn } from "@/lib/utils";

/**
 * Progressive auth form: pure RSC markup + server action.
 * Email/password (and signup consents) work before any client JS hydrates.
 * OAuth loads as a deferred client island.
 */
export function AuthFormNative({
  mode,
  language,
  redirect,
  allowSocialOAuth = true,
  tone = "default",
}: {
  mode: "signin" | "signup";
  language: InterfaceLanguage;
  redirect?: string;
  allowSocialOAuth?: boolean;
  /** Match cinematic auth shells (dark glass panels). */
  tone?: "default" | "cinematic";
}) {
  const t = (key: string) => translate(key, language);
  const action = mode === "signin" ? signInWithEmail : signUpWithEmail;
  const cinematic = tone === "cinematic";

  const fieldClass = cinematic
    ? "flex h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50"
    : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  const labelClass = cinematic
    ? "text-sm font-medium leading-none text-slate-200"
    : "text-sm font-medium leading-none";

  const submitClass = cinematic
    ? "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-rose-600 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(225,29,72,0.35)] transition-colors hover:bg-rose-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/60"
    : "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-primary via-orange-500 to-rose-500 shadow-brand hover:opacity-90 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  const roleStudentClass = cinematic
    ? "cursor-pointer rounded-xl border-2 border-white/15 bg-white/[0.03] p-3 text-left transition-all hover:border-rose-400/40 has-[:checked]:border-rose-400/70 has-[:checked]:bg-rose-500/15"
    : "cursor-pointer rounded-xl border-2 border-border p-3 text-left has-[:checked]:border-primary has-[:checked]:bg-primary/5 hover:border-primary/40 transition-all";

  const roleTeacherClass = cinematic
    ? "cursor-pointer rounded-xl border-2 border-white/15 bg-white/[0.03] p-3 text-left transition-all hover:border-amber-400/40 has-[:checked]:border-amber-400/70 has-[:checked]:bg-amber-500/15"
    : "cursor-pointer rounded-xl border-2 border-border p-3 text-left has-[:checked]:border-amber-500 has-[:checked]:bg-amber-500/5 hover:border-amber-500/40 transition-all";

  const mutedText = cinematic ? "text-slate-400" : "text-muted-foreground";
  const linkClass = cinematic
    ? "text-amber-200 hover:text-amber-100 hover:underline"
    : "text-primary hover:underline";

  return (
    <div className="space-y-4">
      <form
        id="auth-form"
        action={action}
        className="auth-form-native space-y-4"
      >
        {mode === "signin" && redirect ? (
          <input type="hidden" name="redirect" value={redirect} />
        ) : null}
        <input type="hidden" name="interfaceLanguage" value={language} />

        {mode === "signup" ? (
          <fieldset className="space-y-2">
            <legend className={labelClass}>{t("auth.accountType")}</legend>
            <div className="grid grid-cols-2 gap-2">
              <label htmlFor="role-student" className={roleStudentClass}>
                <input
                  id="role-student"
                  type="radio"
                  name="role"
                  value="student"
                  defaultChecked
                  className="sr-only"
                />
                <p className="text-sm font-semibold">{t("auth.roleStudent")}</p>
                <p className={cn("mt-0.5 text-[11px] leading-snug", mutedText)}>
                  {t("auth.roleStudentDesc")}
                </p>
              </label>
              <label htmlFor="role-teacher" className={roleTeacherClass}>
                <input
                  id="role-teacher"
                  type="radio"
                  name="role"
                  value="teacher"
                  className="sr-only"
                />
                <p className="text-sm font-semibold">{t("auth.roleTeacher")}</p>
                <p className={cn("mt-0.5 text-[11px] leading-snug", mutedText)}>
                  {t("auth.roleTeacherDesc")}
                </p>
              </label>
            </div>

            <div
              className={cn(
                "teacher-panel space-y-3 rounded-xl border p-3",
                cinematic
                  ? "border-amber-400/35 bg-amber-500/10"
                  : "border-amber-500/40 bg-amber-500/10",
              )}
            >
              <div
                className={cn(
                  "space-y-1 text-xs leading-relaxed",
                  cinematic
                    ? "text-amber-100/90"
                    : "text-amber-900 dark:text-amber-100",
                )}
              >
                <p className="font-semibold text-sm">
                  {t("auth.teacherWarningTitle")}
                </p>
                <p>{t("auth.teacherWarning1")}</p>
                <p>{t("auth.teacherWarning2")}</p>
              </div>
              <label
                htmlFor="teacherConfirm"
                className={cn(
                  "flex cursor-pointer items-start gap-3 text-sm leading-snug",
                  mutedText,
                )}
              >
                <input
                  id="teacherConfirm"
                  name="teacherConfirm"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary"
                />
                <span>{t("auth.teacherConfirm")}</span>
              </label>
            </div>
          </fieldset>
        ) : null}

        {mode === "signup" ? (
          <div className="space-y-2">
            <label htmlFor="name" className={labelClass}>
              {t("auth.name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t("auth.namePlaceholder")}
              required
              autoComplete="name"
              className={fieldClass}
            />
          </div>
        ) : null}

        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            {t("auth.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t("auth.emailPlaceholder")}
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="password" className={labelClass}>
              {t("auth.password")}
            </label>
            {mode === "signin" ? (
              <Link
                href="/forgot-password"
                className={cn("text-xs font-medium", linkClass)}
              >
                {t("auth.forgotPassword")}
              </Link>
            ) : null}
          </div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder={t("auth.passwordPlaceholder")}
            required
            minLength={6}
            autoComplete={
              mode === "signin" ? "current-password" : "new-password"
            }
            className={fieldClass}
          />
        </div>

        {mode === "signup" ? (
          <div
            className={cn(
              "space-y-3 rounded-lg border p-4",
              cinematic
                ? "border-white/10 bg-white/[0.04]"
                : "border bg-muted/30",
            )}
          >
            <label
              htmlFor="acceptTerms"
              className={cn(
                "flex cursor-pointer items-start gap-3 text-sm leading-snug",
                mutedText,
              )}
            >
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary"
              />
              <span>
                {t("auth.acceptTerms")}{" "}
                <Link href="/terms" className={linkClass} target="_blank">
                  {t("auth.termsLink")}
                </Link>
              </span>
            </label>
            <label
              htmlFor="acceptPrivacy"
              className={cn(
                "flex cursor-pointer items-start gap-3 text-sm leading-snug",
                mutedText,
              )}
            >
              <input
                id="acceptPrivacy"
                name="acceptPrivacy"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary"
              />
              <span>
                {t("auth.acceptPrivacy")}{" "}
                <Link href="/privacy" className={linkClass} target="_blank">
                  {t("auth.privacyLink")}
                </Link>
              </span>
            </label>
            <label
              htmlFor="marketingConsent"
              className={cn(
                "flex cursor-pointer items-start gap-3 text-sm leading-snug",
                mutedText,
              )}
            >
              <input
                id="marketingConsent"
                name="marketingConsent"
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary"
              />
              <span>{t("auth.marketingConsent")}</span>
            </label>
          </div>
        ) : null}

        <button type="submit" className={cn(submitClass)}>
          {mode === "signin" ? (
            t("auth.signIn")
          ) : (
            <>
              <span className="signup-submit-student">
                {t("auth.createStudent")}
              </span>
              <span className="signup-submit-teacher">
                {t("auth.createTeacher")}
              </span>
            </>
          )}
        </button>
      </form>

      <OAuthDeferred
        mode={mode}
        redirect={redirect}
        allowSocialOAuth={allowSocialOAuth}
        language={language}
        oauthUnavailableMessage={t("auth.oauthRuUnavailable")}
        tone={tone}
      />
    </div>
  );
}
