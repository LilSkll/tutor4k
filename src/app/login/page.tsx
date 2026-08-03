import { LoginView } from "@/components/auth/login-view";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; notice?: string; redirect?: string }>;
}) {
  const sp = await searchParams;
  return (
    <LoginView error={sp.error} notice={sp.notice} redirect={sp.redirect} />
  );
}
