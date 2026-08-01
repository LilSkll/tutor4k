import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { assertCanViewStudent } from "@/server/teacher/links";
import type {
  ChapterAssignmentPayload,
  ExerciseSetAssignmentPayload,
  NotificationDTO,
  TeacherAssignmentDTO,
  TeacherAssignmentKind,
  TeacherAssignmentPayload,
  TeacherAssignmentSource,
  TeacherAssignmentStatus,
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

function requireAdmin() {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    throw new Error("Service role is required for AssignmentService.");
  }
  return admin;
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

    return rows.map((row) => {
      const p = row.student_id ? byId.get(row.student_id) : null;
      return rowToDto(row, {
        studentName: (p?.name as string) || null,
        studentEmail: (p?.email as string) || null,
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

    return rows.map((row) =>
      rowToDto(row, {
        teacherName: (byId.get(row.teacher_id)?.name as string) || null,
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
    // AI-sourced homework must be confirmed by teacher → source stays teacher
    // unless explicitly set after confirm flow (Stage 7: only teacher creates).
    const source: TeacherAssignmentSource = input.source ?? "teacher";
    if (source === "ai") {
      // Reserved: never auto-create AI homework without teacher confirm.
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

    return rowToDto(row);
  },

  async cancel(teacherId: string, assignmentId: string): Promise<void> {
    const admin = requireAdmin();
    // Only open assignments; keep completed rows visible in history.
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
    // Empty/omitted ids = no-op (avoid marking everything unread by accident).
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
