"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PremiumBackground } from "@/components/ui/premium-background";
import { CONTENT } from "@/data/landing-content";

export const Cta = () => {
  return (
    <section id="demo" className="section-padding relative overflow-hidden bg-surface-container-lowest">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="ambient-shadow relative overflow-hidden rounded-[2.3rem] border border-white/10 px-6 py-9 md:px-10 md:py-11"
        >
          <PremiumBackground variant="cta" className="opacity-80" />

          <div className="relative z-10 max-w-3xl">
            <p className="section-kicker">Solicita una demo</p>
            <h2 className="mt-5 font-headline text-[clamp(2.4rem,5.5vw,4.7rem)] leading-[0.98] tracking-[-0.06em] font-bold text-white">
              {CONTENT.cta.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg md:leading-8">
              {CONTENT.cta.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#top" variant="primary" className="px-7 py-4 text-sm md:text-base">
                {CONTENT.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
                {CONTENT.cta.microcopy}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {CONTENT.cta.notes.map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-on-surface-variant"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
