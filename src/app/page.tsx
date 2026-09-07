import Image from "next/image";
import { ArrowRight, ArrowUpRight, CalendarDays, Layers3, Network, ShieldCheck, ShoppingBag, Workflow } from "lucide-react";
import { VoltaFooter, VoltaHeader } from "@/components/corporate/volta-web-shell";
import { corporateProducts, upcomingInitiatives } from "@/data/corporate-products";
import styles from "./home.module.css";

const productIcons = { store: ShoppingBag, booking: CalendarDays, portfolio: Layers3 } as const;
const principles = [
  ["01", "Útil en la vida real", "Empezamos por un problema concreto. Construimos para resolverlo."],
  ["02", "Simple de adoptar", "Menos configuración innecesaria. Más claridad para empezar."],
  ["03", "Bien hecho, de punta a punta", "Diseño, ingeniería y confianza en una misma experiencia."],
] as const;

export default function Home() {
  const [shield, bridge, automate] = upcomingInitiatives;
  return (
    <div id="top" className="corporate-site" data-corporate-version="1.0">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <VoltaHeader />
      <main id="contenido">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={`volta-container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className="eyebrow"><span className="shift-mark" aria-hidden="true" />Una compañía de productos y tecnología</p>
              <h1 id="hero-title">Tu próximo<br />paso, <span className={styles.shiftWord}>online.</span></h1>
              <p className={styles.heroDescription}>Creamos productos simples para que puedas vender, organizar tu día y mostrar tu trabajo. Tecnología que te ayuda a avanzar.</p>
              <div className={styles.heroActions}>
                <a href="#productos" className="button button-green">Explorá los productos<ArrowRight size={18} aria-hidden="true" /></a>
                <a href="#en-desarrollo" className="text-link">Lo que estamos construyendo<ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
            </div>
            <nav className={styles.productIndex} aria-label="Explorá el universo VOLTA">
              <div className={styles.indexHeader}><span>El universo VOLTA</span><span className="shift-mark" aria-hidden="true" /></div>
              <div className={styles.indexProducts}>
                {corporateProducts.map((product) => (
                  <a key={product.key} href={`#${product.key}`} className={styles.indexRow}>
                    <span className={styles.indexName}>{product.shortName}</span>
                    <span className={styles.indexIntent}>{product.intent}</span>
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className={styles.indexFuture}>
                <span>En construcción</span>
                <div><a href="#shield">Shield<ArrowUpRight size={14} aria-hidden="true" /></a><a href="#bridge">Bridge<ArrowUpRight size={14} aria-hidden="true" /></a></div>
                <a className={styles.indexExploration} href="#automate">Automate <span>· exploración</span><ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
            </nav>
          </div>
        </section>

        <section id="productos" className={styles.products} aria-labelledby="products-title">
          <div className="volta-container">
            <div className={styles.sectionIntro}>
              <div><p className="eyebrow">Productos para empezar hoy</p><h2 id="products-title">Elegí qué querés<br /><span>poner en movimiento.</span></h2></div>
              <p>Una tienda, una agenda o tu próximo proyecto.<br />Cada producto tiene su propósito. Todos son VOLTA.</p>
            </div>
            <div className={styles.showcases}>
              {corporateProducts.map((product, index) => {
                const Icon = productIcons[product.key];
                return (
                  <article id={product.key} key={product.key} className={`${styles.showcase} ${styles[product.key]}`} aria-labelledby={`${product.key}-title`}>
                    <div className={styles.productStory}>
                      <div className={styles.productIdentity}><Icon size={20} aria-hidden="true" /><span>{product.name}</span><span className={`status ${product.status === "Disponible" ? "status-available" : "status-evolving"}`}>{product.status}</span></div>
                      <p className={styles.audience}>{product.audience}</p>
                      <h3 id={`${product.key}-title`}>{product.title}</h3>
                      <p className={styles.productDescription}>{product.description}</p>
                      <p className={styles.capabilities}>{product.points.join(" · ")}</p>
                      <a className="product-link" href={product.href} target="_blank" rel="noopener noreferrer" data-product-placement="products">Conocer {product.shortName}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (abre en otra pestaña)</span></a>
                      {product.key === "store" && <a href="https://www.voltastore.app/tienda/strongprotein" className={styles.liveExample} target="_blank" rel="noopener noreferrer">Ver una tienda publicada<ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (abre en otra pestaña)</span></a>}
                    </div>
                    <figure className={styles.productFigure}>
                      <a className={styles.imageStage} href={`/showcase/${product.key}-1600.webp`} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar demostración de ${product.name} (abre en otra pestaña)`}>
                        <picture>
                          <source type="image/webp" srcSet={`/showcase/${product.key}-640.webp 640w, /showcase/${product.key}-960.webp 960w, /showcase/${product.key}-1600.webp ${Math.min(product.media.width, 1600)}w`} sizes="(max-width: 767px) calc(100vw - 88px), (max-width: 1100px) 46vw, 646px" />
                          <Image src={`/showcase/${product.key}-960.webp`} width={960} height={Math.round(960 * product.media.height / product.media.width)} alt={product.media.alt} unoptimized loading={index === 0 ? "eager" : "lazy"} className={styles.productImage} />
                        </picture>
                        <span className={styles.enlarge} aria-hidden="true"><ArrowUpRight size={18} /></span>
                      </a>
                      <figcaption><span>{product.media.caption}</span><span aria-hidden="true">Ampliar vista ↗</span></figcaption>
                    </figure>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="criterio" className={styles.principles} aria-labelledby="principles-title">
          <div className={`volta-container ${styles.principlesGrid}`}>
            <div><p className="eyebrow">La forma VOLTA</p><h2 id="principles-title">Lo complejo,<br />adentro.<br />Lo simple, <span>para vos.</span></h2><div className={styles.signature} aria-hidden="true"><i /><i /><i /></div></div>
            <div className={styles.principleList}>{principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          </div>
        </section>

        <section id="en-desarrollo" className={styles.future} aria-labelledby="future-title">
          <div className="volta-container">
            <div className={styles.sectionIntro}><div><p className="eyebrow">Nuevas ideas. El mismo criterio.</p><h2 id="future-title">Estamos construyendo<br /><span>lo que sigue.</span></h2></div><p>IA para las empresas. Oportunidades para las personas. Nuevos productos, en distintas etapas.</p></div>
            <article id="shield" className={styles.shield} aria-labelledby="shield-title">
              <div className={styles.shieldStory}>
                <p className={styles.priority}>Nuestra prioridad en desarrollo</p>
                <div className={styles.futureIdentity}><ShieldCheck size={23} aria-hidden="true" /><span>{shield.name}</span><span className="status status-inverse">{shield.status}</span></div>
                <h3 id="shield-title">{shield.title}</h3><p className={styles.futureDescription}>{shield.description}</p>
                <p className={styles.availability}>{shield.detail}</p>
              </div>
              <div className={styles.shieldConcept}>
                <div className={styles.shieldPlanes} aria-hidden="true"><span /><span /><span><ShieldCheck size={68} strokeWidth={1.2} /></span></div>
                <p>Las personas trabajan.<br /><strong>La empresa define las reglas.</strong></p>
                <div className={styles.controlDimensions}><span>Datos</span><span>Modelos</span><span>Calidad y costo</span></div>
                <small>Concepto de producto</small>
              </div>
            </article>
            <div className={styles.secondaryFuture}>
              <article id="bridge" className={styles.bridge} aria-labelledby="bridge-title">
                <div className={styles.futureIdentity}><Network size={21} aria-hidden="true" /><span>{bridge.name}</span><span className="status">{bridge.status}</span></div>
                <h3 id="bridge-title">{bridge.title}</h3><p>{bridge.description}</p><p className={styles.futureDetail}>{bridge.detail}</p>
              </article>
              <article id="automate" className={styles.automate} aria-labelledby="automate-title">
                <div className={styles.futureIdentity}><Workflow size={20} aria-hidden="true" /><span>{automate.name}</span></div>
                <span className="status">{automate.status}</span><h3 id="automate-title">{automate.title}</h3><p>{automate.description}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="como-funciona" className={styles.closing} aria-labelledby="closing-title">
          <div className="volta-container"><p className="eyebrow"><span className="shift-mark" aria-hidden="true" />Una compañía. Una misma forma de pensar.</p><h2 id="closing-title">Distintos problemas.<br />El mismo cuidado<br /><span>para resolverlos bien.</span></h2><div className={styles.closingAction}><p>Tecnología para que avanzar sea más simple.</p><a href="#productos" className="button button-dark">Encontrá tu VOLTA<ArrowRight size={18} aria-hidden="true" /></a></div></div>
        </section>
      </main>
      <VoltaFooter />
    </div>
  );
}
