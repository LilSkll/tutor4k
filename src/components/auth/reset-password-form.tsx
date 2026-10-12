"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updatePassword } from "@/server/actions/auth";
import { Loader2 } from "lucide-react";
import { translate } from "@/lib/i18n/auth";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export function ResetPasswordForm() {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        startTransition(() => {
          updatePassword(formData);
        });
      }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="password">{t("auth.newPassword")}</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder={t("auth.passwordPlaceholder")}
          required
          minLength={6}
          autoComplete="new-password"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm">{t("auth.confirmNewPassword")}</Label>
        <Input
          id="confirm"
          name="confirm"
          type="password"
          placeholder={t("auth.passwordPlaceholder")}
          required
          minLength={6}
          autoComplete="new-password"
        />
      </div>

      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        pending={pending}
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {t("auth.savePassword")}
      </Button>
    </form>
  );
}
