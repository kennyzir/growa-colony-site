import type { Metadata } from "next";
import Link from "next/link";
import { monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { VerificationBox } from "@/components/ui/VerificationBox";
import { gameGenre, gameCreator, gameEntities } from "@/data/game-db";
import { AdsterraArticleBottom, AdsterraArticleTop, AdsterraArticleMid } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides — Rule Your Colony · ${monthLabel}`,
  description: `Grow A Colony guides: rule as the Queen, grow your Workers, raise Majors & Drones, and track codes and updates.`,
  alternates: { canonical: `${siteConfig.domain}/guides` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <FaqJsonLd items={[
        { q: "What is the fastest way to start in Grow A Colony?", a: "Enter the game as the Queen. The official description says to get Workers for food and Majors/Drones for fighting — grow a Worker force for economy, then raise a combat squad. The how-to-play guide walks the first day." },
        { q: "What should a new player grow first?", a: "Workers. The official description frames Workers as the colony's food-gathering economy, so growing your Worker force is the fastest path to a self-sustaining colony before you invest in combat castes." },
        { q: "What are Majors and Drones for?", a: "Per the official description, Majors & Drones are for fighting. They are the colony's combat castes — your answer to threats and territory expansion." },
        { q: "Are there active codes?", a: "We only list verified codes from an official source. If none are confirmed, the codes page says so honestly." }
      ]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <VerificationBox />
      <PageIntro eyebrow="Grow A Colony · Guides" title="Grow A Colony Guides" description={`Focused guides for ${siteConfig.gameName}: what it is (a ${gameGenre} by ${gameCreator}), how to rule your colony as the Queen, grow Workers, and raise Majors & Drones. Every guide carries its source and claim state.`} />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader eyebrow="First" title="Rule your colony as the Queen" copy="You are not a single fighter — you are the Queen of an AI colony. The official description sets the loop: get Workers for food, and Majors/Drones for fighting. Your role is management: steer the colony's economy (Workers) and its combat force (Majors/Drones). Start your first session by understanding this split, then focus on feeding the colony so it can grow." />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/en/how-to-play" className="content-card"><strong>How to play</strong><p className="mt-1 text-sm text-white/60">The full first-day loop: Queen role, Worker economy, combat castes.</p></Link>
          <Link href="/en/codes" className="content-card"><strong>Redeem codes</strong><p className="mt-1 text-sm text-white/60">Verified reward code status — or an honest none-yet.</p></Link>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Grow" title="Grow your colony, caste by caste" copy={`The colony is made of castes, each with a colony job. Build the economy first (Workers gather food), then raise the fighting force once the colony sustains itself. Here's the roster from the official description:`} />
        <div className="mt-4 grid gap-3 text-sm text-white/75">
          {gameEntities.map((e) => (
            <div key={e.slug} className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{e.name}</strong> <span className="text-white/50">({e.colonyJob})</span>
              <p className="mt-1 text-white/65">{e.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader eyebrow="Track" title="Keep current with updates & codes" copy="As a recent, fast-changing game, staying current matters. The updates page tracks real changes, and the codes page reports only verified rewards — never invented code strings." />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/en/updates" className="content-card"><strong>Updates</strong><p className="mt-1 text-sm text-white/60">What changed in the latest Grow A Colony update.</p></Link>
          <Link href="/en/codes" className="content-card"><strong>Codes</strong><p className="mt-1 text-sm text-white/60">Verified reward code status, or an honest empty state.</p></Link>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Where to go next" title="Explore the wiki" copy="The wiki hub ties everything together — what the game is, the Queen/Worker/Major/Drone colony system, codes, and our honest sourcing policy. Use it as your map of the whole resource." />
        <div className="mt-4 grid gap-3">
          <Link href="/wiki" className="row-link"><span><strong>Wiki hub</strong><small>The full map: what Grow A Colony is, how to rule, codes, and updates.</small></span><span aria-hidden="true">-&gt;</span></Link>
          <Link href="/sources" className="row-link"><span><strong>Source status</strong><small>Our ledger of what's verified and when for each claim.</small></span><span aria-hidden="true">-&gt;</span></Link>
          <Link href="/en/release-date" className="row-link"><span><strong>Release date</strong><small>When Grow A Colony launched and its early growth.</small></span><span aria-hidden="true">-&gt;</span></Link>
        </div>
      </section>

      <AdsterraArticleBottom />
    </main>
  );
}
