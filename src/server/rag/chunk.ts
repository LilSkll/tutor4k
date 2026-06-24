import type { Level } from "@/types";
import type { PdfDocument, PdfPage } from "./extract";

// =====================================================================
// Chunking
// ---------------------------------------------------------------------
// Splits each PDF page into retrievable chunks (~500-800 chars) using a
// paragraph-first strategy with sentence fallback for huge blocks.
// Each chunk carries its source, page, and a best-effort detected
// section/level for downstream filtering.
// =====================================================================

export interface KnowledgeChunk {
  source: string;
  sourceTitle: string;
  page: number;
  section: string;
  level: Level | null;
  content: string;
  contentHash: string;
  tokenCount: number;
}

const TARGET_CHARS = 600;
const MAX_CHARS = 1400;
const OVERLAP_CHARS = 100;

/** Split a full PDF document into knowledge chunks. */
export function chunkDocument(doc: PdfDocument): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];

  for (const page of doc.pages) {
    const paragraphs = splitIntoParagraphs(page.text);
    let buffer = "";
    let currentSection = "";
    let currentLevel: Level | null = null;

    for (const para of paragraphs) {
      const { section, level, text } = detectMeta(para);
      if (section) currentSection = section;
      if (level) currentLevel = level;

      // If buffer + paragraph exceeds target, flush buffer first.
      if (buffer.length > 0 && buffer.length + para.length > TARGET_CHARS) {
        chunks.push(makeChunk(doc, page, currentSection, currentLevel, buffer));
        // Keep a small overlap for context continuity.
        buffer = takeTail(buffer, OVERLAP_CHARS) + text;
      } else {
        buffer = buffer ? `${buffer}\n\n${text}` : text;
      }

      // Hard cap: if buffer is huge, flush even mid-paragraph flow.
      if (buffer.length > MAX_CHARS) {
        const split = splitLongText(buffer, MAX_CHARS);
        for (const piece of split.pieces) {
          chunks.push(makeChunk(doc, page, currentSection, currentLevel, piece));
        }
        buffer = split.remainder;
      }
    }

    if (buffer.trim().length > 40) {
      chunks.push(makeChunk(doc, page, currentSection, currentLevel, buffer));
    }
  }

  return chunks;
}

/** Build a finalized chunk object. */
function makeChunk(
  doc: PdfDocument,
  page: PdfPage,
  section: string,
  level: Level | null,
  content: string,
): KnowledgeChunk {
  const trimmed = content.trim();
  return {
    source: doc.source,
    sourceTitle: doc.sourceTitle,
    page: page.page,
    section,
    level,
    content: trimmed,
    contentHash: hash(trimmed),
    tokenCount: estimateTokens(trimmed),
  };
}

/** Split text into paragraphs (double newline or single newline). */
function splitIntoParagraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

/**
 * Detect a section heading and/or CEFR level from a paragraph.
 * Headings: short lines, often capitalized or with numbers (e.g. "Урок 3.",
 * "Lección 5 — El subjuntivo").
 */
function detectMeta(para: string): {
  section: string | null;
  level: Level | null;
  text: string;
} {
  let section: string | null = null;
  let level: Level | null = null;
  const text = para;

  // Heading heuristic: first line short, ends without period, often has digits.
  const firstLine = para.split("\n")[0]?.trim() ?? "";
  if (
    firstLine.length > 0 &&
    firstLine.length <= 60 &&
    !/[.]$/.test(firstLine) &&
    /^(урок|lección|leccion|tema|unidad|capítulo|capitulo|parte|§|глава|\d)/i.test(
      firstLine,
    )
  ) {
    section = firstLine;
  }

  // CEFR level detection anywhere in the paragraph.
  const levelMatch = para.match(/\b(A1|A2|B1|B2|C1)\b/);
  if (levelMatch) {
    level = levelMatch[1] as Level;
  }

  return { section, level, text };
}

/** Split an overlong text into pieces under maxChars, plus a remainder. */
function splitLongText(
  text: string,
  maxChars: number,
): { pieces: string[]; remainder: string } {
  const pieces: string[] = [];
  let rest = text;
  while (rest.length > maxChars) {
    // Try to cut at a sentence boundary near the limit.
    let cut = rest.lastIndexOf(". ", maxChars);
    if (cut < maxChars * 0.5) cut = rest.lastIndexOf(" ", maxChars);
    if (cut < maxChars * 0.3) cut = maxChars;
    pieces.push(rest.slice(0, cut + 1).trim());
    rest = rest.slice(cut + 1);
  }
  return { pieces, remainder: rest.trim() };
}

/** Take the last n chars of a string, starting at a word boundary. */
function takeTail(text: string, n: number): string {
  if (text.length <= n) return text;
  const tail = text.slice(-n);
  const spaceIdx = tail.indexOf(" ");
  return spaceIdx > 0 ? tail.slice(spaceIdx + 1) : tail;
}

/** Rough token estimate: ~4 chars per token for mixed RU/ES text. */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

/** Cheap non-crypto hash for deduplication (FNV-1a, hex). */
function hash(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}
