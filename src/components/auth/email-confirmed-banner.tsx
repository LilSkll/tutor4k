"use client";

import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import * as React from "react";

/** One-shot banner after email confirmation lands in the app. */
export function EmailConfirmedBanner({
  message = "Почта подтверждена — вы уже в системе. Можно заниматься.",
}: {
  message?: string;
}) {
  const searchParams = useSearchParams();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (searchParams.get("confirmed") === "1") {
      setVisible(true);
      const url = new URL(window.location.href);
      url.searchParams.delete("confirmed");
      window.history.replaceState(null, "", url.pathname + url.search);
    }
  }, [searchParams]);

  if (!visible) return null;

  return (
    <div className="mb-4 flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-800 dark:text-emerald-200">
      <p className="flex-1 min-w-0">{message}</p>
      <button
        type="button"
        aria-label="Закрыть"
        className="shrink-0 rounded p-0.5 hover:bg-emerald-500/20"
        onClick={() => setVisible(false)}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
