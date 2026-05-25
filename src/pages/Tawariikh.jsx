import { useState } from "react";
import { tawariikh } from "../data/mafahim";

export default function Tawariikh() {
  const [activeCategory, setActiveCategory] = useState(tawariikh[0]?.id);
  const category = tawariikh.find((t) => t.id === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          التواريخ المهمة
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          التواريخ الأساسية التي يجب حفظها للامتحان
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tawariikh.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer border-0 transition-colors ${
              activeCategory === cat.id
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900"
                : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.title}
          </button>
        ))}
      </div>

      {/* Dates timeline */}
      {category && (
        <div className="relative">
          <div className="absolute right-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-800" />
          <div className="grid gap-3">
            {category.dates.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 mr-1"
              >
                <div className="shrink-0 w-20 text-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-100 tabular-nums">
                    {item.date}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
                    {item.event}
                  </p>
                  {item.category && (
                    <span className="text-xs text-gray-400 dark:text-neutral-500">
                      {item.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
