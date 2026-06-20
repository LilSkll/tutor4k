import { Suspense } from "react";
import { TutorChat } from "@/components/tutor/tutor-chat";

export default function TutorPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Cargando…</div>}>
      <TutorChat />
    </Suspense>
  );
}
