"use client";

import { motion } from "framer-motion";
import { Boxes, Smartphone, TriangleAlert } from "lucide-react";
import { CONTENT } from "@/data/landing-content";

const icons = {
  losses: TriangleAlert,
  chaos: Boxes,
  phone: Smartphone,
};

export const Problem = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-surface-container-lowest">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="max-w-2xl">
            <p className="section-kicker">Sin operating layer</p>
            <h2 className="section-title mt-5">{CONTENT.problem.title}</h2>
            <p className="section-copy mt-6">{CONTENT.problem.subtitle}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {CONTENT.problem.cards.map((card, index) => {
              const Icon = icons[card.icon];

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="surface-card relative overflow-hidden p-6 md:p-7"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
                  <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="max-w-xs text-[1.35rem] font-headline font-bold tracking-[-0.04em] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                    {card.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
