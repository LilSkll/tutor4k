"use client";

import * as React from "react";
import { Loader2, RefreshCw, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import type { TeacherAiReportDTO } from "@/types/teacher";

export function TeacherAiAnalysisPanel({
  studentId,
  courseId,
}: {
  studentId: string;
  courseId: string;
}) {
  const language = useInterfaceLanguage();
  const t = React.useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      translate(key, language, vars),
    [language],
  );

  const [report, setReport] = React.useState<TeacherAiReportDTO | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const loadGen = React.useRef(0);

  const loadCached = React.useCallback(async () => {
    const gen = ++loadGen.current;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/teacher/students/${encodeURIComponent(studentId)}/ai-report?courseId=${encodeURIComponent(courseId)}&locale=${encodeURIComponent(language)}`,
      );
      const data = (await res.json()) as {
        report?: TeacherAiReportDTO | null;
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "fail");
      if (gen !== loadGen.current) return;
      setReport(data.report ?? null);
    } catch {
      if (gen !== loadGen.current) return;
      toast.error(t("teacher.ai.loadFail"));
    } finally {
      if (gen === loadGen.current) setLoading(false);
    }
  }, [studentId, courseId, language, t]);

  React.useEffect(() => {
    void loadCached();
  }, [loadCached]);

  const refresh = async (force: boolean) => {
    setRefreshing(true);
    try {
      const res = await fetch(
        `/api/teacher/students/${encodeURIComponent(studentId)}/ai-report`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courseId, locale: language, force }),
        },
      );
      const data = (await res.json()) as {
        report?: TeacherAiReportDTO;
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "fail");
      setReport(data.report ?? null);
      toast.success(
        data.report?.cached
          ? t("teacher.ai.cacheHit")
          : t("teacher.ai.refreshed"),
      );
    } catch (err) {
      toast.error((err as Error).message || t("teacher.ai.refreshFail"));
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <section className="space-y-3 rounded-xl border border-border p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          {t("teacher.ai.title")}
        </h3>
        <div className="flex gap-2">
          {!report && !loading && (
            <Button
              size="sm"
              onClick={() => void refresh(false)}
              disabled={refreshing}
            >
              {refreshing && <Loader2 className="h-4 w-4 animate-spin" />}
              {t("teacher.ai.generate")}
            </Button>
          )}
          {report && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => void refresh(true)}
              disabled={refreshing}
            >
              {refreshing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              {t("teacher.ai.refresh")}
            </Button>
          )}
        </div>
      </div>

      <p className="text-xs text-muted-foreground">{t("teacher.ai.subtitle")}</p>

      {loading ? (
        <div className="flex justify-center py-6 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      ) : !report ? (
        <p className="text-sm text-muted-foreground">{t("teacher.ai.empty")}</p>
      ) : (
        <div className="space-y-3 text-sm">
          <p className="leading-relaxed">{report.summary}</p>
          {report.weakTopics.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">
                {t("teacher.ai.weakTopics")}
              </p>
              <ul className="list-disc pl-5 space-y-0.5">
                {report.weakTopics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {report.recommendations.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">
                {t("teacher.ai.recommendations")}
              </p>
              <ul className="list-disc pl-5 space-y-0.5">
                {report.recommendations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {report.nextSteps.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">
                {t("teacher.ai.nextSteps")}
              </p>
              <ul className="list-disc pl-5 space-y-0.5">
                {report.nextSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-[11px] text-muted-foreground">
            {t("teacher.ai.generatedAt", {
              date: report.generatedAt.slice(0, 16).replace("T", " "),
            })}
            {report.stale ? ` · ${t("teacher.ai.staleHint")}` : ""}
          </p>
        </div>
      )}
    </section>
  );
}
