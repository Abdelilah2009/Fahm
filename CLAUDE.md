# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Fahm** is a study platform for Moroccan 1ère Bac students preparing for their regional exam. It covers French (literary works, grammar/writing lessons, quizzes) and Ijtima3iyat (History and Geography in Arabic). The UI is intentionally clean and minimal (Shopify-inspired) — no gradients, no heavy shadows. The user communicates in Darija (Moroccan Arabic).

## Commands

- `npm run dev` — Start Vite dev server (default: localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run lint` — ESLint check
- `npm run preview` — Preview production build

## Architecture

**Stack:** React 19 + Vite + Tailwind CSS v4 + React Router v7 + Lucide icons

### Routing (App.jsx)

All routes are flat in App.jsx with a shared Navbar. Dark mode state lives in App and is passed to Navbar as props.

- `/` → Home (landing with feature cards, stats, oeuvres showcase, exam tips, study guide, CTA)
- `/oeuvres` and `/oeuvres/:id` → Literary works listing and detail (tabbed: personnages, thèmes, citations, chapitres)
- `/lessons` and `/lessons/:id` → Lessons listing and detail
- `/ijtimaaiyat` and `/ijtimaaiyat/:id` → Ijtima3iyat (History + Geography) listing with tabs and detail pages. Arabic RTL content.
- `/quizzes` and `/quizzes/:id` → Quiz listing and interactive quiz player (with optional timer mode)
- `/quizzes/random` → Random quiz (15 questions shuffled from all categories, generated dynamically via `generateRandomQuiz()`)
- `/flashcards` → Flip cards with category + oeuvre filters (citations, personnages, thèmes, figures de style, conjugaison, vocabulaire)
- `/search` → Global search across all data (builds a flat index from oeuvres, lessons, quizzes, vocabulaire, ijtimaaiyat)
- `/vocabulaire` → Useful expressions for production écrite with Arabic translations

### Data Layer (src/data/)

All content is static JS — no backend. Each data file exports an array and a getter function (e.g. `getOeuvre(id)`).

- **oeuvres.js** — 3 works: La Boîte à Merveilles, Le Dernier Jour d'un Condamné, Antigone. Each has `personnages[]`, `themes[]`, `citations[]`, `chapitres[]`.
- **lessons.js** — 6 lessons (figures de style, conjugaison, production écrite, types de texte, analyse de texte). Each has `content[]` with `{titre, definition, exemple, astuce}`.
- **quizzes.js** — 8 quizzes (3 oeuvres + figures de style + conjugaison + types de texte + tarikh + joghrafia) with `questions[]` containing `{question, options[], correct (index), explication}`. Also exports `generateRandomQuiz()`.
- **vocabulaire.js** — 6 categories of useful French expressions. Each entry has `{mot, traduction (Arabic), usage, exemple}`.
- **ijtimaaiyat.js** — History (tarikh, 8 lessons) and Geography (joghrafia, 4 lessons) for 1ère Bac. Each has `content[]` with `{titre, definition, exemple, astuce}`. Arabic RTL text. Exports `getTarikhLesson()`, `getJoghrafiaLesson()`, `getIjtimaaiyatLesson()`.
- **flashcards.js** — Not static data; `generateFlashcards()` builds cards dynamically from oeuvres, lessons, and vocabulaire. Also exports `getFlashcardOeuvres()` for oeuvre-based filtering.

### Quiz Timer (QuizPlay.jsx)

Quiz has a pre-start screen where users can toggle "Mode Chrono" (20s per question). Timer state is local to QuizPlay — not persisted. When time expires, the question auto-marks as incorrect and shows the explanation.

### Dark Mode (src/hooks/useDarkMode.js)

Class-based dark mode using Tailwind's `@custom-variant dark` in index.css. Persisted to localStorage (`fahm-dark-mode`), falls back to system preference. Toggles `.dark` on `<html>`.

### Tailwind v4 Setup

No `tailwind.config.js` — configured via `@tailwindcss/vite` plugin in vite.config.js and `@theme` block in index.css. Dark mode variant defined as `@custom-variant dark (&:where(.dark, .dark *))`.

## Styling Conventions

- Light backgrounds: `bg-white` / dark: `dark:bg-neutral-950`
- Borders: `border-gray-200` / `dark:border-neutral-800`
- Primary text: `text-gray-900` / `dark:text-gray-100`
- Secondary text: `text-gray-500` / `dark:text-neutral-400`
- Muted text/tags: `text-gray-400` / `dark:text-neutral-500`
- Cards/surfaces: `rounded-xl border` with hover state on border
- Primary buttons: `bg-gray-900 dark:bg-gray-100` (inverted in dark mode)
- All theme transitions use `transition-colors`
- Emoji characters used as visual icons for oeuvres and lessons
