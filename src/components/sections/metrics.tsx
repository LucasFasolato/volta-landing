"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/landing-content";

export const Metrics = () => {
  return (
    <section id="impacto" className="section-padding relative overflow-hidden bg-surface">
      <div className="container-shell">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Impacto comercial</p>
          <h2 className="section-title mt-5">Mas control, mas velocidad, mas conversion.</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {CONTENT.metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="font-headline text-[clamp(3rem,6vw,4.75rem)] font-bold tracking-[-0.07em] text-white">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {metric.label}
                  </div>
                </div>

                <div className="max-w-sm text-sm leading-7 text-on-surface-variant md:text-base">
                  {metric.detail}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
