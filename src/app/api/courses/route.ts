import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getAvailableCourseIds, getCourse } from "@/config/courses";
import {
  countCompletedForCourse,
  inferCourseIdFromChapterSlug,
} from "@/lib/chapter-display";

/**
 * GET /api/courses
 * Returns the list of available courses with progress for the current user.
 */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const courseIds = getAvailableCourseIds();
  const chapterSlugsByCourse: Record<string, string[]> = {};
  const courses = [];

  for (const id of courseIds) {
    const config = await getCourse(id);
    chapterSlugsByCourse[id] = config.getChapters().map((c) => c.slug);
    courses.push({
      id: config.id,
      languageCode: config.languageCode,
      title: config.title,
      titleNative: config.titleNative,
      flag: config.flag,
      description: config.description,
    });
  }

  const { data: progressRows } = await supabase
    .from("learning_progress")
    .select("course_id, chapter_slug, status")
    .eq("user_id", user.id)
    .eq("status", "completed");

  const completedByCourse: Record<string, Set<string>> = {};
  for (const id of courseIds) completedByCourse[id] = new Set();

  for (const row of progressRows ?? []) {
    const slug = (row as { chapter_slug?: string }).chapter_slug;
    if (!slug) continue;
    const storedCourse = (row as { course_id?: string | null }).course_id;
    const courseId =
      storedCourse && chapterSlugsByCourse[storedCourse]?.includes(slug)
        ? storedCourse
        : inferCourseIdFromChapterSlug(slug);
    if (chapterSlugsByCourse[courseId]?.includes(slug)) {
      completedByCourse[courseId]?.add(slug);
    }
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("active_course_id")
    .eq("id", user.id)
    .single();

  const activeCourseId = (profile?.active_course_id as string) ?? "spanish";

  return NextResponse.json({
    courses: courses.map((c) => ({
      ...c,
      completedChapters: countCompletedForCourse(
        completedByCourse[c.id] ?? [],
        chapterSlugsByCourse[c.id] ?? [],
      ),
      isActive: c.id === activeCourseId,
    })),
    activeCourseId,
  });
}
