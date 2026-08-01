import { createSupabaseServerClient } from "@/lib/supabase-server";
import { canAccessTeacherStudio } from "@/lib/roles";
import type { Profile, UserRole } from "@/types";
import type {
  TeacherInviteRow,
  TeacherStudentRow,
} from "@/types/teacher";

export type {
  TeacherInviteRow,
  TeacherStudentRow,
  TeacherStudentRole,
  TeacherLinkStatus,
  TeacherLinkCreatedBy,
} from "@/types/teacher";

async function getAdmin() {
  const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
  const admin = createSupabaseAdminClient();
  if (!admin) {
    throw new Error("Service role is required for teacher link operations.");
  }
  return admin;
}

/** Current user must be teacher or school_admin. */
export async function requireTeacherSession(): Promise<Profile> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("UNAUTHORIZED");

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();
  if (!data) throw new Error("UNAUTHORIZED");

  const profile = data as unknown as Profile;
  const role = (profile.role ?? "student") as UserRole;
  if (!canAccessTeacherStudio(role)) throw new Error("FORBIDDEN");
  return { ...profile, role };
}

export async function assertCanViewStudent(
  teacherId: string,
  studentId: string,
  courseId: string,
): Promise<TeacherStudentRow> {
  const admin = await getAdmin();
  const { data, error } = await admin
    .from("teacher_students")
    .select("*")
    .eq("teacher_id", teacherId)
    .eq("student_id", studentId)
    .eq("course_id", courseId)
    .eq("status", "active")
    .is("deleted_at", null)
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("FORBIDDEN");
  return data as TeacherStudentRow;
}

function randomCodeChunk(len: number): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)]!;
  }
  return out;
}

/** Human-readable invite code, e.g. SWP-K7M2 */
export function generateInviteCode(): string {
  return `SWP-${randomCodeChunk(4)}`;
}

export async function createInvite(input: {
  teacherId: string;
  courseId: string;
  maxUses?: number | null;
  expiresAt?: string | null;
}): Promise<TeacherInviteRow> {
  const admin = await getAdmin();
  let lastError: string | null = null;

  for (let attempt = 0; attempt < 5; attempt++) {
    const code = generateInviteCode();
    const { data, error } = await admin
      .from("teacher_invites")
      .insert({
        teacher_id: input.teacherId,
        course_id: input.courseId,
        code,
        max_uses: input.maxUses ?? null,
        expires_at: input.expiresAt ?? null,
        status: "open",
      })
      .select("*")
      .single();

    if (!error && data) return data as TeacherInviteRow;
    lastError = error?.message ?? "insert failed";
    if (!lastError.includes("uq_teacher_invites_code")) break;
  }
  throw new Error(lastError ?? "Could not create invite");
}

export async function listInvites(teacherId: string): Promise<TeacherInviteRow[]> {
  const admin = await getAdmin();
  const { data, error } = await admin
    .from("teacher_invites")
    .select("*")
    .eq("teacher_id", teacherId)
    .is("deleted_at", null)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as TeacherInviteRow[];
}

export async function closeInvite(teacherId: string, inviteId: string): Promise<void> {
  const admin = await getAdmin();
  const { error } = await admin
    .from("teacher_invites")
    .update({ status: "closed", deleted_at: new Date().toISOString() })
    .eq("id", inviteId)
    .eq("teacher_id", teacherId)
    .is("deleted_at", null);
  if (error) throw new Error(error.message);
}

export async function listTeacherStudents(teacherId: string, courseId?: string) {
  const admin = await getAdmin();
  let q = admin
    .from("teacher_students")
    .select("*")
    .eq("teacher_id", teacherId)
    .eq("status", "active")
    .is("deleted_at", null)
    .order("accepted_at", { ascending: false });
  if (courseId) q = q.eq("course_id", courseId);

  const { data: links, error } = await q;
  if (error) throw new Error(error.message);
  const rows = (links ?? []) as TeacherStudentRow[];
  if (rows.length === 0) return [];

  const ids = [...new Set(rows.map((r) => r.student_id))];
  const { data: profiles, error: pErr } = await admin
    .from("profiles")
    .select("id, name, email, level, active_course_id, last_active_date")
    .in("id", ids);
  if (pErr) throw new Error(pErr.message);

  const byId = new Map((profiles ?? []).map((p) => [p.id as string, p]));
  return rows.map((link) => ({
    link,
    student: byId.get(link.student_id) ?? null,
  }));
}

