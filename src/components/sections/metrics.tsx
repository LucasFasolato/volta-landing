"use client";

import { CONTENT } from "@/data/landing-content";
import { motion } from "framer-motion";

export const Metrics = () => {
  return (
    <section id="beneficios" className="section-padding bg-surface-container-lowest">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12">
          {CONTENT.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="text-center"
            >
              <div
                className={`font-headline text-5xl md:text-6xl font-black tracking-[-0.04em] ${
                  idx === 0 || idx === 3 ? "text-primary text-glow" : "text-white"
                }`}
              >
                {metric.value}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.12em] font-bold text-on-surface-variant">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};