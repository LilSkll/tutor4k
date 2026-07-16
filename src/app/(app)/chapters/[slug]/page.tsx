import { notFound } from "next/navigation";
import { getCurrentProfile } from "@/server/actions/data";
import { getCourse } from "@/config/courses";
import { LessonRunner } from "@/components/chapters/lesson-runner";
import {
  getChapterSummary,
  getChapterTitle,
} from "@/lib/chapter-display";
import { translate } from "@/lib/i18n";

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
  const lang = profile?.interface_language ?? "ru";
  const materialPreparing = translate("chapters.materialPreparing", lang);

  return (
    <LessonRunner
      chapter={chapter}
      courseId={courseId}
      userName={profile?.name ?? ""}
      grammarTopicSlug={chapter.grammarTopic}
      grammarNativeContent={grammarTopic?.content ?? materialPreparing}
      grammarTopic={grammarTopic ?? null}
      exercises={exercises}
      nextChapterSlug={nextChapter?.slug ?? null}
      nextChapterTitle={
        nextChapter ? getChapterTitle(nextChapter, lang) : null
      }
      nextChapterSummary={
        nextChapter ? getChapterSummary(nextChapter, lang) : null
      }
      targetLanguage={course.titleNative}
    />
  );
}
