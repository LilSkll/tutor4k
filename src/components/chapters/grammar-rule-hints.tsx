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

export type GrammarRulePage = {
  title: string;
  content: string;
};

/** Split a grammar article into clickable rule pages (`##` headings). */
export function grammarRulesFromMarkdown(
  markdown: string,
  untitledLabel: string,
): GrammarRulePage[] {
  const md = markdown.trim();
  if (!md) return [];
  const parts = md
    .split(/(?=^##\s)/m)
    .map((p) => p.trim())
    .filter(Boolean);
  const pages = parts.length > 0 ? parts : [md];
  return pages.map((content, index) => {
    const heading = content.match(/^##\s+(.+)$/m)?.[1] ?? "";
    const title =
      heading
        .replace(/\*\*/g, "")
        .replace(/`/g, "")
        .trim() || `${untitledLabel} ${index + 1}`;
    const body = content.replace(/^##\s+.+\n?/, "").trim() || content;
    return { title, content: body };
  });
}

/**
 * Clickable grammar-rule chips for chapter practice.
 * Opens the same theory section in a dialog so students do not go back.
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

  if (rules.length === 0) return null;

  return (
    <div className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2.5 space-y-2">
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
      <div className="flex flex-wrap gap-1.5">
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
            <DialogTitle className="text-lg pr-6">
              {openRule?.title ?? label}
            </DialogTitle>
          </DialogHeader>
          {openRule ? <Markdown content={openRule.content} /> : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
