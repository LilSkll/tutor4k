import { SignupView } from "@/components/auth/signup-view";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const sp = await searchParams;
  return <SignupView error={sp.error} />;
}
