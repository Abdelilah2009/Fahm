import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { lessons } from "../data/lessons";

export default function Lessons() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Les Cours
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          Les leçons essentielles pour l'examen régional.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/lessons/${lesson.id}`}
            className="group p-6 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">{lesson.icon}</span>
              <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full">
                {lesson.category}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {lesson.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed mb-3">
              {lesson.description}
            </p>
            <div className="flex items-center text-sm font-medium text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              Apprendre
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
