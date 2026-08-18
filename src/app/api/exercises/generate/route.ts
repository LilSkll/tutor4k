import { NextRequest, NextResponse } from "next/server";
import type { GeneratedExercise } from "@/server/actions/ai";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { pickStaticExercises } from "@/lib/exercise-pool";
import {
  isExerciseUsableForLanguage,
  localizeExerciseInstruction,
} from "@/lib/exercise-localize";
import { attachQuestionGlosses } from "@/lib/exercise-gloss-attach";
import { SESSION_EXERCISES } from "@/lib/exercise-bank";
import type {
  ExerciseType,
  GrammarLevel,
  InterfaceLanguage,
  Level,
} from "@/types";

/**
 * POST /api/exercises/generate
 * Body: { type, level, topic?, count?, excludeIds?, exam? }
 *
 * Serves a session batch from the permanent adaptive exercise bank.
 * Default count = SESSION_EXERCISES (5). Regular practice and DELE never
 * call AI here — only the authored bank.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      type: ExerciseType;
      level: GrammarLevel;
      topic?: string;
      count?: number;
      excludeIds?: string[];
      exam?: "DELE";
    };

    if (!body.type || !body.level) {
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
    try {
      const { getCourse } = await import("@/config/courses");
      const { buildTeacherContext, rankChapterSlugsForExercises } =
        await import("@/server/ai/learner-context");
      const teacher = await buildTeacherContext({
        courseId,
        interfaceLanguage: language,
        level,
      });
      const course = await getCourse(courseId);
      preferredChapterSlugs = rankChapterSlugsForExercises(
        teacher,
        course.getChapters(),
      );
    } catch {
      // Non-fatal: pool still works without curriculum ranking.
    }

    const count =
      typeof body.count === "number" && body.count > 0
        ? body.count
        : SESSION_EXERCISES;

    if (body.exam === "DELE" && courseId === "spanish") {
      const exercises = await pickDeleSession({
        type: body.type,
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
      type: body.type,
      level: body.level,
      topic: body.topic,
      preferredChapterSlugs,
      excludeIds: body.excludeIds,
      count,
      interfaceLanguage: language,
    });

    if (picked.length === 0) {
      return NextResponse.json(
        {
          error:
            "No exercises available in the bank for this type and level yet.",
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
        explanation: withGloss.explanation,
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
    .map((ex) => ({
      type: ex.type,
      level: ex.level,
      question: ex.question,
      instruction: localizeExerciseInstruction(ex, input.language),
      options: ex.options,
      answer: ex.answer,
      acceptableAnswers: ex.acceptableAnswers,
      topic: ex.deleTopic,
      explanation: ex.explanation,
      staticSource: true,
      exerciseId: ex.id,
    }));

  return exercises;
}
