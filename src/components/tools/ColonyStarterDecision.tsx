"use client";

import { useState } from "react";

/**
 * ColonyStarterDecision — the homepage's MAIN ENGINE, made into a real
 * decision tool instead of an info sentence.
 *
 * Three questions the player can answer from their own game state (no invented
 * numbers): food stability, worker count, threat pressure. The output is a
 * concrete "do this next" branch, grounded only in the official mechanism
 * (Workers=food, Majors/Drones=fighting) — never a fabricated stat.
 */
const Q1 = {
  en: ["Food is just starting", "Food is a bit tight", "Food is stable / store is fine"],
  es: ["La comida recién comienza", "La comida está algo justa", "La comida es estable"],
};
const Q2 = {
  en: ["No Workers yet", "A few Workers", "A solid Worker force"],
  es: ["Aún sin Workers", "Unos pocos Workers", "Buena fuerza de Workers"],
};
const Q3 = {
  en: ["No threats yet", "Occasionally attacked", "Attacked often"],
  es: ["Aún sin amenazas", "Ataques ocasionales", "Me atacan seguido"],
};

export function ColonyStarterDecision({ isEs = false }: { isEs?: boolean }) {
  const [q1, setQ1] = useState<number>(-1);
  const [q2, setQ2] = useState<number>(-1);
  const [q3, setQ3] = useState<number>(-1);
  const L = isEs ? "es" : "en";

  const answered = q1 >= 0 && q2 >= 0 && q3 >= 0;

  // Branch logic — grounded in the official mechanism (food before war).
  function advice(): string[] {
    const hungry = q1 <= 1;         // food not stable
    const fewWorkers = q2 <= 1;     // worker force small
    const threatened = q3 === 2;    // attacked often
    if (hungry && fewWorkers) {
      return isEs
        ? ["Prioridad: estabilizar comida.", "Tu colonia no come bien y aún tienes pocos Workers — añade Workers antes que cualquier caste de combate. Una colonia hambrienta no puede sostener a Majors ni Drones."]
        : ["Priority: stabilise food.", "Your colony isn't eating well and you still have few Workers — add Workers before ANY combat caste. A starving colony can't sustain Majors or Drones."];
    }
    if (hungry) {
      return isEs
        ? ["La comida sigue siendo lo primero.", "Tienes Workers, pero la comida no asienta — mantén el foco en produarla y crecer la economía antes de gastar en combate. Los soldados vienen después de que el plato esté lleno."]
        : ["Food is still the first job.", "You have Workers but food isn't settling — keep the focus on food production and growing the economy before spending on combat. Fighters come after the store is full."];
    }
    if (fewWorkers) {
      return isEs
        ? ["Asegura la base de Workers.", "Tu comida es estable, pero aún no hay muchos Workers — es buen momento para consolidarlos antes de pensar en defensa. Un puñado de Workers señala economía por construir."]
        : ["Lock in the Worker base.", "Your food is stable but you don't have many Workers yet — a good moment to consolidate them before defence. A thin Worker force means economy still to build."];
    }
    if (threatened) {
      return isEs
        ? ["Ahora sí: defiende.", "Comida estable + buena base de Workers. Si te atacan seguido, es el momento de criar Majors (defensa pesada) y luego Drones (segundo caste de combate) — la comida ya los sostiene."]
        : ["Now it's defence time.", "Stable food + a solid Worker base. If you're attacked often, this is when Majors (heavy defence) and then Drones (second combat caste) earn their keep — food already supports them."];
    }
    return isEs
      ? ["Equilibrio.", "Comida estable, Workers sólidos, pocas amenazas — mantén el balance: no gastes todo en una sola caste, y guarda comida para sostener lo que críes. Sube la producción o la defensa según vengan las amenazas."]
      : ["Keep the balance.", "Stable food, solid Workers, low threat — keep the balance: don't dump everything into one caste, and hold food to sustain what you raise. Scale production or defence as threats arrive."];
  }

  function Radio({ label, options, val, set }: { label: string; options: string[]; val: number; set: (v: number) => void }) {
    return (
      <div>
        <p className="mb-2 text-sm font-semibold text-white">{label}</p>
        <div className="grid gap-2 sm:grid-cols-3">
          {options.map((o, i) => (
            <button
              key={i}
              type="button"
              onClick={() => set(i)}
              className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                val === i
                  ? "border-[color:var(--accent)] bg-[color:var(--accent)]/15 text-white"
                  : "border-white/10 bg-black/30 text-white/70 hover:border-white/25"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[color:var(--accent)]/25 bg-[color:var(--surface)]/50 p-5 sm:p-6">
      <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)]">
        {isEs ? "Tu colonia ahora mismo" : "Your colony, right now"}
      </p>
      <div className="grid gap-4">
        <Radio label={isEs ? "¿Cómo está tu comida?" : "How's your food?"} options={Q1[L]} val={q1} set={setQ1} />
        <Radio label={isEs ? "¿Cuántos Workers tienes?" : "How many Workers?"} options={Q2[L]} val={q2} set={setQ2} />
        <Radio label={isEs ? "¿Qué tan seguido te atacan?" : "How often are you attacked?"} options={Q3[L]} val={q3} set={setQ3} />
      </div>

      {answered ? (
        <div className="mt-5 rounded-xl border border-[color:var(--accent-2)]/30 bg-[color:var(--accent-2)]/10 p-4">
          {advice().map((line, i) => (
            <p key={i} className={i === 0 ? "font-bold text-white" : "mt-1 text-sm text-white/80"}>{line}</p>
          ))}
        </div>
      ) : (
        <p className="mt-5 text-sm text-white/50">{isEs ? "Selecciona las tres opciones y te decimos qué sigue." : "Pick all three and we'll tell you what to do next."}</p>
      )}
    </div>
  );
}
