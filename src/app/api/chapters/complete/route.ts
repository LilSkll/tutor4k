import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getChapter } from "@/config/chapters";
import type { Level } from "@/types";

/**
 * POST /api/chapters/complete
 * Body: { chapterSlug, score, wordsLearned, exercisesCompleted }
 *
 * Marks a chapter as completed and records a study session.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      chapterSlug: string;
      score?: number;
      wordsLearned?: number;
      exercisesCompleted?: number;
    };

    if (!body.chapterSlug) {
      return NextResponse.json({ error: "chapterSlug is required" }, { status: 400 });
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the chapter to find its level.
    const chapter = getChapter(body.chapterSlug);
    const chapterLevel: Level = chapter?.level ?? "A1";

    // Use service-role for writes.
    let client = supabase;
    try {
      const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
      const admin = createSupabaseAdminClient();
      if (admin) client = admin;
    } catch {}

    // Upsert chapter progress — MUST include level (NOT NULL constraint).
    const { error: progressError } = await client
      .from("learning_progress")
      .upsert(
        {
          user_id: user.id,
          chapter_slug: body.chapterSlug,
          topic: body.chapterSlug,
          level: chapterLevel,
          status: "completed",
          score: body.score ?? 0,
          started_at: new Date().toISOString(),
          completed_at: new Date().toISOString(),
          words_learned: body.wordsLearned ?? 0,
          exercises_completed: body.exercisesCompleted ?? 0,
        },
        { onConflict: "user_id,chapter_slug" },
      );

    if (progressError) {
      console.error("[/api/chapters/complete] progress error:", progressError.message);
      return NextResponse.json({ error: progressError.message }, { status: 500 });
    }

    // Record study session.
    const today = new Date().toISOString().slice(0, 10);
    const { data: existing } = await client
      .from("daily_activity")
      .select("lessons_completed, minutes_studied")
      .eq("user_id", user.id)
      .eq("activity_date", today)
      .maybeSingle();

    await client.from("daily_activity").upsert(
      {
        user_id: user.id,
        activity_date: today,
        lessons_completed: ((existing?.lessons_completed as number) ?? 0) + 1,
        minutes_studied: ((existing?.minutes_studied as number) ?? 0) + 8,
      },
      { onConflict: "user_id,activity_date" },
    );

    // Update streak.
    const { data: profile } = await client
      .from("profiles")
      .select("streak, last_active_date")
      .eq("id", user.id)
      .single();

    if (profile) {
      const last = (profile.last_active_date as string) ?? null;
      let streak = (profile.streak as number) ?? 0;

      if (last !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayKey = yesterday.toISOString().slice(0, 10);
        streak = last === yesterdayKey ? streak + 1 : 1;

        await client
          .from("profiles")
          .update({ streak, last_active_date: today })
          .eq("id", user.id);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/chapters/complete]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
