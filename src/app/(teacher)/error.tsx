"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

/** Teacher Studio error boundary — uses teacher+student dictionary. */
export default function TeacherError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);

  useEffect(() => {
    console.error("[teacher error]", error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl font-semibold tracking-tight">
          {t("error.title")}
        </h1>
        <p className="text-sm text-muted-foreground">{t("error.body")}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          variant="gradient"
          onClick={reset}
          className="transition-transform active:scale-[0.98]"
        >
          {t("error.retry")}
        </Button>
        <Button variant="outline" asChild>
          <Link href="/teacher/dashboard">{t("teacher.nav.dashboard")}</Link>
        </Button>
      </div>
    </div>
  );
}
