import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/locales";
import { monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { VerificationBox } from "@/components/ui/VerificationBox";
import { PlayQuickRules, VideoGuide } from "@/components/ui/EvomonBlocks";
import { PerPageLinks } from "@/components/ui/PerPageLinks";
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
      : "Getting started guide for Grow A Colony: gather resources, dig tunnels, build, and grow your colony. Clear steps.",
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
      ? "Grow A Colony es un juego de construcción de colonia en Roblox: juegas como una colonia de insectos y creces desde un pequeño nido hasta una base próspera. Recolectas recursos (madera, hojas, comida), cavas túneles, construyes estructuras y desbloqueas mejoras. Esta guía de inicio cubre el primer día: el bucle de juego, qué construir primero y cómo crecer rápido."
      : "Grow A Colony is a Roblox colony-building game: you play as an insect colony and grow from a small nest into a thriving base. You gather resources (wood, leaves, food), dig tunnels, build structures, and unlock upgrades. This getting-started guide covers your first day: the core loop, what to build first, and how to grow fast.",
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
        ["Recolecta recursos base", "Empieza por lo básico: madera y hojas. Son la entrada a casi todas las primeras construcciones."],
        ["Construye tu primera estructura", "Usa recursos para construir el primer almacén/taller que produzca de forma continua."],
        ["Expande túneles", "Cava hacia nuevas zonas con más recursos. Más territorio = más producción cada ciclo."],
        ["Mejora y repite", "Cada estructura tiene mejoras. Sube la producción antes de gastar en novedades."],
      ] : [
        ["Join the game", "Enter the Grow A Colony world from the official Roblox page. Joining a lower-player-count server is usually calmer."],
        ["Gather base resources", "Start with the basics: wood and leaves. They feed nearly every early build."],
        ["Build your first structure", "Spend resources on a first storage/workshop that produces continuously."],
        ["Expand tunnels", "Dig toward new zones with more resources. More territory = more production per cycle."],
        ["Upgrade and repeat", "Every structure has upgrades. Raise production before spending on novelty."],
      ],
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
    ? ["Recolecta madera y hojas al empezar.", "Construye almacenamiento para producción continua.", "Expande túneles hacia recursos de mayor valor.", "Mejora producción antes que novedades."]
    : ["Gather wood and leaves at the start.", "Build storage for continuous production.", "Expand tunnels toward higher-value resources.", "Upgrade production before novelty."];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: isEs ? "Inicio" : "Home", href: `${prefix}/` }, { name: T.crumb, href: `${prefix}/how-to-play` }]} />
      <FaqJsonLd items={[{ q: T.faq1q, a: T.faq1a }, { q: T.faq2q, a: T.faq2a }]} />
      <HowToJsonLd name={T.introTitle} description={T.introDesc} steps={T.section2Steps.slice(0, 3).map((s) => ({ name: s[0], text: s[1] }))} />
      <Breadcrumbs items={[{ label: T.crumb, href: `${prefix}/how-to-play` }]} />
      <VerificationBox />
      <PageIntro eyebrow="Grow A Colony · How to Play" title={T.introTitle} description={T.introDesc} />
      <PlayQuickRules label={isEs ? "En 30 segundos" : "In 30 seconds"} rules={qrRules} />
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
    </main>
  );
}
