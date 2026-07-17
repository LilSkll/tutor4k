import { Suspense } from "react";
import { LegalDocumentView } from "@/components/legal/legal-document-view";
import { getTermsDocument } from "@/content/legal/terms";
import type { LegalLocale } from "@/config/legal";

export const metadata = {
  title: "Terms of Service — Spanish with Pavel",
};

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const sp = await searchParams;
  const locale: LegalLocale = sp.lang === "en" ? "en" : "ru";
  const doc = getTermsDocument(locale);

  return (
    <Suspense>
      <LegalDocumentView doc={doc} />
    </Suspense>
  );
}
