"use client";

import { useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { changePasswordLoggedIn } from "@/server/actions/auth";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

/** Change password while signed in (Settings / Teacher Studio). */
export function ChangePasswordCard({ returnTo }: { returnTo: string }) {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);
  const [pending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const pwdError = searchParams.get("pwdError");
  const pwdNotice = searchParams.get("pwdNotice");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <LockKeyhole className="h-4 w-4 text-primary" />
          {t("settings.passwordTitle")}
        </CardTitle>
        <CardDescription>{t("settings.passwordDesc")}</CardDescription>
      </CardHeader>
      <CardContent>
        {pwdError && (
          <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {pwdError}
          </div>
        )}
        {pwdNotice === "password-changed" && (
          <div className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-800 dark:text-emerald-200">
            {t("settings.passwordChanged")}
          </div>
        )}
        <form
          action={(formData) => {
            startTransition(() => {
              changePasswordLoggedIn(formData);
            });
          }}
          className="space-y-4"
        >
          <input type="hidden" name="returnTo" value={returnTo} />
          <div className="space-y-2">
            <Label htmlFor="currentPassword">{t("settings.currentPassword")}</Label>
            <Input
              id="currentPassword"
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t("settings.newPassword")}</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">{t("settings.confirmPassword")}</Label>
            <Input
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
            />
          </div>
          <Button type="submit" disabled={pending}>
            {pending && <Loader2 className="h-4 w-4 animate-spin" />}
            {t("settings.changePasswordBtn")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
