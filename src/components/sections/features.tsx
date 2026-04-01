"use client";

import { CONTENT } from "@/data/landing-content";
import { motion } from "framer-motion";
import { MessageSquareMore, CalendarClock, BarChart3 } from "lucide-react";

const icons = [MessageSquareMore, CalendarClock, BarChart3];

export const Features = () => {
  return (
    <section id="integraciones" className="section-padding bg-surface">
      <div className="container-shell">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker mb-4">Capacidades</p>
            <h2 className="section-title">
              Todo lo que necesitás para escalar
            </h2>
            <p className="section-copy mt-5">
              Diseñado para negocios que operan en WhatsApp pero piensan en grande.
            </p>
          </div>

          <button className="self-start rounded-xl bg-surface-container-high px-4 py-3 text-sm text-white ghost-border">
            Explorar funciones
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {CONTENT.features.map((feature, idx) => {
            const Icon = icons[idx];
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="surface-card p-7 md:p-8"
              >
                <div className="mb-6 flex h-20 items-center rounded-2xl bg-surface-container-high px-5">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-lg font-headline font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {feature.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};