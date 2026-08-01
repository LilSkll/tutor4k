"use client";

import * as React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { getCourseTitle } from "@/config/courses";

type Mistake = {
  id: string;
  exercise: string;
  exerciseType: string;
  feedback: string;
  createdAt: string;
};

type WeekDay = {
  date: string;
  minutesStudied: number;
  lessonsCompleted: number;
};

type Row = {
  link: { id: string; student_id: string; course_id: string; role: string };
  student: {
    id: string;
    name: string;
    email: string;
    level: string | null;
  } | null;
  streak: number;
  lastActiveDate: string | null;
  completionPercent: number;
  completedChapters: number;
  totalChapters: number;
  averageScore: number | null;
  weekActivity: WeekDay[];
  weekMinutes: number;
  recentMistakes: Mistake[];
};

export function TeacherDashboardPage({ teacherName }: { teacherName: string }) {
  const language = useInterfaceLanguage();
  const t = React.useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      translate(key, language, vars),
    [language],
  );

  const [courseId, setCourseId] = React.useState<"all" | "spanish" | "english">(
    "all",
  );
  const [rows, setRows] = React.useState<Row[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const ac = new AbortController();
    setLoading(true);
    const q =
      courseId === "all"
        ? ""
        : `?courseId=${encodeURIComponent(courseId)}`;
    void (async () => {
      try {
        const res = await fetch(`/api/teacher/dashboard${q}`, {
          signal: ac.signal,
        });
        const data = (await res.json()) as {
          students?: Row[];
          error?: string;
        };
        if (!res.ok) throw new Error(data.error || "fail");
        if (!ac.signal.aborted) setRows(data.students ?? []);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        toast.error(t("teacher.dashboard.loadFail"));
      } finally {
        if (!ac.signal.aborted) setLoading(false);
      }
    })();
    return () => ac.abort();
  }, [courseId, t]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {t("teacher.dashboard.greeting", { name: teacherName || "—" })}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("teacher.dashboard.subtitle")}
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
        <div className="flex items-center justify-center py-16 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      ) : rows.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center space-y-2">
          <p className="font-medium">{t("teacher.dashboard.emptyTitle")}</p>
          <p className="text-sm text-muted-foreground">
            {t("teacher.dashboard.emptyBody")}
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {rows.map((row) => {
            const name = row.student?.name || row.student?.email || "—";
            const weekBars = row.weekActivity.map((d) => d.minutesStudied);
            const maxMin = Math.max(1, ...weekBars);
            return (
              <li
                key={row.link.id}
                className="rounded-xl border border-border bg-card p-4 space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <Link
                      href={`/teacher/students/${encodeURIComponent(row.link.student_id)}?courseId=${encodeURIComponent(row.link.course_id)}`}
                      className="font-semibold hover:text-primary"
                    >
                      {name}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {row.student?.email}
                      {row.student?.level ? ` · ${row.student.level}` : ""}
                    </p>
                  </div>
                  <Badge variant="secondary">
                    {getCourseTitle(row.link.course_id)}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t("teacher.dashboard.lastActive")}
                    </p>
                    <p className="font-medium">
                      {row.lastActiveDate || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t("teacher.dashboard.streak")}
                    </p>
                    <p className="font-medium">{row.streak}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t("teacher.dashboard.completion")}
                    </p>
                    <p className="font-medium">
                      {row.completionPercent}%
                      <span className="text-muted-foreground font-normal">
                        {" "}
                        ({row.completedChapters}/{row.totalChapters})
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t("teacher.dashboard.avgScore")}
                    </p>
                    <p className="font-medium">
                      {row.averageScore != null ? `${row.averageScore}%` : "—"}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {t("teacher.dashboard.weekActivity", {
                      minutes: row.weekMinutes,
                    })}
                  </p>
                  <div className="flex items-end gap-1 h-8">
                    {row.weekActivity.map((d) => (
                      <div
                        key={d.date}
                        title={`${d.date}: ${d.minutesStudied} min`}
                        className="flex-1 rounded-sm bg-primary/70 min-w-0"
                        style={{
                          height: `${Math.max(
                            8,
                            Math.round((d.minutesStudied / maxMin) * 100),
                          )}%`,
                          opacity: d.minutesStudied > 0 ? 1 : 0.25,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {t("teacher.dashboard.recentMistakes")}
                  </p>
                  {row.recentMistakes.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      {t("teacher.dashboard.noMistakes")}
                    </p>
                  ) : (
                    <ul className="space-y-1 text-sm">
                      {row.recentMistakes.map((m) => (
                        <li key={m.id} className="text-muted-foreground">
                          <span className="text-foreground">
                            {m.exercise || m.exerciseType || "—"}
                          </span>
                          {m.feedback ? ` — ${m.feedback}` : ""}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
