"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  CalendarCheck2,
  ChartNoAxesColumnIncreasing,
  Clock3,
  TicketCheck,
} from "lucide-react";

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
    <div className="relative mx-auto w-full max-w-[38rem]">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="surface-card absolute left-0 top-12 hidden w-52 rounded-[1.7rem] p-4 lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/14 text-primary">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              Intent detected
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Compra inmediata</p>
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {["Stock validado", "Lead caliente", "Prioridad alta"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-on-surface-variant"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="surface-card absolute bottom-14 right-0 hidden w-56 rounded-[1.8rem] p-4 lg:block"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              Operation state
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Salida en curso</p>
          </div>
          <div className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
            Activo
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <TicketCheck className="h-3.5 w-3.5 text-primary" />
              Pedido preparado
            </div>
            <div className="mt-2 text-sm font-semibold text-white">Checkout listo para enviar</div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <CalendarCheck2 className="h-3.5 w-3.5 text-primary" />
              Handoff
            </div>
            <div className="mt-2 text-sm font-semibold text-white">Equipo recibe contexto y estado</div>
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto w-[21rem] rounded-[3.1rem] border border-white/10 bg-[#05070a] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:w-[23rem]">
        <div className="absolute inset-0 rounded-[3.1rem] bg-[radial-gradient(circle_at_top,rgba(0,245,138,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
        <div className="absolute inset-x-14 top-3 h-6 rounded-b-2xl bg-black" />

        <div className="relative overflow-hidden rounded-[2.55rem] border border-white/6 bg-[#091018]">
          <div className="border-b border-white/6 bg-[linear-gradient(180deg,#101821_0%,#0c131b_100%)] px-5 pb-4 pt-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                  VOLTA sales line
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">Cliente listo para comprar</h3>
              </div>
              <div className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
                SLA 18s
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: "Canal", value: "WA" },
                { label: "Score", value: "87/100" },
                { label: "Estado", value: "Activo" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/6 bg-white/[0.03] px-3 py-2"
                >
                  <div className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[31rem] flex-col justify-end gap-3 overflow-hidden bg-[linear-gradient(180deg,rgba(8,13,18,0.72)_0%,rgba(8,13,18,0.96)_100%)] px-4 py-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,245,138,0.08),transparent_24%)]" />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 12 }}
              className="relative max-w-[80%] self-start rounded-[1.35rem] rounded-bl-md border border-white/5 bg-[#111a23] px-3.5 py-3 text-sm text-white"
            >
              Hola, necesito cotizar 4 equipos y coordinar entrega hoy.
              <div className="mt-2 text-[0.65rem] text-white/40">10:14</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 12 }}
              className="relative max-w-[88%] self-end rounded-[1.35rem] rounded-br-md border border-primary/14 bg-primary/[0.12] px-3.5 py-3 text-sm text-primary"
            >
              Claro. Ya valide stock, plazo y monto estimado. Te preparo la propuesta y opcion de pago.
              <div className="mt-3 flex flex-wrap gap-2">
                {["Stock OK", "Entrega hoy", "Ticket alto"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-primary/14 bg-black/20 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary/90"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 12 }}
              className="relative max-w-[72%] self-start rounded-[1.35rem] rounded-bl-md border border-white/5 bg-[#111a23] px-3.5 py-3 text-sm text-white"
            >
              Perfecto, mandamelo y lo cierro ahora.
              <div className="mt-2 text-[0.65rem] text-white/40">10:15</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: step >= 3 ? 1 : 0,
                scale: step >= 3 ? 1 : 0.96,
              }}
              className="relative mt-2 overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,245,138,0.12),transparent_36%)]" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      Conversion package ready
                    </p>
                    <div className="mt-1 text-lg font-semibold text-white">$1.480.000 ARS</div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    "Presupuesto generado",
                    "Metodo de pago sugerido",
                    "Entrega priorizada",
                    "Handoff con resumen",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/7 bg-black/20 px-3 py-2 text-[0.68rem] font-medium text-on-surface-variant"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/6 bg-[#0d141d] px-4 py-3">
            <div className="grid grid-cols-3 gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
              <div className="rounded-2xl border border-white/7 bg-white/[0.03] px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5 text-primary" />
                  Tiempo
                </div>
                <div className="mt-1 text-xs text-white">-74%</div>
              </div>
              <div className="rounded-2xl border border-white/7 bg-white/[0.03] px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <ChartNoAxesColumnIncreasing className="h-3.5 w-3.5 text-primary" />
                  Pipeline
                </div>
                <div className="mt-1 text-xs text-white">Ordenado</div>
              </div>
              <div className="rounded-2xl border border-white/7 bg-white/[0.03] px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <CalendarCheck2 className="h-3.5 w-3.5 text-primary" />
                  Salida
                </div>
                <div className="mt-1 text-xs text-white">Lista</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
