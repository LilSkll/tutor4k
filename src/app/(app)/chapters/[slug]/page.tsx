import { notFound, redirect } from "next/navigation";
import {
  getChapterProgress,
  getCurrentProfile,
} from "@/server/actions/data";
import { getCourse } from "@/config/courses";
import { LessonRunner } from "@/components/chapters/lesson-runner";
import {
  getChapterAchievementBullets,
  getChapterLocation,
  getChapterSummary,
  getChapterTitle,
  hasCompletedPrereqChain,
} from "@/lib/chapter-display";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { prepareExercisesForSession } from "@/lib/exercise-options";
import { orderEarlyLevelPractice } from "@/lib/exercise-bank";
import { attachQuestionGlossesToMany } from "@/lib/exercise-gloss-attach";
import { getChapterStory } from "@/config/chapter-stories";
import { localizeGrammarTopicMeta } from "@/lib/grammar-topic-localize";
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
  const exercises = prepareExercisesForSession(
    attachQuestionGlossesToMany(
      orderEarlyLevelPractice(
        prepareExercisesForInterface(course.getExercises(slug), lang),
        chapter.level,
      ),
    ),
  );
  const chapterStory = await getChapterStory(slug, lang);
  const grammarMeta = grammarTopic ? toGrammarTopicMeta(grammarTopic) : null;
  const grammarLocalized = grammarMeta
    ? localizeGrammarTopicMeta(grammarMeta, lang)
    : null;
  const chapterDisplayTitle = getChapterTitle(chapter, lang);
  const chapterDisplaySummary = getChapterSummary(chapter, lang);
  const chapterDisplayLocation = getChapterLocation(chapter, lang);
  const grammarTitle = grammarLocalized?.localizedTitle ?? null;
  const achievementBullets = getChapterAchievementBullets(
    chapter,
    lang,
    grammarTitle,
  );

  return (
    <LessonRunner
      chapter={chapter}
      courseId={courseId}
      userName={profile?.name ?? ""}
      grammarTopicSlug={chapter.grammarTopic}
      grammarTitle={grammarTitle}
      chapterStory={chapterStory}
      chapterDisplayTitle={chapterDisplayTitle}
      chapterDisplaySummary={chapterDisplaySummary}
      chapterDisplayLocation={chapterDisplayLocation}
      achievementBullets={achievementBullets}
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
