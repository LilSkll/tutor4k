"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import {
  emptyCourseProfile,
  getCourseLearningProfile,
  getLearningProfileStore,
} from "@/server/learning/student-profile";
import type { StudentCourseProfile } from "@/types/learning-profile";

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
