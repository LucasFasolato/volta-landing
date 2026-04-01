"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, MessageSquareText } from "lucide-react";
import { CONTENT } from "@/data/landing-content";

const icons = [MessageSquareText, Bot, CheckCircle2];

export const Steps = () => {
  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden bg-surface">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Como funciona</p>
          <h2 className="section-title mt-5">Tres pasos para vender mejor por WhatsApp.</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CONTENT.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="surface-card relative p-5 md:p-6"
              >
                <div className="absolute right-5 top-5 text-3xl font-headline font-bold tracking-[-0.05em] text-white/8">
                  0{index + 1}
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/16 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-[1.2rem] font-headline font-bold tracking-[-0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">{step.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
