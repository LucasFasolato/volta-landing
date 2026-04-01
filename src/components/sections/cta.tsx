"use client";

import { CONTENT } from "@/data/landing-content";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Cta = () => {
  return (
    <section id="pricing" className="section-padding bg-surface">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.25rem] bg-surface-container-low px-8 py-16 text-center md:px-16 md:py-24"
        >
          <div className="glow-ambient bg-primary w-[28rem] h-[28rem] -left-24 top-1/2 -translate-y-1/2 opacity-10" />
          <div className="glow-ambient bg-secondary w-[22rem] h-[22rem] -right-16 bottom-0 opacity-10" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="font-headline text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.05em] font-extrabold text-white">
              Dejá de responder mensajes.
              <br />
              <span className="text-primary text-glow">Empezá a vender</span> en automático.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-8 text-on-surface-variant">
              {CONTENT.cta.subtitle}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Button variant="primary" className="px-10 py-5 text-base">
                {CONTENT.cta.button}
              </Button>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                {CONTENT.cta.microcopy}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};