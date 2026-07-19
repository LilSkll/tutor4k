import Link from "next/link";
import { ArrowLeft, KeyRound } from "lucide-react";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; notice?: string }>;
}) {
  const sp = await searchParams;

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад ко входу
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <img
              src="/hippogriff-icon.png"
              alt="Spanish with Pavel"
              className="h-10 w-10 rounded-lg"
            />
            <span className="font-bold text-xl gradient-text">Spanish with Pavel</span>
          </div>

          <h1 className="text-2xl font-bold mb-1">Забыли пароль?</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Укажи email — пришлём ссылку для создания нового пароля.
          </p>

          {sp.error && (
            <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {sp.error}
            </div>
          )}
          {sp.notice === "sent" && (
            <div className="mb-4 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
              Если аккаунт с таким email есть, письмо уже отправлено. Проверь
              почту и папку «Спам».
            </div>
          )}

          {sp.notice !== "sent" && <ForgotPasswordForm />}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Вспомнили пароль?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Войти
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex relative bg-gradient-to-br from-primary via-orange-500 to-rose-500 items-center justify-center p-12 overflow-hidden">
        <div className="relative text-center text-white max-w-md">
          <KeyRound className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-3">Восстановление доступа</h2>
          <p className="text-white/90">
            Ссылка из письма действует ограниченное время. После сброса можно
            сразу войти с новым паролем.
          </p>
        </div>
      </div>
    </div>
  );
}
