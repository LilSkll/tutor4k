import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getAvailableCourseIds, getCourse } from "@/config/courses";

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

  // Get all course IDs from the registry.
  const courseIds = getAvailableCourseIds();

  // Load course configs.
  const courses = [];
  for (const id of courseIds) {
    const config = await getCourse(id);
    courses.push({
      id: config.id,
      languageCode: config.languageCode,
      title: config.title,
      titleNative: config.titleNative,
      flag: config.flag,
      description: config.description,
    });
  }

  // Get user's progress per course (count completed chapters).
  const { data: progressRows } = await supabase
    .from("learning_progress")
    .select("course_id, status")
    .eq("user_id", user.id)
    .eq("status", "completed");

  const progressMap: Record<string, number> = {};
  for (const row of progressRows ?? []) {
    const cid = (row as { course_id: string }).course_id;
    progressMap[cid] = (progressMap[cid] ?? 0) + 1;
  }

  // Get active course from profile.
  const { data: profile } = await supabase
    .from("profiles")
    .select("active_course_id")
    .eq("id", user.id)
    .single();

  const activeCourseId = (profile?.active_course_id as string) ?? "spanish";

  return NextResponse.json({
    courses: courses.map((c) => ({
      ...c,
      completedChapters: progressMap[c.id] ?? 0,
      isActive: c.id === activeCourseId,
    })),
    activeCourseId,
  });
}
