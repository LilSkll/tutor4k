import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getChapter } from "@/config/chapters";
import type { Level } from "@/types";

/**
 * POST /api/chapters/complete
 * Body: { chapterSlug, score?, wordsLearned?, exercisesCompleted? }
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

    const chapter = getChapter(body.chapterSlug);
    const chapterLevel: Level = chapter?.level ?? "A1";

    // Resolve service-role client for writes.
    let client = supabase;
    let usingAdmin = false;
    try {
      const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
      const admin = createSupabaseAdminClient();
      if (admin) {
        client = admin;
        usingAdmin = true;
      }
    } catch {}

    // Step 1: Check if a row already exists for this chapter.
    const { data: existing } = await client
      .from("learning_progress")
      .select("id")
      .eq("user_id", user.id)
      .eq("chapter_slug", body.chapterSlug)
      .maybeSingle();

    let progressOk = false;

    if (existing) {
      // Update existing row.
      const { error: updateErr } = await client
        .from("learning_progress")
        .update({
          status: "completed",
          level: chapterLevel,
          score: body.score ?? 0,
          completed_at: new Date().toISOString(),
          words_learned: body.wordsLearned ?? 0,
          exercises_completed: body.exercisesCompleted ?? 0,
        })
        .eq("id", existing.id);

      if (updateErr) {
        console.error("[chapter/complete] UPDATE error:", updateErr.message);
        return NextResponse.json({ error: updateErr.message, step: "update" }, { status: 500 });
      }
      progressOk = true;
    } else {
      // Insert new row.
      const { error: insertErr } = await client
        .from("learning_progress")
        .insert({
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
        });

      if (insertErr) {
        console.error("[chapter/complete] INSERT error:", insertErr.message);
        return NextResponse.json({ error: insertErr.message, step: "insert" }, { status: 500 });
      }
      progressOk = true;
    }

    // Step 2: Record study session (minutes + lessons).
    const today = new Date().toISOString().slice(0, 10);
    const { data: actExisting } = await client
      .from("daily_activity")
      .select("lessons_completed, minutes_studied")
      .eq("user_id", user.id)
      .eq("activity_date", today)
      .maybeSingle();

    const prevLessons = (actExisting?.lessons_completed as number) ?? 0;
    const prevMinutes = (actExisting?.minutes_studied as number) ?? 0;

    await client.from("daily_activity").upsert(
      {
        user_id: user.id,
        activity_date: today,
        lessons_completed: prevLessons + 1,
        minutes_studied: prevMinutes + 8,
      },
      { onConflict: "user_id,activity_date" },
    );

    // Step 3: Update streak.
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

    return NextResponse.json({
      ok: true,
      progressSaved: progressOk,
      usingAdmin,
    });
  } catch (err) {
    console.error("[/api/chapters/complete]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
