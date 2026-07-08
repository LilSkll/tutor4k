import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

/**
 * POST /api/chapters/complete
 * Body: { chapterSlug, score, wordsLearned, exercisesCompleted }
 *
 * Marks a chapter as completed and records a study session.
 * Uses service-role client for reliable writes (bypasses RLS).
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

    // Use service-role for writes.
    let admin = null;
    try {
      const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
      admin = createSupabaseAdminClient();
    } catch {}
    const client = admin ?? supabase;

    // Upsert chapter progress.
    const { error: progressError } = await client
      .from("learning_progress")
      .upsert(
        {
          user_id: user.id,
          chapter_slug: body.chapterSlug,
          topic: body.chapterSlug,
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
    }

    // Record study session (accumulate minutes + lessons).
    const today = new Date().toISOString().slice(0, 10);
    const { data: existing } = await client
      .from("daily_activity")
      .select("lessons_completed, minutes_studied")
      .eq("user_id", user.id)
      .eq("activity_date", today)
      .maybeSingle();

    const prevLessons = (existing?.lessons_completed as number) ?? 0;
    const prevMinutes = (existing?.minutes_studied as number) ?? 0;

    await client.from("daily_activity").upsert(
      {
        user_id: user.id,
        activity_date: today,
        lessons_completed: prevLessons + 1,
        minutes_studied: prevMinutes + 8,
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
