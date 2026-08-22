import type { ExerciseSetAssignmentPayload } from "@/types/assignments";

/** Build /exercises URL that pre-fills a teacher exercise_set assignment. */
export function buildHomeworkExerciseUrl(
  assignmentId: string,
  payload: ExerciseSetAssignmentPayload,
): string {
  const params = new URLSearchParams();
  params.set("assignment", assignmentId);
  if (payload.type) params.set("type", payload.type);
  if (payload.level) params.set("level", payload.level);
  if (typeof payload.count === "number" && payload.count > 0) {
    params.set("count", String(payload.count));
  }
  if (payload.exam) params.set("exam", "1");
  return `/exercises?${params.toString()}`;
}

export type HomeworkExerciseSearchParams = {
  assignmentId: string | null;
  type: string | null;
  level: string | null;
  count: number | null;
  exam: boolean;
};

export function parseHomeworkExerciseSearchParams(
  searchParams: URLSearchParams,
): HomeworkExerciseSearchParams {
  const countRaw = searchParams.get("count");
  const countParsed = countRaw ? Number.parseInt(countRaw, 10) : NaN;
  return {
    assignmentId: searchParams.get("assignment"),
    type: searchParams.get("type"),
    level: searchParams.get("level"),
    count: Number.isFinite(countParsed) && countParsed > 0 ? countParsed : null,
    exam: searchParams.get("exam") === "1",
  };
}
