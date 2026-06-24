import { NextRequest, NextResponse } from "next/server";
import {
  generateExercise,
  type GeneratedExercise,
} from "@/server/actions/ai";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { ExerciseType, InterfaceLanguage, Level } from "@/types";

/**
 * POST /api/exercises/generate
 * Body: { type, level, topic? }
 * Resolves the user's interface language from their profile so generated
 * exercises honour it (previously defaulted to English/Spanish).
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

    const exercise: GeneratedExercise = await generateExercise({
      type: body.type,
      level: body.level,
      topic: body.topic,
      language,
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
