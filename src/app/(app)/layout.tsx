import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/server/actions/data";
import { assertStudentJourneyAccess } from "@/server/teacher/authz";
import { AppShell } from "@/components/layout/app-shell";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getCurrentProfile();
  if (!profile) redirect("/login");

  // Teacher Studio roles never use Student Journey shell.
  await assertStudentJourneyAccess(profile);

  if (!profile.onboarded) redirect("/onboarding");

  return <AppShell profile={profile}>{children}</AppShell>;
}
