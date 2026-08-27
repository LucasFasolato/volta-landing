import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { corporateProducts } from "@/data/corporate-products";

export function VoltaLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`relative flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-black tracking-[-0.08em] ${
          inverse
            ? "border-white/10 bg-white/[0.04] text-[#12e89a]"
            : "border-black/[0.08] bg-white text-[#07120f] shadow-sm"
        }`}
      >
        V
        <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#12e89a]" />
      </span>
      <span className={`text-sm font-black tracking-[-0.035em] ${inverse ? "text-white" : "text-[#07120f]"}`}>
        VOLTA
      </span>
    </span>
  );
}

export function VoltaHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f6f8f5]/90 backdrop-blur-xl">
      <div className="volta-container flex h-16 items-center justify-between gap-4">
        <Link href="#top" aria-label="VOLTA inicio" className="shrink-0">
          <VoltaLockup />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 text-sm font-semibold text-[#65706b] md:flex">
          <a className="transition hover:text-[#07120f]" href="#productos">Productos</a>
          <a className="transition hover:text-[#07120f]" href="#como-funciona">Cómo funciona</a>
          <a className="transition hover:text-[#07120f]" href="#criterio">Por qué VOLTA</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#productos"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#07120f] px-4 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#15221d] sm:px-5 sm:text-sm"
          >
            Encontrá tu VOLTA <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <details className="group relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#07120f] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Abrir menú</span>
              <Menu className="h-4 w-4" />
            </summary>
            <nav className="absolute right-0 top-12 w-52 rounded-2xl border border-black/[0.08] bg-white p-2 shadow-[0_20px_55px_rgba(7,18,15,.14)]">
              {[
                ["Productos", "#productos"],
                ["Cómo funciona", "#como-funciona"],
                ["Por qué VOLTA", "#criterio"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#55605b] hover:bg-[#f4f6f4] hover:text-[#07120f]">
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="volta-eyebrow">{eyebrow}</p>
      <h2 className="volta-h2 mt-4">{title}</h2>
      {copy ? <p className={`volta-copy mt-5 ${centered ? "mx-auto" : ""}`}>{copy}</p> : null}
    </div>
  );
}

export function VoltaFooter() {
  return (
    <footer className="bg-[#07120f] text-white">
      <div className="volta-container grid gap-10 py-10 sm:grid-cols-[1fr_auto] sm:items-end sm:py-12">
        <div>
          <VoltaLockup inverse />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
            Productos digitales para convertir una necesidad concreta en una acción simple.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-white/55 sm:justify-end">
          {corporateProducts.map((product) =>
            product.href ? (
              <Link
                key={product.key}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                data-product-placement="footer"
                className="transition hover:text-white"
              >
                {product.shortName}
              </Link>
            ) : (
              <span key={product.key} className="text-white/30">{product.shortName} · En preparación</span>
            ),
          )}
        </div>
        <p className="text-[11px] text-white/30 sm:col-span-2">© VOLTA 2026</p>
      </div>
    </footer>
  );
}
