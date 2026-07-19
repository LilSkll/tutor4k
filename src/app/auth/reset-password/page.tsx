import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

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

  if (!user) {
    redirect(
      `/forgot-password?error=${encodeURIComponent("Сначала открой ссылку из письма для сброса пароля.")}`,
    );
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            На страницу входа
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <img
              src="/hippogriff-icon.png"
              alt="Spanish with Pavel"
              className="h-10 w-10 rounded-lg"
            />
            <span className="font-bold text-xl gradient-text">Spanish with Pavel</span>
          </div>

          <h1 className="text-2xl font-bold mb-1">Новый пароль</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Придумай пароль не короче 6 символов.
          </p>

          {sp.error && (
            <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {sp.error}
            </div>
          )}

          <ResetPasswordForm />
        </div>
      </div>

      <div className="hidden lg:flex relative bg-gradient-to-br from-primary via-orange-500 to-rose-500 items-center justify-center p-12 overflow-hidden">
        <div className="relative text-center text-white max-w-md">
          <LockKeyhole className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-3">Почти готово</h2>
          <p className="text-white/90">
            После сохранения войди с новым паролем — прогресс обучения
            сохранится.
          </p>
        </div>
      </div>
    </div>
  );
}
