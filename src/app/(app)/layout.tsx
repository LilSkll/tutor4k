import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/server/actions/data";
import { AppShell } from "@/components/layout/app-shell";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Single cached profile fetch (pages that also call getCurrentProfile share it).
  const profile = await getCurrentProfile();
  if (!profile) redirect("/login");

  // Force onboarding before accessing the app.
  if (!profile.onboarded) redirect("/onboarding");

  return <AppShell profile={profile}>{children}</AppShell>;
}
