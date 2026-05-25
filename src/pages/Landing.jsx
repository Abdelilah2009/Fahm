import { Link } from "react-router-dom";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const subjects = [
  {
    id: "francais",
    title: "Français",
    titleAr: "الفرنسية",
    emoji: "🇫🇷",
    desc: "Oeuvres, grammaire, production écrite, quiz et flashcards",
    link: "/francais",
    available: true,
  },
  {
    id: "ijtimaaiyat",
    title: "الاجتماعيات",
    titleFr: "Histoire-Géo",
    emoji: "🌍",
    desc: "التاريخ والجغرافيا — دروس ملخصة واختبارات",
    link: "/ijtimaaiyat",
    available: true,
  },
  {
    id: "islamiyat",
    title: "التربية الإسلامية",
    titleFr: "Éducation islamique",
    emoji: "🕌",
    desc: "قريباً — Bientôt disponible",
    link: "/islamiyat",
    available: false,
  },
  {
    id: "arabic",
    title: "اللغة العربية",
    titleFr: "Arabe",
    emoji: "✍️",
    desc: "قريباً — Bientôt disponible",
    link: "/arabic",
    available: false,
  },
];

export default function Landing() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      {/* Dark mode toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <button
          onClick={() => setDark(!dark)}
          className="p-2.5 rounded-lg text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer bg-transparent border-0"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-screen py-16">
        {/* Branding */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              fahm
            </h1>
            <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded-md mt-2">
              1BAC
            </span>
          </div>
          <p className="text-lg text-gray-500 dark:text-neutral-400">
            اختر المادة — Choisis ta matière
          </p>
        </div>

        {/* Subject cards */}
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          {subjects.map((subject) =>
            subject.available ? (
              <Link
                key={subject.id}
                to={subject.link}
                className="group p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors text-center"
              >
                <span className="text-4xl block mb-4">{subject.emoji}</span>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {subject.title}
                </h2>
                {subject.titleAr && (
                  <p className="text-sm text-gray-400 dark:text-neutral-500 mb-2">
                    {subject.titleAr}
                  </p>
                )}
                {subject.titleFr && (
                  <p className="text-sm text-gray-400 dark:text-neutral-500 mb-2">
                    {subject.titleFr}
                  </p>
                )}
                <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed mb-4">
                  {subject.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  Entrer
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ) : (
              <div
                key={subject.id}
                className="p-6 rounded-2xl border border-gray-100 dark:border-neutral-800/50 text-center opacity-50"
              >
                <span className="text-4xl block mb-4">{subject.emoji}</span>
                <h2 className="text-xl font-semibold text-gray-400 dark:text-neutral-600 mb-1">
                  {subject.title}
                </h2>
                {subject.titleFr && (
                  <p className="text-sm text-gray-300 dark:text-neutral-700 mb-2">
                    {subject.titleFr}
                  </p>
                )}
                <p className="text-sm text-gray-400 dark:text-neutral-600">
                  {subject.desc}
                </p>
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-300 dark:text-neutral-700 mt-12">
          Fahm — 1ère Bac Maroc
        </p>
      </div>
    </div>
  );
}
