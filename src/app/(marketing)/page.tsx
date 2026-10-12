import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Flame,
  GraduationCap,
  Languages,
  MessageSquare,
  Trophy,
} from "lucide-react";
import { BrandIcon } from "@/components/shared/brand-icon";
import { translate } from "@/lib/i18n";
import { LegalFooterLinks } from "@/components/legal/legal-footer-links";
import { ConfirmEmailHashRedirect } from "@/components/auth/confirm-email-hash-redirect";
import { getRequestInterfaceLanguage } from "@/lib/request-language";
import type { InterfaceLanguage } from "@/types";

const FEATURE_KEYS = [
  { icon: Brain, titleKey: "feature.ai.title", descKey: "feature.ai.desc" },
  { icon: MessageSquare, titleKey: "feature.markdown.title", descKey: "feature.markdown.desc" },
  { icon: BookOpen, titleKey: "feature.grammar.title", descKey: "feature.grammar.desc" },
  { icon: GraduationCap, titleKey: "feature.exercises.title", descKey: "feature.exercises.desc" },
  { icon: Flame, titleKey: "feature.streak.title", descKey: "feature.streak.desc" },
  { icon: Languages, titleKey: "feature.vocab.title", descKey: "feature.vocab.desc" },
] as const;

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
const LANG_SWITCH: { id: InterfaceLanguage; label: string }[] = [
  { id: "ru", label: "RU" },
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
  { id: "de", label: "DE" },
];

