import { createSupabaseServerClient } from "@/lib/supabase-server";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import type {
  ProfileUpdateSignal,
  SkillEvidence,
  StudentCourseProfile,
  StudentLearningProfileStore,
} from "@/types/learning-profile";
import type { Level } from "@/types";

const STORE_VERSION = 1 as const;
const MAX_MISTAKES = 6;
const MAX_WEAK = 8;
const MAX_STRONG = 8;
const MAX_RECS = 5;

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function emptyEvidence(): SkillEvidence {
  return {
    confidence: 40,
    lastPracticed: null,
    correctAnswers: 0,
    wrongAnswers: 0,
    commonMistakes: [],
  };
}

export function emptyCourseProfile(): StudentCourseProfile {
  return {
    grammar: {},
    vocabulary: {},
    skills: {
      listening: null,
      reading: null,
      writing: null,
      speaking: null,
    },
    weaknesses: [],
    strengths: [],
    preferences: {
      likesExplanations: true,
      likesExamples: true,
      likesExercises: true,
      needsRepetition: false,
    },
    lastRecommendations: [],
    updatedAt: new Date().toISOString(),
  };
}

export function emptyStore(): StudentLearningProfileStore {
  return { version: STORE_VERSION, courses: {} };
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

/**
 * Weighted confidence update — never jumps 30→100 in one step.
 * High confidence grows slowly; mistakes hurt more when confidence was high.
 */
export function applyConfidenceDelta(
  current: number,
  correct: boolean,
): number {
  if (correct) {
    const room = 100 - current;
    const delta = Math.max(2, Math.round(room * 0.08));
    return clamp(current + delta, 0, 100);
  }
  const delta = Math.max(4, Math.round(current * 0.1));
  return clamp(current - delta, 0, 100);
}

function touchSkill(
  map: Record<string, SkillEvidence>,
  key: string,
  correct: boolean,
  mistakeNote?: string | null,
  exposureOnly?: boolean,
): void {
  const slug = key.trim();
  if (!slug) return;
  const prev = map[slug] ?? emptyEvidence();
  const next: SkillEvidence = {
    ...prev,
    confidence: exposureOnly
      ? clamp(prev.confidence + 1, 0, 100)
      : applyConfidenceDelta(prev.confidence, correct),
    lastPracticed: todayIso(),
    correctAnswers:
      prev.correctAnswers + (!exposureOnly && correct ? 1 : 0),
    wrongAnswers:
      prev.wrongAnswers + (!exposureOnly && !correct ? 1 : 0),
    commonMistakes: [...prev.commonMistakes],
  };
  if (!exposureOnly && !correct && mistakeNote?.trim()) {
    const note = mistakeNote.trim().slice(0, 80);
    if (!next.commonMistakes.includes(note)) {
      next.commonMistakes = [note, ...next.commonMistakes].slice(
        0,
        MAX_MISTAKES,
      );
    }
  }
  map[slug] = next;
}

function pushUnique(list: string[], item: string, max: number): string[] {
  const t = item.trim();
  if (!t) return list;
  const filtered = list.filter((x) => x.toLowerCase() !== t.toLowerCase());
  return [t, ...filtered].slice(0, max);
}

/**
 * Apply one learning signal to a course profile (pure).
 */
export function applyProfileSignal(
  course: StudentCourseProfile,
  signal: Omit<ProfileUpdateSignal, "courseId">,
): StudentCourseProfile {
  const next: StudentCourseProfile = {
    ...course,
    grammar: { ...course.grammar },
    vocabulary: { ...course.vocabulary },
    skills: { ...course.skills },
    weaknesses: [...course.weaknesses],
    strengths: [...course.strengths],
    preferences: { ...course.preferences },
    lastRecommendations: [...course.lastRecommendations],
    updatedAt: new Date().toISOString(),
  };

  const correct = signal.correct ?? true;
  const exposure = signal.exposureOnly === true;

  if (signal.grammarTopic) {
    touchSkill(
      next.grammar,
      signal.grammarTopic,
      correct,
      signal.mistakeNote,
      exposure,
    );
    if (!exposure) {
      const conf = next.grammar[signal.grammarTopic]?.confidence ?? 40;
      if (!correct && conf < 50) {
        next.weaknesses = pushUnique(
          next.weaknesses,
          signal.mistakeNote || `weak: ${signal.grammarTopic}`,
          MAX_WEAK,
        );
      }
      if (correct && conf >= 80) {
        next.strengths = pushUnique(
          next.strengths,
          `grammar: ${signal.grammarTopic}`,
          MAX_STRONG,
        );
        next.weaknesses = next.weaknesses.filter(
          (w) => !w.toLowerCase().includes(signal.grammarTopic!.toLowerCase()),
        );
      }
    }
  }

  if (signal.vocabTopic) {
    touchSkill(
      next.vocabulary,
      signal.vocabTopic,
      correct,
      signal.mistakeNote,
      exposure,
    );
    if (!exposure) {
      const conf = next.vocabulary[signal.vocabTopic]?.confidence ?? 40;
      if (correct && conf >= 85) {
        next.strengths = pushUnique(
          next.strengths,
          `vocabulary: ${signal.vocabTopic}`,
          MAX_STRONG,
        );
      }
    }
  }

  if (signal.addWeakness) {
    next.weaknesses = pushUnique(next.weaknesses, signal.addWeakness, MAX_WEAK);
    next.preferences.needsRepetition = true;
  }
  if (signal.addStrength) {
    next.strengths = pushUnique(next.strengths, signal.addStrength, MAX_STRONG);
  }

  if (signal.prefersExplanations !== undefined) {
    next.preferences.likesExplanations = signal.prefersExplanations;
  }
  if (signal.prefersExamples !== undefined) {
    next.preferences.likesExamples = signal.prefersExamples;
  }
  if (signal.prefersExercises !== undefined) {
    next.preferences.likesExercises = signal.prefersExercises;
  }
  if (signal.needsRepetition !== undefined) {
    next.preferences.needsRepetition = signal.needsRepetition;
  }

  if (signal.recommendations?.length) {
    next.lastRecommendations = signal.recommendations.slice(0, MAX_RECS);
  }

  if (signal.skillHints) {
    next.skills = { ...next.skills, ...signal.skillHints };
  }

  // Refresh recommendations from weakest skills when empty or after updates.
  next.lastRecommendations = buildRecommendations(next);

  return next;
}

export function buildRecommendations(course: StudentCourseProfile): string[] {
  const grammarRanked = Object.entries(course.grammar).sort(
    (a, b) => a[1].confidence - b[1].confidence,
  );
  const vocabRanked = Object.entries(course.vocabulary).sort(
    (a, b) => a[1].confidence - b[1].confidence,
  );

  const recs: string[] = [];
  for (const [slug, ev] of grammarRanked.slice(0, 2)) {
    if (ev.confidence < 70) {
      recs.push(`review grammar: ${slug} (${ev.confidence}%)`);
    }
  }
  for (const [slug, ev] of vocabRanked.slice(0, 1)) {
    if (ev.confidence < 75) {
      recs.push(`practice vocabulary: ${slug} (${ev.confidence}%)`);
    }
  }
  for (const w of course.weaknesses.slice(0, 2)) {
    recs.push(`address: ${w}`);
  }
  if (recs.length === 0 && course.strengths[0]) {
    recs.push(`keep consolidating: ${course.strengths[0]}`);
  }
  return recs.slice(0, MAX_RECS);
}

function normalizeStore(raw: unknown): StudentLearningProfileStore {
  if (!raw || typeof raw !== "object") return emptyStore();
  const obj = raw as Partial<StudentLearningProfileStore>;
  if (obj.version !== 1 || !obj.courses || typeof obj.courses !== "object") {
    return emptyStore();
  }
  return { version: 1, courses: { ...obj.courses } };
}

/**
 * Load full learning-profile store for the current user.
 */
export async function getLearningProfileStore(
  userId?: string,
): Promise<StudentLearningProfileStore> {
  const supabase = await createSupabaseServerClient();
  let uid = userId;
  if (!uid) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return emptyStore();
    uid = user.id;
  }

  const { data } = await supabase
    .from("profiles")
    .select("learning_profile")
    .eq("id", uid)
    .maybeSingle();

  return normalizeStore(data?.learning_profile);
}

