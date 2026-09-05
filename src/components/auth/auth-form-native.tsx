import Link from "next/link";
import { signInWithEmail, signUpWithEmail } from "@/server/actions/auth";
import { translate } from "@/lib/i18n/auth";
import type { InterfaceLanguage } from "@/types";
import { OAuthDeferred } from "@/components/auth/oauth-deferred";
import { cn } from "@/lib/utils";

const fieldClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const labelClass = "text-sm font-medium leading-none";

const submitClass =
  "inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-primary via-orange-500 to-rose-500 shadow-brand hover:opacity-90 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

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
}: {
  mode: "signin" | "signup";
  language: InterfaceLanguage;
  redirect?: string;
  allowSocialOAuth?: boolean;
}) {
  const t = (key: string) => translate(key, language);
  const action = mode === "signin" ? signInWithEmail : signUpWithEmail;

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
              <label
                htmlFor="role-student"
                className="cursor-pointer rounded-xl border-2 border-border p-3 text-left has-[:checked]:border-primary has-[:checked]:bg-primary/5 hover:border-primary/40 transition-all"
              >
                <input
                  id="role-student"
                  type="radio"
                  name="role"
                  value="student"
                  defaultChecked
                  className="sr-only"
                />
                <p className="text-sm font-semibold">{t("auth.roleStudent")}</p>
                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                  {t("auth.roleStudentDesc")}
                </p>
              </label>
              <label
                htmlFor="role-teacher"
                className="cursor-pointer rounded-xl border-2 border-border p-3 text-left has-[:checked]:border-amber-500 has-[:checked]:bg-amber-500/5 hover:border-amber-500/40 transition-all"
              >
                <input
                  id="role-teacher"
                  type="radio"
                  name="role"
                  value="teacher"
                  className="sr-only"
                />
                <p className="text-sm font-semibold">{t("auth.roleTeacher")}</p>
                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                  {t("auth.roleTeacherDesc")}
                </p>
              </label>
            </div>

            <div className="teacher-panel rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 space-y-3">
              <div className="space-y-1 text-xs leading-relaxed text-amber-900 dark:text-amber-100">
                <p className="font-semibold text-sm">
                  {t("auth.teacherWarningTitle")}
                </p>
                <p>{t("auth.teacherWarning1")}</p>
                <p>{t("auth.teacherWarning2")}</p>
              </div>
              <label
                htmlFor="teacherConfirm"
                className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground leading-snug"
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
                className="text-xs text-primary font-medium hover:underline"
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
          <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
            <label
              htmlFor="acceptTerms"
              className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground leading-snug"
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
                <Link
                  href="/terms"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  {t("auth.termsLink")}
                </Link>
              </span>
            </label>
            <label
              htmlFor="acceptPrivacy"
              className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground leading-snug"
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
                <Link
                  href="/privacy"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  {t("auth.privacyLink")}
                </Link>
              </span>
            </label>
            <label
              htmlFor="marketingConsent"
              className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground leading-snug"
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
      />
    </div>
  );
}
