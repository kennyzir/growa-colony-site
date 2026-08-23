import type { FaqItem } from "@/types/site";
import { monthLabel, siteConfig } from "@/data/site";

export type TopicSection = {
  eyebrow: string;
  title: string;
  body: string;
};

export type TopicCluster = {
  slug: string;
  route: string;
  parentRoute: string;
  parentLabel: string;
  eyebrow: string;
  navTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  demandSignal: string;
  currentAnswer: string;
  verificationBoundary: string;
  sections: TopicSection[];
  faqs: FaqItem[];
  relatedRoutes: Array<{
    href: string;
    label: string;
    description: string;
  }>;
  lastUpdated?: string;
};

// Grow A Colony topic-cluster hubs. The real content lives on the colony-building
// pages; these entries link clusters so the footer and wiki hub read as one
// focused fan resource for THIS game.
export const topicClusters: TopicCluster[] = [
  {
    slug: "wiki",
    route: "/wiki",
    parentRoute: "/",
    parentLabel: "Home",
    eyebrow: "Wiki",
    navTitle: "Grow A Colony Wiki",
    title: "Grow A Colony Wiki",
    metaTitle: `Grow A Colony Wiki — ${monthLabel}`,
    metaDescription: `${siteConfig.gameName} wiki hub for how to play, codes, release date, and updates.`,
    intro: "The focused Grow A Colony fan wiki — how to play, grow your colony, and track the game.",
    demandSignal: "Players search how to play, codes, release date, and updates for Grow A Colony.",
    currentAnswer: "Learn the colony-building loop (gather, build, expand), check verified codes, and track updates.",
    verificationBoundary: "Codes are verified against official sources; gameplay reflects the current build.",
    sections: [
      { eyebrow: "Play", title: "Colony-management loop", body: "As the Queen, grow Workers for food (economy), then raise Majors & Drones (combat). Balance is the core loop." },
      { eyebrow: "Track", title: "Codes & updates", body: "Verified code status (or honest none-yet) plus what changed in recent updates." },
      { eyebrow: "History", title: "Release & growth", body: "Created 31 July 2026; fast early start in the colony-sim niche." }
    ],
    faqs: [
      { q: "What is Grow A Colony about?", a: "A Roblox Animal Sim: play as the Queen of an AI colony, get Workers for food, and raise Majors & Drones to fight as you grow." },
      { q: "Is Grow A Colony a battle game?", a: "No — the focus is colony management and incremental growth, not PvP combat. Check the official page for current modes." },
      { q: "How do I get codes?", a: "We list only verified codes from an official source; if none are confirmed the codes page says so honestly." }
    ],
    relatedRoutes: [
      { href: "/en/how-to-play", label: "How to play", description: "The colony-building loop and first steps." },
      { href: "/en/codes", label: "Codes", description: "Verified reward code status." },
      { href: "/en/release-date", label: "Release date", description: "When Grow A Colony launched." },
      { href: "/en/updates", label: "Updates", description: "What changed in the latest update." }
    ]
  },
  {
    slug: "how-to-play",
    route: "/en/how-to-play",
    parentRoute: "/wiki",
    parentLabel: "Wiki",
    eyebrow: "Play",
    navTitle: "How to Play",
    title: "How to Play Grow A Colony",
    metaTitle: `Grow A Colony How to Play — ${monthLabel}`,
    metaDescription: "How to play Grow A Colony: rule as the Queen, get Workers for food, and raise Majors & Drones to fight.",
    intro: "Start by gathering base resources, build storage/workshop for continuous production, then expand toward higher-value areas.",
    demandSignal: "Players search how to play, what to build first, and how to grow fast.",
    currentAnswer: "As the Queen, grow a Worker food economy, and when the colony sustains itself, raise Majors & Drones for combat.",
    verificationBoundary: "Gameplay reflects the current build; exact numbers are Community-reported unless confirmed in-game.",
    sections: [
      { eyebrow: "First day", title: "The core loop", body: "Know your Queen role → get Workers for food → raise Majors & Drones to fight → balance economy and defense." },
      { eyebrow: "Common pitfalls", title: "What to avoid", body: "Don't blow everything on novelty; production upgrades pay back long-term. Expanding territory drives the mid game." }
    ],
    faqs: [
      { q: "Is it free to play?", a: "Yes, the game is free on Roblox." }
    ],
    relatedRoutes: [
      { href: "/en/release-date", label: "Release date", description: "When it launched." },
      { href: "/en/updates", label: "Updates", description: "What's new." },
      { href: "/en/codes", label: "Codes", description: "Rewards, if any." }
    ]
  },
  {
    slug: "codes",
    route: "/en/codes",
    parentRoute: "/wiki",
    parentLabel: "Wiki",
    eyebrow: "Rewards",
    navTitle: "Codes",
    title: "Grow A Colony Codes",
    metaTitle: `Grow A Colony Codes — ${monthLabel}`,
    metaDescription: "Verified Grow A Colony reward code status, where to look for new codes, and how to redeem.",
    intro: "We list only verified codes from an official source; if none are confirmed, this page says so honestly.",
    demandSignal: "Players search for Grow A Colony codes and whether any are active.",
    currentAnswer: "No confirmed public codes as of the latest refresh; check the official Roblox/YouTube channels for drops.",
    verificationBoundary: "A code is listed only with a dated official source; unverified codes are marked, never presented as active.",
    sections: [
      { eyebrow: "Status", title: "Verified codes", body: "The active list, or an honest empty state." },
      { eyebrow: "Watch", title: "Where codes drop", body: "Official Roblox page and YouTube announcements." }
    ],
    faqs: [
      { q: "Are Grow A Colony codes real?", a: "We only list codes we can date from an official source." }
    ],
    relatedRoutes: [
      { href: "/en/how-to-play", label: "How to play", description: "The core loop." },
      { href: "/en/updates", label: "Updates", description: "What's new." }
    ]
  }
];

export const topicClusterRoutes = topicClusters.map((cluster) => cluster.route);

export function getTopicCluster(slug: string) {
  return topicClusters.find((cluster) => cluster.slug === slug);
}
