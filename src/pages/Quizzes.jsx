import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { quizzes } from "../data/quizzes";

export default function Quizzes() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Les Quiz
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          Teste tes connaissances et prépare-toi pour l'examen.
        </p>
      </div>

      {/* Random Quiz Card */}
      <Link
        to="/francais/quizzes/random"
        className="group flex items-center gap-5 p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-neutral-700 no-underline hover:border-gray-400 dark:hover:border-neutral-600 transition-colors mb-6"
      >
        <span className="text-4xl">🎲</span>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
            Quiz Aléatoire
          </h2>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            15 questions mélangées de toutes les catégories.
          </p>
        </div>
        <ArrowRight
          size={18}
          className="text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 group-hover:translate-x-1 transition-all shrink-0"
        />
      </Link>

      <div className="grid sm:grid-cols-2 gap-4">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            to={`/francais/quizzes/${quiz.id}`}
            className="group p-6 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">{quiz.icon}</span>
              <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full">
                {quiz.questions.length} questions
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {quiz.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-neutral-400 mb-3">
              QCM interactif avec explications détaillées.
            </p>
            <div className="flex items-center text-sm font-medium text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              Commencer le quiz
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
