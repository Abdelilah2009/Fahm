import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  HelpCircle,
  ArrowRight,
  Layers,
  Type,
  Search,
  Users,
  MessageSquareQuote,
  Lightbulb,
  Target,
  Clock,
} from "lucide-react";
import { oeuvres } from "../data/oeuvres";
import { quizzes } from "../data/quizzes";
import { lessons } from "../data/lessons";

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
    desc: "Figures de style, conjugaison, production écrite, types de texte et analyse.",
    link: "/lessons",
    tag: `${lessons.length} leçons`,
  },
  {
    icon: HelpCircle,
    title: "Les Quiz",
    desc: "QCM interactifs avec chrono, explications et quiz aléatoire.",
    link: "/quizzes",
    tag: `${quizzes.length} quiz`,
  },
  {
    icon: Layers,
    title: "Flashcards",
    desc: "Cartes interactives pour mémoriser citations, personnages, thèmes et conjugaison.",
    link: "/flashcards",
    tag: "100+ cartes",
  },
  {
    icon: Type,
    title: "Vocabulaire",
    desc: "Connecteurs, expressions d'opinion, argumentation et formules pour la production écrite.",
    link: "/vocabulaire",
    tag: "6 catégories",
  },
  {
    icon: Search,
    title: "Recherche",
    desc: "Trouve n'importe quelle info dans les oeuvres, cours, quiz et vocabulaire.",
    link: "/search",
    tag: "Globale",
  },
];

const totalQuestions = quizzes.reduce((sum, q) => sum + q.questions.length, 0);
const totalPersonnages = oeuvres.reduce(
  (sum, o) => sum + o.personnages.length,
  0
);
const totalCitations = oeuvres.reduce((sum, o) => sum + o.citations.length, 0);

const stats = [
  { label: "Questions de quiz", value: `${totalQuestions}+`, icon: HelpCircle },
  { label: "Personnages", value: totalPersonnages, icon: Users },
  { label: "Citations", value: totalCitations, icon: MessageSquareQuote },
  { label: "Leçons", value: lessons.length, icon: FileText },
];

const examTips = [
  {
    icon: Target,
    title: "Compréhension (8 pts)",
    desc: "Lisez le texte 2 fois. Répondez avec des citations. Identifiez le type de texte, les figures de style et le champ lexical.",
  },
  {
    icon: Lightbulb,
    title: "Langue (6 pts)",
    desc: "Maîtrisez les figures de style, la conjugaison (surtout imparfait/passé simple) et les types de phrases.",
  },
  {
    icon: FileText,
    title: "Production écrite (6 pts)",
    desc: "Introduction + thèse + antithèse + conclusion. Minimum 15 lignes. Utilisez des connecteurs variés.",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* Hero */}
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

      {/* Stats */}
      <section className="pb-12 sm:pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="p-4 rounded-xl border border-gray-200 dark:border-neutral-800 text-center"
            >
              <Icon
                size={18}
                className="mx-auto mb-2 text-gray-400 dark:text-neutral-500"
              />
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {value}
              </p>
              <p className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="pb-16 sm:pb-20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Tout pour ton examen
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, desc, link, tag }) => (
            <Link
              key={link}
              to={link}
              className="group block p-6 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
                  <Icon
                    size={20}
                    className="text-gray-600 dark:text-neutral-400"
                  />
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

      {/* Oeuvres showcase */}
      <section className="pb-16 sm:pb-20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Les 3 oeuvres au programme
        </h2>
        <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6">
          Personnages, thèmes, citations et résumés de chaque chapitre.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {oeuvres.map((oeuvre) => (
            <Link
              key={oeuvre.id}
              to={`/oeuvres/${oeuvre.id}`}
              className="group block p-6 rounded-xl border border-gray-200 dark:border-neutral-800 no-underline hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
            >
              <span className="text-3xl mb-3 block">{oeuvre.image}</span>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {oeuvre.title}
              </h3>
              <p className="text-xs text-gray-400 dark:text-neutral-500 mb-3">
                {oeuvre.author} — {oeuvre.year} — {oeuvre.genre}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-neutral-400">
                <span className="bg-gray-50 dark:bg-neutral-800/50 px-2 py-0.5 rounded-full">
                  {oeuvre.personnages.length} personnages
                </span>
                <span className="bg-gray-50 dark:bg-neutral-800/50 px-2 py-0.5 rounded-full">
                  {oeuvre.themes.length} thèmes
                </span>
                <span className="bg-gray-50 dark:bg-neutral-800/50 px-2 py-0.5 rounded-full">
                  {oeuvre.citations.length} citations
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Exam structure */}
      <section className="pb-16 sm:pb-20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Structure de l'examen régional
        </h2>
        <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6">
          L'examen de français — 1ère Bac — est noté sur 20 points. Voici la
          répartition.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {examTips.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 rounded-xl border border-gray-200 dark:border-neutral-800"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <Icon
                  size={18}
                  className="text-gray-600 dark:text-neutral-400"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Study tips */}
      <section className="pb-16 sm:pb-20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Comment utiliser Fahm
        </h2>
        <div className="space-y-4">
          {[
            {
              step: "1",
              icon: BookOpen,
              title: "Lis les résumés des oeuvres",
              desc: "Commence par comprendre les personnages, les thèmes et l'histoire de chaque oeuvre. C'est la base.",
            },
            {
              step: "2",
              icon: FileText,
              title: "Apprends les cours de langue",
              desc: "Maîtrise les figures de style, la conjugaison et les types de texte. Tu en auras besoin à l'examen.",
            },
            {
              step: "3",
              icon: Layers,
              title: "Révise avec les flashcards",
              desc: "Utilise les flashcards pour mémoriser les citations, les personnages et les définitions. Filtre par oeuvre.",
            },
            {
              step: "4",
              icon: HelpCircle,
              title: "Teste-toi avec les quiz",
              desc: "Passe les quiz pour vérifier tes connaissances. Active le chrono pour simuler les conditions d'examen.",
            },
            {
              step: "5",
              icon: Type,
              title: "Prépare ta production écrite",
              desc: "Apprends les expressions de vocabulaire et la structure d'une production écrite pour avoir une bonne note.",
            },
          ].map(({ step, icon: Icon, title, desc }) => (
            <div
              key={step}
              className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-neutral-800"
            >
              <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 flex items-center justify-center text-sm font-semibold shrink-0">
                {step}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — Random quiz */}
      <section className="pb-16 sm:pb-24">
        <div className="p-8 rounded-2xl border border-gray-200 dark:border-neutral-800 text-center">
          <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-4">
            <Clock
              size={22}
              className="text-gray-600 dark:text-neutral-400"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Prêt à te tester ?
          </h2>
          <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6 max-w-md mx-auto">
            Lance un quiz aléatoire de 15 questions sur toutes les oeuvres, les
            figures de style, la conjugaison et les types de texte.
          </p>
          <Link
            to="/quizzes/random"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 px-6 py-3 rounded-lg text-sm font-medium no-underline hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Quiz aléatoire
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer note */}
      <section className="pb-12 text-center">
        <p className="text-xs text-gray-400 dark:text-neutral-600">
          Fahm — Plateforme de révision pour le français, 1ère Bac Maroc.
        </p>
      </section>
    </div>
  );
}
