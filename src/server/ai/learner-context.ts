import { getCourse } from "@/config/courses";
import { countCompletedForCourse } from "@/lib/chapter-display";
import {
  getChapterProgress,
  getExerciseHistory,
} from "@/server/actions/data";
import {
  buildTeachingStrategyBlock,
  resolveTeachingStrategy,
  type TeachingStrategy,
} from "@/server/ai/prompts/teacher";
import type {
  Chapter,
  CourseConfig,
  ExerciseHistory,
  ExerciseType,
  InterfaceLanguage,
  Level,
} from "@/types";

/**
 * Internal teacher memory — never shown raw to the user.
 * Built only from existing progress + course config (no invented history).
 */
export type TeacherContext = {
  activeCourse: string;
  targetLanguage: string;
  interfaceLanguage: InterfaceLanguage;
  currentLevel: Level | null;
  currentChapter: string | null;
  currentChapterSlug: string | null;
  completedChapters: number;
  totalChapters: number;
  completedChapterTitles: string[];
  masteredGrammar: string[];
  weakGrammar: string[];
  weakVocabulary: string[];
  weakExerciseTypes: ExerciseType[];
  strongChapters: string[];
  weakChapters: string[];
  recommendedNextTopic: string;
  recentMistakes: string[];
  exercisesCompleted: number;
  /** 0–1 when enough samples; otherwise null. */
  exercisesCorrectRate: number | null;
  /** Internal mode for this reply — not UI, not DB. */
  teachingStrategy: TeachingStrategy;
  /** Compact fingerprint for tutor-cache keys. */
  fingerprint: string;
  /** Markdown block injected into system prompts. */
  promptBlock: string;
  /** Curriculum hint for exercise generation. */
  exerciseTopicHint: string;
  /** Session opening in the interface language (deterministic, progress-based). */
  sessionOpening: string;
  /** Chapter objects for ranking helpers. */
  currentChapterObj: Chapter | null;
  recentCompleted: Chapter[];
  upcomingChapter: Chapter | null;
  studiedGrammar: string[];
  studiedVocabTopics: string[];
};

/** @deprecated Prefer TeacherContext — same object. */
export type LearnerContext = TeacherContext;

function chapterTitle(ch: Chapter): string {
  return ch.titleEs || ch.title;
}

function resolveCurrentChapter(
  chapters: Chapter[],
  completed: Set<string>,
  level: Level | null,
): Chapter | null {
  if (chapters.length === 0) return null;

  let start = 0;
  if (level) {
    const firstForLevel = chapters.findIndex((c) => c.level === level);
    if (firstForLevel >= 0) start = firstForLevel;
  }

  for (let i = start; i < chapters.length; i++) {
    if (!completed.has(chapters[i].slug)) return chapters[i];
  }

  for (const ch of chapters) {
    if (!completed.has(ch.slug)) return ch;
  }
  return chapters[chapters.length - 1] ?? null;
}

function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function pickVariant<T>(variants: T[], seed: string): T {
  return variants[hashSeed(seed) % variants.length];
}

/**
 * Lightweight learner profile from exercise history + chapter scores.
 * No DB schema changes — in-memory only.
 */
