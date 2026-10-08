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
  getDailyActivity,
  recordStudySession,
} from "@/server/actions/data";
import { getLessonAdaptationAction } from "@/server/actions/learning-profile";
import { pickStrengthTopicSlug } from "@/lib/daily-personalization";
import { parseLocalDateKey, previousDateKey } from "@/lib/local-date";
import type { GrammarLevel, InterfaceLanguage, StaticExercise } from "@/types";

export type DailySessionPlan = {
  courseId: string;
  chapterSlug: string;
  chapterTitle: string;
  topicTitle: string;
  grammarTopicSlug: string;
  level: string;
  /** Localized weak-topic label for UI copy (interface language). */
  recommendationLabel: string | null;
  /** Localized strength-topic label for balance line (interface language). */
  strengthLabel: string | null;
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

  const { adaptation, revisionExercises, profile: learningProfile } =
    await getLessonAdaptationAction({
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

  const weakTopicSlug = adaptation.revisionTopics[0]?.topic ?? null;
  const recommendationLabel = resolveCourseTopicLabel(
    weakTopicSlug,
    course,
    language,
    courseId,
  );

  const strengthRaw = resolveCourseTopicLabel(
    pickStrengthTopicSlug(learningProfile, weakTopicSlug),
    course,
    language,
    courseId,
  );
  // Hide balance line if unresolved or identical to the weak topic.
  const strengthLabel =
    strengthRaw &&
    (!recommendationLabel ||
      strengthRaw.trim().toLowerCase() !==
        recommendationLabel.trim().toLowerCase())
      ? strengthRaw
      : null;

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
    strengthLabel,
    reviewExercises,
    practiceExercises,
  };
}

/** Record that the student finished today's Continue Path (~8 minutes). */
export async function completeDailySessionAction(input?: {
  minutes?: number;
  /** Browser YYYY-MM-DD so streak aligns with the student's calendar. */
  localDate?: string;
}): Promise<{
  error: string | null;
  streak?: number;
  minutesToday?: number;
  minutesYesterday?: number;
}> {
  const minutes = Math.max(1, Math.min(30, Math.round(input?.minutes ?? 8)));
  const activityDate = parseLocalDateKey(input?.localDate);
  const result = await recordStudySession(minutes, 1, { activityDate });
  if (result.error) {
    return { error: result.error };
  }

  const todayKey = result.activityDate;
  const recent = await getDailyActivity(2);
  const minutesYesterday = todayKey
    ? (recent.find((row) => row.activity_date === previousDateKey(todayKey))
        ?.minutes_studied ?? 0)
    : 0;

  return {
    error: null,
    streak: result.streak,
    minutesToday: result.minutesToday,
    minutesYesterday,
  };
}
