import type { Metadata } from "next";
import Link from "next/link";
import { monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { VerificationBox } from "@/components/ui/VerificationBox";
import { AdsterraArticleBottom, AdsterraArticleTop, AdsterraArticleMid } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki — Colony Building Hub · ${monthLabel}`,
  description: `A focused fan wiki for Grow A Colony: how to play, beginner progression, codes, release date, and updates — with honest sourcing.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <FaqJsonLd items={[
        { q: "What is Grow A Colony?", a: "A Roblox colony-building game: you play as an insect colony, gather resources, dig tunnels, build structures, and grow from a small nest into a thriving base." },
        { q: "Is it a combat game?", a: "No — the focus is colony management and incremental growth, not PvP combat. Check the official page for current modes." },
        { q: "How do I get codes?", a: "We list only codes we can verify from an official source. If none are confirmed, the codes page says so honestly." },
        { q: "When did Grow A Colony launch?", a: "Grow A Colony was created 31 July 2026 per the official Roblox API. See the release date page for details." }
      ]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <VerificationBox />
      <PageIntro eyebrow="Grow A Colony · Wiki" title="Grow A Colony Wiki Explorer" description="A focused fan wiki for a colony-building game on Roblox. Here you learn what Grow A Colony is, how to play, how to grow your colony, and track updates. This is an unofficial fan resource: every piece of info carries its source and claim state." />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader eyebrow="What it is" title="What is Grow A Colony?" copy="Grow A Colony is a Roblox colony-building game. You start with a small nest and grow it into a thriving colony by gathering resources, digging tunnels, building structures, and unlocking upgrades. It is an incremental management-and-growth game — the loop is gather, build, expand, repeat." />
        <p className="mt-4 rounded-lg border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/75">It is not a shooter or a PvP-first game: the focus is managing your colony and growing it over time. As a recent game (released 31 July 2026) it is changing fast, and this wiki updates as changes are confirmed rather than guessing patch notes.</p>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Play" title="Play: learn the core loop" copy="The early goal is simple: gather resources and spend them on production so your colony sustains itself. Start by collecting wood and leaves, build your first structure, then expand tunnels toward higher-value resources." />
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link href="/en/how-to-play" className="content-card"><strong>How to play</strong><p className="mt-1 text-sm text-white/60">The colony-building loop: gather, build, expand, upgrade.</p></Link>
          <Link href="/en/how-to-play" className="content-card"><strong>First day</strong><p className="mt-1 text-sm text-white/60">A beginner route from a small nest to a growing colony.</p></Link>
          <Link href="/en/release-date" className="content-card"><strong>Release date & history</strong><p className="mt-1 text-sm text-white/60">When it launched, its genre, and its early popularity.</p></Link>
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
        <SectionHeader eyebrow="How we verify" title="Honest sourcing" copy="This is an unofficial fan resource. Grow A Colony and its developers remain the source of record — we never invent a code, mechanic, or update. Changes only count if they come from the official Roblox game page or a dated source." />
        <p className="mt-4 text-sm leading-7 text-white/70">Codes are marked only with a dated official drop. Gameplay steps reflect the current build. Anything we cannot date or source is labeled as unconfirmed rather than guessed. The source status page is our ledger.</p>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Sources" title="Source status & more" copy="Explore the rest of the wiki — the source ledger, guides, and quick access to every page." />
        <div className="mt-4 grid gap-3">
          <Link href="/sources" className="row-link"><span><strong>Source status page</strong><small>What we verified and when for each claim on this wiki.</small></span><span aria-hidden="true">-&gt;</span></Link>
          <Link href="/guides" className="row-link"><span><strong>Guides hub</strong><small>Colony-building guides in one place.</small></span><span aria-hidden="true">-&gt;</span></Link>
          <Link href="/en/how-to-play" className="row-link"><span><strong>How to play</strong><small>The core loop and beginner progression.</small></span><span aria-hidden="true">-&gt;</span></Link>
        </div>
      </section>

      <AdsterraArticleBottom />
    </main>
  );
}
