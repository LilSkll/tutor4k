"use client";

import { translate } from "@/lib/i18n/auth";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import type { InterfaceLanguage } from "@/types";

/** Post-signup notice — respects saved interface language (localStorage / profile). */
export function CheckEmailNotice({
  teacher = false,
  serverLanguage,
}: {
  teacher?: boolean;
  serverLanguage?: InterfaceLanguage;
}) {
  const language = useInterfaceLanguage(serverLanguage);
  const t = (key: string) => translate(key, language);

  return (
    <div className="mb-4 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success space-y-1">
      <p className="font-medium">
        {t(teacher ? "auth.checkEmailTeacherTitle" : "auth.checkEmailTitle")}
      </p>
      <p>{t(teacher ? "auth.checkEmailTeacherBody" : "auth.checkEmailBody")}</p>
      <p className="text-success/80">{t("auth.checkEmailSpamNote")}</p>
    </div>
  );
}
