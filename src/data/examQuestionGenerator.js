import { quizzes } from "./quizzes";
import { ijtimaaiyatQuizzes } from "./ijtimaaiyatQuizzes";
import { islamiyatQuizzes } from "./islamiyatQuizzes";
import { arabicQuizzes } from "./arabicQuizzes";
import { lessons } from "./lessons";
import { oeuvres } from "./oeuvres";
import { tarikh, joghrafia } from "./ijtimaaiyat";
import { islamiyatLessons } from "./islamiyat";
import { arabicLessons } from "./arabic";
import { mafahim } from "./mafahim";
import { islamiyatMafahim } from "./islamiyatMafahim";
import { arabicMafahim } from "./arabicMafahim";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Collect all QCM questions for a subject
function getQcmQuestions(subjectId) {
  const quizMap = {
    francais: quizzes,
    ijtimaaiyat: ijtimaaiyatQuizzes,
    islamiyat: islamiyatQuizzes,
    arabic: arabicQuizzes,
  };
  const subjectQuizzes = quizMap[subjectId] || [];
  return subjectQuizzes.flatMap((q) =>
    q.questions.map((question) => ({
      type: "qcm",
      question: question.question,
      options: question.options,
      correct: question.correct,
      explication: question.explication,
      source: q.title,
    }))
  );
}

// Generate open-ended questions from mafahim + lessons
function getOpenEndedQuestions(subjectId) {
  const questions = [];

  if (subjectId === "francais") {
    // From French lessons
    lessons.forEach((lesson) => {
      lesson.content.forEach((item) => {
        questions.push({
          type: "open",
          question: `Définissez : ${item.titre}`,
          expectedAnswer: item.definition,
          explication: item.astuce || "",
          source: lesson.title,
        });
      });
    });
    // From oeuvres — personnages
    oeuvres.forEach((oeuvre) => {
      oeuvre.personnages.forEach((p) => {
        questions.push({
          type: "open",
          question: `Qui est ${p.nom} dans « ${oeuvre.title} » ?`,
          expectedAnswer: `${p.role}. ${p.description}`,
          explication: "",
          source: oeuvre.title,
        });
      });
      // From oeuvres — themes
      oeuvre.themes.forEach((t) => {
        questions.push({
          type: "open",
          question: `Expliquez le thème « ${t.titre} » dans « ${oeuvre.title} ».`,
          expectedAnswer: t.explication,
          explication: "",
          source: oeuvre.title,
        });
      });
    });
  }

  if (subjectId === "ijtimaaiyat") {
    // From mafahim
    mafahim.forEach((cat) => {
      cat.terms.forEach((t) => {
        questions.push({
          type: "open",
          question: `عرّف المفهوم التالي: ${t.term}`,
          expectedAnswer: t.definition,
          explication: "",
          source: cat.title,
        });
      });
    });
    // From lessons
    [...tarikh, ...joghrafia].forEach((lesson) => {
      lesson.content.forEach((item) => {
        questions.push({
          type: "open",
          question: `ما المقصود بـ: ${item.titre}؟`,
          expectedAnswer: item.definition,
          explication: item.astuce || "",
          source: lesson.title,
        });
      });
    });
  }

  if (subjectId === "islamiyat") {
    islamiyatMafahim.forEach((cat) => {
      cat.terms.forEach((t) => {
        questions.push({
          type: "open",
          question: `عرّف المفهوم التالي: ${t.term}`,
          expectedAnswer: t.definition,
          explication: "",
          source: cat.title,
        });
      });
    });
    islamiyatLessons.forEach((lesson) => {
      lesson.content.forEach((item) => {
        questions.push({
          type: "open",
          question: `اشرح: ${item.titre}`,
          expectedAnswer: item.definition,
          explication: item.astuce || "",
          source: lesson.title,
        });
      });
    });
  }

  if (subjectId === "arabic") {
    arabicMafahim.forEach((cat) => {
      cat.terms.forEach((t) => {
        questions.push({
          type: "open",
          question: `عرّف: ${t.term}`,
          expectedAnswer: t.definition,
          explication: "",
          source: cat.title,
        });
      });
    });
    arabicLessons.forEach((lesson) => {
      lesson.content.forEach((item) => {
        questions.push({
          type: "open",
          question: `ما المقصود بـ: ${item.titre}؟`,
          expectedAnswer: item.definition,
          explication: item.astuce || "",
          source: lesson.title,
        });
      });
    });
  }

  return questions;
}

export function generateExam(subjectId, config) {
  const { questionCount = 15, questionTypes = "mixed" } = config;

  let pool = [];

  if (questionTypes === "qcm") {
    pool = shuffle(getQcmQuestions(subjectId));
  } else if (questionTypes === "open") {
    pool = shuffle(getOpenEndedQuestions(subjectId));
  } else {
    // mixed — ~60% QCM, ~40% open
    const qcmCount = Math.round(questionCount * 0.6);
    const openCount = questionCount - qcmCount;
    const qcm = shuffle(getQcmQuestions(subjectId)).slice(0, qcmCount);
    const open = shuffle(getOpenEndedQuestions(subjectId)).slice(0, openCount);
    pool = shuffle([...qcm, ...open]);
  }

  return pool.slice(0, questionCount);
}
