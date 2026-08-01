/** Teacher Studio link/invite types (shared client + server). */

export type TeacherStudentRole = "student" | "trial" | "alumni";
export type TeacherLinkStatus = "pending" | "active" | "revoked";
export type TeacherLinkCreatedBy = "teacher" | "school_admin" | "system";

export type TeacherInviteRow = {
  id: string;
  teacher_id: string;
  group_id: string | null;
  course_id: string;
  code: string;
  token: string;
  max_uses: number | null;
  uses_count: number;
  expires_at: string | null;
  status: "open" | "closed";
  created_at: string;
  deleted_at: string | null;
};

export type TeacherStudentRow = {
  id: string;
  teacher_id: string;
  student_id: string;
  group_id: string | null;
  course_id: string;
  role: TeacherStudentRole;
  status: TeacherLinkStatus;
  created_by: TeacherLinkCreatedBy;
  invited_at: string;
  accepted_at: string | null;
  created_at: string;
  deleted_at: string | null;
};
