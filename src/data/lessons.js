export const lessons = [
  {
    id: "figures-de-style",
    category: "Langue",
    title: "Les Figures de Style",
    icon: "✨",
    description: "Métaphore, comparaison, hyperbole, oxymore, et plus encore.",
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
        exemple: "\"Je meurs de faim.\" / \"Il pleut des cordes.\" / \"Je l'ai dit mille fois.\"",
        astuce: "Si c'est exagéré, c'est une hyperbole. Souvent avec des chiffres excessifs.",
      },
      {
        titre: "La Personnification",
        definition:
          "Attribuer des caractéristiques humaines à un animal, un objet ou une idée abstraite.",
        exemple: "\"Le soleil se couche.\" / \"La mort rôde.\" / \"Le vent hurle.\"",
        astuce:
          "Un objet, un animal ou une idée qui fait une action humaine = personnification.",
      },
      {
        titre: "L'Antithèse",
        definition:
          "Opposition de deux mots ou idées contraires dans une même phrase.",
        exemple: "\"Je vis, je meurs.\" (Louise Labé) / \"Petit homme, grande ambition.\"",
        astuce: "Cherchez les mots opposés dans la même phrase.",
      },
      {
        titre: "L'Anaphore",
        definition:
          "Répétition d'un mot ou groupe de mots au début de plusieurs phrases ou vers successifs.",
        exemple:
          "\"Moi président, je ferai... Moi président, je changerai...\" / \"Paris ! Paris outragé ! Paris brisé !\"",
        astuce: "Même mot au début de phrases successives = anaphore.",
      },
      {
        titre: "La Litote",
        definition: "Dire moins pour suggérer plus. On atténue l'expression pour renforcer l'idée.",
        exemple: "\"Ce n'est pas mauvais.\" (= c'est très bon) / \"Va, je ne te hais point.\" (= je t'aime) — Corneille",
        astuce: "Souvent une double négation qui renforce le sens. Effet inverse de l'euphémisme.",
      },
      {
        titre: "L'Euphémisme",
        definition:
          "Atténuer une réalité dure ou désagréable par une expression plus douce.",
        exemple:
          "\"Il nous a quittés.\" (= il est mort) / \"Il a vécu.\" (= il est mort) / \"Les personnes du troisième âge\" (= les vieux)",
        astuce:
          "On adoucit la réalité pour ne pas choquer. Attention : litote = dire moins pour dire plus ; euphémisme = adoucir la réalité.",
      },
      {
        titre: "L'Oxymore",
        definition:
          "Alliance de deux mots de sens contraire dans un même groupe syntaxique.",
        exemple: "\"Cette obscure clarté\" (Corneille) / \"Un silence assourdissant\" / \"Une douce violence\"",
        astuce: "Deux mots contradictoires CÔTE À CÔTE (pas juste dans la même phrase — sinon c'est une antithèse).",
      },
      {
        titre: "La Métonymie",
        definition:
          "Remplacer un mot par un autre qui a un lien logique avec lui (contenant/contenu, cause/effet, lieu/habitants...).",
        exemple: "\"Boire un verre\" (= le contenu) / \"Lire du Molière\" (= ses œuvres) / \"Tout Paris en parle\" (= les habitants)",
        astuce: "Il y a un lien logique (pas une ressemblance comme la métaphore). Contenant → contenu, auteur → œuvre, lieu → habitants.",
      },
      {
        titre: "La Gradation",
        definition:
          "Succession de mots ou expressions qui progressent en intensité (croissante ou décroissante).",
        exemple: "\"Je suis venu, j'ai vu, j'ai vaincu.\" (César) / \"C'est un roc, c'est un pic, c'est un cap !\" (Cyrano)",
        astuce: "Les termes vont du plus faible au plus fort (ou l'inverse). C'est un crescendo ou un decrescendo.",
      },
      {
        titre: "La Périphrase",
        definition:
          "Remplacer un mot par une expression plus longue qui le décrit ou le caractérise.",
        exemple: "\"La ville lumière\" (= Paris) / \"Le roi des animaux\" (= le lion) / \"L'astre du jour\" (= le soleil)",
        astuce: "On utilise une description au lieu du mot direct. Souvent pour embellir ou éviter la répétition.",
      },
      {
        titre: "L'Énumération",
        definition:
          "Succession de mots ou groupes de mots de même nature grammaticale.",
        exemple: "\"Il aimait les livres, la musique, la peinture et les voyages.\"",
        astuce: "Liste de termes séparés par des virgules ou 'et'. Si les termes progressent en intensité, c'est aussi une gradation.",
      },
      {
        titre: "Le Pléonasme",
        definition:
          "Répétition inutile d'une idée déjà exprimée, pour insister.",
        exemple: "\"Monter en haut\" / \"Descendre en bas\" / \"Je l'ai vu de mes propres yeux.\"",
        astuce: "Redondance = pléonasme. Parfois involontaire (faute), parfois volontaire (effet de style).",
      },
      {
        titre: "L'Allégorie",
        definition:
          "Représentation concrète d'une idée abstraite, souvent à travers un personnage ou une image développée.",
        exemple: "\"La Justice\" représentée par une femme aux yeux bandés tenant une balance. La faucheuse (= la mort).",
        astuce: "C'est une métaphore développée : une idée abstraite prend forme concrète (souvent un personnage).",
      },
    ],
  },
  {
    id: "conjugaison",
    category: "Langue",
    title: "La Conjugaison Essentielle",
    icon: "📝",
    description: "Tous les temps verbaux clés pour l'examen régional.",
    content: [
      {
        titre: "Le Présent de l'indicatif",
        definition:
          "Exprime une action qui se passe maintenant, une vérité générale, une habitude, ou un futur proche.",
        exemple: "\"Je parle\" / \"La Terre tourne autour du Soleil.\" / \"Demain, je pars en voyage.\"",
        astuce:
          "1er groupe: -e, -es, -e, -ons, -ez, -ent | 2ème: -is, -is, -it, -issons, -issez, -issent | 3ème: variable (-s, -s, -t ou -ds, -ds, -d)",
      },
      {
        titre: "L'Imparfait",
        definition:
          "Action passée qui dure, une habitude dans le passé, ou une description. C'est le temps de l'arrière-plan.",
        exemple: "\"Quand j'étais petit, je jouais dans la rue.\" / \"Il faisait beau, les oiseaux chantaient.\"",
        astuce: "Radical du présent (nous) + -ais, -ais, -ait, -ions, -iez, -aient. Ex: nous parl-ons → je parl-ais",
      },
      {
        titre: "Le Passé simple",
        definition:
          "Action passée ponctuelle, terminée, sans lien avec le présent. Temps du premier plan dans un récit littéraire.",
        exemple: "\"Il entra dans la salle et parla.\" / \"Antigone refusa le compromis.\"",
        astuce:
          "1er gr: -ai, -as, -a, -âmes, -âtes, -èrent | 2ème/3ème: -is, -is, -it, -îmes, -îtes, -irent. Très fréquent dans les œuvres au programme !",
      },
      {
        titre: "Le Passé composé",
        definition:
          "Action passée terminée avec un lien avec le présent. Utilisé surtout à l'oral et dans les dialogues.",
        exemple: "\"J'ai mangé.\" / \"Elle est partie ce matin.\"",
        astuce:
          "Auxiliaire avoir ou être au présent + participe passé. Avec 'être' : accord avec le sujet (elle est partie).",
      },
      {
        titre: "Le Plus-que-parfait",
        definition:
          "Action passée antérieure à une autre action passée. C'est le 'passé du passé'.",
        exemple: "\"Quand il était arrivé, elle avait déjà mangé.\" / \"Il avait fini avant que je vienne.\"",
        astuce: "Auxiliaire avoir ou être à l'imparfait + participe passé. Sert pour les retours en arrière (flashbacks).",
      },
      {
        titre: "Le Futur simple",
        definition:
          "Action qui va se produire dans l'avenir. Exprime aussi une promesse, un ordre atténué.",
        exemple: "\"Je partirai demain.\" / \"Tu feras tes devoirs.\" / \"Nous vaincrons.\"",
        astuce: "Infinitif + -ai, -as, -a, -ons, -ez, -ont. Irréguliers importants: j'irai, je serai, j'aurai, je ferai, je verrai.",
      },
      {
        titre: "Le Conditionnel présent",
        definition:
          "Exprime une hypothèse, un souhait, une demande polie, ou une information non confirmée.",
        exemple: "\"Je voudrais un café.\" / \"Si j'avais de l'argent, j'achèterais une voiture.\"",
        astuce: "Radical du futur + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient). Si + imparfait → conditionnel.",
      },
      {
        titre: "Le Subjonctif présent",
        definition:
          "Exprime le souhait, le doute, la nécessité, l'obligation, le sentiment. Toujours après 'que'.",
        exemple: "\"Il faut que tu viennes.\" / \"Je veux qu'il parte.\" / \"Bien qu'il soit malade, il travaille.\"",
        astuce:
          "Après: il faut que, je veux que, bien que, pour que, avant que, à condition que... Radical de 'ils' au présent + -e, -es, -e, -ions, -iez, -ent.",
      },
      {
        titre: "L'Impératif présent",
        definition:
          "Exprime un ordre, un conseil, une interdiction ou une prière. Seulement 3 personnes (tu, nous, vous).",
        exemple: "\"Parle !\" / \"Mangeons !\" / \"Finissez vos devoirs !\" / \"Ne fais pas ça !\"",
        astuce: "Pas de pronom sujet. 1er groupe : pas de 's' à la 2ème personne (parle, mange). 2ème et 3ème groupe : avec 's' (finis, prends).",
      },
      {
        titre: "Le Passé antérieur",
        definition:
          "Action passée immédiatement antérieure à une autre au passé simple. Rare, littéraire.",
        exemple: "\"Quand il eut fini, il sortit.\" / \"Dès qu'elle fut arrivée, la fête commença.\"",
        astuce: "Auxiliaire au passé simple + participe passé. Souvent après : quand, lorsque, dès que, après que.",
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
          "Présentez le sujet de manière générale, posez la problématique et annoncez le plan. Elle comprend 3 étapes : accroche → problématique → annonce du plan.",
        exemple:
          "\"De nos jours, [sujet] fait l'objet d'un vif débat. Certains pensent que... tandis que d'autres estiment que... Qu'en est-il réellement ?\"",
        astuce:
          "Utilisez un fait d'actualité, une citation ou une question pour accrocher le lecteur. Ne donnez jamais votre avis dans l'introduction.",
      },
      {
        titre: "Le Développement — Thèse (Arguments POUR)",
        definition:
          "Présentez les arguments POUR avec des exemples concrets. Chaque paragraphe = 1 argument.",
        exemple:
          "\"D'une part... En effet... Par exemple... De plus... En outre...\"",
        astuce:
          "Structure de chaque argument : 1 idée + 1 explication + 1 exemple concret. Minimum 2 arguments. Utilisez des connecteurs logiques.",
      },
      {
        titre: "Le Développement — Antithèse (Arguments CONTRE)",
        definition:
          "Présentez les arguments CONTRE avec des exemples. Transition avec un connecteur d'opposition.",
        exemple:
          "\"Cependant... Néanmoins... En revanche... Toutefois... Malgré cela...\"",
        astuce: "Même structure : idée + explication + exemple. Commencez avec un connecteur d'opposition fort.",
      },
      {
        titre: "La Conclusion",
        definition:
          "Résumez votre position, donnez votre avis personnel et ouvrez sur une perspective plus large.",
        exemple:
          "\"En définitive... Pour conclure... En somme... Il serait souhaitable que...\"",
        astuce:
          "3 étapes : résumé des arguments → avis personnel → question ouverte ou proposition de solution.",
      },
      {
        titre: "Les Connecteurs à utiliser",
        definition:
          "Les connecteurs logiques structurent vos idées et montrent les relations entre vos arguments.",
        exemple:
          "Addition: de plus, en outre, par ailleurs | Cause: car, en effet, puisque | Conséquence: donc, ainsi, c'est pourquoi | Opposition: cependant, toutefois, en revanche",
        astuce: "Variez les connecteurs — n'utilisez pas toujours 'de plus' ou 'aussi'. Le correcteur apprécie la richesse du vocabulaire.",
      },
      {
        titre: "Les Erreurs à éviter",
        definition:
          "Les fautes courantes qui font perdre des points dans une production écrite.",
        exemple:
          "Ne pas donner d'avis dans l'introduction | Ne pas oublier les exemples | Ne pas écrire en langage familier | Ne pas faire de hors-sujet",
        astuce: "Relisez votre texte 2 fois : une fois pour le sens, une fois pour l'orthographe. Comptez vos lignes (minimum 15-20 lignes).",
      },
      {
        titre: "Sujets fréquents à l'examen",
        definition:
          "Les sujets qui reviennent souvent dans les examens régionaux pour la production écrite.",
        exemple:
          "La technologie et les jeunes | Les réseaux sociaux | La lecture | L'éducation | Le travail des enfants | La violence à l'école | L'émigration | L'environnement",
        astuce: "Préparez 2-3 arguments POUR et 2-3 arguments CONTRE pour chaque sujet fréquent. Vous gagnerez du temps à l'examen.",
      },
    ],
  },
  {
    id: "types-de-texte",
    category: "Langue",
    title: "Les Types de Texte",
    icon: "📚",
    description: "Narratif, descriptif, argumentatif, explicatif, injonctif, dialogué.",
    content: [
      {
        titre: "Le Texte Narratif",
        definition:
          "Raconte une histoire, des événements réels ou fictifs. Présence d'un narrateur qui organise les événements.",
        exemple:
          "\"Il marchait lentement dans la rue quand soudain il entendit un bruit.\"",
        astuce:
          "Indices : passé simple/imparfait, connecteurs temporels (puis, ensuite, soudain, alors), verbes d'action, schéma narratif.",
      },
      {
        titre: "Le Texte Descriptif",
        definition:
          "Décrit un lieu, un personnage, un objet ou une atmosphère. Il fait voir, entendre, sentir.",
        exemple:
          "\"La maison était grande, avec des murs blancs et un jardin fleuri. Une odeur de jasmin flottait dans l'air.\"",
        astuce:
          "Indices : imparfait, adjectifs qualificatifs, compléments de lieu, verbes d'état (être, paraître, sembler), les 5 sens.",
      },
      {
        titre: "Le Texte Argumentatif",
        definition:
          "Défend une thèse (opinion) avec des arguments et des exemples pour convaincre ou persuader le lecteur.",
        exemple:
          "\"La lecture est essentielle car elle développe l'esprit critique. En effet, de nombreuses études prouvent que...\"",
        astuce:
          "Indices : connecteurs logiques (car, donc, en effet, cependant), présent de vérité générale, vocabulaire du jugement, thèse + arguments + exemples.",
      },
      {
        titre: "Le Texte Explicatif (Informatif)",
        definition:
          "Explique un phénomène, donne des informations objectives. Il répond à la question 'pourquoi ?' ou 'comment ?'.",
        exemple:
          "\"L'eau bout à 100°C au niveau de la mer. Ce phénomène s'explique par la pression atmosphérique.\"",
        astuce:
          "Indices : présent de vérité générale, ton neutre et objectif, vocabulaire technique/scientifique, pas d'opinion personnelle.",
      },
      {
        titre: "Le Texte Injonctif (Prescriptif)",
        definition:
          "Donne des ordres, des conseils, des instructions. Il pousse le lecteur à agir.",
        exemple:
          "\"Mélangez les ingrédients. Ajoutez le sel. Laissez cuire 30 minutes.\" / \"Ne fumez pas !\"",
        astuce:
          "Indices : impératif, infinitif, 'il faut que' + subjonctif, 'vous devez', recettes, modes d'emploi, règlements.",
      },
      {
        titre: "Le Texte Dialogué",
        definition:
          "Rapporte les paroles des personnages sous forme de dialogue. Très présent dans le théâtre et les romans.",
        exemple:
          "\"— Où vas-tu ? demanda-t-elle.\n— Je pars, répondit-il d'un ton sec.\"",
        astuce:
          "Indices : tirets (—), guillemets (« »), verbes de parole (dit-il, s'exclama-t-elle), présent de l'énonciation.",
      },
      {
        titre: "Le Texte Poétique",
        definition:
          "Utilise le langage de manière esthétique : rimes, rythme, vers, figures de style. Exprime des sentiments et des émotions.",
        exemple:
          "\"Demain, dès l'aube, à l'heure où blanchit la campagne, / Je partirai.\" (Victor Hugo)",
        astuce:
          "Indices : vers, strophes, rimes (AABB, ABAB, ABBA), figures de style, musicalité, champ lexical des émotions.",
      },
      {
        titre: "Comment identifier un type de texte ?",
        definition:
          "Méthode pour identifier rapidement le type de texte dans un examen.",
        exemple:
          "1. Regardez le but du texte (raconter ? décrire ? convaincre ? expliquer ? ordonner ?)\n2. Repérez les temps verbaux dominants\n3. Cherchez les connecteurs (temporels → narratif, logiques → argumentatif)\n4. Identifiez le vocabulaire (adjectifs → descriptif, termes techniques → explicatif)",
        astuce: "Un texte peut mélanger plusieurs types ! Un roman peut être à la fois narratif et descriptif. Identifiez le type DOMINANT.",
      },
    ],
  },
  {
    id: "analyse-texte",
    category: "Méthodologie",
    title: "L'Analyse de Texte",
    icon: "🔍",
    description: "Méthodologie pour analyser un extrait littéraire à l'examen.",
    content: [
      {
        titre: "Étape 1 : Situer le texte",
        definition:
          "Identifiez l'auteur, l'œuvre, le genre et le contexte du passage. Placez l'extrait dans l'œuvre.",
        exemple:
          "\"Ce texte est extrait de 'La Boîte à Merveilles' d'Ahmed Sefrioui, publié en 1954. C'est un roman autobiographique. L'extrait se situe au chapitre...\"",
        astuce: "Apprenez les informations essentielles sur chaque œuvre : auteur, date, genre, résumé. C'est toujours la première question.",
      },
      {
        titre: "Étape 2 : Le champ lexical",
        definition:
          "Repérez les mots qui appartiennent au même thème (champ lexical). Cela révèle le(s) thème(s) du texte.",
        exemple:
          "Champ lexical de la tristesse : larmes, pleurer, chagrin, sombre, douleur | Champ lexical de la nature : arbre, fleur, soleil, vent, campagne",
        astuce: "Soulignez les mots importants et regroupez-les par thème. Nommez le champ lexical trouvé.",
      },
      {
        titre: "Étape 3 : Les figures de style",
        definition:
          "Identifiez les figures de style et expliquez leur effet sur le sens du texte.",
        exemple:
          "\"L'auteur utilise une métaphore ('cet homme est un lion') pour montrer la force du personnage. L'hyperbole ('mille fois') insiste sur...\"",
        astuce: "Ne vous contentez pas de NOMMER la figure. Expliquez toujours son EFFET : pourquoi l'auteur l'utilise-t-il ? Que veut-il montrer ?",
      },
      {
        titre: "Étape 4 : Le type de texte et la narration",
        definition:
          "Identifiez le type de texte (narratif, descriptif, argumentatif...) et le point de vue narratif.",
        exemple:
          "Focalisation interne (je) : le narrateur raconte de l'intérieur | Focalisation externe : le narrateur observe de l'extérieur | Focalisation zéro (omniscient) : le narrateur sait tout",
        astuce: "Regardez les pronoms (je = interne, il = externe ou omniscient) et les verbes de pensée/sentiment.",
      },
      {
        titre: "Étape 5 : Rédiger la réponse",
        definition:
          "Structurez votre réponse avec : affirmation → justification → citation → explication.",
        exemple:
          "\"L'auteur exprime la solitude du narrateur. En effet, le champ lexical de l'isolement ('seul', 'silence', 'vide') montre que le personnage est coupé du monde.\"",
        astuce: "Toujours citer le texte entre guillemets pour justifier. Sans citation = réponse incomplète.",
      },
    ],
  },
];

export const getLesson = (id) => lessons.find((l) => l.id === id);
