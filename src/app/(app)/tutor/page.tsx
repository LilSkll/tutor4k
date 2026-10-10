"use client";

import { Suspense } from "react";
import { TutorChat } from "@/components/tutor/tutor-chat";

function TutorLoading() {
  return (
    <div className="flex h-full min-h-[20rem] flex-col gap-4 p-4 md:p-6" aria-busy="true">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-muted/70 animate-pulse" />
        <div className="space-y-2 flex-1">
          <div className="h-4 w-40 rounded bg-muted/70 animate-pulse" />
          <div className="h-3 w-56 max-w-full rounded bg-muted/50 animate-pulse" />
        </div>
      </div>
      <div className="flex-1 space-y-3 rounded-2xl border border-border/60 bg-muted/20 p-4">
        <div className="ml-auto h-16 w-[70%] rounded-2xl bg-muted/60 animate-pulse" />
        <div className="h-20 w-[80%] rounded-2xl bg-muted/50 animate-pulse" />
        <div className="ml-auto h-12 w-[55%] rounded-2xl bg-muted/60 animate-pulse" />
      </div>
      <div className="h-12 w-full rounded-xl bg-muted/60 animate-pulse" />
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
