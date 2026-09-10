import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/server/actions/data";
import {
  canAccessTeacherStudio,
  isStudentRole,
} from "@/lib/roles";
import type { Profile, UserRole } from "@/types";

/** Normalize DB / legacy rows without role column. */
export function resolveUserRole(profile: Pick<Profile, "role"> | null): UserRole {
  return profile?.role ?? "student";
}

/**
 * Teacher Studio gate — call from `(teacher)/layout`.
 * Students are redirected to Student Journey.
 */
export async function requireTeacherStudioAccess(): Promise<Profile> {
  const profile = await getCurrentProfile();
  if (!profile) redirect("/login");

  const role = resolveUserRole(profile);
  if (!canAccessTeacherStudio(role)) {
    redirect("/dashboard");
  }
  return { ...profile, role };
}

/**
 * Student Journey gate helper — teachers/admins bounce to Teacher Studio.
 * `(app)/layout` still owns onboarded checks for students.
 */
export async function assertStudentJourneyAccess(profile: Profile): Promise<void> {
  if (!isStudentRole(resolveUserRole(profile))) {
    redirect("/teacher/dashboard");
  }
}
