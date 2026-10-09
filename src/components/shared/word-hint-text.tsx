"use client";

import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  useActiveCourseId,
  useInterfaceLanguage,
} from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import { lookupWordHint } from "@/lib/vocab-display";
import { cn } from "@/lib/utils";

type TextPart =
  | { kind: "word"; value: string }
  | { kind: "other"; value: string };

const WORD_RE = /[\p{L}\p{M}]+(?:['’-][\p{L}\p{M}]+)*/gu;

function splitHintText(text: string): TextPart[] {
  const parts: TextPart[] = [];
  let last = 0;
  for (const match of text.matchAll(WORD_RE)) {
    const start = match.index ?? 0;
    if (start > last) {
      parts.push({ kind: "other", value: text.slice(last, start) });
    }
    parts.push({ kind: "word", value: match[0] });
    last = start + match[0].length;
  }
  if (last < text.length) {
    parts.push({ kind: "other", value: text.slice(last) });
  }
  return parts;
}

/**
 * Renders text where known target-language words open a translation tip on click/tap.
 */
export function WordHintText({
  text,
  courseId: courseIdProp,
  className,
}: {
  text: string;
  courseId?: string;
  className?: string;
}) {
  const language = useInterfaceLanguage();
  const courseId = useActiveCourseId(courseIdProp);
  const t = (key: string) => translate(key, language);
  const parts = React.useMemo(() => splitHintText(text), [text]);
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  if (!text) return null;

  return (
    <span className={cn("whitespace-pre-wrap", className)}>
      {parts.map((part, i) => {
        if (part.kind !== "word") {
          return <React.Fragment key={i}>{part.value}</React.Fragment>;
        }

        const hint = lookupWordHint(part.value, language, courseId);
        if (!hint) {
          return <React.Fragment key={i}>{part.value}</React.Fragment>;
        }

        const open = openIdx === i;
        return (
          <Tooltip
            key={i}
            open={open}
            onOpenChange={(next) => setOpenIdx(next ? i : null)}
            delayDuration={0}
          >
            <TooltipTrigger asChild>
              <span
                role="button"
                tabIndex={0}
                className={cn(
                  "cursor-pointer rounded-sm underline decoration-dotted decoration-primary/45 underline-offset-[3px]",
                  "hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  open && "bg-primary/15",
                )}
                aria-label={t("wordHint.aria")}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenIdx(open ? null : i);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIdx(open ? null : i);
                  }
                }}
              >
                {part.value}
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="max-w-[240px] space-y-0.5 px-3 py-2"
              onPointerDownOutside={() => setOpenIdx(null)}
            >
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                {t("wordHint.label")}
              </p>
              <p className="text-sm font-medium leading-snug">{hint.gloss}</p>
              {hint.definition ? (
                <p className="text-xs leading-snug text-muted-foreground">
                  {hint.definition}
                </p>
              ) : null}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </span>
  );
}