export async function getCourseLearningProfile(
  courseId: string,
  userId?: string,
): Promise<StudentCourseProfile> {
  const store = await getLearningProfileStore(userId);
  return store.courses[courseId] ?? emptyCourseProfile();
}

/**
 * Persist store (service-role preferred).
 */
export async function saveLearningProfileStore(
  store: StudentLearningProfileStore,
  userId: string,
): Promise<void> {
  const admin = createSupabaseAdminClient();
  const client = admin ?? (await createSupabaseServerClient());
  await client
    .from("profiles")
    .update({ learning_profile: store })
    .eq("id", userId);
}

/**
 * Silently apply a signal to the user's course profile and save.
 */
export async function updateStudentLearningProfile(
  signal: ProfileUpdateSignal,
): Promise<StudentCourseProfile | null> {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;

    const store = await getLearningProfileStore(user.id);
    const prev = store.courses[signal.courseId] ?? emptyCourseProfile();
    const { courseId, ...rest } = signal;
    const updated = applyProfileSignal(prev, rest);
    store.courses[courseId] = updated;
    await saveLearningProfileStore(store, user.id);
    return updated;
  } catch (err) {
    console.warn(
      "[learning-profile] update failed:",
      (err as Error).message,
    );
    return null;
  }
}

/**
 * Markdown block for TeacherContext / prompts — never shown raw to the user.
 */
