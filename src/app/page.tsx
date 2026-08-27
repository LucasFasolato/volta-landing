import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  LayoutGrid,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import { ProductMomentV2 } from "@/components/corporate/product-moment-v2";
import {
  SectionHeading,
  VoltaFooter,
  VoltaHeader,
} from "@/components/corporate/volta-web-shell";
import { corporateProducts } from "@/data/corporate-products";

const outcomeIcons = {
  store: ShoppingBag,
  booking: CalendarDays,
  portfolio: LayoutGrid,
  automate: Workflow,
} as const;

const outcomeLabels = {
  store: "Vender online",
  booking: "Recibir reservas",
  portfolio: "Mostrar tu trabajo",
  automate: "Automatizar procesos",
} as const;

const principles = [
  ["01", "Simple", "Lo esencial primero. Sin caminos innecesarios."],
  ["02", "Tu identidad", "VOLTA acompaña tu marca; no la reemplaza."],
  ["03", "Mobile primero", "La experiencia nace donde están tus clientes."],
  ["04", "Una acción clara", "Vender. Reservar. Mostrar. Automatizar."],
] as const;

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#f6f8f5] text-[#07120f]">
      <VoltaHeader />

      <main>
        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="pointer-events-none absolute left-[8%] top-[-260px] h-[520px] w-[620px] rounded-full bg-[#12e89a]/12 blur-3xl" />
          <div className="volta-container relative grid items-center gap-10 py-16 sm:py-20 lg:min-h-[720px] lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:py-24">
            <div className="max-w-2xl">
              <p className="volta-eyebrow">VOLTA · Productos digitales</p>
              <h1 className="volta-display mt-6 max-w-[9.5ch]">
                Tu próximo paso, <span className="text-[#0aa66f]">online.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#5f6965] sm:text-lg sm:leading-8">
                Elegí qué querés lograr. VOLTA te da un producto simple, profesional y listo para poner en movimiento.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#productos"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#12e89a] px-6 text-sm font-black text-[#043322] shadow-[0_16px_38px_rgba(18,232,154,.22)] transition hover:-translate-y-0.5 hover:bg-[#0fdb91]"
                >
                  Encontrá tu VOLTA <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/[0.09] bg-white px-6 text-sm font-bold text-[#39433f] transition hover:-translate-y-0.5 hover:bg-[#fbfcfb]"
                >
                  Cómo funciona
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#69736e]">
                {["Simple por defecto", "Personalizable", "Pensado para mobile"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#0a9b69]" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px] lg:justify-self-end">
              <div className="absolute -inset-10 rounded-full bg-[#12e89a]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-[#07120f] p-4 text-white shadow-[0_34px_100px_rgba(7,18,15,.18)] sm:p-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-1 pb-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Quiero</p>
                    <p className="mt-1 text-sm font-bold">Elegir qué activar</p>
                  </div>
                  <span className="rounded-full bg-[#12e89a]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#83ffc0]">
                    VOLTA
                  </span>
                </div>
                <div className="mt-3 grid gap-2">
                  {corporateProducts.map((product) => {
                    const Icon = outcomeIcons[product.key];
                    return (
                      <div
                        key={product.key}
                        className="group flex items-center gap-3 rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-3.5 sm:p-4"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.05] text-[#79f8b7]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold">{outcomeLabels[product.key]}</p>
                          <p className="mt-0.5 text-[11px] text-white/38">{product.name}</p>
                        </div>
                        <span className={`text-[9px] font-bold ${product.href ? "text-[#68dca2]" : "text-white/25"}`}>
                          {product.href ? "ONLINE" : "PRÓXIMAMENTE"}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 px-1 text-[10px] leading-5 text-white/30">
                  Una necesidad concreta. Un producto VOLTA. Una acción clara.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="volta-section bg-white">
          <div className="volta-container">
            <SectionHeading
              eyebrow="Productos VOLTA"
              title="No elijas tecnología. Elegí qué querés lograr."
              copy="Cada producto resuelve una necesidad concreta y muestra el momento que importa, sin obligarte a empezar desde cero."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {corporateProducts.map((product) => (
                <article
                  key={product.key}
                  className="flex min-w-0 flex-col overflow-hidden rounded-[32px] border border-black/[0.07] bg-[#f6f8f5] p-4 sm:p-5"
                >
                  <ProductMomentV2 type={product.key} status={product.status} />
                  <div className="px-1 pb-1 pt-6 sm:px-2">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7b8580]">
                      <span className="text-[#0a8f62]">{product.intent}</span>
                      <span>·</span>
                      <span>{product.status}</span>
                    </div>
                    <h2 className="mt-3 max-w-[15ch] text-3xl font-black leading-[1.02] tracking-[-0.05em] sm:text-[2.15rem]">
                      {product.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-[#606a65]">{product.description}</p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#6f7974]">
                      {product.points.map((point) => (
                        <span key={point} className="inline-flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#12e89a]" /> {point}
                        </span>
                      ))}
                    </div>
                    {product.href ? (
                      <Link
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        data-product-placement="products"
                        className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#07120f] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#15221d]"
                      >
                        Conocer {product.shortName} <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="mt-6 inline-flex h-11 w-fit items-center rounded-full border border-black/[0.08] bg-white px-5 text-sm font-bold text-[#9aa19e]">
                        En preparación
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="volta-section border-y border-black/[0.06] bg-[#f6f8f5]">
          <div className="volta-container">
            <SectionHeading
              eyebrow="Cómo funciona"
              title="Tres pasos. Nada de empezar de cero."
              copy="VOLTA reduce las decisiones técnicas para que puedas pasar antes de la idea a algo que ya funciona online."
            />
            <div className="mt-10 grid border-t border-black/[0.08] md:grid-cols-3">
              {[
                ["01", "Elegí", "Definí qué querés resolver: vender, reservar, mostrarte o automatizar."],
                ["02", "Hacelo tuyo", "Cargá tu contenido y ajustá la identidad con controles simples y guiados."],
                ["03", "Ponelo online", "Compartí una experiencia profesional pensada para convertir una visita en una acción."],
              ].map(([number, title, copy], index) => (
                <article
                  key={number}
                  className={`border-b border-black/[0.08] py-7 md:min-h-[240px] md:px-7 md:py-8 ${index < 2 ? "md:border-r" : ""}`}
                >
                  <span className="text-[10px] font-black tracking-[0.14em] text-[#0a8f62]">{number}</span>
                  <h3 className="mt-12 text-2xl font-black tracking-[-0.045em]">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#68726d]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="criterio" className="bg-[#07120f] text-white">
          <div className="volta-container py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
              <div>
                <p className="volta-eyebrow volta-eyebrow-dark">Por qué VOLTA</p>
                <h2 className="mt-4 max-w-[10ch] text-[clamp(2.6rem,5vw,4.8rem)] font-black leading-[.95] tracking-[-0.065em]">
                  Menos fricción también es diseño.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/48 lg:justify-self-end">
                Las mismas reglas se repiten en cada producto para que lo digital se sienta simple, profesional y propio.
              </p>
            </div>

            <div className="mt-12 grid border-t border-white/[0.1] sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(([number, title, copy], index) => (
                <article
                  key={number}
                  className={`border-b border-white/[0.1] py-6 sm:min-h-[210px] sm:px-6 sm:py-7 ${
                    index % 2 === 0 ? "sm:border-r" : ""
                  } ${index < 3 ? "lg:border-r" : "lg:border-r-0"}`}
                >
                  <span className="text-[9px] font-bold tracking-[0.15em] text-[#65dba1]">{number}</span>
                  <h3 className="mt-12 text-xl font-bold tracking-[-0.04em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/42">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="volta-section bg-white">
          <div className="volta-container">
            <div className="relative overflow-hidden rounded-[34px] border border-black/[0.07] bg-[#edf8f1] px-5 py-12 text-center sm:px-10 sm:py-16">
              <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-[#12e89a]/18 blur-3xl" />
              <div className="relative mx-auto max-w-3xl">
                <p className="volta-eyebrow justify-center">Tu próximo paso</p>
                <h2 className="mt-5 text-[clamp(2.7rem,6vw,5.4rem)] font-black leading-[.94] tracking-[-0.07em]">
                  Elegí qué querés poner en movimiento.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#64706a] sm:text-base sm:leading-7">
                  Store, Booking y Portfolio ya tienen un producto para conocer. Automate sigue en preparación.
                </p>
                <a
                  href="#productos"
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#07120f] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#15221d]"
                >
                  Ver productos <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <VoltaFooter />
    </div>
  );
}
