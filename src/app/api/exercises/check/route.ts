import { NextRequest, NextResponse } from "next/server";
import {
  checkExerciseAnswer,
  type GeneratedExercise,
} from "@/server/actions/ai";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { InterfaceLanguage, Level } from "@/types";

/**
 * POST /api/exercises/check
 * Body: { exercise, userAnswer, level }
 * Resolves the user's interface language so feedback is in their language.
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

    // Resolve interface language from the user's profile.
    let language: InterfaceLanguage = "ru";
    try {
      const supabase = await createSupabaseServerClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("interface_language")
          .eq("id", user.id)
          .maybeSingle();
        if (profile?.interface_language) {
          language = profile.interface_language as InterfaceLanguage;
        }
      }
    } catch {
      // Non-fatal: fall back to Russian.
    }

    const result = await checkExerciseAnswer({
      exercise: body.exercise,
      userAnswer: body.userAnswer,
      level: body.level,
      language,
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
