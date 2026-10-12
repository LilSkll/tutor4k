import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getCourse } from "@/config/courses";

/**
 * POST /api/chapters/reset
 * Deletes the current user's journey progress for the ACTIVE course only.
 * Vocabulary, chat history, learning profile, and journey_finds (chapter /
 * level / course certificates + easter eggs) are NOT touched — students can
 * restart the path and keep earned certificates in /journey.
 */
export async function POST() {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("active_course_id")
      .eq("id", user.id)
      .maybeSingle();
    const courseId = (profile?.active_course_id as string) ?? "spanish";

    const course = await getCourse(courseId);
    const chapterSlugs = course.getChapters().map((c) => c.slug);
    if (chapterSlugs.length === 0) {
      return NextResponse.json({ ok: true, deleted: 0 });
    }

    let client = supabase;
    try {
      const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
      const admin = createSupabaseAdminClient();
      if (admin) client = admin;
    } catch {
      // No service key — RLS delete with the user client still works.
    }

    const { error } = await client
      .from("learning_progress")
      .delete()
      .eq("user_id", user.id)
      .in("chapter_slug", chapterSlugs);

    if (error) {
      console.error("[chapters/reset] delete error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, courseId });
  } catch (err) {
    console.error("[/api/chapters/reset]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
