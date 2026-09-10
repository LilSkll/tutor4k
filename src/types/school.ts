/** Schools & groups (Stage 9). */

export type SchoolMemberRole = "owner" | "admin" | "teacher";

export type SchoolDTO = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  myRole: SchoolMemberRole | null;
};

export type SchoolMemberDTO = {
  id: string;
  schoolId: string;
  userId: string;
  memberRole: SchoolMemberRole;
  name: string | null;
  email: string | null;
  createdAt: string;
};

export type TeacherGroupDTO = {
  id: string;
  teacherId: string;
  schoolId: string | null;
  name: string;
  courseId: string;
  createdAt: string;
  studentCount: number;
};
