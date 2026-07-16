import type {
  LearningRecommendation,
  LessonAdaptation,
  LessonFlowMode,
  SkillEvidence,
  StudentCourseProfile,
} from "@/types/learning-profile";

/**
 * Adaptive Intelligence helpers — course-agnostic, profile-driven.
 * Used by exercise pool, lesson runner, and TeacherContext prompts.
 */

/** Days since last practice (null lastPracticed → treat as very stale). */
export function daysSincePracticed(lastPracticed: string | null): number {
  if (!lastPracticed) return 999;
  const then = new Date(lastPracticed + "T00:00:00Z").getTime();
  if (Number.isNaN(then)) return 999;
  const now = Date.now();
  return Math.max(0, Math.floor((now - then) / 86_400_000));
}

/**
 * Soft forgetting curve (applied on read, not destructive jumps):
 * 1d: 0, 7d: -2, 14d: -5, 30d+: -10
 */
export function forgettingPenalty(days: number): number {
  if (days < 7) return 0;
  if (days < 14) return 2;
  if (days < 30) return 5;
  return 10;
}

export function evidenceCount(ev: SkillEvidence): number {
  return ev.correctAnswers + ev.wrongAnswers;
}

/**
 * Certainty 0–1 from sample size. Low evidence → cautious language.
 */
export function skillCertainty(ev: SkillEvidence): number {
  const n = evidenceCount(ev);
  if (n <= 0) return 0;
  if (n >= 25) return 0.95;
  return Math.min(0.95, n / 25);
}

export function withForgetting(ev: SkillEvidence): SkillEvidence {
  if (!ev || typeof ev !== "object") {
    return {
      confidence: 40,
      lastPracticed: null,
      correctAnswers: 0,
      wrongAnswers: 0,
      commonMistakes: [],
    };
  }
  const days = daysSincePracticed(ev.lastPracticed);
  const penalty = forgettingPenalty(days);
  return {
    ...ev,
    confidence: Math.max(0, Math.min(100, (ev.confidence ?? 40) - penalty)),
    commonMistakes: Array.isArray(ev.commonMistakes) ? ev.commonMistakes : [],
  };
}

export function applyForgettingToProfile(
  profile: StudentCourseProfile,
): StudentCourseProfile {
  const map = (m: Record<string, SkillEvidence>) => {
    const out: Record<string, SkillEvidence> = {};
    for (const [k, v] of Object.entries(m)) {
      out[k] = withForgetting(v);
    }
    return out;
  };
  return {
    ...profile,
    grammar: map(profile.grammar),
    vocabulary: map(profile.vocabulary),
  };
}

type RankedTopic = {
  type: "grammar" | "vocabulary";
  topic: string;
  priority: number;
  reason: LearningRecommendation["reason"];
  confidence: number;
  certainty: number;
  mistakes: number;
  days: number;
};

function rankAllTopics(profile: StudentCourseProfile): RankedTopic[] {
  const rows: RankedTopic[] = [];

  const push = (
    type: "grammar" | "vocabulary",
    topic: string,
    ev: SkillEvidence,
  ) => {
    const faded = withForgetting(ev);
    const days = daysSincePracticed(ev.lastPracticed);
    const certainty = skillCertainty(ev);
    const mistakeRatio =
      evidenceCount(ev) > 0 ? ev.wrongAnswers / evidenceCount(ev) : 0;

    // Priority: low confidence + mistakes + staleness (higher = more urgent).
    let priority =
      (100 - faded.confidence) / 100 * 0.55 +
      mistakeRatio * 0.25 +
      Math.min(days, 60) / 60 * 0.2;

    let reason: LearningRecommendation["reason"] = "low_confidence";
    if (mistakeRatio >= 0.35 && ev.wrongAnswers >= 2) {
      reason = "recent_mistakes";
      priority += 0.08;
    } else if (days >= 14 && faded.confidence >= 50) {
      reason = "stale_topic";
      priority += 0.05;
    } else if (forgettingPenalty(days) >= 5) {
      reason = "forgetting";
    }

    rows.push({
      type,
      topic,
      priority: Math.min(0.99, priority),
      reason,
      confidence: faded.confidence,
      certainty,
      mistakes: ev.wrongAnswers,
      days,
    });
  };

  for (const [topic, ev] of Object.entries(profile.grammar)) {
    push("grammar", topic, ev);
  }
  for (const [topic, ev] of Object.entries(profile.vocabulary)) {
    push("vocabulary", topic, ev);
  }

  return rows.sort((a, b) => b.priority - a.priority);
}

