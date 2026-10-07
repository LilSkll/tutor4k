"use client";

import * as React from "react";
import { Download, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import { fillWeekPostcard } from "@/lib/week-postcard";
import { cn } from "@/lib/utils";

type WeekPostcardCardProps = {
  activeDays: number;
  minutes: number;
  tip: string;
  className?: string;
};

export function WeekPostcardCard({
  activeDays,
  minutes,
  tip,
  className,
}: WeekPostcardCardProps) {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);

  const fields = React.useMemo(() => {
    const tr = (key: string, vars?: Record<string, string | number>) =>
      translate(key, language, vars);
    return {
      title: tr("dashboard.weekPostcardEyebrow"),
      subtitle: tr("dashboard.weekPostcardTitle"),
      daysLabel: tr("dashboard.weekPostcardDays", { days: activeDays }),
      minutesLabel: tr("dashboard.weekPostcardMinutes", { minutes }),
      tip,
      footer: tr("dashboard.weekPostcardFooter"),
    };
  }, [activeDays, minutes, tip, language]);

  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const url = await fillWeekPostcard(fields);
        if (!cancelled) setPreviewUrl(url);
      } catch {
        if (!cancelled) setPreviewUrl(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [fields]);

  const download = async () => {
    setBusy(true);
    try {
      const url = previewUrl ?? (await fillWeekPostcard(fields));
      const a = document.createElement("a");
      a.href = url;
      a.download = `week-postcard-${activeDays}d.png`;
      a.click();
      toast.success(t("dashboard.weekPostcardDownloaded"));
    } catch {
      toast.error(t("dashboard.weekPostcardError"));
    } finally {
      setBusy(false);
    }
  };

  const share = async () => {
    const text = t("dashboard.weekPostcardShare", {
      days: activeDays,
      minutes,
    });
    try {
      if (previewUrl && navigator.share && navigator.canShare) {
        const res = await fetch(previewUrl);
        const blob = await res.blob();
        const file = new File([blob], "week-postcard.png", {
          type: "image/png",
        });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: t("dashboard.weekPostcardTitle"),
            text,
            files: [file],
          });
          return;
        }
      }
      if (navigator.share) {
        await navigator.share({ title: t("dashboard.weekPostcardTitle"), text });
        return;
      }
      await navigator.clipboard.writeText(text);
      toast.success(t("dashboard.streakStampCopied"));
    } catch {
      // cancelled
    }
  };

  if (activeDays < 1) return null;

  return (
    <div className={cn("space-y-3", className)}>
      <p className="meta-label">{t("dashboard.weekPostcardEyebrow")}</p>
      <div className="overflow-hidden rounded-2xl border shadow-soft bg-card">
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- dynamic canvas data URL
          <img
            src={previewUrl}
            alt={t("dashboard.weekPostcardTitle")}
            className="h-auto w-full"
          />
        ) : (
          <div className="flex aspect-[1080/1350] max-h-80 items-center justify-center bg-muted/40">
            <div className="h-8 w-8 animate-pulse rounded-full bg-muted-foreground/20" />
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="flex-1"
          disabled={busy || !previewUrl}
          onClick={() => void download()}
        >
          <Download className="h-4 w-4" />
          {t("dashboard.weekPostcardDownload")}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="flex-1"
          disabled={!previewUrl}
          onClick={() => void share()}
        >
          <Share2 className="h-4 w-4" />
          {t("dashboard.weekPostcardShareCta")}
        </Button>
      </div>
    </div>
  );
}
