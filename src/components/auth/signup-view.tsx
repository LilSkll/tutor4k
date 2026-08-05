import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { AuthForm } from "@/components/auth/auth-form";
import { BrandIcon } from "@/components/shared/brand-icon";
import { translate } from "@/lib/i18n/auth";
import type { InterfaceLanguage } from "@/types";

/** Server-rendered signup chrome; only AuthForm hydrates on the client. */
export function SignupView({
  language,
  error,
  allowSocialOAuth = true,
}: {
  language: InterfaceLanguage;
  error?: string;
  allowSocialOAuth?: boolean;
}) {
  const t = (key: string) => translate(key, language);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("auth.backHome")}
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <BrandIcon size={40} priority className="h-10 w-10" />
            <span className="font-bold text-xl gradient-text">
              Spanish with Pavel
            </span>
          </div>

          <h1 className="text-2xl font-bold mb-1">{t("auth.signupTitle")}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            {t("auth.signupSubtitle")}
          </p>

          {error && (
            <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <AuthForm mode="signup" allowSocialOAuth={allowSocialOAuth} />

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t("auth.haveAccount")}{" "}
            <Link
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              {t("auth.signIn")}
            </Link>
          </p>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {t("auth.registerFooter")}{" "}
            <Link href="/terms" className="text-primary hover:underline">
              {t("auth.termsLink")}
            </Link>{" "}
            {t("auth.and")}{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              {t("auth.privacyLink")}
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="hidden lg:flex relative bg-gradient-to-br from-orange-500 via-rose-500 to-primary items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-10 text-9xl font-bold text-white">
            ¿
          </div>
          <div className="absolute bottom-1/3 right-10 text-9xl font-bold text-white">
            ?
          </div>
        </div>
        <div className="relative text-center text-white max-w-md">
          <Sparkles className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-3">{t("auth.heroSide.signup")}</h2>
          <p className="text-white/90">{t("auth.heroSide.signupDesc")}</p>
        </div>
      </div>
    </div>
  );
}
