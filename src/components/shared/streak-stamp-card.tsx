"use client";

import { Flame, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";

type StreakStampCardProps = {
  streak: number;
  className?: string;
};

/**
 * Lightweight celebration stamp for a 7+ day streak (no canvas/certificate).
 */
export function StreakStampCard({ streak, className }: StreakStampCardProps) {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  if (streak < 7) return null;

  const shareText = t("dashboard.streakStampShare", { streak });

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: t("dashboard.streakStampTitle", { streak }),
          text: shareText,
        });
        return;
      }
      await navigator.clipboard.writeText(shareText);
      toast.success(t("dashboard.streakStampCopied"));
    } catch {
      // cancelled or unsupported
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-orange-500/25 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent p-4 sm:p-5",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-600 dark:text-orange-400">
          <Flame className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1 space-y-1">
          <p className="meta-label text-orange-700/80 dark:text-orange-300/80">
            {t("dashboard.streakStampLabel")}
          </p>
          <p className="text-base font-semibold tracking-tight">
            {t("dashboard.streakStampTitle", { streak })}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("dashboard.streakStampBody")}
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => void share()}
          >
            <Share2 className="h-3.5 w-3.5" />
            {t("dashboard.streakStampShareCta")}
          </Button>
        </div>
      </div>
    </div>
  );
}
