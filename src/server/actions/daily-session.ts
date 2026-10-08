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
import {
  getHalloweenExercisesForCourse,
  mixHalloweenPractice,
} from "@/config/halloween-exercises";
import {
  HALLOWEEN_DAILY_STREAK_TARGET,
  HALLOWEEN_EGG_ID,
  countConsecutiveSeasonalDays,
  isHalloweenCourse,
  isHalloweenSeasonOn,
} from "@/lib/seasonal";
import { localDateKey, parseLocalDateKey, previousDateKey } from "@/lib/local-date";
import type { GrammarLevel, InterfaceLanguage, StaticExercise } from "@/types";
import { cookies } from "next/headers";

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
  /** Client should clear seen-ids when the bank cycled. */
  exhaustedExclusions?: boolean;
  halloween?: boolean;
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
 *
 * Pass `excludeIds` + `runNonce` from the client so reopening Daily the same
 * day does not repeat the same practice items.
 */
export async function getDailySessionPlanAction(input?: {
  excludeIds?: string[];
  runNonce?: number;
}): Promise<DailySessionPlan | null> {
  const profile = await getCurrentProfile();
  if (!profile) return null;

  const courseId = profile.active_course_id ?? "spanish";
  const language = (profile.interface_language ?? "ru") as InterfaceLanguage;
  const course = await getCourse(courseId);
  const chapterSlug = await getCurrentChapterSlug(courseId);
  if (!chapterSlug) return null;

  const chapter = course.getChapter(chapterSlug);
  if (!chapter) return null;

  const jar = await cookies();
  const todayIso =
    parseLocalDateKey(jar.get("st_local_date")?.value) ?? localDateKey();
  const runNonce = Math.max(0, Math.floor(Number(input?.runNonce) || 0));
  const rotationSeed = `${courseId}:${chapterSlug}:${todayIso}:r${runNonce}`;

  const { adaptation, revisionExercises, profile: learningProfile } =
    await getLessonAdaptationAction({
      courseId,
      grammarTopic: chapter.grammarTopic,
      vocabTopic: chapter.vocabTopic,
      chapterSlug,
      rotationSeed,
    });

  const {
    reviewExercises,
    exhaustedExclusions,
    practiceExercises: practiceBase,
  } = buildDailyExerciseBlocks({
    revisionExercises,
    chapterExercises: localizeBank(
      course.getExercises(chapterSlug),
      language,
      courseId,
    ),
    level: chapter.level as GrammarLevel,
    rotationSeed,
    excludeIds: input?.excludeIds,
  });

  const halloween =
    isHalloweenCourse(courseId) && isHalloweenSeasonOn(todayIso);
  const halloweenPool = halloween
    ? getHalloweenExercisesForCourse(courseId)
    : [];
  const practiceExercises =
    halloween && halloweenPool.length > 0
      ? mixHalloweenPractice(
          practiceBase,
          rotationSeed,
          2,
          localizeBank(halloweenPool, language, courseId),
        )
      : practiceBase;

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
    exhaustedExclusions,
    halloween,
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
  /** Minutes actually added this call (0 if already credited today). */
  minutesCredited?: number;
  halloween?: boolean;
  pumpkinStreakAwarded?: boolean;
}> {
  // 0 = already credited today (client idempotency); still refresh totals/streak.
  const minutes = Math.max(0, Math.min(15, Math.round(input?.minutes ?? 8)));
  const activityDate = parseLocalDateKey(input?.localDate);
  const result = await recordStudySession(minutes, minutes > 0 ? 1 : 0, {
    activityDate,
  });
  if (result.error) {
    return { error: result.error };
  }

  const todayKey = result.activityDate ?? localDateKey();
  const profile = await getCurrentProfile();
  const courseId = profile?.active_course_id ?? "spanish";
  const halloween =
    isHalloweenCourse(courseId) && isHalloweenSeasonOn(todayKey);
  const recent = await getDailyActivity(7);
  const minutesYesterday =
    recent.find((row) => row.activity_date === previousDateKey(todayKey))
      ?.minutes_studied ?? 0;

  let pumpkinStreakAwarded = false;
  if (halloween) {
    pumpkinStreakAwarded = await maybeAwardPumpkinStreak(todayKey, courseId);
  }

  return {
    error: null,
    streak: result.streak,
    minutesToday: result.minutesToday,
    minutesYesterday,
    minutesCredited: minutes,
    halloween,
    pumpkinStreakAwarded,
  };
}

/** 5 consecutive Halloween Daily finishes → journey egg (persists after season). */
async function maybeAwardPumpkinStreak(
  todayKey: string,
  courseId: string,
): Promise<boolean> {
  try {
    if (!isHalloweenCourse(courseId)) return false;

    const { createSupabaseServerClient } = await import("@/lib/supabase-server");
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return false;

    const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
    const admin = createSupabaseAdminClient();
    const client = admin ?? supabase;

    const { loadJourneyFinds, saveJourneyFinds } = await import(
      "@/server/journey/rewards"
    );
    const {
      emptyCourseFinds,
      normalizeCourseFinds,
      getEggById,
    } = await import("@/config/journey/easter-eggs");

    // Same boundary cast as chapters/complete (rewards.Client is a narrow duck type).
    const journeyClient = client as never;
    const store = await loadJourneyFinds(journeyClient, user.id);
    const slice = normalizeCourseFinds(store[courseId] ?? emptyCourseFinds());

    // Record this Daily finish (idempotent per calendar day).
    const dates = new Set(slice.seasonalDailyDates ?? []);
    dates.add(todayKey);
    slice.seasonalDailyDates = [...dates].sort();

    const alreadyHasEgg = slice.eggs.some((e) => e.id === HALLOWEEN_EGG_ID);
    let awarded = false;
    if (
      !alreadyHasEgg &&
      countConsecutiveSeasonalDays(dates, todayKey) >=
        HALLOWEEN_DAILY_STREAK_TARGET
    ) {
      const egg = getEggById(HALLOWEEN_EGG_ID);
      if (egg) {
        slice.eggs.push({
          id: egg.id,
          rarity: egg.rarity,
          chapterSlug: "seasonal-halloween",
          at: new Date().toISOString(),
        });
        awarded = true;
      }
    }

    store[courseId] = slice;
    const ok = await saveJourneyFinds(journeyClient, user.id, store);
    return ok && awarded;
  } catch (err) {
    console.warn(
      "[halloween] pumpkin streak award failed:",
      (err as Error).message,
    );
    return false;
  }
}
