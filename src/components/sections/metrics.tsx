"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/landing-content";

export const Metrics = () => {
  return (
    <section id="beneficios" className="section-padding relative overflow-hidden bg-surface-container-lowest">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Beneficios</p>
          <h2 className="section-title mt-5">Por que esto importa para tu negocio.</h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {CONTENT.metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="surface-card rounded-[1.8rem] p-5 md:p-6"
            >
              <div className="text-[1.7rem] font-headline font-bold tracking-[-0.05em] text-white md:text-[2rem]">
                {metric.value}
              </div>
              <div className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                {metric.label}
              </div>
              <div className="mt-4 text-sm leading-7 text-on-surface-variant">{metric.detail}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
