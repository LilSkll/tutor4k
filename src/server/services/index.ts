/**
 * Domain services — Teacher Studio and Student Journey both call these;
 * Teacher UI must never import Student Dashboard internals.
 */

export {
  ProgressService,
  type CourseProgressSummary,
  type WeekActivityDay,
  type StreakSummary,
  type RecentMistake,
} from "./progress";

export class ServiceNotImplementedError extends Error {
  constructor(service: string, method: string) {
    super(`[${service}] ${method} is not implemented yet.`);
    this.name = "ServiceNotImplementedError";
  }
}

function notImplemented(service: string, method: string): never {
  throw new ServiceNotImplementedError(service, method);
}

/** Normalised mistake journal (`student_mistakes`) — Stage 5+. */
export const MistakesService = {
  listForCourse(userId: string, courseId: string): Promise<never> {
    return notImplemented("MistakesService", `listForCourse(${userId},${courseId})`);
  },
  recordMistake(input: unknown): Promise<never> {
    return notImplemented("MistakesService", `recordMistake(${typeof input})`);
  },
} as const;

/** Cached teacher-facing AI reports (`teacher_ai_reports`). */
export const TeacherAiService = {
  getLatestReport(studentId: string, courseId: string): Promise<never> {
    return notImplemented(
      "TeacherAiService",
      `getLatestReport(${studentId},${courseId})`,
    );
  },
  refreshIfStale(studentId: string, courseId: string): Promise<never> {
    return notImplemented(
      "TeacherAiService",
      `refreshIfStale(${studentId},${courseId})`,
    );
  },
} as const;

/** Homework assignments (`teacher_assignments`). */
export const AssignmentService = {
  listForTeacher(teacherId: string): Promise<never> {
    return notImplemented("AssignmentService", `listForTeacher(${teacherId})`);
  },
  create(input: unknown): Promise<never> {
    return notImplemented("AssignmentService", `create(${typeof input})`);
  },
} as const;

/** Private teacher notes (`teacher_notes`). */
export const TeacherNotesService = {
  list(teacherId: string, studentId: string, courseId: string): Promise<never> {
    return notImplemented(
      "TeacherNotesService",
      `list(${teacherId},${studentId},${courseId})`,
    );
  },
} as const;
