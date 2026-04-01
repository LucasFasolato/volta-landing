"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, MessageSquareText, Zap } from "lucide-react";
import { CONTENT } from "@/data/landing-content";

export const OperatingLayer = () => {
  return (
    <section id="sistema" className="section-padding relative overflow-hidden bg-surface">
      <div className="container-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="section-kicker">{CONTENT.signature.kicker}</p>
            <h2 className="section-title mt-5 max-w-4xl">{CONTENT.signature.title}</h2>
          </div>
          <p className="section-copy max-w-2xl lg:justify-self-end">
            {CONTENT.signature.subtitle}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="ambient-shadow relative mt-14 overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-6 md:px-8 md:py-8 xl:px-10 xl:py-10"
        >
          <div className="fine-grid absolute inset-0 opacity-[0.06]" />
          <div className="absolute inset-x-[10%] top-[18%] hidden h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent xl:block" />
          <div className="absolute inset-x-[10%] bottom-[24%] hidden h-px bg-gradient-to-r from-transparent via-accent-blue/25 to-transparent xl:block" />

          <div className="relative grid gap-6 xl:grid-cols-[0.82fr_1.2fr_0.82fr]">
            <div className="surface-card rounded-[2rem] p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04] text-white">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                    Entrada
                  </p>
                  <h3 className="mt-1 text-xl font-headline font-bold text-white">
                    Conversaciones sin sistema
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {CONTENT.signature.inputs.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[1.4rem] border border-white/8 bg-black/20 px-4 py-4"
                  >
                    <div className="text-sm leading-7 text-on-surface-variant">{item}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,16,22,0.82),rgba(10,14,18,0.96))] px-5 py-6 md:px-7 md:py-7">
              <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/12 bg-[radial-gradient(circle,rgba(0,245,138,0.14),rgba(0,245,138,0.04)_38%,transparent_74%)]" />
              <div className="absolute left-1/2 top-1/2 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

              <div className="relative z-10">
                <div className="mx-auto flex max-w-max items-center gap-3 rounded-full border border-primary/16 bg-primary/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  <Bot className="h-3.5 w-3.5" />
                  VOLTA operating layer
                </div>

                <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-on-surface-variant md:text-base">
                  Una capa que interpreta, decide y ejecuta para que el equipo intervenga con
                  mas claridad y menos friccion.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {CONTENT.signature.modules.map((module, index) => (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5"
                    >
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        0{index + 1}
                      </div>
                      <h3 className="mt-3 text-xl font-headline font-bold text-white">
                        {module.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                        {module.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.7rem] border border-white/8 bg-black/20 px-5 py-4">
                  <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
                    <span className="inline-flex items-center gap-2 text-primary">
                      <Zap className="h-3.5 w-3.5" />
                      Automation with criteria
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/18" />
                    <span>Human handoff when needed</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/18" />
                    <span>Actionable outcomes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-5 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/16 bg-primary/10 text-primary">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                    Salida
                  </p>
                  <h3 className="mt-1 text-xl font-headline font-bold text-white">
                    Resultado listo para operar
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {CONTENT.signature.outputs.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[1.4rem] border border-primary/12 bg-primary/[0.08] px-4 py-4"
                  >
                    <div className="text-sm font-medium leading-7 text-white">{item}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-6 rounded-[1.8rem] border border-white/8 bg-black/20 px-5 py-4 md:px-6">
            <p className="text-sm leading-7 text-on-surface-variant md:text-base">
              {CONTENT.signature.footer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
