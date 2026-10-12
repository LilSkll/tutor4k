import Image from "next/image";
import Link from "next/link";
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

/** Server-rendered signup; fields/submit work before client JS. */
export function SignupView({
  language,
  error,
  allowSocialOAuth = true,
}: {
  language: InterfaceLanguage;
  error?: string;
  allowSocialOAuth?: boolean;
}) {
  const t = (key: string) => translate(key, language);
  const q = `?lang=${language}`;

  return (
    <div className="relative isolate min-h-[100svh] overflow-hidden bg-[#070d1a] text-slate-100">
      {/* Desktop full-bleed photo */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        <Image
          src="/landing-founder-hippogriff.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          className="object-cover object-[16%_42%] xl:object-[18%_44%] brightness-[1.14] contrast-[1.05] saturate-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_42%,hsl(222_47%_6%/0.35)_62%,hsl(222_47%_6%/0.78)_82%,hsl(222_47%_6%/0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(222_47%_6%/0.2)_0%,transparent_12%,transparent_82%,#070d1a_100%)]" />
      </div>

      {/* Mobile / tablet backdrop */}
      <div
        className="absolute inset-0 lg:hidden bg-[radial-gradient(ellipse_at_30%_0%,hsl(32_60%_28%/0.35),transparent_55%),linear-gradient(180deg,#0b1528_0%,#070d1a_100%)]"
        aria-hidden="true"
      />

      <header className="relative z-20 border-b border-white/10 bg-[#070d1a]/40 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link href={`/${q}`} className="flex min-w-0 items-center gap-2">
            <BrandIcon size={40} priority className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
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
                  href={`/signup?lang=${l.id}`}
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
              href={`/login${q}`}
              className="inline-flex h-9 items-center justify-center rounded-lg px-2 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white sm:h-10 sm:px-3"
            >
              {t("auth.signIn")}
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:max-w-none lg:min-h-[calc(100svh-4rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-12 xl:px-14 2xl:px-20">
        {/* Ambient left copy — desktop */}
        <div className="hidden min-w-0 max-w-xl flex-1 lg:block">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200/90 sm:text-xs sm:tracking-[0.16em]">
            Spanish with Pavel
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-white [text-shadow:0_2px_24px_rgba(7,13,26,0.55)] xl:text-5xl">
            <span className="block">{t("auth.heroSide.signup")}</span>
            <span className="mt-1 block bg-gradient-to-r from-amber-200 via-amber-100 to-rose-200 bg-clip-text text-transparent">
              {t("auth.heroSide.signupAccent")}
            </span>
          </h1>
          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-slate-100/90 [text-shadow:0_1px_16px_rgba(7,13,26,0.65)] lg:text-lg">
            {t("auth.heroSide.signupDesc")}
          </p>
        </div>

        {/* Mobile photo frame */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:hidden">
          <Image
            src="/landing-founder-hippogriff.jpg"
            alt=""
            fill
            priority
            fetchPriority="high"
            unoptimized
            sizes="(max-width: 1023px) 100vw, 0px"
            className="object-cover object-[24%_38%] brightness-[1.1] contrast-[1.04] saturate-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/40 via-transparent to-transparent" />
        </div>

        {/* Form panel */}
        <div className="w-full shrink-0 lg:w-[min(100%,26rem)] xl:w-[min(100%,28rem)]">
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

            <h2 className="text-2xl font-bold tracking-tight text-white">
              {t("auth.signupTitle")}
            </h2>
            <p className="mt-1 mb-6 text-sm text-slate-400">
              {t("auth.signupSubtitle")}
            </p>

            {error ? (
              <div className="mb-4 rounded-lg border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                {error}
              </div>
            ) : null}

            <AuthFormNative
              mode="signup"
              language={language}
              allowSocialOAuth={allowSocialOAuth}
              tone="cinematic"
            />

            <p className="mt-6 text-center text-sm text-slate-400">
              {t("auth.haveAccount")}{" "}
              <Link
                href={`/login${q}`}
                className="font-medium text-amber-200 hover:text-amber-100 hover:underline"
              >
                {t("auth.signIn")}
              </Link>
            </p>
            <p className="mt-4 text-center text-xs text-slate-500">
              {t("auth.registerFooter")}{" "}
              <Link
                href="/terms"
                className="text-amber-200/90 hover:text-amber-100 hover:underline"
              >
                {t("auth.termsLink")}
              </Link>{" "}
              {t("auth.and")}{" "}
              <Link
                href="/privacy"
                className="text-amber-200/90 hover:text-amber-100 hover:underline"
              >
                {t("auth.privacyLink")}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
