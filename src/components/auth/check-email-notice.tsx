"use client";

import { Mail } from "lucide-react";
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
    <div
      role="status"
      className="mb-6 space-y-3 rounded-2xl border-2 border-amber-400/50 bg-amber-400/15 px-5 py-6 text-amber-50 shadow-[0_12px_40px_rgba(245,158,11,0.18)] sm:px-6 sm:py-7"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/25 text-amber-200">
          <Mail className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0 space-y-2">
          <p className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
            {t(
              teacher
                ? "auth.checkEmailTeacherTitle"
                : "auth.checkEmailTitle",
            )}
          </p>
          <p className="text-base leading-relaxed text-amber-50/95 sm:text-lg">
            {t(
              teacher ? "auth.checkEmailTeacherBody" : "auth.checkEmailBody",
            )}
          </p>
        </div>
      </div>
      <p className="rounded-xl border border-amber-300/40 bg-amber-500/20 px-4 py-3 text-center text-base font-bold leading-snug text-amber-100 sm:text-lg">
        {t("auth.checkEmailSpamNote")}
      </p>
    </div>
  );
}
