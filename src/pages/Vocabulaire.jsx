import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { vocabulaire } from "../data/vocabulaire";

export default function Vocabulaire() {
  const [activeCategory, setActiveCategory] = useState(vocabulaire[0].id);
  const category = vocabulaire.find((v) => v.id === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Link
        to="/francais"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-neutral-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Accueil
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Vocabulaire Utile
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          Expressions et mots clés pour la production écrite et l'analyse de texte.
        </p>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {vocabulaire.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveCategory(v.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer border-0 transition-colors ${
              activeCategory === v.id
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900"
                : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
            }`}
          >
            <span>{v.icon}</span>
            {v.title}
          </button>
        ))}
      </div>

      {category && (
        <div className="grid gap-3">
          {category.mots.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-gray-200 dark:border-neutral-800"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {item.mot}
                </h3>
                <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                  {item.usage}
                </span>
              </div>
              <p className="text-sm text-amber-700 dark:text-amber-300 font-medium mb-2 dir-rtl" dir="rtl">
                {item.traduction}
              </p>
              <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-lg p-3">
                <p className="text-sm text-gray-600 dark:text-neutral-300 italic">
                  "{item.exemple}"
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
