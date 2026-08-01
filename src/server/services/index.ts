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

export { TeacherAiService } from "./teacher-ai";
export { AssignmentService } from "./assignments";

export class ServiceNotImplementedError extends Error {
  constructor(service: string, method: string) {
    super(`[${service}] ${method} is not implemented yet.`);
    this.name = "ServiceNotImplementedError";
  }
}

function notImplemented(service: string, method: string): never {
  throw new ServiceNotImplementedError(service, method);
}

/** Normalised mistake journal (`student_mistakes`) — later stages. */
export const MistakesService = {
  listForCourse(userId: string, courseId: string): Promise<never> {
    return notImplemented("MistakesService", `listForCourse(${userId},${courseId})`);
  },
  recordMistake(input: unknown): Promise<never> {
    return notImplemented("MistakesService", `recordMistake(${typeof input})`);
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
