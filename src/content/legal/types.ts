import type { LegalLocale } from "@/config/legal";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalDocument {
  locale: LegalLocale;
  title: string;
  subtitle: string;
  updated: string;
  sections: LegalSection[];
}
