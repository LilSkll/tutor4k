import { NextRequest, NextResponse } from "next/server";
import {
  checkExerciseAnswer,
  type GeneratedExercise,
} from "@/server/actions/ai";
import type { Level } from "@/types";

/**
 * POST /api/exercises/check
 * Body: { exercise, userAnswer, level }
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      exercise: GeneratedExercise;
      userAnswer: string;
      level: Level;
    };

    if (!body.exercise || typeof body.userAnswer !== "string") {
      return NextResponse.json(
        { error: "exercise and userAnswer are required" },
        { status: 400 },
      );
    }

    const result = await checkExerciseAnswer({
      exercise: body.exercise,
      userAnswer: body.userAnswer,
      level: body.level,
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
