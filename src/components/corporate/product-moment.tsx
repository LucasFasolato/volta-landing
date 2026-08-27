"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MessageCircle,
  Plus,
  RotateCcw,
  ShoppingBag,
  Workflow,
} from "lucide-react";

type ProductKey = "store" | "portfolio" | "booking" | "automate";

function StoreMoment() {
  const [count, setCount] = useState(0);
  const subtotal = count * 28500;

  return (
    <div className="rounded-[1.7rem] border border-white/10 bg-[#0d0f11] p-3 shadow-[0_32px_80px_rgba(0,0,0,.3)] sm:p-4">
      <div className="rounded-[1.35rem] border border-white/8 bg-[#131518] p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div><small className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/35">VOLTA STORE</small><strong className="mt-1 block text-sm text-white">Elegí un producto</strong></div>
          <ShoppingBag className="h-5 w-5 text-primary" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {["01", "02", "03"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCount((value) => Math.min(value + 1, 9))}
              className="group rounded-2xl border border-white/8 bg-white/[0.025] p-2 text-left transition hover:border-primary/30 hover:bg-primary/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:p-3"
              aria-label={`Agregar producto ${item}`}
            >
              <div className="aspect-[4/3] rounded-xl bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,136,.25),transparent_38%),linear-gradient(145deg,#26292d,#111316)]" />
              <div className="mt-3 flex items-end justify-between gap-2">
                <div><small className="block text-[0.52rem] uppercase tracking-[0.12em] text-white/30">Producto {item}</small><strong className="mt-1 block text-[0.7rem] text-white sm:text-xs">$ 28.500</strong></div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.07] text-white/60 transition group-hover:bg-primary group-hover:text-[#04120a]"><Plus className="h-3.5 w-3.5" /></span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/[0.07] p-4" aria-live="polite">
          <div className="flex items-center justify-between gap-4">
            <div><small className="text-white/40">Tu pedido</small><strong className="block text-sm text-white">{count} {count === 1 ? "producto" : "productos"}</strong></div>
            <strong className="text-sm text-primary">$ {subtotal.toLocaleString("es-AR")}</strong>
          </div>
          <div className={`mt-3 flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-xs font-bold transition ${count > 0 ? "bg-primary text-[#04120a]" : "bg-white/[0.06] text-white/35"}`}>
            <MessageCircle className="h-4 w-4" /> Enviar por WhatsApp
          </div>
        </div>
      </div>
      <p className="px-2 pb-1 pt-3 text-[0.68rem] leading-5 text-white/38">Probalo: agregá productos y mirá cómo una visita se convierte en un pedido listo para enviar.</p>
    </div>
  );
}

const portfolioProjects = [
  { name: "Vivienda Patio", kind: "Arquitectura", index: "01 / 03", background: "linear-gradient(145deg,#8b8e8a,#373a3a)" },
  { name: "Legajo Técnico", kind: "Documentación", index: "02 / 03", background: "linear-gradient(145deg,#b7ab92,#5c5549)" },
  { name: "Interior Sur", kind: "Interiorismo", index: "03 / 03", background: "linear-gradient(145deg,#777b80,#27292d)" },
];

function PortfolioMoment() {
  const [active, setActive] = useState(0);
  const project = portfolioProjects[active];

  return (
    <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#e8e2d8] text-[#151515] shadow-[0_32px_80px_rgba(0,0,0,.28)]">
      <div className="grid min-h-[25rem] grid-cols-[3.6rem_1fr] sm:min-h-[29rem] sm:grid-cols-[4.3rem_1fr]">
        <aside className="flex flex-col items-center gap-5 border-r border-black/10 bg-[#ddd5c8] px-2 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#151515] text-[0.62rem] font-bold text-white">LF</div>
          <div className="h-14 w-px bg-black/15" />
          {portfolioProjects.map((item, index) => (
            <button key={item.name} type="button" onClick={() => setActive(index)} aria-label={`Ver ${item.name}`} className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.58rem] font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 ${active === index ? "bg-[#151515] text-white" : "text-black/35 hover:bg-black/5 hover:text-black/70"}`}>0{index + 1}</button>
          ))}
        </aside>

        <div className="flex min-w-0 flex-col p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div><small className="text-[0.56rem] font-bold uppercase tracking-[0.17em] text-black/42">{project.kind}</small><strong className="mt-2 block max-w-[10ch] text-2xl leading-[0.95] tracking-[-0.05em] sm:text-4xl">{project.name}</strong></div>
            <span className="text-[0.62rem] font-bold text-black/35">{project.index}</span>
          </div>

          <div className="mt-5 flex min-h-[13rem] flex-1 items-end rounded-2xl p-4 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/75 transition-all duration-300" style={{ background: project.background }}>
            Proyecto seleccionado
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {portfolioProjects.map((item, index) => (
              <button key={item.name} type="button" onClick={() => setActive(index)} className={`min-h-14 rounded-xl border p-2 text-left text-[0.55rem] font-semibold leading-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 ${active === index ? "border-black/35 bg-black text-white" : "border-black/10 bg-black/5 text-black/55 hover:bg-black/10"}`}>{item.name}</button>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-black/10 px-5 py-3 text-[0.68rem] leading-5 text-black/45">Probalo: cambiá de proyecto. Portfolio hace que el trabajo tenga presencia antes de que tengas que explicarlo.</p>
    </div>
  );
}

const bookingTimes = ["09:00", "10:30", "12:00", "15:00", "16:30", "18:00"];

function BookingMoment() {
  const [selected, setSelected] = useState<string | null>("10:30");

  return (
    <div className="rounded-[1.7rem] border border-white/10 bg-[#0e1012] p-3 shadow-[0_32px_80px_rgba(0,0,0,.3)] sm:p-4">
      <div className="rounded-[1.35rem] border border-white/8 bg-[#141619] p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div><small className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/35">VOLTA BOOKING</small><strong className="mt-2 block text-2xl tracking-[-0.04em] text-white">Elegí cuándo.</strong></div>
          <CalendarDays className="h-5 w-5 text-primary" />
        </div>

        <div className="mt-5 grid grid-cols-5 gap-2">
          {["L 24", "M 25", "X 26", "J 27", "V 28"].map((day, index) => <span key={day} className={`rounded-xl border px-1.5 py-3 text-center text-[0.58rem] font-bold ${index === 2 ? "border-primary/50 bg-primary/10 text-primary" : "border-white/8 bg-white/[0.025] text-white/40"}`}>{day}</span>)}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {bookingTimes.map((time) => {
            const active = selected === time;
            return <button key={time} type="button" onClick={() => setSelected(time)} className={`min-h-11 rounded-xl border px-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${active ? "border-primary bg-primary text-[#04120a]" : "border-white/8 bg-white/[0.025] text-white/65 hover:border-primary/25 hover:text-white"}`}>{time}</button>;
          })}
        </div>

        <div className={`mt-4 flex items-center gap-3 rounded-2xl border p-4 transition ${selected ? "border-primary/18 bg-primary/[0.07]" : "border-white/8 bg-white/[0.025]"}`} aria-live="polite">
          <span className={`flex h-8 w-8 items-center justify-center rounded-full ${selected ? "bg-primary text-[#04120a]" : "bg-white/8 text-white/35"}`}>{selected ? <Check className="h-4 w-4" /> : <CalendarDays className="h-4 w-4" />}</span>
          <div><small className="text-white/40">{selected ? "Reserva confirmada" : "Elegí un horario"}</small><strong className="block text-sm text-white">{selected ? `Miércoles · ${selected}` : "Disponibilidad real"}</strong></div>
        </div>
      </div>
      <p className="px-2 pb-1 pt-3 text-[0.68rem] leading-5 text-white/38">Probalo: elegí otro horario. Booking transforma disponibilidad en una decisión clara.</p>
    </div>
  );
}

const automateSteps = [
  ["Entrada", "Llega una solicitud"],
  ["Decisión", "Se interpreta el caso"],
  ["Acción", "Se ejecuta el siguiente paso"],
  ["Resultado", "El proceso queda encaminado"],
] as const;

function AutomateMoment() {
  const [step, setStep] = useState(0);
  const complete = step >= automateSteps.length;

  function advance() {
    setStep((current) => (current >= automateSteps.length ? 0 : current + 1));
  }

  return (
    <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#090c0b] p-3 shadow-[0_32px_80px_rgba(0,0,0,.3)] sm:p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_42%,rgba(0,255,136,.1),transparent_36%)]" />
      <div className="relative rounded-[1.35rem] border border-white/8 bg-black/20 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div><small className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/35">VOLTA AUTOMATE · EN PREPARACIÓN</small><strong className="mt-2 block max-w-[15ch] text-2xl leading-tight tracking-[-0.04em] text-white">Un proceso, puesto en movimiento.</strong></div>
          <Workflow className="h-5 w-5 text-primary" />
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-4">
          {automateSteps.map(([label, detail], index) => {
            const active = index < step;
            return (
              <div key={label} className="relative">
                <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-bold transition duration-300 ${active ? "border-primary bg-primary text-[#04120a] shadow-[0_0_26px_rgba(0,255,136,.18)]" : "border-white/10 bg-white/[0.025] text-white/35"}`}>
                  {active ? <Check className="h-4 w-4" /> : index + 1}
                </div>
                <small className="mt-3 block text-[0.54rem] font-bold uppercase tracking-[0.14em] text-white/30">{label}</small>
                <strong className={`mt-1 block text-xs leading-5 transition ${active ? "text-white" : "text-white/42"}`}>{detail}</strong>
                {index < automateSteps.length - 1 && <div className={`absolute left-10 top-5 hidden h-px w-[calc(100%-1rem)] transition sm:block ${index < step - 1 ? "bg-primary/60" : "bg-white/8"}`} />}
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div aria-live="polite" className="text-xs text-white/45">{complete ? "Flujo completado. Reiniciá para volver a verlo." : `Paso ${Math.min(step + 1, automateSteps.length)} de ${automateSteps.length}`}</div>
          <button type="button" onClick={advance} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-[#04120a] transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70">
            {complete ? <><RotateCcw className="h-4 w-4" /> Reiniciar flujo</> : <>Avanzar flujo <ArrowRight className="h-4 w-4" /></>}
          </button>
        </div>
      </div>
      <p className="relative px-2 pb-1 pt-3 text-[0.68rem] leading-5 text-white/38">Concepto de producto en preparación. El momento muestra la lógica de automatización sin inventar integraciones ni promesas comerciales.</p>
    </div>
  );
}

export function ProductMoment({ type }: { type: ProductKey }) {
  if (type === "store") return <StoreMoment />;
  if (type === "portfolio") return <PortfolioMoment />;
  if (type === "booking") return <BookingMoment />;
  return <AutomateMoment />;
}
