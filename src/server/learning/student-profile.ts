import { createSupabaseServerClient } from "@/lib/supabase-server";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import {
  applyForgettingToProfile,
  buildStructuredRecommendations,
  recommendationsToLegacyStrings,
  skillCertainty,
  evidenceCount,
} from "@/server/learning/adaptive";
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

function normalizeEvidence(raw: unknown): SkillEvidence | null {
  if (!raw || typeof raw !== "object") return null;
  const e = raw as Partial<SkillEvidence>;
  const confidence = Number(e.confidence);
  return {
    confidence: Number.isFinite(confidence)
      ? Math.max(0, Math.min(100, confidence))
      : 40,
    lastPracticed:
      typeof e.lastPracticed === "string" ? e.lastPracticed : null,
    correctAnswers: Math.max(0, Number(e.correctAnswers) || 0),
    wrongAnswers: Math.max(0, Number(e.wrongAnswers) || 0),
    commonMistakes: Array.isArray(e.commonMistakes)
      ? e.commonMistakes.filter((m): m is string => typeof m === "string")
      : [],
  };
}

function normalizeEvidenceMap(
  raw: unknown,
): Record<string, SkillEvidence> {
  if (!raw || typeof raw !== "object") return {};
  const out: Record<string, SkillEvidence> = {};
  for (const [key, value] of Object.entries(raw)) {
    const ev = normalizeEvidence(value);
    if (ev) out[key] = ev;
  }
  return out;
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
    recommendations: [],
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
    recommendations: [...(course.recommendations ?? [])],
    lastRecommendations: [...(course.lastRecommendations ?? [])],
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
    // Legacy string override ignored for structure — rebuild from evidence below.
    void signal.recommendations;
  }

  if (signal.skillHints) {
    next.skills = { ...next.skills, ...signal.skillHints };
  }

  // Structured recommendations from cognitive model.
  next.recommendations = buildStructuredRecommendations(next, MAX_RECS);
  next.lastRecommendations = recommendationsToLegacyStrings(
    next.recommendations,
  );

  return next;
}

/** @deprecated Prefer buildStructuredRecommendations */
export function buildRecommendations(course: StudentCourseProfile): string[] {
  return recommendationsToLegacyStrings(
    buildStructuredRecommendations(course, MAX_RECS),
  );
}

function normalizeCourse(raw: unknown): StudentCourseProfile {
  const base = emptyCourseProfile();
  if (!raw || typeof raw !== "object") return base;
  const c = raw as Partial<StudentCourseProfile>;
  return {
    ...base,
    grammar: normalizeEvidenceMap(c.grammar),
    vocabulary: normalizeEvidenceMap(c.vocabulary),
    skills: { ...base.skills, ...(c.skills ?? {}) },
    weaknesses: Array.isArray(c.weaknesses) ? c.weaknesses : [],
    strengths: Array.isArray(c.strengths) ? c.strengths : [],
    preferences: { ...base.preferences, ...(c.preferences ?? {}) },
    recommendations: Array.isArray(c.recommendations) ? c.recommendations : [],
    lastRecommendations: Array.isArray(c.lastRecommendations)
      ? c.lastRecommendations
      : [],
    updatedAt:
      typeof c.updatedAt === "string" ? c.updatedAt : base.updatedAt,
  };
}

function normalizeStore(raw: unknown): StudentLearningProfileStore {
  if (!raw || typeof raw !== "object") return emptyStore();
  const obj = raw as Partial<StudentLearningProfileStore>;
  if (obj.version !== 1 || !obj.courses || typeof obj.courses !== "object") {
    return emptyStore();
  }
  const courses: Record<string, StudentCourseProfile> = {};
  for (const [id, course] of Object.entries(obj.courses)) {
    courses[id] = normalizeCourse(course);
  }
  return { version: 1, courses };
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

  const { data, error } = await supabase
    .from("profiles")
    .select("learning_profile")
    .eq("id", uid)
    .maybeSingle();

  if (error) {
    console.warn(
      "[learning-profile] load failed:",
      error.message,
    );
    return emptyStore();
  }

  try {
    return normalizeStore(data?.learning_profile);
  } catch (err) {
    console.warn(
      "[learning-profile] normalize failed:",
      (err as Error).message,
    );
    return emptyStore();
  }
}

export async function getCourseLearningProfile(
  courseId: string,
  userId?: string,
): Promise<StudentCourseProfile> {
  const store = await getLearningProfileStore(userId);
  const raw = store.courses[courseId] ?? emptyCourseProfile();
  // Soft forgetting on read — cognitive model ages without practice.
  const faded = applyForgettingToProfile(normalizeCourse(raw));
  faded.recommendations = buildStructuredRecommendations(faded, MAX_RECS);
  faded.lastRecommendations = recommendationsToLegacyStrings(
    faded.recommendations,
  );
  return faded;
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
        const n = evidenceCount(v);
        const cert = skillCertainty(v);
        const mistakes =
          v.commonMistakes.length > 0
            ? ` [mistakes: ${v.commonMistakes.slice(0, 2).join("; ")}]`
            : "";
        return `${k}: confidence=${v.confidence}% evidence=${n} certainty=${cert.toFixed(2)}${mistakes}`;
      })
      .join("; ");
  };

  const prefs = profile.preferences;
  const prefLine = [
    prefs.likesExplanations ? "explanations-first" : null,
    prefs.likesExamples ? "examples" : null,
    prefs.likesExercises ? "exercises-first" : null,
    prefs.needsRepetition ? "needs-repetition" : null,
  ]
    .filter(Boolean)
    .join(", ");

  const structured =
    (profile.recommendations?.length
      ? profile.recommendations
      : buildStructuredRecommendations(profile, 5)
    )
      .map(
        (r) =>
          `{type:${r.type}, topic:${r.topic}, priority:${r.priority}, reason:${r.reason}, confidence:${r.confidence ?? "?"}, certainty:${r.certainty ?? "?"}}`,
      )
      .join("\n  ") || "none";

  return `# STUDENT LEARNING PROFILE (persistent evidence — course: ${courseId})
grammar: ${fmtMap(profile.grammar)}
vocabulary: ${fmtMap(profile.vocabulary)}
skills: listening=${profile.skills.listening ?? "?"} reading=${profile.skills.reading ?? "?"} writing=${profile.skills.writing ?? "?"} speaking=${profile.skills.speaking ?? "?"}
weaknesses: ${profile.weaknesses.join("; ") || "none"}
strengths: ${profile.strengths.join("; ") || "none"}
preferences: ${prefLine || "balanced"}
structuredRecommendations:
  ${structured}
updatedAt: ${profile.updatedAt}

# HOW TO USE THIS PROFILE (sound like you know this student for months)
- Speak in the interface language for explanations, hints, encouragement, and recommendations.
- Keep grammar examples / vocabulary / dialogues in the target language of the course.
- Use structuredRecommendations as the source for personal advice — turn them into natural sentences (do not dump JSON).
- If certainty < 0.4: use cautious wording ("It seems this still needs practice") — never "You are bad at X".
- If certainty ≥ 0.7 and confidence < 40: more scaffolding and examples with that pattern.
- If confidence ≥ 85: avoid unnecessary drilling; stretch slightly instead.
- Strengths: acknowledge briefly; Weaknesses: soft review moments, not lectures.
- Preferences: explanations-first → short rule then try; exercises-first → practice then confirm.
- Periodically revisit stale/forgetting topics from recommendations.
- Never invent scores or history not listed above.`;
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
