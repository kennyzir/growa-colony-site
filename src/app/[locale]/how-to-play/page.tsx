import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/locales";
import { monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { VerificationBox } from "@/components/ui/VerificationBox";
import { MainEngineBacklink } from "@/components/ui/MainEngineBacklink";
import { PlayQuickRules, VideoGuide, DataTable } from "@/components/ui/EvomonBlocks";
import { PerPageLinks } from "@/components/ui/PerPageLinks";
import { gameEntities, colonySystems, gameGenre, gameCreator } from "@/data/game-db";
import { AdsterraArticleTop, AdsterraArticleMid } from "@/components/ads";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const base = siteConfig.domain;
  const path = locale === "es" ? "/es/how-to-play" : "/en/how-to-play";
  return {
    title: locale === "es" ? `Cómo jugar Grow A Colony — empezar tu colonia · ${monthLabel}` : `How to Play Grow A Colony — Grow Your Colony · ${monthLabel}`,
    description: locale === "es"
      ? "Guía para empezar en Grow A Colony: recolecta recursos, cava túneles, construye y haz crecer tu colonia. Pasos claros."
      : "Getting started guide for Grow A Colony: rule as the Queen, get Workers for food, and raise Majors & Drones to fight. Clear steps.",
    alternates: { canonical: `${base}${path}/`, languages: { en: `${base}/en/how-to-play/`, es: `${base}/es/how-to-play/`, "x-default": `${base}/en/how-to-play/` } }
  };
}

