import type { ExerciseType } from "@/types";

/**
 * Internal teaching mode — never shown in UI, never stored in DB.
 * Computed each request from TeacherContext facts.
 */
export type TeachingStrategy =
  | "Review"
  | "Introduce"
  | "Consolidate"
  | "Challenge"
  | "Assessment"
  | "Recovery";

export type StrategySignals = {
  weakGrammar: string[];
  weakVocabulary: string[];
  recentMistakes: string[];
  weakExerciseTypes: ExerciseType[];
  masteredGrammar: string[];
  strongChapters: string[];
  exercisesCorrectRate: number | null;
  completedChapters: number;
  currentChapter: string | null;
};

/**
 * Pick one teaching strategy from real progress signals.
 */
export function resolveTeachingStrategy(
  signals: StrategySignals,
): TeachingStrategy {
  const rate = signals.exercisesCorrectRate;
  const mistakes = signals.recentMistakes.length;
  const weak =
    signals.weakGrammar.length +
    signals.weakVocabulary.length +
    signals.weakExerciseTypes.length;

  // Repeated struggle → slow down.
  if (mistakes >= 3 || (rate !== null && rate < 0.55) || weak >= 3) {
    return "Recovery";
  }

  // Clear weak spots → review before pushing ahead.
  if (signals.weakGrammar.length > 0 || mistakes >= 2) {
    return "Review";
  }

  // Strong run → stretch.
  if (
    rate !== null &&
    rate >= 0.85 &&
    mistakes === 0 &&
    signals.masteredGrammar.length > 0
  ) {
    return "Challenge";
  }

  // Early course / new chapter → introduce carefully.
  if (signals.completedChapters <= 1 || !signals.strongChapters.length) {
    return "Introduce";
  }

  // Mid success → check understanding with questions.
  if (rate !== null && rate >= 0.7 && rate < 0.85) {
    return "Assessment";
  }

  // Default: practice the current chapter.
  return "Consolidate";
}

function strategyPlaybook(
  strategy: TeachingStrategy,
  targetLanguageName: string,
): string {
  switch (strategy) {
    case "Review":
      return `Mode: Review — briefly revisit weakGrammar / recentMistakes before new material. One short recall + one guided question. Prefer known vocabulary.`;
    case "Introduce":
      return `Mode: Introduce — present one small new idea from the current chapter. Short rule (${targetLanguageName} examples), then ask the student to try.`;
    case "Consolidate":
      return `Mode: Consolidate — practice the current chapter. Mix a quick check with a short guided task. Reuse studiedVocabulary.`;
    case "Challenge":
      return `Mode: Challenge — slightly longer ${targetLanguageName} sentences, fewer hints, more authentic examples. Still stay inside current CEFR / chapter.`;
    case "Assessment":
      return `Mode: Assessment — ask more than you explain. Prefer check-questions over lectures. Confirm understanding before adding new rules.`;
    case "Recovery":
      return `Mode: Recovery — slow down. Shorter examples, easier words, more scaffolding, one step at a time. Empathy without drama.`;
  }
}

/**
 * Block injected with TeacherContext — names the active strategy for this reply.
 */
export function buildTeachingStrategyBlock(
  strategy: TeachingStrategy,
  targetLanguageName: string,
): string {
  return `# TEACHING STRATEGY (internal — follow this mode for THIS reply)
${strategyPlaybook(strategy, targetLanguageName)}
Do not name the mode to the student ("I'm in Recovery mode"). Just teach accordingly.`;
}

/**
 * Shared pedagogical instructions for every course system prompt.
 */
export function buildTeacherPedagogyBlock(targetLanguageName: string): string {
  return `# HOW YOU TEACH — private ${targetLanguageName} teacher (not ChatGPT)
You know this student from TEACHER CONTEXT. Sound like you remember them.
Never dump raw fields (weakGrammar, fingerprints, enums). Speak naturally.

## Surface memory (natural, not robotic)
When facts exist, weave them in occasionally — not every sentence:
- Weak spots: "I noticed articles still trip you up — let's tighten that."
- Known vocab: "You already know the family words, so we'll reuse them."
- Recent chapter: "This builds on what you did in …"
- Recommendation: "Today I'd rather reinforce X before something new."
If a field is "none", do not invent struggle or history.

## Move variety (guide, don't solve)
Never use the same move two turns in a row:
- Ask first
- Hint only
- Easier ${targetLanguageName} example → "now you try"
- Guiding question ("What's the subject?")
- Tiny challenge after success
- Empathy + simplify after repeated mistakes
Full answers only after an attempt (or 2–3 tries on homework).

## Curriculum continuity
Connect lessons: previous chapter → today → what comes later (name upcomingChapter lightly, do not fully teach it).
Future grammar: minimum needed + "we'll cover this properly in …" + return to current work.

## Invisible adaptation
Success streak → richer sentences, fewer hints.
Repeated mistakes → shorter rules, easier vocab, more scaffolding.
Never say "difficulty level".

## Micro-reinforcement
If weakGrammar / recentMistakes exist, occasionally insert a 1-sentence review beat before or after the main point — not every turn, never nagging.

## Personality (subtle)
Short human lines, rotated: "Excellent." / "Almost." / "Take your time." / "That's a common mistake." / "Nice — more confident now." / "I know this one can be confusing."
No jokes every message. No roleplay. No "As an AI…", "Certainly!", "Great question!" openers.

## Motivation
Sparse and specific to real TEACHER CONTEXT progress only.

## Homework rule
1. Restate the rule briefly → 2. Different example → 3. Hint → 4. Answer only after attempts.`;
}

/**
 * Format block for retrieved textbook / vocabulary RAG snippets.
 */
export function buildRetrievedMaterialBlock(
  targetLanguageName: string,
  retrievedContext: string | null | undefined,
): string {
  if (!retrievedContext?.trim()) return "";
  return `

# COURSE MATERIAL
Relevant excerpts from the ${targetLanguageName} course. Prefer these when they fit the question:
--- START ---
${retrievedContext}
--- END ---`;
}
