"use client";

import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { RecoveryHashSession } from "@/components/auth/recovery-hash-session";
import { BrandIcon } from "@/components/shared/brand-icon";
import { translate } from "@/lib/i18n/auth";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export function ResetPasswordView({
  error,
  hasUser,
}: {
  error?: string;
  hasUser: boolean;
}) {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <RecoveryHashSession />
      <div className="flex flex-col justify-center px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("auth.backToLoginShort")}
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <BrandIcon size={40} priority className="h-10 w-10" />
            <span className="font-bold text-xl gradient-text">
              Spanish with Pavel
            </span>
          </div>

          <h1 className="text-2xl font-bold mb-1">{t("auth.resetTitle")}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            {t("auth.resetSubtitle")}
          </p>

          {!hasUser && (
            <div className="mb-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-100">
              {t("auth.resetNoSession")}
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <ResetPasswordForm />
        </div>
      </div>

      <div className="hidden lg:flex relative bg-gradient-to-br from-primary via-orange-500 to-rose-500 items-center justify-center p-12 overflow-hidden">
        <div className="relative text-center text-white max-w-md">
          <LockKeyhole className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-3">{t("auth.resetHero")}</h2>
          <p className="text-white/90">{t("auth.resetHeroDesc")}</p>
        </div>
      </div>
    </div>
  );
}