function analyzeWeaknesses(input: {
  course: CourseConfig;
  completedOrdered: Chapter[];
  progressRows: { chapter_slug: string; score: number; status: string }[];
  history: ExerciseHistory[];
}): {
  masteredGrammar: string[];
  weakGrammar: string[];
  weakVocabulary: string[];
  weakExerciseTypes: ExerciseType[];
  strongChapters: string[];
  weakChapters: string[];
  recentMistakes: string[];
  exercisesCompleted: number;
  exercisesCorrectRate: number | null;
} {
  const { course, completedOrdered, progressRows, history } = input;

  const scoreBySlug = new Map(
    progressRows
      .filter((p) => p.status === "completed")
      .map((p) => [p.chapter_slug, p.score ?? 0]),
  );

  const strongChapters: string[] = [];
  const weakChapters: string[] = [];
  for (const ch of completedOrdered) {
    const score = scoreBySlug.get(ch.slug);
    if (score === undefined) continue;
    const title = chapterTitle(ch);
    if (score >= 85) strongChapters.push(title);
    else if (score < 70) weakChapters.push(title);
  }

  const typeStats = new Map<
    ExerciseType,
    { ok: number; fail: number }
  >();
  for (const h of history) {
    const cur = typeStats.get(h.exercise_type) ?? { ok: 0, fail: 0 };
    if (h.correct) cur.ok += 1;
    else cur.fail += 1;
    typeStats.set(h.exercise_type, cur);
  }

  const weakExerciseTypes: ExerciseType[] = [];
  for (const [type, s] of typeStats) {
    const total = s.ok + s.fail;
    if (total >= 3 && s.fail / total >= 0.4) weakExerciseTypes.push(type);
  }

  const mistakes = history.filter((h) => !h.correct).slice(0, 40);
  const recentMistakes = mistakes
    .slice(0, 5)
    .map((h) => h.exercise.trim().slice(0, 80))
    .filter(Boolean);

  const grammarHits = new Map<string, number>();
  const vocabHits = new Map<string, number>();

  for (const ch of completedOrdered) {
    const g = course.getGrammarTopic(ch.grammarTopic);
    const gLabel = g ? g.titleEs || g.title : ch.grammarTopic;
    const needles = [
      ch.grammarTopic,
      g?.title,
      g?.titleEs,
      gLabel,
    ]
      .filter(Boolean)
      .map((s) => String(s).toLowerCase());

    let hits = 0;
    for (const m of mistakes) {
      const blob = `${m.exercise} ${m.feedback}`.toLowerCase();
      if (needles.some((n) => n.length > 2 && blob.includes(n))) hits += 1;
    }
    if (hits > 0) grammarHits.set(gLabel, hits);

    // Low chapter score → treat that chapter's vocab topic as needing reinforcement.
    if (ch.vocabTopic) {
      const score = scoreBySlug.get(ch.slug) ?? 100;
      if (score < 75) {
        vocabHits.set(
          ch.vocabTopic,
          (vocabHits.get(ch.vocabTopic) ?? 0) + (75 - score),
        );
      }
    }
  }

  // Translation / fill-blank failures often signal vocab gaps on recent chapters.
  const vocabSensitive = mistakes.filter(
    (m) =>
      m.exercise_type === "translation" || m.exercise_type === "fill_blank",
  ).length;
  if (vocabSensitive >= 2) {
    for (const ch of completedOrdered.slice(-2)) {
      if (!ch.vocabTopic) continue;
      vocabHits.set(
        ch.vocabTopic,
        (vocabHits.get(ch.vocabTopic) ?? 0) + vocabSensitive,
      );
    }
  }

  // Chapters finished easily → mastered grammar; repeated mistake hits → weak.
  const masteredGrammar = completedOrdered
    .filter((ch) => (scoreBySlug.get(ch.slug) ?? 0) >= 85)
    .map((ch) => {
      const g = course.getGrammarTopic(ch.grammarTopic);
      return g ? g.titleEs || g.title : ch.grammarTopic;
    })
    .filter(Boolean)
    .slice(-6);

  const weakGrammar = [...grammarHits.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label]) => label)
    .slice(0, 4);

  // Also treat low-score chapter grammar as weak even without text match.
  for (const ch of completedOrdered) {
    if ((scoreBySlug.get(ch.slug) ?? 100) >= 70) continue;
    const g = course.getGrammarTopic(ch.grammarTopic);
    const label = g ? g.titleEs || g.title : ch.grammarTopic;
    if (label && !weakGrammar.includes(label)) weakGrammar.push(label);
  }

  const weakVocabulary = [...vocabHits.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([slug]) => slug)
    .slice(0, 4);

  const exercisesCompleted = history.length;
  const exercisesCorrectRate =
    history.length >= 5
      ? history.filter((h) => h.correct).length / history.length
      : null;

  return {
    masteredGrammar,
    weakGrammar: weakGrammar.slice(0, 4),
    weakVocabulary,
    weakExerciseTypes,
    strongChapters: strongChapters.slice(-4),
    weakChapters: weakChapters.slice(-4),
    recentMistakes,
    exercisesCompleted,
    exercisesCorrectRate,
  };
}

