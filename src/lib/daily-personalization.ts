import type { StudentCourseProfile } from "@/types/learning-profile";

/** Internal profile notes — never show these as topic titles in the UI. */
export function isInternalStrengthLabel(key: string): boolean {
  return /^(completed chapter|needs review)\s*:/i.test(key.trim());
}

/**
 * Pick a high-confidence grammar topic to celebrate (not the weak one).
 * Returns a raw topic key — localize with resolveCourseTopicLabel.
 * Never returns English meta strings like "completed chapter: …".
 */
export function pickStrengthTopicSlug(
  profile: StudentCourseProfile,
  excludeTopic?: string | null,
): string | null {
  let bestHigh: { topic: string; confidence: number } | null = null;
  let bestAny: { topic: string; confidence: number } | null = null;

  for (const [topic, ev] of Object.entries(profile.grammar)) {
    if (excludeTopic && topic === excludeTopic) continue;
    if (isInternalStrengthLabel(topic)) continue;
    if (!bestAny || ev.confidence > bestAny.confidence) {
      bestAny = { topic, confidence: ev.confidence };
    }
    if (ev.confidence < 70) continue;
    if (!bestHigh || ev.confidence > bestHigh.confidence) {
      bestHigh = { topic, confidence: ev.confidence };
    }
  }
  if (bestHigh) return bestHigh.topic;
  // Soft fallback: a solid but not "mastered" topic still beats a meta string.
  if (bestAny && bestAny.confidence >= 55) return bestAny.topic;

  for (const raw of profile.strengths) {
    const key = raw.trim();
    if (!key || key === excludeTopic) continue;
    if (isInternalStrengthLabel(key)) continue;
    return key;
  }
  return null;
}