export default async function HowToPlayPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale !== "en" && locale !== "es") notFound();
  const isEs = locale === "es";
  const prefix = locale === "es" ? "/es" : "/en";
  const T = {
    crumb: isEs ? "Cómo jugar" : "How to Play",
    introTitle: isEs ? "Cómo jugar Grow A Colony" : "How to play Grow A Colony",
    introDesc: isEs
      ? `Grow A Colony es un simulador de animales en Roblox: juegas como la Reina de una colonia de IA y la gobiernas. Según la descripción oficial (${gameCreator}), se necesitan Workers para la comida y Majors + Drones para luchar. Esta guía de inicio cubre el primer día: entender tu rol de Reina, hacer crecer la fuerza de Workers y levantar un escuadrón de combate.`
      : `Grow A Colony is a Roblox animal sim: you play as the Queen of an AI colony and rule it. Per the official description (${gameCreator}), you get Workers for food and Majors + Drones for fighting. This getting-started guide covers your first day: understanding your Queen role, growing your Worker force, and raising a combat squad.`,
    section1Eyebrow: isEs ? "Lo esencial" : "The essentials",
    section1T: isEs ? "Qué es Grow A Colony" : "What Grow A Colony is",
    section1B: isEs ? [
        "Es un simulador de colonia: el núcleo es recolectar recursos y usarlos para expandir tu nido y tu producción.",
        "Es incremental: cada estructura y mejora hace que tu colonia crezca más rápido, desbloqueo tras desbloqueo.",
        "No es un juego de combate PvP en primer lugar: es gestión y crecimiento. Verifica los modos actuales en la página oficial.",
      ] : [
        "It's a colony simulator: the core is gathering resources and spending them to expand your nest and production.",
        "It's incremental: each structure and upgrade makes your colony grow faster, unlock on unlock.",
        "It's not a PvP-combat-first game: it's management and growth. Check the current modes on the official page.",
      ],
    section2Eyebrow: isEs ? "Primeros pasos" : "First steps",
    section2T: isEs ? "Tu primer día" : "Your first day",
    section2Intro: isEs
      ? "El objetivo temprano es sencillo: consigue recursos y conviértelos en producción para que tu colonia se sostenga sola."
      : "The early goal is simple: get resources and convert them into production so your colony sustains itself.",
    section2Steps: isEs ? [
      ["Entra al juego", "Entra al mundo de Grow A Colony desde la página oficial de Roblox. Unirse a un servidor con pocos jugadores suele ser más tranquilo."],
      ["Entiende tu rol de Reina", "No eres una unidad: gobiernas una colonia de IA. Tu trabajo es decidir qué caste crecer, no luchar tú misma."],
      ["Consigue Workers para la comida", "La descripción oficial es clara: los Workers recolectan comida para alimentar la colonia. Es la economía del juego."],
      ["Levanta Majors y Drones para luchar", "Cuando la colonia se sostenga, invierte en el caste de combate: Majors y Drones son tu fuerza de combate."],
      ["Equilibra economía y defensa", "Demasiados Workers = hambre de comida sin defensa; demasiado combate = sin economía. El equilibrio es el juego."],
    ] : [
      ["Join the game", "Enter the Grow A Colony world from the official Roblox page. Joining a lower-player-count server is usually calmer."],
      ["Know your Queen role", "You aren't a unit: you rule an AI colony. Your job is deciding which caste to grow, not fighting alone."],
      ["Get Workers for food", "The official description is explicit: Workers collect food to feed the colony. That is the economy."],
      ["Raise Majors & Drones to fight", "Once the colony sustains itself, invest in the combat caste — Majors & Drones are your fighting force."],
      ["Balance economy and defense", "Too many Workers = no defense; too much combat = no economy. Balance is the game."],
    ],
    econEyebrow: isEs ? "Economía y combate" : "Economy & combat",
    econT: isEs ? "Cómo funcionan economía y defensa" : "How the economy and defense work",
    econB: isEs
      ? "El núcleo de Grow A Colony, según la descripción oficial, es gestionar la colonia de IA en dos frentes: la economía (Workers → comida) y el combate (Majors + Drones). No inventamos números: la tabla resume el concepto verificado, no cifras exactas."
      : "The core of Grow A Colony, per the official description, is managing the AI colony on two fronts: the economy (Workers → food) and combat (Majors + Drones). We don't invent numbers: the table summarizes the verified concept, not exact figures.",
    econRows: isEs ? [
      ["Workers = economía", "Gestionan la comida y el crecimiento de la colonia. Más Workers = colonia que se sostiene."],
      ["Majors + Drones = combate", "El caste ofensivo. La descripción oficial los lista juntos para luchar."],
      ["La Reina = decisión", "Tú decides el balance entre Workers y combatientes. Ése es el bucle de decisión."],
    ] : [
      ["Workers = economy", "Handle food and colony growth. More Workers = a colony that sustains itself."],
      ["Majors + Drones = combat", "The offensive caste. The official description lists them together for fighting."],
      ["The Queen = decision", "You choose the balance between Workers and fighters. That's the decision loop."],
    ],
    econNote: isEs
      ? "No hay una fuente oficial con fecha que publique cifras exactas (costos de caste, producción por Worker, poder de combate). Cuando un creador o la actualización oficial los confirme, esta sección se actualizará con números verificados. Hasta entonces, no inventamos números."
      : "There is no dated official source publishing exact figures (caste costs, per-Worker production, combat power). When a developer or the official update confirms them, this section will be updated with verified numbers. Until then, we don't invent numbers.",
    pitfallsEyebrow: isEs ? "Errores comunes" : "Common mistakes",
    pitfallsTitle: isEs ? "Qué evitar" : "What to avoid",
    pit1t: isEs ? "Gastar todo en novedades" : "Spending everything on novelty",
    pit1b: isEs ? "Las mejoras de producción dan un retorno a largo plazo mucho mayor que comprar cada estructura nueva de inmediato." : "Production upgrades pay back long-term far more than buying every new structure right away.",
    pit2t: isEs ? "No expandir territorio" : "Not expanding territory",
    pit2b: isEs ? "Sin túneles nuevos no llegas a recursos de mayor valor que aceleran el juego medio." : "Without new tunnels you never reach the higher-value resources that speed up the mid game.",
    pit3t: isEs ? "Códigos no verificados" : "Unverified codes",
    pit3b: isEs ? "Usa solo códigos que confirmes en la página de códigos; los no verificados pueden estar expirados o ser falsos." : "Only use codes you confirm on the codes page; unverified ones may be expired or fake.",
    faqEyebrow: isEs ? "Preguntas" : "FAQ",
    faq1q: isEs ? "¿Es gratis jugar?" : "Is it free to play?",
    faq1a: isEs ? "Sí, el juego es gratis en Roblox. Los códigos dan recompensas opcionales, pero no se requieren para jugar." : "Yes, the game is free on Roblox. Codes give optional rewards but aren't required to play.",
    faq2q: isEs ? "¿Hay combate PvP?" : "Is there PvP combat?",
    faq2a: isEs ? "El foco está en la construcción y gestión de colonia. Verifica la página oficial para los modos actuales, que pueden cambiar entre actualizaciones." : "The focus is colony building and management. Check the official page for current modes, which can change between updates.",
    nextEyebrow: isEs ? "Sigue leyendo" : "Keep reading",
    nextTitle: isEs ? "Continúa desde aquí" : "Continue from here",
  };

  const qrRules = isEs
    ? [`Juegas como la Reina — gobierna la colonia de IA.`, `Consigue Workers para la comida: alimenta a la colonia.`, `Levanta Majors + Drones para luchar.`, `Equilibra economía (Workers) y defensa (combate).`]
    : [`You play as the Queen — rule the AI colony.`, `Get Workers for food: feed the colony.`, `Raise Majors + Drones for fighting.`, `Balance economy (Workers) and defense (combat).`];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: isEs ? "Inicio" : "Home", href: `${prefix}/` }, { name: T.crumb, href: `${prefix}/how-to-play` }]} />
      <FaqJsonLd items={[{ q: T.faq1q, a: T.faq1a }, { q: T.faq2q, a: T.faq2a }]} />
      <HowToJsonLd name={T.introTitle} description={T.introDesc} steps={T.section2Steps.slice(0, 3).map((s) => ({ name: s[0], text: s[1] }))} />
      <Breadcrumbs items={[{ label: T.crumb, href: `${prefix}/how-to-play` }]} />
      <PageIntro eyebrow="Grow A Colony · How to Play" title={T.introTitle} description={T.introDesc} />
      <PlayQuickRules label={isEs ? "En 30 segundos" : "In 30 seconds"} rules={qrRules} />
      {/* Creator evidence — real colony-play videos (yt-content-miner, yt-dlp-verified) */}
      <VideoGuide
        eyebrow={isEs ? "Creadores" : "Creators"}
        title={isEs ? "Así se juega de verdad" : "Real colony gameplay"}
        description={isEs
          ? "Estos videos de creadores muestran el bucle real de construir una colonia de hormigas — no solo la descripción oficial. El embed es verificado (yt-dlp) y el texto del juego viene de ver el video, no de adivinarlo."
          : "These creator videos show the real ant-colony building loop — beyond the official description. Embed is yt-dlp-verified and gameplay text is written against the video, not guessed from titles."}
        embedId="gjxGgBoI_Ok"
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader eyebrow={T.section1Eyebrow} title={T.section1T} />
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/75 list-disc pl-5">
          {T.section1B.map((p: string) => <li key={p}>{p}</li>)}
        </ul>
      </section>

      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader eyebrow={T.section2Eyebrow} title={T.section2T} copy={T.section2Intro} />
        <ol className="mt-4 grid gap-3 text-sm text-white/75">
          {T.section2Steps.map((s: string[], i: number) => (
            <li key={i} className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{i + 1}. {s[0]}</strong>
              <p className="mt-1 text-white/65">{s[1]}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Colony roster — verified entities from the official description (queen + Workers/Majors/Drones) */}
      <section className="mt-10">
        <DataTable
          eyebrow={isEs ? "Colonia" : "Colony"}
          title={isEs ? "Quiénes hay en tu colonia" : "Your colony's castes"}
          description={isEs
            ? `Estas unidades provienen de la descripción oficial de Roblox (${gameCreator}, ${gameGenre}): la Reina, los Workers (comida) y los Majors/Drones (lucha). Sin inventar números.`
            : `These units come from the official Roblox description (${gameCreator}, ${gameGenre}): the Queen, Workers (food), and Majors & Drones (fighting). No invented numbers.`}
          columns={[isEs ? "Unidad" : "Unit", isEs ? "Rol" : "Role", isEs ? "Misión en la colonia" : "Colony job"]}
          rows={gameEntities.map((e) => [e.name, e.role, e.colonyJob])}
        />
      </section>

      {/* Colony economy & combat concepts — official description backed, no invented numbers */}
      <section className="mt-10">
        <SectionHeader eyebrow={T.econEyebrow} title={T.econT} copy={T.econB} />
        <div className="mt-4 grid gap-3 text-sm text-white/75">
          {T.econRows.map((r: string[], i: number) => (
            <div key={i} className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{r[0]}</strong>
              <p className="mt-1 text-white/65">{r[1]}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-lg border border-dashed border-white/15 bg-black/10 p-4 text-xs leading-6 text-white/50">
          {T.econNote}
        </p>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow={T.pitfallsEyebrow} title={T.pitfallsTitle} />
        <div className="mt-4 grid gap-3 text-sm text-white/75">
          <p><strong className="text-white">{T.pit1t}</strong> {T.pit1b}</p>
          <p><strong className="text-white">{T.pit2t}</strong> {T.pit2b}</p>
          <p><strong className="text-white">{T.pit3t}</strong> {T.pit3b}</p>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow={T.faqEyebrow} title={T.faq1q} />
        <div className="mt-4 grid gap-3 text-sm text-white/75">
          <p><strong className="text-white">{T.faq1q}</strong> {T.faq1a}</p>
          <p><strong className="text-white">{T.faq2q}</strong> {T.faq2a}</p>
        </div>
      </section>

      {/* Keep reading — contextual routes (seo-eeat-audit §D) */}
      <PerPageLinks
        eyebrow={T.nextEyebrow}
        title={T.nextTitle}
        groups={[
          {
            title: isEs ? "Siguiente" : "Next",
            links: [
              { href: `${prefix}/release-date`, label: isEs ? "Fecha de lanzamiento" : "Release date", hint: isEs ? "Cuándo salió el juego." : "When the game launched." },
              { href: `${prefix}/updates`, label: isEs ? "Actualizaciones" : "Updates", hint: isEs ? "Novidades del juego." : "What's new in the game." },
            ],
          },
          {
            title: isEs ? "Recursos" : "Resources",
            links: [
              { href: `${prefix}/codes`, label: isEs ? "Códigos" : "Codes", hint: isEs ? "Recompensas confirmadas." : "Confirmed rewards." },
              { href: `/wiki`, label: isEs ? "Explorador Wiki" : "Wiki Explorer", hint: isEs ? "Todo sobre Grow A Colony." : "Everything about Grow A Colony." },
            ],
          },
        ]}
      />
      <MainEngineBacklink isEs={isEs} />
      <VerificationBox />
    </main>
  );
}
