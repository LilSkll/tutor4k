import { redirect } from "next/navigation";
import { DailySessionRunner } from "@/components/daily/daily-session-runner";
import { getDailySessionPlanAction } from "@/server/actions/daily-session";
import { getCurrentProfile } from "@/server/actions/data";
import { translate } from "@/lib/i18n";
import type { InterfaceLanguage } from "@/types";

export default async function DailyPage() {
  const [profile, plan] = await Promise.all([
    getCurrentProfile(),
    getDailySessionPlanAction(),
  ]);

  if (!plan) {
    redirect("/chapters");
  }

  const lang = (profile?.interface_language ?? "ru") as InterfaceLanguage;
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, lang, vars);

  return (
    <div className="page-container space-y-4">
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
    </div>
  );
}