function recommendNextTopic(input: {
  course: CourseConfig;
  current: Chapter | null;
  upcoming: Chapter | null;
  weakGrammar: string[];
  weakVocabulary: string[];
  recentCompleted: Chapter[];
}): string {
  const { course, current, upcoming, weakGrammar, weakVocabulary, recentCompleted } =
    input;

  if (weakGrammar.length > 0) {
    return `Review weak grammar: ${weakGrammar[0]}`;
  }
  if (weakVocabulary.length > 0) {
    return `Reinforce vocabulary: ${weakVocabulary[0]}`;
  }
  if (recentCompleted[0]) {
    const last = recentCompleted[0];
    const g = course.getGrammarTopic(last.grammarTopic);
    return `Brief review of «${chapterTitle(last)}» (${g ? g.titleEs || g.title : last.grammarTopic}), then continue`;
  }
  if (current) {
    const g = course.getGrammarTopic(current.grammarTopic);
    return `Continue current chapter «${chapterTitle(current)}» — ${g ? g.titleEs || g.title : current.grammarTopic}`;
  }
  if (upcoming) {
    return `Prepare for «${chapterTitle(upcoming)}»`;
  }
  return `Continue ${course.titleNative} practice at your level`;
}

/**
 * Progress-based session greeting — never identical for the same day+state seed.
 * Written in the interface language; facts only from TeacherContext.
 */
