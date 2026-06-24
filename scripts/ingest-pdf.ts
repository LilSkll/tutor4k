// =====================================================================
// Knowledge-base ingest script
// ---------------------------------------------------------------------
// Extracts text from the Spanish textbooks (PDFs), chunks it, generates
// embeddings with the local e5 model, and writes everything to the
// `knowledge_chunks` table in Supabase via the service-role client.
//
// Usage:
//   npm run ingest                            # ingest all 4 default books
//   npm run ingest -- /path/to/book.pdf       # ingest a single PDF
//   npm run ingest -- --no-embeddings         # skip embeddings (FTS only)
//
// Requires SUPABASE_SERVICE_ROLE_KEY in .env.local.
// Requires poppler (pdftotext, pdfinfo) installed locally.
// =====================================================================

import { createSupabaseAdminClient } from "../src/lib/supabase-admin";
import { extractPdf, type PdfDocument } from "../src/server/rag/extract";
import { chunkDocument, type KnowledgeChunk } from "../src/server/rag/chunk";
import { embedChunks, embeddingsAvailable } from "../src/server/rag/embed";

interface BookSpec {
  path: string;
  title: string;
}

const DEFAULT_BOOKS: BookSpec[] = [
  {
    path: "/Users/imac/Desktop/Tutor/dyshlevaya_dlya_nachinayuschikh.pdf",
    title: "Дышлевая — для начинающих",
  },
  {
    path: "/Users/imac/Desktop/Tutor/dyshlevaya_dlya_prodolzhayuschikh.pdf",
    title: "Дышлевая — для продолжающих",
  },
  {
    path: "/Users/imac/Desktop/Tutor/gonsales_ra_alimova_rr_polnyi_kurs_ispanskogo_iazyka.pdf",
    title: "Гонсалес, Алимова — полный курс испанского",
  },
  {
    path: "/Users/imac/Desktop/Tutor/students book.pdf",
    title: "Students Book",
  },
];

async function main() {
  const args = process.argv.slice(2);
  const skipEmbeddings = args.includes("--no-embeddings");
  const explicitPaths = args.filter((a) => !a.startsWith("--"));

  const books: BookSpec[] =
    explicitPaths.length > 0
      ? explicitPaths.map((p) => ({ path: p, title: p.split("/").pop() ?? p }))
      : DEFAULT_BOOKS;

  console.log("\n🚀 SpanishTutor — Knowledge Base Ingest\n");

  const admin = createSupabaseAdminClient();
  if (!admin) {
    console.error(
      "❌ SUPABASE_SERVICE_ROLE_KEY not set. Add it to .env.local (Supabase → Settings → API → service_role).",
    );
    process.exit(1);
  }

  const useEmbeddings =
    !skipEmbeddings &&
    embeddingsAvailable() &&
    (await confirmEmbeddings());

  if (useEmbeddings) {
    console.log("📐 Embeddings: ENABLED (multilingual-e5-small, 384-dim)");
    console.log("   First run will download ~120MB model. Subsequent runs use cache.\n");
  } else {
    console.log("📐 Embeddings: SKIPPED (full-text search only)\n");
  }

  let totalChunks = 0;
  let totalInserted = 0;

  for (const book of books) {
    console.log(`📖 ${book.title}`);
    console.log(`   path: ${book.path}`);

    let doc: PdfDocument;
    try {
      doc = extractPdf(book.path, book.title);
    } catch (err) {
      console.error(`   ❌ extract failed: ${(err as Error).message}`);
      continue;
    }
    console.log(`   pages extracted: ${doc.pages.length}`);

    const chunks = chunkDocument(doc);
    console.log(`   chunks created: ${chunks.length}`);
    totalChunks += chunks.length;

    // Idempotent: skip chunks whose hash already exists.
    const hashes = chunks.map((c) => c.contentHash);
    const { data: existing } = await admin
      .from("knowledge_chunks")
      .select("content_hash")
      .eq("source", doc.source)
      .in("content_hash", hashes);

    const existingHashes = new Set(
      (existing ?? []).map((r: { content_hash: string }) => r.content_hash),
    );
    const fresh = chunks.filter((c) => !existingHashes.has(c.contentHash));
    console.log(`   new (not in DB): ${fresh.length}`);

    if (fresh.length === 0) {
      console.log(`   ✓ already ingested, skipping\n`);
      continue;
    }

    // Embeddings (optional).
    let vectors: (number[] | null)[] = fresh.map(() => null);
    if (useEmbeddings) {
      console.log(`   generating embeddings…`);
      vectors = await embedChunks(fresh);
      const withVec = vectors.filter((v) => v !== null).length;
      console.log(`   embedded: ${withVec}/${fresh.length}`);
    }

    // Insert in batches of 100.
    const INSERT_BATCH = 100;
    for (let i = 0; i < fresh.length; i += INSERT_BATCH) {
      const batch = fresh.slice(i, i + INSERT_BATCH);
      const rows = batch.map((chunk, j) => ({
        source: chunk.source,
        source_title: chunk.sourceTitle,
        page: chunk.page,
        section: chunk.section,
        level: chunk.level,
        content: chunk.content,
        content_hash: chunk.contentHash,
        token_count: chunk.tokenCount,
        embedding: vectors[i + j] ?? null,
      }));
      const { error } = await admin.from("knowledge_chunks").insert(rows);
      if (error) {
        console.error(`   ❌ insert failed at ${i}: ${error.message}`);
      } else {
        totalInserted += batch.length;
      }
    }
    console.log(`   ✓ ingested ${fresh.length} chunks\n`);
  }

  console.log("─".repeat(50));
  console.log(`✅ Done. Total chunks: ${totalChunks}, inserted: ${totalInserted}`);

  // Sanity check: count rows per source.
  const { data: stats } = await admin.rpc("knowledge_stats");
  if (stats && Array.isArray(stats)) {
    console.log("\n📊 Knowledge base by source:");
    for (const row of stats as { source: string; title: string; chunks: number }[]) {
      console.log(`   ${row.title || row.source}: ${row.chunks} chunks`);
    }
  }
  console.log("");
}

async function confirmEmbeddings(): Promise<boolean> {
  if (!embeddingsAvailable()) return false;
  // In non-interactive mode, default to enabling embeddings.
  if (!process.stdin.isTTY) return true;
  return new Promise((resolve) => {
    process.stdout.write(
      "   Use embeddings? Adds ~10min on first run. [Y/n] ",
    );
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    process.stdin.once("data", (data) => {
      process.stdin.pause();
      resolve(!/^n/i.test(data.trim()));
    });
  });
}

main().catch((err) => {
  console.error("\n💥 Ingest failed:", err);
  process.exit(1);
});
