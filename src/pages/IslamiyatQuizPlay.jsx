import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Check, X, ArrowRight, RotateCcw, Trophy, Timer, TimerOff } from "lucide-react";
import { getIslamiyatQuiz } from "../data/islamiyatQuizzes";

const TIMER_SECONDS = 20;

export default function IslamiyatQuizPlay() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(() => getIslamiyatQuiz(id));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [started, setStarted] = useState(false);

  const handleTimeout = useCallback(() => {
    if (answered) return;
    setAnswered(true); setShowResult(true); setSelected(-1);
  }, [answered]);

  useEffect(() => {
    if (!timerEnabled || !started || answered || finished) return;
    if (timeLeft <= 0) { handleTimeout(); return; }
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timerEnabled, started, answered, finished, timeLeft, handleTimeout]);

  if (!quiz) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-gray-500 dark:text-neutral-400">الاختبار غير موجود.</p>
        <Link to="/islamiyat/quiz" className="text-sm text-gray-900 dark:text-gray-100 underline mt-2 inline-block">العودة للاختبارات</Link>
      </div>
    );
  }

  const question = quiz.questions[current];
  const total = quiz.questions.length;
  const progress = ((current + (answered ? 1 : 0)) / total) * 100;

  const handleSelect = (index) => { if (answered) return; setSelected(index); setAnswered(true); setShowResult(true); if (index === question.correct) setScore((s) => s + 1); };
  const handleNext = () => { if (current < total - 1) { setCurrent((c) => c + 1); setSelected(null); setShowResult(false); setAnswered(false); setTimeLeft(TIMER_SECONDS); } else { setFinished(true); } };
  const handleRestart = () => { setQuiz(getIslamiyatQuiz(id)); setCurrent(0); setSelected(null); setShowResult(false); setScore(0); setAnswered(false); setFinished(false); setTimeLeft(TIMER_SECONDS); setStarted(true); };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center py-12">
          <span className="text-5xl mb-6 block">{quiz.icon}</span>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">{quiz.title}</h1>
          <p className="text-gray-500 dark:text-neutral-400 mb-8">{total} سؤال — بالتوفيق!</p>
          <div className="max-w-xs mx-auto mb-8">
            <button onClick={() => setTimerEnabled((t) => !t)} className={`w-full flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${timerEnabled ? "border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30" : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"}`}>
              <div className="flex items-center gap-3">
                {timerEnabled ? <Timer size={20} className="text-amber-500" /> : <TimerOff size={20} className="text-gray-400 dark:text-neutral-500" />}
                <div className="text-right"><p className="text-sm font-medium text-gray-900 dark:text-gray-100">وضع المؤقت</p><p className="text-xs text-gray-500 dark:text-neutral-400">{TIMER_SECONDS} ثانية لكل سؤال</p></div>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors flex items-center ${timerEnabled ? "bg-amber-400 justify-start" : "bg-gray-200 dark:bg-neutral-700 justify-end"}`}><div className="w-4 h-4 rounded-full bg-white mx-1" /></div>
            </button>
          </div>
          <button onClick={() => setStarted(true)} className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium cursor-pointer border-0">ابدأ</button>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / total) * 100);
    let message = "";
    if (percentage === 100) message = "ممتاز! نتيجة كاملة!";
    else if (percentage >= 80) message = "أحسنت! تتحكم في المادة.";
    else if (percentage >= 60) message = "لا بأس! راجع بعض النقاط.";
    else if (percentage >= 40) message = "يمكنك أن تفعل أفضل.";
    else message = "يجب مراجعة الدرس والمحاولة مرة أخرى.";
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-6"><Trophy size={28} className="text-gray-600 dark:text-neutral-400" /></div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">النتيجة</h1>
          <div className="text-5xl font-semibold text-gray-900 dark:text-gray-100 my-6">{score}/{total}</div>
          <p className="text-gray-500 dark:text-neutral-400 mb-8">{message}</p>
          <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2 mb-8 max-w-xs mx-auto"><div className={`h-2 rounded-full ${percentage >= 80 ? "bg-green-500" : percentage >= 50 ? "bg-amber-500" : "bg-red-400"}`} style={{ width: `${percentage}%` }} /></div>
          <div className="flex gap-3 justify-center">
            <button onClick={handleRestart} className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer border-0"><RotateCcw size={16} /> أعد المحاولة</button>
            <Link to="/islamiyat/quiz" className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700 px-5 py-2.5 rounded-lg text-sm font-medium no-underline">اختبارات أخرى</Link>
          </div>
        </div>
      </div>
    );
  }

  const timerPercentage = (timeLeft / TIMER_SECONDS) * 100;
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{quiz.title}</h1>
        <div className="flex items-center gap-3">
          {timerEnabled && !answered && <span className={`text-sm font-bold tabular-nums ${timeLeft <= 5 ? "text-red-500" : timeLeft <= 10 ? "text-amber-500" : "text-gray-400 dark:text-neutral-500"}`}>{timeLeft}s</span>}
          <span className="text-sm text-gray-400 dark:text-neutral-500 font-medium">{current + 1}/{total}</span>
        </div>
      </div>
      <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-1.5 mb-2"><div className="bg-gray-900 dark:bg-gray-100 h-1.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} /></div>
      {timerEnabled && !answered && <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-1 mb-6"><div className={`h-1 rounded-full transition-all duration-1000 ${timeLeft <= 5 ? "bg-red-400" : timeLeft <= 10 ? "bg-amber-400" : "bg-green-400"}`} style={{ width: `${timerPercentage}%` }} /></div>}
      {!timerEnabled && <div className="mb-6" />}
      <div className="mb-6"><h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 leading-relaxed">{question.question}</h2></div>
      <div className="grid gap-2 mb-6">
        {question.options.map((option, i) => {
          let style = "border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-neutral-300 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800";
          if (showResult) {
            if (i === question.correct) style = "border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/40 text-green-900 dark:text-green-200";
            else if (i === selected && i !== question.correct) style = "border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200";
            else style = "border-gray-100 dark:border-neutral-800 text-gray-400 dark:text-neutral-600";
          } else if (selected === i) style = "border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-gray-100";
          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={answered} className={`w-full text-right p-4 rounded-xl text-sm font-medium transition-all cursor-pointer bg-white dark:bg-neutral-900 flex items-center justify-between ${style} ${answered ? "cursor-default" : ""}`}>
              <span>{option}</span>
              {showResult && i === question.correct && <Check size={18} className="text-green-600 dark:text-green-400 shrink-0" />}
              {showResult && i === selected && i !== question.correct && <X size={18} className="text-red-500 dark:text-red-400 shrink-0" />}
            </button>
          );
        })}
      </div>
      {showResult && <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-xl p-4 mb-6"><p className="text-sm text-gray-700 dark:text-neutral-300 leading-relaxed"><span className="font-semibold">{selected === -1 ? "انتهى الوقت! " : ""}الشرح: </span>{question.explication}</p></div>}
      {answered && <button onClick={handleNext} className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-neutral-900 py-3 rounded-xl text-sm font-medium cursor-pointer border-0">{current < total - 1 ? "السؤال التالي" : "عرض النتيجة"}</button>}
    </div>
  );
}
