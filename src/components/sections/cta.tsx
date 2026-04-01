"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PremiumBackground } from "@/components/ui/premium-background";
import { CONTENT } from "@/data/landing-content";

export const Cta = () => {
  return (
    <section id="demo" className="section-padding relative overflow-hidden bg-surface">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="ambient-shadow relative overflow-hidden rounded-[2.6rem] border border-white/10 px-7 py-10 md:px-10 md:py-12 xl:px-14"
        >
          <PremiumBackground variant="cta" className="opacity-95" />

          <div className="relative z-10 grid gap-10 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Ready to turn WhatsApp into system
              </div>

              <h2 className="mt-6 font-headline text-[clamp(2.7rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.07em] font-bold text-white">
                {CONTENT.cta.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
                {CONTENT.cta.subtitle}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="#top" variant="primary" className="px-7 py-4 text-sm md:text-base">
                  {CONTENT.cta.button}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
                  {CONTENT.cta.microcopy}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Diagnostico comercial",
                  desc: "Revisamos donde hoy se pierde velocidad, claridad y conversion.",
                },
                {
                  title: "Setup con criterio operativo",
                  desc: "No solo conectamos IA: ordenamos el flujo real del canal.",
                },
                {
                  title: "Salida clara para tu equipo",
                  desc: "Tu negocio mantiene control, supervision y handoff cuando hace falta.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.7rem] border border-white/8 bg-black/20 px-5 py-5"
                >
                  <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