export function composeSessionOpening(
  ctx: Omit<TeacherContext, "sessionOpening">,
): string {
  const day = new Date().toISOString().slice(0, 10);
  const seed = `${ctx.fingerprint}|${day}|${ctx.interfaceLanguage}`;
  const name = ctx.targetLanguage;
  const current = ctx.currentChapter;
  const last = ctx.completedChapterTitles[0];
  const remain = Math.max(0, ctx.totalChapters - ctx.completedChapters);
  const next = ctx.recommendedNextTopic;
  const weak = ctx.weakGrammar[0];
  const strong = ctx.masteredGrammar[0] ?? ctx.strongChapters[0];

  const lang = ctx.interfaceLanguage;

  type Pack = {
    welcome: string[];
    withLast: (last: string, next: string) => string[];
    withWeak: (weak: string, current: string | null) => string[];
    withStrong: (strong: string, next: string) => string[];
    withCurrent: (current: string, next: string) => string[];
    fresh: (name: string, next: string) => string[];
    remain: (n: number) => string[];
  };

  const packs: Record<InterfaceLanguage, Pack> = {
    ru: {
      welcome: ["С возвращением.", "Рад снова тебя видеть.", "Привет! Продолжаем."],
      withLast: (l, n) => [
        `Недавно мы закончили «${l}». Сегодня предлагаю: ${n}.`,
        `«${l}» уже позади. Давай кратко повторим и двинемся дальше: ${n}.`,
      ],
      withWeak: (w, c) => [
        `Заметил, что ${w} ещё даётся неуверенно. Давай укрепим это${c ? ` и затем вернёмся к «${c}»` : ""}.`,
        `По ошибкам видно: стоит ещё раз пройти ${w}. Без спешки.`,
      ],
      withStrong: (s, n) => [
        `С ${s} у тебя уже уверенно. Сегодня фокус: ${n}.`,
        `Прогресс по ${s} заметный. Предлагаю: ${n}.`,
      ],
      withCurrent: (c, n) => [
        `Сейчас мы на главе «${c}». ${n}.`,
        `Продолжим «${c}»? ${n}.`,
      ],
      fresh: (n, topic) => [
        `Начнём путь в ${n}. Сегодня: ${topic}.`,
        `Добро пожаловать в курс ${n}. Предлагаю начать с: ${topic}.`,
      ],
      remain: (n) =>
        n > 0 && n <= 5
          ? [`До следующего рубежа осталось глав: ${n}.`]
          : [],
    },
    en: {
      welcome: ["Welcome back.", "Good to see you again.", "Hi — let's continue."],
      withLast: (l, n) => [
        `We recently finished «${l}». Today I suggest: ${n}.`,
        `«${l}» is done. Let's review briefly, then: ${n}.`,
      ],
      withWeak: (w, c) => [
        `I can see ${w} still needs work. Let's reinforce it${c ? ` before we continue «${c}»` : ""}.`,
        `Your recent mistakes point to ${w}. We'll take it step by step.`,
      ],
      withStrong: (s, n) => [
        `You're getting solid with ${s}. Today: ${n}.`,
        `Nice progress on ${s}. I recommend: ${n}.`,
      ],
      withCurrent: (c, n) => [
        `We're on «${c}». ${n}.`,
        `Shall we continue «${c}»? ${n}.`,
      ],
      fresh: (n, topic) => [
        `Let's begin your ${n} path. Today: ${topic}.`,
        `Welcome to the ${n} course. I suggest starting with: ${topic}.`,
      ],
      remain: (n) =>
        n > 0 && n <= 5 ? [`Only ${n} chapter(s) left before the next milestone.`] : [],
    },
    es: {
      welcome: ["¡Bienvenido de nuevo!", "Me alegra verte otra vez.", "Hola — seguimos."],
      withLast: (l, n) => [
        `Hace poco terminamos «${l}». Hoy propongo: ${n}.`,
        `«${l}» ya está. Repasemos un poco y luego: ${n}.`,
      ],
      withWeak: (w, c) => [
        `Veo que ${w} aún cuesta. Reforcémoslo${c ? ` y después volvemos a «${c}»` : ""}.`,
        `Tus errores recientes apuntan a ${w}. Vamos con calma.`,
      ],
      withStrong: (s, n) => [
        `Con ${s} ya vas más seguro. Hoy: ${n}.`,
        `Buen progreso en ${s}. Te recomiendo: ${n}.`,
      ],
      withCurrent: (c, n) => [
        `Estamos en «${c}». ${n}.`,
        `¿Seguimos con «${c}»? ${n}.`,
      ],
      fresh: (n, topic) => [
        `Empecemos tu camino en ${n}. Hoy: ${topic}.`,
        `Bienvenido al curso de ${n}. Propongo empezar con: ${topic}.`,
      ],
      remain: (n) =>
        n > 0 && n <= 5
          ? [`Quedan ${n} capítulo(s) para el siguiente hito.`]
          : [],
    },
    de: {
      welcome: ["Willkommen zurück.", "Schön, dich wiederzusehen.", "Hallo — machen wir weiter."],
      withLast: (l, n) => [
        `Kürzlich haben wir «${l}» abgeschlossen. Heute schlage ich vor: ${n}.`,
        `«${l}» ist geschafft. Kurz wiederholen, dann: ${n}.`,
      ],
      withWeak: (w, c) => [
        `Ich sehe, dass ${w} noch unsicher ist. Lass uns das festigen${c ? ` und danach zu «${c}» zurückkehren` : ""}.`,
        `Deine letzten Fehler deuten auf ${w}. Schritt für Schritt.`,
      ],
      withStrong: (s, n) => [
        `Bei ${s} bist du schon sicherer. Heute: ${n}.`,
        `Guter Fortschritt bei ${s}. Empfehlung: ${n}.`,
      ],
      withCurrent: (c, n) => [
        `Wir sind bei «${c}». ${n}.`,
        `Weiter mit «${c}»? ${n}.`,
      ],
      fresh: (n, topic) => [
        `Beginnen wir deinen ${n}-Weg. Heute: ${topic}.`,
        `Willkommen im ${n}-Kurs. Vorschlag zum Start: ${topic}.`,
      ],
      remain: (n) =>
        n > 0 && n <= 5
          ? [`Nur noch ${n} Kapitel bis zum nächsten Meilenstein.`]
          : [],
    },
  };

  const p = packs[lang] ?? packs.en;
  const lines: string[] = [pickVariant(p.welcome, seed + "|w")];

  if (ctx.completedChapters === 0) {
    lines.push(pickVariant(p.fresh(name, next), seed + "|f"));
  } else if (weak && (hashSeed(seed) % 3 === 0 || !current)) {
    lines.push(pickVariant(p.withWeak(weak, current), seed + "|wk"));
  } else if (strong && hashSeed(seed) % 3 === 1) {
    lines.push(pickVariant(p.withStrong(strong, next), seed + "|st"));
  } else if (last) {
    lines.push(pickVariant(p.withLast(last, next), seed + "|l"));
  } else if (current) {
    lines.push(pickVariant(p.withCurrent(current, next), seed + "|c"));
  } else {
    lines.push(pickVariant(p.fresh(name, next), seed + "|x"));
  }

  const remainLines = p.remain(remain);
  if (remainLines.length > 0 && hashSeed(seed) % 2 === 0) {
    lines.push(pickVariant(remainLines, seed + "|r"));
  }

  return lines.filter(Boolean).join("\n\n");
}

