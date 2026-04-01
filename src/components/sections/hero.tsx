"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MockPhone } from "@/components/ui/mock-phone";
import { PremiumBackground } from "@/components/ui/premium-background";
import { CONTENT } from "@/data/landing-content";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36 lg:min-h-screen"
    >
      <PremiumBackground variant="hero" className="opacity-90" />

      <div className="container-shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.95fr)] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[40rem]"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(0,245,138,0.75)]" />
              {CONTENT.hero.badge}
            </div>

            <div className="mt-7">
              <p className="section-kicker">{CONTENT.hero.kicker}</p>
              <h1 className="mt-5 max-w-4xl font-headline text-[clamp(3.2rem,7vw,6.4rem)] leading-[1.02] tracking-[-0.065em] font-bold text-white">
                {CONTENT.hero.title}{" "}
                <span className="text-primary text-glow">{CONTENT.hero.titleHighlight}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-on-surface-variant md:text-lg md:leading-8">
                {CONTENT.hero.subtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#demo" variant="primary" className="px-7 py-4 text-sm md:text-base">
                {CONTENT.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="#soluciones"
                variant="secondary"
                className="px-6 py-4 text-sm md:text-base"
              >
                {CONTENT.hero.ctaSecondary}
              </Button>
            </div>

            <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-on-surface-variant/80">
              {CONTENT.hero.microcopy}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {CONTENT.hero.proof.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.18 + index * 0.08 }}
                  className="rounded-[1.35rem] border border-white/8 bg-black/20 px-4 py-4"
                >
                  <div className="text-lg font-headline font-bold tracking-[-0.05em] text-white md:text-xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <MockPhone />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
