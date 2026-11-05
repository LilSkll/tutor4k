# RKI A1 — Manual Acceptance Checklist (chapters 1–8)

Use this with **RU / EN / ES / DE** UI locales. Automated tests are necessary but not sufficient.

Legend: `[ ]` pending · pass only after human review.

## Global checks (once)

- [ ] Switching UI locale does **not** reset chapter progress or error history
- [ ] Russian stems stay Cyrillic; explanations follow UI locale
- [ ] No silent Russian meta-text for EN/ES/DE (grammar article, story, gloss, instruction)
- [ ] Missing A2 grammar articles show “translation unavailable”, not RU body
- [ ] AI Tutor answers in the selected UI locale; Russian examples stay Russian
- [ ] Altair appears in all eight chapter stories with the same journey arc

## Risk-based exercise samples (do not review all 680)

| Priority | Chapter | Sample to open | What to judge |
|---|---|---|---|
| High | 1 | MC «Пока!» + MC Ь/Ъ + MC ты/вы greetings | Register + phonetics L1 support |
| High | 2 | MC «Мы в одной ___.» | Set-phrase gloss; no need for full prep case |
| High | 3 | MC мой/моя/моё | Gender without metalanguage overload |
| Medium | 5 | Accusative animate vs inanimate MC | Grammar objective clear |
| Medium | 7 | Prefill «Я живу в ___» | Location prep; gloss vs spoiler |
| Medium | 8 | «Во сколько…?» | Numbers/time comprehension |
| Spot | any | 1× translation, 1× error_correction, 1× sentence_building | Instruction + feedback locale |

---

## Chapter 1 — Alphabet and greetings (Moscow)

- [ ] Backstory: Altair at university gates; ты/вы contrast clear
- [ ] Grammar: alphabet / soft-hard / greetings article in UI locale
- [ ] Vocab: greetings glosses + example translations
- [ ] Exercises: formal vs informal; Ь/Ъ soft/hard sign support
- [ ] Options: «Пока!» situations use A1-familiar contexts; tap-hints work
- [ ] Feedback: register explanation in UI locale
- [ ] Locales: RU/EN/ES/DE

**Human focus:** `Где уместно сказать «Пока!»?` · `Буква Ь — это…` · `Буква Ъ нужна, чтобы…`

## Chapter 2 — Introducing yourself (MSU)

- [ ] Backstory: Altair opens the group; Меня зовут / это
- [ ] Grammar: identity / это / кто / что
- [ ] Vocab: personal info + examples
- [ ] Exercises: no “я есть”; кто vs что
- [ ] Early «группе»: gloss teaches set phrase, not full case theory
- [ ] Locales: RU/EN/ES/DE

**Human focus:** `Мы в одной ___.` · `Как вас зовут?` vs `Как тебя зовут?`

## Chapter 3 — Noun gender (Saint Petersburg)

- [ ] Backstory: Altair by the window; мой/моя/моё
- [ ] Grammar: gender through classroom objects
- [ ] Vocab: classroom nouns with gender tags
- [ ] Exercises: agreement distractors plausible
- [ ] Locales: RU/EN/ES/DE

**Human focus:** one MC each for masculine / feminine / neuter

## Chapter 4 — Present tense (Saint Petersburg)

- [ ] Backstory: Altair in the library; “сейчас”
- [ ] Grammar: present endings table
- [ ] Vocab: daily verbs + example translations
- [ ] Exercises: person ↔ ending match; stems stay Russian
- [ ] Locales: RU/EN/ES/DE

**Human focus:** 2–3 fill_blank conjugations (я / он / они)

## Chapter 5 — Accusative (Kazan)

- [ ] Backstory: Altair and кого?/что?
- [ ] Grammar: animate vs inanimate masculine; -а/-у endings
- [ ] Vocab: objects / people as direct objects
- [ ] Exercises: grammar objective clear (not hidden vocab test)
- [ ] Locales: RU/EN/ES/DE

**Human focus:** `Я вижу ___` (друг → друга) · feminine книгу

## Chapter 6 — University day (Kazan)

- [ ] Backstory: full day with Altair; recycle greetings + present
- [ ] Grammar: present recycled in campus contexts
- [ ] Vocab: university / timetable
- [ ] Exercises: consolidation, not brand-new grammar dump
- [ ] Locales: RU/EN/ES/DE

**Human focus:** one schedule MC + one polite classroom phrase

## Chapter 7 — Prepositional (Nizhny Novgorod)

- [ ] Backstory: Altair maps place/topic; в / на / о
- [ ] Grammar: full prep article in UI locale
- [ ] Vocab: places
- [ ] Exercises: location vs “about” (о/об)
- [ ] Locales: RU/EN/ES/DE

**Human focus:** `Я живу в ___` · `Мы говорим об ___`

## Chapter 8 — Numbers and time (Nizhny Novgorod)

- [ ] Backstory: Altair and the timetable; во сколько?
- [ ] Grammar: numbers / clock patterns
- [ ] Vocab: time expressions + example translations
- [ ] Exercises: unambiguous clock answers
- [ ] Locales: RU/EN/ES/DE

**Human focus:** `Во сколько начинается пара?` · one `в + час(а/ов)` item

---

## Sign-off

| Role | Name | Date | Decision |
|---|---|---|---|
| Project owner | | | Accept A1 / Request changes |
| Notes | | | |

**Only after explicit Accept A1** may A2 (chapters 9–16) begin — i18n-first, Altair journey continued.
