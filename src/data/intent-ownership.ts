// Intent Ownership — WHICH page owns WHICH intent (single source of truth).
// The "Child Intent Owners → Internal Link Graph" spine of Homepage-First.
// Methodology: roblox-seo-site-sop-v2/references/homepage-first-methodology.md §8.

export type HomepageMode = "primary" | "direct" | "summary" | "status" | "link-only" | "excluded";

export type IntentOwnership = {
  intent: string;
  titleEn: string;
  titleEs: string;
  mode: HomepageMode;
  owner: string;
};

export const mainEngine = {
  questionEn: "Grow workers (food) first, or fighters (Majors/Drones) first?",
  questionEs: "¿Criar primero trabajadores (comida) o soldados (Majors/Drones)?",
  anchorEn: "the colony's food-vs-fighters order",
  anchorEs: "el orden comida-vs-soldados de la colonia",
  owner: "/",
};

export const intentOwnership: IntentOwnership[] = [
  { intent: "game-entity",        titleEn: "What Grow A Colony is",        titleEs: "Qué es Grow A Colony",        mode: "primary", owner: "/" },
  { intent: "game-wiki",          titleEn: "Grow A Colony wiki hub",       titleEs: "Wiki de Grow A Colony",      mode: "primary", owner: "/" },
  { intent: "colony-growth-decision", titleEn: "What to grow first",       titleEs: "Qué criar primero",            mode: "primary", owner: "/" },

  { intent: "codes",              titleEn: "Is there a working code",      titleEs: "¿Hay un código activo?",       mode: "status",  owner: "/codes/" },
  { intent: "how-to-play",        titleEn: "How to grow the colony",       titleEs: "Cómo crecer la colonia",       mode: "summary", owner: "/how-to-play/" },
  { intent: "release-date",       titleEn: "When did the game launch",     titleEs: "Cuándo salió el juego",        mode: "summary", owner: "/release-date/" },

  { intent: "complete-codes-table",  titleEn: "The full codes table",      titleEs: "La tabla completa de códigos", mode: "excluded", owner: "/codes/" },
  { intent: "colony-economy-strategy", titleEn: "How to grow the colony efficiently", titleEs: "Cómo crecer la colonia con eficiencia", mode: "link-only", owner: "/guides/" },
  { intent: "update-log",         titleEn: "What changed recently",        titleEs: "Qué cambió hace poco",          mode: "link-only", owner: "/updates/" },
];

export function getIntent(owner: string): IntentOwnership | undefined {
  return intentOwnership.find((o) => o.owner === owner);
}
