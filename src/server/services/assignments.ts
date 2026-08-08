import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { assertCanViewStudent } from "@/server/teacher/links";
import { getCourse } from "@/config/courses";
import { generateWithSystemPrompt } from "@/server/ai/orchestrator";
import {
  buildWritingAssistSystemPrompt,
  buildWritingAssistUserPrompt,
} from "@/server/ai/prompts/writing-assist";
import type { InterfaceLanguage } from "@/types";
import type {
  AssignmentSubmissionDTO,
  ChapterAssignmentPayload,
  ExerciseSetAssignmentPayload,
  NotificationDTO,
  TeacherAssignmentDTO,
  TeacherAssignmentKind,
  TeacherAssignmentPayload,
  TeacherAssignmentSource,
  TeacherAssignmentStatus,
  WritingAssignmentPayload,
} from "@/types/assignments";

type AssignmentRow = {
  id: string;
  teacher_id: string;
  student_id: string | null;
  group_id: string | null;
  course_id: string;
  kind: TeacherAssignmentKind;
  source: TeacherAssignmentSource;
  payload: TeacherAssignmentPayload;
  due_at: string | null;
  status: TeacherAssignmentStatus;
  created_at: string;
  completed_at: string | null;
};

type SubmissionRow = {
  assignment_id: string;
  body: string;
  submitted_at: string;
  ai_analysis: string | null;
  ai_analyzed_at: string | null;
};

function requireAdmin() {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    throw new Error("Service role is required for AssignmentService.");
  }
  return admin;
}

function submissionToDto(row: SubmissionRow): AssignmentSubmissionDTO {
  return {
    body: row.body,
    submittedAt: row.submitted_at,
    aiAnalysis: row.ai_analysis,
    aiAnalyzedAt: row.ai_analyzed_at,
  };
}

function rowToDto(
  row: AssignmentRow,
  extra?: Partial<TeacherAssignmentDTO>,
): TeacherAssignmentDTO {
  return {
    id: row.id,
    teacherId: row.teacher_id,
    studentId: row.student_id,
    groupId: row.group_id,
    courseId: row.course_id,
    kind: row.kind,
    source: row.source,
    payload: (row.payload ?? {}) as TeacherAssignmentPayload,
    dueAt: row.due_at,
    status: row.status,
    createdAt: row.created_at,
    completedAt: row.completed_at,
    ...extra,
  };
}

function validatePayload(
  kind: TeacherAssignmentKind,
  payload: TeacherAssignmentPayload,
): TeacherAssignmentPayload {
  if (kind === "chapter") {
    const p = payload as ChapterAssignmentPayload;
    const slugs = Array.isArray(p.chapterSlugs)
      ? p.chapterSlugs.filter((s) => typeof s === "string" && s.trim())
      : [];
    if (slugs.length === 0) throw new Error("INVALID_PAYLOAD");
    return {
      chapterSlugs: slugs.slice(0, 12),
      note: typeof p.note === "string" ? p.note.slice(0, 500) : undefined,
    };
  }
  if (kind === "writing") {
    const p = payload as WritingAssignmentPayload;
    const prompt = typeof p.prompt === "string" ? p.prompt.trim() : "";
    if (prompt.length < 8 || prompt.length > 4000) {
      throw new Error("INVALID_PAYLOAD");
    }
    const grammarTopicSlug =
      typeof p.grammarTopicSlug === "string" && p.grammarTopicSlug.trim()
        ? p.grammarTopicSlug.trim().slice(0, 120)
        : undefined;
    const grammarTopicTitle =
      typeof p.grammarTopicTitle === "string" && p.grammarTopicTitle.trim()
        ? p.grammarTopicTitle.trim().slice(0, 200)
        : undefined;
    return {
      prompt: prompt.slice(0, 4000),
      grammarTopicSlug,
      grammarTopicTitle,
      note: typeof p.note === "string" ? p.note.slice(0, 500) : undefined,
    };
  }
  const p = payload as ExerciseSetAssignmentPayload;
  const count = Math.min(Math.max(Number(p.count) || 5, 1), 30);
  return {
    type: typeof p.type === "string" ? p.type : undefined,
    level: typeof p.level === "string" ? p.level : undefined,
    count,
    exam: Boolean(p.exam),
    note: typeof p.note === "string" ? p.note.slice(0, 500) : undefined,
  };
}

