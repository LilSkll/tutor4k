import type { CourseConfig } from "@/types";

// =====================================================================
// Course Registry
// ---------------------------------------------------------------------
// Central registry of all available courses. Adding a new language
// course = adding one import + one entry to REGISTRY.
//
// Usage:
//   import { getCourse } from "@/config/courses";
//   const course = await getCourse("spanish");
//   course.getChapters() // → Chapter[]
// =====================================================================

export const DEFAULT_COURSE_ID = "spanish";

// Lazy loaders — each course is only loaded when needed.
const LOADERS: Record<string, () => Promise<CourseConfig>> = {
  spanish: () =>
    import("./spanish").then((m) => m.loadSpanishCourse()),
  english: () =>
    import("./english").then((m) => m.loadEnglishCourse()),
  russian: () =>
    import("./russian").then((m) => m.loadRussianCourse()),
};

// In-memory cache (survives within a warm serverless instance).
const cache = new Map<string, CourseConfig>();

/**
 * Load a course configuration by ID.
 * Returns the default course (Spanish) if the ID is unknown.
 */
export async function getCourse(
  courseId: string | null | undefined,
): Promise<CourseConfig> {
  const id = courseId || DEFAULT_COURSE_ID;

  // Return from cache if available.
  if (cache.has(id)) return cache.get(id)!;

  const loader = LOADERS[id];
  if (!loader) {
    // Fallback to default course.
    if (id !== DEFAULT_COURSE_ID && cache.has(DEFAULT_COURSE_ID)) {
      return cache.get(DEFAULT_COURSE_ID)!;
    }
    const fallback = await LOADERS[DEFAULT_COURSE_ID]();
    cache.set(DEFAULT_COURSE_ID, fallback);
    return fallback;
  }

  const config = await loader();
  cache.set(id, config);
  return config;
}

/**
 * Get the list of available course IDs.
 * In the future, this will query the `courses` table in Supabase.
 */
export function getAvailableCourseIds(): string[] {
  return Object.keys(LOADERS);
}
