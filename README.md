# 🇪🇸 SpanishTutor — AI Spanish Learning Platform

An intelligent, production-ready web app for learning Spanish with a personal
**AI tutor** powered by **Groq** (primary) and **Gemini** (fallback). Built
with Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui, Supabase and
Zustand.

> The tutor **never solves exercises for the learner**. It explains the rule,
> gives a hint, encourages an attempt, and only reveals the answer with a
> detailed explanation after the learner tries.

---

## ✨ Features

| Area | Description |
|---|---|
| **AI Orchestrator** | Automatic Groq→Gemini failover, retry with exponential backoff, normalized responses |
| **Domain guard** | Off-topic questions are refused — the tutor *only* answers about Spanish |
| **Socratic pedagogy** | System prompt enforces explain→hint→try→reveal flow |
| **Onboarding** | Name · CEFR level (A1–C1) · goal · interface language (RU/EN/ES) · daily goal |
| **Dashboard** | Level, lessons, streak, daily goal progress, AI recommendations |
| **AI Tutor chat** | Markdown rendering (tables, code, lists), suggestions, typing indicator |
| **Grammar reference** | Curated CEFR topics (A1→C1) with markdown + "Explain with AI" |
| **Exercises** | AI-generated: multiple choice, fill-blank, translation, error correction, sentence building |
| **Vocabulary** | Personal dictionary with translation, example, level, search |
| **Progress** | Activity chart (30d), accuracy, by-level, by-type pie, strengths & weaknesses |
| **PDF export** | One-page progress report generated server-side (no puppeteer) |
| **Streaks & goals** | Daily activity tracking, streak rewards, daily goal progress |
| **Themes** | Light / dark / system, fully responsive, mobile drawer |
| **i18n** | RU / EN / ES interface strings |

---

## 🛠 Tech Stack

- **Next.js 15** (App Router, Server Actions, Route Handlers)
- **React 19** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** style components (Radix primitives)
- **Supabase** (Auth + PostgreSQL + Row Level Security)
- **Zustand** (UI + chat state, persisted)
- **TanStack Query** (server state)
- **Recharts** (analytics)
- **Groq** + **Google Gemini** (LLM providers)
- **Sonner** (toasts), **next-themes** (theming)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY

GROQ_API_KEY=YOUR-GROQ-KEY
GROQ_MODEL=llama-3.3-70b-versatile

GEMINI_API_KEY=YOUR-GEMINI-KEY
GEMINI_MODEL=gemini-1.5-flash
```

- Get a Groq key: https://console.groq.com/keys
- Get a Gemini key: https://aistudio.google.com/apikey
- Create a Supabase project: https://supabase.com

### 3. Set up the database

Open the Supabase SQL editor and run [`supabase/schema.sql`](./supabase/schema.sql).
It creates all tables, enums, Row-Level-Security policies and a trigger that
auto-creates a profile when a new user signs up.

### 4. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000.

---

## 📁 Project Structure

```
spanish-tutor/
├── src/
│   ├── app/
│   │   ├── (app)/                 # Protected route group (auth required)
│   │   │   ├── layout.tsx         # App shell with sidebar + auth guard
│   │   │   ├── dashboard/
│   │   │   ├── tutor/
│   │   │   ├── grammar/
│   │   │   ├── exercises/
│   │   │   ├── vocabulary/
│   │   │   ├── progress/
│   │   │   └── settings/
│   │   ├── api/
│   │   │   ├── tutor/             # AI tutor chat endpoint
│   │   │   ├── exercises/         # generate + check
│   │   │   ├── vocabulary/        # CRUD
│   │   │   ├── dashboard/         # aggregated stats
│   │   │   └── export-progress/   # PDF report
│   │   ├── login/  signup/  onboarding/
│   │   ├── layout.tsx             # Root layout + providers
│   │   └── page.tsx               # Landing page
│   ├── components/
│   │   ├── ui/                    # shadcn-style primitives
│   │   ├── layout/                # Sidebar, mobile nav, app shell
│   │   ├── shared/                # Markdown, theme toggle
│   │   ├── dashboard/  tutor/  grammar/
│   │   ├── exercises/  vocabulary/  progress/  settings/
│   │   └── auth/  onboarding/  providers.tsx
│   ├── config/                    # App constants + grammar data
│   ├── lib/                       # Supabase clients, utils, i18n
│   ├── server/
│   │   ├── actions/               # Server Actions
│   │   └── ai/
│   │       ├── orchestrator.ts    # generateAIResponse()
│   │       ├── providers.ts       # Groq + Gemini adapters
│   │       └── spanish-tutor-system-prompt.ts
│   ├── stores/                    # Zustand stores
│   ├── hooks/
│   └── types/                     # Shared TypeScript types
├── supabase/schema.sql            # Database schema + RLS
└── .env.example
```

---

## 🧠 AI Architecture

### Orchestrator (`src/server/ai/orchestrator.ts`)

`generateAIResponse()` is the single entry point:

1. **Domain guard** — fast heuristic refuses obviously off-topic messages
   (cooking, sports, politics, code…) before any model call.
2. **System prompt** — `buildSystemPrompt()` injects the persona, the Socratic
   rule ("never solve for the learner"), the domain restriction and the
   learner's CEFR level.
3. **Provider chain** — Groq first, Gemini as fallback. Each provider is tried
   with up to 2 retries (exponential backoff + jitter) on transient errors
   (429, 5xx, network). Fatal errors (401, 400) fail fast.
4. **Normalized output** — every path returns a single `AIResponse` shape.

### System prompt

Lives in `src/server/ai/spanish-tutor-system-prompt.ts`. Key rules encoded:

- You are a professional Spanish teacher.
- **Never** complete the learner's homework. Follow explain → hint → try → reveal.
- Answer **only** about Spanish (grammar, vocab, phonetics, culture, DELE…).
- Adapt complexity to the learner's level.
- Use rich Markdown (tables, lists, **bold**, code).
- Always explain *why* an error is wrong.

---

## 🗄 Database

Supabase tables (see `supabase/schema.sql`):

| Table | Purpose |
|---|---|
| `profiles` | User profile (level, goal, language, streak, daily goal) |
| `learning_progress` | Per-topic progress |
| `vocabulary` | Saved words with translation, example, level |
| `exercises_history` | Every answered exercise + AI feedback |
| `chat_conversations` / `chat_messages` | Persisted chat history |
| `daily_activity` | Streak + activity chart source |

All tables are protected by **Row Level Security**: each user can only read &
write their own rows. A trigger auto-creates a `profiles` row on signup.

---

## ☁️ Deploy to Vercel

1. Push the repo to GitHub.
2. Import it in Vercel.
3. Add the same environment variables (Groq, Gemini, Supabase).
4. Deploy — Vercel auto-detects Next.js.

No additional build configuration is required.

---

## 🧪 Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

---

## 📜 License

MIT — free to use, modify and distribute.

¡Buena suerte con tu español! 🇪🇸
