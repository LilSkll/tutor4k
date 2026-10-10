/**
 * Legal / operator identity — single source of truth for Privacy, Terms, footers.
 * Override via env for production (Vercel).
 */
export const LEGAL_OPERATOR = {
  /** Service brand */
  serviceName: "Spanish with Pavel",
  /** Operator (data controller) — individual entrepreneur / sole operator */
  operatorNameRu: process.env.NEXT_PUBLIC_OPERATOR_NAME ?? "Павел Драгунов",
  operatorNameEn: process.env.NEXT_PUBLIC_OPERATOR_NAME_EN ?? "Pavel Dragunov",
  contactEmail:
    process.env.NEXT_PUBLIC_OPERATOR_EMAIL ?? "SpanishWithPavel@yandex.ru",
  website: process.env.NEXT_PUBLIC_SITE_URL ?? "https://spanishwithpavel.com",
  /** Jurisdiction for Russian users */
  countryRu: "Российская Федерация",
  countryEn: "Russian Federation",
  /** Policy version — bump when material changes */
  policyVersion: "2026-07-17",
} as const;

export const COOKIE_CONSENT_KEY = "swp-cookie-consent-v1";

export type LegalLocale = "ru" | "en" | "es" | "de";

/** Resolve UI / query language to a legal document locale. */
export function resolveLegalLocale(lang: string | null | undefined): LegalLocale {
  if (lang === "en" || lang === "es" || lang === "de") return lang;
  return "ru";
}

/** @deprecated Use resolveLegalLocale — kept for call-site clarity. */
export function legalDocumentLocale(locale: LegalLocale): LegalLocale {
  return locale;
}
