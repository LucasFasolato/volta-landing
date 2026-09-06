import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import { corporateProducts, upcomingInitiatives } from "@/data/corporate-products";
import { MobileNavigation } from "./mobile-navigation";

// Retain the existing interim V + dot lockup. This work does not approve a new logo.
export function VoltaLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`volta-lockup${inverse ? " volta-lockup-inverse" : ""}`}>
      <span aria-hidden="true" className="volta-symbol">V<span /></span>
      <span className="volta-wordmark">VOLTA</span>
    </span>
  );
}

export function VoltaHeader() {
  return (
    <header className="site-header">
      <div className="volta-container header-inner">
        <a href="#top" aria-label="VOLTA, inicio" className="home-link"><VoltaLockup /></a>
        <nav aria-label="Navegación principal" className="desktop-navigation">
          <a href="#productos">Productos</a>
          <a href="#criterio">Por qué VOLTA</a>
          <a href="#en-desarrollo">Lo que viene</a>
        </nav>
        <div className="header-actions">
          <a className="button button-dark button-small header-cta" href="#productos">Encontrá tu VOLTA <ArrowUpRight size={16} aria-hidden="true" /></a>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

export function VoltaFooter() {
  return (
    <footer className="site-footer">
      <div className="volta-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" aria-label="VOLTA, volver al inicio"><VoltaLockup inverse /></a>
            <p>Una empresa de productos y tecnología.<br />Distintas soluciones. Una misma forma de pensar.</p>
          </div>
          <nav aria-label="Productos VOLTA" className="footer-links">
            <p>Productos</p>
            {corporateProducts.map((product) => (
              <a key={product.key} href={product.href} target="_blank" rel="noopener noreferrer" data-product-placement="footer">
                {product.shortName}<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (abre en otra pestaña)</span>
              </a>
            ))}
          </nav>
          <nav aria-label="Conocer VOLTA" className="footer-links">
            <p>La compañía</p>
            <a href="#criterio">Nuestro criterio<ArrowRight size={15} aria-hidden="true" /></a>
            <a href="#en-desarrollo">{upcomingInitiatives.length} iniciativas en camino<ArrowRight size={15} aria-hidden="true" /></a>
            <a href="#como-funciona">Cómo empezar<ArrowRight size={15} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© 2026 VOLTA</p>
          <p>Tecnología útil. Progreso real.</p>
          <a href="#top">Volver arriba<ArrowUp size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
