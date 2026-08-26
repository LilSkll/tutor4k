import { NextRequest, NextResponse } from "next/server";
import type { GeneratedExercise } from "@/server/actions/ai";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { prepareExerciseForSession } from "@/lib/exercise-options";
import { pickStaticExercises } from "@/lib/exercise-pool";
import {
  isExerciseUsableForLanguage,
  localizeExerciseInstruction,
} from "@/lib/exercise-localize";
import { attachQuestionGlosses } from "@/lib/exercise-gloss-attach";
import { SESSION_EXERCISES } from "@/lib/exercise-bank";
import { localizeBankExplanation } from "@/lib/tutor-feedback";
import type {
  ExerciseType,
  GrammarLevel,
  InterfaceLanguage,
  Level,
} from "@/types";

/**
 * POST /api/exercises/generate
 * Body: { type, level, topic?, count?, excludeIds?, exam?, challengeMode? }
 *
 * Serves a session batch from the permanent adaptive exercise bank.
 * Default count = SESSION_EXERCISES (5). Regular practice and DELE never
 * call AI here — only the authored bank.
 * Without challengeMode, only unlocked journey chapters are served.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      type: ExerciseType | "mixed";
      level: GrammarLevel;
      topic?: string;
      count?: number;
      excludeIds?: string[];
      exam?: "DELE";
      /** When true, allow any CEFR / chapter (opt-in stretch practice). */
      challengeMode?: boolean;
    };

    const isMixed = body.type === "mixed";
    const challengeMode = body.challengeMode === true;

    if ((!body.type && !isMixed) || !body.level) {
      return NextResponse.json(
        { error: "type and level are required" },
        { status: 400 },
      );
    }

    let language: InterfaceLanguage = "ru";
    let courseId = "spanish";
    // Teacher-context level tops out at C1; the requested C2 still drives the pick.
    let level: Level = body.level === "C2" ? "C1" : body.level;
    try {
      const supabase = await createSupabaseServerClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("interface_language, active_course_id, level")
          .eq("id", user.id)
          .maybeSingle();
        if (profile?.interface_language) {
          language = profile.interface_language as InterfaceLanguage;
        }
        if (profile?.active_course_id) {
          courseId = profile.active_course_id as string;
        }
        if (profile?.level) {
          level = profile.level as Level;
        }
      }
    } catch {
      // Non-fatal: fall back to defaults.
    }

    let preferredChapterSlugs: string[] | undefined;
    let allowedChapterSlugs: string[] | undefined;
    try {
      const { getCourse } = await import("@/config/courses");
      const { buildTeacherContext, rankChapterSlugsForExercises } =
        await import("@/server/ai/learner-context");
      const {
        getChapterProgress,
        getCurrentChapterSlug,
      } = await import("@/server/actions/data");
      const teacher = await buildTeacherContext({
        courseId,
        interfaceLanguage: language,
        level,
      });
      const course = await getCourse(courseId);
      const chapters = course.getChapters();
      preferredChapterSlugs = rankChapterSlugsForExercises(teacher, chapters);

      if (!challengeMode && body.exam !== "DELE") {
        const progress = await getChapterProgress();
        const courseSlugSet = new Set(chapters.map((c) => c.slug));
        const unlocked = new Set<string>();
        for (const row of progress) {
          if (
            row.chapter_slug &&
            courseSlugSet.has(row.chapter_slug) &&
            (row.status === "completed" || row.status === "in_progress")
          ) {
            unlocked.add(row.chapter_slug);
          }
        }
        const current = await getCurrentChapterSlug(courseId);
        if (current) unlocked.add(current);
        // First chapter always available for brand-new learners.
        if (unlocked.size === 0 && chapters[0]?.slug) {
          unlocked.add(chapters[0].slug);
        }
        allowedChapterSlugs = [...unlocked];
        preferredChapterSlugs = preferredChapterSlugs.filter((s) =>
          unlocked.has(s),
        );
        if (preferredChapterSlugs.length === 0) {
          preferredChapterSlugs = allowedChapterSlugs;
        }
      }
    } catch {
      // Non-fatal: pool still works without curriculum ranking.
    }

    const count =
      typeof body.count === "number" && body.count > 0
        ? body.count
        : SESSION_EXERCISES;

    if (body.exam === "DELE" && courseId === "spanish" && !isMixed) {
      const exercises = await pickDeleSession({
        type: body.type as ExerciseType,
        level: body.level,
        count,
        excludeIds: body.excludeIds ?? [],
        language,
      });
      if (exercises.length === 0) {
        return NextResponse.json(
          { error: "Could not build a DELE session." },
          { status: 404 },
        );
      }
      return NextResponse.json(
        {
          exercises,
          sessionSize: SESSION_EXERCISES,
          count: exercises.length,
        },
        {
          headers: {
            // Static bank payload for this type/level; browser may reuse briefly.
            "Cache-Control":
              "private, max-age=120, stale-while-revalidate=600",
          },
        },
      );
    }

    const picked = await pickStaticExercises({
      courseId,
      type: isMixed ? "multiple_choice" : (body.type as ExerciseType),
      mixed: isMixed,
      level: body.level,
      topic: body.topic,
      preferredChapterSlugs,
      allowedChapterSlugs,
      excludeIds: body.excludeIds,
      count,
      interfaceLanguage: language,
    });

    if (picked.length === 0) {
      return NextResponse.json(
        {
          error: challengeMode
            ? "No exercises available in the bank for this type and level yet."
            : "No unlocked exercises for this type yet. Complete more chapters or turn on Challenge.",
        },
        { status: 404 },
      );
    }

    const exercises: GeneratedExercise[] = picked.map((staticEx) => {
      const withGloss = attachQuestionGlosses(staticEx);
      return {
        type: withGloss.type,
        level: withGloss.level,
        question: withGloss.question,
        questionTranslations: withGloss.questionTranslations,
        instruction: localizeExerciseInstruction(withGloss, language),
        options: withGloss.options,
        answer: withGloss.answer,
        acceptableAnswers: withGloss.acceptableAnswers,
        topic: withGloss.topic,
        explanation: localizeBankExplanation(withGloss.explanation, language),
        staticSource: true,
        exerciseId: withGloss.id,
        chapterSlug: withGloss.chapterSlug,
      };
    });

    return NextResponse.json(
      {
        exercises,
        sessionSize: SESSION_EXERCISES,
        count: exercises.length,
        challengeMode,
        unlockedOnly: !challengeMode,
      },
      {
        headers: {
          "Cache-Control":
            "private, max-age=120, stale-while-revalidate=600",
        },
      },
    );
  } catch (err) {
    console.error("[/api/exercises/generate]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}

/** Fisher-Yates shuffle (returns a new array). */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * DELE session from the authored bank only — no model fill.
 */
async function pickDeleSession(input: {
  type: ExerciseType;
  level: GrammarLevel;
  count: number;
  excludeIds: string[];
  language: InterfaceLanguage;
}): Promise<GeneratedExercise[]> {
  const { getDeleExercises } = await import("@/config/dele-exercises");

  let candidates = getDeleExercises(input.type, input.level);
  if (input.language !== "ru") {
    candidates = candidates.filter((ex) =>
      isExerciseUsableForLanguage(ex, input.language),
    );
  }
  const exclude = new Set(input.excludeIds);
  const fresh = candidates.filter((ex) => !exclude.has(ex.id));
  const pickFrom = fresh.length > 0 ? fresh : candidates;

  const exercises: GeneratedExercise[] = shuffle(pickFrom)
    .slice(0, input.count)
    .map((ex) => {
      const prepared = prepareExerciseForSession(ex);
      return {
        type: prepared.type,
        level: prepared.level,
        question: prepared.question,
        instruction: localizeExerciseInstruction(prepared, input.language),
        options: prepared.options,
        answer: prepared.answer,
        acceptableAnswers: prepared.acceptableAnswers,
        topic: ex.deleTopic,
        explanation: prepared.explanation,
        staticSource: true,
        exerciseId: prepared.id,
      };
    });

  return exercises;
}
