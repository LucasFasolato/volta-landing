"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MockPhone = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[320px] h-[650px] bg-surface-container-lowest rounded-[3rem] border-[8px] border-surface-container-high shadow-2xl overflow-hidden group">
      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 bg-primary/5 blur-2xl transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>
      
      <div className="relative h-full flex flex-col bg-[#0b141a] z-10">
        <div className="px-4 py-4 bg-[#1f2c34] flex items-center space-x-3 ghost-border border-x-0 border-t-0">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest animate-pulse"></div>
          <div>
            <div className="text-white text-sm font-bold">Cliente potencial</div>
            <div className="text-primary text-[10px] font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> En línea
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto flex flex-col justify-end pb-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: step >= 0 ? 1 : 0, y: 0 }} className="bg-[#1f2c34] p-3 rounded-2xl rounded-tl-sm text-xs text-white max-w-[80%] self-start">
            Hola, ¿tienen stock del Combo Gamer?
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: step >= 1 ? 1 : 0, y: 0 }} className="bg-primary/20 ghost-border p-3 rounded-2xl rounded-tr-sm text-xs text-primary max-w-[85%] self-end">
            ¡Hola! Sí, tenemos stock disponible. 🚀 ¿Te lo reservo?
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: step >= 2 ? 1 : 0, y: 0 }} className="bg-[#1f2c34] p-3 rounded-2xl rounded-tl-sm text-xs text-white max-w-[80%] self-start">
            Sí, ¡lo quiero!
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }} className="bg-primary/10 border border-primary/30 p-4 rounded-xl text-center mt-4">
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Venta Confirmada</div>
            <div className="text-white text-lg font-bold">$12.450</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};