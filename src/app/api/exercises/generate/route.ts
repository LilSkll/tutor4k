import { NextRequest, NextResponse } from "next/server";
import {
  generateExercise,
  type GeneratedExercise,
} from "@/server/actions/ai";
import type { ExerciseType, Level } from "@/types";

/**
 * POST /api/exercises/generate
 * Body: { type, level, topic? }
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

    const exercise: GeneratedExercise = await generateExercise({
      type: body.type,
      level: body.level,
      topic: body.topic,
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
