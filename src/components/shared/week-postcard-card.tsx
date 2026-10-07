"use client";

import * as React from "react";
import { Download, ImageIcon, Share2 } from "lucide-react";
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

/**
 * Lazy week postcard — generates the image only when the student asks,
 * so the dashboard stays light.
 */
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
  const [open, setOpen] = React.useState(false);

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

  const ensurePreview = React.useCallback(() => {
    if (previewUrl) return previewUrl;
    const url = fillWeekPostcard(fields);
    setPreviewUrl(url);
    return url;
  }, [fields, previewUrl]);

  const reveal = () => {
    setBusy(true);
    try {
      ensurePreview();
      setOpen(true);
    } catch {
      toast.error(t("dashboard.weekPostcardError"));
    } finally {
      setBusy(false);
    }
  };

  const download = () => {
    setBusy(true);
    try {
      const url = ensurePreview();
      const a = document.createElement("a");
      a.href = url;
      a.download = `week-postcard-${activeDays}d.jpg`;
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
      const url = ensurePreview();
      if (navigator.share && navigator.canShare) {
        const res = await fetch(url);
        const blob = await res.blob();
        const file = new File([blob], "week-postcard.jpg", {
          type: "image/jpeg",
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
        await navigator.share({
          title: t("dashboard.weekPostcardTitle"),
          text,
        });
        return;
      }
      await navigator.clipboard.writeText(text);
      toast.success(t("dashboard.streakStampCopied"));
    } catch {
      // cancelled
    }
  };

  if (activeDays < 3) return null;

  return (
    <div className={cn("space-y-3 pt-1", className)}>
      {!open ? (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full"
          disabled={busy}
          onClick={reveal}
        >
          <ImageIcon className="h-4 w-4" />
          {t("dashboard.weekPostcardReveal")}
        </Button>
      ) : (
        <>
          <p className="meta-label">{t("dashboard.weekPostcardEyebrow")}</p>
          <div className="overflow-hidden rounded-2xl border shadow-soft bg-card">
            {previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- dynamic canvas data URL
              <img
                src={previewUrl}
                alt={t("dashboard.weekPostcardTitle")}
                className="h-auto w-full max-h-72 object-cover object-top"
                loading="lazy"
              />
            ) : (
              <div className="flex h-40 items-center justify-center bg-muted/40">
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
              onClick={download}
            >
              <Download className="h-4 w-4" />
              {t("dashboard.weekPostcardDownload")}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="flex-1"
              disabled={busy || !previewUrl}
              onClick={() => void share()}
            >
              <Share2 className="h-4 w-4" />
              {t("dashboard.weekPostcardShareCta")}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
