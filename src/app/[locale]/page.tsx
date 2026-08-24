import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/locales";
import { activeCodes, faqs, officialLinks, siteConfig } from "@/data/site";
import { homepageContract } from "@/data/homepage-contract";
import { gameGenre, gameCreator, gameEntities, gameVisits, gamePlaying, gameUpdatedIso } from "@/data/game-db";
import { VideoGameJsonLd, FaqJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { SectionHeader } from "@/components/ui/content";
import { DecisionHero } from "@/components/home/DecisionHero";
import { ColonyStarterDecision } from "@/components/tools/ColonyStarterDecision";
import { AdsterraArticleTop, AdsterraArticleMid } from "@/components/ads";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const base = siteConfig.domain;
  if (locale === "es") {
    return {
      title: "Grow A Colony: Cómo Crecer tu Colonia, Códigos y Novedades",
      description: "Grow A Colony: cría trabajadores para comida, Majors y Drones para pelear — más códigos, fecha y novedades.",
      alternates: {
        canonical: `${base}/es/`,
        languages: { "en-US": `${base}/en/`, es: `${base}/es/`, "x-default": `${base}/en/` }
      }
    };
  }
  return {
    title: `${siteConfig.gameName} Wiki, Codes & How to Play`,
    description: siteConfig.description,
    alternates: {
      canonical: `${base}/en/`,
      languages: { "en-US": `${base}/en/`, es: `${base}/es/`, "x-default": `${base}/en/` }
    }
  };
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale !== "en" && locale !== "es") notFound();
  const prefix = locale === "es" ? "/es" : "/en";
  const isEs = locale === "es";
  const localHref = (href: string) => (isEs && href.startsWith("/en") ? href.replace("/en", "/es") : href);

  const job = isEs ? homepageContract.primaryPlayerJobEs : homepageContract.primaryPlayerJob;

  return (
    <main>
      <WebSiteJsonLd />
      <VideoGameJsonLd />
      <FaqJsonLd items={faqs.home} />

      <section data-home-block-id="main-engine">
        <DecisionHero isEs={isEs} />
        {/* ★ THE MAIN ENGINE — a working decision tool, not a sentence.
            Player answers 3 questions about their own colony state and gets a
            concrete "do this next". No invented numbers; grounded in the
            official mechanism (Workers=food, Majors/Drones=fighting). */}
        <div className="mx-auto -mt-6 max-w-5xl px-4 pb-14">
          <ColonyStarterDecision isEs={isEs} />
        </div>
      </section>

      {/* Live game data — entity identity + freshness (single source of truth) */}
      <section className="border-y border-white/10 bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:grid-cols-3">
          <div className="bg-white/[0.03] px-4 py-4">
            <div className="text-2xl font-bold text-[color:var(--accent)]">{(gamePlaying / 1000).toFixed(1)}K</div>
            <div className="mt-1 text-sm font-semibold text-white">{isEs ? "Jugando ahora" : "Playing now"}</div>
            <div className="mt-1 text-sm text-white/60">{isEs ? "API oficial de Roblox, en vivo" : "Official Roblox API, live"}</div>
          </div>
          <div className="bg-white/[0.03] px-4 py-4">
            <div className="text-2xl font-bold text-[color:var(--accent)]">{(gameVisits / 1000).toFixed(0)}K</div>
            <div className="mt-1 text-sm font-semibold text-white">{isEs ? "Visitas totales" : "Total visits"}</div>
            <div className="mt-1 text-sm text-white/60">{isEs ? "API oficial de Roblox" : "Official Roblox API visits"}</div>
          </div>
          <div className="bg-white/[0.03] px-4 py-4">
            <div className="text-2xl font-bold text-[color:var(--accent)]">{gameGenre}</div>
            <div className="mt-1 text-sm font-semibold text-white">{isEs ? "Género" : "Genre"}</div>
            <div className="mt-1 text-sm text-white/60">{isEs ? "Simulación de colonia" : "Colony sim"}</div>
          </div>
        </div>
      </section>

      {/* ★ Deep differentiator — the food-before-fighters insight (the page's unique value) */}
      <section className="bg-white/[0.025]" data-home-block-id="deep-differentiator">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <SectionHeader eyebrow={isEs ? "La decisión clave" : "The one decision"} title={isEs ? "Comida antes que guerra" : "Food before war"} copy={job} />
          <p className="mt-4 rounded-lg border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/75">
            {isEs
              ? "La mayoría de guías repiten la descripción oficial. Lo que importa de verdad es el orden: una colonia que solo cría soldados se muere de hambre. Los trabajadores son la base, los soldados la punta."
              : "Most guides repeat the official description. What actually matters is the order: a colony that only breeds fighters starves. Workers are the base, fighters are the tip."}
          </p>
        </div>
      </section>

      <AdsterraArticleTop />

      {/* ★ Critical answers — 2-3 directly usable answers */}
      <section className="bg-white/[0.025]" data-home-block-id="critical-answers">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <SectionHeader eyebrow={isEs ? "Rápido" : "Quick answers"} title={isEs ? "Las 3 cosas que todo nuevo jugador pregunta" : "The 3 things every new player asks"} />
          <div className="mt-6 grid gap-3 text-sm text-white/75">
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{isEs ? "¿Para qué sirven los trabajadores?" : "What are workers for?"}</strong>
              <p className="mt-1 text-white/65">{isEs ? "Comida. La descripción oficial lo dice: 'consigue Workers para comida'. Son la economía de la colonia — sin comida no crece nada." : "Food. The official description says it: 'get Workers for food.' They're the colony's economy — without food nothing grows."}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{isEs ? "¿Majors o Drones?" : "Majors or Drones?"}</strong>
              <p className="mt-1 text-white/65">{isEs ? "Ambos son para pelear. Los Majors son la defensa pesada, los Drones un segundo grupo de combate. Críalos después de tener la comida asegurada." : "Both are for fighting. Majors are heavy defense, Drones a second combat caste. Grow them after food is secure."}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{isEs ? "¿Hay códigos activos?" : "Are there active codes?"}</strong>
              <p className="mt-1 text-white/65">
                {activeCodes.length === 0
                  ? (isEs ? "Ninguno confirmado ahora mismo." : "None confirmed right now.")
                  : (isEs ? <>La comunidad reporta <code className="font-mono text-[color:var(--accent)]">{activeCodes.map(c => c.code).join(", ")}</code> (sin confirmar).</> : <>The community reports <code className="font-mono text-[color:var(--accent)]">{activeCodes.map(c => c.code).join(", ")}</code> (unconfirmed).</>)}
                {" "}<Link href={localHref("/en/codes")} className="font-semibold text-[color:var(--accent)] hover:underline">{isEs ? "Ver códigos" : "See codes"}</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ★ Core loop — the whole game in one pass */}
      <section className="mx-auto max-w-7xl px-4 py-12" data-home-block-id="core-loop">
        <SectionHeader eyebrow={isEs ? "El bucle" : "The loop"} title={isEs ? "Cómo funciona Grow A Colony" : "How Grow A Colony works"} copy={isEs
          ? "La descripción oficial lo resume: sé la reina 👑 → consigue Workers para comida 🍞 → consigue Majors y Drones para pelear ⚔️. Tú mandas una colonia de IA, no peleas solo."
          : "The official description sums it up: be the queen 👑 → get Workers for food 🍞 → get Majors & Drones for fighting ⚔️. You command an AI colony, you don't fight alone."} />
        <div className="mt-4 grid gap-3 text-sm text-white/75">
          {gameEntities.map((e) => (
            <div key={e.slug} className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{e.name}</strong> <span className="text-white/50">— {e.colonyJob}</span>
              <p className="mt-1 text-white/65">{e.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <AdsterraArticleMid />

      {/* ★ Task hubs — funnel into the intent matrix by player state */}
      <section className="mx-auto max-w-7xl px-4 py-12" data-home-block-id="task-hubs">
        <SectionHeader eyebrow={isEs ? "Tu estado" : "Where are you?"} title={isEs ? "Elige tu situación" : "Pick your situation"} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {homepageContract.hubPlan.map((h) => (
            <Link key={h.target} href={localHref(h.target)} className="rounded-lg border border-white/10 bg-black/20 p-5 hover:border-white/25">
              <span className="mini-label">{h.playerState}</span>
              <strong className="mt-2 block text-lg text-white">{h.label}</strong>
              <p className="mt-1 text-sm text-white/65">{h.nextDecision}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ★ Guide map — the full sitemap of this game's answers */}
      <section className="bg-white/[0.025]" data-home-block-id="guide-map">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <SectionHeader eyebrow={isEs ? "Mapa" : "Map"} title={isEs ? "Todo lo que cubre esta wiki" : "Everything this wiki covers"} />
          <div className="mt-6 grid gap-3">
            {officialLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link key={link.href} href={localHref(link.href)} className="row-link">
                  <span><strong>{link.title}</strong><small>{link.description}</small></span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="row-link" target="_blank" rel="noreferrer">
                  <span><strong>{link.title}</strong><small>{link.description}</small></span>
                  <span aria-hidden="true">-&gt;</span>
                </a>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
