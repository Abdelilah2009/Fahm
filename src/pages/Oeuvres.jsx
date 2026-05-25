import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { oeuvres } from "../data/oeuvres";

export default function Oeuvres() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Les Oeuvres
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          Les 3 oeuvres au programme du français — 1ère année Bac.
        </p>
      </div>

      <div className="grid gap-4">
        {oeuvres.map((oeuvre) => (
          <Link
            key={oeuvre.id}
            to={`/francais/oeuvres/${oeuvre.id}`}
            className="group flex items-start gap-5 p-6 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
          >
            <div className="text-4xl shrink-0">{oeuvre.image}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {oeuvre.title}
                </h2>
                <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full">
                  {oeuvre.genre}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-neutral-400 mb-2">
                {oeuvre.author} — {oeuvre.year}
              </p>
              <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
                {oeuvre.description}
              </p>
              <div className="mt-3 flex items-center text-sm font-medium text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                Voir les détails
                <ArrowRight
                  size={14}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
