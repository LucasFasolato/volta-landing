import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  LayoutGrid,
  MessageCircle,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";

const products = [
  {
    name: "VOLTA Store",
    shortName: "Store",
    eyebrow: "Para vender",
    description:
      "Tu tienda online, con tu identidad. Catálogo, carrito y pedidos que terminan donde tu negocio ya trabaja: WhatsApp.",
    points: ["Catálogo y carrito", "Diseño personalizable", "Pedidos por WhatsApp"],
    icon: ShoppingBag,
    href: "https://www.voltastore.app",
    external: true,
    status: "Disponible",
  },
  {
    name: "VOLTA Portfolio",
    shortName: "Portfolio",
    eyebrow: "Para mostrarte",
    description:
      "Una presencia profesional para mostrar proyectos, experiencia y trabajos sin tener que diseñar una web desde cero.",
    points: ["Proyectos y legajos", "Identidad personalizable", "Experiencia mobile"],
    icon: LayoutGrid,
    href: "#contacto",
    external: false,
    status: "Disponible",
  },
  {
    name: "VOLTA Booking",
    shortName: "Booking",
    eyebrow: "Para organizarte",
    description:
      "Reservas online con disponibilidad real y una administración clara para servicios, profesionales, horarios y turnos.",
    points: ["Reservas online", "Agenda y disponibilidad", "Gestión simple"],
    icon: CalendarDays,
    href: "#contacto",
    external: false,
    status: "En evolución",
  },
] as const;

