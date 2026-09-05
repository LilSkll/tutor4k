"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ClipboardList, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { getCourseTitle } from "@/config/courses";
import type { TeacherStudentCardDTO } from "@/types/teacher";
import { TeacherAiAnalysisPanel } from "@/components/teacher/teacher-ai-analysis-panel";

const REASON_KEYS: Record<string, string> = {
  low_confidence: "teacher.card.reason.lowConfidence",
  recent_mistakes: "teacher.card.reason.recentMistakes",
  stale_topic: "teacher.card.reason.staleTopic",
  forgetting: "teacher.card.reason.forgetting",
  consolidate_strength: "teacher.card.reason.consolidate",
  new_topic: "teacher.card.reason.newTopic",
};

export function TeacherStudentCardClient({
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

  const [card, setCard] = React.useState<TeacherStudentCardDTO | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/teacher/students/${encodeURIComponent(studentId)}?courseId=${encodeURIComponent(courseId)}&interfaceLanguage=${encodeURIComponent(language)}`,
        );
        const data = (await res.json()) as {
          card?: TeacherStudentCardDTO;
          error?: string;
        };
        if (!res.ok) throw new Error(data.error || "fail");
        if (!cancelled) setCard(data.card ?? null);
      } catch {
        if (!cancelled) {
          toast.error(t("teacher.card.loadFail"));
          setCard(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [studentId, courseId, language, t]);

  if (loading) {
    return (
      <div className="flex justify-center py-16 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  if (!card) {
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <Link
          href="/teacher/students"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("common.back")}
        </Link>
        <p className="text-sm text-muted-foreground">{t("teacher.card.notFound")}</p>
      </div>
    );
  }

  const name = card.student.name || card.student.email || "—";
  const weekMinutes = card.weekActivity.reduce(
    (s, d) => s + d.minutesStudied,
    0,
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link
        href="/teacher/students"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("common.back")}
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{name}</h2>
          <p className="text-sm text-muted-foreground">{card.student.email}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{getCourseTitle(courseId)}</Badge>
          {card.student.level && (
            <Badge variant="level">{card.student.level}</Badge>
          )}
          <Badge variant="outline">{card.link.role}</Badge>
        </div>
      </div>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
        <Stat
          label={t("teacher.dashboard.lastActive")}
          value={card.student.lastActiveDate || "—"}
        />
        <Stat
          label={t("teacher.dashboard.streak")}
          value={String(card.student.streak)}
        />
        <Stat
          label={t("teacher.dashboard.completion")}
          value={`${card.progress.completionPercent}% (${card.progress.completedChapters}/${card.progress.totalChapters})`}
        />
        <Stat
          label={t("teacher.dashboard.avgScore")}
          value={
            card.progress.averageScore != null
              ? `${card.progress.averageScore}%`
              : "—"
          }
        />
      </section>

      <TeacherAiAnalysisPanel studentId={studentId} courseId={courseId} />

      <div>
        <Button asChild size="sm" variant="outline">
          <Link
            href={`/teacher/assignments?studentId=${encodeURIComponent(studentId)}&courseId=${encodeURIComponent(courseId)}`}
          >
            <ClipboardList className="h-4 w-4" />
            {t("teacher.card.assignHomework")}
          </Link>
        </Button>
      </div>

      <section className="space-y-2">
        <h3 className="font-semibold">{t("teacher.card.profile")}</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>
            {t("teacher.card.goal")}:{" "}
            <span className="text-foreground">
              {card.student.goal || "—"}
            </span>
          </li>
          <li>
            {t("teacher.card.dailyGoal")}:{" "}
            <span className="text-foreground">
              {card.student.dailyGoalMinutes != null
                ? t("dashboard.minutesGoal", {
                    n: card.student.dailyGoalMinutes,
                  })
                : "—"}
            </span>
          </li>
          <li>
            {t("teacher.dashboard.weekActivity", { minutes: weekMinutes })}
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">{t("teacher.card.difficultTopics")}</h3>
        {card.difficultTopics.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            {t("teacher.card.noTopics")}
          </p>
        ) : (
          <ul className="space-y-1 text-sm">
            {card.difficultTopics.map((topic) => (
              <li key={`${topic.type}-${topic.topic}`}>
                <span className="font-medium">{topic.topic}</span>
                <span className="text-muted-foreground">
                  {" "}
                  · {topic.type} ·{" "}
                  {t(REASON_KEYS[topic.reason] ?? "teacher.card.reason.lowConfidence")}
                  {topic.confidence != null
                    ? ` · ${Math.round(topic.confidence)}%`
                    : ""}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">{t("teacher.card.progress")}</h3>
        {card.chapters.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            {t("teacher.card.noProgress")}
          </p>
        ) : (
          <ul className="space-y-1 text-sm max-h-64 overflow-y-auto">
            {card.chapters.map((ch) => (
              <li
                key={ch.chapterSlug}
                className="flex flex-wrap justify-between gap-2 border-b border-border/50 py-1.5"
              >
                <span>{ch.title}</span>
                <span className="text-muted-foreground">
                  {ch.status}
                  {ch.score ? ` · ${ch.score}%` : ""}
                  {ch.completedAt
                    ? ` · ${ch.completedAt.slice(0, 10)}`
                    : ""}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">{t("teacher.card.activity")}</h3>
        {card.activityHistory.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            {t("teacher.card.noActivity")}
          </p>
        ) : (
          <ul className="space-y-1 text-sm max-h-48 overflow-y-auto">
            {card.activityHistory.map((d) => (
              <li key={d.date} className="flex justify-between gap-2">
                <span>{d.date}</span>
                <span className="text-muted-foreground">
                  {d.minutesStudied} min · {d.lessonsCompleted}{" "}
                  {t("teacher.card.lessons")}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">{t("teacher.card.recentExercises")}</h3>
        {card.recentExercises.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            {t("teacher.card.noExercises")}
          </p>
        ) : (
          <ul className="space-y-2 text-sm max-h-72 overflow-y-auto">
            {card.recentExercises.map((ex) => (
              <li key={ex.id} className="border-b border-border/50 pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={ex.correct ? "secondary" : "destructive"}>
                    {ex.correct
                      ? t("teacher.card.correct")
                      : t("teacher.card.incorrect")}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {ex.exerciseType}
                    {ex.level ? ` · ${ex.level}` : ""}
                    {` · ${ex.createdAt.slice(0, 10)}`}
                  </span>
                </div>
                <p className="mt-0.5">{ex.exercise || "—"}</p>
                {ex.userAnswer && (
                  <p className="text-muted-foreground">
                    {t("teacher.card.answer")}: {ex.userAnswer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">{t("teacher.dashboard.recentMistakes")}</h3>
        {card.recentMistakes.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            {t("teacher.dashboard.noMistakes")}
          </p>
        ) : (
          <ul className="space-y-1 text-sm max-h-56 overflow-y-auto">
            {card.recentMistakes.map((m) => (
              <li key={m.id} className="text-muted-foreground">
                <span className="text-foreground">
                  {m.exercise || m.exerciseType || "—"}
                </span>
                {m.feedback ? ` — ${m.feedback}` : ""}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium mt-0.5 break-words">{value}</p>
    </div>
  );
}