async function loadSubmissionsMap(
  assignmentIds: string[],
): Promise<Map<string, AssignmentSubmissionDTO>> {
  const map = new Map<string, AssignmentSubmissionDTO>();
  if (assignmentIds.length === 0) return map;
  const admin = requireAdmin();
  const { data, error } = await admin
    .from("assignment_submissions")
    .select("assignment_id, body, submitted_at, ai_analysis, ai_analyzed_at")
    .in("assignment_id", assignmentIds);
  if (error) throw new Error(error.message);
  for (const row of (data ?? []) as SubmissionRow[]) {
    map.set(row.assignment_id, submissionToDto(row));
  }
  return map;
}

async function notifyStudent(input: {
  userId: string;
  assignmentId: string;
  courseId: string;
  kind: TeacherAssignmentKind;
  teacherName: string;
  dueAt: string | null;
}) {
  const admin = requireAdmin();
  await admin.from("notifications").insert({
    user_id: input.userId,
    type: "assignment",
    payload: {
      assignmentId: input.assignmentId,
      courseId: input.courseId,
      kind: input.kind,
      teacherName: input.teacherName,
      dueAt: input.dueAt,
    },
  });
}

/** Homework assignments (`teacher_assignments`). */
export const AssignmentService = {
  async listForTeacher(
    teacherId: string,
    opts?: { courseId?: string; status?: TeacherAssignmentStatus },
  ): Promise<TeacherAssignmentDTO[]> {
    const admin = requireAdmin();
    let q = admin
      .from("teacher_assignments")
      .select("*")
      .eq("teacher_id", teacherId)
      .is("deleted_at", null)
      .order("created_at", { ascending: false });
    if (opts?.courseId) q = q.eq("course_id", opts.courseId);
    if (opts?.status) q = q.eq("status", opts.status);

    const { data, error } = await q;
    if (error) throw new Error(error.message);
    const rows = (data ?? []) as AssignmentRow[];
    if (rows.length === 0) return [];

    const studentIds = [
      ...new Set(rows.map((r) => r.student_id).filter(Boolean) as string[]),
    ];
    const { data: profiles } = await admin
      .from("profiles")
      .select("id, name, email")
      .in("id", studentIds.length ? studentIds : ["00000000-0000-0000-0000-000000000000"]);
    const byId = new Map(
      (profiles ?? []).map((p) => [p.id as string, p]),
    );

    const submissions = await loadSubmissionsMap(rows.map((r) => r.id));

    return rows.map((row) => {
      const p = row.student_id ? byId.get(row.student_id) : null;
      return rowToDto(row, {
        studentName: (p?.name as string) || null,
        studentEmail: (p?.email as string) || null,
        submission: submissions.get(row.id) ?? null,
      });
    });
  },

  async listForStudent(studentId: string): Promise<TeacherAssignmentDTO[]> {
    const admin = requireAdmin();
    const { data, error } = await admin
      .from("teacher_assignments")
      .select("*")
      .eq("student_id", studentId)
      .is("deleted_at", null)
      .neq("status", "cancelled")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    const rows = (data ?? []) as AssignmentRow[];
    if (rows.length === 0) return [];

    const teacherIds = [...new Set(rows.map((r) => r.teacher_id))];
    const { data: profiles } = await admin
      .from("profiles")
      .select("id, name")
      .in("id", teacherIds);
    const byId = new Map(
      (profiles ?? []).map((p) => [p.id as string, p]),
    );

    const submissions = await loadSubmissionsMap(rows.map((r) => r.id));

    return rows.map((row) =>
      rowToDto(row, {
        teacherName: (byId.get(row.teacher_id)?.name as string) || null,
        submission: submissions.get(row.id) ?? null,
      }),
    );
  },

  async create(input: {
    teacherId: string;
    teacherName: string;
    studentId: string;
    courseId: string;
    kind: TeacherAssignmentKind;
    payload: TeacherAssignmentPayload;
    dueAt?: string | null;
    source?: TeacherAssignmentSource;
  }): Promise<TeacherAssignmentDTO> {
    const source: TeacherAssignmentSource = input.source ?? "teacher";
    if (source === "ai") {
      throw new Error("AI_ASSIGN_REQUIRES_CONFIRM");
    }

    await assertCanViewStudent(
      input.teacherId,
      input.studentId,
      input.courseId,
    );

    const payload = validatePayload(input.kind, input.payload);
    const admin = requireAdmin();
    const { data, error } = await admin
      .from("teacher_assignments")
      .insert({
        teacher_id: input.teacherId,
        student_id: input.studentId,
        course_id: input.courseId,
        kind: input.kind,
        source,
        payload,
        due_at: input.dueAt || null,
        status: "assigned",
      })
      .select("*")
      .single();
    if (error) throw new Error(error.message);

    const row = data as AssignmentRow;
    await notifyStudent({
      userId: input.studentId,
      assignmentId: row.id,
      courseId: input.courseId,
      kind: input.kind,
      teacherName: input.teacherName || "Teacher",
      dueAt: row.due_at,
    });

    return rowToDto(row, { submission: null });
  },

  async cancel(teacherId: string, assignmentId: string): Promise<void> {
    const admin = requireAdmin();
    const { data, error } = await admin
      .from("teacher_assignments")
      .update({
        status: "cancelled",
        deleted_at: new Date().toISOString(),
      })
      .eq("id", assignmentId)
      .eq("teacher_id", teacherId)
      .eq("status", "assigned")
      .is("deleted_at", null)
      .select("id")
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!data) throw new Error("NOT_FOUND");
  },

  async markCompleted(studentId: string, assignmentId: string): Promise<void> {
    const admin = requireAdmin();
    const { data: row, error: fetchErr } = await admin
      .from("teacher_assignments")
      .select("id, kind")
      .eq("id", assignmentId)
      .eq("student_id", studentId)
      .eq("status", "assigned")
      .is("deleted_at", null)
      .maybeSingle();
    if (fetchErr) throw new Error(fetchErr.message);
    if (!row) throw new Error("NOT_FOUND");
    if ((row.kind as TeacherAssignmentKind) === "writing") {
      // Writing must be submitted via submitWriting (captures the body).
      throw new Error("WRITING_REQUIRES_SUBMIT");
    }

    const { data, error } = await admin
      .from("teacher_assignments")
      .update({
        status: "completed",
        completed_at: new Date().toISOString(),
      })
      .eq("id", assignmentId)
      .eq("student_id", studentId)
      .eq("status", "assigned")
      .is("deleted_at", null)
      .select("id")
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!data) throw new Error("NOT_FOUND");
  },

  /** Save writing answer and mark assignment completed. No AI here. */
  async submitWriting(
    studentId: string,
    assignmentId: string,
    body: string,
  ): Promise<AssignmentSubmissionDTO> {
    const text = body.trim();
    if (text.length < 20 || text.length > 20000) {
      throw new Error("INVALID_BODY");
    }

    const admin = requireAdmin();
    const { data: assignment, error: aErr } = await admin
      .from("teacher_assignments")
      .select("*")
      .eq("id", assignmentId)
      .eq("student_id", studentId)
      .eq("kind", "writing")
      .eq("status", "assigned")
      .is("deleted_at", null)
      .maybeSingle();
    if (aErr) throw new Error(aErr.message);
    if (!assignment) throw new Error("NOT_FOUND");

    const now = new Date().toISOString();
    const { data: submission, error: sErr } = await admin
      .from("assignment_submissions")
      .upsert(
        {
          assignment_id: assignmentId,
          student_id: studentId,
          body: text,
          submitted_at: now,
          updated_at: now,
          ai_analysis: null,
          ai_analyzed_at: null,
        },
        { onConflict: "assignment_id" },
      )
      .select("assignment_id, body, submitted_at, ai_analysis, ai_analyzed_at")
      .single();
    if (sErr) throw new Error(sErr.message);

    const { error: uErr } = await admin
      .from("teacher_assignments")
      .update({
        status: "completed",
        completed_at: now,
      })
      .eq("id", assignmentId)
      .eq("student_id", studentId)
      .eq("status", "assigned");
    if (uErr) throw new Error(uErr.message);

    return submissionToDto(submission as SubmissionRow);
  },

  /**
   * On-demand AI helper for the teacher. Never called on student submit.
   */
  async analyzeWriting(input: {
    teacherId: string;
    assignmentId: string;
    locale: InterfaceLanguage;
  }): Promise<AssignmentSubmissionDTO> {
    const admin = requireAdmin();
    const { data: assignment, error: aErr } = await admin
      .from("teacher_assignments")
      .select("*")
      .eq("id", input.assignmentId)
      .eq("teacher_id", input.teacherId)
      .eq("kind", "writing")
      .is("deleted_at", null)
      .maybeSingle();
    if (aErr) throw new Error(aErr.message);
    if (!assignment) throw new Error("NOT_FOUND");
    if (!assignment.student_id) throw new Error("NOT_FOUND");

    await assertCanViewStudent(
      input.teacherId,
      assignment.student_id as string,
      assignment.course_id as string,
    );

    const { data: submission, error: sErr } = await admin
      .from("assignment_submissions")
      .select("assignment_id, body, submitted_at, ai_analysis, ai_analyzed_at")
      .eq("assignment_id", input.assignmentId)
      .maybeSingle();
    if (sErr) throw new Error(sErr.message);
    if (!submission) throw new Error("NO_SUBMISSION");

    const payload = (assignment.payload ?? {}) as WritingAssignmentPayload;
    const course = await getCourse(assignment.course_id as string);
    let grammarTopicTitle: string | null = null;
    let grammarHints: string | null = null;
    if (payload.grammarTopicSlug) {
      const topic = course.getGrammarTopic?.(payload.grammarTopicSlug);
      if (topic) {
        grammarTopicTitle = `${topic.title} (${topic.level})`;
        grammarHints =
          typeof topic.content === "string"
            ? topic.content.slice(0, 2500)
            : null;
        if (!grammarHints && topic.summary) {
          grammarHints = topic.summary;
        }
      }
    }

    const systemPrompt = buildWritingAssistSystemPrompt({
      interfaceLanguage: input.locale,
      courseTitle: course.titleNative || course.title || assignment.course_id,
    });
    const userPrompt = buildWritingAssistUserPrompt({
      prompt: payload.prompt || "",
      grammarTopicTitle,
      grammarHints,
      studentText: (submission as SubmissionRow).body,
    });

    const ai = await generateWithSystemPrompt({
      systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
      temperature: 0.35,
      maxTokens: 1600,
      interfaceLanguage: input.locale,
    });

    if (ai.model === "none" || ai.model === "unavailable") {
      throw new Error("AI_UNAVAILABLE");
    }

    const analysis = ai.content.trim();
    if (!analysis) throw new Error("AI_EMPTY");

    const now = new Date().toISOString();
    const { data: updated, error: uErr } = await admin
      .from("assignment_submissions")
      .update({
        ai_analysis: analysis,
        ai_analyzed_at: now,
        updated_at: now,
      })
      .eq("assignment_id", input.assignmentId)
      .select("assignment_id, body, submitted_at, ai_analysis, ai_analyzed_at")
      .single();
    if (uErr) throw new Error(uErr.message);

    return submissionToDto(updated as SubmissionRow);
  },

  async listNotifications(
    userId: string,
    opts?: { unreadOnly?: boolean },
  ): Promise<NotificationDTO[]> {
    const admin = requireAdmin();
    let q = admin
      .from("notifications")
      .select("*")
      .eq("user_id", userId)
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .limit(50);
    if (opts?.unreadOnly) q = q.is("read_at", null);

    const { data, error } = await q;
    if (error) throw new Error(error.message);
    return (data ?? []).map((n) => ({
      id: n.id as string,
      userId: n.user_id as string,
      type: n.type as string,
      payload: (n.payload ?? {}) as Record<string, unknown>,
      readAt: (n.read_at as string | null) ?? null,
      createdAt: n.created_at as string,
    }));
  },

  async markNotificationsRead(
    userId: string,
    ids?: string[],
  ): Promise<void> {
    if (!ids?.length) return;
    const admin = requireAdmin();
    const { error } = await admin
      .from("notifications")
      .update({ read_at: new Date().toISOString() })
      .eq("user_id", userId)
      .is("deleted_at", null)
      .is("read_at", null)
      .in("id", ids);
    if (error) throw new Error(error.message);
  },
} as const;
