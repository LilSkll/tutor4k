"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const MarkdownRenderer = dynamic(
  () =>
    import("@/components/shared/markdown-renderer").then(
      (m) => m.MarkdownRenderer,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-16 animate-pulse rounded-md bg-muted/40" aria-hidden />
    ),
  },
);

/**
 * Lazy Markdown wrapper — keeps react-markdown / remark-gfm out of the
 * initial route chunk until content is actually shown.
 */
export function Markdown({
  content,
  className,
  enableWordHints,
  courseId,
}: {
  content: string;
  className?: string;
  /** Tap known target-language words for a UI-language gloss. */
  enableWordHints?: boolean;
  courseId?: string;
}) {
  return (
    <div className={cn("markdown-body", className)}>
      <MarkdownRenderer
        content={content}
        enableWordHints={enableWordHints}
        courseId={courseId}
      />
    </div>
  );
}
