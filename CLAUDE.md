# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Fahm** is a study platform for Moroccan 1ère Bac students covering 4 subjects: French, Ijtima3iyat (History-Geography), Islamiyat (Islamic Education), and Arabic. Each subject is a self-contained RTL or LTR sub-app accessed from a bilingual landing page. There is also a cross-subject Exam Mode. The UI is clean and minimal (Shopify-inspired) — no gradients, no heavy shadows. The user communicates in Darija (Moroccan Arabic).

## Commands

- `npm run dev` — Start Vite dev server (default: localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run lint` — ESLint check
- `npm run preview` — Preview production build

## Architecture

**Stack:** React 19 + Vite 8 + Tailwind CSS v4 + React Router v7 + Lucide icons

### Multi-Subject Routing (App.jsx)

The app uses nested routes with layout wrappers. Each subject has its own Layout component (navbar + footer + `<Outlet>`), direction (`dir`), and UI language.

```
/                         → Landing (subject selector, bilingual)
/francais/*               → FrancaisLayout (LTR, French Navbar + Footer)
/ijtimaaiyat/*            → IjtimaaiyatLayout (RTL, Arabic Navbar + Footer)
/islamiyat/*              → IslamiyatLayout (RTL, Arabic Navbar + Footer)
/arabic/*                 → ArabicLayout (RTL, Arabic Navbar + Footer)
/exam                     → ExamMode (standalone, direction switches per subject)
```

**French routes** (`/francais`): Home, oeuvres/:id, lessons/:id, quizzes/:id (with random), flashcards, search, vocabulaire.

**Arabic-subject routes** (`/ijtimaaiyat`, `/islamiyat`, `/arabic`): Each has Home, :id (lesson detail), mafahim (concepts), quiz, quiz/:id. Ijtimaaiyat additionally has tawariikh (dates timeline) and uses `tarikh/:id` / `joghrafia/:id` instead of `:id`.

**Exam Mode** (`/exam`): Standalone page with 4-step flow (subject select → config → exam → results). Generates QCM + open-ended questions from all data sources via `src/data/examQuestionGenerator.js`. UI language/direction switches dynamically based on selected subject.

### Layout Components (src/components/)

Each subject has: `[Subject]Layout.jsx` (wraps routes with `dir`, navbar, footer) and `[Subject]Navbar.jsx` (sticky nav with dark mode toggle, back-to-landing link).

- **FrancaisLayout** — Uses `useDarkMode` hook, passes dark/setDark to Navbar as props.
- **Ijtimaaiyat/Islamiyat/ArabicLayout** — Set `dir="rtl"`. Their navbars each manage dark mode internally via the hook.
- **Footer** — Shared component. Always uses `dir="ltr"` so it renders correctly in RTL layouts.
- **Landing** and **ExamMode** — Standalone pages (no layout wrapper), each has its own dark mode toggle.

### Data Layer (src/data/)

All content is static JS — no backend. Each data file exports an array and getter functions (e.g. `getOeuvre(id)`). Universal content structure for lessons: `{titre, definition, exemple, astuce}`. Universal quiz question format: `{question, options[], correct (0-indexed), explication}`.

**French:**
- `oeuvres.js` — 3 works, each with `personnages[]`, `themes[]`, `citations[]`, `chapitres[]`
- `lessons.js` — 5 grammar/writing lessons
- `quizzes.js` — 6 quizzes (119 questions). Exports `generateRandomQuiz()` (15 shuffled)
- `vocabulaire.js` — 7 categories (81 expressions), each `{mot, traduction, usage, exemple}`
- `flashcards.js` — Dynamic: `generateFlashcards()` from oeuvres + lessons + vocabulaire

**Ijtimaaiyat:**
- `ijtimaaiyat.js` — `tarikh` (8 lessons) + `joghrafia` (6 lessons)
- `ijtimaaiyatQuizzes.js` — 2 quizzes (53 questions)
- `mafahim.js` — `mafahim` (33 concept terms) + `tawariikh` (39 key dates)

**Islamiyat:**
- `islamiyat.js` — 15 lessons across 6 categories (مداخل + سورة يوسف)
- `islamiyatQuizzes.js` — 1 quiz (63 questions)
- `islamiyatMafahim.js` — 5 categories (57 terms). Uses official الإطار المرجعي definitions

**Arabic:**
- `arabic.js` — 16 lessons (نحو/صرف + بلاغة + تعبير/إنشاء + نصوص)
- `arabicQuizzes.js` — 2 quizzes (72 questions)
- `arabicMafahim.js` — 4 categories (51 terms)

**Cross-subject:**
- `examQuestionGenerator.js` — Imports from all data files. Exports `generateExam(subjectId, config)` which produces QCM questions (from quiz data) and open-ended questions (from mafahim/lessons data)

### Dark Mode (src/hooks/useDarkMode.js)

Class-based dark mode via Tailwind's `@custom-variant dark` in index.css. Persisted to localStorage (`fahm-dark-mode`), falls back to `prefers-color-scheme`. Toggles `.dark` on `<html>`. Multiple components use the hook independently — they stay in sync via localStorage since only one layout renders at a time.

### Tailwind v4 Setup

No `tailwind.config.js` — configured via `@tailwindcss/vite` plugin in vite.config.js and `@theme` block in index.css. Dark mode variant: `@custom-variant dark (&:where(.dark, .dark *))`. Font: Inter with system-ui fallback.

## Styling Conventions

- Light backgrounds: `bg-white` / dark: `dark:bg-neutral-950`
- Borders: `border-gray-200` / `dark:border-neutral-800`
- Primary text: `text-gray-900` / `dark:text-gray-100`
- Secondary text: `text-gray-500` / `dark:text-neutral-400`
- Muted text/tags: `text-gray-400` / `dark:text-neutral-500`
- Cards/surfaces: `rounded-xl border` with hover on border color
- Primary buttons: `bg-gray-900 dark:bg-gray-100` (inverted in dark mode)
- All theme transitions use `transition-colors`
- Emoji characters as visual icons for lessons and oeuvres
- RTL content uses `dir="rtl"` on layout div
- Footer always uses `dir="ltr"` regardless of parent layout

## Key Patterns

- **Adding a new subject**: Create Layout + Navbar components, data files (lessons, quizzes, mafahim), page components (Home, Detail, Quizzes, QuizPlay, Mafahim), nest routes in App.jsx, add card to Landing.jsx, add to `examQuestionGenerator.js`.
- **Adding content**: Data files are the single source of truth. Listing pages `.map()` over arrays — new entries auto-appear. Exam Mode also picks up new content automatically.
- **Per-subject quiz players**: Each subject has its own QuizPlay component because UI language differs. They share identical state management logic (could be refactored into a shared hook).
- **Link prefixes**: French pages use `/francais/` prefix. Each Arabic subject uses its own prefix (`/ijtimaaiyat/`, `/islamiyat/`, `/arabic/`). Standalone pages (`/exam`) link to `/` for home.
- **Islamiyat مصطلحات**: Must match the official الإطار المرجعي definitions. The reference PDF is at `1bac/مصطلحات الأولى باك حسب الإطار المرجعي.pdf`.
