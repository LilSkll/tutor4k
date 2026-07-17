import Link from "next/link";
import { LEGAL_OPERATOR } from "@/config/legal";
import { cn } from "@/lib/utils";
import type { InterfaceLanguage } from "@/types";

type LegalFooterLinksProps = {
  locale?: InterfaceLanguage;
  className?: string;
  vertical?: boolean;
};

function footerLocale(locale: InterfaceLanguage): "ru" | "en" | "es" {
  if (locale === "en" || locale === "de") return "en";
  if (locale === "es") return "es";
  return "ru";
}

export function LegalFooterLinks({
  locale = "ru",
  className,
  vertical = false,
}: LegalFooterLinksProps) {
  const lang = footerLocale(locale);
  const labels =
    lang === "en"
      ? { privacy: "Privacy", terms: "Terms", contact: "Contact" }
      : lang === "es"
        ? { privacy: "Privacidad", terms: "Términos", contact: "Contacto" }
        : { privacy: "Конфиденциальность", terms: "Соглашение", contact: "Контакты" };

  const langSuffix = lang === "en" ? "?lang=en" : "";

  return (
    <nav
      className={cn(
        "flex text-sm text-muted-foreground gap-4",
        vertical ? "flex-col items-center" : "flex-wrap justify-center",
        className,
      )}
    >
      <Link href={`/privacy${langSuffix}`} className="hover:text-primary">
        {labels.privacy}
      </Link>
      <Link href={`/terms${langSuffix}`} className="hover:text-primary">
        {labels.terms}
      </Link>
      <a
        href={`mailto:${LEGAL_OPERATOR.contactEmail}`}
        className="hover:text-primary"
      >
        {labels.contact}
      </a>
    </nav>
  );
}
