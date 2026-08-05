import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/server/actions/data";
import { assertStudentJourneyAccess } from "@/server/teacher/authz";
import { AppShell } from "@/components/layout/app-shell";
import { inter } from "@/lib/fonts";

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

  return (
    <div className={`${inter.variable} font-sans`}>
      <AppShell profile={profile}>{children}</AppShell>
    </div>
  );
}
