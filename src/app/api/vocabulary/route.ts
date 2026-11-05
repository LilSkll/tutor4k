import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { resolveCourseId } from "@/lib/course-id";
import type { Level, VocabularyWord } from "@/types";

/**
 * GET  /api/vocabulary?courseId=…  → list user's words (optionally filtered)
 * POST /api/vocabulary             → add a word (scoped to course)
 * DELETE /api/vocabulary           → remove a word (body: { id })
 */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const courseId = resolveCourseId(
    req.nextUrl.searchParams.get("courseId"),
  );

  let query = supabase
    .from("vocabulary")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  // Prefer course-scoped rows; also include legacy rows without course_id
  // when viewing Spanish (historical default).
  if (courseId === "spanish") {
    query = query.or(`course_id.eq.spanish,course_id.is.null`);
  } else {
    query = query.eq("course_id", courseId);
  }

  const { data } = await query;
  return NextResponse.json(data ?? []);
}

export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await req.json()) as {
    word: string;
    translation: string;
    example?: string;
    level: Level;
    courseId?: string;
    notes?: string;
    partOfSpeech?: string;
  };

  const courseId = resolveCourseId(body.courseId);

  const { data, error } = await supabase
    .from("vocabulary")
    .insert({
      user_id: user.id,
      word: body.word.trim(),
      translation: body.translation.trim(),
      example: body.example?.trim() ?? "",
      level: body.level,
      course_id: courseId,
      notes: body.notes?.trim() || null,
      part_of_speech: body.partOfSpeech?.trim() || null,
    })
    .select()
    .single();

  if (error) {
    // notes / part_of_speech may be missing on older DBs — retry without them.
    if (/notes|part_of_speech/i.test(error.message)) {
      const retry = await supabase
        .from("vocabulary")
        .insert({
          user_id: user.id,
          word: body.word.trim(),
          translation: body.translation.trim(),
          example: body.example?.trim() ?? "",
          level: body.level,
          course_id: courseId,
        })
        .select()
        .single();
      if (retry.error) {
        return NextResponse.json({ error: retry.error.message }, { status: 400 });
      }
      return NextResponse.json(retry.data as unknown as VocabularyWord);
    }
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data as unknown as VocabularyWord);
}

export async function DELETE(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await req.json()) as { id: string };

  const { error } = await supabase
    .from("vocabulary")
    .delete()
    .eq("id", body.id)
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
