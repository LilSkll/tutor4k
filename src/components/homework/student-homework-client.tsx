"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { getCourseTitle } from "@/config/courses";
import { resolveHomeworkChapterTitle } from "@/lib/homework-chapter-title";
import { EmptyState } from "@/components/shared/empty-state";
import type {
  NotificationDTO,
  TeacherAssignmentDTO,
  WritingAssignmentPayload,
} from "@/types/assignments";

function kindBadge(kind: TeacherAssignmentDTO["kind"], t: (k: string) => string) {
  if (kind === "chapter") return t("homework.kindChapter");
  if (kind === "writing") return t("homework.kindWriting");
  return t("homework.kindExercises");
}

export function StudentHomeworkClient() {
  const language = useInterfaceLanguage();
  const t = React.useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      translate(key, language, vars),
    [language],
  );

  const [assignments, setAssignments] = React.useState<TeacherAssignmentDTO[]>(
    [],
  );
  const [notifications, setNotifications] = React.useState<NotificationDTO[]>(
    [],
  );
  const [loading, setLoading] = React.useState(true);
  const [drafts, setDrafts] = React.useState<Record<string, string>>({});
  const [submittingId, setSubmittingId] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/student/homework");
      const data = (await res.json()) as {
        assignments?: TeacherAssignmentDTO[];
        notifications?: NotificationDTO[];
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "fail");
      setAssignments(data.assignments ?? []);
      setNotifications(data.notifications ?? []);

      const unread = (data.notifications ?? []).filter((n) => !n.readAt);
      if (unread.length > 0) {
        void fetch("/api/student/notifications/read", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids: unread.map((n) => n.id) }),
        });
      }
    } catch {
      toast.error(t("homework.loadFail"));
    } finally {
      setLoading(false);
    }
  }, [t]);

  React.useEffect(() => {
    void load();
  }, [load]);

  const complete = async (id: string) => {
    try {
      const res = await fetch(`/api/student/homework/${id}/complete`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("fail");
      toast.success(t("homework.completed"));
      window.dispatchEvent(new Event("homework:changed"));
      await load();
    } catch {
      toast.error(t("homework.completeFail"));
    }
  };

  const submitWriting = async (id: string) => {
    const body = (drafts[id] ?? "").trim();
    if (body.length < 20) {
      toast.error(t("homework.writingTooShort"));
      return;
    }
    setSubmittingId(id);
    try {
      const res = await fetch(`/api/student/homework/${id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      });
      if (!res.ok) throw new Error("fail");
      toast.success(t("homework.writingSubmitted"));
      window.dispatchEvent(new Event("homework:changed"));
      setDrafts((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      await load();
    } catch {
      toast.error(t("homework.writingSubmitFail"));
    } finally {
      setSubmittingId(null);
    }
  };

  const unreadCount = notifications.filter((n) => !n.readAt).length;
  const openAssigned = assignments.filter((a) => a.status === "assigned").length;

  return (
    <div className="container max-w-2xl py-6 md:py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("homework.title")}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t("homework.subtitle")}
          {openAssigned > 0
            ? ` · ${t("homework.openAssigned", { count: openAssigned })}`
            : ""}
          {unreadCount > 0
            ? ` · ${t("homework.unread", { count: unreadCount })}`
            : ""}
        </p>
      </div>

      {loading ? (
        <div className="space-y-3 py-2" aria-busy="true">
          <div className="h-28 rounded-xl bg-muted/60 animate-pulse" />
          <div className="h-28 rounded-xl bg-muted/60 animate-pulse" />
        </div>
      ) : assignments.length === 0 ? (
        <EmptyState
          title={t("homework.emptyTitle")}
          description={t("homework.empty")}
          actionLabel={t("homework.emptyAction")}
          actionHref="/chapters"
        />
      ) : (
        <ul className="space-y-3">
          {assignments.map((a) => {
            const note =
              "note" in a.payload && typeof a.payload.note === "string"
                ? a.payload.note
                : null;
            const writing =
              a.kind === "writing"
                ? (a.payload as WritingAssignmentPayload)
                : null;
            const chapterSlugs =
              a.kind === "chapter" && "chapterSlugs" in a.payload
                ? a.payload.chapterSlugs
                : [];

            return (
              <li
                key={a.id}
                className="rounded-xl border border-border p-4 space-y-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{getCourseTitle(a.courseId)}</Badge>
                  <Badge variant="level">{kindBadge(a.kind, t)}</Badge>
                  <Badge
                    variant={a.status === "completed" ? "success" : "outline"}
                  >
                    {t(`homework.status.${a.status}`)}
                  </Badge>
                </div>
                <p className="text-sm">
                  {t("homework.fromTeacher", {
                    name: a.teacherName || "—",
                  })}
                </p>

                {a.kind === "chapter" ? (
                  <ul className="text-sm space-y-1">
                    {chapterSlugs.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/chapters/${encodeURIComponent(slug)}?courseId=${encodeURIComponent(a.courseId)}`}
                          className="text-primary hover:underline"
                        >
                          {resolveHomeworkChapterTitle(
                            a.courseId,
                            slug,
                            language,
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : a.kind === "writing" && writing ? (
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {t("homework.writingPrompt")}
                      </p>
                      <p className="text-sm whitespace-pre-wrap">
                        {writing.prompt}
                      </p>
                    </div>
                    {writing.grammarTopicSlug && (
                      <p className="text-sm">
                        <span className="text-muted-foreground">
                          {t("homework.grammarLink")}:{" "}
                        </span>
                        <Link
                          href={`/grammar?topic=${encodeURIComponent(writing.grammarTopicSlug)}`}
                          className="text-primary hover:underline"
                        >
                          {writing.grammarTopicTitle ||
                            writing.grammarTopicSlug}
                        </Link>
                      </p>
                    )}
                    {a.submission ? (
                      <div className="rounded-lg border border-border bg-muted/30 p-3">
                        <p className="text-xs font-medium text-muted-foreground mb-1">
                          {t("homework.writingYourAnswer")}
                        </p>
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">
                          {a.submission.body}
                        </p>
                      </div>
                    ) : a.status === "assigned" ? (
                      <div className="space-y-2">
                        <Textarea
                          className="min-h-[140px]"
                          placeholder={t("homework.writingPlaceholder")}
                          value={drafts[a.id] ?? ""}
                          onChange={(e) =>
                            setDrafts((prev) => ({
                              ...prev,
                              [a.id]: e.target.value,
                            }))
                          }
                          maxLength={20000}
                        />
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-xs text-muted-foreground">
                            {t("homework.writingCharCount", {
                              n: (drafts[a.id] ?? "").length,
                            })}
                          </p>
                          <Button
                            size="sm"
                            disabled={
                              submittingId === a.id ||
                              (drafts[a.id] ?? "").trim().length < 20
                            }
                            onClick={() => void submitWriting(a.id)}
                          >
                            {submittingId === a.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Check className="h-4 w-4" />
                            )}
                            {t("homework.writingSubmit")}
                          </Button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {t("homework.exerciseHint", {
                      level:
                        ("level" in a.payload && a.payload.level) || "—",
                      count:
                        ("count" in a.payload && a.payload.count) || 5,
                    })}{" "}
                    <Link
                      href="/exercises"
                      className="text-primary hover:underline"
                    >
                      {t("homework.openExercises")}
                    </Link>
                  </p>
                )}

                {note && (
                  <p className="text-sm text-muted-foreground">{note}</p>
                )}
                {a.dueAt && (
                  <p className="text-xs text-muted-foreground">
                    {t("homework.due", {
                      date: a.dueAt.slice(0, 16).replace("T", " "),
                    })}
                  </p>
                )}
                {a.status === "assigned" && a.kind !== "writing" && (
                  <Button size="sm" onClick={() => void complete(a.id)}>
                    <Check className="h-4 w-4" />
                    {t("homework.markDone")}
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
