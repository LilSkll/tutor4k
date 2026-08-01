import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import type {
  SchoolDTO,
  SchoolMemberDTO,
  SchoolMemberRole,
  TeacherGroupDTO,
} from "@/types/school";

function requireAdmin() {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    throw new Error("Service role is required for SchoolService.");
  }
  return admin;
}

function slugify(name: string): string {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яё]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  const suffix = Math.random().toString(36).slice(2, 6);
  return `${base || "school"}-${suffix}`;
}

async function getMembership(
  userId: string,
  schoolId: string,
): Promise<{ role: SchoolMemberRole } | null> {
  const admin = requireAdmin();
  const { data, error } = await admin
    .from("school_members")
    .select("member_role")
    .eq("school_id", schoolId)
    .eq("user_id", userId)
    .is("deleted_at", null)
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) return null;
  return { role: data.member_role as SchoolMemberRole };
}

async function assertSchoolManager(userId: string, schoolId: string) {
  const m = await getMembership(userId, schoolId);
  if (!m || (m.role !== "owner" && m.role !== "admin")) {
    throw new Error("FORBIDDEN");
  }
  return m;
}

/** Schools, members, and teacher groups (Stage 9). */
export const SchoolService = {
  async listMySchools(userId: string): Promise<SchoolDTO[]> {
    const admin = requireAdmin();
    const { data: memberships, error } = await admin
      .from("school_members")
      .select("school_id, member_role")
      .eq("user_id", userId)
      .is("deleted_at", null);
    if (error) throw new Error(error.message);
    if (!memberships?.length) return [];

    const ids = memberships.map((m) => m.school_id as string);
    const { data: schools, error: sErr } = await admin
      .from("schools")
      .select("*")
      .in("id", ids)
      .is("deleted_at", null)
      .order("created_at", { ascending: false });
    if (sErr) throw new Error(sErr.message);

    const roleBySchool = new Map(
      memberships.map((m) => [
        m.school_id as string,
        m.member_role as SchoolMemberRole,
      ]),
    );

    return (schools ?? []).map((s) => ({
      id: s.id as string,
      name: s.name as string,
      slug: s.slug as string,
      createdAt: s.created_at as string,
      myRole: roleBySchool.get(s.id as string) ?? null,
    }));
  },

  async createSchool(input: {
    userId: string;
    name: string;
  }): Promise<SchoolDTO> {
    const name = input.name.trim().slice(0, 120);
    if (name.length < 2) throw new Error("INVALID_NAME");

    const admin = requireAdmin();
    type SchoolRow = {
      id: string;
      name: string;
      slug: string;
      created_at: string;
    };
    let school: SchoolRow | null = null;
    let lastError = "insert failed";

    for (let i = 0; i < 5; i++) {
      const slug = slugify(name);
      const { data, error } = await admin
        .from("schools")
        .insert({ name, slug })
        .select("id, name, slug, created_at")
        .single();
      if (!error && data) {
        school = data as SchoolRow;
        break;
      }
      lastError = error?.message ?? lastError;
      if (!lastError.includes("uq_schools_slug")) break;
    }
    if (!school) throw new Error(lastError);

    const { error: mErr } = await admin.from("school_members").insert({
      school_id: school.id,
      user_id: input.userId,
      member_role: "owner",
    });
    if (mErr) throw new Error(mErr.message);

    // Elevate profile to school_admin so Studio role badge matches hierarchy.
    await admin
      .from("profiles")
      .update({ role: "school_admin" })
      .eq("id", input.userId)
      .in("role", ["teacher", "school_admin"]);

    return {
      id: school.id,
      name: school.name,
      slug: school.slug,
      createdAt: school.created_at,
      myRole: "owner",
    };
  },

  async listMembers(
    userId: string,
    schoolId: string,
  ): Promise<SchoolMemberDTO[]> {
    await getMembership(userId, schoolId).then((m) => {
      if (!m) throw new Error("FORBIDDEN");
    });
    const admin = requireAdmin();
    const { data, error } = await admin
      .from("school_members")
      .select("*")
      .eq("school_id", schoolId)
      .is("deleted_at", null)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);

    const userIds = (data ?? []).map((r) => r.user_id as string);
    const { data: profiles } = await admin
      .from("profiles")
      .select("id, name, email")
      .in(
        "id",
        userIds.length ? userIds : ["00000000-0000-0000-0000-000000000000"],
      );
    const byId = new Map((profiles ?? []).map((p) => [p.id as string, p]));

    return (data ?? []).map((r) => {
      const p = byId.get(r.user_id as string);
      return {
        id: r.id as string,
        schoolId: r.school_id as string,
        userId: r.user_id as string,
        memberRole: r.member_role as SchoolMemberRole,
        name: (p?.name as string) || null,
        email: (p?.email as string) || null,
        createdAt: r.created_at as string,
      };
    });
  },

  async addMember(input: {
    actorId: string;
    schoolId: string;
    email: string;
    memberRole?: SchoolMemberRole;
  }): Promise<SchoolMemberDTO> {
    await assertSchoolManager(input.actorId, input.schoolId);
    const role = input.memberRole ?? "teacher";
    if (role === "owner") throw new Error("INVALID_ROLE");

    const admin = requireAdmin();
    const email = input.email.trim().toLowerCase();
    const { data: profile, error: pErr } = await admin
      .from("profiles")
      .select("id, name, email, role")
      .eq("email", email)
      .maybeSingle();
    if (pErr) throw new Error(pErr.message);
    if (!profile) throw new Error("USER_NOT_FOUND");

    const profileRole = (profile.role as string) || "student";
    if (profileRole !== "teacher" && profileRole !== "school_admin") {
      throw new Error("NOT_A_TEACHER");
    }

    // Soft-delete prior membership then insert.
    await admin
      .from("school_members")
      .update({ deleted_at: new Date().toISOString() })
      .eq("school_id", input.schoolId)
      .eq("user_id", profile.id)
      .is("deleted_at", null);

    const { data, error } = await admin
      .from("school_members")
      .insert({
        school_id: input.schoolId,
        user_id: profile.id,
        member_role: role,
      })
      .select("*")
      .single();
    if (error) throw new Error(error.message);

    return {
      id: data.id as string,
      schoolId: data.school_id as string,
      userId: data.user_id as string,
      memberRole: data.member_role as SchoolMemberRole,
      name: (profile.name as string) || null,
      email: (profile.email as string) || null,
      createdAt: data.created_at as string,
    };
  },

  async listGroups(
    teacherId: string,
    opts?: { schoolId?: string; courseId?: string },
  ): Promise<TeacherGroupDTO[]> {
    const admin = requireAdmin();
    let q = admin
      .from("teacher_groups")
      .select("*")
      .eq("teacher_id", teacherId)
      .is("deleted_at", null)
      .order("created_at", { ascending: false });
    if (opts?.schoolId) q = q.eq("school_id", opts.schoolId);
    if (opts?.courseId) q = q.eq("course_id", opts.courseId);

    const { data, error } = await q;
    if (error) throw new Error(error.message);
    const groups = data ?? [];
    if (groups.length === 0) return [];

    const ids = groups.map((g) => g.id as string);
    const { data: links } = await admin
      .from("teacher_students")
      .select("group_id")
      .eq("teacher_id", teacherId)
      .eq("status", "active")
      .is("deleted_at", null)
      .in("group_id", ids);

    const counts = new Map<string, number>();
    for (const l of links ?? []) {
      const gid = l.group_id as string | null;
      if (!gid) continue;
      counts.set(gid, (counts.get(gid) ?? 0) + 1);
    }

    return groups.map((g) => ({
      id: g.id as string,
      teacherId: g.teacher_id as string,
      schoolId: (g.school_id as string | null) ?? null,
      name: g.name as string,
      courseId: g.course_id as string,
      createdAt: g.created_at as string,
      studentCount: counts.get(g.id as string) ?? 0,
    }));
  },

  async createGroup(input: {
    teacherId: string;
    name: string;
    courseId: string;
    schoolId?: string | null;
  }): Promise<TeacherGroupDTO> {
    const name = input.name.trim().slice(0, 80);
    if (name.length < 1) throw new Error("INVALID_NAME");
    if (input.courseId !== "spanish" && input.courseId !== "english") {
      throw new Error("INVALID_COURSE");
    }

    if (input.schoolId) {
      const m = await getMembership(input.teacherId, input.schoolId);
      if (!m) throw new Error("FORBIDDEN");
    }

    const admin = requireAdmin();
    const { data, error } = await admin
      .from("teacher_groups")
      .insert({
        teacher_id: input.teacherId,
        school_id: input.schoolId ?? null,
        name,
        course_id: input.courseId,
      })
      .select("*")
      .single();
    if (error) throw new Error(error.message);

    return {
      id: data.id as string,
      teacherId: data.teacher_id as string,
      schoolId: (data.school_id as string | null) ?? null,
      name: data.name as string,
      courseId: data.course_id as string,
      createdAt: data.created_at as string,
      studentCount: 0,
    };
  },

  async renameGroup(
    teacherId: string,
    groupId: string,
    name: string,
  ): Promise<void> {
    const trimmed = name.trim().slice(0, 80);
    if (!trimmed) throw new Error("INVALID_NAME");
    const admin = requireAdmin();
    const { error } = await admin
      .from("teacher_groups")
      .update({ name: trimmed })
      .eq("id", groupId)
      .eq("teacher_id", teacherId)
      .is("deleted_at", null);
    if (error) throw new Error(error.message);
  },

  async deleteGroup(teacherId: string, groupId: string): Promise<void> {
    const admin = requireAdmin();
    // Unlink students from group (keep enrollments).
    await admin
      .from("teacher_students")
      .update({ group_id: null })
      .eq("teacher_id", teacherId)
      .eq("group_id", groupId)
      .is("deleted_at", null);

    const { error } = await admin
      .from("teacher_groups")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", groupId)
      .eq("teacher_id", teacherId)
      .is("deleted_at", null);
    if (error) throw new Error(error.message);
  },

  async assignStudentToGroup(input: {
    teacherId: string;
    linkId: string;
    groupId: string | null;
  }): Promise<void> {
    const admin = requireAdmin();

    if (input.groupId) {
      const { data: group, error } = await admin
        .from("teacher_groups")
        .select("id, teacher_id, course_id")
        .eq("id", input.groupId)
        .eq("teacher_id", input.teacherId)
        .is("deleted_at", null)
        .maybeSingle();
      if (error) throw new Error(error.message);
      if (!group) throw new Error("GROUP_NOT_FOUND");

      const { data: link, error: lErr } = await admin
        .from("teacher_students")
        .select("id, course_id")
        .eq("id", input.linkId)
        .eq("teacher_id", input.teacherId)
        .eq("status", "active")
        .is("deleted_at", null)
        .maybeSingle();
      if (lErr) throw new Error(lErr.message);
      if (!link) throw new Error("LINK_NOT_FOUND");
      if (link.course_id !== group.course_id) {
        throw new Error("COURSE_MISMATCH");
      }
    }

    const { error: uErr } = await admin
      .from("teacher_students")
      .update({ group_id: input.groupId })
      .eq("id", input.linkId)
      .eq("teacher_id", input.teacherId)
      .is("deleted_at", null);
    if (uErr) throw new Error(uErr.message);
  },
} as const;
