import type { Metadata } from "next";
import Link from "next/link";
import { monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { VerificationBox } from "@/components/ui/VerificationBox";
import { gameGenre, gameCreator, gameEntities, colonySystems } from "@/data/game-db";
import { AdsterraArticleBottom, AdsterraArticleTop, AdsterraArticleMid } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki — Rule Your Colony · ${monthLabel}`,
  description: `A focused fan wiki for Grow A Colony: rule as the Queen, grow your Workers, raise Majors & Drones, and track codes, updates, and history — with honest sourcing.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <FaqJsonLd items={[
        { q: "What is Grow A Colony?", a: `A ${gameGenre} on Roblox by ${gameCreator}: you play as the Queen and rule an AI colony. The official description says to get Workers for food and Majors & Drones for fighting.` },
        { q: "Is it a combat game?", a: "It combines colony management with caste combat — you grow a Worker economy for food and raise Majors/Drones to fight. It is not a shooter or a tunnel-building sim first." },
        { q: "What are Workers, Majors, and Drones?", a: "Workers gather food for the colony, and Majors & Drones are the fighting castes. This split comes straight from the official description." },
        { q: "How do I get codes?", a: "We list only codes we can verify from an official source. If none are confirmed, the codes page says so honestly." },
        { q: "When did Grow A Colony launch?", a: "Grow A Colony was created 31 July 2026 per the official Roblox API. See the release date page for details." }
      ]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <VerificationBox />
      <PageIntro eyebrow="Grow A Colony · Wiki" title="Grow A Colony Wiki Explorer" description={`A focused fan wiki for ${siteConfig.gameName}: what it is (a ${gameGenre} by ${gameCreator} where you rule as the Queen), how to play, the Working/Major/Drone colony castes, and how to track codes and updates. This is an unofficial fan resource: every piece of info carries its source and claim state.`} />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader eyebrow="What it is" title="A colony sim where you rule as the Queen" copy={`Grow A Colony is a ${gameGenre} on Roblox by ${gameCreator}. The core fantasy comes from the official description: "be the queen and rule over your own AI colony." You command an AI colony — you don't act alone, you manage it. The colony is organised into castes, each with a job: Workers gather food, Majors & Drones fight.`} />
        <p className="mt-4 rounded-lg border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/75">It is not a shooter: the focus is managing your colony and growing it over time. As a recent game (released 31 July 2026) it is changing fast, and this wiki updates as changes are confirmed rather than guessing patch notes.</p>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="The colony" title="Your colony's castes" copy={`The official description frames the colony system as: ${colonySystems.map(s=>s.name).join(", ")}. Each caste has a distinct colony job:`} />
        <div className="mt-4 grid gap-3 text-sm text-white/75">
          {gameEntities.map((e) => (
            <div key={e.slug} className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{e.name}</strong> <span className="text-white/50">({e.colonyJob})</span>
              <p className="mt-1 text-white/65">{e.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Play" title="Play: learn the core loop" copy="Your first session is a management loop: as the Queen you steer the colony — get Workers for food to feed it, then raise Majors & Drones as your fighting force. Get the full first-day route below." />
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link href="/en/how-to-play" className="content-card"><strong>How to play</strong><p className="mt-1 text-sm text-white/60">The Queen loop: Workers economy, Majors/Drones combat.</p></Link>
          <Link href="/en/release-date" className="content-card"><strong>Release date & history</strong><p className="mt-1 text-sm text-white/60">When it launched, its genre, and its early popularity.</p></Link>
          <Link href="/guides" className="content-card"><strong>Guides</strong><p className="mt-1 text-sm text-white/60">Rule your colony, grow castes, track updates.</p></Link>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Fresh" title="Track: codes, updates, history" copy="As a young, rapidly-changing game, keeping current matters. The codes page reports only verified rewards, the updates page tracks real changes, and the release date page anchors the game's history." />
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link href="/en/codes" className="content-card"><strong>Codes</strong><p className="mt-1 text-sm text-white/60">Verified reward code status, or an honest 'none confirmed yet'.</p></Link>
          <Link href="/en/updates" className="content-card"><strong>Updates</strong><p className="mt-1 text-sm text-white/60">What changed in the latest Grow A Colony update.</p></Link>
          <Link href="/en/release-date" className="content-card"><strong>Release date</strong><p className="mt-1 text-sm text-white/60">Created 31 July 2026 — the game's official data.</p></Link>
        </div>
      </section>

      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader eyebrow="How we verify" title="Honest sourcing" copy="This is an unofficial fan resource. Grow A Colony and its developers remain the source of record — we never invent a code, mechanic, or update. Facts above trace to the official Roblox description (queen + Workers/Majors/Drones), the Roblox API, and dated creator videos." />
        <p className="mt-4 text-sm leading-7 text-white/70">Changes only count if they come from the official Roblox game page or a dated source. Anything we cannot date or source is labeled as unconfirmed rather than guessed. The source status page is our ledger.</p>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Sources" title="Source status & more" copy="Explore the rest of the wiki — the source ledger, and quick access to every page." />
        <div className="mt-4 grid gap-3">
          <Link href="/sources" className="row-link"><span><strong>Source status page</strong><small>What we verified and when for each claim on this wiki.</small></span><span aria-hidden="true">-&gt;</span></Link>
          <Link href="/guides" className="row-link"><span><strong>Guides hub</strong><small>Rule your colony, grow castes, track updates.</small></span><span aria-hidden="true">-&gt;</span></Link>
          <Link href="/en/how-to-play" className="row-link"><span><strong>How to play</strong><small>The Queen loop and first-day progression.</small></span><span aria-hidden="true">-&gt;</span></Link>
        </div>
      </section>

      <AdsterraArticleBottom />
    </main>
  );
}

