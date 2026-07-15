"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Award,
  Download,
  Flame,
  Loader2,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import type { ExerciseHistory, Level } from "@/types";
import { LEVELS, EXERCISE_TYPES } from "@/config/app";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";

const LEVEL_COLORS: Record<Level, string> = {
  A1: "#10b981",
  A2: "#14b8a6",
  B1: "#3b82f6",
  B2: "#8b5cf6",
  C1: "#f43f5e",
};

const TYPE_COLORS = [
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
];

export function ProgressClient({
  history,
  activity,
  streak,
  level,
  userName,
}: {
  history: ExerciseHistory[];
  activity: { activity_date: string; lessons_completed: number; minutes_studied: number }[];
  streak: number;
  level: Level | null;
  userName: string;
}) {
  const [exporting, setExporting] = React.useState(false);
  const language = useUIStore((s) => s.interfaceLanguage);
  const tr = (key: string) => translate(key, language);
  const dateLocale = language === "ru" ? "ru-RU" : language === "es" ? "es-ES" : "en-US";

  // --- Compute statistics -------------------------------------------
  const totalExercises = history.length;
  const correctCount = history.filter((h) => h.correct).length;
  const accuracy =
    totalExercises > 0 ? Math.round((correctCount / totalExercises) * 100) : 0;

  // By level
  const byLevel = LEVELS.map((lvl) => ({
    name: lvl.value,
    total: history.filter((h) => h.level === lvl.value).length,
    correct: history.filter((h) => h.level === lvl.value && h.correct).length,
  }));

  // By type
  const byType = EXERCISE_TYPES.map((exType, i) => ({
    name: tr(exType.labelKey),
    value: history.filter((h) => h.exercise_type === exType.value).length,
    color: TYPE_COLORS[i],
  })).filter((t) => t.value > 0);

  // Activity chart data (last 30 days, fill gaps)
  const today = new Date();
  const activityMap = new Map(activity.map((a) => [a.activity_date, a]));
  const chartData = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (29 - i));
    const key = d.toISOString().slice(0, 10);
    const row = activityMap.get(key);
    return {
      date: d.toLocaleDateString(dateLocale, { day: "numeric", month: "short" }),
      minutes: row?.minutes_studied ?? 0,
      lessons: row?.lessons_completed ?? 0,
    };
  });

  // Strengths & weaknesses by topic
  const topicStats = new Map<string, { total: number; correct: number }>();
  for (const h of history) {
    const key = h.exercise.split("\n")[0].slice(0, 40) || "General";
    const cur = topicStats.get(key) ?? { total: 0, correct: 0 };
    cur.total += 1;
    if (h.correct) cur.correct += 1;
    topicStats.set(key, cur);
  }
  const topicArr = Array.from(topicStats.entries())
    .map(([topic, s]) => ({
      topic,
      rate: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0,
      total: s.total,
    }))
    .filter((t) => t.total >= 2);

  const strengths = [...topicArr].sort((a, b) => b.rate - a.rate).slice(0, 3);
  const weaknesses = [...topicArr].sort((a, b) => a.rate - b.rate).slice(0, 3);

  // --- PDF export ---------------------------------------------------
  const exportPDF = async () => {
    setExporting(true);
    try {
      const res = await fetch("/api/export-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          level,
          streak,
          totalExercises,
          accuracy,
          byLevel,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const html = await res.text();
      // Open the print-ready HTML in a new tab; it auto-triggers print →
      // the user picks "Save as PDF". This renders Cyrillic correctly.
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const win = window.open(url, "_blank");
      if (!win) {
        // Popup blocked — fall back to a download.
        const a = document.createElement("a");
        a.href = url;
        a.download = `progress-${new Date().toISOString().slice(0, 10)}.html`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      toast.success(tr("progress.toastExported"));
    } catch {
      toast.error(tr("progress.toastExportFail"));
    } finally {
      setExporting(false);
    }
  };

  const hasData = totalExercises > 0 || activity.length > 0;

  return (
    <div className="container max-w-5xl py-6 md:py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">{tr("progress.title")}</h1>
          <p className="text-sm text-muted-foreground">
            {tr("progress.subtitle")}
          </p>
        </div>
        <Button variant="outline" onClick={exportPDF} disabled={exporting}>
          {exporting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          {tr("progress.exportBtn")}
        </Button>
      </div>

      {!hasData ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">{tr("progress.noDataTitle")}</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              {tr("progress.noDataDesc")}
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Top stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <StatCard
              icon={<Award className="h-5 w-5" />}
              label={tr("progress.statTotal")}
              value={String(totalExercises)}
            />
            <StatCard
              icon={<Target className="h-5 w-5" />}
              label={tr("progress.statAccuracy")}
              value={`${accuracy}%`}
              accent={accuracy >= 70 ? "success" : "warning"}
            />
            <StatCard
              icon={<Flame className="h-5 w-5" />}
              label={tr("progress.statStreak")}
              value={`${streak} ${tr("progress.statStreakUnit")}`}
            />
            <StatCard
              icon={<TrendingUp className="h-5 w-5" />}
              label={tr("progress.statHits")}
              value={`${correctCount}/${totalExercises}`}
            />
          </div>

          {/* Activity chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{tr("progress.activityTitle")}</CardTitle>
              <CardDescription>{tr("progress.activityDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 10 }}
                      interval={4}
                      className="fill-muted-foreground"
                    />
                    <YAxis tick={{ fontSize: 11 }} className="fill-muted-foreground" />
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
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* By level */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{tr("progress.byLevelTitle")}</CardTitle>
                <CardDescription>{tr("progress.byLevelDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {byLevel.map((l) => (
                  <div key={l.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-muted-foreground">
                        {l.correct}/{l.total}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${
                            l.total > 0 ? (l.correct / l.total) * 100 : 0
                          }%`,
                          backgroundColor: LEVEL_COLORS[l.name as Level],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* By type pie */}
            {byType.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{tr("progress.byTypeTitle")}</CardTitle>
                  <CardDescription>{tr("progress.byTypeDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={byType}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={70}
                          innerRadius={40}
                        >
                          {byType.map((entry, i) => (
                            <Cell key={i} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--popover))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                            fontSize: "12px",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {byType.map((t) => (
                      <span
                        key={t.name}
                        className="flex items-center gap-1 text-xs"
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: t.color }}
                        />
                        {t.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Strengths & weaknesses */}
          {(strengths.length > 0 || weaknesses.length > 0) && (
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    {tr("progress.strengthsTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {strengths.length > 0 ? (
                    strengths.map((s) => (
                      <div
                        key={s.topic}
                        className="flex items-center justify-between rounded-lg bg-success/5 px-3 py-2"
                      >
                        <span className="text-sm truncate flex-1">{s.topic}</span>
                        <Badge variant="success">{s.rate}%</Badge>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {tr("progress.strengthsEmpty")}
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-destructive" />
                    {tr("progress.weaknessesTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {weaknesses.length > 0 ? (
                    weaknesses.map((s) => (
                      <div
                        key={s.topic}
                        className="flex items-center justify-between rounded-lg bg-destructive/5 px-3 py-2"
                      >
                        <span className="text-sm truncate flex-1">{s.topic}</span>
                        <Badge variant="destructive">{s.rate}%</Badge>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {tr("progress.weaknessesEmpty")}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: "success" | "warning";
}) {
  return (
    <Card className="card-hover">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">{label}</span>
          <span
            className={
              accent === "success"
                ? "text-success"
                : accent === "warning"
                  ? "text-warning"
                  : "text-primary"
            }
          >
            {icon}
          </span>
        </div>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
