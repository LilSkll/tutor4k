"use client";

import * as React from "react";
import { Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import { toast } from "sonner";
import {
  courseLineForId,
  fillCompletionCertificate,
} from "@/lib/journey/fill-completion-certificate";
import type { GrammarLevel } from "@/types";

export type CompletionCertificateCardProps = {
  userName: string;
  /** Achievement line: chapter, level band, or full course. */
  achievement: string;
  level: GrammarLevel | string;
  courseId: string;
  /** File name stem for download, e.g. chapter-28 or level-c1. */
  downloadStem: string;
  completedAt?: Date;
  className?: string;
  shareText?: string;
};

function formatDate(d: Date, lang: string): string {
  return d.toLocaleDateString(
    lang === "ru" ? "ru-RU" : lang === "es" ? "es-ES" : lang === "de" ? "de-DE" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" },
  );
}

/**
 * Official template certificate with auto-filled name, date, course, level.
 */
export function CompletionCertificateCard({
  userName,
  achievement,
  level,
  courseId,
  downloadStem,
  completedAt = new Date(),
  className,
  shareText,
}: CompletionCertificateCardProps) {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(false);

  const displayName = userName.trim() || t("lesson.friend");
  const dateLabel = formatDate(completedAt, language);
  const courseLine = courseLineForId(courseId, language);

  React.useEffect(() => {
    let cancelled = false;
    setError(false);
    void (async () => {
      try {
        const url = await fillCompletionCertificate({
          userName: displayName,
          achievement,
          level: String(level),
          dateLabel,
          courseLine,
        });
        if (!cancelled) setPreviewUrl(url);
      } catch {
        if (!cancelled) setError(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [displayName, achievement, level, dateLabel, courseLine]);

  const downloadPng = async () => {
    setBusy(true);
    try {
      const url =
        previewUrl ??
        (await fillCompletionCertificate({
          userName: displayName,
          achievement,
          level: String(level),
          dateLabel,
          courseLine,
        }));
      const a = document.createElement("a");
      a.href = url;
      a.download = `${downloadStem}-certificate.png`;
      a.click();
      toast.success(t("journey.badgeDownloaded"));
    } catch {
      toast.error(t("journey.badgeDownloadError"));
    } finally {
      setBusy(false);
    }
  };

  const share = async () => {
    const text =
      shareText ??
      t("journey.shareChapterText", {
        name: displayName,
        chapter: achievement,
        course: courseLine,
      });
    try {
      if (navigator.share) {
        await navigator.share({ title: t("journey.chapterBadgeTitle"), text });
        return;
      }
      await navigator.clipboard.writeText(text);
      toast.success(t("journey.shareCopied"));
    } catch {
      // cancelled
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="overflow-hidden rounded-xl border border-[#0a2540]/15 bg-[#f3e7d0] shadow-[0_12px_40px_-16px_rgba(10,37,64,0.4)]">
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- dynamic canvas data URL
          <img
            src={previewUrl}
            alt={t("journey.chapterBadgeTitle")}
            className="h-auto w-full"
          />
        ) : error ? (
          <p className="p-6 text-center text-sm text-muted-foreground">
            {t("journey.badgeDownloadError")}
          </p>
        ) : (
          <div className="flex aspect-[1024/723] items-center justify-center">
            <div className="h-8 w-8 animate-pulse rounded-full bg-[#0a2540]/15" />
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
          onClick={downloadPng}
        >
          <Download className="h-4 w-4" />
          {t("journey.downloadBadge")}
        </Button>
        <Button type="button" variant="outline" size="sm" className="flex-1" onClick={share}>
          <Share2 className="h-4 w-4" />
          {t("journey.shareBadge")}
        </Button>
      </div>
      <p className="text-center text-[11px] leading-snug text-muted-foreground">
        {t("journey.notProficiencyDisclaimer")}
      </p>
    </div>
  );
}
