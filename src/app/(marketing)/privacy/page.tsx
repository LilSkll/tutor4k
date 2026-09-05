import { Suspense } from "react";
import { LegalDocumentView } from "@/components/legal/legal-document-view";
import { getPrivacyDocument } from "@/content/legal/privacy";
import {
  legalDocumentLocale,
  resolveLegalLocale,
} from "@/config/legal";

export const metadata = {
  title: "Privacy Policy — Spanish with Pavel",
};

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const sp = await searchParams;
  const locale = resolveLegalLocale(sp.lang);
  const doc = getPrivacyDocument(legalDocumentLocale(locale));

  return (
    <Suspense>
      <LegalDocumentView doc={doc} />
    </Suspense>
  );
}
