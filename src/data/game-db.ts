// Game DB — single source of truth for Grow A Colony entities & systems.
// Facts sourced from the official Roblox game API + official description
// (games.roblox.com/v1/games?universeIds=10601273666, 2026-08-23).
// claimState: Verified (official API/desc) | Community-reported | Unknown.
// Never invent a number; every fact carries its source.

export type ClaimState = "Verified" | "Community-reported" | "Unknown";

export type GameEntity = {
  slug: string;
  name: string;
  role: string;                 // what it / the unit does in the colony
  colonyJob: string;            // which colony need it serves
  claimState: ClaimState;
  source: string;
  blurb: string;                // 1-2 sentence, player-facing
};

// Official description (verified, sebcaddy1, 2026-08-23):
// "Ever wanted to be the queen and rule over your own AI colony?
//  Get Workers for food, and Majors & Drones for fighting"
// So the colony has a QUEEN (the player), WORKERS (food), MAJORS + DRONES (combat).
export const gameEntities: GameEntity[] = [
  {
    slug: "queen",
    name: "The Queen",
    role: "Your character — the colony's ruler.",
    colonyJob: "Ruling / management",
    claimState: "Verified",
    source: "Official Roblox description (sebcaddy1, 2026-08-23)",
    blurb: "In [TERMITE] Grow A Colony you play as the queen. You command an AI colony of workers and fighters, so your job is managing the colony's population and direction rather than acting alone on the battlefield.",
  },
  {
    slug: "workers",
    name: "Workers",
    role: "Collect food for the colony.",
    colonyJob: "Food / resources",
    claimState: "Verified",
    source: "Official Roblox description (sebcaddy1, 2026-08-23)",
    blurb: "Workers are the colony's gatherers. The official description says you get Workers for food — they are the economy of the colony, and feeding them is the engine of growth.",
  },
  {
    slug: "majors",
    name: "Majors",
    role: "Heavy combat unit.",
    colonyJob: "Fighting / defense",
    claimState: "Verified",
    source: "Official Roblox description (sebcaddy1, 2026-08-23)",
    blurb: "Majors are a fighting caste. The official description lists Majors & Drones for fighting, so building a Major squad is the colony's answer to threats and territory.",
  },
  {
    slug: "drones",
    name: "Drones",
    role: "Combat unit.",
    colonyJob: "Fighting / defense",
    claimState: "Verified",
    source: "Official Roblox description (sebcaddy1, 2026-08-23)",
    blurb: "Drones are a second fighting caste alongside Majors. In real termite colonies, majors defend the nest while drones' roles vary — in-game both are the colony's muscle.",
  },
];

export const colonySystems: Array<{ name: string; whatItIs: string; claimState: ClaimState; source: string }> = [
  { name: "Queen management", whatItIs: "You rule an AI colony as the queen — your decisions steer workers and fighters.", claimState: "Verified", source: "Official Roblox description" },
  { name: "Worker economy", whatItIs: "Workers gather food, which you spend to grow and sustain the colony.", claimState: "Verified", source: "Official Roblox description" },
  { name: "Combat castes", whatItIs: "Majors & Drones form the colony's fighting force against threats.", claimState: "Verified", source: "Official Roblox description" },
];

export const gameGenre = "Animal Sim";   // official genre_l2, games API 2026-08-23
export const gameCreator = "sebcaddy1";
export const gameCreatedIso = "2026-07-31";
export const gameUpdatedIso = "2026-08-23";
export const gamePlaceId = "103154273080028";
export const gameUniverseId = "10601273666";
export const gameVisits = 305663;        // games API 2026-08-23
export const gamePlaying = 928;          // games API 2026-08-23

export function getGameEntity(slug: string) {
  return gameEntities.find((e) => e.slug === slug);
}
