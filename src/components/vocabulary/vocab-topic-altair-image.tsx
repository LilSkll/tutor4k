"use client";

import * as React from "react";
import Image from "next/image";
import { getVocabTopicAltairSrc } from "@/lib/vocab-altair";
import { cn } from "@/lib/utils";

/**
 * Decorative Altair sticker for vocabulary topic cards / dialogs.
 * Uses course-specific sticker packs cut from the official sheets.
 */
export function VocabTopicAltairImage({
  slug,
  courseId,
  className,
  size = "card",
}: {
  slug: string;
  courseId?: string | null;
  className?: string;
  size?: "card" | "dialog";
}) {
  const [failed, setFailed] = React.useState(false);
  const src = getVocabTopicAltairSrc(slug, courseId);

  if (failed) return null;

  return (
    <div
      className={cn(
        "shrink-0 flex items-center justify-center overflow-hidden rounded-xl bg-white/70 dark:bg-white/10",
        size === "card"
          ? "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20"
          : "h-20 w-20 md:h-24 md:w-24",
        className,
      )}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        width={96}
        height={96}
        className="h-full w-full object-contain p-1"
        onError={() => setFailed(true)}
        sizes="96px"
      />
    </div>
  );
}
