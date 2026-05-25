export const lessons = [
  {
    id: "figures-de-style",
    category: "Langue",
    title: "Les Figures de Style",
    icon: "✨",
    description: "Métaphore, comparaison, hyperbole, et plus encore.",
    content: [
      {
        titre: "La Comparaison",
        definition:
          "Rapprochement de deux éléments à l'aide d'un outil de comparaison (comme, tel, pareil à, semblable à, ressembler à...).",
        exemple: "\"Il est fort comme un lion.\"",
        astuce:
          "Cherchez toujours l'outil de comparaison. S'il n'y en a pas, c'est une métaphore !",
      },
      {
        titre: "La Métaphore",
        definition:
          "Comparaison sans outil de comparaison. Elle établit une ressemblance implicite entre deux éléments.",
        exemple: "\"Cet homme est un lion.\" (= il est courageux/fort)",
        astuce:
          "Pas de 'comme' ou 'tel que'. C'est une image directe.",
      },
      {
        titre: "L'Hyperbole",
        definition: "Exagération dans l'expression pour frapper l'esprit.",
        exemple: "\"Je meurs de faim.\" / \"Il pleut des cordes.\"",
        astuce: "Si c'est exagéré, c'est une hyperbole.",
      },
      {
        titre: "La Personnification",
        definition:
          "Attribuer des caractéristiques humaines à un animal, un objet ou une idée.",
        exemple: "\"Le soleil se couche.\" / \"La mort rôde.\"",
        astuce:
          "Un objet ou animal qui fait une action humaine = personnification.",
      },
      {
        titre: "L'Antithèse",
        definition:
          "Opposition de deux mots ou idées contraires dans une même phrase.",
        exemple: "\"Je vis, je meurs.\" (Louise Labé)",
        astuce: "Cherchez les mots opposés dans la même phrase.",
      },
      {
        titre: "L'Anaphore",
        definition:
          "Répétition d'un mot ou groupe de mots au début de plusieurs phrases ou vers successifs.",
        exemple:
          "\"Moi président, je ferai... Moi président, je changerai...\"",
        astuce: "Même mot au début = anaphore.",
      },
      {
        titre: "La Litote",
        definition: "Dire moins pour suggérer plus.",
        exemple: "\"Ce n'est pas mauvais.\" (= c'est très bon)",
        astuce: "Souvent une double négation qui renforce le sens.",
      },
      {
        titre: "L'Euphémisme",
        definition:
          "Atténuer une réalité dure ou désagréable par une expression plus douce.",
        exemple:
          "\"Il nous a quittés.\" (= il est mort) / \"Il a vécu.\" (= il est mort)",
        astuce:
          "On adoucit la réalité pour ne pas choquer.",
      },
    ],
  },
  {
    id: "conjugaison",
    category: "Langue",
    title: "La Conjugaison Essentielle",
    icon: "📝",
    description: "Les temps verbaux clés pour l'examen régional.",
    content: [
      {
        titre: "Le Présent de l'indicatif",
        definition:
          "Exprime une action qui se passe maintenant, une vérité générale ou une habitude.",
        exemple: "\"Je parle\" / \"La Terre tourne autour du Soleil.\"",
        astuce:
          "1er groupe: -e, -es, -e, -ons, -ez, -ent | 2ème: -is, -is, -it, -issons, -issez, -issent",
      },
      {
        titre: "L'Imparfait",
        definition:
          "Action passée qui dure, une habitude dans le passé, ou une description.",
        exemple: "\"Quand j'étais petit, je jouais dans la rue.\"",
        astuce: "Radical du présent (nous) + -ais, -ais, -ait, -ions, -iez, -aient",
      },
      {
        titre: "Le Passé simple",
        definition:
          "Action passée ponctuelle, terminée, sans lien avec le présent. Utilisé surtout à l'écrit.",
        exemple: "\"Il entra dans la salle et parla.\"",
        astuce:
          "1er gr: -ai, -as, -a, -âmes, -âtes, -èrent | Très fréquent dans les oeuvres !",
      },
      {
        titre: "Le Subjonctif présent",
        definition:
          "Exprime le souhait, le doute, la nécessité, l'obligation. Après 'que'.",
        exemple: "\"Il faut que tu viennes.\" / \"Je veux qu'il parte.\"",
        astuce:
          "Après: il faut que, je veux que, bien que, pour que, avant que...",
      },
    ],
  },
  {
    id: "production-ecrite",
    category: "Production écrite",
    title: "Rédiger une Production Écrite",
    icon: "📄",
    description: "Structure, méthode et expressions utiles pour l'examen.",
    content: [
      {
        titre: "L'Introduction",
        definition:
          "Présentez le sujet de manière générale, posez la problématique et annoncez le plan.",
        exemple:
          "\"De nos jours, [sujet] fait l'objet d'un vif débat. Certains pensent que... tandis que d'autres estiment que... Qu'en est-il réellement ?\"",
        astuce:
          "Utilisez un fait d'actualité, une citation ou une question pour accrocher le lecteur.",
      },
      {
        titre: "Le Développement — Thèse",
        definition:
          "Présentez les arguments POUR avec des exemples concrets.",
        exemple:
          "\"D'une part... En effet... Par exemple... De plus... En outre...\"",
        astuce:
          "Chaque argument = 1 idée + 1 explication + 1 exemple. Minimum 2 arguments.",
      },
      {
        titre: "Le Développement — Antithèse",
        definition:
          "Présentez les arguments CONTRE avec des exemples.",
        exemple:
          "\"Cependant... Néanmoins... En revanche... Toutefois... Malgré cela...\"",
        astuce: "Même structure : idée + explication + exemple.",
      },
      {
        titre: "La Conclusion",
        definition:
          "Résumez votre position et ouvrez sur une perspective plus large.",
        exemple:
          "\"En définitive... Pour conclure... En somme... Il serait souhaitable que...\"",
        astuce:
          "Donnez votre avis personnel et terminez par une question ouverte.",
      },
    ],
  },
  {
    id: "types-de-texte",
    category: "Langue",
    title: "Les Types de Texte",
    icon: "📚",
    description: "Narratif, descriptif, argumentatif, explicatif...",
    content: [
      {
        titre: "Le Texte Narratif",
        definition:
          "Raconte une histoire, des événements réels ou fictifs. Présence d'un narrateur.",
        exemple:
          "\"Il marchait lentement dans la rue quand soudain il entendit un bruit.\"",
        astuce:
          "Indices : passé simple/imparfait, connecteurs temporels (puis, ensuite, soudain).",
      },
      {
        titre: "Le Texte Descriptif",
        definition:
          "Décrit un lieu, un personnage, un objet. Il fait voir, entendre, sentir.",
        exemple:
          "\"La maison était grande, avec des murs blancs et un jardin fleuri.\"",
        astuce:
          "Indices : imparfait, adjectifs, compléments de lieu, verbes d'état.",
      },
      {
        titre: "Le Texte Argumentatif",
        definition:
          "Défend une thèse avec des arguments et des exemples pour convaincre.",
        exemple:
          "\"La lecture est essentielle car elle développe l'esprit critique.\"",
        astuce:
          "Indices : connecteurs logiques (car, donc, en effet), présent de vérité générale.",
      },
      {
        titre: "Le Texte Explicatif",
        definition:
          "Explique un phénomène, donne des informations objectives.",
        exemple:
          "\"L'eau bout à 100°C au niveau de la mer.\"",
        astuce:
          "Indices : présent, ton neutre, vocabulaire technique, pas d'opinion.",
      },
    ],
  },
];

export const getLesson = (id) => lessons.find((l) => l.id === id);
