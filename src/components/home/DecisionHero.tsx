import Link from "next/link";
import { homepageContract } from "@/data/homepage-contract";

/**
 * DecisionHero — Grow A Colony's homepage is NOT a generic brand splash.
 * It opens with the colony's one mistake new players make (Risk-First), then
 * puts the first-hour route front and centre. No hero-bg cover art, no "X Wiki"
 * title + buttons — the DECISION is the hero.
 */
export function DecisionHero({ isEs = false }: { isEs?: boolean }) {
  const lh = (href: string) => (isEs && href.startsWith("/en") ? href.replace("/en", "/es") : href);
  const route = homepageContract.firstHourRoute;
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-emerald-950/60 via-black to-black">
      {/* subtle caste hint, not a full-bleed cover */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)]">
          {isEs ? "El error de principiante" : "The beginner mistake"}
        </span>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
          {isEs
            ? "Tu colonia se muere de hambre si solo crías soldados"
            : "Your colony starves if you only breed fighters"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
          {isEs
            ? "En Grow A Colony los Workers producen la comida que sostiene todo. Los nuevos crían Majors y Drones primero y se quedan sin economía."
            : "In Grow A Colony, Workers produce the food that sustains everything. New players breed Majors and Drones first and run out of economy."}
        </p>

        {/* First-hour route — the decision, visualised */}
        <ol className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          {route.map((s) => (
            <li key={s.step} className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] font-bold text-black">{s.step}</span>
                <div>
                  <p className="font-semibold text-white">{s.title}</p>
                  <p className="mt-0.5 text-sm text-white/65">{s.why}</p>
                </div>
              </div>
              <Link href={lh(s.href)} className="mt-3 inline-block text-xs font-semibold text-[color:var(--accent)] hover:underline">
                {isEs ? "Guía" : "Guide"} →
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={lh(route[0]?.href ?? "/en/how-to-play")} className="button-primary">
            {isEs ? "Empieza aquí" : "Start here"}
          </Link>
          <Link href={lh("/en/codes")} className="button-secondary">{isEs ? "Códigos" : "Codes"}</Link>
          <Link href={lh("/en/updates")} className="button-secondary">{isEs ? "Novedades" : "Updates"}</Link>
        </div>
      </div>
    </section>
  );
}
