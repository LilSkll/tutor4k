"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, Plus, Sparkles, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { getCourseTitle } from "@/config/courses";
import type {
  TeacherAssignmentDTO,
  TeacherAssignmentKind,
  WritingAssignmentPayload,
} from "@/types/assignments";
import { EmptyState } from "@/components/shared/empty-state";

type StudentOpt = {
  id: string;
  name: string;
  email: string;
  courseId: string;
};

type ChapterOpt = {
  slug: string;
  title: string;
  level: string;
  number: number;
};

type GrammarOpt = {
  slug: string;
  title: string;
  level: string;
  exam: string | null;
  category: string;
};

function kindLabel(
  kind: TeacherAssignmentKind,
  t: (k: string) => string,
): string {
  if (kind === "chapter") return t("teacher.assignments.kindChapter");
  if (kind === "writing") return t("teacher.assignments.kindWriting");
  return t("teacher.assignments.kindExercises");
}

export function TeacherAssignmentsClient() {
  const language = useInterfaceLanguage();
  const searchParams = useSearchParams();
  const t = React.useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      translate(key, language, vars),
    [language],
  );

  const [assignments, setAssignments] = React.useState<TeacherAssignmentDTO[]>(
    [],
  );
  const [students, setStudents] = React.useState<StudentOpt[]>([]);
  const [chapters, setChapters] = React.useState<ChapterOpt[]>([]);
  const [grammarTopics, setGrammarTopics] = React.useState<GrammarOpt[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [creating, setCreating] = React.useState(false);
  const [analyzingId, setAnalyzingId] = React.useState<string | null>(null);

  const [courseId, setCourseId] = React.useState<"spanish" | "english">(
    "spanish",
  );
  const [studentId, setStudentId] = React.useState("");
  const [kind, setKind] = React.useState<TeacherAssignmentKind>("chapter");
  const [selectedSlugs, setSelectedSlugs] = React.useState<string[]>([]);
  const [exerciseType, setExerciseType] = React.useState("mixed");
  const [level, setLevel] = React.useState("A1");
  const [count, setCount] = React.useState(5);
  const [writingPrompt, setWritingPrompt] = React.useState("");
  const [grammarTopicSlug, setGrammarTopicSlug] = React.useState("");
  const [dueAt, setDueAt] = React.useState("");
  const [note, setNote] = React.useState("");

  const prefillStudent = searchParams.get("studentId");
  const prefillCourse = searchParams.get("courseId");

  React.useEffect(() => {
    if (prefillCourse === "spanish" || prefillCourse === "english") {
      setCourseId(prefillCourse);
    }
    if (prefillStudent) setStudentId(prefillStudent);
  }, [prefillStudent, prefillCourse]);

  const loadGen = React.useRef(0);

  const load = React.useCallback(async () => {
    const gen = ++loadGen.current;
    setLoading(true);
    try {
      const [aRes, sRes, cRes, gRes] = await Promise.all([
        fetch(`/api/teacher/assignments?courseId=${courseId}`),
        fetch(`/api/teacher/students?courseId=${courseId}`),
        fetch(`/api/teacher/chapters?courseId=${courseId}`),
        fetch(`/api/teacher/grammar-topics?courseId=${courseId}`),
      ]);
      const aData = (await aRes.json()) as {
        assignments?: TeacherAssignmentDTO[];
        error?: string;
      };
      const sData = (await sRes.json()) as {
        students?: Array<{
          link: { student_id: string; course_id: string };
          student: { id: string; name: string; email: string } | null;
        }>;
      };
      const cData = (await cRes.json()) as { chapters?: ChapterOpt[] };
      const gData = (await gRes.json()) as { topics?: GrammarOpt[] };
      if (!aRes.ok) throw new Error(aData.error || "fail");
      if (gen !== loadGen.current) return;
      setAssignments(aData.assignments ?? []);
      setStudents(
        (sData.students ?? [])
          .filter((r) => r.student)
          .map((r) => ({
            id: r.link.student_id,
            name: r.student!.name || r.student!.email,
            email: r.student!.email,
            courseId: r.link.course_id,
          })),
      );
      setChapters(cData.chapters ?? []);
      setGrammarTopics(gData.topics ?? []);
    } catch {
      if (gen !== loadGen.current) return;
      toast.error(t("teacher.assignments.loadFail"));
    } finally {
      if (gen === loadGen.current) setLoading(false);
    }
  }, [courseId, t]);

  React.useEffect(() => {
    void load();
    setSelectedSlugs([]);
    setGrammarTopicSlug("");
  }, [load]);

  const toggleSlug = (slug: string) => {
    setSelectedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  };

  const create = async () => {
    if (!studentId) {
      toast.error(t("teacher.assignments.pickStudent"));
      return;
    }
    if (kind === "writing" && writingPrompt.trim().length < 8) {
      toast.error(t("teacher.assignments.writingPrompt"));
      return;
    }
    setCreating(true);
    try {
      const payload =
        kind === "chapter"
          ? { chapterSlugs: selectedSlugs, note: note || undefined }
          : kind === "writing"
            ? {
                prompt: writingPrompt.trim(),
                grammarTopicSlug: grammarTopicSlug || undefined,
                note: note || undefined,
              }
            : {
                type: exerciseType,
                level,
                count,
                note: note || undefined,
              };
      const res = await fetch("/api/teacher/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId,
          courseId,
          kind,
          payload,
          dueAt: dueAt ? new Date(dueAt).toISOString() : null,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "fail");
      toast.success(t("teacher.assignments.created"));
      setNote("");
      setSelectedSlugs([]);
      setWritingPrompt("");
      setGrammarTopicSlug("");
      await load();
    } catch {
      toast.error(t("teacher.assignments.createFail"));
    } finally {
      setCreating(false);
    }
  };

  const cancel = async (id: string) => {
    if (!confirm(t("teacher.assignments.cancelConfirm"))) return;
    try {
      const res = await fetch(`/api/teacher/assignments/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("fail");
      toast.success(t("teacher.assignments.cancelled"));
      await load();
    } catch {
      toast.error(t("teacher.assignments.cancelFail"));
    }
  };

  const runAi = async (id: string) => {
    setAnalyzingId(id);
    try {
      const res = await fetch(`/api/teacher/assignments/${id}/ai-analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: language }),
      });
      const data = (await res.json()) as {
        submission?: TeacherAssignmentDTO["submission"];
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "fail");
      setAssignments((prev) =>
        prev.map((a) =>
          a.id === id ? { ...a, submission: data.submission ?? a.submission } : a,
        ),
      );
    } catch {
      toast.error(t("teacher.assignments.aiAssistFail"));
    } finally {
      setAnalyzingId(null);
    }
  };

  const describe = (a: TeacherAssignmentDTO) => {
    if (a.kind === "chapter") {
      const slugs =
        "chapterSlugs" in a.payload ? a.payload.chapterSlugs : [];
      return slugs.join(", ") || "—";
    }
    if (a.kind === "writing") {
      const p = a.payload as WritingAssignmentPayload;
      const topic = p.grammarTopicSlug
        ? grammarTopics.find((g) => g.slug === p.grammarTopicSlug)?.title ||
          p.grammarTopicSlug
        : null;
      return topic ? `${p.prompt} · ${topic}` : p.prompt;
    }
    const p = a.payload as {
      type?: string;
      level?: string;
      count?: number;
    };
    return `${p.level ?? "—"} · ${p.type ?? "mixed"} · ×${p.count ?? "?"}`;
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {t("teacher.assignments.title")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("teacher.assignments.subtitle")}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["spanish", "english"] as const).map((c) => (
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
            {getCourseTitle(c)}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border p-4 space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Plus className="h-4 w-4" />
          {t("teacher.assignments.createTitle")}
        </h3>

        <div className="space-y-2">
          <Label>{t("teacher.assignments.student")}</Label>
          <select
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          >
            <option value="">{t("teacher.assignments.pickStudent")}</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.email})
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-2">
          {(["chapter", "exercise_set", "writing"] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              className={
                kind === k
                  ? "rounded-lg border border-primary bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                  : "rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground"
              }
            >
              {kindLabel(k, t)}
            </button>
          ))}
        </div>

        {kind === "chapter" ? (
          <div className="max-h-48 overflow-y-auto space-y-1 border border-border rounded-lg p-2">
            {chapters.length === 0 ? (
              <p className="text-sm text-muted-foreground p-2">
                {t("teacher.assignments.noChapters")}
              </p>
            ) : (
              chapters.map((ch) => (
                <label
                  key={ch.slug}
                  className="flex items-center gap-2 text-sm px-2 py-1 rounded hover:bg-muted cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedSlugs.includes(ch.slug)}
                    onChange={() => toggleSlug(ch.slug)}
                  />
                  <span>
                    {ch.number}. {ch.title}{" "}
                    <span className="text-muted-foreground">({ch.level})</span>
                  </span>
                </label>
              ))
            )}
          </div>
        ) : kind === "writing" ? (
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>{t("teacher.assignments.writingPrompt")}</Label>
              <textarea
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={writingPrompt}
                onChange={(e) => setWritingPrompt(e.target.value)}
                placeholder={t("teacher.assignments.writingPromptPlaceholder")}
                maxLength={4000}
              />
            </div>
            <div className="space-y-1">
              <Label>{t("teacher.assignments.grammarTopic")}</Label>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={grammarTopicSlug}
                onChange={(e) => setGrammarTopicSlug(e.target.value)}
              >
                <option value="">{t("teacher.assignments.grammarNone")}</option>
                {grammarTopics.length === 0 ? (
                  <option value="" disabled>
                    {t("teacher.assignments.noGrammar")}
                  </option>
                ) : (
                  grammarTopics.map((g) => (
                    <option key={g.slug} value={g.slug}>
                      {g.exam ? `[${g.exam}] ` : ""}
                      {g.title} ({g.level})
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <Label>{t("teacher.assignments.level")}</Label>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                {["A1", "A2", "B1", "B2", "C1", "C2"].map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <Label>{t("teacher.assignments.exerciseType")}</Label>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={exerciseType}
                onChange={(e) => setExerciseType(e.target.value)}
              >
                <option value="mixed">mixed</option>
                <option value="multiple_choice">multiple_choice</option>
                <option value="fill_blank">fill_blank</option>
                <option value="translation">translation</option>
                <option value="error_correction">error_correction</option>
              </select>
            </div>
            <div className="space-y-1">
              <Label>{t("teacher.assignments.count")}</Label>
              <Input
                type="number"
                min={1}
                max={30}
                value={count}
                onChange={(e) => setCount(Number(e.target.value) || 5)}
              />
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label>{t("teacher.assignments.dueAt")}</Label>
            <Input
              type="datetime-local"
              value={dueAt}
              onChange={(e) => setDueAt(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>{t("teacher.assignments.note")}</Label>
            <Input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={t("teacher.assignments.notePlaceholder")}
            />
          </div>
        </div>

        <Button onClick={() => void create()} disabled={creating}>
          {creating && <Loader2 className="h-4 w-4 animate-spin" />}
          {t("teacher.assignments.createBtn")}
        </Button>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">{t("teacher.assignments.listTitle")}</h3>
        {loading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : assignments.length === 0 ? (
          <EmptyState
            title={t("teacher.assignments.emptyTitle")}
            description={t("teacher.assignments.empty")}
            className="py-8"
          />
        ) : (
          <ul className="space-y-3">
            {assignments.map((a) => (
              <li
                key={a.id}
                className="rounded-xl border border-border p-4 space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap gap-2 items-center">
                      <p className="font-medium">
                        {a.studentName || a.studentEmail || a.studentId}
                      </p>
                      <Badge variant="secondary">{kindLabel(a.kind, t)}</Badge>
                      <Badge
                        variant={
                          a.status === "completed"
                            ? "success"
                            : a.status === "cancelled"
                              ? "outline"
                              : "level"
                        }
                      >
                        {t(`teacher.assignments.status.${a.status}`)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground break-words whitespace-pre-wrap">
                      {describe(a)}
                    </p>
                    {a.dueAt && (
                      <p className="text-xs text-muted-foreground">
                        {t("teacher.assignments.dueLabel", {
                          date: a.dueAt.slice(0, 16).replace("T", " "),
                        })}
                      </p>
                    )}
                  </div>
                  {a.status === "assigned" && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => void cancel(a.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      {t("teacher.assignments.cancel")}
                    </Button>
                  )}
                </div>

                {a.kind === "writing" && (
                  <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-2">
                    {a.submission ? (
                      <>
                        <p className="text-xs font-medium text-muted-foreground">
                          {t("teacher.assignments.submissionLabel")}
                        </p>
                        <p className="text-sm whitespace-pre-wrap">
                          {a.submission.body}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t("teacher.assignments.aiAssistHint")}
                        </p>
                        {a.submission.aiAnalysis ? (
                          <div className="rounded-md border border-border bg-background p-3 text-sm whitespace-pre-wrap">
                            <p className="text-xs font-medium mb-2 flex items-center gap-1">
                              <Sparkles className="h-3.5 w-3.5 text-primary" />
                              {t("teacher.assignments.aiAssist")}
                            </p>
                            {a.submission.aiAnalysis}
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled={analyzingId === a.id}
                            onClick={() => void runAi(a.id)}
                          >
                            {analyzingId === a.id ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                {t("teacher.assignments.aiAssistBusy")}
                              </>
                            ) : (
                              <>
                                <Sparkles className="h-4 w-4" />
                                {t("teacher.assignments.aiAssistRun")}
                              </>
                            )}
                          </Button>
                        )}
                        {a.submission.aiAnalysis && (
                          <Button
                            size="sm"
                            variant="ghost"
                            disabled={analyzingId === a.id}
                            onClick={() => void runAi(a.id)}
                          >
                            {analyzingId === a.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Sparkles className="h-4 w-4" />
                            )}
                            {t("teacher.assignments.aiAssistRun")}
                          </Button>
                        )}
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {t("teacher.assignments.waitingSubmission")}
                      </p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
