# RKI Architecture Lock — A1–C2

Status: **frozen for expansion**. New chapter/grammar/vocab/exercise banks beyond this spine require an explicit design change, not silent growth.

Snapshot date: 2026-11-06.

## Spine

| Band | Chapters | Grammar topics | Exercises | Vocab lemmas (approx.) |
|------|----------|----------------|-----------|-------------------------|
| A1   | 8 (ch1–8)   | 7 | 680 | 135 |
| A2   | 8 (ch9–16)  | 7 | 320 | 128 |
| B1   | 6 (ch17–22) | 6 | 240 | 96 |
| B2   | 6 (ch23–28) | 6 | 240 | 91 |
| C1   | 4 (ch29–32) | 4 | 160 | 60 |
| C2   | 4 (ch33–36) | 4 | 160 | 62 |
| **Σ** | **36** | **34** | **≈1800** | **≈572** |

Prerequisites: linear chain `chN.prereqChapter = ch(N-1).slug` through `ru-ch36-pragmatic-mastery`.

Curriculum order source of truth: `src/config/russian-curriculum-order.ts` (34 grammar slugs, A1→C2).

## Chapter → grammar → vocab

| Ch | Slug | Level | Grammar | Vocab |
|----|------|-------|---------|-------|
| 1 | ru-ch1-alphabet-greetings | A1 | ru-a1-alphabet-phonetics | ru-a1-greetings |
| 2 | ru-ch2-introduce-yourself | A1 | ru-a1-identity-eto | ru-a1-personal-info |
| 3 | ru-ch3-noun-gender | A1 | ru-a1-noun-gender | ru-a1-classroom |
| 4 | ru-ch4-present-tense | A1 | ru-a1-present-tense | ru-a1-daily-verbs |
| 5 | ru-ch5-accusative | A1 | ru-a1-accusative | ru-a1-objects |
| 6 | ru-ch6-university-day | A1 | ru-a1-present-tense* | ru-a1-university |
| 7 | ru-ch7-prepositional | A1 | ru-a1-prepositional | ru-a1-places |
| 8 | ru-ch8-numbers-time | A1 | ru-a1-numbers-time | ru-a1-time |
| 9 | ru-ch9-past-tense | A2 | ru-a2-past-tense | ru-a2-yesterday |
| 10 | ru-ch10-future | A2 | ru-a2-future | ru-a2-plans |
| 11 | ru-ch11-genitive | A2 | ru-a2-genitive | ru-a2-quantity |
| 12 | ru-ch12-dative | A2 | ru-a2-dative | ru-a2-people |
| 13 | ru-ch13-instrumental | A2 | ru-a2-instrumental | ru-a2-professions |
| 14 | ru-ch14-aspect-intro | A2 | ru-a2-aspect-intro | ru-a2-aspect-pairs |
| 15 | ru-ch15-motion-basic | A2 | ru-a2-motion-basic | ru-a2-transport |
| 16 | ru-ch16-dorm-shops | A2 | ru-a2-genitive* | ru-a2-services |
| 17 | ru-ch17-cases-review | B1 | ru-b1-cases-system | ru-b1-case-frames |
| 18 | ru-ch18-aspect-system | B1 | ru-b1-aspect-tenses | ru-b1-narrative-verbs |
| 19 | ru-ch19-motion-prefixes | B1 | ru-b1-motion-prefixes | ru-b1-directions |
| 20 | ru-ch20-complex-sentences | B1 | ru-b1-complex-sentences | ru-b1-connectors |
| 21 | ru-ch21-narration-cohesion | B1 | ru-b1-text-cohesion | ru-b1-sequence |
| 22 | ru-ch22-academic-social | B1 | ru-b1-argumentation | ru-b1-academic |
| 23 | ru-ch23-participles | B2 | ru-b2-participles | ru-b2-participle-frames |
| 24 | ru-ch24-gerunds | B2 | ru-b2-gerunds | ru-b2-gerund-frames |
| 25 | ru-ch25-passive | B2 | ru-b2-passive | ru-b2-process-lexis |
| 26 | ru-ch26-reported-speech | B2 | ru-b2-reported-speech | ru-b2-speech-verbs |
| 27 | ru-ch27-conditionals | B2 | ru-b2-conditionals | ru-b2-hypothesis |
| 28 | ru-ch28-formal-register | B2 | ru-b2-formal-register | ru-b2-official |
| 29 | ru-ch29-aspect-nuance | C1 | ru-c1-aspect-nuance | ru-c1-modal-lexis |
| 30 | ru-ch30-idioms | C1 | ru-c1-idioms | ru-c1-idiom-bank |
| 31 | ru-ch31-advanced-argumentation | C1 | ru-c1-advanced-argumentation | ru-c1-essay-markers |
| 32 | ru-ch32-media-discourse | C1 | ru-c1-media-discourse | ru-c1-media |
| 33 | ru-ch33-registers | C2 | ru-c2-registers | ru-c2-register-lexis |
| 34 | ru-ch34-literary-culture | C2 | ru-c2-literary | ru-c2-culture |
| 35 | ru-ch35-professional-academic | C2 | ru-c2-professional | ru-c2-academic-advanced |
| 36 | ru-ch36-pragmatic-mastery | C2 | ru-c2-pragmatics | ru-c2-particles |

\* Shared grammar topic with an earlier chapter in the same band (intentional recycling, not a missing slug).

## Bank shape (B2–C2 locked)

Each of chapters 23–36:

- 8 × `multiple_choice`
- 8 × `fill_blank`
- 8 × `translation`
- 8 × `error_correction`
- 8 × `sentence_building`
- **= 40 items / chapter**, **560 items / B2–C2**

Exercise sources:

- `exercises-b2.ts` → ch23–28
- `exercises-c1.ts` → ch29–32
- `exercises-c2.ts` → ch33–36
- Wired through `exercises.ts` → `getRussianExercises`

## Non-negotiable product constraints (unchanged)

- Russian = L2 of study; UI language = language of explanation.
- i18n-first for chapter cards, grammar articles (EN/ES/DE static), instructions, TR L1, glosses.
- No silent RU fallback for Russian course stories/UI copy.
- Adaptive/mastery/IDs/normalization stay course-agnostic; RKI only maps topics via `russian-error-categories`.
- Altair chapter stories exist for every `ru-ch*` × {ru,en,es,de}.

## Journey locations (Altair arc)

Москва → СПб → Казань → Н. Новгород → … → Ярославль/Псков → **Великий Новгород → Тверь → Владимир** → (C1 media/colloquium) → **Казань / Н. Новгород / Москва** (C2 close).

## Acceptance gates

- Structural: `russian-exercises.audit.test.ts`, `russian-integration.test.ts`
- Stories: `russian-chapter-stories.test.ts`
- i18n: `russian-i18n.test.ts`, `russian-tr-l1.test.ts`, `russian-ui-hints.test.ts`
- Pedagogy deep-dives: A1 / A2–B1 checklists + **B2–C2 pedagogical audit** (`B2_C2_PEDAGOGICAL_AUDIT.md`)
