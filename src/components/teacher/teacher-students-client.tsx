"use client";

import * as React from "react";
import { Loader2, UserMinus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

type Row = {
  link: {
    id: string;
    course_id: string;
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
  const [initialLoading, setInitialLoading] = React.useState(true);

  const load = React.useCallback(
    async (opts?: { quiet?: boolean }) => {
      if (!opts?.quiet) setInitialLoading(true);
      try {
        const q =
          courseId === "all"
            ? ""
            : `?courseId=${encodeURIComponent(courseId)}`;
        const res = await fetch(`/api/teacher/students${q}`);
        const data = (await res.json()) as {
          students?: Row[];
          error?: string;
        };
        if (!res.ok) throw new Error(data.error || "fail");
        setRows(data.students ?? []);
      } catch {
        toast.error(translate("teacher.students.loadFail", language));
      } finally {
        setInitialLoading(false);
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
              : c === "spanish"
                ? "Español"
                : "English"}
          </button>
        ))}
      </div>

      <div className="min-h-[12rem]">
        {initialLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : rows.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            {t("teacher.students.empty")}
          </p>
        ) : (
          <div className="space-y-3">
            {rows.map(({ link, student }) => (
              <Card key={link.id}>
                <CardContent className="p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold truncate">
                      {student?.name || student?.email || link.id}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {student?.email}
                    </p>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      <Badge variant="level">{link.course_id}</Badge>
                      {student?.level && (
                        <Badge variant="level">{student.level}</Badge>
                      )}
                      <Badge variant="secondary">{link.role}</Badge>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => revoke(link.id)}
                  >
                    <UserMinus className="h-4 w-4" />
                    {t("teacher.students.revoke")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
