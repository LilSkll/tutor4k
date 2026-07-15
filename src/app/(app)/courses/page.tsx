import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getAvailableCourseIds, getCourse } from "@/config/courses";
import { LanguageSelector } from "@/components/courses/language-selector";

export default async function CoursesPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const courseIds = getAvailableCourseIds();
  const courses = [];
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
    });
  }

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
    <div className="page-container max-w-4xl">
      <LanguageSelector courses={courses} activeCourseId={activeCourseId} />
    </div>
  );
}
