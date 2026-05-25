import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Moon,
  Sun,
  Check,
  X,
  Trophy,
  RotateCcw,
  Timer,
  TimerOff,
  CircleDot,
  PenLine,
  Shuffle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { generateExam } from "../data/examQuestionGenerator";

const SUBJECTS = [
  { id: "francais", title: "Français", emoji: "🇫🇷", dir: "ltr", lang: "fr" },
  { id: "ijtimaaiyat", title: "الاجتماعيات", emoji: "🌍", dir: "rtl", lang: "ar" },
  { id: "islamiyat", title: "التربية الإسلامية", emoji: "🕌", dir: "rtl", lang: "ar" },
  { id: "arabic", title: "اللغة العربية", emoji: "✍️", dir: "rtl", lang: "ar" },
];

const L = {
  fr: {
    examMode: "Mode Examen",
    selectSubject: "Choisis ta matière",
    questionCount: "Nombre de questions",
    questionType: "Type de questions",
    qcm: "QCM uniquement",
    open: "Questions ouvertes",
    mixed: "Mixte",
    timer: "Minuteur",
    noTimer: "Sans minuteur",
    min: "min",
    start: "Commencer l'examen",
    next: "Question suivante",
    finish: "Terminer l'examen",
    showAnswer: "Voir la réponse",
    yourAnswer: "Votre réponse",
    correctAnswer: "Réponse correcte",
    selfEval: "Auto-évaluation :",
    correct: "Correct",
    partial: "Partiel",
    incorrect: "Incorrect",
    result: "Résultat",
    qcmScore: "Score QCM",
    openScore: "Score questions ouvertes",
    total: "Score total",
    retry: "Réessayer",
    newExam: "Nouvel examen",
    home: "Accueil",
    review: "Revoir les questions",
    timeUp: "Temps écoulé !",
    typeHere: "Tapez votre réponse ici...",
    back: "Retour",
    source: "Source",
    explanation: "Explication",
    msg100: "Excellent ! Score parfait !",
    msg80: "Très bien ! Tu maîtrises le sujet.",
    msg60: "Pas mal ! Revois quelques points.",
    msg40: "Tu peux mieux faire. Relis le cours.",
    msg0: "Il faut revoir le cours et réessayer.",
  },
  ar: {
    examMode: "وضع الامتحان",
    selectSubject: "اختر المادة",
    questionCount: "عدد الأسئلة",
    questionType: "نوع الأسئلة",
    qcm: "اختيار من متعدد",
    open: "أسئلة مفتوحة",
    mixed: "مختلط",
    timer: "المؤقت",
    noTimer: "بدون مؤقت",
    min: "د",
    start: "ابدأ الامتحان",
    next: "السؤال التالي",
    finish: "إنهاء الامتحان",
    showAnswer: "أظهر الإجابة",
    yourAnswer: "إجابتك",
    correctAnswer: "الإجابة الصحيحة",
    selfEval: "قيّم إجابتك:",
    correct: "صحيح",
    partial: "جزئي",
    incorrect: "خاطئ",
    result: "النتيجة",
    qcmScore: "نقط الاختيار من متعدد",
    openScore: "نقط الأسئلة المفتوحة",
    total: "المجموع",
    retry: "أعد المحاولة",
    newExam: "امتحان جديد",
    home: "الرئيسية",
    review: "مراجعة الأسئلة",
    timeUp: "انتهى الوقت!",
    typeHere: "اكتب إجابتك هنا...",
    back: "رجوع",
    source: "المصدر",
    explanation: "الشرح",
    msg100: "ممتاز! نتيجة كاملة!",
    msg80: "أحسنت! تتحكم في المادة.",
    msg60: "لا بأس! راجع بعض النقاط.",
    msg40: "يمكنك أن تفعل أفضل.",
    msg0: "راجع الدرس وأعد المحاولة.",
  },
};

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ExamMode() {
  const [dark, setDark] = useDarkMode();
  const [step, setStep] = useState("select");
  const [subject, setSubject] = useState(null);
  const [config, setConfig] = useState({ questionCount: 15, questionTypes: "mixed", timerMinutes: 0 });
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [examTimeLeft, setExamTimeLeft] = useState(0);
  const [openAnswer, setOpenAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [selfScore, setSelfScore] = useState(null);
  const [qcmSelected, setQcmSelected] = useState(null);
  const [qcmAnswered, setQcmAnswered] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const sub = SUBJECTS.find((s) => s.id === subject);
  const isRTL = sub?.dir === "rtl";
  const t = L[sub?.lang || "fr"];
  const question = questions[currentIndex];
  const total = questions.length;
  const progress = total > 0 ? ((currentIndex + (qcmAnswered || (revealed && selfScore !== null) ? 1 : 0)) / total) * 100 : 0;

  // Exam-wide timer
  const handleTimeUp = useCallback(() => {
    // Auto-finish
    setStep("results");
  }, []);

  useEffect(() => {
    if (step !== "exam" || config.timerMinutes === 0 || examTimeLeft <= 0) return;
    if (examTimeLeft <= 1) { handleTimeUp(); return; }
    const interval = setInterval(() => setExamTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [step, config.timerMinutes, examTimeLeft, handleTimeUp]);

  const startExam = () => {
    const generated = generateExam(subject, config);
    setQuestions(generated);
    setAnswers([]);
    setCurrentIndex(0);
    resetQuestionState();
    if (config.timerMinutes > 0) setExamTimeLeft(config.timerMinutes * 60);
    setStep("exam");
  };

  const resetQuestionState = () => {
    setOpenAnswer("");
    setRevealed(false);
    setSelfScore(null);
    setQcmSelected(null);
    setQcmAnswered(false);
  };

  const handleQcmSelect = (i) => {
    if (qcmAnswered) return;
    setQcmSelected(i);
    setQcmAnswered(true);
    setAnswers((prev) => [...prev, { index: currentIndex, type: "qcm", isCorrect: i === question.correct, userAnswer: question.options[i] }]);
  };

  const handleRevealOpen = () => {
    setRevealed(true);
  };

  const handleSelfEval = (score) => {
    setSelfScore(score);
    setAnswers((prev) => [...prev, { index: currentIndex, type: "open", isCorrect: score, userAnswer: openAnswer }]);
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      resetQuestionState();
    } else {
      setStep("results");
    }
  };

  const canProceed = question?.type === "qcm" ? qcmAnswered : (revealed && selfScore !== null);

  // Calculate results
  const qcmAnswers = answers.filter((a) => a.type === "qcm");
  const openAnswers = answers.filter((a) => a.type === "open");
  const qcmCorrect = qcmAnswers.filter((a) => a.isCorrect === true).length;
  const openScore = openAnswers.reduce((s, a) => s + (a.isCorrect || 0), 0);
  const totalScore = qcmCorrect + openScore;
  const totalMax = qcmAnswers.length + openAnswers.length;
  const pct = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;

  const getMessage = () => {
    if (pct === 100) return t.msg100;
    if (pct >= 80) return t.msg80;
    if (pct >= 60) return t.msg60;
    if (pct >= 40) return t.msg40;
    return t.msg0;
  };

  // ========== STEP 1: SELECT SUBJECT ==========
  if (step === "select") {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
        <div className="absolute top-4 right-4">
          <button onClick={() => setDark(!dark)} className="p-2.5 rounded-lg text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer bg-transparent border-0">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-screen py-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">📝</h1>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              وضع الامتحان — Mode Examen
            </h2>
            <p className="text-gray-500 dark:text-neutral-400">
              اختر المادة — Choisis ta matière
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
            {SUBJECTS.map((s) => (
              <button key={s.id} onClick={() => { setSubject(s.id); setStep("config"); }} className="group p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-colors text-center cursor-pointer bg-white dark:bg-neutral-900">
                <span className="text-4xl block mb-3">{s.emoji}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{s.title}</h3>
              </button>
            ))}
          </div>
          <Link to="/" className="text-sm text-gray-400 dark:text-neutral-500 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            ← Retour / رجوع
          </Link>
        </div>
      </div>
    );
  }

  // ========== STEP 2: CONFIG ==========
  if (step === "config") {
    const counts = [10, 15, 20, 25, 30];
    const types = [
      { key: "qcm", icon: CircleDot, label: t.qcm },
      { key: "open", icon: PenLine, label: t.open },
      { key: "mixed", icon: Shuffle, label: t.mixed },
    ];
    const timers = [0, 15, 30, 45, 60];

    return (
      <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
        <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"}`}>
          <button onClick={() => setDark(!dark)} className="p-2.5 rounded-lg text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer bg-transparent border-0">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <div className="max-w-lg mx-auto px-4 sm:px-6 py-16">
          <button onClick={() => setStep("select")} className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 cursor-pointer bg-transparent border-0 p-0">
            {isRTL ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            {t.back}
          </button>

          <div className="text-center mb-10">
            <span className="text-4xl block mb-3">{sub.emoji}</span>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{sub.title}</h1>
            <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1">{t.examMode}</p>
          </div>

          {/* Question count */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">{t.questionCount}</h3>
            <div className="flex gap-2">
              {counts.map((n) => (
                <button key={n} onClick={() => setConfig((c) => ({ ...c, questionCount: n }))} className={`flex-1 py-2 rounded-lg text-sm font-medium cursor-pointer border-0 transition-colors ${config.questionCount === n ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900" : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400"}`}>
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Question type */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">{t.questionType}</h3>
            <div className="grid grid-cols-3 gap-2">
              {types.map(({ key, icon: Icon, label }) => (
                <button key={key} onClick={() => setConfig((c) => ({ ...c, questionTypes: key }))} className={`p-3 rounded-xl text-center cursor-pointer border transition-colors ${config.questionTypes === key ? "border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-neutral-800" : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"}`}>
                  <Icon size={20} className={`mx-auto mb-1.5 ${config.questionTypes === key ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-neutral-500"}`} />
                  <p className={`text-xs font-medium ${config.questionTypes === key ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-neutral-400"}`}>{label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Timer */}
          <div className="mb-10">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">{t.timer}</h3>
            <div className="flex gap-2">
              {timers.map((m) => (
                <button key={m} onClick={() => setConfig((c) => ({ ...c, timerMinutes: m }))} className={`flex-1 py-2 rounded-lg text-sm font-medium cursor-pointer border-0 transition-colors ${config.timerMinutes === m ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900" : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400"}`}>
                  {m === 0 ? (isRTL ? "❌" : "—") : `${m}${t.min}`}
                </button>
              ))}
            </div>
          </div>

          <button onClick={startExam} className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 py-3.5 rounded-xl text-sm font-medium cursor-pointer border-0 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            {t.start}
          </button>
        </div>
      </div>
    );
  }

  // ========== STEP 3: EXAM ==========
  if (step === "exam" && question) {
    return (
      <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{sub.emoji} {sub.title}</h1>
            <div className="flex items-center gap-3">
              {config.timerMinutes > 0 && (
                <span className={`text-sm font-bold tabular-nums ${examTimeLeft <= 120 ? "text-red-500" : examTimeLeft <= 300 ? "text-amber-500" : "text-gray-400 dark:text-neutral-500"}`}>
                  {formatTime(examTimeLeft)}
                </span>
              )}
              <span className="text-sm text-gray-400 dark:text-neutral-500 font-medium">{currentIndex + 1}/{total}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-1.5 mb-6">
            <div className="bg-gray-900 dark:bg-gray-100 h-1.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Question type badge */}
          <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-4 ${question.type === "qcm" ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400" : "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400"}`}>
            {question.type === "qcm" ? t.qcm : t.open}
          </span>

          {/* Question text */}
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 leading-relaxed mb-6">{question.question}</h2>

          {/* QCM options */}
          {question.type === "qcm" && (
            <>
              <div className="grid gap-2 mb-6">
                {question.options.map((opt, i) => {
                  let style = "border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-neutral-300 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800";
                  if (qcmAnswered) {
                    if (i === question.correct) style = "border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/40 text-green-900 dark:text-green-200";
                    else if (i === qcmSelected && i !== question.correct) style = "border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200";
                    else style = "border-gray-100 dark:border-neutral-800 text-gray-400 dark:text-neutral-600";
                  }
                  return (
                    <button key={i} onClick={() => handleQcmSelect(i)} disabled={qcmAnswered} className={`w-full p-4 rounded-xl text-sm font-medium transition-all cursor-pointer bg-white dark:bg-neutral-900 flex items-center justify-between ${isRTL ? "text-right" : "text-left"} ${style} ${qcmAnswered ? "cursor-default" : ""}`}>
                      <span>{opt}</span>
                      {qcmAnswered && i === question.correct && <Check size={18} className="text-green-600 dark:text-green-400 shrink-0" />}
                      {qcmAnswered && i === qcmSelected && i !== question.correct && <X size={18} className="text-red-500 dark:text-red-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
              {qcmAnswered && question.explication && (
                <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-700 dark:text-neutral-300 leading-relaxed"><span className="font-semibold">{t.explanation}: </span>{question.explication}</p>
                </div>
              )}
            </>
          )}

          {/* Open-ended */}
          {question.type === "open" && (
            <>
              <textarea
                value={openAnswer}
                onChange={(e) => setOpenAnswer(e.target.value)}
                readOnly={revealed}
                placeholder={t.typeHere}
                dir={isRTL ? "rtl" : "ltr"}
                className={`w-full p-4 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 dark:placeholder-neutral-500 focus:outline-none focus:border-gray-400 dark:focus:border-neutral-500 transition-colors resize-none ${isRTL ? "text-right" : "text-left"} ${revealed ? "opacity-60" : ""}`}
                rows={4}
              />

              {!revealed && (
                <button onClick={handleRevealOpen} className="mt-4 w-full flex items-center justify-center gap-2 bg-white dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700 py-3 rounded-xl text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
                  {t.showAnswer}
                </button>
              )}

              {revealed && (
                <div className="mt-4">
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-4">
                    <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">{t.correctAnswer}:</p>
                    <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">{question.expectedAnswer}</p>
                  </div>

                  {selfScore === null && (
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">{t.selfEval}</p>
                      <div className="flex gap-2">
                        <button onClick={() => handleSelfEval(1)} className="flex-1 py-2.5 rounded-lg text-sm font-medium cursor-pointer border-0 bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors">
                          ✓ {t.correct}
                        </button>
                        <button onClick={() => handleSelfEval(0.5)} className="flex-1 py-2.5 rounded-lg text-sm font-medium cursor-pointer border-0 bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/40 transition-colors">
                          ◐ {t.partial}
                        </button>
                        <button onClick={() => handleSelfEval(0)} className="flex-1 py-2.5 rounded-lg text-sm font-medium cursor-pointer border-0 bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors">
                          ✗ {t.incorrect}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* Next button */}
          {canProceed && (
            <button onClick={handleNext} className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 py-3 rounded-xl text-sm font-medium cursor-pointer border-0 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              {currentIndex < total - 1 ? t.next : t.finish}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ========== STEP 4: RESULTS ==========
  if (step === "results") {
    return (
      <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-6">
              <Trophy size={28} className="text-gray-600 dark:text-neutral-400" />
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{t.result}</h1>
            <div className="text-5xl font-semibold text-gray-900 dark:text-gray-100 my-4">
              {totalScore % 1 === 0 ? totalScore : totalScore.toFixed(1)}/{totalMax}
            </div>
            <p className="text-gray-500 dark:text-neutral-400 mb-6">{getMessage()}</p>

            {/* Score bar */}
            <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2 mb-6 max-w-xs mx-auto">
              <div className={`h-2 rounded-full transition-all ${pct >= 80 ? "bg-green-500" : pct >= 50 ? "bg-amber-500" : "bg-red-400"}`} style={{ width: `${pct}%` }} />
            </div>

            {/* Score breakdown */}
            <div className="flex gap-4 justify-center text-sm mb-8">
              {qcmAnswers.length > 0 && (
                <div className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300">
                  {t.qcmScore}: {qcmCorrect}/{qcmAnswers.length}
                </div>
              )}
              {openAnswers.length > 0 && (
                <div className="px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300">
                  {t.openScore}: {openScore % 1 === 0 ? openScore : openScore.toFixed(1)}/{openAnswers.length}
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center mb-8">
            <button onClick={() => { startExam(); }} className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer border-0">
              <RotateCcw size={16} /> {t.retry}
            </button>
            <button onClick={() => { setStep("select"); setSubject(null); }} className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700 px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer">
              {t.newExam}
            </button>
            <Link to="/" className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700 px-5 py-2.5 rounded-lg text-sm font-medium no-underline">
              {t.home}
            </Link>
          </div>

          {/* Review toggle */}
          <button onClick={() => setReviewOpen(!reviewOpen)} className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-neutral-800 cursor-pointer bg-white dark:bg-neutral-900 text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">
            {t.review}
            {reviewOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {reviewOpen && (
            <div className="grid gap-3">
              {questions.map((q, i) => {
                const ans = answers.find((a) => a.index === i);
                return (
                  <div key={i} className="p-4 rounded-xl border border-gray-200 dark:border-neutral-800">
                    <div className="flex items-start gap-2 mb-2">
                      <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${q.type === "qcm" ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400" : "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400"}`}>
                        {i + 1}
                      </span>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 flex-1">{q.question}</p>
                      {ans && (
                        <span className="shrink-0">
                          {ans.isCorrect === true || ans.isCorrect === 1 ? <Check size={16} className="text-green-500" /> : ans.isCorrect === 0.5 ? <span className="text-amber-500 text-xs font-bold">◐</span> : <X size={16} className="text-red-500" />}
                        </span>
                      )}
                    </div>
                    {ans && q.type === "qcm" && (
                      <p className="text-xs text-gray-500 dark:text-neutral-400">{t.correctAnswer}: {q.options[q.correct]}</p>
                    )}
                    {ans && q.type === "open" && (
                      <div className="text-xs text-gray-500 dark:text-neutral-400 space-y-1">
                        <p>{t.yourAnswer}: {ans.userAnswer || "—"}</p>
                        <p>{t.correctAnswer}: {q.expectedAnswer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
