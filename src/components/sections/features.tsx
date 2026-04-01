"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarClock, MessageSquareMore, Radar } from "lucide-react";
import { CONTENT } from "@/data/landing-content";

const icons = [MessageSquareMore, CalendarClock, Radar];

const bullets = [
  ["Lead scoring", "Respuestas utiles", "Prioridad automatica"],
  ["Confirmaciones", "Disponibilidad", "Ejecucion sin friccion"],
  ["Handoff limpio", "Supervision", "Trazabilidad"],
];

export const Features = () => {
  return (
    <section id="modulos" className="section-padding relative overflow-hidden bg-surface-container-lowest">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Modulos operativos</p>
            <h2 className="section-title mt-5">Disenado para conversaciones que mueven negocio.</h2>
          </div>

          <p className="section-copy max-w-xl">
            Cada modulo esta pensado para responder, ejecutar y escalar mejor dentro del canal
            que ya usa tu cliente.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {CONTENT.features.map((feature, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="surface-card relative overflow-hidden rounded-[2rem] p-6 md:p-7"
              >
                <div className="absolute right-6 top-6 text-white/12">
                  <ArrowUpRight className="h-8 w-8" />
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/16 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="mt-8">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                    Modulo 0{index + 1}
                  </div>
                  <h3 className="mt-3 max-w-sm text-[1.5rem] font-headline font-bold tracking-[-0.05em] text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-on-surface-variant md:text-base">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {bullets[index].map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-on-surface-variant"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
