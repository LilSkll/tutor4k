import { NextRequest, NextResponse } from "next/server";
import {
  generateExercise,
  type GeneratedExercise,
} from "@/server/actions/ai";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { pickStaticExercise } from "@/lib/exercise-pool";
import type { ExerciseType, InterfaceLanguage, Level } from "@/types";

/**
 * POST /api/exercises/generate
 * Body: { type, level, topic? }
 * Serves pre-authored exercises when available; AI only as fallback.
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

    let preferredChapterSlugs: string[] | undefined;
    let topic = body.topic;
    try {
      const { buildTeacherContext, rankChapterSlugsForExercises } =
        await import("@/server/ai/learner-context");
      const teacher = await buildTeacherContext({
        courseId,
        interfaceLanguage: language,
        level,
      });
      preferredChapterSlugs = rankChapterSlugsForExercises(teacher);
      if (!topic) topic = teacher.exerciseTopicHint;
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

    if (staticEx) {
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
      };
      return NextResponse.json(exercise);
    }

    const exercise: GeneratedExercise = await generateExercise({
      type: body.type,
      level: body.level,
      topic,
      language,
      courseId,
    });

    return NextResponse.json(exercise);
  } catch (err) {
    console.error("[/api/exercises/generate]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