export default async function LandingPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const sp = await searchParams;
  const language = await getRequestInterfaceLanguage(sp.lang);
  const t = (key: string) => translate(key, language);
  const q = `?lang=${language}`;

  return (
    <div className="min-h-screen bg-[#070d1a] text-slate-100">
      <ConfirmEmailHashRedirect />

      {/* ─── Hero: cinematic full-bleed ─── */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
        {/* Desktop background photo (lg+) */}
        <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
          <Image
            src="/landing-founder-hippogriff.jpg"
            alt=""
            fill
            priority
            fetchPriority="high"
            unoptimized
            sizes="100vw"
            className="object-cover object-[16%_42%] xl:object-[18%_44%] 2xl:object-[20%_46%] brightness-[1.12] contrast-[1.04] saturate-[1.06]"
          />
          {/* Light header/footer blend only — keep the scene vivid */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(222_47%_6%/0.16)_0%,transparent_12%,transparent_88%,#070d1a_100%)]" />
          {/* Soft right assist — blends with glass copy panel, does not wash the figures */}
          <div className="absolute inset-y-0 right-0 w-[min(48%,38rem)] bg-[linear-gradient(90deg,transparent_0%,hsl(222_47%_8%/0.12)_20%,hsl(222_47%_7%/0.32)_55%,hsl(222_47%_6%/0.55)_82%,hsl(222_47%_6%/0.68)_100%)]" />
        </div>

        {/* Mobile / tablet soft backdrop (stacked layout) */}
        <div
          className="absolute inset-0 lg:hidden bg-[radial-gradient(ellipse_at_30%_0%,hsl(32_60%_28%/0.35),transparent_55%),linear-gradient(180deg,#0b1528_0%,#070d1a_100%)]"
          aria-hidden="true"
        />

        <header className="relative z-20 border-b border-white/10 bg-[#070d1a]/40 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-16 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-2">
              <BrandIcon size={40} priority className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
              <span className="hidden truncate text-base font-semibold tracking-tight text-white min-[380px]:inline sm:text-lg">
                Spanish with Pavel
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
              <nav
                className="mr-0.5 flex items-center gap-0.5 sm:mr-1 sm:gap-1"
                aria-label="Language"
              >
                {LANG_SWITCH.map((l) => (
                  <Link
                    key={l.id}
                    href={`/?lang=${l.id}`}
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
                {t("landing.signIn")}
              </Link>
              <Link
                href={`/signup${q}`}
                aria-label={t("landing.getStarted")}
                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-rose-600 px-2.5 text-sm font-medium text-white hover:bg-rose-500 sm:h-10 sm:px-4"
              >
                <span className="hidden min-[480px]:inline">
                  {t("landing.getStarted")}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-10 pt-5 sm:px-6 md:pb-12 md:pt-7 lg:max-w-none lg:justify-center lg:px-10 lg:pb-16 lg:pt-10 xl:px-14 2xl:px-20">
          {/* Mobile / tablet photo — dedicated frame, figures preserved */}
          <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 sm:mb-6 sm:aspect-[3/2] md:mb-7 lg:hidden">
            <Image
              src="/landing-founder-hippogriff.jpg"
              alt={t("landing.mascotAlt")}
              fill
              priority
              fetchPriority="high"
              unoptimized
              sizes="(max-width: 1023px) 100vw, 0px"
              className="object-cover object-[22%_36%] sm:object-[26%_40%] md:object-[30%_42%] brightness-[1.1] contrast-[1.04] saturate-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/35 via-transparent to-transparent" />
          </div>

          {/* Copy panel — frosted navy under text+CTAs; desktop right, mobile stacked */}
          <div className="relative w-full min-w-0 lg:absolute lg:right-[clamp(1.5rem,3.5vw,3.75rem)] lg:top-1/2 lg:w-[min(30rem,36vw)] lg:-translate-y-[44%] xl:w-[min(32rem,32vw)]">
            <div
              className="
                relative overflow-hidden rounded-2xl border border-white/[0.1]
                bg-[linear-gradient(160deg,hsl(222_42%_11%/0.78)_0%,hsl(222_47%_7%/0.7)_100%)]
                px-4 py-5 backdrop-blur-md
                sm:rounded-[1.35rem] sm:px-5 sm:py-6
                md:px-6 md:py-7
                lg:rounded-3xl lg:border-white/[0.05]
                lg:bg-[linear-gradient(100deg,hsl(222_42%_10%/0.12)_0%,hsl(222_47%_8%/0.42)_18%,hsl(222_47%_7%/0.62)_48%,hsl(222_47%_6%/0.74)_100%)]
                lg:px-7 lg:py-8 lg:backdrop-blur-[12px]
                lg:shadow-[0_12px_48px_rgba(7,13,26,0.22)]
                xl:px-8 xl:py-9
              "
            >
              <div className="relative">
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200 sm:mb-3 sm:text-xs sm:tracking-[0.16em]">
                  {t("landing.eyebrow")}
                </p>
                <h1 className="text-balance text-[1.7rem] font-bold leading-[1.15] tracking-tight text-white min-[360px]:text-[1.85rem] sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem]">
                  <span className="block">{t("landing.heroTitle1")}</span>
                  <span className="mt-1 block text-white">
                    {t("landing.heroTitle2")}
                  </span>
                </h1>
                <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-slate-100/95 sm:mt-5 sm:text-lg lg:text-base xl:text-lg">
                  {t("landing.heroSubtitle")}
                </p>

                <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                  <Link
                    href={`/signup${q}`}
                    className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 text-base font-semibold text-white shadow-[0_10px_28px_rgba(225,29,72,0.35)] transition-colors hover:bg-rose-500 sm:w-auto lg:w-full xl:w-auto motion-safe:transition-transform motion-safe:hover:-translate-y-0.5"
                  >
                    {t("landing.createAccount")}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                  <Link
                    href={`/login${q}`}
                    className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/35 bg-white/[0.06] px-5 text-base font-medium text-white hover:border-white/50 hover:bg-white/[0.1] sm:w-auto lg:w-full xl:w-auto"
                  >
                    {t("landing.haveAccount")}
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mt-7">
                  <span className="text-xs text-slate-300 sm:text-sm">
                    {t("landing.levelsLabel")}
                  </span>
                  {LEVELS.map((lvl) => (
                    <span
                      key={lvl}
                      className="rounded-full border border-amber-300/30 bg-amber-400/12 px-2.5 py-0.5 text-[11px] font-semibold text-amber-100/95 sm:text-xs"
                    >
                      {lvl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="relative border-t border-white/10 bg-[#0a1220]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURE_KEYS.map((feat) => (
              <div
                key={feat.titleKey}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300">
                  <feat.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mb-1 text-lg font-semibold text-white">
                  {t(feat.titleKey)}
                </h2>
                <p className="text-sm leading-relaxed text-slate-400">
                  {t(feat.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="relative border-t border-white/10 bg-[#070d1a]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-amber-400/15 bg-gradient-to-br from-rose-700 via-rose-800 to-[#1a1030] p-8 text-center sm:p-12">
            <Trophy
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 text-white/10"
              aria-hidden="true"
            />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t("landing.ctaTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-rose-50/90">
              {t("landing.ctaSubtitle")}
            </p>
            <Link
              href={`/signup${q}`}
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-rose-800 hover:bg-amber-50"
            >
              {t("landing.createAccount")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-sm sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-slate-300">
              <BrandIcon size={28} className="h-7 w-7 rounded-md" />
              <span>Spanish with Pavel © {new Date().getFullYear()}</span>
            </div>
            <p>{t("landing.footer")}</p>
          </div>
          <LegalFooterLinks locale={language} />
          <p className="text-xs text-slate-500">{t("landing.developer")}</p>
        </div>
      </footer>
    </div>
  );
}
