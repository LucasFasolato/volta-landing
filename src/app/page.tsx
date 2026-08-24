import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  LayoutGrid,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";

const products = [
  {
    name: "VOLTA Store",
    eyebrow: "Vendé online",
    description:
      "Creá una tienda profesional, cargá tu catálogo y convertí visitas en pedidos que llegan directo a WhatsApp.",
    points: ["Tienda personalizable", "Catálogo y carrito", "Pedidos por WhatsApp"],
    icon: ShoppingBag,
    href: "https://www.voltastore.app",
    external: true,
    status: "Disponible",
  },
  {
    name: "VOLTA Portfolio",
    eyebrow: "Mostrá tu trabajo",
    description:
      "Construí un portfolio profesional para presentar proyectos, experiencia y perfil con una presencia digital a tu altura.",
    points: ["Portfolio personalizable", "Proyectos y legajos", "Experiencia mobile cuidada"],
    icon: LayoutGrid,
    href: "#contacto",
    external: false,
    status: "Disponible",
  },
  {
    name: "VOLTA Booking",
    eyebrow: "Organizá tus turnos",
    description:
      "Recibí reservas online con disponibilidad real y gestioná servicios, profesionales, horarios y turnos desde un solo lugar.",
    points: ["Reservas online", "Agenda y disponibilidad", "Gestión simple"],
    icon: CalendarDays,
    href: "#contacto",
    external: false,
    status: "En evolución",
  },
] as const;

const principles = [
  "Simple para empezar",
  "Profesional desde el primer día",
  "Pensado primero para mobile",
  "Diseñado para convertir",
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-on-surface">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="container-shell">
          <nav className="glass-panel ambient-shadow flex items-center justify-between rounded-[1.4rem] border border-white/10 px-4 py-3 md:px-6">
            <Link href="#top" aria-label="VOLTA" className="transition-opacity hover:opacity-90">
              <BrandLogo priority />
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              <Link href="#productos" className="text-xs font-semibold uppercase tracking-[0.16em] text-on-surface-variant transition-colors hover:text-white">Productos</Link>
              <Link href="#por-que-volta" className="text-xs font-semibold uppercase tracking-[0.16em] text-on-surface-variant transition-colors hover:text-white">Por qué VOLTA</Link>
            </div>
            <Link href="#contacto" className="rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-[#05110b] transition hover:bg-secondary">
              Conocer VOLTA
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28">
          <div className="fine-grid absolute inset-0 opacity-[0.18]" />
          <div className="glow-ambient left-[-8rem] top-28 h-80 w-80 bg-primary" />
          <div className="glow-ambient right-[-8rem] top-16 h-72 w-72 bg-accent-blue" />

          <div className="container-shell relative z-10 py-20 md:py-28">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                <Sparkles className="h-3.5 w-3.5" />
                Tu próximo paso online
              </div>
              <h1 className="mt-8 font-headline text-[clamp(3.7rem,9vw,8.3rem)] font-bold leading-[0.88] tracking-[-0.075em] text-white">
                Una mejor forma de estar <span className="text-primary">online.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-[clamp(1.05rem,2vw,1.35rem)] leading-8 text-on-surface-variant md:leading-9">
                VOLTA crea productos digitales simples y profesionales para que negocios y profesionales puedan vender, mostrar su trabajo y gestionar reservas sin depender de soluciones complicadas.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="#productos" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-base font-bold text-[#05110b] transition hover:bg-secondary">
                  Explorar productos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="#por-que-volta" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.035] px-7 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]">
                  Qué es VOLTA
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="section-padding relative bg-surface">
          <div className="container-shell">
            <div className="max-w-4xl">
              <p className="section-kicker">Ecosistema VOLTA</p>
              <h2 className="section-title mt-5">Un producto para cada paso.</h2>
              <p className="section-copy mt-6">
                No construimos software por sumar funciones. Cada producto resuelve una necesidad concreta con la misma idea: menos fricción, mejor presencia y más capacidad para crecer.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <article key={product.name} className="surface-card group relative flex min-h-[30rem] flex-col overflow-hidden p-7 md:p-8">
                    <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/8 blur-3xl transition group-hover:bg-primary/12" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.67rem] font-bold uppercase tracking-[0.14em] text-on-surface-variant">{product.status}</span>
                    </div>
                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-primary">{product.eyebrow}</p>
                    <h3 className="mt-3 font-headline text-3xl font-bold tracking-[-0.05em] text-white">{product.name}</h3>
                    <p className="mt-4 text-base leading-7 text-on-surface-variant">{product.description}</p>
                    <div className="mt-7 space-y-3">
                      {product.points.map((point) => (
                        <div key={point} className="flex items-center gap-3 text-sm text-white/90">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                          {point}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      <Link href={product.href} target={product.external ? "_blank" : undefined} rel={product.external ? "noreferrer" : undefined} className="group/link inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-primary">
                        Conocer {product.name.replace("VOLTA ", "")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="por-que-volta" className="section-padding relative overflow-hidden">
          <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="section-kicker">La idea detrás de VOLTA</p>
              <h2 className="section-title mt-5">Tecnología útil. Sin complicarla.</h2>
              <p className="section-copy mt-6">
                VOLTA nace para transformar necesidades digitales comunes en productos claros, cuidados y accesibles. La tecnología trabaja por detrás; adelante queda una experiencia que cualquiera pueda entender y usar.
              </p>
            </div>
            <div className="surface-card p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((principle, index) => (
                  <div key={principle} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                    <span className="font-headline text-xs font-bold tracking-[0.16em] text-primary">0{index + 1}</span>
                    <p className="mt-5 text-base font-semibold leading-6 text-white">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-kicker justify-center">Cómo funciona</p>
              <h2 className="section-title mt-5">Elegís qué necesitás. VOLTA te da el sistema.</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
              {[
                ["01", "Elegí tu solución", "Store para vender, Portfolio para mostrarte o Booking para organizar reservas."],
                ["02", "Personalizala", "Configurá tu identidad, contenido y operación sin tener que construir todo desde cero."],
                ["03", "Ponela en marcha", "Compartí tu espacio online y empezá a usarlo con clientes reales."],
              ].map(([number, title, desc]) => (
                <div key={number} className="bg-surface-container-low p-7 md:p-8">
                  <span className="font-headline text-sm font-bold tracking-[0.16em] text-primary">{number}</span>
                  <h3 className="mt-8 font-headline text-xl font-bold tracking-[-0.04em] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section-padding relative overflow-hidden">
          <div className="glow-ambient bottom-[-10rem] left-1/2 h-96 w-96 -translate-x-1/2 bg-primary" />
          <div className="container-shell relative z-10">
            <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-primary/15 bg-gradient-to-b from-primary/[0.08] to-white/[0.02] px-6 py-14 text-center shadow-2xl shadow-black/30 md:px-12 md:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">VOLTA</p>
              <h2 className="mx-auto mt-5 max-w-4xl font-headline text-[clamp(2.8rem,6vw,5.8rem)] font-bold leading-[0.95] tracking-[-0.065em] text-white">
                Tu próximo paso online puede empezar acá.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-on-surface-variant md:text-lg">
                Explorá nuestros productos y elegí la solución que mejor acompaña lo que querés construir.
              </p>
              <Link href="#productos" className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-base font-bold text-[#05110b] transition hover:bg-secondary">
                Ver productos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
          <BrandLogo />
          <p className="text-xs text-on-surface-variant">© 2026 VOLTA. Productos digitales para crecer online.</p>
        </div>
      </footer>
    </div>
  );
}