export function formatLearningProfilePromptBlock(
  courseId: string,
  profile: StudentCourseProfile,
): string {
  const fmtMap = (map: Record<string, SkillEvidence>, limit = 8) => {
    const rows = Object.entries(map)
      .sort((a, b) => a[1].confidence - b[1].confidence)
      .slice(0, limit);
    if (rows.length === 0) return "none yet";
    return rows
      .map(([k, v]) => {
        const mistakes =
          v.commonMistakes.length > 0
            ? ` [mistakes: ${v.commonMistakes.slice(0, 2).join("; ")}]`
            : "";
        return `${k}: ${v.confidence}% (✓${v.correctAnswers}/✗${v.wrongAnswers}${mistakes})`;
      })
      .join("; ");
  };

  const prefs = profile.preferences;
  const prefLine = [
    prefs.likesExplanations ? "explanations" : null,
    prefs.likesExamples ? "examples" : null,
    prefs.likesExercises ? "exercises" : null,
    prefs.needsRepetition ? "needs repetition" : null,
  ]
    .filter(Boolean)
    .join(", ");

  return `# STUDENT LEARNING PROFILE (persistent evidence — course: ${courseId})
grammar: ${fmtMap(profile.grammar)}
vocabulary: ${fmtMap(profile.vocabulary)}
skills: listening=${profile.skills.listening ?? "?"} reading=${profile.skills.reading ?? "?"} writing=${profile.skills.writing ?? "?"} speaking=${profile.skills.speaking ?? "?"}
weaknesses: ${profile.weaknesses.join("; ") || "none"}
strengths: ${profile.strengths.join("; ") || "none"}
preferences: ${prefLine || "balanced"}
lastRecommendations: ${profile.lastRecommendations.join("; ") || "none"}
updatedAt: ${profile.updatedAt}

# HOW TO USE THIS PROFILE
- Speak as a teacher who tracks these scores over time (never invent numbers).
- If a grammar topic is < 40%: more scaffolding and examples with that pattern.
- If vocabulary topic is ≥ 85%: avoid unnecessary drilling of the same words.
- Follow preferences: explanations-first vs exercises-first.
- Personal recommendations should come from lastRecommendations / weakest topics.
- Never dump raw JSON or percentage tables unless the student asks for progress.`;
}

