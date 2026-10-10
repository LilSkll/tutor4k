"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LEGAL_OPERATOR, type LegalLocale } from "@/config/legal";
import type { LegalDocument } from "@/content/legal/types";
import { cn } from "@/lib/utils";

const CHROME: Record<
  LegalLocale,
  {
    back: string;
    updated: string;
    privacy: string;
    terms: string;
  }
> = {
  ru: {
    back: "Назад",
    updated: "Обновлено:",
    privacy: "Конфиденциальность",
    terms: "Соглашение",
  },
  en: {
    back: "Back",
    updated: "Last updated:",
    privacy: "Privacy",
    terms: "Terms",
  },
  es: {
    back: "Volver",
    updated: "Actualizado:",
    privacy: "Privacidad",
    terms: "Términos",
  },
  de: {
    back: "Zurück",
    updated: "Aktualisiert:",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
  },
};

const LANG_LINKS: { id: LegalLocale; label: string }[] = [
  { id: "ru", label: "RU" },
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
  { id: "de", label: "DE" },
];

export function LegalDocumentView({
  doc,
  backHref = "/",
}: {
  doc: LegalDocument;
  backHref?: string;
}) {
  const pathname = usePathname();
  const locale = doc.locale;
  const chrome = CHROME[locale] ?? CHROME.en;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href={backHref}>
              <ArrowLeft className="h-4 w-4" />
              {chrome.back}
            </Link>
          </Button>
          <nav className="flex items-center gap-2 text-sm" aria-label="Language">
            {LANG_LINKS.map((l) => (
              <Link
                key={l.id}
                href={l.id === "ru" ? pathname : `${pathname}?lang=${l.id}`}
                className={cn(
                  "rounded-md px-2 py-1 font-semibold",
                  l.id === locale
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
                hrefLang={l.id}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <article className="container max-w-3xl py-10 md:py-14">
        <p className="text-sm text-muted-foreground mb-2">{doc.subtitle}</p>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{doc.title}</h1>
        <p className="text-sm text-muted-foreground mb-10">
          {chrome.updated} {doc.updated}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {section.list.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t text-sm text-muted-foreground space-y-2">
          <p className="font-medium text-foreground">
            {LEGAL_OPERATOR.serviceName}
          </p>
          <p>
            {locale === "ru"
              ? LEGAL_OPERATOR.operatorNameRu
              : LEGAL_OPERATOR.operatorNameEn}
          </p>
          <p>
            <a
              href={`mailto:${LEGAL_OPERATOR.contactEmail}`}
              className="text-primary hover:underline"
            >
              {LEGAL_OPERATOR.contactEmail}
            </a>
          </p>
          <nav className={cn("flex flex-wrap gap-4 pt-2")}>
            <Link
              href={locale === "ru" ? "/privacy" : `/privacy?lang=${locale}`}
              className="hover:text-primary"
            >
              {chrome.privacy}
            </Link>
            <Link
              href={locale === "ru" ? "/terms" : `/terms?lang=${locale}`}
              className="hover:text-primary"
            >
              {chrome.terms}
            </Link>
          </nav>
        </footer>
      </article>
    </div>
  );
}
