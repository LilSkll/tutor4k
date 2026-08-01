"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { getCourseTitle } from "@/config/courses";
import type { TeacherAnalyticsDTO } from "@/types/teacher";

export function TeacherAnalyticsClient() {
  const language = useInterfaceLanguage();
  const t = React.useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      translate(key, language, vars),
    [language],
  );

  const [courseId, setCourseId] = React.useState<"all" | "spanish" | "english">(
    "all",
  );
  const [data, setData] = React.useState<TeacherAnalyticsDTO | null>(null);
  const [loading, setLoading] = React.useState(true);

  const load = React.useCallback(async () => {
    setLoading(true);
    try {
      const q =
        courseId === "all"
          ? ""
          : `?courseId=${encodeURIComponent(courseId)}`;
      const res = await fetch(`/api/teacher/analytics${q}`);
      const json = (await res.json()) as {
        analytics?: TeacherAnalyticsDTO;
        error?: string;
      };
      if (!res.ok) throw new Error(json.error || "fail");
      setData(json.analytics ?? null);
    } catch {
      toast.error(t("teacher.analytics.loadFail"));
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [courseId, t]);

  React.useEffect(() => {
    void load();
  }, [load]);

  const weekChart =
    data?.weekActivity.map((d) => ({
      date: d.date.slice(5),
      minutes: d.minutes,
      lessons: d.lessons,
    })) ?? [];

  const progressChart =
    data?.studentProgress.map((s) => ({
      name:
        s.name.length > 14 ? `${s.name.slice(0, 12)}…` : s.name,
      completion: s.completionPercent,
      score: s.averageScore ?? 0,
    })) ?? [];

  const weakChart =
    data?.weakTopics.map((w) => ({
      topic: w.topic.length > 18 ? `${w.topic.slice(0, 16)}…` : w.topic,
      count: w.count,
    })) ?? [];

  const mistakeChart =
    data?.mistakeTypes.map((m) => ({
      type: m.type,
      count: m.count,
    })) ?? [];

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {t("teacher.analytics.title")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("teacher.analytics.subtitle")}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["all", "spanish", "english"] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCourseId(c)}
            className={
              courseId === c
                ? "rounded-lg border border-primary bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                : "rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted"
            }
          >
            {c === "all"
              ? t("teacher.students.allCourses")
              : getCourseTitle(c)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      ) : !data || data.stats.studentCount === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          {t("teacher.analytics.empty")}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <Stat
              label={t("teacher.analytics.students")}
              value={String(data.stats.studentCount)}
            />
            <Stat
              label={t("teacher.analytics.activeWeek")}
              value={String(data.stats.activeThisWeek)}
            />
            <Stat
              label={t("teacher.analytics.avgCompletion")}
              value={`${data.stats.avgCompletionPercent}%`}
            />
            <Stat
              label={t("teacher.analytics.avgScore")}
              value={
                data.stats.avgScore != null
                  ? `${data.stats.avgScore}%`
                  : "—"
              }
            />
            <Stat
              label={t("teacher.analytics.avgStreak")}
              value={String(data.stats.avgStreak)}
            />
            <Stat
              label={t("teacher.analytics.weekMinutes")}
              value={String(data.stats.totalWeekMinutes)}
            />
            <Stat
              label={t("teacher.analytics.hwOpen")}
              value={String(data.stats.assignmentsAssigned)}
            />
            <Stat
              label={t("teacher.analytics.hwDone")}
              value={String(data.stats.assignmentsCompleted)}
            />
          </div>

          <section className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-sm">
              {t("teacher.analytics.weekChart")}
            </h3>
            <div className="h-56">
              {weekChart.every((d) => d.minutes === 0) ? (
                <p className="text-sm text-muted-foreground py-8 text-center">
                  {t("teacher.analytics.noActivity")}
                </p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weekChart}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-muted"
                    />
                    <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                    <Bar
                      dataKey="minutes"
                      name={t("teacher.analytics.minutes")}
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </section>

          <section className="rounded-xl border border-border p-4 space-y-2">
            <h3 className="font-semibold text-sm">
              {t("teacher.analytics.progressChart")}
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={progressChart} layout="vertical" margin={{ left: 8 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={100}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar
                    dataKey="completion"
                    name={t("teacher.analytics.completion")}
                    fill="hsl(var(--primary))"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <div className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-xl border border-border p-4 space-y-2">
              <h3 className="font-semibold text-sm">
                {t("teacher.analytics.weakTopics")}
              </h3>
              {weakChart.length === 0 ? (
                <p className="text-sm text-muted-foreground py-6 text-center">
                  {t("teacher.analytics.noTopics")}
                </p>
              ) : (
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weakChart}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-muted"
                      />
                      <XAxis dataKey="topic" tick={{ fontSize: 10 }} interval={0} angle={-25} textAnchor="end" height={60} />
                      <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar
                        dataKey="count"
                        name={t("teacher.analytics.students")}
                        fill="hsl(var(--chart-2, var(--primary)))"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </section>

            <section className="rounded-xl border border-border p-4 space-y-2">
              <h3 className="font-semibold text-sm">
                {t("teacher.analytics.mistakeTypes")}
              </h3>
              {mistakeChart.length === 0 ? (
                <p className="text-sm text-muted-foreground py-6 text-center">
                  {t("teacher.analytics.noMistakes")}
                </p>
              ) : (
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mistakeChart}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-muted"
                      />
                      <XAxis dataKey="type" tick={{ fontSize: 10 }} />
                      <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar
                        dataKey="count"
                        name={t("teacher.analytics.mistakes")}
                        fill="hsl(var(--destructive))"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </section>
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold mt-0.5">{value}</p>
    </div>
  );
}
