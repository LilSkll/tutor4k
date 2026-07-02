import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { AuthForm } from "@/components/auth/auth-form";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; notice?: string; redirect?: string }>;
}) {
  const sp = await searchParams;
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Form side */}
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
            <img
              src="/hippogriff-logo.svg"
              alt="Spanish with Pavel"
              className="h-10 w-10 rounded-lg"
            />
            <span className="font-bold text-xl gradient-text">Spanish with Pavel</span>
          </div>

          <h1 className="text-2xl font-bold mb-1">С возвращением!</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Войди, чтобы продолжить учить испанский.
          </p>

          {sp.error && (
            <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {sp.error}
            </div>
          )}
          {sp.notice === "check-email" && (
            <div className="mb-4 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
              Аккаунт создан. Проверь почту для подтверждения.
            </div>
          )}

          <AuthForm mode="signin" redirect={sp.redirect} />

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Нет аккаунта?{" "}
            <Link href="/signup" className="text-primary font-medium hover:underline">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>

      {/* Decorative side */}
      <div className="hidden lg:flex relative bg-gradient-to-br from-primary via-orange-500 to-rose-500 items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl font-bold text-white">¡</div>
          <div className="absolute bottom-10 right-10 text-9xl font-bold text-white">!</div>
        </div>
        <div className="relative text-center text-white max-w-md">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-3">
            Твой преподаватель испанского, 24/7
          </h2>
          <p className="text-white/90">
            Учи грамматику, лексику и готовься к DELE с репетитором, который
            подстраивается под твой уровень.
          </p>
        </div>
      </div>
    </div>
  );
}
