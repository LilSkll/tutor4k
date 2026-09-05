"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export default function NotFound() {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-4xl font-bold tracking-tight text-muted-foreground/40">
        404
      </p>
      <div className="space-y-2">
        <h1 className="text-xl font-semibold tracking-tight">
          {t("error.notFoundTitle")}
        </h1>
        <p className="text-sm text-muted-foreground">{t("error.notFoundBody")}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="gradient" asChild>
          <Link href="/dashboard">{t("error.openApp")}</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">{t("error.home")}</Link>
        </Button>
      </div>
    </div>
  );
}
