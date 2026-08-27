import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  LayoutGrid,
  MousePointerClick,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import { HeroSwitchboard } from "@/components/corporate/hero-switchboard";
import { ProductMoment } from "@/components/corporate/product-moment";
import { BrandLogo } from "@/components/ui/brand-logo";

const products = [
  {
    key: "store",
    name: "VOLTA Store",
    shortName: "Store",
    intent: "Vender",
    eyebrow: "Para vender",
    title: "Vendé online. Cerrá donde ya hablás con tus clientes.",
    description:
      "Catálogo, carrito, identidad y pedidos conectados con WhatsApp. La experiencia acompaña al cliente desde el producto hasta una conversación lista para cerrar.",
    points: ["Catálogo y carrito", "Diseño personalizable", "Pedidos por WhatsApp"],
    href: "https://www.voltastore.app",
    external: true,
    status: "Disponible",
  },
  {
    key: "portfolio",
    name: "VOLTA Portfolio",
    shortName: "Portfolio",
    intent: "Mostrarte",
    eyebrow: "Para mostrarte",
    title: "Tu trabajo debería hablar antes que vos.",
    description:
      "Proyectos, experiencia y legajos en una presencia profesional que se adapta a tu identidad y funciona especialmente bien en mobile.",
    points: ["Proyectos y legajos", "Identidad personalizable", "Experiencia mobile"],
    href: "https://volta-portfolio-psi.vercel.app",
    external: true,
    status: "Disponible",
  },
  {
    key: "booking",
    name: "VOLTA Booking",
    shortName: "Booking",
    intent: "Reservas",
    eyebrow: "Para organizarte",
    title: "De disponibilidad a reserva.",
    description:
      "Servicios, profesionales y horarios en una experiencia clara para quien reserva y para quien administra. Menos ida y vuelta, una decisión concreta.",
    points: ["Reservas online", "Agenda y disponibilidad", "Gestión simple"],
    href: "https://volta-booking.vercel.app",
    external: true,
    status: "En evolución",
  },
  {
    key: "automate",
    name: "VOLTA Automate",
    shortName: "Automate",
    intent: "Automatizar",
    eyebrow: "Para automatizar",
    title: "Lo repetitivo no debería depender de vos.",
    description:
      "Una nueva dirección de VOLTA para convertir procesos repetitivos en flujos claros y automatizados. Se presenta en preparación, sin prometer integraciones que todavía no estén publicadas.",
    points: ["Flujos de trabajo", "Menos tareas repetitivas", "Automatización orientada a resultados"],
    href: null,
    external: false,
    status: "En preparación",
  },
] as const;

