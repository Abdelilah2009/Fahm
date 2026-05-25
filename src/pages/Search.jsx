import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon, ArrowLeft, BookOpen, FileText, HelpCircle, Type } from "lucide-react";
import { oeuvres } from "../data/oeuvres";
import { lessons } from "../data/lessons";
import { quizzes } from "../data/quizzes";
import { vocabulaire } from "../data/vocabulaire";

function buildIndex() {
  const items = [];

  // Oeuvres
  oeuvres.forEach((o) => {
    items.push({
      type: "Oeuvre",
      icon: BookOpen,
      title: o.title,
      subtitle: `${o.author} — ${o.genre}`,
      text: o.description,
      link: `/oeuvres/${o.id}`,
    });
    o.personnages.forEach((p) => {
      items.push({
        type: "Personnage",
        icon: BookOpen,
        title: p.nom,
        subtitle: `${p.role} — ${o.title}`,
        text: p.description,
        link: `/oeuvres/${o.id}`,
      });
    });
    o.themes.forEach((t) => {
      items.push({
        type: "Thème",
        icon: BookOpen,
        title: t.titre,
        subtitle: o.title,
        text: t.explication,
        link: `/oeuvres/${o.id}`,
      });
    });
    o.citations.forEach((c) => {
      items.push({
        type: "Citation",
        icon: BookOpen,
        title: `"${c.texte}"`,
        subtitle: `${o.title} — ${o.author}`,
        text: c.contexte,
        link: `/oeuvres/${o.id}`,
      });
    });
  });

  // Lessons
  lessons.forEach((l) => {
    items.push({
      type: "Cours",
      icon: FileText,
      title: l.title,
      subtitle: l.category,
      text: l.description,
      link: `/lessons/${l.id}`,
    });
    l.content.forEach((c) => {
      items.push({
        type: "Cours",
        icon: FileText,
        title: c.titre,
        subtitle: l.title,
        text: `${c.definition} — ${c.exemple}`,
        link: `/lessons/${l.id}`,
      });
    });
  });

  // Quizzes
  quizzes.forEach((q) => {
    items.push({
      type: "Quiz",
      icon: HelpCircle,
      title: q.title,
      subtitle: `${q.questions.length} questions`,
      text: q.questions.map((qu) => qu.question).join(" "),
      link: `/quizzes/${q.id}`,
    });
  });

  // Vocabulaire
  vocabulaire.forEach((v) => {
    v.mots.forEach((m) => {
      items.push({
        type: "Vocabulaire",
        icon: Type,
        title: m.mot,
        subtitle: `${v.title} — ${m.usage}`,
        text: `${m.exemple} ${m.traduction}`,
        link: "/vocabulaire",
      });
    });
  });

  return items;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const index = useMemo(() => buildIndex(), []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return index
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.text.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [query, index]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-neutral-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Accueil
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Recherche
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          Cherche dans les oeuvres, cours, quiz et vocabulaire.
        </p>
      </div>

      <div className="relative mb-8">
        <SearchIcon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-neutral-500"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: métaphore, Antigone, connecteurs..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 dark:placeholder-neutral-500 focus:outline-none focus:border-gray-400 dark:focus:border-neutral-500 transition-colors"
          autoFocus
        />
      </div>

      {query.length >= 2 && (
        <p className="text-sm text-gray-400 dark:text-neutral-500 mb-4">
          {results.length} résultat{results.length !== 1 ? "s" : ""}
        </p>
      )}

      <div className="grid gap-2">
        {results.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              to={item.link}
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={16} className="text-gray-500 dark:text-neutral-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-neutral-400 truncate">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {query.length >= 2 && results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 dark:text-neutral-500">
            Aucun résultat pour "{query}"
          </p>
        </div>
      )}

      {query.length < 2 && (
        <div className="text-center py-12">
          <SearchIcon size={32} className="text-gray-200 dark:text-neutral-700 mx-auto mb-3" />
          <p className="text-sm text-gray-400 dark:text-neutral-500">
            Tape au moins 2 caractères pour rechercher.
          </p>
        </div>
      )}
    </div>
  );
}
