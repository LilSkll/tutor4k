import { createHash } from "crypto";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { getCourse } from "@/config/courses";
import { generateWithSystemPrompt } from "@/server/ai/orchestrator";
import {
  buildTeacherCoachSystemPrompt,
  buildTeacherCoachUserPrompt,
} from "@/server/ai/prompts/teacher-coach";
import { getStudentCard } from "@/server/teacher/student-card";
import { assertCanViewStudent } from "@/server/teacher/links";
import type { InterfaceLanguage } from "@/types";
import type { TeacherAiReportDTO } from "@/types/teacher";

const STALE_MS = 24 * 60 * 60 * 1000;

type ReportRow = {
  id: string;
  student_id: string;
  course_id: string;
  locale: string;
  generated_at: string;
  summary: string;
  recommendations: unknown;
  weak_topics: unknown;
  next_steps: unknown;
  source_fingerprint: string;
};

function requireAdmin() {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    throw new Error("Service role is required for TeacherAiService.");
  }
  return admin;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((x): x is string => typeof x === "string").slice(0, 8);
}

function rowToDto(row: ReportRow, meta: { cached: boolean; stale: boolean }): TeacherAiReportDTO {
  return {
    id: row.id,
    studentId: row.student_id,
    courseId: row.course_id,
    locale: row.locale,
    generatedAt: row.generated_at,
    summary: row.summary ?? "",
    recommendations: asStringArray(row.recommendations),
    weakTopics: asStringArray(row.weak_topics),
    nextSteps: asStringArray(row.next_steps),
    sourceFingerprint: row.source_fingerprint,
    cached: meta.cached,
    stale: meta.stale,
  };
}

function fingerprintEvidence(payload: unknown): string {
  const json = JSON.stringify(payload);
  return createHash("sha256").update(json).digest("hex");
}

function buildEvidence(card: Awaited<ReturnType<typeof getStudentCard>>) {
  const weekMinutes = card.weekActivity.reduce(
    (s, d) => s + d.minutesStudied,
    0,
  );
  const recentWrong = card.recentExercises.filter((e) => !e.correct).length;
  const recentTotal = card.recentExercises.length;

  return {
    student: {
      level: card.student.level,
      goal: card.student.goal,
      streak: card.student.streak,
      lastActiveDate: card.student.lastActiveDate,
    },
    progress: card.progress,
    weekMinutes,
    chapters: card.chapters.slice(0, 12).map((c) => ({
      slug: c.chapterSlug,
      status: c.status,
      score: c.score,
    })),
    difficultTopics: card.difficultTopics.map((t) => ({
      type: t.type,
      topic: t.topic,
      reason: t.reason,
      confidence: t.confidence ?? null,
    })),
    recentMistakes: card.recentMistakes.slice(0, 8).map((m) => ({
      exercise: m.exercise,
      type: m.exerciseType,
      feedback: m.feedback,
    })),
    exerciseSample: {
      recentTotal,
      recentWrong,
      lastAnswers: card.recentExercises.slice(0, 8).map((e) => ({
        correct: e.correct,
        type: e.exerciseType,
        exercise: e.exercise.slice(0, 80),
      })),
    },
  };
}

function evidenceToMarkdown(evidence: ReturnType<typeof buildEvidence>): string {
  return [
    `Level: ${evidence.student.level ?? "—"} · Goal: ${evidence.student.goal ?? "—"}`,
    `Streak: ${evidence.student.streak} · Last active: ${evidence.student.lastActiveDate ?? "—"}`,
    `Course progress: ${evidence.progress.completionPercent}% (${evidence.progress.completedChapters}/${evidence.progress.totalChapters}) · Avg score: ${evidence.progress.averageScore ?? "—"}`,
    `Week study minutes: ${evidence.weekMinutes}`,
    `Difficult topics: ${
      evidence.difficultTopics.length
        ? evidence.difficultTopics
            .map(
              (t) =>
                `${t.topic} (${t.type}, ${t.reason}, conf=${t.confidence ?? "?"})`,
            )
            .join("; ")
        : "none"
    }`,
    `Recent mistakes: ${
      evidence.recentMistakes.length
        ? evidence.recentMistakes
            .map((m) => `${m.exercise || m.type}: ${m.feedback}`)
            .join(" | ")
        : "none"
    }`,
    `Recent exercises: ${evidence.exerciseSample.recentWrong}/${evidence.exerciseSample.recentTotal} wrong`,
    `Chapter snapshot: ${
      evidence.chapters.length
        ? evidence.chapters
            .map((c) => `${c.slug}:${c.status}:${c.score}`)
            .join(", ")
        : "none"
    }`,
  ].join("\n");
}

function parseCoachJson(content: string): {
  summary: string;
  recommendations: string[];
  weak_topics: string[];
  next_steps: string[];
} {
  const match = content.match(/\{[\s\S]*\}/);
  if (!match) {
    return {
      summary: content.trim().slice(0, 1200),
      recommendations: [],
      weak_topics: [],
      next_steps: [],
    };
  }
  try {
    const parsed = JSON.parse(match[0]) as Record<string, unknown>;
    return {
      summary: String(parsed.summary ?? "").trim().slice(0, 2000),
      recommendations: asStringArray(parsed.recommendations),
      weak_topics: asStringArray(parsed.weak_topics),
      next_steps: asStringArray(parsed.next_steps),
    };
  } catch {
    return {
      summary: content.trim().slice(0, 1200),
      recommendations: [],
      weak_topics: [],
      next_steps: [],
    };
  }
}

