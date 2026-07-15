"use client";

import * as React from "react";
import { useUIStore } from "@/stores";
import type { Profile } from "@/types";

/** Sync server profile preferences into the client UI store. */
export function ProfileSync({ profile }: { profile: Profile | null }) {
  const setInterfaceLanguage = useUIStore((s) => s.setInterfaceLanguage);
  const setActiveCourseId = useUIStore((s) => s.setActiveCourseId);

  React.useEffect(() => {
    if (profile?.interface_language) {
      setInterfaceLanguage(profile.interface_language);
    }
    if (profile?.active_course_id) {
      setActiveCourseId(profile.active_course_id);
    }
  }, [
    profile?.interface_language,
    profile?.active_course_id,
    setInterfaceLanguage,
    setActiveCourseId,
  ]);

  return null;
}
