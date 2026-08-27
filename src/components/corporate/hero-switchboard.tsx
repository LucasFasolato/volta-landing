"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  LayoutGrid,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";

type ProductKey = "store" | "portfolio" | "booking" | "automate";

const options: Array<{
  key: ProductKey;
  intent: string;
  name: string;
  eyebrow: string;
  result: string;
  href: string;
  status: string;
}> = [
  {
    key: "store",
    intent: "Vender",
    name: "VOLTA Store",
    eyebrow: "PARA VENDER",
    result: "Una tienda que termina en pedidos.",
    href: "#store",
    status: "Disponible",
  },
  {
    key: "portfolio",
    intent: "Mostrarte",
    name: "VOLTA Portfolio",
    eyebrow: "PARA MOSTRARTE",
    result: "Tu trabajo, presentado como merece verse.",
    href: "#portfolio",
    status: "Disponible",
  },
  {
    key: "booking",
    intent: "Reservas",
    name: "VOLTA Booking",
    eyebrow: "PARA ORGANIZARTE",
    result: "Disponibilidad que termina en una reserva.",
    href: "#booking",
    status: "En evolución",
  },
  {
    key: "automate",
    intent: "Automatizar",
    name: "VOLTA Automate",
    eyebrow: "PARA AUTOMATIZAR",
    result: "Procesos repetitivos que empiezan a moverse solos.",
    href: "#automate",
    status: "En preparación",
  },
];

function StoreStage() {
  return (
    <div className="grid h-full min-h-[21rem] grid-rows-[auto_1fr_auto] gap-5 rounded-[1.55rem] border border-white/10 bg-[#101114] p-5 sm:min-h-[25rem] sm:p-6">
      <div className="flex items-center justify-between border-b border-white/8 pb-4 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white/45">
        <span>voltastore.app/tu-marca</span>
        <ShoppingBag className="h-4 w-4 text-primary" />
      </div>
      <div className="grid grid-cols-2 gap-3 self-center">
        {["01", "02", "03", "04"].map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
            <div className="aspect-[4/3] rounded-xl bg-[radial-gradient(circle_at_65%_30%,rgba(0,255,136,.22),transparent_42%),linear-gradient(145deg,#202227,#111216)]" />
            <div className="mt-3 flex items-end justify-between gap-2">
              <div>
                <small className="block text-[0.58rem] uppercase tracking-[0.14em] text-white/35">Producto {item}</small>
                <strong className="mt-1 block text-xs text-white">$ 28.500</strong>
              </div>
              <span className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? "bg-primary text-[#04120a]" : "bg-white/8 text-white/70"}`}>+</span>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-primary/20 bg-primary/[0.07] p-4">
        <div className="flex items-center justify-between gap-4">
          <div><small className="text-white/45">Tu pedido</small><strong className="block text-sm text-white">3 productos</strong></div>
          <strong className="text-sm text-primary">$ 84.500</strong>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-[#04120a]">
          <MessageCircle className="h-4 w-4" /> Enviar por WhatsApp
        </div>
      </div>
    </div>
  );
}

function PortfolioStage() {
  return (
    <div className="grid h-full min-h-[21rem] grid-cols-[3.3rem_1fr] overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#f2efe8] text-[#151515] sm:min-h-[25rem]">
      <aside className="flex flex-col items-center gap-5 border-r border-black/10 bg-[#e6e0d5] px-2 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151515] text-[0.62rem] font-bold text-white">LF</div>
        <div className="h-12 w-px bg-black/15" />
        {['01','02','03'].map((n) => <span key={n} className="text-[0.58rem] font-bold text-black/35">{n}</span>)}
      </aside>
      <div className="flex flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div><small className="text-[0.58rem] font-bold tracking-[0.16em] text-black/45">ARQUITECTURA · DISEÑO</small><strong className="mt-2 block max-w-[8ch] text-2xl leading-[0.95] tracking-[-0.05em] sm:text-3xl">Trabajo que habla por vos.</strong></div>
          <span className="text-[0.62rem] font-bold text-black/35">03 / 08</span>
        </div>
        <div className="mt-5 min-h-0 flex-1 rounded-2xl bg-[linear-gradient(145deg,#7d807d,#383b3b)] p-4 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/70">
          Proyecto destacado
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {['Vivienda 01','Legajo técnico','Interior 03'].map((label) => <div key={label} className="aspect-[4/3] rounded-xl bg-black/10 p-2 text-[0.52rem] font-semibold text-black/55">{label}</div>)}
        </div>
      </div>
    </div>
  );
}

function BookingStage() {
  return (
    <div className="flex h-full min-h-[21rem] flex-col rounded-[1.55rem] border border-white/10 bg-[#111316] p-5 sm:min-h-[25rem] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div><small className="text-[0.6rem] font-bold tracking-[0.18em] text-white/40">RESERVAR TURNO</small><strong className="mt-2 block text-2xl tracking-[-0.04em] text-white sm:text-3xl">Elegí cuándo.</strong></div>
        <CalendarDays className="h-5 w-5 text-primary" />
      </div>
      <div className="mt-6 grid grid-cols-5 gap-2">
        {['L 24','M 25','X 26','J 27','V 28'].map((day, index) => <span key={day} className={`rounded-xl border px-2 py-3 text-center text-[0.62rem] font-bold ${index === 2 ? "border-primary/50 bg-primary/10 text-primary" : "border-white/8 bg-white/[0.025] text-white/45"}`}>{day}</span>)}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {['09:00','10:30','12:00','15:00','16:30','18:00'].map((time, index) => <span key={time} className={`rounded-xl border px-2 py-3 text-center text-xs font-semibold ${index === 1 ? "border-primary bg-primary text-[#04120a]" : "border-white/8 bg-white/[0.025] text-white/65"}`}>{time}</span>)}
      </div>
      <div className="mt-auto flex items-center gap-3 rounded-2xl border border-primary/18 bg-primary/[0.07] p-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[#04120a]"><Check className="h-4 w-4" /></span>
        <div><small className="text-white/40">Reserva confirmada</small><strong className="block text-sm text-white">Miércoles · 10:30</strong></div>
      </div>
    </div>
  );
}

function AutomateStage() {
  const nodes = [
    { label: "Entrada", detail: "Nueva consulta" },
    { label: "Regla", detail: "Clasificar" },
    { label: "Acción", detail: "Crear tarea" },
    { label: "Resultado", detail: "Proceso listo" },
  ];

  return (
    <div className="relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#0c0f0e] p-5 sm:min-h-[25rem] sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(0,255,136,.12),transparent_35%)]" />
      <div className="relative flex items-start justify-between gap-4">
        <div><small className="text-[0.6rem] font-bold tracking-[0.18em] text-white/40">VOLTA AUTOMATE</small><strong className="mt-2 block max-w-[12ch] text-2xl leading-tight tracking-[-0.04em] text-white sm:text-3xl">Un proceso, puesto en movimiento.</strong></div>
        <Workflow className="h-5 w-5 text-primary" />
      </div>
      <div className="relative my-auto grid gap-2 sm:grid-cols-4 sm:items-center">
        {nodes.map((node, index) => (
          <div key={node.label} className="relative flex items-center gap-3 sm:block">
            <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${index === 3 ? "border-primary bg-primary text-[#04120a]" : "border-primary/25 bg-primary/[0.07] text-primary"}`}>
              {index === 3 ? <Check className="h-4 w-4" /> : index + 1}
            </div>
            <div className="sm:mt-3"><small className="block text-[0.55rem] font-bold uppercase tracking-[0.14em] text-white/35">{node.label}</small><strong className="mt-1 block text-xs text-white/80">{node.detail}</strong></div>
            {index < nodes.length - 1 && <div className="absolute left-5 top-10 h-[calc(100%+0.5rem)] w-px bg-gradient-to-b from-primary/50 to-primary/5 sm:left-10 sm:top-5 sm:h-px sm:w-[calc(100%-1rem)]" />}
          </div>
        ))}
      </div>
      <div className="relative flex items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.035] p-4 text-xs text-white/55">
        <Sparkles className="h-4 w-4 text-primary" />
        En preparación · sin prometer integraciones que todavía no están publicadas.
      </div>
    </div>
  );
}

