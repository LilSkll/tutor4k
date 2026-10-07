"use server";

import { getCourse } from "@/config/courses";
import { getChapterTitle } from "@/lib/chapter-display";
import { resolveCourseTopicLabel } from "@/lib/course-topic-label";
import { buildDailyExerciseBlocks } from "@/lib/daily-session-plan";
import { attachQuestionGlossesToMany } from "@/lib/exercise-gloss-attach";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { prepareExercisesForSession } from "@/lib/exercise-options";
import {
  getCurrentChapterSlug,
  getCurrentProfile,
  recordStudySession,
} from "@/server/actions/data";
import { getLessonAdaptationAction } from "@/server/actions/learning-profile";
import type { GrammarLevel, InterfaceLanguage, StaticExercise } from "@/types";

export type DailySessionPlan = {
  courseId: string;
  chapterSlug: string;
  chapterTitle: string;
  topicTitle: string;
  grammarTopicSlug: string;
  level: string;
  recommendationLabel: string | null;
  reviewExercises: StaticExercise[];
  practiceExercises: StaticExercise[];
};

function localizeBank(
  exercises: StaticExercise[],
  language: InterfaceLanguage,
  courseId: string,
): StaticExercise[] {
  return prepareExercisesForSession(
    attachQuestionGlossesToMany(
      prepareExercisesForInterface(exercises, language, courseId),
    ),
  );
}

/**
 * Build today's Continue Path: weak-topic review + current-chapter practice.
 * Does not mark the chapter complete.
 */
export async function getDailySessionPlanAction(): Promise<DailySessionPlan | null> {
  const profile = await getCurrentProfile();
  if (!profile) return null;

  const courseId = profile.active_course_id ?? "spanish";
  const language = (profile.interface_language ?? "ru") as InterfaceLanguage;
  const course = await getCourse(courseId);
  const chapterSlug = await getCurrentChapterSlug(courseId);
  if (!chapterSlug) return null;

  const chapter = course.getChapter(chapterSlug);
  if (!chapter) return null;

  const { adaptation, revisionExercises } = await getLessonAdaptationAction({
    courseId,
    grammarTopic: chapter.grammarTopic,
    vocabTopic: chapter.vocabTopic,
    chapterSlug,
  });

  const { reviewExercises, practiceExercises } = buildDailyExerciseBlocks({
    revisionExercises,
    chapterExercises: localizeBank(
      course.getExercises(chapterSlug),
      language,
      courseId,
    ),
    level: chapter.level as GrammarLevel,
  });

  const recommendationLabel = resolveCourseTopicLabel(
    adaptation.revisionTopics[0]?.topic,
    course,
    language,
    courseId,
  );

  const topicTitle =
    resolveCourseTopicLabel(
      chapter.grammarTopic,
      course,
      language,
      courseId,
    ) ?? chapter.grammarTopic;

  return {
    courseId,
    chapterSlug,
    chapterTitle: getChapterTitle(chapter, language),
    topicTitle,
    grammarTopicSlug: chapter.grammarTopic,
    level: chapter.level,
    recommendationLabel,
    reviewExercises,
    practiceExercises,
  };
}

/** Record that the student finished today's Continue Path (~8 minutes). */
export async function completeDailySessionAction(input?: {
  minutes?: number;
}): Promise<{
  error: string | null;
  streak?: number;
  minutesToday?: number;
}> {
  const minutes = Math.max(1, Math.min(30, Math.round(input?.minutes ?? 8)));
  const result = await recordStudySession(minutes, 1);
  return {
    error: result.error ?? null,
    streak: result.streak,
    minutesToday: result.minutesToday,
  };
}
