# Permanent Adaptive Exercise Bank

Practice items are **static** and **reusable**. AI teaches (explains mistakes, updates Learning Profile) — it does **not** generate practice.

## Structure

| Course | Curated seed | Expansion packs (~20 × 5 types / chapter) |
|--------|--------------|-------------------------------------------|
| Spanish | `src/config/chapter-exercises.ts` | `src/config/exercise-banks/data/spanish-packs.json` |
| English | `src/config/courses/english/exercises.ts` | `src/config/exercise-banks/data/english-packs.json` |

Stable ids: `{courseId}:{chapterSlug}:{type}:{nn}` via `withExerciseIds()`.

## Adaptive selection

`pickStaticExercise` → Learning Profile + `exercise_progress` (timesSeen / correct / wrong / lastSeen / mastered).

## Supabase

Run `supabase/exercise-progress-schema.sql` once (adds `exercise_progress` + history columns).

## Target depth

`TARGET_EXERCISES_PER_TYPE = 20` in `src/lib/exercise-bank.ts`.
