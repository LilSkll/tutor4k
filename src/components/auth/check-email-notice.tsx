"use client";

import { translate } from "@/lib/i18n/auth";
import { useUIStore } from "@/stores";
import type { InterfaceLanguage } from "@/types";

/**
 * Post-signup notice.
 * Prefer explicit server/URL language on auth pages — Zustand often defaults to
 * `ru` before profile hydrate and would otherwise spoil EN/ES/DE shells.
 */
export function CheckEmailNotice({
  teacher = false,
  serverLanguage,
}: {
  teacher?: boolean;
  serverLanguage?: InterfaceLanguage;
}) {
  const storeLanguage = useUIStore((s) => s.interfaceLanguage);
  const language = serverLanguage ?? storeLanguage ?? "ru";
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