/** Infer CEFR band from overall grammar confidence (soft). */
export function inferSkillBandFromProfile(
  profile: StudentCourseProfile,
  fallback: Level | null,
): Level | null {
  const values = Object.values(profile.grammar).map((g) => g.confidence);
  if (values.length === 0) return fallback;
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  if (avg >= 85) return "B2";
  if (avg >= 70) return "B1";
  if (avg >= 55) return "A2";
  return fallback ?? "A1";
}

/**
 * Map a free-text exercise topic / chapter slug to grammar + vocab slugs.
 */
export async function resolveTopicsForCourse(
  courseId: string,
  hint?: string | null,
): Promise<{ grammarTopic: string | null; vocabTopic: string | null }> {
  try {
    const { getCourse } = await import("@/config/courses");
    const course = await getCourse(courseId);
    const chapters = course.getChapters();
    if (!hint?.trim()) {
      return { grammarTopic: null, vocabTopic: null };
    }
    const t = hint.toLowerCase().trim();

    const bySlug = course.getChapter(t);
    if (bySlug) {
      return {
        grammarTopic: bySlug.grammarTopic,
        vocabTopic: bySlug.vocabTopic ?? null,
      };
    }

    for (const ch of chapters) {
      const title = (ch.titleEs || ch.title).toLowerCase();
      if (
        title.includes(t) ||
        t.includes(ch.grammarTopic) ||
        (ch.vocabTopic && t.includes(ch.vocabTopic))
      ) {
        return {
          grammarTopic: ch.grammarTopic,
          vocabTopic: ch.vocabTopic ?? null,
        };
      }
      const g = course.getGrammarTopic(ch.grammarTopic);
      if (
        g &&
        (g.title.toLowerCase().includes(t) ||
          (g.titleEs && g.titleEs.toLowerCase().includes(t)) ||
          t.includes(g.slug))
      ) {
        return {
          grammarTopic: ch.grammarTopic,
          vocabTopic: ch.vocabTopic ?? null,
        };
      }
    }

    // Fallback: treat hint as a soft grammar key.
    const slug = t
      .replace(/[^a-z0-9а-яё_-]+/gi, "-")
      .replace(/-+/g, "-")
      .slice(0, 48);
    return { grammarTopic: slug || null, vocabTopic: null };
  } catch {
    return { grammarTopic: null, vocabTopic: null };
  }
}

/**
 * Soft tutor-turn update: exposure + preference heuristics (no huge jumps).
 */
export async function recordTutorTurnInProfile(input: {
  courseId: string;
  userMessage: string;
  grammarTopic?: string | null;
  vocabTopic?: string | null;
}): Promise<void> {
  const q = input.userMessage.toLowerCase();
  const prefersExplanations =
    /объясн|explain|rule|правил|почему|why|cómo funciona|how does/.test(q);
  const prefersExamples =
    /пример|example|ejemplo|покажи|show me|дай пример/.test(q);
  const prefersExercises =
    /упражн|exercise|практик|practice|quiz|проверь меня|test me/.test(q);
  const needsRepetition =
    /ещё раз|again|повтор|repeat|не понял|don't understand|no entiendo/.test(
      q,
    );

  // Tiny exposure on current topics (does not count as scored success).
  await updateStudentLearningProfile({
    courseId: input.courseId,
    grammarTopic: input.grammarTopic,
    vocabTopic: input.vocabTopic,
    exposureOnly: true,
    prefersExplanations: prefersExplanations || undefined,
    prefersExamples: prefersExamples || undefined,
    prefersExercises: prefersExercises || undefined,
    needsRepetition: needsRepetition || undefined,
  });
}
