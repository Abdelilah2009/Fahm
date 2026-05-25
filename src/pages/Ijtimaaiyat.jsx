import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { tarikh, joghrafia } from "../data/ijtimaaiyat";

const tabs = [
  { key: "tarikh", label: "التاريخ", labelFr: "Histoire", data: tarikh },
  { key: "joghrafia", label: "الجغرافيا", labelFr: "Géographie", data: joghrafia },
];

export default function Ijtimaaiyat() {
  const [activeTab, setActiveTab] = useState("tarikh");
  const current = tabs.find((t) => t.key === activeTab);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          الاجتماعيات
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          التاريخ والجغرافيا — 1ère Bac
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer border-0 transition-colors ${
              activeTab === tab.key
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900"
                : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
            }`}
          >
            <span className="ml-1">{tab.label}</span>
            <span className="text-xs opacity-60 ml-2">({tab.labelFr})</span>
          </button>
        ))}
      </div>

      {/* Lessons grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {current.data.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/ijtimaaiyat/${lesson.id}`}
            className="group p-6 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">{lesson.icon}</span>
              <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full">
                {lesson.category}
              </span>
            </div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1 text-right leading-relaxed">
              {lesson.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-neutral-400 mb-1">
              {lesson.titleFr}
            </p>
            <p className="text-xs text-gray-400 dark:text-neutral-500 leading-relaxed mb-3 text-right">
              {lesson.description}
            </p>
            <div className="flex items-center text-sm font-medium text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              Voir le cours
              <ArrowRight
                size={14}
                className="ml-1 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