export async function revokeTeacherStudent(
  teacherId: string,
  linkId: string,
): Promise<void> {
  const admin = await getAdmin();
  const { error } = await admin
    .from("teacher_students")
    .update({
      status: "revoked",
      deleted_at: new Date().toISOString(),
    })
    .eq("id", linkId)
    .eq("teacher_id", teacherId)
    .is("deleted_at", null);
  if (error) throw new Error(error.message);
}

async function findOpenInvite(opts: {
  code?: string;
  token?: string;
}): Promise<TeacherInviteRow | null> {
  const admin = await getAdmin();
  let q = admin
    .from("teacher_invites")
    .select("*")
    .eq("status", "open")
    .is("deleted_at", null)
    .limit(1);

  if (opts.token) q = q.eq("token", opts.token);
  else if (opts.code) q = q.eq("code", opts.code.trim().toUpperCase());
  else return null;

  const { data, error } = await q.maybeSingle();
  if (error) throw new Error(error.message);
  return (data as TeacherInviteRow | null) ?? null;
}

function inviteIsUsable(invite: TeacherInviteRow): string | null {
  if (invite.status !== "open" || invite.deleted_at) return "Invite is closed";
  if (invite.expires_at && new Date(invite.expires_at).getTime() < Date.now()) {
    return "Invite has expired";
  }
  if (invite.max_uses != null && invite.uses_count >= invite.max_uses) {
    return "Invite has no remaining uses";
  }
  return null;
}

/**
 * Student accepts an invite by code or token.
 * Creates/reactivates teacher_students (active) for that course.
 */
export async function acceptInvite(input: {
  studentId: string;
  code?: string;
  token?: string;
}): Promise<{ link: TeacherStudentRow; courseId: string; teacherName: string }> {
  const invite = await findOpenInvite({
    code: input.code,
    token: input.token,
  });
  if (!invite) throw new Error("Invite not found");

  const usable = inviteIsUsable(invite);
  if (usable) throw new Error(usable);

  if (invite.teacher_id === input.studentId) {
    throw new Error("You cannot accept your own invite");
  }

  const admin = await getAdmin();

  // Soft-delete any previous live link for same triple, then insert active.
  await admin
    .from("teacher_students")
    .update({ status: "revoked", deleted_at: new Date().toISOString() })
    .eq("teacher_id", invite.teacher_id)
    .eq("student_id", input.studentId)
    .eq("course_id", invite.course_id)
    .is("deleted_at", null);

  const now = new Date().toISOString();
  const { data: link, error } = await admin
    .from("teacher_students")
    .insert({
      teacher_id: invite.teacher_id,
      student_id: input.studentId,
      group_id: invite.group_id,
      course_id: invite.course_id,
      role: "student",
      status: "active",
      created_by: "teacher",
      invited_at: invite.created_at,
      accepted_at: now,
    })
    .select("*")
    .single();
  if (error) throw new Error(error.message);

  await admin
    .from("teacher_invites")
    .update({ uses_count: invite.uses_count + 1 })
    .eq("id", invite.id);

  // Close if max uses reached.
  if (invite.max_uses != null && invite.uses_count + 1 >= invite.max_uses) {
    await admin
      .from("teacher_invites")
      .update({ status: "closed" })
      .eq("id", invite.id);
  }

  const { data: teacher } = await admin
    .from("profiles")
    .select("name")
    .eq("id", invite.teacher_id)
    .maybeSingle();

  return {
    link: link as TeacherStudentRow,
    courseId: invite.course_id,
    teacherName: (teacher?.name as string) || "Teacher",
  };
}

export async function getInviteByToken(token: string): Promise<{
  code: string;
  courseId: string;
  teacherName: string;
  expiresAt: string | null;
} | null> {
  const invite = await findOpenInvite({ token });
  if (!invite) return null;
  if (inviteIsUsable(invite)) return null;

  const admin = await getAdmin();
  const { data: teacher } = await admin
    .from("profiles")
    .select("name")
    .eq("id", invite.teacher_id)
    .maybeSingle();

  return {
    code: invite.code,
    courseId: invite.course_id,
    teacherName: (teacher?.name as string) || "Teacher",
    expiresAt: invite.expires_at,
  };
}
