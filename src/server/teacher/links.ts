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
    // Retry only on live-code unique collisions (index: uq_teacher_invites_code_live).
    const collision =
      /uq_teacher_invites_code/i.test(lastError) ||
      /duplicate key/i.test(lastError);
    if (!collision) break;
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
  const { data, error } = await admin
    .from("teacher_invites")
    .update({ status: "closed", deleted_at: new Date().toISOString() })
    .eq("id", inviteId)
    .eq("teacher_id", teacherId)
    .is("deleted_at", null)
    .select("id")
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("NOT_FOUND");
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
  const { data, error } = await admin
    .from("teacher_students")
    .update({
      status: "revoked",
      deleted_at: new Date().toISOString(),
    })
    .eq("id", linkId)
    .eq("teacher_id", teacherId)
    .is("deleted_at", null)
    .select("id")
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("NOT_FOUND");
}

function normalizeInviteCode(code: string): string {
  return code.trim().toUpperCase().replace(/\s+/g, "");
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
  else if (opts.code) q = q.eq("code", normalizeInviteCode(opts.code));
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

type AcceptInviteRpcResult = {
  link: TeacherStudentRow;
  courseId: string;
  teacherName: string;
  alreadyLinked?: boolean;
};

/**
 * Student accepts an invite by code or token.
 * Prefers atomic Postgres RPC; falls back to idempotent app-level accept.
 */
export async function acceptInvite(input: {
  studentId: string;
  code?: string;
  token?: string;
}): Promise<{ link: TeacherStudentRow; courseId: string; teacherName: string }> {
  const admin = await getAdmin();
  const code = input.code ? normalizeInviteCode(input.code) : undefined;
  const token = input.token?.trim() || undefined;

  if (!code && !token) throw new Error("code or token required");

  const { data: rpcData, error: rpcErr } = await admin.rpc(
    "accept_teacher_invite",
    {
      p_student_id: input.studentId,
      p_code: code ?? null,
      p_token: token ?? null,
    },
  );

  if (!rpcErr && rpcData) {
    const parsed = rpcData as AcceptInviteRpcResult;
    if (!parsed?.link || !parsed.courseId) {
      throw new Error("Accept failed");
    }
    return {
      link: parsed.link,
      courseId: parsed.courseId,
      teacherName: parsed.teacherName || "Teacher",
    };
  }

  if (rpcErr) {
    const missingFn =
      /could not find the function|function .* does not exist|PGRST202|schema cache/i.test(
        rpcErr.message,
      );
    if (!missingFn) {
      // Business errors from RAISE EXCEPTION — surface cleanly, do not retry.
      const msg = rpcErr.message
        .replace(/^.*ERROR:\s*/i, "")
        .split("\n")[0]
        ?.trim();
      throw new Error(msg || rpcErr.message);
    }
    console.warn(
      "[acceptInvite] RPC not installed, using fallback:",
      rpcErr.message,
    );
  }

  return acceptInviteFallback({
    studentId: input.studentId,
    code,
    token,
  });
}

/** Idempotent fallback when accept_teacher_invite RPC is not installed. */
async function acceptInviteFallback(input: {
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

  const { data: existing } = await admin
    .from("teacher_students")
    .select("*")
    .eq("teacher_id", invite.teacher_id)
    .eq("student_id", input.studentId)
    .eq("course_id", invite.course_id)
    .eq("status", "active")
    .is("deleted_at", null)
    .maybeSingle();

  if (existing) {
    await admin
      .from("profiles")
      .update({ active_course_id: invite.course_id })
      .eq("id", input.studentId);
    const { data: teacher } = await admin
      .from("profiles")
      .select("name")
      .eq("id", invite.teacher_id)
      .maybeSingle();
    return {
      link: existing as TeacherStudentRow,
      courseId: invite.course_id,
      teacherName: (teacher?.name as string) || "Teacher",
    };
  }

  // Claim one use only after we know we need a new/reactivated link.
  const { data: claimed, error: claimErr } = await admin
    .from("teacher_invites")
    .update({ uses_count: invite.uses_count + 1 })
    .eq("id", invite.id)
    .eq("status", "open")
    .eq("uses_count", invite.uses_count)
    .is("deleted_at", null)
    .select("id, uses_count, max_uses")
    .maybeSingle();
  if (claimErr) throw new Error(claimErr.message);
  if (!claimed) {
    throw new Error("Invite has no remaining uses");
  }
  if (
    claimed.max_uses != null &&
    (claimed.uses_count as number) >= (claimed.max_uses as number)
  ) {
    await admin
      .from("teacher_invites")
      .update({ status: "closed" })
      .eq("id", invite.id);
  }

  const now = new Date().toISOString();
  const { data: revoked } = await admin
    .from("teacher_students")
    .select("id")
    .eq("teacher_id", invite.teacher_id)
    .eq("student_id", input.studentId)
    .eq("course_id", invite.course_id)
    .not("deleted_at", "is", null)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  let link: TeacherStudentRow | null = null;

  if (revoked?.id) {
    const { data: reactivated, error: reactivateErr } = await admin
      .from("teacher_students")
      .update({
        status: "active",
        deleted_at: null,
        accepted_at: now,
        group_id: invite.group_id,
        invited_at: invite.created_at,
        role: "student",
      })
      .eq("id", revoked.id)
      .select("*")
      .single();
    if (reactivateErr) {
      await admin
        .from("teacher_invites")
        .update({ uses_count: Math.max(0, invite.uses_count) })
        .eq("id", invite.id)
        .eq("uses_count", claimed.uses_count as number);
      throw new Error(reactivateErr.message);
    }
    link = reactivated as TeacherStudentRow;
  } else {
    const { data: inserted, error } = await admin
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
    if (error) {
      // Decrement only our claimed slot (CAS), never rewrite a stale absolute.
      await admin
        .from("teacher_invites")
        .update({
          uses_count: Math.max(0, (claimed.uses_count as number) - 1),
          status: "open",
        })
        .eq("id", invite.id)
        .eq("uses_count", claimed.uses_count as number);
      throw new Error(error.message);
    }
    link = inserted as TeacherStudentRow;
  }

  await admin
    .from("profiles")
    .update({ active_course_id: invite.course_id })
    .eq("id", input.studentId);

  const { data: teacher } = await admin
    .from("profiles")
    .select("name")
    .eq("id", invite.teacher_id)
    .maybeSingle();

  return {
    link: link!,
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
