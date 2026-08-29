"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getCourse } from "@/config/courses";
import { planLessonAdaptation } from "@/server/learning/adaptive";
import {
  emptyCourseProfile,
  getCourseLearningProfile,
  getLearningProfileStore,
} from "@/server/learning/student-profile";
import type {
  LessonAdaptation,
  StudentCourseProfile,
} from "@/types/learning-profile";
import type { StaticExercise, InterfaceLanguage } from "@/types";
import { attachQuestionGlossesToMany } from "@/lib/exercise-gloss-attach";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { prepareExercisesForSession } from "@/lib/exercise-options";
import { pickRandomRevisionExercises } from "@/lib/revision-exercises";
import { getChapterProgress } from "@/server/actions/data";

/**
 * Read the persistent Student Learning Profile for the active (or given) course.
 * Future UI: dashboard recommendations, progress, daily goals.
 */
export async function getStudentLearningProfileAction(
  courseId?: string | null,
): Promise<{
  courseId: string;
  profile: StudentCourseProfile;
}> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let resolved = courseId ?? "spanish";
  if (user && !courseId) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("active_course_id")
      .eq("id", user.id)
      .maybeSingle();
    if (profile?.active_course_id) {
      resolved = profile.active_course_id as string;
    }
  }

  if (!user) {
    return { courseId: resolved, profile: emptyCourseProfile() };
  }

  const profile = await getCourseLearningProfile(resolved, user.id);
  return { courseId: resolved, profile };
}

/** Full multi-course store (for future progress UI). */
export async function getStudentLearningProfileStoreAction() {
  return getLearningProfileStore();
}

/**
 * Adaptive lesson plan + optional revision exercises (2–3) before new topic.
 * Revision items are randomly sampled from completed chapters so warm-ups
 * do not repeat the same memorized stems every lesson.
 */
export async function getLessonAdaptationAction(input: {
  courseId: string;
  grammarTopic: string;
  vocabTopic?: string | null;
  /** Current chapter — excluded from the revision pool. */
  chapterSlug?: string | null;
}): Promise<{
  adaptation: LessonAdaptation;
  revisionExercises: StaticExercise[];
}> {
  const profile = await getCourseLearningProfile(input.courseId);
  const adaptation = planLessonAdaptation(
    profile,
    input.grammarTopic,
    input.vocabTopic,
  );

  let revisionExercises: StaticExercise[] = [];
  try {
    const course = await getCourse(input.courseId);
    const chapters = course.getChapters();
    const courseSlugs = new Set(chapters.map((c) => c.slug));

    const progress = await getChapterProgress();
    const completedSlugs = progress
      .filter((p) => p.status === "completed" && p.chapter_slug)
      .map((p) => p.chapter_slug as string)
      .filter((slug) => courseSlugs.has(slug) && slug !== input.chapterSlug);

    // Prefer weak/stale topics when the adaptive planner suggests them,
    // but still draw randomly from the full completed pool.
    const preferredSlugs: string[] = [];
    for (const rec of adaptation.revisionTopics) {
      const ch = chapters.find(
        (c) =>
          c.grammarTopic === rec.topic ||
          c.vocabTopic === rec.topic ||
          c.grammarTopic.includes(rec.topic) ||
          (c.vocabTopic?.includes(rec.topic) ?? false),
      );
      if (ch && completedSlugs.includes(ch.slug)) preferredSlugs.push(ch.slug);
    }

    // If nothing is completed yet, fall back to prior chapters in journey order
    // (credited CEFR onboarding / locked-but-prior content).
    let poolSlugs = completedSlugs;
    if (poolSlugs.length === 0 && input.chapterSlug) {
      const idx = chapters.findIndex((c) => c.slug === input.chapterSlug);
      if (idx > 0) {
        poolSlugs = chapters.slice(0, idx).map((c) => c.slug);
      }
    }

    const poolByChapter = new Map<string, StaticExercise[]>();
    for (const slug of poolSlugs) {
      poolByChapter.set(slug, course.getExercises(slug));
    }

    revisionExercises = pickRandomRevisionExercises({
      poolByChapter,
      completedSlugs: poolSlugs,
      preferredSlugs,
      excludeChapterSlug: input.chapterSlug ?? undefined,
      count: 3,
    });
  } catch {
    // Non-fatal: lesson continues without revision block.
  }

  return {
    adaptation: {
      ...adaptation,
      // Show revision whenever we could assemble a warm-up from past chapters.
      needsRevision: revisionExercises.length > 0,
    },
    revisionExercises: await localizeRevisionExercises(
      revisionExercises,
      input.courseId,
    ),
  };
}

async function localizeRevisionExercises(
  exercises: StaticExercise[],
  courseId: string,
): Promise<StaticExercise[]> {
  let language: InterfaceLanguage = "ru";
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("interface_language")
        .eq("id", user.id)
        .maybeSingle();
      if (profile?.interface_language) {
        language = profile.interface_language as InterfaceLanguage;
      }
    }
  } catch {
    // fall through with ru
  }
  void courseId;
  return prepareExercisesForSession(
    attachQuestionGlossesToMany(
      prepareExercisesForInterface(exercises, language),
    ),
  );
}
