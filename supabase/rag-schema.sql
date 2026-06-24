-- =====================================================================
-- AI Spanish Tutor — RAG knowledge base schema
-- Run AFTER schema.sql. Requires the pgvector + pg_trgm extensions.
--
-- This adds a shared knowledge base of textbook chunks used by the AI
-- tutor to ground its answers in the course material (Дышлевая,
-- Гонсалес-Алимова, etc.). Chunks are written once via the ingest script
-- (service-role key) and read by all authenticated users at query time.
-- =====================================================================

-- ---------- Extensions ---------------------------------------------

-- pgvector must be enabled in the dashboard first:
--   Database → Extensions → search "vector" → enable.
CREATE EXTENSION IF NOT EXISTS vector;

-- pg_trgm ships with Supabase by default; used for trigram fallback search.
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- ---------- knowledge_chunks table ---------------------------------

DO $$ BEGIN
  CREATE TABLE public.knowledge_chunks (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    source      text        NOT NULL,         -- textbook id, e.g. 'dyshlevaya_beginner'
    source_title text       NOT NULL DEFAULT '', -- human label, e.g. 'Дышлевая (начинающие)'
    page        integer,                      -- PDF page number (1-based)
    section     text,                         -- detected heading / topic
    level       user_level,                   -- CEFR level if detected (NULL otherwise)
    content     text        NOT NULL,         -- the chunk text fed to the LLM
    content_hash text       NOT NULL,         -- sha1(content) for idempotent ingest
    embedding   vector(384),                  -- multilingual-e5-small (384-dim); NULL until embedded
    token_count integer,
    created_at  timestamptz NOT NULL DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- Generated full-text-search column (configuration 'simple' works for
-- both Spanish and Russian terms — it does not stem, only tokenizes).
ALTER TABLE public.knowledge_chunks
  ADD COLUMN IF NOT EXISTS fts tsvector
  GENERATED ALWAYS AS (to_tsvector('simple', content)) STORED;

-- ---------- Indexes ------------------------------------------------

-- GIN index for fast full-text search (primary retrieval path in prod).
CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_fts
  ON public.knowledge_chunks USING GIN (fts);

-- HNSW index for cosine similarity (future vector mode).
CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_embedding
  ON public.knowledge_chunks
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

-- B-tree indexes for filtering / dedup.
CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_source ON public.knowledge_chunks(source);
CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_source_page ON public.knowledge_chunks(source, page);
CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_content_hash ON public.knowledge_chunks(content_hash);
CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_level ON public.knowledge_chunks(level);

-- Trigram index for fuzzy fallback when FTS yields nothing.
CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_content_trgm
  ON public.knowledge_chunks USING GIN (content gin_trgm_ops);

-- ---------- Row-Level Security ------------------------------------
-- Shared knowledge base: readable by ALL authenticated users; writable
-- only via the service_role key (bypasses RLS) used by the ingest script.

ALTER TABLE public.knowledge_chunks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "knowledge_chunks_select_auth" ON public.knowledge_chunks;
CREATE POLICY "knowledge_chunks_select_auth" ON public.knowledge_chunks
  FOR SELECT TO authenticated USING (true);
-- NOTE: intentionally NO insert/update/delete policies for anon/authenticated,
-- so writes are restricted to the service_role key.

-- ---------- Search functions --------------------------------------

-- Full-text search (primary). Returns the top-N chunks ranked by ts_rank,
-- optionally filtered by CEFR level.
CREATE OR REPLACE FUNCTION public.match_knowledge(
  query_text    text,
  match_count   integer DEFAULT 5,
  filter_level  user_level DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  source text,
  source_title text,
  page integer,
  section text,
  level user_level,
  content text,
  rank real
)
LANGUAGE sql STABLE AS $$
  SELECT
    kc.id,
    kc.source,
    kc.source_title,
    kc.page,
    kc.section,
    kc.level,
    kc.content,
    ts_rank(kc.fts, plainto_tsquery('simple', query_text))::real AS rank
  FROM public.knowledge_chunks kc
  WHERE (filter_level IS NULL OR kc.level = filter_level)
    AND kc.fts @@ plainto_tsquery('simple', query_text)
  ORDER BY rank DESC
  LIMIT match_count;
$$;

-- Fuzzy trigram fallback (used when FTS returns nothing). Returns chunks
-- with a similarity above 0.3 to the query.
CREATE OR REPLACE FUNCTION public.match_knowledge_fuzzy(
  query_text    text,
  match_count   integer DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  source text,
  source_title text,
  page integer,
  section text,
  level user_level,
  content text,
  similarity real
)
LANGUAGE sql STABLE AS $$
  SELECT
    kc.id,
    kc.source,
    kc.source_title,
    kc.page,
    kc.section,
    kc.level,
    kc.content,
    similarity(kc.content, query_text)::real AS similarity
  FROM public.knowledge_chunks kc
  WHERE similarity(kc.content, query_text) > 0.3
  ORDER BY similarity DESC
  LIMIT match_count;
$$;

-- Vector similarity search (future mode, once query-time embeddings are
-- available — e.g. via an OpenAI key or an Edge Function running e5).
CREATE OR REPLACE FUNCTION public.match_knowledge_vector(
  query_embedding vector(384),
  match_count     integer DEFAULT 5,
  filter_level    user_level DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  source text,
  source_title text,
  page integer,
  section text,
  level user_level,
  content text,
  similarity real
)
LANGUAGE sql STABLE AS $$
  SELECT
    kc.id,
    kc.source,
    kc.source_title,
    kc.page,
    kc.section,
    kc.level,
    kc.content,
    (1 - (kc.embedding <=> query_embedding))::real AS similarity
  FROM public.knowledge_chunks kc
  WHERE (filter_level IS NULL OR kc.level = filter_level)
    AND kc.embedding IS NOT NULL
  ORDER BY kc.embedding <=> query_embedding
  LIMIT match_count;
$$;

-- ---------- Stats helper (dashboard / sanity check) ---------------

CREATE OR REPLACE FUNCTION public.knowledge_stats()
RETURNS TABLE (source text, title text, chunks bigint)
LANGUAGE sql STABLE AS $$
  SELECT source, MAX(source_title) AS title, COUNT(*) AS chunks
  FROM public.knowledge_chunks
  GROUP BY source
  ORDER BY source;
$$;
