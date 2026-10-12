import { createSupabaseServerClient } from "@/lib/supabase-server";
import { ResetPasswordView } from "@/components/auth/reset-password-view";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const sp = await searchParams;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <ResetPasswordView error={sp.error} hasUser={!!user} />;
}
