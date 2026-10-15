-- =====================================================================
-- One-shot: purge shared tutor_cache rows that may contain personalization
-- ---------------------------------------------------------------------
-- Context: before Oct 2026, FAQ answers could be generated WITH the learner
-- name / progress block and then stored in the shared cross-user cache.
-- New app logic (src/server/actions/ai.ts) strips personalization before
-- writing, but it does NOT rewrite historical rows.
--
-- Safe to re-run. Does not touch chat / profiles / progress.
-- Prefer service-role or SQL Editor (authenticated clients cannot DELETE
-- after lock-client-progress-writes.sql).
-- =====================================================================

-- 1) Preview suspicious answers (name / progress references)
SELECT id,
       created_at,
       hit_count,
       left(normalized_query, 80) AS q,
       left(response, 120) AS r
FROM public.tutor_cache
WHERE response ~* '(твой прогресс|твоей главе|ты уже|у тебя сейчас|твой уровень|your progress|your chapter|you already|based on your|привет,\s*[А-ЯЁA-Z]|hola,\s*[A-ZА-ЯЁ]|learner profile|профиль ученика)'
ORDER BY created_at;

-- 2) Delete those rows
DELETE FROM public.tutor_cache
WHERE response ~* '(твой прогресс|твоей главе|ты уже|у тебя сейчас|твой уровень|your progress|your chapter|you already|based on your|привет,\s*[А-ЯЁA-Z]|hola,\s*[A-ZА-ЯЁ]|learner profile|профиль ученика)';

-- 3) Optional hard reset (use when most rows pre-date depersonalization
--    and hit_count is ~1 — cheap to refill from LLM):
-- TRUNCATE public.tutor_cache;
