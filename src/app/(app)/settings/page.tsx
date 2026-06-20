import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/server/actions/data";
import { SettingsClient } from "@/components/settings/settings-client";

export default async function SettingsPage() {
  const profile = await getCurrentProfile();
  if (!profile) redirect("/login");

  return <SettingsClient profile={profile} />;
}
