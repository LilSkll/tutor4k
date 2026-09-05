import { Suspense } from "react";
import { LegalDocumentView } from "@/components/legal/legal-document-view";
import { getTermsDocument } from "@/content/legal/terms";
import {
  legalDocumentLocale,
  resolveLegalLocale,
} from "@/config/legal";

export const metadata = {
  title: "Terms of Service — Spanish with Pavel",
};

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const sp = await searchParams;
  const locale = resolveLegalLocale(sp.lang);
  const doc = getTermsDocument(legalDocumentLocale(locale));

  return (
    <Suspense>
      <LegalDocumentView doc={doc} />
    </Suspense>
  );
}
