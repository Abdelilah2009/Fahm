import { Link } from "react-router-dom";
import { ArrowLeft as ArrowIcon } from "lucide-react";
import { tarikh, joghrafia } from "../data/ijtimaaiyat";
import { ijtimaaiyatQuizzes } from "../data/ijtimaaiyatQuizzes";

const totalQuestions = ijtimaaiyatQuizzes.reduce(
  (sum, q) => sum + q.questions.length,
  0
);

export default function IjtimaaiyatHome() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          الاجتماعيات
        </h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          التاريخ والجغرافيا — 1ère Bac
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-neutral-800 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {tarikh.length}
          </p>
          <p className="text-xs text-gray-500 dark:text-neutral-400">دروس التاريخ</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-neutral-800 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {joghrafia.length}
          </p>
          <p className="text-xs text-gray-500 dark:text-neutral-400">دروس الجغرافيا</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-neutral-800 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {totalQuestions}
          </p>
          <p className="text-xs text-gray-500 dark:text-neutral-400">سؤال اختبار</p>
        </div>
      </div>

      {/* التاريخ */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          📜 التاريخ
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {tarikh.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/ijtimaaiyat/${lesson.id}`}
              className="group p-5 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{lesson.icon}</span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">
                  {lesson.title}
                </h3>
              </div>
              <p className="text-xs text-gray-400 dark:text-neutral-500">
                {lesson.titleFr}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* الجغرافيا */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          🌍 الجغرافيا
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {joghrafia.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/ijtimaaiyat/${lesson.id}`}
              className="group p-5 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{lesson.icon}</span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">
                  {lesson.title}
                </h3>
              </div>
              <p className="text-xs text-gray-400 dark:text-neutral-500">
                {lesson.titleFr}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Quiz CTA */}
      <Link
        to="/ijtimaaiyat/quiz"
        className="block p-6 rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 no-underline hover:border-gray-400 dark:hover:border-neutral-600 transition-colors text-center"
      >
        <span className="text-3xl block mb-2">📝</span>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          اختبارات الاجتماعيات
        </h2>
        <p className="text-sm text-gray-500 dark:text-neutral-400">
          {totalQuestions} سؤال في التاريخ والجغرافيا
        </p>
      </Link>
    </div>
  );
}
