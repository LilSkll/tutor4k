/**
 * Domain service stubs — Stage 2.
 * Teacher Studio and Student Journey both call these later;
 * Teacher UI must never import Student Dashboard internals.
 *
 * Methods throw until Stage 4+ implements them.
 */

export class ServiceNotImplementedError extends Error {
  constructor(service: string, method: string) {
    super(`[${service}] ${method} is not implemented yet (Stage 2 stub).`);
    this.name = "ServiceNotImplementedError";
  }
}

function notImplemented(service: string, method: string): never {
  throw new ServiceNotImplementedError(service, method);
}

/** Course progress aggregates (completion %, chapters, activity). */
export const ProgressService = {
  getCourseProgress(userId: string, courseId: string): Promise<never> {
    return notImplemented("ProgressService", `getCourseProgress(${userId},${courseId})`);
  },
  getWeekActivity(userId: string, courseId: string): Promise<never> {
    return notImplemented("ProgressService", `getWeekActivity(${userId},${courseId})`);
  },
  getStreakSummary(userId: string, courseId?: string): Promise<never> {
    return notImplemented(
      "ProgressService",
      `getStreakSummary(${userId},${courseId ?? ""})`,
    );
  },
} as const;

/** Normalised mistake journal (`student_mistakes`). */
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
