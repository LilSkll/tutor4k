"use client";

import * as React from "react";
import Image from "next/image";
import { getVocabTopicAltairSrc } from "@/lib/vocab-altair";
import { cn } from "@/lib/utils";

/**
 * Decorative Altair illustration for vocabulary topic cards / dialogs.
 * Emoji `topic.icon` is not used as the primary visual.
 */
export function VocabTopicAltairImage({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const [failed, setFailed] = React.useState(false);
  const src = getVocabTopicAltairSrc(slug);

  if (failed) return null;

  return (
    <div
      className={cn(
        "shrink-0 flex items-center justify-center",
        "h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14",
        className,
      )}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        width={56}
        height={56}
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
        sizes="56px"
      />
    </div>
  );
}
