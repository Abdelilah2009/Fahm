import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ComingSoon({ subject, emoji }) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-6xl block mb-6">{emoji}</span>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {subject}
        </h1>
        <p className="text-gray-500 dark:text-neutral-400 mb-8">
          قريباً — Bientôt disponible
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 px-6 py-3 rounded-lg text-sm font-medium no-underline hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <ArrowRight size={16} className="rotate-180" />
          Retour
        </Link>
      </div>
    </div>
  );
}
