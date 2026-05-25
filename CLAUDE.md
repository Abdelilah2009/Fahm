# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Fahm** is a study platform for Moroccan 1ère Bac students. It has two fully separate sub-apps — French (LTR) and Ijtima3iyat/Social Studies (RTL Arabic) — accessed from a shared landing page. Islamiyat and Arabic are planned as future subjects. The UI is clean and minimal (Shopify-inspired) — no gradients, no heavy shadows. The user communicates in Darija (Moroccan Arabic).

## Commands

- `npm run dev` — Start Vite dev server (default: localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run lint` — ESLint check
- `npm run preview` — Preview production build

## Architecture

**Stack:** React 19 + Vite 8 + Tailwind CSS v4 + React Router v7 + Lucide icons

### Multi-Subject Routing (App.jsx)

The app uses nested routes with layout wrappers. Each subject is a self-contained sub-app with its own navbar, layout direction, and language.

```
/                         → Landing (subject selector, bilingual)
/francais/*               → FrancaisLayout (LTR, French Navbar + Footer)
/ijtimaaiyat/*            → IjtimaaiyatLayout (RTL, Arabic Navbar + Footer)
/islamiyat, /arabic       → ComingSoon placeholder
```

**French routes** (`/francais`):
- `/francais` → Home (stats, features, oeuvres showcase, exam tips, study guide, quiz CTA)
- `/francais/oeuvres` and `/francais/oeuvres/:id` → Literary works (tabbed: personnages, thèmes, citations, chapitres)
- `/francais/lessons` and `/francais/lessons/:id` → Grammar/writing lessons
- `/francais/quizzes` and `/francais/quizzes/:id` → Quiz listing and player (with optional 20s timer)
- `/francais/quizzes/random` → Random quiz (15 shuffled questions via `generateRandomQuiz()`)
- `/francais/flashcards` → Flip cards with category + oeuvre filtering
- `/francais/search` → Full-text search across French content
- `/francais/vocabulaire` → Expressions with Arabic translations

**Ijtimaaiyat routes** (`/ijtimaaiyat`):
- `/ijtimaaiyat` → Home (tarikh + joghrafia lesson grids, stats, quick links)
- `/ijtimaaiyat/tarikh/:id` and `/ijtimaaiyat/joghrafia/:id` → Lesson detail
- `/ijtimaaiyat/mafahim` → Key concepts (مفاهيم) with category tabs
- `/ijtimaaiyat/tawariikh` → Important dates timeline
- `/ijtimaaiyat/quiz` and `/ijtimaaiyat/quiz/:id` → Arabic quiz listing and player

### Layout Components

- **FrancaisLayout** — Wraps French routes. Uses `useDarkMode` hook, renders `Navbar` (receives dark/setDark as props) + `<Outlet>` + `Footer`.
- **IjtimaaiyatLayout** — Wraps Arabic routes with `dir="rtl"`. Renders `IjtimaaiyatNavbar` (manages its own dark mode via hook) + `<Outlet>` + `Footer`.
- **Footer** — Shared component with `dir="ltr"` (so it renders correctly in both LTR and RTL layouts).
- **Landing** — Standalone page (no layout wrapper), has its own dark mode toggle.

### Data Layer (src/data/)

All content is static JS — no backend. Each data file exports an array and getter functions.

- **oeuvres.js** — 3 works (La Boîte à Merveilles, Le Dernier Jour d'un Condamné, Antigone). Each has `personnages[]`, `themes[]`, `citations[]`, `chapitres[]`.
- **lessons.js** — 6 French lessons. Each has `content[]` with `{titre, definition, exemple, astuce}`.
- **quizzes.js** — 6 French quizzes with `questions[]` of `{question, options[], correct (0-indexed), explication}`. Also exports `generateRandomQuiz()`.
- **vocabulaire.js** — 6 categories. Each entry: `{mot, traduction, usage, exemple}`.
- **ijtimaaiyat.js** — `tarikh` (8 history lessons) + `joghrafia` (6 geography lessons). Arabic content with same `{titre, definition, exemple, astuce}` structure.
- **ijtimaaiyatQuizzes.js** — 2 Arabic quizzes (tarikh + joghrafia). Separate from French quizzes.
- **mafahim.js** — `mafahim` (key concepts by category) + `tawariikh` (important dates by category). Arabic content.
- **flashcards.js** — Dynamic: `generateFlashcards()` builds cards from oeuvres + lessons + vocabulaire. `getFlashcardOeuvres()` returns oeuvre names for filtering.

### Dark Mode (src/hooks/useDarkMode.js)

Class-based dark mode using Tailwind's `@custom-variant dark` in index.css. Persisted to localStorage (`fahm-dark-mode`), falls back to `prefers-color-scheme`. Toggles `.dark` on `<html>`. The hook is used independently by FrancaisLayout and IjtimaaiyatNavbar — they stay in sync via localStorage since only one layout renders at a time.

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
- Emoji characters as visual icons for oeuvres and lessons
- RTL content uses `dir="rtl"` on layout div + `text-right` on text elements
- Footer always uses `dir="ltr"` regardless of parent layout

## Key Patterns

- **Adding a new subject**: Create a new Layout component (like IjtimaaiyatLayout), data files, page components, and nest routes under a new path in App.jsx. Add a card to Landing.jsx.
- **Adding content**: Data files are the single source of truth. Listing pages use `.map()` over the arrays — new entries appear automatically.
- **French quiz vs Ijtimaaiyat quiz**: Separate data files (`quizzes.js` vs `ijtimaaiyatQuizzes.js`) and separate player components (QuizPlay.jsx vs IjtimaaiyatQuizPlay.jsx) because the UI language differs.
- **Links within French pages** must use `/francais/` prefix. Links within Ijtimaaiyat pages use `/ijtimaaiyat/` prefix.
