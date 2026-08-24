import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, PlayerJourneyStage, SiteConfig } from "@/types/site";
import { gameConfig } from "@/data/game.config";
import { gameGenre, gameVisits, gamePlaying } from "@/data/game-db";

export const checkedDate = "2026-08-23";
export const monthLabel = "August 2026";

export const siteConfig: SiteConfig = {
  name: gameConfig.name,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: "Grow A Colony codes, how-to-play, beginner progression, release date, and updates — a focused Roblox Grow A Colony fan wiki.",
  valueProposition: "Grow A Colony is a Roblox Animal Sim where you rule as the Queen of an AI colony: get Workers for food and Majors & Drones for fighting, balancing economy and defense as you grow. Here you can check active codes, learn the core gameplay loop, follow a beginner progression route, and track updates.",
  shortDisclosure: `${gameConfig.name} is an unofficial fan-made resource. Roblox and the Grow A Colony dev team remain the source of record.`,
  lastUpdated: checkedDate,
  freshnessLabel: "codes, guide, and update status refreshed on August 23, 2026",
  keywords: [
    "Grow A Colony", "Grow A Colony codes", "Grow A Colony Roblox", "Grow A Colony wiki",
    "Grow A Colony how to play", "Grow A Colony guide", "Grow A Colony beginner",
    "Grow A Colony release date", "Grow A Colony update", "Grow A Colony progression",
    "Grow A Colony codes 2026", "Grow A Colony terimite", "Grow A Colony colony",
    "Grow A Colony how to grow", "Grow A Colony game", "Grow A Colony discord"
  ],
  navGroups: [
    {
      label: "Codes", href: "/en/codes", items: [
        { label: "Codes", href: "/en/codes", description: "Grow A Colony codes status — working codes, where new ones drop, and how to redeem." },
        { label: "Sources", href: "/sources", description: "Where code and guide claims were checked." }
      ]
    },
    {
      label: "Play", href: "/en/how-to-play", items: [
        { label: "How to Play", href: "/en/how-to-play", description: "The colony-building loop: gather, expand, upgrade." },
        { label: "Progression", href: "/en/how-to-play", description: "Beginner route from a small nest to a thriving colony." },
        { label: "Updates", href: "/en/updates", description: "Grow A Colony update log and what changed." },
        { label: "Release Date", href: "/en/release-date", description: "When Grow A Colony launched and its history." }
      ]
    },
    {
      label: "Wiki", href: "/wiki", items: [
        { label: "Full Wiki", href: "/wiki", description: "The focused fan wiki — codes, gameplay, progression." },
        { label: "Guide Hub", href: "/guides", description: "The colony-building guides in one place." }
      ]
    },
    {
      label: "About", href: "/about", items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and claim-state policy." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/en/codes", label: "Check codes" },
  { href: "/en/how-to-play", label: "How to play" },
  { href: "/en/updates", label: "Latest updates" },
  { href: "/wiki", label: "Full wiki" }
];

export const heroMetrics: HeroMetric[] = [
  { value: `${(gamePlaying / 1000).toFixed(1)}K`, label: "Playing now", note: "Official Roblox API, live" },
  { value: `${(gameVisits / 1000).toFixed(0)}K`, label: "Total visits", note: "Official Roblox API visits" },
  { value: gameGenre, label: "Genre", note: "Official Roblox genre — Animal Sim" }
];

export const activeCodes: GameCode[] = [
  { code: "NONE VERIFIED", reward: "No confirmed public codes yet — see codes page for status", status: "Needs check", addedDate: "2026-08-23" }
];

export const expiredCodes: GameCode[] = [];

export const toolCards: LinkCard[] = [
  {
    title: "How to Play",
    href: "/en/how-to-play",
    description: "The core loop — rule as the Queen, get Workers for food, and raise Majors & Drones to fight.",
    miniLabel: "Play"
  },
  {
    title: "Progression Route",
    href: "/en/how-to-play",
    description: "A beginner route from a small nest to a growing colony.",
    miniLabel: "Guide"
  },
  {
    title: "Updates",
    href: "/en/updates",
    description: "What changed in the latest Grow A Colony update.",
    miniLabel: "Fresh"
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "How to Play",
    href: "/en/how-to-play",
    description: "Rule as the Queen: get Workers for food and learn the colony loop step by step.",
    miniLabel: "Guide"
  },
  {
    title: "Beginner Progression",
    href: "/en/how-to-play",
    description: "The first-session route: what to build and upgrade early.",
    miniLabel: "Beginner"
  },
  {
    title: "Codes",
    href: "/en/codes",
    description: "Active code status and where new codes drop.",
    miniLabel: "Codes"
  },
  {
    title: "Release Date",
    href: "/en/release-date",
    description: "When Grow A Colony launched and how it's grown.",
    miniLabel: "History"
  }
];

// Player-lifecycle routing (colony-building): a visitor is starting a colony,
// growing it, or tracking the game. Each stage = a question + next-query chain.
export const playerJourney: PlayerJourneyStage[] = [
  {
    number: "1",
    title: "Redeem & Start",
    question: "Just started?",
    answer: "Redeem the latest codes if any are live, then follow the beginner loop to build your first nest.",
    href: "/en/codes",
    links: [
      { label: "Codes status", href: "/en/codes", description: "Working codes and where new ones drop." },
      { label: "How to Play", href: "/en/how-to-play", description: "The colony-building loop and first steps." }
    ]
  },
  {
    number: "2",
    title: "Build the Colony",
    question: "How do I grow my colony?",
    answer: "Rule as the Queen of an AI colony: get Workers for food and Majors & Drones for fighting, balancing economy and defense as you grow.",
    href: "/en/how-to-play",
    links: [
      { label: "How to Play", href: "/en/how-to-play", description: "Gather, expand, upgrade — the core loop." },
      { label: "Progression", href: "/en/how-to-play", description: "A beginner route to grow fast." }
    ]
  },
  {
    number: "3",
    title: "Track the Game",
    question: "What's new and when did it start?",
    answer: "Check the update log for the latest changes and the release date page for the game's history.",
    href: "/en/updates",
    links: [
      { label: "Updates", href: "/en/updates", description: "What changed in the latest Grow A Colony update." },
      { label: "Release Date", href: "/en/release-date", description: "When Grow A Colony launched." }
    ]
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Codes",
    href: "/en/codes",
    description: "Active code status, where codes drop, and how to redeem.",
    miniLabel: "Codes"
  },
  {
    title: "How to Play",
    href: "/en/how-to-play",
    description: "The colony-building loop and beginner progression.",
    miniLabel: "Play"
  },
  {
    title: "Updates",
    href: "/en/updates",
    description: "The Grow A Colony update log and what changed.",
    miniLabel: "Fresh"
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox Game Page",
    href: gameConfig.dataSources.officialGameUrl,
    description: "Play Grow A Colony on Roblox and see the official description.",
    miniLabel: "Official"
  },
  {
    title: "Official YouTube",
    href: "https://www.youtube.com/results?search_query=roblox+grow+a+colony",
    description: "Where official trailers and updates appear.",
    miniLabel: "Official"
  },
  {
    title: "Source Status Page",
    href: "/sources",
    description: "An honest ledger of what we verify and when.",
    miniLabel: "Sources"
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Fan-made, claim-stated",
    body: "Grow A Colony is the source of record. We label everything Verified or Community-reported and never invent a code, mechanic, or upgrade step."
  },
  {
    title: "Codes verified against official drops",
    body: "We list only codes we can date from an official source, and mark codes honestly as Unknown when none are confirmed rather than inventing fake ones."
  },
  {
    title: "Gameplay from the current build",
    body: "Gameplay steps reflect the current build (game updated August 23, 2026). Exact numbers can change between updates, so stats are Community-reported unless confirmed in-game."
  }
];

export const videoGuides: LinkCard[] = [];

export const faqs: Record<"home" | "codes", FaqItem[]> = {
  home: [
    { q: "What is Grow A Colony?", a: "Grow A Colony is a Roblox Animal Sim where you play as the Queen of an AI colony, gathering Workers for food and raising Majors & Drones to grow your colony." },
    { q: "Are there Grow A Colony codes?", a: "We list only codes we can verify from an official source. If none are confirmed, the codes page says so honestly rather than inventing working codes." },
    { q: "Do I need to know anything before playing?", a: "The how-to-play page covers the core loop and a beginner route, so you start with a plan for how to grow your colony." }
  ],
  codes: [
    { q: "Are Grow A Colony codes real?", a: "We only list codes we can date from an official source. Unverified codes are marked as Unknown, never presented as active." },
    { q: "Why is there no code listed?", a: "Colony sims often publish rewards late or through specific channels. If no code is confirmed, the page says so honestly and tracks where new ones would drop." },
    { q: "Is the Discord link official?", a: "We do not publish an invite unless we verify it from an official source — a fake invite is worse than no link." }
  ]
};
