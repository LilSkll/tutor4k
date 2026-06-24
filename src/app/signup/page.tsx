import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { AuthForm } from "@/components/auth/auth-form";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const sp = await searchParams;
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white font-bold text-xl">
              Ñ
            </div>
            <span className="font-bold text-xl gradient-text">SpanishTutor</span>
          </div>

          <h1 className="text-2xl font-bold mb-1">Создай аккаунт</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Начни учить испанский бесплатно уже сегодня.
          </p>

          {sp.error && (
            <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {sp.error}
            </div>
          )}

          <AuthForm mode="signup" />

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Уже есть аккаунт?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Войти
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex relative bg-gradient-to-br from-orange-500 via-rose-500 to-primary items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-10 text-9xl font-bold text-white">¿</div>
          <div className="absolute bottom-1/3 right-10 text-9xl font-bold text-white">?</div>
        </div>
        <div className="relative text-center text-white max-w-md">
          <Sparkles className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-3">
            Репетитор, который заставляет думать
          </h2>
          <p className="text-white/90">
            Не решает за тебя: объясняет, даёт подсказки и отмечает твои успехи.
            Так учатся по-настоящему.
          </p>
        </div>
      </div>
    </div>
  );
}
