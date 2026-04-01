"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import {
  CalendarCheck2,
  CircleDollarSign,
  ClipboardCheck,
  PackageCheck,
} from "lucide-react";

type Scenario = {
  id: string;
  label: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  messages: Array<{
    align: "left" | "right";
    text: string;
    time: string;
  }>;
  result: {
    title: string;
    detail: string;
  };
};

const scenarios: Scenario[] = [
  {
    id: "turnos",
    label: "Turnos",
    title: "Reserva de turnos",
    icon: CalendarCheck2,
    messages: [
      { align: "left", text: "Hola, quiero sacar un turno para manana.", time: "10:14" },
      {
        align: "right",
        text: "Tengo 10:30 o 12:00. Te reservo el horario que prefieras.",
        time: "10:14",
      },
      { align: "left", text: "10:30 me sirve.", time: "10:15" },
    ],
    result: {
      title: "Turno confirmado",
      detail: "Horario reservado y panel actualizado.",
    },
  },
  {
    id: "ventas",
    label: "Ventas",
    title: "Consulta comercial",
    icon: CircleDollarSign,
    messages: [
      { align: "left", text: "Hola, tenes stock del combo x3?", time: "11:02" },
      {
        align: "right",
        text: "Si, hay stock. Te paso precio y link para avanzar ahora.",
        time: "11:02",
      },
      { align: "left", text: "Perfecto, mandamelo.", time: "11:03" },
    ],
    result: {
      title: "Venta encaminada",
      detail: "Consulta resuelta con siguiente paso claro.",
    },
  },
  {
    id: "pedidos",
    label: "Pedidos",
    title: "Pedido tomado",
    icon: PackageCheck,
    messages: [
      { align: "left", text: "Quiero pedir 4 cajas para hoy.", time: "12:21" },
      {
        align: "right",
        text: "Listo. Ya registre el pedido y te confirmo la entrega.",
        time: "12:21",
      },
      { align: "left", text: "Dale, gracias.", time: "12:22" },
    ],
    result: {
      title: "Pedido procesado",
      detail: "Pedido validado y derivado al equipo.",
    },
  },
  {
    id: "comprobantes",
    label: "Comprobantes",
    title: "Validacion de comprobantes",
    icon: ClipboardCheck,
    messages: [
      { align: "left", text: "Te envio el comprobante del pago.", time: "09:48" },
      {
        align: "right",
        text: "Recibido. Lo validamos y dejo registrado el estado.",
        time: "09:48",
      },
      { align: "left", text: "Perfecto.", time: "09:49" },
    ],
    result: {
      title: "Comprobante validado",
      detail: "Estado confirmado y operacion ordenada.",
    },
  },
];

const AUTOPLAY_MS = 4800;

export const MockCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % scenarios.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeScenario = useMemo(() => scenarios[activeIndex], [activeIndex]);
  const ActiveIcon = activeScenario.icon;

  return (
    <div
      className="mx-auto w-full max-w-[17.75rem] select-none sm:max-w-[18.75rem] lg:max-w-[19.25rem] xl:max-w-[21.25rem]"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto w-[17.75rem] rounded-[2.5rem] border border-white/10 bg-[#05070a] p-2.5 shadow-[0_26px_90px_rgba(0,0,0,0.42)] sm:w-[18.75rem] lg:w-[19.25rem] xl:w-[21.25rem]">
        <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(0,245,138,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
        <div className="absolute inset-x-12 top-2.5 h-5 rounded-b-2xl bg-black" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/6 bg-[#091018]">
          <div className="border-b border-white/6 bg-[linear-gradient(180deg,#101821_0%,#0c131b_100%)] px-4 pb-3.5 pt-7">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                  WhatsApp conectado
                </p>
                <h3 className="mt-1 truncate text-sm font-semibold text-white sm:text-[0.95rem]">
                  {activeScenario.title}
                </h3>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary sm:h-9 sm:w-9">
                <ActiveIcon className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-3.5 flex flex-wrap gap-2">
              {scenarios.map((scenario, index) => (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                    index === activeIndex
                      ? "border-primary/20 bg-primary/12 text-primary shadow-[0_0_18px_rgba(0,245,138,0.16)]"
                      : "border-white/8 bg-white/[0.03] text-on-surface-variant hover:border-white/16 hover:text-white"
                  }`}
                  aria-label={`Ver caso de ${scenario.label}`}
                  aria-pressed={index === activeIndex}
                >
                  {scenario.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[16.2rem] overflow-hidden bg-[linear-gradient(180deg,rgba(8,13,18,0.74)_0%,rgba(8,13,18,0.96)_100%)] px-3.5 py-4 sm:min-h-[16.8rem] lg:min-h-[17.6rem] xl:min-h-[18.9rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,245,138,0.08),transparent_26%)]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex min-h-[14.7rem] flex-col justify-end gap-2.5 sm:min-h-[15.2rem] lg:min-h-[16rem] xl:min-h-[17.2rem]"
              >
                {activeScenario.messages.map((message, index) => (
                  <motion.div
                    key={`${activeScenario.id}-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, delay: index * 0.06 }}
                    className={`max-w-[82%] rounded-[1.15rem] px-3 py-2.5 text-[0.78rem] leading-5 sm:text-[0.82rem] ${
                      message.align === "left"
                        ? "self-start rounded-bl-md border border-white/6 bg-[#111a23] text-white"
                        : "self-end rounded-br-md border border-primary/14 bg-primary/[0.12] text-primary"
                    }`}
                  >
                    <div>{message.text}</div>
                    <div className="mt-1.5 text-[0.56rem] text-white/38">{message.time}</div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.24, delay: 0.16 }}
                  className="relative mt-1 overflow-hidden rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3.5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,245,138,0.1),transparent_34%)]" />
                  <div className="relative">
                    <div className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      Resultado
                    </div>
                    <div className="mt-1 text-[0.96rem] font-semibold text-white sm:text-base">
                      {activeScenario.result.title}
                    </div>
                    <div className="mt-1.5 text-[0.72rem] leading-5 text-on-surface-variant sm:text-[0.74rem]">
                      {activeScenario.result.detail}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="border-t border-white/6 bg-[#0d141d] px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                Casos de uso
              </div>
              <div className="flex items-center gap-2">
                {scenarios.map((scenario, index) => (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ir a ${scenario.label}`}
                    aria-pressed={index === activeIndex}
                    className={`group relative flex h-2.5 items-center rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-white/12"
                        : "w-2.5 bg-white/18 hover:bg-white/28"
                    }`}
                  >
                    {index === activeIndex && (
                      <motion.span
                        key={`${scenario.id}-progress`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: isPaused ? 0 : AUTOPLAY_MS / 1000,
                          ease: "linear",
                        }}
                        className="absolute inset-y-0 left-0 rounded-full bg-primary shadow-[0_0_14px_rgba(0,245,138,0.45)]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
