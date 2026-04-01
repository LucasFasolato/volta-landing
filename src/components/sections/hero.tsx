"use client";

import { CONTENT } from "@/data/landing-content";
import { Button } from "@/components/ui/button";
import { MockPhone } from "@/components/ui/mock-phone";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="glow-ambient bg-primary w-[32rem] h-[32rem] top-[8%] left-[8%]" />
      <div className="glow-ambient bg-secondary w-[24rem] h-[24rem] bottom-[8%] right-[10%]" />

      <div className="container-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-surface-container-low px-4 py-2 ghost-border">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(0,255,136,0.85)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-on-surface-variant">
                {CONTENT.hero.badge}
              </span>
            </div>

            <h1 className="max-w-4xl font-headline text-[clamp(3rem,7vw,5.75rem)] leading-[0.95] tracking-[-0.05em] font-extrabold text-white">
              {CONTENT.hero.title}{" "}
              <span className="text-primary text-glow">{CONTENT.hero.titleHighlight}</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg md:text-xl leading-[1.75] text-on-surface-variant">
              {CONTENT.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary">{CONTENT.hero.ctaPrimary}</Button>
              <Button variant="secondary">{CONTENT.hero.ctaSecondary}</Button>
            </div>

            <p className="mt-4 text-xs font-medium tracking-wide text-on-surface-variant/70">
              {CONTENT.hero.microcopy}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <MockPhone />
          </motion.div>
        </div>
      </div>
    </section>
  );
};