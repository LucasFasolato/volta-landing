"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MockCarousel } from "@/components/ui/mock-carousel";
import { PremiumBackground } from "@/components/ui/premium-background";
import { CONTENT } from "@/data/landing-content";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pb-14 pt-24 sm:pb-16 sm:pt-28 md:pb-20 md:pt-32 lg:min-h-screen lg:pt-36 xl:pb-20"
    >
      <PremiumBackground variant="hero" className="opacity-95" />

      <div className="container-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 xl:grid-cols-2 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="max-w-[44rem]"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(0,245,138,0.75)]" />
              {CONTENT.hero.badge}
            </motion.div>

            <div className="mt-7">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                className="section-kicker"
              >
                {CONTENT.hero.kicker}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
                className="mt-5 max-w-[13ch] font-headline text-[clamp(2.8rem,5vw,5.5rem)] leading-[1.05] tracking-[-0.052em] font-bold text-white md:max-w-[12ch] xl:max-w-[13ch]"
              >
                {CONTENT.hero.title}{" "}
                <span className="text-primary text-glow">{CONTENT.hero.titleHighlight}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                className="mt-6 max-w-[44rem] text-[clamp(1rem,1.4vw,1.125rem)] leading-[1.62] text-on-surface-variant"
              >
                {CONTENT.hero.subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.26, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
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
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32, ease: "easeOut" }}
              className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-on-surface-variant/80"
            >
              {CONTENT.hero.microcopy}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: "easeOut" }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {CONTENT.hero.proof.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] border border-white/8 bg-black/20 px-4 py-4 backdrop-blur-sm"
                >
                  <div className="text-lg font-headline font-bold tracking-[-0.05em] text-white md:text-xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.82, delay: 0.16, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <MockCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
