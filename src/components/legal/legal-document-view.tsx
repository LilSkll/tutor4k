"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LEGAL_OPERATOR } from "@/config/legal";
import type { LegalDocument } from "@/content/legal/types";
import { cn } from "@/lib/utils";

export function LegalDocumentView({
  doc,
  backHref = "/",
}: {
  doc: LegalDocument;
  backHref?: string;
}) {
  const pathname = usePathname();
  const otherLang = doc.locale === "ru" ? "en" : "ru";
  const switchLabel =
    doc.locale === "ru" ? "English version" : "Русская версия";

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href={backHref}>
              <ArrowLeft className="h-4 w-4" />
              {doc.locale === "ru" ? "Назад" : "Back"}
            </Link>
          </Button>
          <Link
            href={`${pathname}?lang=${otherLang}`}
            className="text-sm text-primary hover:underline"
          >
            {switchLabel}
          </Link>
        </div>
      </header>

      <article className="container max-w-3xl py-10 md:py-14">
        <p className="text-sm text-muted-foreground mb-2">{doc.subtitle}</p>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{doc.title}</h1>
        <p className="text-sm text-muted-foreground mb-10">
          {doc.locale === "ru" ? "Обновлено:" : "Last updated:"} {doc.updated}
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
            {doc.locale === "ru"
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
            <Link href="/privacy" className="hover:text-primary">
              {doc.locale === "ru" ? "Конфиденциальность" : "Privacy"}
            </Link>
            <Link href="/terms" className="hover:text-primary">
              {doc.locale === "ru" ? "Соглашение" : "Terms"}
            </Link>
          </nav>
        </footer>
      </article>
    </div>
  );
}
