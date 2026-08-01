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

/** Course progress aggregates (completion %, chapters, activity). */
export const ProgressService = {
  async getCourseProgress(_userId: string, _courseId: string): Promise<never> {
    throw new ServiceNotImplementedError("ProgressService", "getCourseProgress");
  },
  async getWeekActivity(_userId: string, _courseId: string): Promise<never> {
    throw new ServiceNotImplementedError("ProgressService", "getWeekActivity");
  },
  async getStreakSummary(_userId: string, _courseId?: string): Promise<never> {
    throw new ServiceNotImplementedError("ProgressService", "getStreakSummary");
  },
} as const;

/** Normalised mistake journal (`student_mistakes`). */
export const MistakesService = {
  async listForCourse(_userId: string, _courseId: string): Promise<never> {
    throw new ServiceNotImplementedError("MistakesService", "listForCourse");
  },
  async recordMistake(_input: unknown): Promise<never> {
    throw new ServiceNotImplementedError("MistakesService", "recordMistake");
  },
} as const;

/** Cached teacher-facing AI reports (`teacher_ai_reports`). */
export const TeacherAiService = {
  async getLatestReport(_studentId: string, _courseId: string): Promise<never> {
    throw new ServiceNotImplementedError("TeacherAiService", "getLatestReport");
  },
  async refreshIfStale(_studentId: string, _courseId: string): Promise<never> {
    throw new ServiceNotImplementedError("TeacherAiService", "refreshIfStale");
  },
} as const;

/** Homework assignments (`teacher_assignments`). */
export const AssignmentService = {
  async listForTeacher(_teacherId: string): Promise<never> {
    throw new ServiceNotImplementedError("AssignmentService", "listForTeacher");
  },
  async create(_input: unknown): Promise<never> {
    throw new ServiceNotImplementedError("AssignmentService", "create");
  },
} as const;

/** Private teacher notes (`teacher_notes`). */
export const TeacherNotesService = {
  async list(_teacherId: string, _studentId: string, _courseId: string): Promise<never> {
    throw new ServiceNotImplementedError("TeacherNotesService", "list");
  },
} as const;