function formatTeacherPromptBlock(ctx: {
  activeCourse: string;
  targetLanguage: string;
  interfaceLanguage: InterfaceLanguage;
  currentLevel: Level | null;
  currentChapter: string | null;
  completedChapters: number;
  totalChapters: number;
  completedChapterTitles: string[];
  masteredGrammar: string[];
  weakGrammar: string[];
  weakVocabulary: string[];
  weakExerciseTypes: ExerciseType[];
  strongChapters: string[];
  weakChapters: string[];
  recommendedNextTopic: string;
  recentMistakes: string[];
  studiedGrammar: string[];
  studiedVocabTopics: string[];
  upcomingTitle: string | null;
  exercisesCompleted: number;
  exercisesCorrectRate: number | null;
  teachingStrategy: TeachingStrategy;
}): string {
  const rate =
    ctx.exercisesCorrectRate !== null
      ? `${Math.round(ctx.exercisesCorrectRate * 100)}%`
      : "n/a";

  const strategyBlock = buildTeachingStrategyBlock(
    ctx.teachingStrategy,
    ctx.targetLanguage,
  );

  const voiceHints: string[] = [];
  if (ctx.weakGrammar[0]) {
    voiceHints.push(
      `If relevant, naturally mention struggle with «${ctx.weakGrammar[0]}» (e.g. "I noticed this still needs practice").`,
    );
  }
  if (ctx.studiedVocabTopics[0]) {
    voiceHints.push(
      `Prefer reusing vocabulary from «${ctx.studiedVocabTopics.slice(-2).join(", ")}».`,
    );
  }
  if (ctx.completedChapterTitles[0] && ctx.currentChapter) {
    voiceHints.push(
      `Connect today's work to «${ctx.completedChapterTitles[0]}» when it helps continuity.`,
    );
  }
  if (ctx.upcomingTitle) {
    voiceHints.push(
      `You may preview that «${ctx.upcomingTitle}» comes later — do not fully teach it.`,
    );
  }

  return `# TEACHER CONTEXT (internal facts — never invent; never dump raw labels to the student)
activeCourse: ${ctx.activeCourse}
targetLanguage: ${ctx.targetLanguage}
interfaceLanguage: ${ctx.interfaceLanguage}
currentLevel: ${ctx.currentLevel ?? "unknown"}
currentChapter: ${ctx.currentChapter ?? "none"}
completedChapters: ${ctx.completedChapters}/${ctx.totalChapters}
completedRecently: ${ctx.completedChapterTitles.slice(0, 3).join(", ") || "none"}
masteredGrammar: ${ctx.masteredGrammar.join("; ") || "none yet"}
weakGrammar: ${ctx.weakGrammar.join("; ") || "none detected"}
weakVocabulary: ${ctx.weakVocabulary.join(", ") || "none detected"}
weakExerciseTypes: ${ctx.weakExerciseTypes.join(", ") || "none"}
strongChapters: ${ctx.strongChapters.join(", ") || "none"}
weakChapters: ${ctx.weakChapters.join(", ") || "none"}
studiedGrammar: ${ctx.studiedGrammar.slice(-8).join("; ") || "none"}
studiedVocabulary: ${ctx.studiedVocabTopics.slice(-6).join(", ") || "none"}
upcomingChapter: ${ctx.upcomingTitle ?? "none"}
recommendedNextTopic: ${ctx.recommendedNextTopic}
recentMistakes: ${ctx.recentMistakes.map((m) => `«${m}»`).join("; ") || "none"}
exercisesCompleted: ${ctx.exercisesCompleted} (correctRate: ${rate})
teachingStrategy: ${ctx.teachingStrategy}

${strategyBlock}

# HOW TO SOUND LIKE YOU KNOW THIS STUDENT
${voiceHints.length > 0 ? voiceHints.map((h) => `- ${h}`).join("\n") : "- Little history yet — teach warmly from the current chapter; do not invent past struggles."}
- When they ask what to study next: follow recommendedNextTopic in natural teacher language.
- Already-studied grammar: light recall + chapter link — not a full reboot unless they are stuck.
- Future topics: minimal preview + chapter name + return to current work.
- Weak areas → Recovery/Review behaviour. Strong run → Challenge. Mid success → Assessment questions.
- Motivate only with real facts above — never empty praise.`;
}

