import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/locales";
import { monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { VerificationBox } from "@/components/ui/VerificationBox";
import { gameGenre, gameCreator, gameVisits, gamePlaying, gameCreatedIso, gameUpdatedIso, colonySystems } from "@/data/game-db";
import { AdsterraArticleTop, AdsterraArticleMid } from "@/components/ads";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const base = siteConfig.domain;
  const path = locale === "es" ? "/es/release-date" : "/en/release-date";
  return {
    title: locale === "es" ? `Fecha de lanzamiento de Grow A Colony · ${monthLabel}` : `Grow A Colony Release Date & History · ${monthLabel}`,
    description: locale === "es"
      ? "Cuándo salió Grow A Colony en Roblox, el género oficial, la popularidad y su historia breve."
      : "When Grow A Colony launched on Roblox, the official genre, popularity, and a short history.",
    alternates: { canonical: `${base}${path}/`, languages: { en: `${base}/en/release-date/`, es: `${base}/es/release-date/`, "x-default": `${base}/en/release-date/` } }
  };
}

export default async function ReleaseDatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale !== "en" && locale !== "es") notFound();
  const isEs = locale === "es";
  const prefix = locale === "es" ? "/es" : "/en";
  const T = {
    crumb: isEs ? "Fecha de lanzamiento" : "Release date",
    introTitle: isEs ? "Fecha de lanzamiento de Grow A Colony" : "Grow A Colony release date",
    introDesc: isEs
      ? "Estos son los datos clave de Grow A Colony según la página oficial de Roblox: cuándo se lanzó, su género, cuán popular es y su historia breve. Usamos la información oficial del juego (API de Roblox) como fuente principal."
      : "Here are the key Grow A Colony facts per the official Roblox page: when it launched, its genre, how popular it is, and a short history. We use the official game data (Roblox API) as the primary source.",
    boxEyebrow: isEs ? "Datos oficiales" : "Official data",
    boxTitle: isEs ? "Fecha, género y popularidad" : "Date, genre, and popularity",
    boxItems: isEs ? [
      ["Fecha de creación", `31 de julio de 2026 (${gameCreatedIso}, API de Roblox).`],
      ["Género oficial", `${gameGenre} (según la API de Roblox, genre_l2).`],
      ["Creador", gameCreator],
      ["Popularidad", `~${(gameVisits/1000).toFixed(0)}K visitas, ~${gamePlaying} jugando (${gameUpdatedIso}).`],
      ["Plataforma", "Roblox (juego dentro de la plataforma)."]
    ] : [
      ["Created date", `31 July 2026 (${gameCreatedIso}, Roblox API).`],
      ["Official genre", `${gameGenre} (games API, genre_l2).`],
      ["Creator", gameCreator],
      ["Popularity", `~${(gameVisits/1000).toFixed(0)}K visits, ~${gamePlaying} playing (${gameUpdatedIso}).`],
      ["Platform", "Roblox (a game inside the platform)."]
    ],
    whatEyebrow: isEs ? "Qué es" : "What it is",
    whatT: isEs ? "¿Qué tipo de juego es?" : "What kind of game is it?",
    whatB: isEs
      ? `Grow A Colony es un ${gameGenre} de Roblox: juegas como la Reina y gobiernas una colonia de IA. La descripción oficial de ${gameCreator} lo deja claro: "¿Quieres ser la reina y gobernar tu propia colonia de IA? Consigue Obreras para la comida y Súper + Zánganos para luchar." Así que el juego es gestión de colonia + combate de castas, no un shooter ni un juego de construcción de túneles en primer lugar.`
      : `Grow A Colony is a ${gameGenre} on Roblox: you play as the Queen and rule an AI colony. The official description from ${gameCreator} says it plainly: "Ever wanted to be the queen and rule over your own AI colony? Get Workers for food, and Majors & Drones for fighting." So the game is colony management + caste combat, not a shooter and not primarily a tunnel-building sim.`,
    roleEyebrow: isEs ? "Referencia del juego" : "Release reference",
    roleT: isEs ? "Qué confirma la fecha" : "What the date confirms",
    roleB: isEs
      ? `La fecha de creación (31 julio 2026) es el ancla de la API oficial. Como es un juego muy nuevo, esta fecha responde a "cuándo salió Grow A Colony". El juego ya pasó de ~${(gameVisits/1000).toFixed(0)}K visitas y ~${gamePlaying} jugando — un arranque rápido para un ${gameGenre} nuevo. Como referencia, la descripción oficial lista así el sistema de colonia: ${colonySystems.map(s=>s.name).join(", ")}. Todo esto puede cambiar con cada actualización, así que esta wiki se mantiene al día.`
      : `The created date (31 July 2026) is the official API anchor. Because this is a very new game, that date answers "when did Grow A Colony come out." It has already climbed to ~${(gameVisits/1000).toFixed(0)}K visits and ~${gamePlaying} playing — a fast start for a new ${gameGenre}. For reference, the official description frames the colony system as: ${colonySystems.map(s=>s.name).join(", ")}. All of this can shift with each update, so this wiki stays current.`,
    ageEyebrow: isEs ? "Historia" : "History",
    ageT: isEs ? "Un juego nuevo y en crecimiento" : "A new, growing game",
    ageB: isEs
      ? `Lanzado el ${gameCreatedIso}, Grow A Colony es un juego muy reciente en Roblox. Ya acumula ~${(gameVisits/1000).toFixed(0)}K visitas en sus primeras semanas, un arranque rápido para un ${gameGenre}. Al ser un juego joven, cambia rápido: cada actualización puede ajustar las castas y la economía, y esta wiki se actualiza conforme se confirman cambios.`
      : `Released ${gameCreatedIso}, Grow A Colony is a very recent Roblox game. It has already climbed to ~${(gameVisits/1000).toFixed(0)}K visits in its first weeks, a fast start for a ${gameGenre}. As a young game it changes fast: each update may adjust the castes and economy, and this wiki updates as changes are confirmed.`,
    relatedEyebrow: isEs ? "Contexto" : "Context",
    relatedT: isEs ? "¿A qué se parece?" : "What is it similar to?",
    relatedB: isEs
      ? "Grow A Colony encaja en el nicho de 'colony sim' de Roblox, similar en espíritu a otros juegos de construcción/gestión incremental (tipo 'grow a <algo>'): recolectas, construyes y creces. No es un juego de combate competitivo: el foco está en la gestión de tu colonia y su crecimiento. Verifica la página oficial para el contenido exacto actual."
      : "Grow A Colony fits Roblox's 'colony sim' niche, similar in spirit to other incremental building/management games (a 'grow a <something>' style): you gather, build, and grow. It is not a competitive combat game: the focus is managing your colony and its growth. Check the official page for the exact current content.",
    faqEyebrow: isEs ? "Preguntas frecuentes" : "FAQ",
    faq1q: isEs ? "¿Necesito Robux para jugar?" : "Do I need Robux to play?",
    faq1a: isEs ? "No, el juego es gratis en Roblox. Las mejoras pueden comprarse, pero el bucle de construcción es gratis." : "No, the game is free on Roblox. Upgrades may be purchasable, but the building loop is free.",
    faq2q: isEs ? "¿La fecha de creación significa que no se actualiza?" : "Does the created date mean it does not get updates?",
    faq2a: isEs ? "No. Created es cuándo se lanzó; el juego recibe ajustes con el tiempo (consulta la página de actualizaciones)." : "No. Created is when it launched; the game receives tweaks over time (see the updates page).",
    faq3q: isEs ? "¿Es apto para niños?" : "Is it kid-friendly?",
    faq3a: isEs ? "Es un juego de construcción de colonia en Roblox, una plataforma diseñada para menores. Como cualquier comunidad abierta, la supervisión varía. Como cualquier comunidad abierta, la supervisión varía." : "It is a colony-building game on Roblox, a platform designed for kids. As with any open community, supervision varies. As with any open community, supervision varies.",
    nextEyebrow: isEs ? "Explora" : "Explore",
    nextTitle: isEs ? "Sigue explorando" : "Keep exploring",
    howLink: isEs ? "Cómo jugar" : "How to play",
    howDesc: isEs ? "Guía de inicio." : "Getting-started guide.",
    tutLink: isEs ? "Cómo jugar" : "How to play",
    tutDesc: isEs ? "Pasos del editor." : "Editor steps.",
    upLink: isEs ? "Actualizaciones" : "Updates",
    upDesc: isEs ? "Qué cambió." : "What has changed."
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: isEs ? "Inicio" : "Home", href: `${prefix}/` }, { name: T.crumb, href: `${prefix}/release-date` }]} />
      <FaqJsonLd items={[{ q: T.faq1q, a: T.faq1a }, { q: T.faq2q, a: T.faq2a }, { q: T.faq3q, a: T.faq3a }]} />
      <Breadcrumbs items={[{ label: T.crumb, href: `${prefix}/release-date` }]} />
      <VerificationBox />
      <PageIntro eyebrow="Grow A Colony · Release Date" title={T.introTitle} description={T.introDesc} />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader eyebrow={T.boxEyebrow} title={T.boxTitle} />
        <div className="mt-4 grid gap-3">
          {T.boxItems.map((row: string[], i: number) => (
            <div key={i} className="rounded-lg border border-white/10 bg-black/20 p-4">
              <strong className="text-white">{row[0]}</strong>
              <span className="text-white/65"> — {row[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow={T.roleEyebrow} title={T.roleT} copy={T.roleB} />
      </section>

      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader eyebrow={T.whatEyebrow} title={T.whatT} copy={T.whatB} />
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow={T.ageEyebrow} title={T.ageT} copy={T.ageB} />
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow={T.relatedEyebrow} title={T.relatedT} copy={T.relatedB} />
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow={T.faqEyebrow} title={T.faq1q} />
        <div className="mt-4 grid gap-3 text-sm text-white/75">
          <p><strong className="text-white">{T.faq1q}</strong> {T.faq1a}</p>
          <p><strong className="text-white">{T.faq2q}</strong> {T.faq2a}</p>
          <p><strong className="text-white">{T.faq3q}</strong> {T.faq3a}</p>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow={T.nextEyebrow} title={T.nextTitle} />
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link href={`${prefix}/how-to-play`} className="content-card"><strong>{T.howLink}</strong><p className="mt-1 text-sm text-white/60">{T.howDesc}</p></Link>
          <Link href={`${prefix}/how-to-play`} className="content-card"><strong>{T.tutLink}</strong><p className="mt-1 text-sm text-white/60">{T.tutDesc}</p></Link>
          <Link href={`${prefix}/updates`} className="content-card"><strong>{T.upLink}</strong><p className="mt-1 text-sm text-white/60">{T.upDesc}</p></Link>
        </div>
      </section>
    </main>
  );
}
