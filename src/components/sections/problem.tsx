"use client";

import { CONTENT } from "@/data/landing-content";
import { motion } from "framer-motion";
import { TriangleAlert, Boxes, Smartphone } from "lucide-react";

const icons = {
  losses: TriangleAlert,
  chaos: Boxes,
  phone: Smartphone,
};

export const Problem = () => {
  return (
    <section id="soluciones" className="section-padding bg-surface-container-low">
      <div className="container-shell">
        <div className="mb-14 max-w-3xl text-center mx-auto">
          <p className="section-kicker mb-4">Fricción operativa</p>
          <h2 className="section-title">
            ¿Tu WhatsApp vende… o te hace perder ventas?
          </h2>
          <p className="section-copy mt-5 mx-auto">
            {CONTENT.problem.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CONTENT.problem.cards.map((card, idx) => {
            const Icon = icons[card.icon];
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="surface-card p-7 md:p-8"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-xl font-headline font-bold text-white">
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
    </section>
  );
};