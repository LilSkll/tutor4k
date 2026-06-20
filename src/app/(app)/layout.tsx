import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getCurrentProfile } from "@/server/actions/data";
import { AppShell } from "@/components/layout/app-shell";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const profile = await getCurrentProfile();

  // Force onboarding before accessing the app.
  if (profile && !profile.onboarded) redirect("/onboarding");

  return <AppShell profile={profile}>{children}</AppShell>;
}
