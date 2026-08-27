import type { CorporateProductKey } from "@/data/corporate-products";

type ProductMomentProps = {
  type: CorporateProductKey;
  status: string;
};

function ProductFrame({
  label,
  status,
  children,
}: {
  label: string;
  status: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[30px] border border-black/[0.08] bg-white shadow-[0_28px_90px_rgba(7,18,15,0.14)]"
    >
      <div className="flex h-12 items-center justify-between border-b border-black/[0.06] px-4 sm:px-5">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#69716e]">
          <span className="h-2 w-2 rounded-full bg-[#12e89a]" />
          {label}
        </div>
        <span className="rounded-full bg-[#eef7f2] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#087b55]">
          {status}
        </span>
      </div>
      {children}
    </div>
  );
}

function StoreMoment({ status }: { status: string }) {
  return (
    <ProductFrame label="VOLTA Store" status={status}>
      <div className="grid gap-3 bg-[#f4f6f4] p-3 sm:grid-cols-[1.15fr_.85fr] sm:p-4">
        <div className="overflow-hidden rounded-[22px] border border-black/[0.06] bg-[#e9eee9]">
          <div className="aspect-[4/3] bg-[linear-gradient(145deg,#c9d3cc,#f4f5ef_58%,#9caea2)]" />
          <div className="bg-white p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d8581]">Nueva colección</p>
            <div className="mt-2 flex items-end justify-between gap-3">
              <div>
                <p className="text-base font-bold tracking-[-0.03em] text-[#07120f]">Essential Set</p>
                <p className="mt-1 text-xs text-[#6b736f]">$42.000</p>
              </div>
              <span className="rounded-full bg-[#12e89a] px-3 py-2 text-[10px] font-bold text-[#043322]">Agregar</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-[22px] bg-[#07120f] p-4 text-white sm:p-5">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#7e9189]">Tu pedido</p>
            <div className="mt-5 flex items-center justify-between border-b border-white/10 pb-3 text-xs">
              <span>Essential Set</span>
              <span className="text-white/55">x1</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-white/55">Total</span>
              <strong>$42.000</strong>
            </div>
          </div>
          <div className="mt-8 rounded-full bg-[#12e89a] px-4 py-3 text-center text-[10px] font-black text-[#043322]">
            Continuar por WhatsApp →
          </div>
        </div>
      </div>
    </ProductFrame>
  );
}

function BookingMoment({ status }: { status: string }) {
  return (
    <ProductFrame label="VOLTA Booking" status={status}>
      <div className="grid gap-3 bg-[#f4f6f4] p-3 sm:grid-cols-[.9fr_1.1fr] sm:p-4">
        <div className="rounded-[22px] border border-black/[0.06] bg-white p-4 sm:p-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#7d8581]">Elegí un horario</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {["13:30", "14:30", "15:15", "16:30"].map((time) => (
              <span
                key={time}
                className={`rounded-xl px-3 py-3 text-center text-xs font-bold ${
                  time === "14:30" ? "bg-[#12e89a] text-[#043322]" : "border border-black/[0.07] bg-[#f7f8f7] text-[#59625e]"
                }`}
              >
                {time}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs text-[#68716d]">Corte · 30 min</p>
        </div>
        <div className="flex flex-col justify-between rounded-[22px] bg-[#07120f] p-5 text-white">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#7e9189]">Reserva</p>
              <span className="h-2 w-2 rounded-full bg-[#12e89a]" />
            </div>
            <p className="mt-7 text-4xl font-semibold tracking-[-0.06em]">14:30</p>
            <p className="mt-3 text-sm font-bold">Miércoles · Corte</p>
            <p className="mt-1 text-xs text-white/45">Juan Pérez</p>
          </div>
          <div className="mt-8 rounded-2xl border border-[#12e89a]/20 bg-[#12e89a]/10 px-4 py-3 text-xs font-bold text-[#8dffc4]">
            ✓ Reserva confirmada
          </div>
        </div>
      </div>
    </ProductFrame>
  );
}

function PortfolioMoment({ status }: { status: string }) {
  return (
    <ProductFrame label="VOLTA Portfolio" status={status}>
      <div className="grid min-h-[330px] bg-[#ecebe6] text-[#171714] sm:grid-cols-[.76fr_1.24fr]">
        <div className="flex flex-col justify-between border-b border-black/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/40">Arquitectura · 2026</p>
            <p className="mt-5 max-w-[8ch] font-serif text-4xl leading-[.9] tracking-[-0.045em]">Casa Circular</p>
            <p className="mt-5 text-xs leading-5 text-black/50">Luz, recorrido y materialidad en una composición editorial.</p>
          </div>
          <p className="mt-8 border-t border-black/10 pt-4 text-[9px] uppercase tracking-[0.14em] text-black/35">Proyecto publicado</p>
        </div>
        <div className="grid gap-2 p-2 sm:grid-rows-[1.3fr_.7fr]">
          <div className="rounded-[18px] bg-[linear-gradient(145deg,#85877e,#ddd9cd_62%,#a7a499)]" />
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-[18px] bg-[linear-gradient(145deg,#5f625d,#a9a79e)]" />
            <div className="rounded-[18px] bg-[linear-gradient(145deg,#d8d4c7,#8d9088)]" />
          </div>
        </div>
      </div>
    </ProductFrame>
  );
}

function AutomateMoment({ status }: { status: string }) {
  const steps = [
    ["01", "Evento", "Llega una solicitud"],
    ["02", "Regla", "VOLTA organiza el flujo"],
    ["03", "Resultado", "La tarea queda encaminada"],
  ];

  return (
    <ProductFrame label="VOLTA Automate" status={status}>
      <div className="bg-[#07120f] p-4 text-white sm:p-6">
        <div className="grid gap-2 sm:grid-cols-3">
          {steps.map(([number, title, copy], index) => (
            <div key={number} className="relative rounded-[20px] border border-white/[0.08] bg-white/[0.035] p-4">
              {index < steps.length - 1 ? (
                <span className="absolute -right-2 top-7 hidden h-px w-4 bg-[#12e89a]/45 sm:block" />
              ) : null}
              <span className="text-[9px] font-bold tracking-[0.15em] text-[#62dca0]">{number}</span>
              <p className="mt-8 text-sm font-bold">{title}</p>
              <p className="mt-2 text-xs leading-5 text-white/45">{copy}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] leading-5 text-white/35">
          Dirección en preparación. Sin promesas de integraciones o disponibilidad todavía.
        </p>
      </div>
    </ProductFrame>
  );
}

export function ProductMomentV2({ type, status }: ProductMomentProps) {
  if (type === "store") return <StoreMoment status={status} />;
  if (type === "booking") return <BookingMoment status={status} />;
  if (type === "portfolio") return <PortfolioMoment status={status} />;
  return <AutomateMoment status={status} />;
}
