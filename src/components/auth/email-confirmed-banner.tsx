"use client";

import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import * as React from "react";
import { translate } from "@/lib/i18n/auth";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

/** One-shot banner after email confirmation lands in the app. */
export function EmailConfirmedBanner({
  teacher = false,
  initialVisible = false,
}: {
  teacher?: boolean;
  initialVisible?: boolean;
}) {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);
  const searchParams = useSearchParams();
  const [dismissed, setDismissed] = React.useState(false);
  const [sticky] = React.useState(
    () => initialVisible || searchParams.get("confirmed") === "1",
  );

  React.useEffect(() => {
    if (!sticky) return;
    const url = new URL(window.location.href);
    if (!url.searchParams.has("confirmed")) return;
    url.searchParams.delete("confirmed");
    window.history.replaceState(null, "", url.pathname + url.search);
  }, [sticky]);

  if (!sticky || dismissed) return null;

  return (
    <div className="mb-4 flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-800 dark:text-emerald-200">
      <p className="flex-1 min-w-0">
        {t(teacher ? "auth.emailConfirmedTeacher" : "auth.emailConfirmed")}
      </p>
      <button
        type="button"
        aria-label={t("common.close")}
        className="shrink-0 rounded p-0.5 hover:bg-emerald-500/20"
        onClick={() => setDismissed(true)}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
