import { execFileSync } from "child_process";

// =====================================================================
// PDF text extraction
// ---------------------------------------------------------------------
// Uses the system `pdftotext` binary (poppler-utils) to extract text
// page-by-page. This runs only in the ingest script (local / build), NOT
// in the Vercel runtime.
// =====================================================================

export interface PdfPage {
  page: number;
  text: string;
}

export interface PdfDocument {
  source: string;
  sourceTitle: string;
  pages: PdfPage[];
}

/** Build a stable source id from a filename. */
export function sourceIdFromFile(filename: string): string {
  const base = filename.replace(/\.pdf$/i, "").toLowerCase();
  return base.replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

/**
 * Extract text from a PDF, page by page, preserving layout.
 * Returns one PdfPage per page with cleaned text.
 */
export function extractPdf(pdfPath: string, sourceTitle: string): PdfDocument {
  const source = sourceIdFromFile(pdfPath.split("/").pop() ?? pdfPath);

  // First, get the total page count.
  const pageCount = getPageCount(pdfPath);

  const pages: PdfPage[] = [];

  // Extract in batches of 50 pages to keep exec argument lists short.
  const BATCH = 50;
  for (let start = 1; start <= pageCount; start += BATCH) {
    const end = Math.min(start + BATCH - 1, pageCount);
    const raw = execFileSync(
      "pdftotext",
      ["-layout", "-f", String(start), "-l", String(end), pdfPath, "-"],
      { maxBuffer: 64 * 1024 * 1024, encoding: "utf-8" },
    );

    // pdftotext separates pages with a form-feed (\f) character.
    const parts = raw.split("\f");
    parts.forEach((chunk, idx) => {
      const pageNum = start + idx;
      if (pageNum > pageCount) return;
      const text = normalizePageText(chunk);
      if (text.trim().length > 0) {
        pages.push({ page: pageNum, text });
      }
    });
  }

  return { source, sourceTitle, pages };
}

/** Read the page count from the PDF metadata. */
function getPageCount(pdfPath: string): number {
  try {
    const out = execFileSync("pdfinfo", [pdfPath], {
      encoding: "utf-8",
      maxBuffer: 8 * 1024 * 1024,
    });
    const m = out.match(/Pages:\s+(\d+)/);
    if (m) return parseInt(m[1], 10);
  } catch {
    // pdfinfo not available — fall back.
  }
  // Fallback: extract a single page and probe.
  return 1000; // safe upper bound; extraction stops cleanly beyond EOF.
}

/**
 * Normalize a single page's text:
 *  - strip trailing form-feed
 *  - collapse runs of blank lines
 *  - rejoin hyphenated line breaks (pa-labra → palabra)
 *  - remove standalone page-number lines
 */
function normalizePageText(raw: string): string {
  let text = raw.replace(/\f/g, "").replace(/\r\n/g, "\n");

  // Rejoin words split across lines by a trailing hyphen.
  text = text.replace(/(\w)-\n(\w)/g, "$1$2");

  // Drop lines that are just a number (page numbers).
  text = text
    .split("\n")
    .filter((line) => !/^\s*\d{1,4}\s*$/.test(line))
    .join("\n");

  // Collapse 3+ blank lines into one.
  text = text.replace(/\n{3,}/g, "\n\n");

  return text.trim();
}
