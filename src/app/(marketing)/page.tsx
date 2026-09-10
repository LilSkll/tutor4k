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
  Sparkles,
  Trophy,
} from "lucide-react";
import { BrandIcon } from "@/components/shared/brand-icon";
import { translate } from "@/lib/i18n";
import { LegalFooterLinks } from "@/components/legal/legal-footer-links";
import { ConfirmEmailHashRedirect } from "@/components/auth/confirm-email-hash-redirect";
import { getRequestInterfaceLanguage } from "@/lib/request-language";
import type { InterfaceLanguage } from "@/types";

const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium h-11 px-4 hover:bg-accent hover:text-accent-foreground";
const btnGradient =
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium h-11 px-4 bg-primary text-primary-foreground hover:bg-primary/90";
const btnGradientLg =
  "inline-flex items-center justify-center gap-2 rounded-xl text-base font-medium h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90";
const btnOutlineLg =
  "inline-flex items-center justify-center gap-2 rounded-xl text-base font-medium h-12 px-8 border border-input bg-background hover:bg-accent";
const btnSecondaryLg =
  "inline-flex items-center justify-center gap-2 rounded-xl text-base font-medium h-12 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/80";

const FEATURE_KEYS = [
  { icon: Brain, titleKey: "feature.ai.title", descKey: "feature.ai.desc" },
  { icon: MessageSquare, titleKey: "feature.markdown.title", descKey: "feature.markdown.desc" },
  { icon: BookOpen, titleKey: "feature.grammar.title", descKey: "feature.grammar.desc" },
  { icon: GraduationCap, titleKey: "feature.exercises.title", descKey: "feature.exercises.desc" },
  { icon: Flame, titleKey: "feature.streak.title", descKey: "feature.streak.desc" },
  { icon: Languages, titleKey: "feature.vocab.title", descKey: "feature.vocab.desc" },
] as const;

const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
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
    <div className="min-h-screen bg-background">
      <ConfirmEmailHashRedirect />
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <BrandIcon size={40} priority className="h-10 w-10 shrink-0" />
            <span className="font-bold text-lg gradient-text truncate">
              Spanish with Pavel
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <nav
              className="hidden sm:flex items-center gap-1 mr-1"
              aria-label="Language"
            >
              {LANG_SWITCH.map((l) => (
                <Link
                  key={l.id}
                  href={l.id === language ? `/?lang=${l.id}` : `/?lang=${l.id}`}
                  className={`rounded-md px-2 py-1 text-xs font-semibold ${
                    l.id === language
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  hrefLang={l.id}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link href={`/login${q}`} className={btnGhost}>
              {t("landing.signIn")}
            </Link>
            <Link href={`/signup${q}`} className={btnGradient}>
              {t("landing.getStarted")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="container py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          {t("landing.badge")}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {t("landing.heroTitle1")}
          <br />
          <span className="gradient-text">{t("landing.heroTitle2")}</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          {t("landing.heroSubtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link href={`/signup${q}`} className={btnGradientLg}>
            {t("landing.createAccount")}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={`/login${q}`} className={btnOutlineLg}>
            {t("landing.haveAccount")}
          </Link>
        </div>

        <div className="relative mx-auto mt-8 mb-4 h-64 w-64 shrink-0 overflow-hidden rounded-3xl border-4 border-primary/20 md:h-72 md:w-72">
          <Image
            src="/hippogriff-hero-768.webp"
            alt={t("landing.mascotAlt")}
            fill
            priority
            fetchPriority="high"
            unoptimized
            sizes="(max-width: 768px) 256px, 288px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">
            {t("landing.levelsLabel")}
          </span>
          {LEVELS.map((lvl) => (
            <span
              key={lvl}
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            >
              {lvl}
            </span>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURE_KEYS.map((feat) => (
            <div key={feat.titleKey} className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feat.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{t(feat.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(feat.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="relative overflow-hidden rounded-xl bg-primary p-10 text-center text-primary-foreground">
          <Trophy className="absolute -right-8 -top-8 h-40 w-40 opacity-10" />
          <h2 className="text-3xl font-bold mb-3">{t("landing.ctaTitle")}</h2>
          <p className="mx-auto max-w-xl text-primary-foreground/90 mb-6">
            {t("landing.ctaSubtitle")}
          </p>
          <Link href={`/signup${q}`} className={btnSecondaryLg}>
            {t("landing.createAccount")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div className="flex items-center gap-2">
              <BrandIcon size={28} className="h-7 w-7 rounded-md" />
              <span>Spanish with Pavel © {new Date().getFullYear()}</span>
            </div>
            <p>{t("landing.footer")}</p>
          </div>
          <LegalFooterLinks locale={language} />
          <p className="text-xs">{t("landing.developer")}</p>
        </div>
      </footer>
    </div>
  );
}
