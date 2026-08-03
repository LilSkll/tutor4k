"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { requestPasswordReset } from "@/server/actions/auth";
import { Loader2 } from "lucide-react";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export function ForgotPasswordForm() {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        startTransition(() => {
          requestPasswordReset(formData);
        });
      }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="email">{t("auth.email")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t("auth.emailPlaceholder")}
          required
          autoComplete="email"
        />
      </div>

      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        pending={pending}
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {t("auth.sendResetLink")}
      </Button>
    </form>
  );
}
