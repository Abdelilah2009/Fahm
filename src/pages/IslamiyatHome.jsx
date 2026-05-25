import { Link } from "react-router-dom";
import { islamiyatLessons } from "../data/islamiyat";
import { islamiyatQuizzes } from "../data/islamiyatQuizzes";

const totalQuestions = islamiyatQuizzes.reduce((sum, q) => sum + q.questions.length, 0);

const categories = [...new Set(islamiyatLessons.map((l) => l.category))];

const categoryEmoji = {
  "مدخل التزكية": "🌙",
  "مدخل الاقتداء": "🕋",
  "مدخل الاستجابة": "💍",
  "مدخل القسط": "⚖️",
  "مدخل الحكمة": "💡",
};

export default function IslamiyatHome() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">التربية الإسلامية</h1>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">دروس ومفاهيم واختبارات — 1ère Bac</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-neutral-800 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{islamiyatLessons.length}</p>
          <p className="text-xs text-gray-500 dark:text-neutral-400">درس</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-neutral-800 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{totalQuestions}</p>
          <p className="text-xs text-gray-500 dark:text-neutral-400">سؤال اختبار</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-neutral-800 text-center">
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{categories.length}</p>
          <p className="text-xs text-gray-500 dark:text-neutral-400">مداخل</p>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid sm:grid-cols-2 gap-3 mb-10">
        <Link to="/islamiyat/mafahim" className="p-5 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors text-center">
          <span className="text-2xl block mb-2">📖</span>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">المفاهيم الأساسية</h3>
          <p className="text-xs text-gray-400 dark:text-neutral-500 mt-1">المصطلحات الشرعية المهمة</p>
        </Link>
        <Link to="/islamiyat/quiz" className="p-5 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors text-center">
          <span className="text-2xl block mb-2">📝</span>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">الاختبارات</h3>
          <p className="text-xs text-gray-400 dark:text-neutral-500 mt-1">{totalQuestions} سؤال</p>
        </Link>
      </div>

      {/* Lessons by category */}
      {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {categoryEmoji[cat] || "📌"} {cat}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {islamiyatLessons.filter((l) => l.category === cat).map((lesson) => (
              <Link key={lesson.id} to={`/islamiyat/${lesson.id}`} className="group p-5 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{lesson.icon}</span>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{lesson.title}</h3>
                </div>
                <p className="text-xs text-gray-400 dark:text-neutral-500">{lesson.titleFr} — {lesson.content.length} محاور</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
