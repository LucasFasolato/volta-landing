"use client";

import { CONTENT } from "@/data/landing-content";
import { motion } from "framer-motion";
import { MessageSquareText, Bot, CheckCircle2 } from "lucide-react";

const icons = [MessageSquareText, Bot, CheckCircle2];

export const Steps = () => {
  return (
    <section id="como-funciona" className="section-padding bg-surface">
      <div className="container-shell">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker mb-4">Funcionamiento</p>
          <h2 className="section-title">Tres pasos hacia la libertad operativa</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {CONTENT.steps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative overflow-hidden rounded-[1.75rem] p-7 md:p-8 ${
                  idx === 2
                    ? "bg-surface-container-low ghost-border"
                    : "bg-surface-container-low"
                }`}
              >
                <div className="absolute right-5 top-4 text-4xl font-headline font-black tracking-[-0.04em] text-white/7">
                  0{idx + 1}
                </div>

                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high">
                  <Icon className={`h-5 w-5 ${idx === 2 ? "text-primary" : "text-white"}`} />
                </div>

                <h3 className="text-xl font-headline font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-on-surface-variant">
                  {step.desc}
                </p>

                {idx === 2 && (
                  <div className="mt-8 h-1.5 w-32 rounded-full bg-gradient-cta" />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};