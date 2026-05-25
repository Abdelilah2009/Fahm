import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
} from "lucide-react";
import { generateFlashcards, flashcardCategories } from "../data/flashcards";

export default function Flashcards() {
  const allCards = useMemo(() => generateFlashcards(), []);
  const [category, setCategory] = useState("Tout");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  const filtered = useMemo(() => {
    let cards =
      category === "Tout"
        ? [...allCards]
        : allCards.filter((c) => c.category === category);
    if (shuffled) {
      cards = [...cards].sort(() => Math.random() - 0.5);
    }
    return cards;
  }, [allCards, category, shuffled]);

  const card = filtered[index];
  const total = filtered.length;

  const handleNext = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % total);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + total) % total);
  };

  const handleShuffle = () => {
    setShuffled((s) => !s);
    setIndex(0);
    setFlipped(false);
  };

  const handleReset = () => {
    setIndex(0);
    setFlipped(false);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setIndex(0);
    setFlipped(false);
  };

  const colorMap = {
    blue: "border-blue-200 dark:border-blue-900",
    green: "border-emerald-200 dark:border-emerald-900",
    purple: "border-purple-200 dark:border-purple-900",
    amber: "border-amber-200 dark:border-amber-900",
  };

  const categoryColor = {
    blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40",
    green: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40",
    purple: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40",
    amber: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40",
  };

  if (!card) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 text-center">
        <p className="text-gray-500 dark:text-neutral-400">Aucune carte trouvée.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-neutral-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Accueil
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Flashcards
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          Clique sur la carte pour la retourner. {total} cartes disponibles.
        </p>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {flashcardCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer border-0 transition-colors ${
              category === cat
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900"
                : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-400 dark:text-neutral-500 font-medium">
          {index + 1} / {total}
        </span>
        <div className="flex gap-1">
          <button
            onClick={handleShuffle}
            className={`p-2 rounded-lg cursor-pointer border-0 transition-colors ${
              shuffled
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900"
                : "bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
            }`}
            title="Mélanger"
          >
            <Shuffle size={16} />
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 cursor-pointer border-0 transition-colors"
            title="Recommencer"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      <div
        onClick={() => setFlipped(!flipped)}
        className="cursor-pointer select-none"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            minHeight: "260px",
          }}
        >
          {/* Front */}
          <div
            className={`absolute inset-0 rounded-2xl border-2 ${colorMap[card.color]} bg-white dark:bg-neutral-900 p-8 flex flex-col items-center justify-center`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full mb-4 ${categoryColor[card.color]}`}
            >
              {card.category}
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 text-center whitespace-pre-line leading-relaxed">
              {card.front}
            </p>
            <p className="text-xs text-gray-400 dark:text-neutral-500 mt-6">
              Clique pour retourner
            </p>
          </div>

          {/* Back */}
          <div
            className={`absolute inset-0 rounded-2xl border-2 ${colorMap[card.color]} bg-gray-50 dark:bg-neutral-800 p-8 flex flex-col items-center justify-center`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full mb-4 ${categoryColor[card.color]}`}
            >
              Réponse
            </span>
            <p className="text-base text-gray-700 dark:text-neutral-300 text-center whitespace-pre-line leading-relaxed">
              {card.back}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-neutral-300 text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
        >
          <ChevronLeft size={16} />
          Précédent
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 text-sm font-medium cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors border-0"
        >
          Suivant
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
