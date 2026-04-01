"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarClock,
  ChartColumnIncreasing,
  MessageSquareMore,
  ReceiptText,
} from "lucide-react";
import { CONTENT } from "@/data/landing-content";

const icons = [
  MessageSquareMore,
  CalendarClock,
  BadgeCheck,
  ReceiptText,
  ChartColumnIncreasing,
];

export const Solutions = () => {
  return (
    <section id="soluciones" className="section-padding relative overflow-hidden bg-surface">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Soluciones</p>
          <h2 className="section-title mt-5">Un mismo sistema para distintos casos de uso.</h2>
          <p className="section-copy mt-5">
            VOLTA se adapta a la necesidad del negocio sin cambiar el canal principal del
            cliente.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {CONTENT.solutions.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="surface-card p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/16 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-[1.05rem] font-headline font-bold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
