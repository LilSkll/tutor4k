"use client";

import * as React from "react";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { getCourseTitle } from "@/config/courses";
import type { SchoolDTO, SchoolMemberDTO, TeacherGroupDTO } from "@/types/school";

export function TeacherSchoolClient() {
  const language = useInterfaceLanguage();
  const t = React.useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      translate(key, language, vars),
    [language],
  );

  const [schools, setSchools] = React.useState<SchoolDTO[]>([]);
  const [schoolId, setSchoolId] = React.useState<string>("");
  const [members, setMembers] = React.useState<SchoolMemberDTO[]>([]);
  const [groups, setGroups] = React.useState<TeacherGroupDTO[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [schoolName, setSchoolName] = React.useState("");
  const [groupName, setGroupName] = React.useState("");
  const [groupCourse, setGroupCourse] = React.useState<"spanish" | "english">(
    "spanish",
  );
  const [memberEmail, setMemberEmail] = React.useState("");
  const [busy, setBusy] = React.useState(false);

  const activeSchool = schools.find((s) => s.id === schoolId) ?? null;

  const load = React.useCallback(async () => {
    setLoading(true);
    try {
      const [sRes, gRes] = await Promise.all([
        fetch("/api/teacher/schools"),
        fetch("/api/teacher/groups"),
      ]);
      const sData = (await sRes.json()) as {
        schools?: SchoolDTO[];
        error?: string;
      };
      const gData = (await gRes.json()) as { groups?: TeacherGroupDTO[] };
      if (!sRes.ok) throw new Error(sData.error || "fail");
      const list = sData.schools ?? [];
      setSchools(list);
      setGroups(gData.groups ?? []);
      setSchoolId((prev) => prev || list[0]?.id || "");
    } catch {
      toast.error(t("teacher.school.loadFail"));
    } finally {
      setLoading(false);
    }
  }, [t]);

  React.useEffect(() => {
    void load();
  }, [load]);

  React.useEffect(() => {
    if (!schoolId) {
      setMembers([]);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/teacher/schools/${encodeURIComponent(schoolId)}/members`,
        );
        const data = (await res.json()) as { members?: SchoolMemberDTO[] };
        if (!cancelled) setMembers(data.members ?? []);
      } catch {
        if (!cancelled) setMembers([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [schoolId]);

  const createSchool = async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/teacher/schools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: schoolName }),
      });
      const data = (await res.json()) as { school?: SchoolDTO; error?: string };
      if (!res.ok) throw new Error(data.error || "fail");
      toast.success(t("teacher.school.created"));
      setSchoolName("");
      await load();
      if (data.school) setSchoolId(data.school.id);
    } catch {
      toast.error(t("teacher.school.createFail"));
    } finally {
      setBusy(false);
    }
  };

  const addMember = async () => {
    if (!schoolId || !memberEmail.trim()) return;
    setBusy(true);
    try {
      const res = await fetch(
        `/api/teacher/schools/${encodeURIComponent(schoolId)}/members`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: memberEmail, memberRole: "teacher" }),
        },
      );
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "fail");
      toast.success(t("teacher.school.memberAdded"));
      setMemberEmail("");
      const mRes = await fetch(
        `/api/teacher/schools/${encodeURIComponent(schoolId)}/members`,
      );
      const mData = (await mRes.json()) as { members?: SchoolMemberDTO[] };
      setMembers(mData.members ?? []);
    } catch (err) {
      const msg = (err as Error).message;
      toast.error(
        msg === "USER_NOT_FOUND"
          ? t("teacher.school.userNotFound")
          : msg === "NOT_A_TEACHER"
            ? t("teacher.school.notTeacher")
            : t("teacher.school.memberFail"),
      );
    } finally {
      setBusy(false);
    }
  };

  const createGroup = async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/teacher/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: groupName,
          courseId: groupCourse,
          schoolId: schoolId || null,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "fail");
      toast.success(t("teacher.school.groupCreated"));
      setGroupName("");
      await load();
    } catch {
      toast.error(t("teacher.school.groupFail"));
    } finally {
      setBusy(false);
    }
  };

  const deleteGroup = async (id: string) => {
    if (!confirm(t("teacher.school.groupDeleteConfirm"))) return;
    try {
      const res = await fetch(`/api/teacher/groups/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("fail");
      toast.success(t("teacher.school.groupDeleted"));
      await load();
    } catch {
      toast.error(t("teacher.school.groupDeleteFail"));
    }
  };

  const visibleGroups = schoolId
    ? groups.filter((g) => g.schoolId === schoolId || !g.schoolId)
    : groups;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {t("teacher.school.title")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("teacher.school.subtitle")}
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <>
          <section className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="font-semibold">{t("teacher.school.createSchool")}</h3>
            <div className="flex flex-wrap gap-2">
              <Input
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder={t("teacher.school.schoolNamePh")}
                className="max-w-xs"
              />
              <Button onClick={() => void createSchool()} disabled={busy}>
                {busy && <Loader2 className="h-4 w-4 animate-spin" />}
                <Plus className="h-4 w-4" />
                {t("teacher.school.createBtn")}
              </Button>
            </div>
            {schools.length > 0 && (
              <div className="space-y-2">
                <Label>{t("teacher.school.activeSchool")}</Label>
                <select
                  className="w-full max-w-md rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={schoolId}
                  onChange={(e) => setSchoolId(e.target.value)}
                >
                  {schools.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.myRole})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </section>

          {activeSchool && (
            <section className="rounded-xl border border-border p-4 space-y-3">
              <h3 className="font-semibold">
                {t("teacher.school.members")} — {activeSchool.name}
              </h3>
              {(activeSchool.myRole === "owner" ||
                activeSchool.myRole === "admin") && (
                <div className="flex flex-wrap gap-2">
                  <Input
                    type="email"
                    value={memberEmail}
                    onChange={(e) => setMemberEmail(e.target.value)}
                    placeholder={t("teacher.school.memberEmailPh")}
                    className="max-w-xs"
                  />
                  <Button
                    variant="outline"
                    onClick={() => void addMember()}
                    disabled={busy}
                  >
                    {t("teacher.school.addMember")}
                  </Button>
                </div>
              )}
              <ul className="space-y-2 text-sm">
                {members.map((m) => (
                  <li
                    key={m.id}
                    className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 py-2"
                  >
                    <span>
                      {m.name || m.email || m.userId}
                      <span className="text-muted-foreground">
                        {" "}
                        · {m.email}
                      </span>
                    </span>
                    <Badge variant="secondary">{m.memberRole}</Badge>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="font-semibold">{t("teacher.school.groups")}</h3>
            <p className="text-xs text-muted-foreground">
              {t("teacher.school.groupsHint")}
            </p>
            <div className="grid sm:grid-cols-3 gap-2">
              <Input
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder={t("teacher.school.groupNamePh")}
              />
              <select
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={groupCourse}
                onChange={(e) =>
                  setGroupCourse(e.target.value as "spanish" | "english")
                }
              >
                <option value="spanish">{getCourseTitle("spanish")}</option>
                <option value="english">{getCourseTitle("english")}</option>
              </select>
              <Button onClick={() => void createGroup()} disabled={busy}>
                <Plus className="h-4 w-4" />
                {t("teacher.school.createGroup")}
              </Button>
            </div>
            {visibleGroups.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {t("teacher.school.noGroups")}
              </p>
            ) : (
              <ul className="space-y-2">
                {visibleGroups.map((g) => (
                  <li
                    key={g.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-sm"
                  >
                    <div>
                      <p className="font-medium">{g.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {getCourseTitle(g.courseId)} ·{" "}
                        {t("teacher.school.studentsInGroup", {
                          count: g.studentCount,
                        })}
                        {g.schoolId ? "" : ` · ${t("teacher.school.personal")}`}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => void deleteGroup(g.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
}
