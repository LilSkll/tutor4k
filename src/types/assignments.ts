/** Teacher assignments + notifications (Stage 7) + writing homework. */

export type TeacherAssignmentKind = "chapter" | "exercise_set" | "writing";
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

/** Free-form writing (letter, essay). AI review is on-demand for the teacher only. */
export type WritingAssignmentPayload = {
  /** Task brief shown to the student (required). */
  prompt: string;
  /** Optional grammar library slug, e.g. dele-carta-formal. */
  grammarTopicSlug?: string;
  note?: string;
};

export type TeacherAssignmentPayload =
  | ChapterAssignmentPayload
  | ExerciseSetAssignmentPayload
  | WritingAssignmentPayload;

export type AssignmentSubmissionDTO = {
  body: string;
  submittedAt: string;
  aiAnalysis: string | null;
  aiAnalyzedAt: string | null;
};

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
  /** Present when the student submitted writing (or any future text kinds). */
  submission?: AssignmentSubmissionDTO | null;
};

export type NotificationDTO = {
  id: string;
  userId: string;
  type: string;
  payload: Record<string, unknown>;
  readAt: string | null;
  createdAt: string;
};

export function isWritingPayload(
  payload: TeacherAssignmentPayload,
): payload is WritingAssignmentPayload {
  return "prompt" in payload && typeof (payload as WritingAssignmentPayload).prompt === "string";
}

export function isChapterPayload(
  payload: TeacherAssignmentPayload,
): payload is ChapterAssignmentPayload {
  return "chapterSlugs" in payload;
}
