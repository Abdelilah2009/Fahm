import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  HelpCircle,
  ArrowRight,
  Layers,
  Type,
  Search,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Les Oeuvres",
    desc: "Résumés, personnages, thèmes et citations des 3 oeuvres au programme.",
    link: "/oeuvres",
    tag: "3 oeuvres",
  },
  {
    icon: FileText,
    title: "Les Cours",
    desc: "Figures de style, conjugaison, production écrite et types de texte.",
    link: "/lessons",
    tag: "4 leçons",
  },
  {
    icon: HelpCircle,
    title: "Les Quiz",
    desc: "QCM interactifs avec chrono, explications et quiz aléatoire.",
    link: "/quizzes",
    tag: "5 quiz",
  },
  {
    icon: Layers,
    title: "Flashcards",
    desc: "Cartes interactives pour mémoriser citations, personnages et figures de style.",
    link: "/flashcards",
    tag: "40+ cartes",
  },
  {
    icon: Type,
    title: "Vocabulaire",
    desc: "Connecteurs, expressions d'opinion et formules pour la production écrite.",
    link: "/vocabulaire",
    tag: "5 catégories",
  },
  {
    icon: Search,
    title: "Recherche",
    desc: "Trouve n'importe quelle info dans les oeuvres, cours, quiz et vocabulaire.",
    link: "/search",
    tag: "Globale",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 text-left">
            Prépare ton régional
            <br />
            <span className="text-gray-400 dark:text-neutral-500">
              en français, simplement.
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-neutral-400 text-left max-w-lg">
            Tout ce qu'il te faut pour comprendre les oeuvres, maîtriser la
            langue et réussir ton examen régional — 1ère année Bac.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/oeuvres"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 px-5 py-2.5 rounded-lg text-sm font-medium no-underline hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Commencer
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/quizzes"
              className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700 px-5 py-2.5 rounded-lg text-sm font-medium no-underline hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              Passer un quiz
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="grid sm:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, desc, link, tag }) => (
            <Link
              key={link}
              to={link}
              className="group block p-6 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
                  <Icon size={20} className="text-gray-600 dark:text-neutral-400" />
                </div>
                <span className="text-xs font-medium text-gray-400 dark:text-neutral-500 bg-gray-50 dark:bg-neutral-800/50 px-2 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                {desc}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                Explorer
                <ArrowRight
                  size={14}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