function Stage({ product }: { product: ProductKey }) {
  if (product === "store") return <StoreStage />;
  if (product === "portfolio") return <PortfolioStage />;
  if (product === "booking") return <BookingStage />;
  return <AutomateStage />;
}

export function HeroSwitchboard() {
  const [active, setActive] = useState<ProductKey>("store");
  const product = options.find((item) => item.key === active) ?? options[0];

  return (
    <div className="relative mx-auto w-full max-w-[44rem] lg:mx-0 lg:justify-self-end">
      <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle,rgba(0,255,136,.11),transparent_62%)] blur-2xl" />
      <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.1] bg-[#090b0d]/92 p-3 shadow-[0_30px_90px_rgba(0,0,0,.38)] backdrop-blur-xl sm:p-4">
        <div className="flex items-center justify-between gap-4 px-2 pb-3 pt-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/45">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(0,255,136,.65)]" />Ecosistema VOLTA</div>
          <span>{product.status}</span>
        </div>

        <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.025] p-2 sm:p-3">
          <Stage product={active} />
        </div>

        <div className="px-2 pb-1 pt-4">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-primary/80">{product.eyebrow}</span>
              <strong className="mt-1 block max-w-[25ch] text-sm text-white sm:text-base">{product.result}</strong>
            </div>
            <Link href={product.href} className="hidden items-center gap-1.5 text-xs font-bold text-white/65 transition hover:text-primary sm:flex">
              Ver {product.name.replace("VOLTA ", "")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist" aria-label="Qué querés activar">
            {options.map((option) => {
              const isActive = option.key === active;
              return (
                <button
                  key={option.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(option.key)}
                  className={`min-h-11 rounded-xl border px-3 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${isActive ? "border-primary/50 bg-primary text-[#04120a]" : "border-white/8 bg-white/[0.03] text-white/58 hover:border-white/16 hover:text-white"}`}
                >
                  {option.intent}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