const principles = [
  ["01", "Simple de usar", "La complejidad queda detrás. La experiencia adelante tiene que ser obvia."],
  ["02", "Hecho para mobile", "La mayoría de tus clientes llega desde el teléfono. VOLTA nace pensando en eso."],
  ["03", "Tu identidad primero", "VOLTA no debería tapar a tu marca. El producto se adapta para que lo propio se vea."],
  ["04", "Listo para convertir", "Cada decisión busca acortar el camino entre una visita y una acción real."],
] as const;

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-on-surface">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="container-shell">
          <nav className="glass-panel ambient-shadow flex items-center justify-between rounded-[1.3rem] border border-white/10 px-3 py-2.5 sm:px-4 md:px-6">
            <Link href="#top" aria-label="VOLTA" className="transition-opacity hover:opacity-90">
              <BrandLogo priority imageClassName="h-9 w-9" labelClassName="text-lg" />
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              <Link href="#productos" className="text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-on-surface-variant transition-colors hover:text-white">
                Productos
              </Link>
              <Link href="#principios" className="text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-on-surface-variant transition-colors hover:text-white">
                Cómo pensamos
              </Link>
            </div>

            <Link href="#productos" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-primary px-4 text-xs font-bold text-[#04120a] transition hover:bg-secondary sm:text-sm">
              Ver productos
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-36 lg:min-h-screen lg:pb-24">
          <div className="fine-grid absolute inset-0 opacity-[0.16]" />
          <div className="glow-ambient left-[-11rem] top-24 h-[28rem] w-[28rem] bg-primary" />
          <div className="glow-ambient right-[-12rem] top-4 h-[26rem] w-[26rem] bg-accent-blue" />

          <div className="container-shell relative z-10">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-secondary sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  Tu próximo paso online
                </div>

                <h1 className="mt-7 max-w-[11ch] font-headline text-[clamp(4rem,8.2vw,7.7rem)] font-bold leading-[0.87] tracking-[-0.075em] text-white">
                  Activá tu presencia <span className="text-primary">online.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-[clamp(1rem,1.6vw,1.22rem)] leading-8 text-on-surface-variant">
                  VOLTA reúne productos digitales simples y profesionales para vender, mostrar tu trabajo y recibir reservas sin construir todo desde cero.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="#productos" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-base font-bold text-[#04120a] transition hover:bg-secondary">
                    Encontrá tu VOLTA
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="#principios" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.035] px-7 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]">
                    Qué hacemos distinto
                  </Link>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-on-surface-variant">
                  {["Mobile first", "Personalizable", "Sin complejidad innecesaria"].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[38rem] lg:mx-0 lg:justify-self-end">
                <div className="absolute -inset-7 rounded-[3rem] bg-primary/[0.055] blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-[#0b1016]/95 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.48)] sm:p-4">
                  <div className="flex items-center justify-between border-b border-white/8 px-2 pb-3 sm:px-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/70">Ecosistema VOLTA</span>
                    </div>
                    <span className="text-[0.65rem] font-medium text-on-surface-variant">3 productos</span>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="relative min-h-[19rem] overflow-hidden rounded-[1.6rem] border border-primary/15 bg-gradient-to-b from-primary/[0.09] to-white/[0.02] p-5 sm:row-span-2">
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary"><ShoppingBag className="h-4.5 w-4.5" /></span>
                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-primary">Store</span>
                      </div>
                      <p className="mt-8 text-xs font-semibold text-primary">Vendé online</p>
                      <p className="mt-2 font-headline text-2xl font-bold tracking-[-0.045em] text-white">Tu catálogo.<br />Tu identidad.<br />Tus pedidos.</p>
                      <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/8 bg-black/20 p-3">
                        <div className="flex items-center justify-between text-[0.65rem] text-white/65"><span>3 productos</span><span>$ 84.500</span></div>
                        <div className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary py-2 text-[0.67rem] font-bold text-[#04120a]"><MessageCircle className="h-3.5 w-3.5" />Enviar pedido</div>
                      </div>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/9 bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue"><LayoutGrid className="h-4 w-4" /></span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">Portfolio</span>
                      </div>
                      <p className="mt-5 font-headline text-xl font-bold tracking-[-0.04em] text-white">Mostrá lo que sabés hacer.</p>
                      <div className="mt-4 grid grid-cols-3 gap-1.5">
                        <span className="h-10 rounded-lg bg-white/[0.07]" /><span className="h-10 rounded-lg bg-white/[0.11]" /><span className="h-10 rounded-lg bg-white/[0.05]" />
                      </div>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/9 bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary"><CalendarDays className="h-4 w-4" /></span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">Booking</span>
                      </div>
                      <p className="mt-5 font-headline text-xl font-bold tracking-[-0.04em] text-white">Reservas, sin ida y vuelta.</p>
                      <div className="mt-4 flex gap-1.5">
                        {["09:00", "10:30", "12:00"].map((time, index) => <span key={time} className={`flex-1 rounded-lg border px-1 py-2 text-center text-[0.6rem] ${index === 1 ? "border-primary/30 bg-primary/10 text-primary" : "border-white/8 text-white/50"}`}>{time}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-surface-container-lowest/70">
          <div className="container-shell py-6">
            <div className="grid gap-4 text-center sm:grid-cols-3 sm:text-left">
              <p className="text-sm text-on-surface-variant"><strong className="font-semibold text-white">Una marca.</strong> Distintas soluciones.</p>
              <p className="text-sm text-on-surface-variant"><strong className="font-semibold text-white">Un criterio.</strong> Todo tiene que ser simple.</p>
              <p className="text-sm text-on-surface-variant"><strong className="font-semibold text-white">Un objetivo.</strong> Que puedas avanzar online.</p>
            </div>
          </div>
        </section>

        <section id="productos" className="section-padding relative bg-surface">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="section-kicker">Productos</p>
                <h2 className="section-title mt-5">Elegí qué querés activar.</h2>
              </div>
              <p className="section-copy lg:justify-self-end">
                VOLTA no es una única app que intenta hacer de todo. Es una familia de productos enfocados, construidos con la misma lógica de simplicidad, diseño y conversión.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <article key={product.name} className="surface-card group relative flex min-h-[31rem] flex-col overflow-hidden p-6 md:p-7">
                    <div className="absolute right-[-4rem] top-[-4rem] h-44 w-44 rounded-full bg-primary/[0.07] blur-3xl transition duration-500 group-hover:bg-primary/[0.12]" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-on-surface-variant">{product.status}</span>
                    </div>

                    <div className="relative mt-8">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">{product.eyebrow}</p>
                      <h3 className="mt-3 font-headline text-[2rem] font-bold tracking-[-0.05em] text-white">{product.name}</h3>
                      <p className="mt-4 text-[0.95rem] leading-7 text-on-surface-variant">{product.description}</p>
                    </div>

                    <div className="mt-7 space-y-3">
                      {product.points.map((point) => (
                        <div key={point} className="flex items-center gap-3 text-sm text-white/90">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                          {point}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-9">
                      <Link href={product.href} target={product.external ? "_blank" : undefined} rel={product.external ? "noreferrer" : undefined} className="group/link flex items-center justify-between rounded-2xl border border-white/9 bg-white/[0.025] px-4 py-3.5 text-sm font-bold text-white transition hover:border-primary/20 hover:bg-primary/[0.05] hover:text-primary">
                        Conocer {product.shortName}
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="principios" className="section-padding relative overflow-hidden">
          <div className="glow-ambient left-[-12rem] top-1/3 h-80 w-80 bg-primary" />
          <div className="container-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="section-kicker">Principios VOLTA</p>
                <h2 className="section-title mt-5">La tecnología no debería sentirse complicada.</h2>
                <p className="section-copy mt-6">
                  Lo importante no es cuántas funciones tiene un producto. Es qué tan rápido entendés cómo usarlo y cuánto te ayuda a avanzar.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map(([number, title, description]) => (
                  <article key={number} className="surface-card min-h-[15rem] p-6 md:p-7">
                    <span className="font-headline text-xs font-bold tracking-[0.18em] text-primary">{number}</span>
                    <h3 className="mt-7 font-headline text-xl font-bold tracking-[-0.04em] text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-on-surface-variant">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-shell">
            <div className="mx-auto max-w-5xl text-center">
              <p className="section-kicker justify-center">La lógica es simple</p>
              <h2 className="section-title mt-5">De una necesidad concreta a un producto listo para usar.</h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
              {[
                ["01", "Elegí", "Definí si hoy necesitás vender, mostrarte o recibir reservas."],
                ["02", "Personalizá", "Adaptá identidad, contenido y funcionamiento desde una experiencia guiada."],
                ["03", "Activá", "Compartilo, usalo con clientes reales y convertí tu presencia online en algo útil."],
              ].map(([number, title, description]) => (
                <div key={number} className="bg-surface-container-low p-7 md:p-9">
                  <span className="font-headline text-sm font-bold tracking-[0.18em] text-primary">{number}</span>
                  <h3 className="mt-9 font-headline text-2xl font-bold tracking-[-0.045em] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section-padding relative overflow-hidden">
          <div className="glow-ambient bottom-[-12rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 bg-primary" />
          <div className="container-shell relative z-10">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-primary/15 bg-gradient-to-b from-primary/[0.09] to-white/[0.02] px-6 py-14 text-center shadow-[0_35px_120px_rgba(0,0,0,0.36)] md:px-12 md:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">VOLTA</p>
              <h2 className="mx-auto mt-5 max-w-4xl font-headline text-[clamp(3rem,6.3vw,6rem)] font-bold leading-[0.92] tracking-[-0.07em] text-white">
                Tu próximo paso online empieza con elegir el correcto.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">
                Conocé el ecosistema VOLTA y encontrá el producto que resuelve lo que hoy necesitás activar.
              </p>
              <Link href="#productos" className="group mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-base font-bold text-[#04120a] transition hover:bg-secondary">
                Explorar VOLTA
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
          <BrandLogo />
          <p className="text-center text-xs text-on-surface-variant sm:text-right">© 2026 VOLTA · Productos digitales para avanzar online.</p>
        </div>
      </footer>
    </div>
  );
}
