import { getAvailableCourseIds } from "@/config/courses";

/** Registered course ids (spanish | english | russian | …). */
export function isKnownCourseId(
  raw: unknown,
): raw is string {
  return typeof raw === "string" && getAvailableCourseIds().includes(raw);
}

/** Coerce query/body courseId; null if unknown. */
export function parseCourseId(raw: unknown): string | null {
  if (!isKnownCourseId(raw)) return null;
  return raw;
}

/** Default when missing / invalid. */
export function resolveCourseId(
  raw: unknown,
  fallback = "spanish",
): string {
  return parseCourseId(raw) ?? fallback;
}
