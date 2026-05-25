# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Fahm** is a French study platform for Moroccan 1ère Bac students preparing for their regional exam. It covers literary works (oeuvres), grammar/writing lessons, and interactive quizzes. The UI is intentionally clean and minimal (Shopify-inspired) — no gradients, no heavy shadows. The user communicates in Darija (Moroccan Arabic).

## Commands

- `npm run dev` — Start Vite dev server (default: localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run lint` — ESLint check
- `npm run preview` — Preview production build

## Architecture

**Stack:** React 19 + Vite + Tailwind CSS v4 + React Router v7 + Lucide icons

### Routing (App.jsx)

All routes are flat in App.jsx with a shared Navbar. Dark mode state lives in App and is passed to Navbar as props.

- `/` → Home (landing with 6 feature cards)
- `/oeuvres` and `/oeuvres/:id` → Literary works listing and detail (tabbed: personnages, thèmes, citations, chapitres)
- `/lessons` and `/lessons/:id` → Lessons listing and detail
- `/quizzes` and `/quizzes/:id` → Quiz listing and interactive quiz player (with optional timer mode)
- `/quizzes/random` → Random quiz (15 questions shuffled from all categories, generated dynamically via `generateRandomQuiz()`)
- `/flashcards` → Flip cards for citations, personnages, figures de style, thèmes (generated from oeuvres + lessons data via `src/data/flashcards.js`)
- `/search` → Global search across all data (builds a flat index from oeuvres, lessons, quizzes, vocabulaire)
- `/vocabulaire` → Useful expressions for production écrite with Arabic translations

### Data Layer (src/data/)

All content is static JS — no backend. Each data file exports an array and a getter function (e.g. `getOeuvre(id)`).

- **oeuvres.js** — 3 works: La Boîte à Merveilles, Le Dernier Jour d'un Condamné, Antigone. Each has `personnages[]`, `themes[]`, `citations[]`, `chapitres[]`.
- **lessons.js** — 4 lessons (figures de style, conjugaison, production écrite, types de texte). Each has `content[]` with `{titre, definition, exemple, astuce}`.
- **quizzes.js** — 4 quizzes with `questions[]` containing `{question, options[], correct (index), explication}`. Also exports `generateRandomQuiz()` which shuffles 15 questions from all quizzes. The `getQuiz("random")` call triggers generation.
- **vocabulaire.js** — 5 categories of useful French expressions (connecteurs, opinion, introduction, conclusion, sentiments). Each entry has `{mot, traduction (Arabic), usage, exemple}`.
- **flashcards.js** — Not static data; `generateFlashcards()` builds cards dynamically from oeuvres (citations, personnages, themes) and lessons (figures de style).

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
