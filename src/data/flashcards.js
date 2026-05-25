import { oeuvres } from "./oeuvres";
import { lessons } from "./lessons";

export function generateFlashcards() {
  const cards = [];

  // Citations from oeuvres
  oeuvres.forEach((oeuvre) => {
    oeuvre.citations.forEach((c) => {
      cards.push({
        id: `cite-${oeuvre.id}-${cards.length}`,
        category: "Citations",
        front: c.texte,
        back: `${oeuvre.title} — ${oeuvre.author}\n\n${c.contexte}`,
        color: "blue",
      });
    });
  });

  // Personnages from oeuvres
  oeuvres.forEach((oeuvre) => {
    oeuvre.personnages.forEach((p) => {
      cards.push({
        id: `perso-${oeuvre.id}-${p.nom}`,
        category: "Personnages",
        front: `Qui est ${p.nom} ?`,
        back: `${p.role} — ${oeuvre.title}\n\n${p.description}`,
        color: "green",
      });
    });
  });

  // Figures de style
  const figuresLesson = lessons.find((l) => l.id === "figures-de-style");
  if (figuresLesson) {
    figuresLesson.content.forEach((item) => {
      cards.push({
        id: `fig-${item.titre}`,
        category: "Figures de style",
        front: `${item.titre}\n\n${item.exemple}`,
        back: item.definition,
        color: "purple",
      });
    });
  }

  // Themes from oeuvres
  oeuvres.forEach((oeuvre) => {
    oeuvre.themes.forEach((t) => {
      cards.push({
        id: `theme-${oeuvre.id}-${t.titre}`,
        category: "Thèmes",
        front: `${t.titre}\n(${oeuvre.title})`,
        back: t.explication,
        color: "amber",
      });
    });
  });

  return cards;
}

export const flashcardCategories = [
  "Tout",
  "Citations",
  "Personnages",
  "Figures de style",
  "Thèmes",
];
