import { Suspense } from "react";
import { LegalDocumentView } from "@/components/legal/legal-document-view";
import { getPrivacyDocument } from "@/content/legal/privacy";
import type { LegalLocale } from "@/config/legal";

export const metadata = {
  title: "Privacy Policy — Spanish with Pavel",
};

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const sp = await searchParams;
  const locale: LegalLocale = sp.lang === "en" ? "en" : "ru";
  const doc = getPrivacyDocument(locale);

  return (
    <Suspense>
      <LegalDocumentView doc={doc} />
    </Suspense>
  );
}
