"use client";

import * as React from "react";
import Link from "next/link";
import { Loader2, UserMinus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { getCourseTitle } from "@/config/courses";
import { EmptyState } from "@/components/shared/empty-state";

type Row = {
  link: {
    id: string;
    student_id: string;
    course_id: string;
    group_id: string | null;
    role: string;
    accepted_at: string | null;
  };
  student: {
    id: string;
    name: string;
    email: string;
    level: string | null;
    last_active_date: string | null;
  } | null;
};

type GroupOpt = {
  id: string;
  name: string;
  courseId: string;
};

export function TeacherStudentsClient() {
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
  const [groups, setGroups] = React.useState<GroupOpt[]>([]);
  const [initialLoading, setInitialLoading] = React.useState(true);
  const loadGen = React.useRef(0);

  const load = React.useCallback(
    async (opts?: { quiet?: boolean }) => {
      const gen = ++loadGen.current;
      if (!opts?.quiet) setInitialLoading(true);
      try {
        const q =
          courseId === "all"
            ? ""
            : `?courseId=${encodeURIComponent(courseId)}`;
        const [res, gRes] = await Promise.all([
          fetch(`/api/teacher/students${q}`),
          fetch("/api/teacher/groups"),
        ]);
        const data = (await res.json()) as {
          students?: Row[];
          error?: string;
        };
        const gData = (await gRes.json()) as {
          groups?: Array<{ id: string; name: string; courseId: string }>;
        };
        if (!res.ok) throw new Error(data.error || "fail");
        if (gen !== loadGen.current) return;
        setRows(data.students ?? []);
        setGroups(gData.groups ?? []);
      } catch {
        if (gen !== loadGen.current) return;
        toast.error(translate("teacher.students.loadFail", language));
      } finally {
        if (gen === loadGen.current) setInitialLoading(false);
      }
    },
    [courseId, language],
  );

  React.useEffect(() => {
    void load();
  }, [load]);

  const revoke = async (id: string) => {
    if (!confirm(t("teacher.students.revokeConfirm"))) return;
    try {
      const res = await fetch(
        `/api/teacher/students?id=${encodeURIComponent(id)}`,
        { method: "DELETE" },
      );
      if (!res.ok) throw new Error("fail");
      toast.success(t("teacher.students.revoked"));
      await load({ quiet: true });
    } catch {
      toast.error(t("teacher.students.revokeFail"));
    }
  };

  const setGroup = async (linkId: string, groupId: string) => {
    try {
      const res = await fetch(
        `/api/teacher/links/${encodeURIComponent(linkId)}/group`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ groupId: groupId || null }),
        },
      );
      if (!res.ok) throw new Error("fail");
      toast.success(t("teacher.students.groupUpdated"));
      await load({ quiet: true });
    } catch {
      toast.error(t("teacher.students.groupFail"));
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {t("teacher.students.title")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("teacher.students.subtitle")}
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
                ? "rounded-full px-3 py-1 text-sm font-semibold bg-primary text-primary-foreground"
                : "rounded-full px-3 py-1 text-sm border border-border"
            }
          >
            {c === "all"
              ? t("teacher.students.allCourses")
              : getCourseTitle(c)}
          </button>
        ))}
      </div>

      <div className="min-h-[12rem]">
        {initialLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : rows.length === 0 ? (
          <EmptyState
            title={t("teacher.students.emptyTitle")}
            description={t("teacher.students.empty")}
            actionLabel={t("teacher.dashboard.emptyAction")}
            actionHref="/teacher/invites"
          />
        ) : (
          <div className="space-y-3">
            {rows.map(({ link, student }) => (
              <Card key={link.id}>
                <CardContent className="p-4 flex items-center justify-between gap-3">
                  <Link
                    href={`/teacher/students/${encodeURIComponent(link.student_id)}?courseId=${encodeURIComponent(link.course_id)}`}
                    className="min-w-0 flex-1 hover:opacity-90"
                  >
                    <p className="font-semibold truncate">
                      {student?.name || student?.email || link.id}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {student?.email}
                    </p>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      <Badge variant="level">
                        {getCourseTitle(link.course_id)}
                      </Badge>
                      {student?.level && (
                        <Badge variant="level">{student.level}</Badge>
                      )}
                      <Badge variant="secondary">{link.role}</Badge>
                    </div>
                    <p className="text-xs text-primary mt-1">
                      {t("teacher.students.openCard")}
                    </p>
                  </Link>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <select
                      className="rounded-md border border-input bg-background px-2 py-1 text-xs max-w-[10rem]"
                      value={link.group_id ?? ""}
                      onChange={(e) => void setGroup(link.id, e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option value="">
                        {t("teacher.students.noGroup")}
                      </option>
                      {groups
                        .filter((g) => g.courseId === link.course_id)
                        .map((g) => (
                          <option key={g.id} value={g.id}>
                            {g.name}
                          </option>
                        ))}
                    </select>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => revoke(link.id)}
                    >
                      <UserMinus className="h-4 w-4" />
                      {t("teacher.students.revoke")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
