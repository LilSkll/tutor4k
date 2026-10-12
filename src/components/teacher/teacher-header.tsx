"use client";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export function TeacherHeader(_props?: { title?: string }) {
  void _props;
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);

  return (
    <header className="glass-shell flex h-14 items-center justify-between border-b px-4">
      <h1 className="text-sm font-semibold tracking-tight">
        {t("teacher.studioTitle")}
      </h1>
      <ThemeToggle />
    </header>
  );
}
