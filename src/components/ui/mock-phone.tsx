"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ClipboardCheck, Clock3, LayoutPanelTop } from "lucide-react";

const cycleLength = 4;

export const MockPhone = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((prev) => (prev + 1) % cycleLength);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[24rem]">
      <div className="relative mx-auto w-[20rem] rounded-[3rem] border border-white/10 bg-[#05070a] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:w-[22rem]">
        <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(0,245,138,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
        <div className="absolute inset-x-14 top-3 h-6 rounded-b-2xl bg-black" />

        <div className="relative overflow-hidden rounded-[2.45rem] border border-white/6 bg-[#091018]">
          <div className="border-b border-white/6 bg-[linear-gradient(180deg,#101821_0%,#0c131b_100%)] px-5 pb-4 pt-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                  WhatsApp conectado
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  Atencion, turnos y gestion
                </h3>
              </div>
              <div className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-primary">
                18 s
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Consultas", "Turnos", "Comprobantes"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/7 bg-white/[0.03] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-on-surface-variant"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[28rem] flex-col justify-end gap-3 overflow-hidden bg-[linear-gradient(180deg,rgba(8,13,18,0.72)_0%,rgba(8,13,18,0.96)_100%)] px-4 py-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,245,138,0.08),transparent_24%)]" />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 12 }}
              className="relative max-w-[80%] self-start rounded-[1.25rem] rounded-bl-md border border-white/5 bg-[#111a23] px-3.5 py-3 text-sm text-white"
            >
              Hola, quiero reprogramar mi turno y mandar el comprobante.
              <div className="mt-2 text-[0.64rem] text-white/40">10:14</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 12 }}
              className="relative max-w-[88%] self-end rounded-[1.25rem] rounded-br-md border border-primary/14 bg-primary/[0.12] px-3.5 py-3 text-sm text-primary"
            >
              Perfecto. Ya recibimos el comprobante y te muestro los horarios disponibles.
              <div className="mt-3 flex flex-wrap gap-2">
                {["Comprobante ok", "Turno en curso", "Respuesta automatica"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-primary/14 bg-black/20 px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-primary/90"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 12 }}
              className="relative max-w-[76%] self-start rounded-[1.25rem] rounded-bl-md border border-white/5 bg-[#111a23] px-3.5 py-3 text-sm text-white"
            >
              Manana a las 10:30 me sirve.
              <div className="mt-2 text-[0.64rem] text-white/40">10:15</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: step >= 3 ? 1 : 0,
                scale: step >= 3 ? 1 : 0.96,
              }}
              className="relative mt-2 overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,245,138,0.12),transparent_36%)]" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      Operacion resuelta
                    </p>
                    <div className="mt-1 text-lg font-semibold text-white">Turno confirmado</div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    "Comprobante validado",
                    "Panel actualizado",
                    "Seguimiento listo",
                    "Historial guardado",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/7 bg-black/20 px-3 py-2 text-[0.66rem] font-medium text-on-surface-variant"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/6 bg-[#0d141d] px-4 py-3">
            <div className="grid grid-cols-2 gap-2 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
              <div className="rounded-2xl border border-white/7 bg-white/[0.03] px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5 text-primary" />
                  Respuesta
                </div>
                <div className="mt-1 text-xs text-white">Inmediata</div>
              </div>
              <div className="rounded-2xl border border-white/7 bg-white/[0.03] px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <LayoutPanelTop className="h-3.5 w-3.5 text-primary" />
                  Panel
                </div>
                <div className="mt-1 text-xs text-white">Actualizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 right-2 rounded-[1.2rem] border border-white/8 bg-black/35 px-3.5 py-3 backdrop-blur md:right-4">
        <div className="flex items-center gap-2 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
          <ClipboardCheck className="h-3.5 w-3.5 text-primary" />
          Operacion conectada
        </div>
      </div>
    </div>
  );
};
