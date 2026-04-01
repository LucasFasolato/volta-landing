"use client";

import { CONTENT } from "@/data/landing-content";
import { motion } from "framer-motion";
import { User, BrainCircuit, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: User,
    label: "Cliente",
    title: CONTENT.flow[0].title,
    desc: CONTENT.flow[0].desc,
  },
  {
    icon: BrainCircuit,
    label: "VOLTA",
    title: CONTENT.flow[1].title,
    desc: CONTENT.flow[1].desc,
    accent: true,
  },
  {
    icon: BadgeCheck,
    label: "Resultado",
    title: CONTENT.flow[2].title,
    desc: CONTENT.flow[2].desc,
  },
];

export const SystemFlow = () => {
  return (
    <section id="plataforma" className="section-padding bg-surface">
      <div className="container-shell">
        <div className="mb-14 text-center">
          <p className="section-kicker mb-4">Sistema</p>
          <h2 className="section-title max-w-4xl mx-auto">
            Un sistema inteligente entre tu negocio y WhatsApp
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-[2rem] p-8 text-center ${
                  item.accent
                    ? "bg-surface-container-high ghost-border ambient-shadow"
                    : "bg-surface-container-low"
                }`}
              >
                <div
                  className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                    item.accent ? "bg-gradient-cta text-[#003919]" : "bg-surface-container-high text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-on-surface-variant">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-headline font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};