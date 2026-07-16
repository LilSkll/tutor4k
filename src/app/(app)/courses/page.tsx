import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getAvailableCourseIds, getCourse } from "@/config/courses";
import { LanguageSelector } from "@/components/courses/language-selector";
import {
  countCompletedForCourse,
  inferCourseIdFromChapterSlug,
} from "@/lib/chapter-display";

export default async function CoursesPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const courseIds = getAvailableCourseIds();
  const courses = [];
  const chapterSlugsByCourse: Record<string, string[]> = {};

  for (const id of courseIds) {
    const config = await getCourse(id);
    const chapters = config.getChapters();
    const grammar = config.getGrammar();
    const vocab = config.getVocab();
    const levels = [...new Set(chapters.map((c) => c.level))];
    const difficulty =
      levels.length > 0
        ? `${levels[0]}–${levels[levels.length - 1]}`
        : "A1–C1";

    chapterSlugsByCourse[id] = chapters.map((c) => c.slug);

    courses.push({
      id: config.id,
      languageCode: config.languageCode,
      title: config.title,
      titleNative: config.titleNative,
      flag: config.flag,
      description: config.description,
      completedChapters: 0,
      totalChapters: chapters.length,
      grammarCount: grammar.length,
      vocabCount: vocab.reduce((sum, topic) => sum + topic.words.length, 0),
      difficulty,
      isActive: false,
      contentReady: chapters.length > 0,
    });
  }

  if (user) {
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

      // Only count if the chapter belongs to that course's curriculum.
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

    courses.forEach((c) => {
      c.completedChapters = countCompletedForCourse(
        completedByCourse[c.id] ?? [],
        chapterSlugsByCourse[c.id] ?? [],
      );
      c.isActive = c.id === activeCourseId;
    });
  }

  const activeCourseId = courses.find((c) => c.isActive)?.id ?? "spanish";

  return (
    <div className="page-container max-w-4xl">
      <LanguageSelector courses={courses} activeCourseId={activeCourseId} />
    </div>
  );
}
