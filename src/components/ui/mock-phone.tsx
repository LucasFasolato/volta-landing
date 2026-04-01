"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MockPhone = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[300px] sm:w-[330px] h-[640px] overflow-hidden rounded-[3rem] border-[8px] border-surface-container-high bg-surface-container-lowest ambient-shadow">
      <div className="absolute inset-0 bg-primary/5 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col bg-[#0b141a]">
        <div className="flex items-center gap-3 border-b border-white/5 bg-[#1f2c34] px-4 py-4">
          <div className="h-10 w-10 rounded-full bg-surface-container-highest animate-pulse" />
          <div>
            <div className="text-sm font-bold text-white">Cliente potencial</div>
            <div className="flex items-center gap-1 text-[10px] font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              En línea
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-hidden p-4 pb-8 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 0 ? 1 : 0, y: 0 }}
            className="max-w-[80%] self-start rounded-2xl rounded-tl-sm bg-[#1f2c34] p-3 text-xs text-white"
          >
            Hola, ¿tienen stock del Combo Gamer?
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 1 ? 1 : 0, y: 0 }}
            className="max-w-[85%] self-end rounded-2xl rounded-tr-sm border border-primary/20 bg-primary/15 p-3 text-xs text-primary"
          >
            ¡Hola! Sí, tenemos stock disponible. 🚀 ¿Querés que te lo reserve?
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 2 ? 1 : 0, y: 0 }}
            className="max-w-[70%] self-start rounded-2xl rounded-tl-sm bg-[#1f2c34] p-3 text-xs text-white"
          >
            Sí, lo quiero.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.96 }}
            className="mt-3 rounded-2xl border border-primary/25 bg-primary/10 p-4 text-center"
          >
            <div className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-primary">
              Venta confirmada
            </div>
            <div className="text-lg font-extrabold text-white">$12.450</div>
            <div className="mt-2 text-[11px] text-on-surface-variant">
              VOLTA organizó la consulta y preparó la conversión.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};