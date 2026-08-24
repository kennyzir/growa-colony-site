// Homepage Contract — Grow A Colony homepage is a designed search asset.
// Source of truth: roblox-seo-site-sop-v2/references/homepage-first-methodology.md
export const homepageContract = {
  pageRole: "game-hub",
  gameArchetype: "colony-sim",

  primaryPlayerJob:
    "Decide the colony's first-hour growth order — workers (food economy) before fighters (Majors/Drones) — so new players don't starve the colony early.",
  primaryPlayerJobEs:
    "Decidir el orden de crecimiento de la colonia — trabajadores (economía de comida) antes que soldados (Majors/Drones) — para no dejar sin comer a la colonia al principio.",

  problemState:
    "New players rush to build Majors & Drones for fighting and neglect Workers, so the colony can't feed itself and stalls.",
  problemStateEs:
    "Los nuevos se lanzan a criar Majors y Drones para pelear y descuidan a los trabajadores, así la colonia no puede alimentarse y se estanca.",

  // Route-First: only 3 official sentences + 4 castes → no fake calculator, a decision route
  layoutVariant: "route-first",

  engine: {
    type: "first-hour-route",
    mode: "full",
    canonicalIntentOwner: "/",
    selectionReasons: [
      "Official description defines exactly 3 castes (Workers=food, Majors+Drones=fighting) but no numbers — a calculator would fabricate",
      "The colony's core decision is economy (food) vs military (defense), the most common early mistake is building fighters before food",
      "The decision order is structurable and reusable (route/checklist), with no in-game guidance",
    ],
  },

  intentOwnership: {
    rootOwned: ["game-entity", "game-wiki", "colony-growth-decision"],
    directSummary: [
      { intent: "codes", mode: "status", owner: "/codes/" },
      { intent: "how-to-play", mode: "summary", owner: "/how-to-play/" },
      { intent: "release-date", mode: "summary", owner: "/release-date/" },
    ],
    childOwned: [
      { intent: "complete-codes-table", owner: "/codes/" },
      { intent: "colony-economy-strategy", owner: "/guides/" },
      { intent: "update-log", owner: "/updates/" },
    ],
    forbiddenFullBlocks: ["complete-codes-table", "complete-progression-walkthrough"],
  },

  requiredModules: [
    "hero", "main-engine", "critical-answers", "core-loop",
    "task-hubs", "deep-differentiator", "guide-map",
  ],

  budget: {
    primaryPlayerJob: 1,
    mainEngine: 1,
    criticalAnswers: { min: 2, max: 3 },
    coreLoop: 1,
    deepDifferentiator: 1,
    taskHubs: { min: 4, max: 6 },
    representativeEntities: { min: 3, max: 5 },
    guideMap: 1,
  },

  firstHourRoute: [
    { step: 1, title: "Grow Workers first for food", href: "/en/how-to-play", why: "Workers gather food — the colony's engine. Without food you can't sustain anything else." },
    { step: 2, title: "Feed the colony before you fight", href: "/en/how-to-play", why: "A starving colony can't support Majors or Drones; economy comes before military." },
    { step: 3, title: "Add Majors for defense", href: "/guides", why: "Once food is stable, Majors are your heavy defense against threats and territory." },
    { step: 4, title: "Add Drones as your second fighting caste", href: "/guides", why: "Drones round out the combat force; both castes are the colony's muscle." },
  ],

  hubPlan: [
    { label: "Start", target: "/en/how-to-play", playerState: "I just joined", nextDecision: "What to build first" },
    { label: "Grow the colony", target: "/guides", playerState: "I want a stronger colony", nextDecision: "Food or fighters first" },
    { label: "Redeem", target: "/en/codes", playerState: "I want free rewards", nextDecision: "Which code works" },
    { label: "Stay current", target: "/en/updates", playerState: "I don't want to miss changes", nextDecision: "What changed recently" },
  ],
};
