import { NextRequest, NextResponse } from "next/server";
import {
  checkExerciseAnswer,
  type GeneratedExercise,
} from "@/server/actions/ai";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { findBankExerciseById } from "@/lib/exercise-pool";
import { prepareExerciseForSession } from "@/lib/exercise-options";
import type { GrammarLevel, InterfaceLanguage, Level } from "@/types";

/**
 * POST /api/exercises/check
 * Body: { exercise, userAnswer, level }
 * Resolves the user's interface language so feedback is in their language.
 * Static bank items are re-loaded by exerciseId — client answer keys are ignored.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      exercise: GeneratedExercise;
      userAnswer: string;
      level: GrammarLevel;
    };

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // AI feedback context tops out at C1; C2 items are checked as C1.
    const { toUserLevel } = await import("@/lib/user-level");
    const checkLevel: Level = toUserLevel(body.level);

    if (!body.exercise || typeof body.userAnswer !== "string") {
      return NextResponse.json(
        { error: "exercise and userAnswer are required" },
        { status: 400 },
      );
    }

    let language: InterfaceLanguage = "ru";
    let courseId = "spanish";
    try {
      const { data: profile } = await supabase
        .from("profiles")
        .select("interface_language, active_course_id")
        .eq("id", user.id)
        .maybeSingle();
      if (profile?.interface_language) {
        language = profile.interface_language as InterfaceLanguage;
      }
      if (profile?.active_course_id) {
        courseId = profile.active_course_id as string;
      }
    } catch {
      // Non-fatal: fall back to defaults.
    }

    let exercise = body.exercise;

    // Never trust client answer keys for static bank items.
    if (exercise.staticSource || exercise.exerciseId) {
      const exerciseId = exercise.exerciseId?.trim();
      if (!exerciseId) {
        return NextResponse.json(
          { error: "exerciseId is required for bank exercises" },
          { status: 400 },
        );
      }
      const bank = await findBankExerciseById(courseId, exerciseId);
      if (!bank) {
        return NextResponse.json(
          { error: "Exercise not found in bank" },
          { status: 404 },
        );
      }
      const prepared = prepareExerciseForSession(bank);
      exercise = {
        type: prepared.type,
        level: bank.level ?? body.level,
        question: prepared.question,
        instruction: prepared.instruction,
        options: prepared.options,
        answer: prepared.answer,
        acceptableAnswers: prepared.acceptableAnswers,
        topic: bank.topic,
        explanation: prepared.explanation,
        staticSource: true,
        exerciseId: prepared.id,
        chapterSlug: bank.chapterSlug,
      };
    }

    const result = await checkExerciseAnswer({
      exercise,
      userAnswer: body.userAnswer,
      level: checkLevel,
      language,
      courseId,
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("[/api/exercises/check]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
