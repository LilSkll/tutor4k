import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getCourse } from "@/config/courses";
import { inferCourseIdFromChapterSlug } from "@/lib/chapter-display";
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

    // Resolve active course so progress belongs to the right language.
    let courseId = inferCourseIdFromChapterSlug(body.chapterSlug);
    try {
      const { data: profile } = await supabase
        .from("profiles")
        .select("active_course_id")
        .eq("id", user.id)
        .maybeSingle();
      if (profile?.active_course_id) {
        courseId = profile.active_course_id as string;
      }
    } catch {
      // keep inferred courseId
    }

    const course = await getCourse(courseId);
    const chapter = course.getChapter(body.chapterSlug);
    // Fallback: slug may belong to another course (e.g. switched mid-lesson).
    const chapterLevel: Level =
      chapter?.level ??
      (await getCourse(inferCourseIdFromChapterSlug(body.chapterSlug))).getChapter(
        body.chapterSlug,
      )?.level ??
      "A1";

    if (!chapter) {
      courseId = inferCourseIdFromChapterSlug(body.chapterSlug);
    }

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

    const { data: existing } = await client
      .from("learning_progress")
      .select("id")
      .eq("user_id", user.id)
      .eq("chapter_slug", body.chapterSlug)
      .maybeSingle();

    let progressOk = false;

    if (existing) {
      const { error: updateErr } = await client
        .from("learning_progress")
        .update({
          status: "completed",
          level: chapterLevel,
          score: body.score ?? 0,
          completed_at: new Date().toISOString(),
          words_learned: body.wordsLearned ?? 0,
          exercises_completed: body.exercisesCompleted ?? 0,
          course_id: courseId,
        })
        .eq("id", existing.id);

      if (updateErr) {
        console.error("[chapter/complete] UPDATE error:", updateErr.message);
        return NextResponse.json({ error: updateErr.message, step: "update" }, { status: 500 });
      }
      progressOk = true;
    } else {
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
          course_id: courseId,
        });

      if (insertErr) {
        console.error("[chapter/complete] INSERT error:", insertErr.message);
        return NextResponse.json({ error: insertErr.message, step: "insert" }, { status: 500 });
      }
      progressOk = true;
    }

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
      courseId,
    });
  } catch (err) {
    console.error("[/api/chapters/complete]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
