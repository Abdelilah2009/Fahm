import { useState } from "react";
import { arabicMafahim } from "../data/arabicMafahim";

export default function ArabicMafahim() {
  const [activeCategory, setActiveCategory] = useState(arabicMafahim[0]?.id);
  const category = arabicMafahim.find((m) => m.id === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">المفاهيم الأساسية</h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">مصطلحات النحو والصرف والبلاغة</p>
      </div>
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {arabicMafahim.map((cat) => (
          <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer border-0 transition-colors ${activeCategory === cat.id ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900" : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700"}`}>
            <span>{cat.icon}</span>
            {cat.title}
          </button>
        ))}
      </div>
      {category && (
        <div className="grid gap-3">
          {category.terms.map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-200 dark:border-neutral-800">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{item.term}</h3>
                {item.context && <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">{item.context}</span>}
              </div>
              <p className="text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
