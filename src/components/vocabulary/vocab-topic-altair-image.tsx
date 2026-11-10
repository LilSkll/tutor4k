"use client";

import * as React from "react";
import Image from "next/image";
import { getVocabTopicAltairSrc } from "@/lib/vocab-altair";
import { cn } from "@/lib/utils";

/**
 * Decorative Altair sticker for vocabulary topic cards / dialogs.
 * Transparent-background stickers; optional `src` from grid assignment.
 */
export function VocabTopicAltairImage({
  slug,
  courseId,
  src: srcProp,
  className,
  size = "card",
}: {
  slug: string;
  courseId?: string | null;
  /** Pre-assigned path (avoids adjacent duplicates in the topic grid). */
  src?: string;
  className?: string;
  size?: "card" | "dialog";
}) {
  const [failed, setFailed] = React.useState(false);
  const src = srcProp ?? getVocabTopicAltairSrc(slug, courseId);

  React.useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) return null;

  return (
    <div
      className={cn(
        "shrink-0 flex items-center justify-center overflow-hidden",
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
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
        sizes="96px"
      />
    </div>
  );
}
