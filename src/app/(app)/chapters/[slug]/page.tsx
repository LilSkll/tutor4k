import { notFound } from "next/navigation";
import { getCurrentProfile } from "@/server/actions/data";
import { getCourse } from "@/config/courses";
import { LessonRunner } from "@/components/chapters/lesson-runner";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = await getCurrentProfile();

  const courseId = profile?.active_course_id ?? "spanish";
  const course = await getCourse(courseId);

  const chapter = course.getChapter(slug);
  if (!chapter) notFound();

  const grammarTopic = course.getGrammarTopic(chapter.grammarTopic);
  const exercises = course.getExercises(slug);
  const nextChapter = course.getNextChapter(slug);

  return (
    <LessonRunner
      chapter={chapter}
      userName={profile?.name ?? ""}
      grammarContent={grammarTopic?.content ?? "Материал готовится."}
      grammarTitle={grammarTopic?.titleEs ?? chapter.title}
      exercises={exercises}
      nextChapterSlug={nextChapter?.slug ?? null}
    />
  );
}
