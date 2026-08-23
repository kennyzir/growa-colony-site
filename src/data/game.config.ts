import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Grow A Colony",
  slug: "grow-a-colony",
  domain: "https://growa-colony.wiki",
  theme: {
    primaryColor: "#A16207",     // termite/amber earth
    accentColor: "#65A30D",      // colony green accent
    surfaceColor: "#0C0F0A",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Honey",               // colony resource currency pattern
    abbr: ""
  },
  features: {
    hasCalculator: false,
    hasTierList: false,          // no confirmed entity meta yet — defer default
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "official Roblox publish + YouTube search sweep",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/103154273080028/Grow-A-Colony",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra",
    usesRuntimeConfig: true
  }
};
