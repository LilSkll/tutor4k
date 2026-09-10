import type { UserRole } from "@/types";

/** Roles that may open Teacher Studio (`/teacher/*`). */
export function canAccessTeacherStudio(role: UserRole | null | undefined): boolean {
  return role === "teacher" || role === "school_admin";
}

/** Student Journey only. */
export function isStudentRole(role: UserRole | null | undefined): boolean {
  return !role || role === "student";
}

/** Default home after login / landing redirect. */
export function homePathForRole(role: UserRole | null | undefined): string {
  return canAccessTeacherStudio(role) ? "/teacher/dashboard" : "/dashboard";
}

/**
 * Whether a post-login redirect target is allowed for this role.
 * Teachers must not land in Student Journey; students must not land in Studio.
 */
export function resolvePostLoginPath(
  role: UserRole | null | undefined,
  requestedRedirect: string | null | undefined,
): string {
  const home = homePathForRole(role);
  const redirect = (requestedRedirect ?? "").trim() || home;

  if (!redirect.startsWith("/") || redirect.startsWith("//")) return home;

  const wantsTeacher = redirect === "/teacher" || redirect.startsWith("/teacher/");
  const studio = canAccessTeacherStudio(role);

  if (wantsTeacher && !studio) return "/dashboard";
  if (!wantsTeacher && studio) {
    // Teacher tried to open a student path (or bare /dashboard) → Studio.
    return home;
  }
  return redirect;
}
