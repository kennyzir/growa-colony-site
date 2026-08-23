import type { Metadata } from "next";
import Link from "next/link";
import { monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { VerificationBox } from "@/components/ui/VerificationBox";
import { AdsterraArticleBottom, AdsterraArticleTop, AdsterraArticleMid } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides — Play & Grow · ${monthLabel}`,
  description: `Grow A Colony guides: how to play, grow your colony, and track updates and codes.`,
  alternates: { canonical: `${siteConfig.domain}/guides` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <FaqJsonLd items={[
        { q: "What is the fastest way to start in Grow A Colony?", a: "Enter the game, gather base resources (wood/leaves), build a first structure, and expand tunnels — the how-to-play guide walks through the first day." },
        { q: "What should a beginner build first?", a: "Start with resource gathering and a first storage/workshop so your colony produces continuously; then expand toward higher-value resources." },
        { q: "Are there active codes?", a: "We only list verified codes from an official source. If none are confirmed, the codes page says so honestly." }
      ]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <VerificationBox />
      <PageIntro eyebrow="Grow A Colony · Guides" title="Grow A Colony Guides" description="Focused how-to guides for Grow A Colony: the colony-building loop, beginner progression, tracking updates, and codes. Every guide carries its source and claim state." />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader eyebrow="Play" title="First steps: your first session" copy="Your first session in Grow A Colony is an incremental loop: enter the game, gather base resources, build your first structure, and expand tunnels. The early goal is to turn resources into continuous production so your colony sustains itself. The how-to-play guide walks the whole first day step by step, and the codes page shows whether any reward codes are currently active." />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/en/how-to-play" className="content-card"><strong>How to play</strong><p className="mt-1 text-sm text-white/60">Gather, build, expand, upgrade — the core loop.</p></Link>
          <Link href="/en/codes" className="content-card"><strong>Redeem codes</strong><p className="mt-1 text-sm text-white/60">Verified reward code status — or an honest none-yet.</p></Link>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Grow" title="Grow your colony" copy="Growth in Grow A Colony is driven by production. Build storage and workshops early, then expand tunnels toward higher-value resources. Upgrade production before spending on novelty — that compound growth is what turns a small nest into a thriving base." />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/en/how-to-play" className="content-card"><strong>Progression route</strong><p className="mt-1 text-sm text-white/60">A beginner path from a small nest to a growing colony.</p></Link>
          <Link href="/en/release-date" className="content-card"><strong>Release date & history</strong><p className="mt-1 text-sm text-white/60">When it launched (31 July 2026) and its early growth.</p></Link>
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
        <SectionHeader eyebrow="Where to go next" title="Explore the wiki" copy="The wiki hub ties everything together — what the game is, how the colony loop works, timing facts, and our honest sourcing policy. Use it as your map of the whole resource." />
        <div className="mt-4 grid gap-3">
          <Link href="/wiki" className="row-link"><span><strong>Wiki hub</strong><small>The full map: what Grow A Colony is, how to play, codes, and updates.</small></span><span aria-hidden="true">-&gt;</span></Link>
          <Link href="/sources" className="row-link"><span><strong>Source status</strong><small>Our ledger of what's verified and when for each claim.</small></span><span aria-hidden="true">-&gt;</span></Link>
        </div>
      </section>

      <AdsterraArticleBottom />
    </main>
  );
}
