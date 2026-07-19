import { NextRequest, NextResponse } from "next/server";
import type { GeneratedExercise } from "@/server/actions/ai";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { pickStaticExercise } from "@/lib/exercise-pool";
import type { ExerciseType, InterfaceLanguage, Level } from "@/types";

/**
 * POST /api/exercises/generate
 * Body: { type, level, topic? }
 *
 * Serves from the permanent adaptive exercise bank only.
 * AI does not generate practice items — it teaches after answers.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      type: ExerciseType;
      level: Level;
      topic?: string;
    };

    if (!body.type || !body.level) {
      return NextResponse.json(
        { error: "type and level are required" },
        { status: 400 },
      );
    }

    let language: InterfaceLanguage = "ru";
    let courseId = "spanish";
    let level: Level = body.level;
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

    // Localize instruction labels are applied client-side via i18n;
    // bank stores target-language content + interface-language instructions
    // already authored per course. language reserved for future instruction overlay.
    void language;

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

    const staticEx = await pickStaticExercise({
      courseId,
      type: body.type,
      level: body.level,
      topic: body.topic,
      preferredChapterSlugs,
    });

    if (!staticEx) {
      return NextResponse.json(
        {
          error:
            "No exercises available in the bank for this type and level yet.",
        },
        { status: 404 },
      );
    }

    const exercise: GeneratedExercise = {
      type: staticEx.type,
      level: staticEx.level,
      question: staticEx.question,
      instruction: staticEx.instruction,
      options: staticEx.options,
      answer: staticEx.answer,
      acceptableAnswers: staticEx.acceptableAnswers,
      topic: staticEx.topic,
      explanation: staticEx.explanation,
      staticSource: true,
      exerciseId: staticEx.id,
      chapterSlug: staticEx.chapterSlug,
    };
    return NextResponse.json(exercise);
  } catch (err) {
    console.error("[/api/exercises/generate]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