function buildExerciseTopicHint(ctx: {
  course: CourseConfig;
  current: Chapter | null;
  recent: Chapter[];
  weakGrammar: string[];
  weakVocabulary: string[];
  mistakes: string[];
}): string {
  const parts: string[] = [];
  // Priority: mistaken/weak → current → prior vocab → light future signal
  if (ctx.mistakes[0]) parts.push(`review mistakes: ${ctx.mistakes[0]}`);
  if (ctx.weakGrammar[0]) parts.push(`weak grammar: ${ctx.weakGrammar[0]}`);
  if (ctx.current) {
    const g = ctx.course.getGrammarTopic(ctx.current.grammarTopic);
    parts.push(
      g ? `current: ${g.titleEs || g.title}` : `current: ${ctx.current.grammarTopic}`,
    );
    parts.push(chapterTitle(ctx.current));
  }
  for (const ch of ctx.recent.slice(0, 2)) {
    if (ch.vocabTopic) parts.push(`known vocab: ${ch.vocabTopic}`);
    parts.push(ch.grammarTopic);
  }
  if (ctx.weakVocabulary[0]) parts.push(`weak vocab: ${ctx.weakVocabulary[0]}`);
  const upcoming = ctx.current
    ? ctx.course.getNextChapter(ctx.current.slug)
    : null;
  if (upcoming?.vocabTopic) {
    parts.push(`light new vocab: ${upcoming.vocabTopic}`);
  }
  return parts.filter(Boolean).join(" | ") || ctx.course.titleNative;
}

/**
 * Build TeacherContext from DB progress + active CourseConfig.
 * Orchestrator should call this before every personalized AI response.
 */
