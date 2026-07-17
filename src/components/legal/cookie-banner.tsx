"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COOKIE_CONSENT_KEY } from "@/config/legal";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";

export function CookieBanner() {
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, language);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({ essential: true, at: new Date().toISOString() }),
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  const privacyHref =
    language === "en" ? "/privacy?lang=en" : "/privacy";

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6 pointer-events-none"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border bg-card/95 backdrop-blur-md shadow-elevated p-4 md:p-5 pointer-events-auto">
        <div className="flex gap-3 items-start">
          <div className="flex-1 min-w-0 space-y-2">
            <p className="font-semibold text-sm">{t("legal.cookieTitle")}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("legal.cookieBody")}{" "}
              <Link href={privacyHref} className="text-primary hover:underline">
                {t("legal.cookiePolicyLink")}
              </Link>
            </p>
          </div>
          <button
            type="button"
            onClick={accept}
            className="shrink-0 text-muted-foreground hover:text-foreground"
            aria-label={t("legal.cookieAccept")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex justify-end mt-3">
          <Button size="sm" variant="gradient" onClick={accept}>
            {t("legal.cookieAccept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
