import { notFound, redirect } from "next/navigation";
import {
  getChapterProgress,
  getCurrentProfile,
} from "@/server/actions/data";
import { getCourse } from "@/config/courses";
import { LessonRunner } from "@/components/chapters/lesson-runner";
import {
  getChapterSummary,
  getChapterTitle,
  hasCompletedPrereqChain,
} from "@/lib/chapter-display";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { attachQuestionGlossesToMany } from "@/lib/exercise-gloss-attach";
import { getChapterStory } from "@/config/chapter-stories";
import { toGrammarTopicMeta } from "@/lib/grammar-topic-meta";

export default async function ChapterPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ courseId?: string }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const [profile, progress] = await Promise.all([
    getCurrentProfile(),
    getChapterProgress(),
  ]);

  // Homework links may pass ?courseId= so the chapter resolves for that course
  // even when the student's active course differs.
  const courseId =
    sp.courseId === "english" || sp.courseId === "spanish"
      ? sp.courseId
      : (profile?.active_course_id ?? "spanish");
  const course = await getCourse(courseId);

  const chapter = course.getChapter(slug);
  if (!chapter) notFound();

  const CHAPTERS = course.getChapters();
  const chaptersBySlug = new Map(CHAPTERS.map((c) => [c.slug, c]));
  const courseSlugs = new Set(CHAPTERS.map((c) => c.slug));
  const completedSlugs = new Set(
    progress
      .filter((p) => p.status === "completed" && p.chapter_slug)
      .map((p) => p.chapter_slug as string)
      .filter((s) => courseSlugs.has(s)),
  );

  if (
    !completedSlugs.has(chapter.slug) &&
    !hasCompletedPrereqChain(chapter, chaptersBySlug, completedSlugs)
  ) {
    redirect("/chapters");
  }

  const grammarTopic = course.getGrammarTopic(chapter.grammarTopic);
  const nextChapter = course.getNextChapter(slug);
  const lang = profile?.interface_language ?? "ru";
  const exercises = attachQuestionGlossesToMany(
    prepareExercisesForInterface(course.getExercises(slug), lang),
  );
  const chapterStory = getChapterStory(slug, lang);

  return (
    <LessonRunner
      chapter={chapter}
      courseId={courseId}
      userName={profile?.name ?? ""}
      grammarTopicSlug={chapter.grammarTopic}
      grammarTopic={grammarTopic ? toGrammarTopicMeta(grammarTopic) : null}
      chapterStory={chapterStory}
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
