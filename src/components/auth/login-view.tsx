import Image from "next/image";
import Link from "next/link";
import { CheckEmailNotice } from "@/components/auth/check-email-notice";
import { AuthFormNative } from "@/components/auth/auth-form-native";
import { IconArrowLeft } from "@/components/auth/auth-icons";
import { BrandIcon } from "@/components/shared/brand-icon";
import { translate } from "@/lib/i18n/auth";
import type { InterfaceLanguage } from "@/types";

const LANG_SWITCH: { id: InterfaceLanguage; label: string }[] = [
  { id: "ru", label: "RU" },
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
  { id: "de", label: "DE" },
];

/** Server-rendered login; email/password work before client JS. */
export function LoginView({
  language,
  error,
  notice,
  redirect,
  allowSocialOAuth = true,
}: {
  language: InterfaceLanguage;
  error?: string;
  notice?: string;
  redirect?: string;
  allowSocialOAuth?: boolean;
}) {
  const t = (key: string) => translate(key, language);
  const q = `?lang=${language}`;
  const showCheckEmail =
    notice === "check-email" || notice === "check-email-teacher";

  return (
    <div className="relative isolate min-h-[100svh] overflow-hidden bg-[#070d1a] text-slate-100">
      {/* Desktop full-bleed photo — figures kept on the right */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        <Image
          src="/landing-founder-hippogriff.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          className="object-cover object-[38%_44%] xl:object-[42%_46%] brightness-[1.14] contrast-[1.05] saturate-[1.08]"
        />
        {/* Darken left for the form; keep the right scene vivid */}
        <div className="absolute inset-0 bg-[linear-gradient(270deg,transparent_0%,transparent_38%,hsl(222_47%_6%/0.28)_55%,hsl(222_47%_6%/0.72)_78%,hsl(222_47%_6%/0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(222_47%_6%/0.2)_0%,transparent_12%,transparent_82%,#070d1a_100%)]" />
      </div>

      {/* Mobile / tablet backdrop */}
      <div
        className="absolute inset-0 lg:hidden bg-[radial-gradient(ellipse_at_70%_0%,hsl(32_60%_28%/0.35),transparent_55%),linear-gradient(180deg,#0b1528_0%,#070d1a_100%)]"
        aria-hidden="true"
      />

      <header className="relative z-20 border-b border-white/10 bg-[#070d1a]/40 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link href={`/${q}`} className="flex min-w-0 items-center gap-2">
            <BrandIcon
              size={40}
              priority
              className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
            />
            <span className="hidden truncate text-base font-semibold tracking-tight text-white min-[380px]:inline sm:text-lg">
              Spanish with Pavel
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
            <nav
              className="mr-0.5 flex items-center gap-0.5 sm:mr-1 sm:gap-1"
              aria-label="Language"
            >
              {LANG_SWITCH.map((l) => (
                <Link
                  key={l.id}
                  href={`/login?lang=${l.id}${redirect ? `&redirect=${encodeURIComponent(redirect)}` : ""}${notice ? `&notice=${encodeURIComponent(notice)}` : ""}`}
                  className={`rounded-md px-1.5 py-1 text-[11px] font-semibold sm:px-2 sm:text-xs ${
                    l.id === language
                      ? "bg-amber-400/20 text-amber-200"
                      : "text-slate-400 hover:text-white"
                  }`}
                  hrefLang={l.id}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link
              href={`/signup${q}`}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-rose-600 px-2.5 text-sm font-medium text-white hover:bg-rose-500 sm:h-10 sm:px-4"
            >
              {t("auth.signUp")}
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:gap-8 sm:px-6 lg:max-w-none lg:min-h-[calc(100svh-4rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-12 xl:px-14 2xl:px-20">
        {/* Form panel — left on desktop */}
        <div className="order-2 w-full shrink-0 lg:order-1 lg:w-[min(100%,26rem)] xl:w-[min(100%,28rem)]">
          <div className="rounded-2xl border border-white/10 bg-[#070d1a]/72 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-7">
            <Link
              href={`/${q}`}
              className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
            >
              <IconArrowLeft className="h-4 w-4" />
              {t("auth.backHome")}
            </Link>

            <div className="mb-5 flex items-center gap-2 lg:hidden">
              <BrandIcon size={36} className="h-9 w-9" />
              <span className="text-lg font-semibold tracking-tight text-white">
                Spanish with Pavel
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
              {t("auth.welcomeBack")}
            </h1>
            <p className="mt-1 mb-6 text-sm text-slate-400">
              {t("auth.loginSubtitle")}
            </p>

            {error ? (
              <div className="mb-4 rounded-lg border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                {error}
              </div>
            ) : null}

            {showCheckEmail ? (
              <CheckEmailNotice
                teacher={notice === "check-email-teacher"}
                serverLanguage={language}
              />
            ) : null}

            {notice === "password-updated" ? (
              <div className="mb-4 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                {t("auth.passwordUpdated")}
              </div>
            ) : null}

            <AuthFormNative
              mode="signin"
              language={language}
              redirect={redirect}
              allowSocialOAuth={allowSocialOAuth}
              tone="cinematic"
            />

            <p className="mt-6 text-center text-sm text-slate-400">
              {t("auth.noAccount")}{" "}
              <Link
                href={`/signup${q}`}
                className="font-medium text-amber-200 hover:text-amber-100 hover:underline"
              >
                {t("auth.signUp")}
              </Link>
            </p>
          </div>
        </div>

        {/* Mobile photo frame */}
        <div className="relative order-1 aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:hidden">
          <Image
            src="/landing-founder-hippogriff.jpg"
            alt=""
            fill
            priority
            fetchPriority="high"
            unoptimized
            sizes="(max-width: 1023px) 100vw, 0px"
            className="object-cover object-[28%_38%] brightness-[1.1] contrast-[1.04] saturate-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/40 via-transparent to-transparent" />
        </div>

        {/* Ambient copy — right over the vivid photo (desktop) */}
        <div className="order-3 hidden min-w-0 max-w-xl flex-1 lg:order-2 lg:block lg:pl-4 xl:pl-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200/90 sm:text-xs sm:tracking-[0.16em]">
            Spanish with Pavel
          </p>
          <h2 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-white [text-shadow:0_2px_24px_rgba(7,13,26,0.55)] xl:text-5xl">
            {t("auth.heroSide.login")}
          </h2>
          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-slate-100/90 [text-shadow:0_1px_16px_rgba(7,13,26,0.65)] lg:text-lg">
            {t("auth.heroSide.loginDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}
