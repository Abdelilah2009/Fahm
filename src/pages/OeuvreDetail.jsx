import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, Lightbulb, Quote, List } from "lucide-react";
import { getOeuvre } from "../data/oeuvres";
import { useState } from "react";

const tabs = [
  { id: "personnages", label: "Personnages", icon: User },
  { id: "themes", label: "Thèmes", icon: Lightbulb },
  { id: "citations", label: "Citations", icon: Quote },
  { id: "chapitres", label: "Chapitres", icon: List },
];

export default function OeuvreDetail() {
  const { id } = useParams();
  const oeuvre = getOeuvre(id);
  const [activeTab, setActiveTab] = useState("personnages");

  if (!oeuvre) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-gray-500 dark:text-neutral-400">Oeuvre introuvable.</p>
        <Link
          to="/oeuvres"
          className="text-sm text-gray-900 dark:text-gray-100 underline mt-2 inline-block"
        >
          Retour aux oeuvres
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Link
        to="/oeuvres"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-neutral-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Retour aux oeuvres
      </Link>

      <div className="flex items-start gap-4 mb-2">
        <span className="text-5xl">{oeuvre.image}</span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {oeuvre.title}
          </h1>
          <p className="text-gray-500 dark:text-neutral-400 mt-1">
            {oeuvre.author} — {oeuvre.year} — {oeuvre.genre}
          </p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-neutral-300 leading-relaxed mt-4 mb-8 max-w-2xl">
        {oeuvre.description}
      </p>

      <div className="flex gap-1 border-b border-gray-200 dark:border-neutral-800 mb-6 overflow-x-auto">
        {tabs.map(({ id: tabId, label, icon: Icon }) => (
          <button
            key={tabId}
            onClick={() => setActiveTab(tabId)}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer bg-transparent ${
              activeTab === tabId
                ? "border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100"
                : "border-transparent text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300"
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      <div className="min-h-[300px]">
        {activeTab === "personnages" && (
          <div className="grid gap-3">
            {oeuvre.personnages.map((p) => (
              <div
                key={p.nom}
                className="p-5 rounded-xl border border-gray-200 dark:border-neutral-800"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    {p.nom}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full">
                    {p.role}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "themes" && (
          <div className="grid gap-3">
            {oeuvre.themes.map((t) => (
              <div
                key={t.titre}
                className="p-5 rounded-xl border border-gray-200 dark:border-neutral-800"
              >
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {t.titre}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                  {t.explication}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "citations" && (
          <div className="grid gap-3">
            {oeuvre.citations.map((c, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-gray-200 dark:border-neutral-800"
              >
                <blockquote className="text-base text-gray-900 dark:text-gray-100 font-medium mb-2 italic">
                  "{c.texte}"
                </blockquote>
                <p className="text-sm text-gray-500 dark:text-neutral-400">{c.contexte}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "chapitres" && (
          <div className="grid gap-2">
            {oeuvre.chapitres.map((ch, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-neutral-800"
              >
                <span className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-xs font-semibold text-gray-500 dark:text-neutral-400 shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 dark:text-neutral-300 leading-relaxed">{ch}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
