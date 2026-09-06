import { ArrowRight, ArrowUpRight, CalendarDays, Check, Layers3, Network, Plus, ShieldCheck, ShoppingBag, Workflow } from "lucide-react";
import { HeroShowcase, ProductMomentV2 } from "@/components/corporate/product-moment-v2";
import { VoltaFooter, VoltaHeader } from "@/components/corporate/volta-web-shell";
import { corporateProducts, upcomingInitiatives } from "@/data/corporate-products";

const productIcons = { store: ShoppingBag, booking: CalendarDays, portfolio: Layers3 } as const;
const initiativeIcons = { shield: ShieldCheck, bridge: Network, automate: Workflow } as const;

const principles = [
  ["01", "Útil en la vida real", "Partimos de una necesidad concreta. La tecnología tiene sentido cuando mejora algo de tu día a día."],
  ["02", "Simple de usar", "Lo esencial primero, decisiones claras y una experiencia que no te exige conocimientos técnicos."],
  ["03", "Bien hecho, de principio a fin", "Diseño, funcionamiento y cuidado de la información son parte del mismo trabajo. No son detalles para después."],
] as const;

export default function Home() {
  return (
    <div id="top" className="corporate-site">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <VoltaHeader />
      <main id="contenido">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="volta-container">
            <div className="hero-grid">
              <div className="hero-content">
                <p className="volta-eyebrow"><span className="signal-dot" />Productos y tecnología, con propósito.</p>
                <h1 id="hero-title" className="volta-display">Tu próximo<br />paso, <span className="shift-word">online.</span></h1>
                <p className="hero-copy">Creamos productos para que puedas vender, organizar tus reservas y mostrar tu trabajo. Tecnología útil, sin complicarte.</p>
                <div className="hero-actions">
                  <a href="#productos" className="button button-green">Explorá los productos<ArrowRight size={18} aria-hidden="true" /></a>
                  <a href="#criterio" className="text-link">Conocé VOLTA<ArrowUpRight size={17} aria-hidden="true" /></a>
                </div>
                <p className="hero-footnote">Vos ponés la idea. Nosotros simplificamos la tecnología.</p>
              </div>
              <HeroShowcase />
            </div>
            <nav className="quick-routes" aria-label="Encontrá un producto según tu objetivo">
              <p>¿Qué querés<br /><strong>poner en movimiento?</strong></p>
              {corporateProducts.map(product => {
                const Icon = productIcons[product.key];
                return <a key={product.key} href={`#${product.key}`}><Icon size={20} aria-hidden="true" /><span>{product.intent}<small>{product.name}</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>;
              })}
            </nav>
          </div>
        </section>

        <section id="productos" className="volta-section products-section" aria-labelledby="products-title">
          <div className="volta-container">
            <div className="section-intro">
              <div className="section-heading"><p className="volta-eyebrow">Encontrá tu VOLTA</p><h2 id="products-title" className="volta-h2">Una necesidad concreta.<br /><span className="muted-heading">Una solución para vos.</span></h2></div>
              <p className="volta-copy section-aside">Cada producto resuelve algo distinto. Elegí el que necesitás y usalo por su cuenta, sin contratar todo el ecosistema.</p>
            </div>
            <div className="product-grid">
              {corporateProducts.map(product => {
                const Icon = productIcons[product.key];
                return (
                  <article id={product.key} key={product.key} className={`product-card product-card-${product.key}`} aria-labelledby={`${product.key}-title`}>
                    <div className="product-story">
                      <div className="product-identity"><span className="product-icon"><Icon size={21} aria-hidden="true" /></span><span>{product.name}</span><span className={`status status-${product.status === "Disponible" ? "available" : "evolving"}`}>{product.status}</span></div>
                      <p className="product-audience">{product.audience}</p>
                      <h3 id={`${product.key}-title`}>{product.title}</h3>
                      <p className="product-description">{product.description}</p>
                      <ul className="product-points">{product.points.map(point => <li key={point}><Check size={15} aria-hidden="true" />{point}</li>)}</ul>
                      <a className="product-link" href={product.href} target="_blank" rel="noopener noreferrer" data-product-placement="products">Conocer {product.shortName}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (abre en otra pestaña)</span></a>
                    </div>
                    <ProductMomentV2 type={product.key} />
                  </article>
                );
              })}
            </div>
            <p className="products-note"><span className="status-dot" aria-hidden="true" /><strong>Booking está en evolución:</strong> ya podés conocerlo mientras seguimos afinando la experiencia.</p>
          </div>
        </section>

        <section id="criterio" className="principles-section" aria-labelledby="principles-title">
          <div className="volta-container principles-grid">
            <div className="principles-statement">
              <p className="volta-eyebrow">La forma VOLTA</p>
              <h2 id="principles-title">Lo complejo,<br /><span>adentro.</span><br />Lo simple,<br /><span className="principles-accent">para vos.</span></h2>
              <div className="shift-signature" aria-hidden="true"><span /><span /><span /></div>
            </div>
            <div className="principles-body">
              <p className="principles-intro">Somos una empresa de productos y tecnología. Conectamos lo que la tecnología puede hacer con lo que las personas realmente necesitan.</p>
              <div className="principle-list">{principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
              <p className="principles-closing">Distintos productos. El mismo compromiso con la calidad.</p>
            </div>
          </div>
        </section>

        <section id="en-desarrollo" className="volta-section future-section" aria-labelledby="future-title">
          <div className="volta-container">
            <div className="section-intro">
              <div className="section-heading"><p className="volta-eyebrow">Un ecosistema en construcción</p><h2 id="future-title" className="volta-h2">El próximo paso<br /><span className="muted-heading">también se construye.</span></h2></div>
              <p className="volta-copy section-aside">Nuevas ideas, el mismo criterio. Estas iniciativas están en desarrollo o exploración; todavía no están abiertas al público general.</p>
            </div>
            <div className="initiative-list">{upcomingInitiatives.map(initiative => {
              const Icon = initiativeIcons[initiative.key];
              return <article className="initiative" key={initiative.key}>
                <div className="initiative-name"><span className="initiative-icon"><Icon size={23} aria-hidden="true" /></span><h3>{initiative.name}</h3><span className="status status-planned">{initiative.status}</span></div>
                <div className="initiative-copy"><h4>{initiative.title}</h4><p>{initiative.description}</p><details className="initiative-detail"><summary>Sobre esta iniciativa<Plus size={16} aria-hidden="true" /></summary><p>{initiative.detail}</p></details></div>
              </article>;
            })}</div>
          </div>
        </section>

        <section id="como-funciona" className="volta-section start-section" aria-labelledby="start-title">
          <div className="volta-container">
            <div className="start-top"><div className="section-heading"><p className="volta-eyebrow">Tu punto de partida</p><h2 id="start-title" className="volta-h2">Elegí. Hacelo tuyo.<br /><span className="muted-heading">Ponelo en movimiento.</span></h2></div><a href="#productos" className="button button-dark">Encontrá tu VOLTA<ArrowRight size={18} aria-hidden="true" /></a></div>
            <div className="start-steps">{[
              ["01", "Empezá por tu necesidad", "¿Vender, recibir reservas o presentar tu trabajo? Encontrá el producto que te ayude con eso."],
              ["02", "Dale tu identidad", "Cargá tu contenido y elegí cómo mostrarlo. Los productos te guían sin empezar desde cero."],
              ["03", "Compartilo con el mundo", "Publicá tu tienda, agenda o portfolio. Un enlace para acercar lo que hacés a quienes lo necesitan."],
            ].map(([number, title, copy]) => <article key={number}><span>{number}<ArrowRight size={18} aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
            <div className="start-footnote"><span>Una necesidad concreta es suficiente para empezar.</span><a href="#productos">Ver productos<ArrowUpRight size={16} aria-hidden="true" /></a></div>
          </div>
        </section>
      </main>
      <VoltaFooter />
    </div>
  );
}