async function loadLiveReport(
  studentId: string,
  courseId: string,
  locale: string,
): Promise<ReportRow | null> {
  const admin = requireAdmin();
  const { data, error } = await admin
    .from("teacher_ai_reports")
    .select("*")
    .eq("student_id", studentId)
    .eq("course_id", courseId)
    .eq("locale", locale)
    .is("deleted_at", null)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as ReportRow | null) ?? null;
}

async function saveReport(input: {
  studentId: string;
  courseId: string;
  locale: string;
  fingerprint: string;
  summary: string;
  recommendations: string[];
  weakTopics: string[];
  nextSteps: string[];
}): Promise<ReportRow> {
  const admin = requireAdmin();
  const existing = await loadLiveReport(
    input.studentId,
    input.courseId,
    input.locale,
  );
  const payload = {
    student_id: input.studentId,
    course_id: input.courseId,
    locale: input.locale,
    generated_at: new Date().toISOString(),
    summary: input.summary,
    recommendations: input.recommendations,
    weak_topics: input.weakTopics,
    next_steps: input.nextSteps,
    source_fingerprint: input.fingerprint,
    deleted_at: null,
  };

  if (existing) {
    const { data, error } = await admin
      .from("teacher_ai_reports")
      .update(payload)
      .eq("id", existing.id)
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return data as ReportRow;
  }

  const { data, error } = await admin
    .from("teacher_ai_reports")
    .insert(payload)
    .select("*")
    .single();
  if (!error && data) return data as ReportRow;

  // Concurrent insert race on unique live index → update the winner row.
  const raced = await loadLiveReport(
    input.studentId,
    input.courseId,
    input.locale,
  );
  if (raced) {
    const { data: updated, error: uErr } = await admin
      .from("teacher_ai_reports")
      .update(payload)
      .eq("id", raced.id)
      .select("*")
      .single();
    if (uErr) throw new Error(uErr.message);
    return updated as ReportRow;
  }
  throw new Error(error?.message ?? "Could not save AI report");
}

async function generateFresh(input: {
  teacherId: string;
  studentId: string;
  courseId: string;
  locale: InterfaceLanguage;
  evidence?: ReturnType<typeof buildEvidence>;
  fingerprint?: string;
}): Promise<TeacherAiReportDTO> {
  // Authz already enforced by refreshIfStale / getLatestReport callers when
  // evidence is precomputed; still check when building from scratch.
  if (!input.evidence) {
    await assertCanViewStudent(
      input.teacherId,
      input.studentId,
      input.courseId,
    );
  }
  const evidence =
    input.evidence ??
    buildEvidence(
      await getStudentCard(input.teacherId, input.studentId, input.courseId),
    );
  const fingerprint = input.fingerprint ?? fingerprintEvidence(evidence);
  const course = await getCourse(input.courseId);

  const systemPrompt = buildTeacherCoachSystemPrompt({
    interfaceLanguage: input.locale,
    courseTitle: course.titleNative,
    targetLanguage: course.titleNative,
  });
  const userPrompt = buildTeacherCoachUserPrompt(evidenceToMarkdown(evidence));

  const ai = await generateWithSystemPrompt({
    systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
    temperature: 0.35,
    maxTokens: 1100,
    interfaceLanguage: input.locale,
  });

  if (ai.model === "none" || ai.model === "unavailable") {
    throw new Error(ai.content || "AI_UNAVAILABLE");
  }

  const parsed = parseCoachJson(ai.content);
  if (!parsed.summary) {
    throw new Error("AI_EMPTY");
  }

  const row = await saveReport({
    studentId: input.studentId,
    courseId: input.courseId,
    locale: input.locale,
    fingerprint,
    summary: parsed.summary,
    recommendations: parsed.recommendations,
    weakTopics: parsed.weak_topics,
    nextSteps: parsed.next_steps,
  });

  return rowToDto(row, { cached: false, stale: false });
}

/** Cached teacher-facing AI reports (`teacher_ai_reports`). */
export const TeacherAiService = {
  async getLatestReport(
    teacherId: string,
    studentId: string,
    courseId: string,
    locale: InterfaceLanguage,
  ): Promise<TeacherAiReportDTO | null> {
    await assertCanViewStudent(teacherId, studentId, courseId);
    const row = await loadLiveReport(studentId, courseId, locale);
    if (!row) return null;
    const age = Date.now() - new Date(row.generated_at).getTime();
    return rowToDto(row, { cached: true, stale: age > STALE_MS });
  },

  /**
   * Return cache if fingerprint matches and not forced.
   * Regenerate when missing, fingerprint changed, stale (>24h), or force.
   */
  async refreshIfStale(input: {
    teacherId: string;
    studentId: string;
    courseId: string;
    locale: InterfaceLanguage;
    force?: boolean;
  }): Promise<TeacherAiReportDTO> {
    await assertCanViewStudent(
      input.teacherId,
      input.studentId,
      input.courseId,
    );

    const card = await getStudentCard(
      input.teacherId,
      input.studentId,
      input.courseId,
    );
    const evidence = buildEvidence(card);
    const fingerprint = fingerprintEvidence(evidence);
    const existing = await loadLiveReport(
      input.studentId,
      input.courseId,
      input.locale,
    );

    if (existing && !input.force) {
      const age = Date.now() - new Date(existing.generated_at).getTime();
      const fresh =
        existing.source_fingerprint === fingerprint && age <= STALE_MS;
      if (fresh) {
        return rowToDto(existing, { cached: true, stale: false });
      }
    }

    return generateFresh({
      teacherId: input.teacherId,
      studentId: input.studentId,
      courseId: input.courseId,
      locale: input.locale,
      evidence,
      fingerprint,
    });
  },
} as const;
