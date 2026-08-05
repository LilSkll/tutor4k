"use client";

import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { AuthForm } from "@/components/auth/auth-form";
import { BrandIcon } from "@/components/shared/brand-icon";
import { translate } from "@/lib/i18n/auth";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export function LoginView({
  error,
  notice,
  redirect,
  allowSocialOAuth = true,
}: {
  error?: string;
  notice?: string;
  redirect?: string;
  allowSocialOAuth?: boolean;
}) {
  const language = useInterfaceLanguage();
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

          <h1 className="text-2xl font-bold mb-1">{t("auth.welcomeBack")}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            {t("auth.loginSubtitle")}
          </p>

          {error && (
            <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}
          {notice === "check-email" && (
            <div className="mb-4 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success space-y-1">
              <p className="font-medium">{t("auth.checkEmailTitle")}</p>
              <p>{t("auth.checkEmailBody")}</p>
            </div>
          )}
          {notice === "check-email-teacher" && (
            <div className="mb-4 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success space-y-1">
              <p className="font-medium">{t("auth.checkEmailTeacherTitle")}</p>
              <p>{t("auth.checkEmailTeacherBody")}</p>
            </div>
          )}
          {notice === "password-updated" && (
            <div className="mb-4 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
              {t("auth.passwordUpdated")}
            </div>
          )}

          <AuthForm
            mode="signin"
            redirect={redirect}
            allowSocialOAuth={allowSocialOAuth}
          />

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t("auth.noAccount")}{" "}
            <Link
              href="/signup"
              className="text-primary font-medium hover:underline"
            >
              {t("auth.signUp")}
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex relative bg-gradient-to-br from-primary via-orange-500 to-rose-500 items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl font-bold text-white">
            ¡
          </div>
          <div className="absolute bottom-10 right-10 text-9xl font-bold text-white">
            !
          </div>
        </div>
        <div className="relative text-center text-white max-w-md">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-3">{t("auth.heroSide.login")}</h2>
          <p className="text-white/90">{t("auth.heroSide.loginDesc")}</p>
        </div>
      </div>
    </div>
  );
}
