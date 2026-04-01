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
    <section
      id="problema"
      className="section-padding relative overflow-hidden bg-surface-container-lowest"
    >
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">El problema</p>
          <h2 className="section-title mt-5">{CONTENT.problem.title}</h2>
          <p className="section-copy mt-5">{CONTENT.problem.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CONTENT.problem.cards.map((card, index) => {
            const Icon = icons[card.icon];

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="surface-card p-5 md:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="mt-6 text-[1.2rem] font-headline font-bold tracking-[-0.04em] text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">{card.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