export async function buildTeacherContext(input: {
  courseId: string;
  interfaceLanguage: InterfaceLanguage;
  level: Level | null;
}): Promise<TeacherContext> {
  const course = await getCourse(input.courseId);
  const chapters = course.getChapters();
  const courseSlugs = chapters.map((c) => c.slug);

  const progress = await getChapterProgress();
  const courseProgress = progress.filter(
    (p) => p.chapter_slug && courseSlugs.includes(p.chapter_slug),
  );

  const completedSlugs = new Set(
    courseProgress
      .filter((p) => p.status === "completed" && p.chapter_slug)
      .map((p) => p.chapter_slug as string),
  );

  const currentChapterObj = resolveCurrentChapter(
    chapters,
    completedSlugs,
    input.level,
  );

  const completedOrdered = chapters.filter((c) => completedSlugs.has(c.slug));
  const recentCompleted = completedOrdered.slice(-3).reverse();

  const studiedGrammar = completedOrdered
    .map((c) => {
      const g = course.getGrammarTopic(c.grammarTopic);
      return g ? `${g.titleEs || g.title} (${c.level})` : c.grammarTopic;
    })
    .filter(Boolean);

  const studiedVocabTopics = completedOrdered
    .map((c) => c.vocabTopic)
    .filter((v): v is string => Boolean(v));

  const upcomingChapter = currentChapterObj
    ? course.getNextChapter(currentChapterObj.slug) ?? null
    : null;

  let history: ExerciseHistory[] = [];
  try {
    history = await getExerciseHistory();
  } catch {
    history = [];
  }

  const profile = analyzeWeaknesses({
    course,
    completedOrdered,
    progressRows: courseProgress.map((p) => ({
      chapter_slug: p.chapter_slug,
      score: p.score,
      status: p.status,
    })),
    history,
  });

  const completedCount = countCompletedForCourse(completedSlugs, courseSlugs);
  const currentTitle = currentChapterObj
    ? chapterTitle(currentChapterObj)
    : null;
  const completedChapterTitles = [...completedOrdered]
    .reverse()
    .map(chapterTitle);

  const recommendedNextTopic = recommendNextTopic({
    course,
    current: currentChapterObj,
    upcoming: upcomingChapter,
    weakGrammar: profile.weakGrammar,
    weakVocabulary: profile.weakVocabulary,
    recentCompleted,
  });

  const fingerprint = [
    input.courseId,
    currentChapterObj?.slug ?? "none",
    completedCount,
    input.level ?? "any",
    profile.weakGrammar[0] ?? "ok",
    profile.recentMistakes.length,
  ].join("|");

  const teachingStrategy = resolveTeachingStrategy({
    weakGrammar: profile.weakGrammar,
    weakVocabulary: profile.weakVocabulary,
    recentMistakes: profile.recentMistakes,
    weakExerciseTypes: profile.weakExerciseTypes,
    masteredGrammar: profile.masteredGrammar,
    strongChapters: profile.strongChapters,
    exercisesCorrectRate: profile.exercisesCorrectRate,
    completedChapters: completedCount,
    currentChapter: currentTitle,
  });

  const promptBlock = formatTeacherPromptBlock({
    activeCourse: input.courseId,
    targetLanguage: course.titleNative,
    interfaceLanguage: input.interfaceLanguage,
    currentLevel: input.level,
    currentChapter: currentTitle,
    completedChapters: completedCount,
    totalChapters: chapters.length,
    completedChapterTitles,
    masteredGrammar: profile.masteredGrammar,
    weakGrammar: profile.weakGrammar,
    weakVocabulary: profile.weakVocabulary,
    weakExerciseTypes: profile.weakExerciseTypes,
    strongChapters: profile.strongChapters,
    weakChapters: profile.weakChapters,
    recommendedNextTopic,
    recentMistakes: profile.recentMistakes,
    studiedGrammar,
    studiedVocabTopics,
    upcomingTitle: upcomingChapter ? chapterTitle(upcomingChapter) : null,
    exercisesCompleted: profile.exercisesCompleted,
    exercisesCorrectRate: profile.exercisesCorrectRate,
    teachingStrategy,
  });

  const exerciseTopicHint = buildExerciseTopicHint({
    course,
    current: currentChapterObj,
    recent: recentCompleted,
    weakGrammar: profile.weakGrammar,
    weakVocabulary: profile.weakVocabulary,
    mistakes: profile.recentMistakes,
  });

  const base: Omit<TeacherContext, "sessionOpening"> = {
    activeCourse: input.courseId,
    targetLanguage: course.titleNative,
    interfaceLanguage: input.interfaceLanguage,
    currentLevel: input.level,
    currentChapter: currentTitle,
    currentChapterSlug: currentChapterObj?.slug ?? null,
    completedChapters: completedCount,
    totalChapters: chapters.length,
    completedChapterTitles,
    masteredGrammar: profile.masteredGrammar,
    weakGrammar: profile.weakGrammar,
    weakVocabulary: profile.weakVocabulary,
    weakExerciseTypes: profile.weakExerciseTypes,
    strongChapters: profile.strongChapters,
    weakChapters: profile.weakChapters,
    recommendedNextTopic,
    recentMistakes: profile.recentMistakes,
    exercisesCompleted: profile.exercisesCompleted,
    exercisesCorrectRate: profile.exercisesCorrectRate,
    teachingStrategy,
    fingerprint,
    promptBlock,
    exerciseTopicHint,
    currentChapterObj,
    recentCompleted,
    upcomingChapter,
    studiedGrammar,
    studiedVocabTopics,
  };

  return {
    ...base,
    sessionOpening: composeSessionOpening(base),
  };
}

/** @deprecated Use buildTeacherContext */
export async function buildLearnerContext(input: {
  courseId: string;
  interfaceLanguage: InterfaceLanguage;
  level: Level | null;
}): Promise<TeacherContext> {
  return buildTeacherContext(input);
}

/**
 * Prefer chapters linked to weak topics / recent mistakes, then reviewed, then current.
 */
export function rankChapterSlugsForExercises(teacher: TeacherContext): string[] {
  const ranked: string[] = [];
  const push = (slug: string | null | undefined) => {
    if (slug && !ranked.includes(slug)) ranked.push(slug);
  };

  // Weak chapter titles → slugs via recentCompleted + current
  const all = [
    ...(teacher.currentChapterObj ? [teacher.currentChapterObj] : []),
    ...teacher.recentCompleted,
  ];
  for (const title of teacher.weakChapters) {
    const match = all.find((c) => chapterTitle(c) === title);
    push(match?.slug);
  }

  for (const ch of teacher.recentCompleted) push(ch.slug);
  push(teacher.currentChapterSlug);
  return ranked;
}
