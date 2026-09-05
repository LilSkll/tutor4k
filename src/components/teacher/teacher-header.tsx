"use client";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export function TeacherHeader(_props?: { title?: string }) {
  void _props;
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);

  return (
    <header className="flex h-14 items-center justify-between border-b border-border/60 px-4 bg-background/80 backdrop-blur-md">
      <h1 className="text-sm font-semibold tracking-tight">
        {t("teacher.studioTitle")}
      </h1>
      <ThemeToggle />
    </header>
  );
}
