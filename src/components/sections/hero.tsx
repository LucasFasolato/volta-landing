"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChartNoAxesColumnIncreasing, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MockPhone } from "@/components/ui/mock-phone";
import { PremiumBackground } from "@/components/ui/premium-background";
import { CONTENT } from "@/data/landing-content";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-32 md:pb-28 md:pt-40 lg:min-h-screen"
    >
      <PremiumBackground variant="hero" />

      <div className="container-shell relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-[42rem]"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(0,245,138,0.75)]" />
              {CONTENT.hero.badge}
            </div>

            <div className="mt-8 space-y-6">
              <p className="section-kicker">Commercial system</p>
              <h1 className="max-w-5xl font-headline text-[clamp(3.6rem,8vw,7rem)] leading-[0.9] tracking-[-0.075em] font-bold text-white">
                {CONTENT.hero.title}{" "}
                <span className="text-primary text-glow">{CONTENT.hero.titleHighlight}</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-on-surface-variant md:text-xl">
                {CONTENT.hero.subtitle}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#demo" variant="primary" className="px-7 py-4 text-sm md:text-base">
                {CONTENT.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="#sistema"
                variant="secondary"
                className="px-7 py-4 text-sm md:text-base"
              >
                {CONTENT.hero.ctaSecondary}
              </Button>
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-on-surface-variant/80">
              {CONTENT.hero.microcopy}
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {CONTENT.hero.proof.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.22 + index * 0.08 }}
                  className="surface-card rounded-[1.6rem] p-5"
                >
                  <div className="text-3xl font-headline font-bold tracking-[-0.06em] text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
          className="ambient-shadow relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-5 md:px-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent_22%,transparent_78%,rgba(255,255,255,0.04))]" />

          <div className="relative grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="max-w-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Built for high intent conversations
                </p>
                <p className="mt-2 text-sm leading-7 text-on-surface-variant md:text-[0.96rem]">
                  VOLTA se disena para negocios donde WhatsApp ya es un canal critico de venta,
                  agenda o pedidos, y necesita operar con mas control.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  label: "Operacion consistente",
                },
                {
                  icon: ChartNoAxesColumnIncreasing,
                  label: "Mas claridad comercial",
                },
                {
                  icon: ArrowRight,
                  label: "De conversacion a accion",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-white/8 bg-black/20 px-4 py-4"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <div className="mt-3 text-sm font-semibold text-white">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/8 pt-6">
          {CONTENT.hero.credibility.map((item) => (
            <div
              key={item}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-on-surface-variant"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