const outcomes = [
  {
    label: "Una visita termina en",
    value: "un pedido",
    product: "VOLTA Store",
    icon: ShoppingBag,
    href: "#store",
  },
  {
    label: "Un perfil termina en",
    value: "un proyecto descubierto",
    product: "VOLTA Portfolio",
    icon: LayoutGrid,
    href: "#portfolio",
  },
  {
    label: "Una consulta termina en",
    value: "una reserva confirmada",
    product: "VOLTA Booking",
    icon: CalendarDays,
    href: "#booking",
  },
  {
    label: "Una tarea repetida puede terminar en",
    value: "un flujo automatizado",
    product: "VOLTA Automate",
    icon: Workflow,
    href: "#automate",
  },
] as const;

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-on-surface">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="container-shell">
          <nav className="glass-panel ambient-shadow flex items-center justify-between rounded-[1.15rem] border border-white/[0.09] px-3 py-2.5 sm:px-4 md:px-5">
            <Link href="#top" aria-label="VOLTA" className="transition-opacity hover:opacity-90">
              <BrandLogo priority imageClassName="h-9 w-9" labelClassName="text-lg" />
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              <Link href="#productos" className="nav-link">Productos</Link>
              <Link href="#principios" className="nav-link">Cómo pensamos</Link>
              <Link href="#accion" className="nav-link">En acción</Link>
            </div>

            <Link href="#productos" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-primary px-4 text-xs font-bold text-[#04120a] transition hover:bg-secondary sm:text-sm">
              Explorar VOLTA
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-screen lg:pb-24">
          <div className="fine-grid absolute inset-0 opacity-[0.11]" />
          <div className="hero-light hero-light-left" />
          <div className="hero-light hero-light-right" />

          <div className="container-shell relative z-10">
            <div className="grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 xl:gap-16">
              <div className="max-w-4xl">
                <div className="hero-kicker">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(0,245,138,0.8)]" />
                  VOLTA
                </div>

                <h1 className="mt-7 max-w-[9.5ch] font-headline text-[clamp(4rem,8.2vw,7.8rem)] font-bold leading-[0.88] tracking-[-0.078em] text-white">
                  Tu próximo paso, <span className="text-primary">online.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-[clamp(1.02rem,1.55vw,1.22rem)] leading-8 text-on-surface-variant">
                  Productos digitales para vender, mostrar tu trabajo, recibir reservas y automatizar procesos. Sin empezar de cero.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="#productos" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-base font-bold text-[#04120a] transition hover:bg-secondary">
                    Elegir qué activar
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="#principios" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.025] px-7 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.05]">
                    Qué hacemos distinto
                  </Link>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-on-surface-variant">
                  {["Simple", "Personalizable", "Profesional", "En movimiento"].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <HeroSwitchboard />
            </div>
          </div>
        </section>

        <section className="brand-bridge border-y border-white/[0.07] bg-surface-container-lowest/70">
          <div className="container-shell py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="section-kicker">Una marca</p>
                <h2 className="mt-5 max-w-[12ch] font-headline text-[clamp(2.7rem,5vw,4.8rem)] font-bold leading-[0.96] tracking-[-0.06em] text-white">
                  Distintas formas de avanzar.
                </h2>
              </div>
              <div className="lg:justify-self-end">
                <p className="max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
                  No necesitás elegir una tecnología. Elegí qué querés lograr y entrá por el producto correcto.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {products.map((product) => (
                    <Link key={product.key} href={`#${product.key}`} className="bridge-link">
                      <span>{product.intent}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                      <strong>{product.shortName}</strong>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="product-showcases bg-surface">
          <div className="container-shell pt-20 md:pt-28">
            <div className="max-w-3xl">
              <p className="section-kicker">Productos VOLTA</p>
              <h2 className="section-title mt-5">No te los contamos. Probá el momento que importa.</h2>
              <p className="section-copy mt-6">
                Cada producto resuelve una necesidad concreta. Los momentos de abajo condensan la acción principal de cada experiencia para que se entienda usándola.
              </p>
            </div>
          </div>

          {products.map((product, index) => (
            <article
              key={product.key}
              id={product.key}
              className={`product-showcase ${index % 2 === 1 ? "product-showcase-reverse" : ""}`}
            >
              <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="product-meta-line">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{product.eyebrow}</span>
                    <span className="ml-auto">{product.status}</span>
                  </div>

                  <h3 className="mt-7 max-w-[12ch] font-headline text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.065em] text-white">
                    {product.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-8 text-on-surface-variant md:text-lg">
                    {product.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                    {product.points.map((point) => (
                      <span key={point} className="flex items-center gap-2 text-sm font-medium text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {point}
                      </span>
                    ))}
                  </div>

                  {product.href ? (
                    <Link
                      href={product.href}
                      target={product.external ? "_blank" : undefined}
                      rel={product.external ? "noreferrer" : undefined}
                      className="product-cta mt-9"
                    >
                      Conocer {product.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <div className="mt-9 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 text-sm font-semibold text-white/48">
                      {product.name} · En preparación
                    </div>
                  )}
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ProductMoment type={product.key} />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="principios" className="section-padding relative overflow-hidden border-t border-white/[0.06]">
          <div className="principles-aura" />
          <div className="container-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16 xl:gap-24">
              <div>
                <p className="section-kicker">Construido para avanzar</p>
                <h2 className="section-title mt-5">El criterio también es parte del producto.</h2>
                <p className="section-copy mt-6">
                  Hay decisiones que se repiten en todo VOLTA porque hacen que la experiencia funcione mejor. No son slogans: son reglas de diseño.
                </p>
              </div>

              <div className="principles-system">
                <div className="principle-axis principle-axis-one" />
                <div className="principle-axis principle-axis-two" />
                <div className="principle-core">
                  <div className="principle-core-dot" />
                  <span>VOLTA</span>
                  <strong>menos fricción</strong>
                </div>

                <div className="principle-node principle-node-a">
                  <span>01</span><strong>Simple</strong><p>Lo esencial primero. Sin caminos innecesarios.</p>
                </div>
                <div className="principle-node principle-node-b">
                  <span>02</span><strong>Tu identidad</strong><p>VOLTA acompaña a tu marca; no la tapa.</p>
                </div>
                <div className="principle-node principle-node-c">
                  <span>03</span><strong>Mobile primero</strong><p>La experiencia nace donde están tus clientes.</p>
                </div>
                <div className="principle-node principle-node-d">
                  <span>04</span><strong>Una acción clara</strong><p>Comprar. Reservar. Mostrar. Automatizar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="accion" className="section-padding bg-surface">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-kicker justify-center">VOLTA en acción</p>
              <h2 className="section-title mt-5">La tecnología importa cuando termina en algo real.</h2>
            </div>

            <div className="outcomes-grid mt-12">
              {outcomes.map((outcome) => {
                const Icon = outcome.icon;
                return (
                  <Link key={outcome.product} href={outcome.href} className="outcome-row group">
                    <span className="outcome-icon"><Icon className="h-5 w-5" /></span>
                    <div><small>{outcome.label}</small><strong>{outcome.value}</strong></div>
                    <span className="outcome-product">{outcome.product}</span>
                    <ChevronRight className="outcome-arrow h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="process-section section-padding relative overflow-hidden">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="section-kicker">La lógica es simple</p>
                <h2 className="section-title mt-5">De una necesidad a algo online.</h2>
              </div>
              <p className="section-copy lg:justify-self-end">
                VOLTA se ocupa de que el sistema exista. Vos elegís qué activar, lo hacés tuyo y lo ponés a trabajar.
              </p>
            </div>

            <div className="process-line mt-14">
              {[
                ["01", "Elegí", "Definí qué necesitás resolver hoy."],
                ["02", "Hacelo tuyo", "Adaptá identidad, contenido y operación."],
                ["03", "Ponelo online", "Compartilo y empezá a usarlo de verdad."],
              ].map(([number, title, description], index) => (
                <div key={number} className="process-step">
                  <div className="process-marker">
                    <span>{number}</span>
                    {index < 2 && <div className="process-connector" />}
                  </div>
                  <h3>{title}</h3><p>{description}</p>
                </div>
              ))}
            </div>

            <div className="process-proof mt-12">
              <MousePointerClick className="h-4 w-4 text-primary" />
              <span>Menos configuración. Más rápido hasta la primera acción.</span>
            </div>
          </div>
        </section>

        <section id="contacto" className="section-padding relative overflow-hidden bg-surface">
          <div className="closing-aura" />
          <div className="container-shell relative z-10">
            <div className="closing-panel">
              <div className="closing-copy">
                <p className="section-kicker">VOLTA</p>
                <h2>¿Qué querés activar?</h2>
                <p>Vendé. Mostrate. Recibí reservas. Automatizá lo repetitivo. Empezá por lo que hoy necesita tu proyecto.</p>
              </div>

              <div className="closing-products">
                {products.map((product) => product.href ? (
                  <Link
                    key={product.key}
                    href={product.href}
                    target={product.external ? "_blank" : undefined}
                    rel={product.external ? "noreferrer" : undefined}
                    className="closing-product-link group"
                  >
                    <span>{product.eyebrow}</span>
                    <strong>{product.shortName}</strong>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <Link key={product.key} href="#automate" className="closing-product-link group">
                    <span>{product.eyebrow} · Próximamente</span>
                    <strong>{product.shortName}</strong>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07] py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
          <BrandLogo />
          <p className="text-center text-xs text-on-surface-variant sm:text-right">
            © 2026 VOLTA · Tu próximo paso, online.
          </p>
        </div>
      </footer>
    </div>
  );
}
