import { oeuvres } from "./oeuvres";
import { lessons } from "./lessons";
import { vocabulaire } from "./vocabulaire";

export function generateFlashcards() {
  const cards = [];

  // Citations from ALL oeuvres
  oeuvres.forEach((oeuvre) => {
    oeuvre.citations.forEach((c) => {
      cards.push({
        id: `cite-${oeuvre.id}-${cards.length}`,
        category: "Citations",
        oeuvre: oeuvre.title,
        front: c.texte,
        back: `${oeuvre.title} — ${oeuvre.author}\n\n${c.contexte}`,
        color: "blue",
      });
    });
  });

  // Personnages from ALL oeuvres
  oeuvres.forEach((oeuvre) => {
    oeuvre.personnages.forEach((p) => {
      cards.push({
        id: `perso-${oeuvre.id}-${p.nom}`,
        category: "Personnages",
        oeuvre: oeuvre.title,
        front: `Qui est ${p.nom} ?\n(${oeuvre.title})`,
        back: `${p.role}\n\n${p.description}`,
        color: "green",
      });
    });
  });

  // Themes from ALL oeuvres
  oeuvres.forEach((oeuvre) => {
    oeuvre.themes.forEach((t) => {
      cards.push({
        id: `theme-${oeuvre.id}-${t.titre}`,
        category: "Thèmes",
        oeuvre: oeuvre.title,
        front: `${t.titre}\n(${oeuvre.title})`,
        back: t.explication,
        color: "amber",
      });
    });
  });

  // Figures de style from lessons
  const figuresLesson = lessons.find((l) => l.id === "figures-de-style");
  if (figuresLesson) {
    figuresLesson.content.forEach((item) => {
      cards.push({
        id: `fig-${item.titre}`,
        category: "Figures de style",
        oeuvre: null,
        front: `${item.titre}\n\n${item.exemple}`,
        back: `${item.definition}\n\n💡 ${item.astuce}`,
        color: "purple",
      });
    });
  }

  // Conjugaison from lessons
  const conjugaisonLesson = lessons.find((l) => l.id === "conjugaison");
  if (conjugaisonLesson) {
    conjugaisonLesson.content.forEach((item) => {
      cards.push({
        id: `conj-${item.titre}`,
        category: "Conjugaison",
        oeuvre: null,
        front: `${item.titre}\n\n${item.exemple}`,
        back: `${item.definition}\n\n💡 ${item.astuce}`,
        color: "rose",
      });
    });
  }

  // Vocabulaire / expressions utiles
  vocabulaire.forEach((cat) => {
    cat.mots.forEach((m, i) => {
      cards.push({
        id: `vocab-${cat.id}-${i}`,
        category: "Vocabulaire",
        oeuvre: null,
        front: `${m.mot}\n\n${m.traduction}`,
        back: `${m.usage}\n\nExemple : ${m.exemple}`,
        color: "teal",
      });
    });
  });

  return cards;
}

// Build oeuvre filter options dynamically
export function getFlashcardOeuvres() {
  return oeuvres.map((o) => o.title);
}

export const flashcardCategories = [
  "Tout",
  "Citations",
  "Personnages",
  "Thèmes",
  "Figures de style",
  "Conjugaison",
  "Vocabulaire",
];
