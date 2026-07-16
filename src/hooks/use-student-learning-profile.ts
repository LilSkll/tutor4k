"use client";

import * as React from "react";
import { getStudentLearningProfileAction } from "@/server/actions/learning-profile";
import type { StudentCourseProfile } from "@/types/learning-profile";
import { useUIStore } from "@/stores";

/**
 * Future-ready hook: loads the persistent Student Learning Profile
 * for the active course. Does not render UI by itself.
 */
export function useStudentLearningProfile(courseId?: string | null) {
  const activeCourseId = useUIStore((s) => s.activeCourseId);
  const resolved = courseId ?? activeCourseId ?? "spanish";

  const [profile, setProfile] = React.useState<StudentCourseProfile | null>(
    null,
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const reload = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getStudentLearningProfileAction(resolved);
      setProfile(data.profile);
    } catch (err) {
      setError((err as Error).message);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, [resolved]);

  React.useEffect(() => {
    void reload();
  }, [reload]);

  return {
    courseId: resolved,
    profile,
    loading,
    error,
    reload,
    recommendations: profile?.recommendations ?? [],
    recommendationStrings: profile?.lastRecommendations ?? [],
    weaknesses: profile?.weaknesses ?? [],
    strengths: profile?.strengths ?? [],
  };
}
