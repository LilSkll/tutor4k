// =====================================================================
// Embedding generation (LOCAL, ingest-time only)
// ---------------------------------------------------------------------
// Uses @huggingface/transformers with the multilingual-e5-small model
// (384-dim, handles Spanish + Russian). This module is imported ONLY by
// the ingest script — never from the Vercel runtime (120MB model load
// would blow cold-start budgets). The model is loaded lazily on first
// use so the dependency can be absent in production without breaking
// the build.
// =====================================================================

import type { KnowledgeChunk } from "./chunk";

const MODEL_ID = "Xenova/multilingual-e5-small";
const EMBED_DIM = 384;
const BATCH_SIZE = 16;

type EmbedFn = (texts: string[]) => Promise<number[][]>;

let pipelinePromise: Promise<EmbedFn> | null = null;

/** Lazily load the transformers pipeline (download model on first run). */
async function getEmbedder(): Promise<EmbedFn> {
  if (!pipelinePromise) {
    pipelinePromise = (async () => {
      // Dynamic import so the heavy dep isn't pulled into the Vercel bundle.
      const { pipeline } = await import("@huggingface/transformers");
      const extractor = await pipeline("feature-extraction", MODEL_ID);

      return async (texts: string[]): Promise<number[][]> => {
        // e5 requires the "passage: " prefix for indexed documents.
        const prefixed = texts.map((t) => `passage: ${t}`);
        const output = await extractor(prefixed, {
          pooling: "mean",
          normalize: true,
        });
        // output.tolist() → number[][] of shape [batch, EMBED_DIM]
        const list = output.tolist() as number[][];
        return list.map((vec) => {
          if (vec.length !== EMBED_DIM) {
            throw new Error(
              `Embedding dim mismatch: expected ${EMBED_DIM}, got ${vec.length}`,
            );
          }
          return vec;
        });
      };
    })();
  }
  return pipelinePromise;
}

/** Pre-check: is the embedding dependency available? */
export function embeddingsAvailable(): boolean {
  try {
    require.resolve("@huggingface/transformers");
    return true;
  } catch {
    return false;
  }
}

/**
 * Embed a list of chunks in batches, returning parallel embeddings.
 * On any error, returns an array of nulls (ingest proceeds without
 * vectors — the FTS path still works).
 */
export async function embedChunks(
  chunks: KnowledgeChunk[],
): Promise<(number[] | null)[]> {
  const embedder = await getEmbedder();
  const results: (number[] | null)[] = new Array(chunks.length).fill(null);

  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    try {
      const vectors = await embedder(batch.map((c) => c.content));
      vectors.forEach((vec, j) => {
        results[i + j] = vec;
      });
      if (i % (BATCH_SIZE * 4) === 0) {
        console.log(
          `  [embeddings] ${Math.min(i + BATCH_SIZE, chunks.length)}/${chunks.length}`,
        );
      }
    } catch (err) {
      console.warn(`[embeddings] batch failed at ${i}:`, (err as Error).message);
    }
  }

  return results;
}

/**
 * Embed a single query string (used if we ever enable query-time vector
 * retrieval). The e5 prefix for queries is "query: ".
 */
export async function embedQuery(text: string): Promise<number[]> {
  const embedder = await getEmbedder();
  const [vec] = await embedder([`query: ${text}`]);
  if (!vec) throw new Error("Failed to embed query");
  return vec;
}

export { EMBED_DIM };
