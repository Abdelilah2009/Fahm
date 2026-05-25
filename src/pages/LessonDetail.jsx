import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { getLesson } from "../data/lessons";

export default function LessonDetail() {
  const { id } = useParams();
  const lesson = getLesson(id);

  if (!lesson) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-gray-500 dark:text-neutral-400">Cours introuvable.</p>
        <Link
          to="/lessons"
          className="text-sm text-gray-900 dark:text-gray-100 underline mt-2 inline-block"
        >
          Retour aux cours
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Link
        to="/lessons"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-neutral-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Retour aux cours
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{lesson.icon}</span>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              {lesson.title}
            </h1>
            <p className="text-gray-500 dark:text-neutral-400 text-sm mt-0.5">{lesson.category}</p>
          </div>
        </div>
        <p className="text-gray-500 dark:text-neutral-400 mt-2">{lesson.description}</p>
      </div>

      <div className="grid gap-4">
        {lesson.content.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {item.titre}
            </h3>
            <p className="text-sm text-gray-600 dark:text-neutral-300 leading-relaxed mb-3">
              {item.definition}
            </p>
            <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-lg p-3 mb-3">
              <p className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                Exemple : <span className="italic">{item.exemple}</span>
              </p>
            </div>
            <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3">
              <Lightbulb size={16} className="text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-800 dark:text-amber-200">{item.astuce}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
