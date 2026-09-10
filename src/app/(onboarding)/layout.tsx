import { AppProviders } from "@/components/providers/app-providers";

/** Onboarding needs app providers but sits outside the student journey shell. */
export default function OnboardingGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppProviders>{children}</AppProviders>;
}
