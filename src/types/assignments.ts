/** Teacher assignments + notifications (Stage 7). */

export type TeacherAssignmentKind = "chapter" | "exercise_set";
export type TeacherAssignmentStatus = "assigned" | "completed" | "cancelled";
export type TeacherAssignmentSource = "teacher" | "ai";

export type ChapterAssignmentPayload = {
  chapterSlugs: string[];
  note?: string;
};

export type ExerciseSetAssignmentPayload = {
  type?: string;
  level?: string;
  count?: number;
  exam?: boolean;
  note?: string;
};

export type TeacherAssignmentPayload =
  | ChapterAssignmentPayload
  | ExerciseSetAssignmentPayload;

export type TeacherAssignmentDTO = {
  id: string;
  teacherId: string;
  studentId: string | null;
  groupId: string | null;
  courseId: string;
  kind: TeacherAssignmentKind;
  source: TeacherAssignmentSource;
  payload: TeacherAssignmentPayload;
  dueAt: string | null;
  status: TeacherAssignmentStatus;
  createdAt: string;
  completedAt: string | null;
  studentName?: string | null;
  studentEmail?: string | null;
  teacherName?: string | null;
};

export type NotificationDTO = {
  id: string;
  userId: string;
  type: string;
  payload: Record<string, unknown>;
  readAt: string | null;
  createdAt: string;
};