/** Structured recommendations from the cognitive model. */
export function buildStructuredRecommendations(
  profile: StudentCourseProfile,
  limit = 5,
): LearningRecommendation[] {
  const ranked = rankAllTopics(profile);
  const recs: LearningRecommendation[] = [];

  for (const row of ranked) {
    if (row.confidence >= 85 && row.days < 14) continue;
    recs.push({
      type: row.type,
      topic: row.topic,
      priority: Number(row.priority.toFixed(2)),
      reason: row.reason,
      confidence: row.confidence,
      certainty: Number(row.certainty.toFixed(2)),
    });
    if (recs.length >= limit) break;
  }

  if (recs.length === 0 && profile.strengths[0]) {
    recs.push({
      type: "grammar",
      topic: profile.strengths[0].replace(/^grammar:\s*/i, ""),
      priority: 0.2,
      reason: "consolidate_strength",
      confidence: 90,
      certainty: 0.7,
    });
  }

  return recs;
}

export function recommendationsToLegacyStrings(
  recs: LearningRecommendation[],
): string[] {
  return recs.map((r) => {
    const conf =
      r.confidence !== undefined ? ` (${r.confidence}%)` : "";
    return `${r.reason}: ${r.type} ${r.topic}${conf} [p=${r.priority}]`;
  });
}

/**
 * Priority order for adaptive exercise selection:
 * 1) lowest confidence 2) recent mistakes 3) stale 4) new/other
 */
export function rankTopicsForExercises(
  profile: StudentCourseProfile,
): string[] {
  return rankAllTopics(profile).map((r) => r.topic);
}

export function getTopicPracticeScore(
  profile: StudentCourseProfile,
  grammarTopic: string | null | undefined,
  vocabTopic?: string | null,
): number {
  const ranked = rankAllTopics(profile);
  let best = 0;
  for (const row of ranked) {
    if (
      (grammarTopic && row.topic === grammarTopic) ||
      (vocabTopic && row.topic === vocabTopic) ||
      (grammarTopic && row.topic.includes(grammarTopic)) ||
      (vocabTopic && row.topic.includes(vocabTopic))
    ) {
      best = Math.max(best, row.priority);
    }
  }
  return best;
}

export function planLessonAdaptation(
  profile: StudentCourseProfile,
  chapterGrammarTopic: string,
  chapterVocabTopic?: string | null,
): LessonAdaptation {
  const faded = applyForgettingToProfile(profile);
  const g = faded.grammar[chapterGrammarTopic];
  const v = chapterVocabTopic
    ? faded.vocabulary[chapterVocabTopic]
    : undefined;

  const confParts = [g?.confidence, v?.confidence].filter(
    (n): n is number => typeof n === "number",
  );
  const chapterConfidence =
    confParts.length > 0
      ? Math.round(confParts.reduce((a, b) => a + b, 0) / confParts.length)
      : null;

  const certainty = g ? skillCertainty(g) : v ? skillCertainty(v) : 0;

  let mode: LessonFlowMode = "standard";
  if (chapterConfidence !== null && chapterConfidence >= 75 && certainty >= 0.4) {
    mode = "mastered_short";
  } else if (
    chapterConfidence !== null &&
    chapterConfidence < 50 &&
    certainty >= 0.25
  ) {
    mode = "supportive";
  } else if (chapterConfidence === null || certainty < 0.2) {
    mode = "supportive"; // little evidence → careful
  }

  const revisionTopics = buildStructuredRecommendations(faded, 3).filter(
    (r) =>
      r.topic !== chapterGrammarTopic &&
      r.topic !== chapterVocabTopic &&
      (r.reason === "recent_mistakes" ||
        r.reason === "stale_topic" ||
        r.reason === "forgetting" ||
        (r.confidence !== undefined && r.confidence < 45)),
  );

  const needsRevision = revisionTopics.length > 0;

  return {
    mode,
    chapterConfidence,
    chapterCertainty: Number(certainty.toFixed(2)),
    needsRevision,
    revisionTopics: revisionTopics.slice(0, 3),
    theoryFirst: mode !== "mastered_short" || profile.preferences.likesExplanations,
    practiceEmphasis:
      mode === "mastered_short" || profile.preferences.likesExercises,
    shortTheory: mode === "mastered_short",
  };
}

/**
 * Rank chapter slugs by profile urgency (low confidence / mistakes / stale first).
 * Course-agnostic — uses chapter.grammarTopic / vocabTopic from Course Registry.
 */
export function rankChapterSlugsByProfile(
  chapters: Array<{ slug: string; grammarTopic: string; vocabTopic?: string }>,
  profile: StudentCourseProfile,
  fallbackSlugs: string[] = [],
): string[] {
  const scored = chapters
    .map((ch) => ({
      slug: ch.slug,
      score: getTopicPracticeScore(profile, ch.grammarTopic, ch.vocabTopic),
    }))
    .sort((a, b) => b.score - a.score);

  const ranked: string[] = [];
  const push = (slug: string | null | undefined) => {
    if (slug && !ranked.includes(slug)) ranked.push(slug);
  };

  for (const row of scored) {
    if (row.score > 0.05) push(row.slug);
  }
  for (const slug of fallbackSlugs) push(slug);

  return ranked;
}

export { applyForgettingToProfile as applyForgettingCurve };
