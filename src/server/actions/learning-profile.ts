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
import type { StaticExercise } from "@/types";

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
 */
export async function getLessonAdaptationAction(input: {
  courseId: string;
  grammarTopic: string;
  vocabTopic?: string | null;
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

  const revisionExercises: StaticExercise[] = [];
  if (adaptation.needsRevision && adaptation.revisionTopics.length > 0) {
    try {
      const course = await getCourse(input.courseId);
      const chapters = course.getChapters();
      for (const rec of adaptation.revisionTopics) {
        if (revisionExercises.length >= 3) break;
        const ch = chapters.find(
          (c) =>
            c.grammarTopic === rec.topic ||
            c.vocabTopic === rec.topic ||
            c.grammarTopic.includes(rec.topic) ||
            (c.vocabTopic?.includes(rec.topic) ?? false),
        );
        if (!ch) continue;
        const exs = course.getExercises(ch.slug);
        for (const ex of exs) {
          if (revisionExercises.length >= 3) break;
          if (
            !revisionExercises.some(
              (e) => e.question.trim() === ex.question.trim(),
            )
          ) {
            revisionExercises.push(ex);
          }
        }
      }
    } catch {
      // Non-fatal: lesson continues without revision block.
    }
  }

  return {
    adaptation: {
      ...adaptation,
      needsRevision: revisionExercises.length > 0,
    },
    revisionExercises,
  };
}
