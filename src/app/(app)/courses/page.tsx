import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getAvailableCourseIds, getCourse } from "@/config/courses";
import { LanguageSelector } from "@/components/courses/language-selector";

export default async function CoursesPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Get all courses from registry.
  const courseIds = getAvailableCourseIds();
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
      completedChapters: 0,
      isActive: false,
    });
  }

  // Get user's progress per course.
  if (user) {
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

    const { data: profile } = await supabase
      .from("profiles")
      .select("active_course_id")
      .eq("id", user.id)
      .single();

    const activeCourseId = (profile?.active_course_id as string) ?? "spanish";

    courses.forEach((c) => {
      c.completedChapters = progressMap[c.id] ?? 0;
      c.isActive = c.id === activeCourseId;
    });
  }

  const activeCourseId = courses.find((c) => c.isActive)?.id ?? "spanish";

  return (
    <div className="container max-w-4xl py-6 md:py-8">
      <LanguageSelector courses={courses} activeCourseId={activeCourseId} />
    </div>
  );
}
