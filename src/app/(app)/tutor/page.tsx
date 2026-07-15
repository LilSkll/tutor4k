"use client";

import { Suspense } from "react";
import { TutorChat } from "@/components/tutor/tutor-chat";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";

function TutorLoading() {
  const language = useUIStore((s) => s.interfaceLanguage);
  return (
    <div className="p-8 text-center text-muted-foreground">
      {translate("common.loading", language)}
    </div>
  );
}

export default function TutorPage() {
  return (
    <Suspense fallback={<TutorLoading />}>
      <TutorChat />
    </Suspense>
  );
}
