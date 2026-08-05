import { ForgotPasswordView } from "@/components/auth/forgot-password-view";

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; notice?: string }>;
}) {
  const sp = await searchParams;
  return <ForgotPasswordView error={sp.error} notice={sp.notice} />;
}
