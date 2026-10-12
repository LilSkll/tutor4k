"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { DailySessionRunner } from "@/components/daily/daily-session-runner";
import {
  clearDailySeen,
  readDailySeen,
  rememberDailySeen,
} from "@/lib/daily-seen";
import { localDateKey } from "@/lib/local-date";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import {
  getDailySessionPlanAction,
  type DailySessionPlan,
} from "@/server/actions/daily-session";

type StoredSeen = {
  date?: string;
  chapterSlug?: string;
  ids?: string[];
  run?: number;
};

/**
 * Loads the Daily plan on the client with a per-open run nonce and
 * recently-seen exercise ids so practice does not repeat the same five.
 */
export function DailySessionGate() {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [plan, setPlan] = React.useState<DailySessionPlan | null>(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(false);
      try {
        const today = localDateKey();
        let excludeIds: string[] = [];
        let runNonce = 0;
        let storedChapter: string | null = null;
        try {
          const raw = localStorage.getItem("st_daily_seen_v1");
          if (raw) {
            const parsed = JSON.parse(raw) as StoredSeen;
            if (parsed.date === today && Array.isArray(parsed.ids)) {
              excludeIds = parsed.ids.filter(
                (id): id is string => typeof id === "string",
              );
              runNonce = Math.max(0, Number(parsed.run) || 0);
              storedChapter =
                typeof parsed.chapterSlug === "string"
                  ? parsed.chapterSlug
                  : null;
            }
          }
        } catch {
          // private mode
        }

        let next = await getDailySessionPlanAction({
          excludeIds,
          runNonce,
        });
        if (cancelled) return;
        if (!next) {
          setError(true);
          return;
        }

        // Chapter changed today — don't apply another chapter's exclusions.
        if (storedChapter && storedChapter !== next.chapterSlug) {
          next = await getDailySessionPlanAction({
            excludeIds: [],
            runNonce: 0,
          });
          if (cancelled) return;
          if (!next) {
            setError(true);
            return;
          }
        }

        const prev = readDailySeen(today, next.chapterSlug);
        if (next.exhaustedExclusions) {
          clearDailySeen(today, next.chapterSlug);
        }

        const servedIds = [
          ...next.reviewExercises.map((ex) => ex.id),
          ...next.practiceExercises.map((ex) => ex.id),
        ];
        rememberDailySeen(
          today,
          next.chapterSlug,
          servedIds,
          next.exhaustedExclusions
            ? {
                date: today,
                chapterSlug: next.chapterSlug,
                ids: [],
                run: 0,
              }
            : prev,
        );

        setPlan(next);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-16 text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (error || !plan) {
    return (
      <p className="text-center text-sm text-muted-foreground py-12">
        {t("daily.finishError")}
      </p>
    );
  }

  return (
    <>
      <div className="max-w-2xl mx-auto space-y-1 pt-2">
        <h1 className="page-title">{t("daily.title")}</h1>
        <p className="text-sm text-muted-foreground">
          {t("daily.subtitle", { chapter: plan.chapterTitle })}
        </p>
        <p className="text-sm text-foreground/90">
          {plan.recommendationLabel
            ? t("daily.whyTodayWeak", {
                weak: plan.recommendationLabel,
                chapter: plan.chapterTitle,
              })
            : t("daily.whyTodayChapter", { chapter: plan.chapterTitle })}
        </p>
        {plan.strengthLabel && plan.recommendationLabel ? (
          <p className="text-sm text-muted-foreground">
            {t("daily.balanceLine", {
              strong: plan.strengthLabel,
              weak: plan.recommendationLabel,
            })}
          </p>
        ) : null}
      </div>
      <DailySessionRunner plan={plan} />
    </>
  );
}
