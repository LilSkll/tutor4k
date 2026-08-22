import type { GrammarLevel } from "@/types";

export type GrammarRulePage = {
  title: string;
  content: string;
};

const PAIR_TITLES = new Set([
  "Минимальные пары",
  "Minimal pairs",
  "Pares mínimos",
  "Minimalpaare",
]);

const LEVEL_MARKERS = [
  "На этом уровне",
  "At this level",
  "En este nivel",
  "Auf dieser Stufe",
];

function stripComments(markdown: string): string {
  return markdown.replace(/<!--[\s\S]*?-->/g, "").trim();
}

function headingOf(block: string): string {
  return (
    block
      .match(/^#{2,3}\s+(.+)$/m)?.[1]
      ?.replace(/\*\*/g, "")
      .replace(/`/g, "")
      .trim() ?? ""
  );
}

function isPairPage(block: string): boolean {
  return PAIR_TITLES.has(headingOf(block));
}

function bodyOf(block: string): string {
  return block.replace(/^#{2,3}\s+.+\n?/, "").trim();
}

function splitOnHeadings(md: string, includeH3: boolean): string[] {
  const re = includeH3 ? /(?=^#{2,3}\s)/m : /(?=^##\s)/m;
  return md
    .split(re)
    .map((p) => p.trim())
    .filter(Boolean);
}

function attachLead(block: string, lead: string): string {
  const nl = block.indexOf("\n");
  if (nl === -1) return `${block}\n\n${lead}`;
  const head = block.slice(0, nl);
  const rest = block.slice(nl + 1).replace(/^\n/, "");
  return `${head}\n\n${lead}\n\n${rest}`.trim();
}

function detachPathFromPairs(block: string): { pairs: string; path: string } {
  const split = block.split(
    /(?=^>\s*\*\*(?:Перед этой темой|Before this topic|Antes de este tema|Vor diesem Thema|Путь|Path|Recorrido|Weg):\*\*)/m,
  );
  if (split.length < 2) return { pairs: block, path: "" };
  return { pairs: split[0].trim(), path: split.slice(1).join("\n\n").trim() };
}

function toPages(
  blocks: string[],
  untitledLabel: string,
): GrammarRulePage[] {
  return blocks.map((content, index) => {
    const heading = headingOf(content);
    const title = heading || `${untitledLabel} ${index + 1}`;
    const body = bodyOf(content) || content;
    return { title, content: body };
  });
}

/**
 * Theory pages: `##` sections only. Nested `###` stay on the same page
 * so the lesson does not add extra round-trips or extra markdown renders.
 */
export function grammarTheoryPagesFromMarkdown(markdown: string): string[] {
  const md = stripComments(markdown);
  if (!md) return [];
  const parts = splitOnHeadings(md, false);
  return parts.length > 0 ? parts : [md];
}

/**
 * Clickable rule chips: every `##` and `###` with a body.
 * Empty `##` wrappers (only grouping `###`) are skipped.
 * CEFR pair tables stay last; intro note stays with the first real rule.
 */
export function grammarRulesFromMarkdown(
  markdown: string,
  untitledLabel: string,
): GrammarRulePage[] {
  const md = stripComments(markdown);
  if (!md) return [];

  const parts = splitOnHeadings(md, true);
  const preamble = parts.filter((p) => !/^#{2,3}\s/m.test(p)).join("\n\n");
  const headed = parts.filter((p) => /^#{2,3}\s/m.test(p));

  const pairBlocks: string[] = [];
  const ruleBlocks: string[] = [];
  let rescuedPath = "";

  for (const block of headed) {
    if (isPairPage(block)) {
      const { pairs, path } = detachPathFromPairs(block);
      pairBlocks.push(pairs);
      if (path) rescuedPath = path;
      continue;
    }

    if (!bodyOf(block)) continue;
    ruleBlocks.push(block);
  }

  const preambleIsLevel = LEVEL_MARKERS.some((m) => preamble.includes(m));

  if (rescuedPath && ruleBlocks[0]) {
    ruleBlocks[0] = attachLead(ruleBlocks[0], rescuedPath);
  }
  if (preamble) {
    if (preambleIsLevel && pairBlocks[0]) {
      pairBlocks[0] = attachLead(pairBlocks[0], preamble);
    } else if (ruleBlocks[0]) {
      ruleBlocks[0] = attachLead(ruleBlocks[0], preamble);
    } else if (pairBlocks[0]) {
      pairBlocks[0] = attachLead(pairBlocks[0], preamble);
    }
  }

  const pages =
    ruleBlocks.length > 0 || pairBlocks.length > 0
      ? [...ruleBlocks, ...pairBlocks]
      : parts.length > 0
        ? parts
        : [md];

  return toPages(pages, untitledLabel);
}

/** Shorter rule text in practice chips for A1–A2. */
export function simplifyRuleContentForLevel(
  content: string,
  level?: GrammarLevel | null,
): string {
  if (!level || (level !== "A1" && level !== "A2")) return content;

  const body = content.replace(
    /\|[^\n]+\|\n\|[-|: ]+\|\n(\|[^\n]+\|\n?)*/g,
    "",
  );
  const blocks = body.split(/\n\n+/).filter((p) => p.trim());
  const kept: string[] = [];

  for (const block of blocks) {
    if (kept.length >= 2) break;
    if (/^>\s/.test(block.trim())) {
      kept.push(block.trim());
      continue;
    }
    if (/^[-*]\s/m.test(block)) {
      const items = block
        .split(/\n/)
        .filter((l) => /^[-*]\s/.test(l))
        .slice(0, 4);
      if (items.length) kept.push(items.join("\n"));
      continue;
    }
    if (!/^#/.test(block)) {
      kept.push(block.trim().split("\n")[0] ?? block.trim());
    }
  }

  const out = kept.join("\n\n").trim();
  if (!out) {
    return content.slice(0, 420).trim() + (content.length > 420 ? "…" : "");
  }
  return out.length > 520 ? `${out.slice(0, 520).trim()}…` : out;
}
