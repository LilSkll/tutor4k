import type { CourseKeywords } from "@/types";

// =====================================================================
// Universal Domain Guard
// ---------------------------------------------------------------------
// Works for ANY course. Accepts keywords from the CourseConfig.
// Each course defines its own onTopic / offTopic / greetings.
// =====================================================================

/**
 * Determine whether a user question is off-topic for a given course.
 * Returns true if it should be refused.
 *
 * @param question The user's question.
 * @param keywords The course's keyword configuration.
 */
export function isOffTopicForCourse(
  question: string,
  keywords: CourseKeywords,
): boolean {
  const q = question.toLowerCase().trim();

  if (q.length < 2) return false;

  // Greetings — always let through.
  if (keywords.greetings?.some((g) => q.startsWith(g))) return false;

  // On-topic keywords — always pass.
  if (keywords.onTopic?.some((kw) => q.includes(kw.toLowerCase()))) return false;

  // Strongly off-topic domains — refuse.
  if (keywords.offTopic?.some((kw) => q.includes(kw.toLowerCase()))) return true;

  // Default: allow (the model enforces the restriction via the prompt).
  return false;
}
