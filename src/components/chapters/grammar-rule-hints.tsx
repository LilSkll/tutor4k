"use client";

import * as React from "react";
import { BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Markdown } from "@/components/shared/markdown";
import {
  grammarRulesFromMarkdown,
  type GrammarRulePage,
} from "@/lib/grammar-markdown";

export type { GrammarRulePage };
export { grammarRulesFromMarkdown };

/**
 * Clickable grammar-rule chips for chapter practice.
 * Opens one precise rule — not the whole article — so students stay in the exercise.
 */
export function GrammarRuleHints({
  rules,
  label,
  lead,
  untitledLabel,
}: {
  rules: GrammarRulePage[];
  label: string;
  lead: string;
  untitledLabel: string;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const openRule = openIndex !== null ? rules[openIndex] : undefined;

  React.useEffect(() => {
    if (openIndex !== null && openIndex >= rules.length) {
      setOpenIndex(null);
    }
  }, [openIndex, rules.length]);

  if (rules.length === 0) return null;

  return (
    <div className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2.5 space-y-2 [contain:layout]">
      <div className="flex items-start gap-2">
        <BookOpen
          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
          aria-hidden
        />
        <div className="min-w-0">
          <p className="text-xs font-semibold text-primary">{label}</p>
          <p className="text-[11px] text-muted-foreground leading-snug">
            {lead}
          </p>
        </div>
      </div>
      <div className="flex max-h-[4.75rem] flex-wrap gap-1.5 overflow-y-auto [scrollbar-width:thin]">
        {rules.map((rule, index) => (
          <button
            key={`${rule.title}-${index}`}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="max-w-full rounded-full border border-primary/25 bg-background px-2.5 py-1 text-left text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10"
            aria-label={`${untitledLabel}: ${rule.title}`}
          >
            <span className="line-clamp-2">{rule.title}</span>
          </button>
        ))}
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg pr-6 text-pretty">
              {openRule?.title ?? label}
            </DialogTitle>
          </DialogHeader>
          {openRule ? <Markdown content={openRule.content} /> : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
