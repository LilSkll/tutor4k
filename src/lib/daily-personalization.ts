import type { StudentCourseProfile } from "@/types/learning-profile";

/**
 * Pick a high-confidence grammar topic to celebrate (not the weak one).
 * Returns a raw topic key — localize with resolveCourseTopicLabel.
 */
export function pickStrengthTopicSlug(
  profile: StudentCourseProfile,
  excludeTopic?: string | null,
): string | null {
  let best: { topic: string; confidence: number } | null = null;
  for (const [topic, ev] of Object.entries(profile.grammar)) {
    if (excludeTopic && topic === excludeTopic) continue;
    if (ev.confidence < 70) continue;
    if (!best || ev.confidence > best.confidence) {
      best = { topic, confidence: ev.confidence };
    }
  }
  if (best) return best.topic;

  // Fall back to explicit strengths list (often topic keys).
  for (const raw of profile.strengths) {
    const key = raw.trim();
    if (!key || key === excludeTopic) continue;
    return key;
  }
  return null;
}
