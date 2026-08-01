"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { getCourseTitle } from "@/config/courses";
import type {
  NotificationDTO,
  TeacherAssignmentDTO,
} from "@/types/assignments";

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
      await load();
    } catch {
      toast.error(t("homework.completeFail"));
    }
  };

  const describe = (a: TeacherAssignmentDTO) => {
    if (a.kind === "chapter") {
      const slugs =
        "chapterSlugs" in a.payload ? a.payload.chapterSlugs : [];
      return slugs;
    }
    return [] as string[];
  };

  const unreadCount = notifications.filter((n) => !n.readAt).length;

  return (
    <div className="container max-w-2xl py-6 md:py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("homework.title")}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t("homework.subtitle")}
          {unreadCount > 0
            ? ` · ${t("homework.unread", { count: unreadCount })}`
            : ""}
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : assignments.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-10">
          {t("homework.empty")}
        </p>
      ) : (
        <ul className="space-y-3">
          {assignments.map((a) => {
            const slugs = describe(a);
            const note =
              "note" in a.payload && typeof a.payload.note === "string"
                ? a.payload.note
                : null;
            return (
              <li
                key={a.id}
                className="rounded-xl border border-border p-4 space-y-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{getCourseTitle(a.courseId)}</Badge>
                  <Badge variant="level">
                    {a.kind === "chapter"
                      ? t("homework.kindChapter")
                      : t("homework.kindExercises")}
                  </Badge>
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
                    {slugs.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/chapters/${encodeURIComponent(slug)}?courseId=${encodeURIComponent(a.courseId)}`}
                          className="text-primary hover:underline"
                        >
                          {slug}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {t("homework.exerciseHint", {
                      level:
                        ("level" in a.payload && a.payload.level) || "—",
                      count:
                        ("count" in a.payload && a.payload.count) || 5,
                    })}{" "}
                    <Link href="/exercises" className="text-primary hover:underline">
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
                {a.status === "assigned" && (
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
