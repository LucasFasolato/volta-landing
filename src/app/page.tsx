import { ArrowRight, ArrowUpRight, CalendarDays, Check, Layers3, Network, ShieldCheck, ShoppingBag, Workflow } from "lucide-react";
import { ProductMomentV2 } from "@/components/corporate/product-moment-v2";
import { VoltaFooter, VoltaHeader } from "@/components/corporate/volta-web-shell";
import { corporateProducts } from "@/data/corporate-products";
import styles from "./home.module.css";

const productIcons = { store: ShoppingBag, booking: CalendarDays, portfolio: Layers3 } as const;
const principles = [
  ["01", "Útil en la vida real", "Partimos de una necesidad concreta. La tecnología importa cuando mejora algo de verdad."],
  ["02", "Simple de adoptar", "Absorbemos complejidad adentro para que afuera las decisiones sean claras."],
  ["03", "Bien hecho", "Producto, diseño, ingeniería y confianza forman parte de una misma experiencia."],
] as const;

// Editorial photography is contextual only, never customer/product evidence.
// Pexels images below are free to use under the Pexels License.
const commerceEditorial = "https://images.pexels.com/photos/7289725/pexels-photo-7289725.jpeg?auto=compress&cs=tinysrgb&w=1800";
const workspaceEditorial = "https://images.pexels.com/photos/26966416/pexels-photo-26966416.jpeg?auto=compress&cs=tinysrgb&w=1800";
const deskEditorial = "https://images.pexels.com/photos/15599167/pexels-photo-15599167.jpeg?auto=compress&cs=tinysrgb&w=1800";
const teamEditorial = "https://images.pexels.com/photos/6805157/pexels-photo-6805157.jpeg?auto=compress&cs=tinysrgb&w=1800";

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
                <p className="hero-copy">VOLTA convierte tecnología compleja en productos simples para vender, organizar, mostrar, trabajar y abrir nuevas oportunidades.</p>
                <div className="hero-actions">
                  <a href="#productos" className="button button-green">Explorá VOLTA<ArrowRight size={18} aria-hidden="true" /></a>
                  <a href="#en-desarrollo" className="text-link">Lo que estamos construyendo<ArrowUpRight size={17} aria-hidden="true" /></a>
                </div>
                <p className="hero-footnote">Tecnología avanzada adentro. Una experiencia clara afuera.</p>
              </div>

              <div className={styles.heroSystem} role="img" aria-label="Mapa visual del ecosistema VOLTA: productos disponibles y nuevas apuestas conectadas por una misma compañía">
                <div className={styles.heroSystemHeader}><span><i />VOLTA · COMPANY SYSTEM</span><span>Una compañía. Múltiples productos.</span></div>
                <div className={styles.heroGridLines} aria-hidden="true" />
                <div className={styles.heroSystemCore} aria-hidden="true">
                  <span className={styles.heroCoreMark}>V</span>
                  <strong>VOLTA</strong>
                  <small>producto · tecnología · criterio</small>
                </div>
                <div className={`${styles.heroNode} ${styles.heroNodeStore}`}><span>Producto</span><strong>Store</strong><small>Vender online · Disponible</small></div>
                <div className={`${styles.heroNode} ${styles.heroNodeBooking}`}><span>Producto</span><strong>Booking</strong><small>Reservas · En evolución</small></div>
                <div className={`${styles.heroNode} ${styles.heroNodePortfolio}`}><span>Producto</span><strong>Portfolio</strong><small>Mostrar trabajo · Disponible</small></div>
                <div className={`${styles.heroNode} ${styles.heroNodeShield}`}><span>Prioridad</span><strong>Shield</strong><small>Company AI · En validación</small></div>
                <div className={`${styles.heroNode} ${styles.heroNodeBridge}`}><span>En desarrollo</span><strong>Bridge</strong><small>Capacidad → oportunidad</small></div>
                <div className={`${styles.heroNode} ${styles.heroNodeAutomate}`}><span>Exploración</span><strong>Automate</strong><small>Procesos → sistemas</small></div>
                <div className={styles.heroConnectorA} aria-hidden="true" /><div className={styles.heroConnectorB} aria-hidden="true" /><div className={styles.heroConnectorC} aria-hidden="true" />
                <div className={styles.heroSystemFooter}><strong>Lo que cambia es el problema.</strong><span>El estándar VOLTA permanece.</span></div>
              </div>
            </div>

            <nav className="quick-routes" aria-label="Encontrá un producto según tu objetivo">
              <p>¿Qué querés<br /><strong>poner en movimiento?</strong></p>
              {corporateProducts.map(product => { const Icon = productIcons[product.key]; return <a key={product.key} href={`#${product.key}`}><Icon size={20} aria-hidden="true" /><span>{product.intent}<small>{product.name}</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>; })}
            </nav>
          </div>
        </section>

        <section id="productos" className="volta-section products-section" aria-labelledby="products-title">
          <div className="volta-container">
            <div className="section-intro">
              <div className="section-heading"><p className="volta-eyebrow">Productos que ya podés conocer</p><h2 id="products-title" className="volta-h2">Distintos problemas.<br /><span className="muted-heading">La misma forma de resolverlos.</span></h2></div>
              <p className="volta-copy section-aside">Cada producto funciona por sí solo. Lo que comparten es el criterio: menos fricción, más claridad y tecnología puesta al servicio de un resultado concreto.</p>
            </div>
            <div className="product-grid">
              {corporateProducts.map(product => { const Icon = productIcons[product.key]; return (
                <article id={product.key} key={product.key} className={`product-card product-card-${product.key}`} aria-labelledby={`${product.key}-title`}>
                  <div className="product-story">
                    <div className="product-identity"><span className="product-icon"><Icon size={21} aria-hidden="true" /></span><span>{product.name}</span><span className={`status status-${product.status === "Disponible" ? "available" : "evolving"}`}>{product.status}</span></div>
                    <p className="product-audience">{product.audience}</p><h3 id={`${product.key}-title`}>{product.title}</h3><p className="product-description">{product.description}</p>
                    <ul className="product-points">{product.points.map(point => <li key={point}><Check size={15} aria-hidden="true" />{point}</li>)}</ul>
                    <a className="product-link" href={product.href} target="_blank" rel="noopener noreferrer" data-product-placement="products">Conocer {product.shortName}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (abre en otra pestaña)</span></a>
                  </div>
                  {product.key === "store" ? (
                    <div className={styles.commerceFrame} role="img" aria-label="Emprendimiento preparando pedidos de una tienda online">
                      <div className={styles.commerceImage} style={{ backgroundImage: `url(${commerceEditorial})` }} />
                      <div className={styles.commerceShade} />
                      <div className={styles.commerceTop}><span>Del catálogo al pedido</span><span>Producto real → operación real</span></div>
                      <div className={styles.commerceBottom}><strong>Vender online tiene que terminar en algo concreto.</strong><span>Un pedido claro, listo para preparar y responder.</span></div>
                    </div>
                  ) : <ProductMomentV2 type={product.key} />}
                </article>); })}
            </div>
            <p className="products-note"><span className="status-dot" aria-hidden="true" /><strong>Booking está en evolución:</strong> ya podés conocerlo mientras seguimos afinando la experiencia.</p>
          </div>
        </section>

        <section className={styles.realitySection} aria-labelledby="reality-title">
          <div className="volta-container">
            <div className={styles.realityLead}>
              <div><p className="volta-eyebrow">Tecnología que toca la realidad</p><h2 id="reality-title">VOLTA no necesita parecer futurista.<br /><span>Necesita hacer que el progreso se sienta real.</span></h2></div>
              <p>Una tienda, una agenda, un portfolio o una capa de IA empresarial son problemas distintos. Lo que los une es el estándar: tecnología seria, experiencia simple y una mejora que se pueda entender.</p>
            </div>
            <div className={styles.realityGallery} role="region" aria-label="Contextos de uso de VOLTA" tabIndex={0}>
              <figure className={`${styles.realityCard} ${styles.realityCardTall}`}>
                <div className={styles.realityImage} style={{ backgroundImage: `url(${workspaceEditorial})`, backgroundPosition: "center" }} />
                <figcaption><span>Sistemas para trabajar</span><strong>La infraestructura importa cuando deja de estorbar.</strong></figcaption>
              </figure>
              <figure className={styles.realityCard}>
                <div className={styles.realityImage} style={{ backgroundImage: `url(${deskEditorial})`, backgroundPosition: "center" }} />
                <figcaption><span>Herramientas para hacer</span><strong>Menos fricción entre una intención y un resultado.</strong></figcaption>
              </figure>
              <figure className={`${styles.realityCard} ${styles.realityCardDark}`}>
                <div className={styles.realityImage} style={{ backgroundImage: `url(${teamEditorial})`, backgroundPosition: "center 42%" }} />
                <figcaption><span>Tecnología para decidir</span><strong>Más capacidad para equipos que necesitan claridad, control y velocidad.</strong></figcaption>
              </figure>
            </div>
            <p className={styles.editorialNote}>Imágenes editoriales para representar contextos de uso. No representan clientes ni resultados medidos de VOLTA.</p>
          </div>
        </section>

        <section id="criterio" className="principles-section" aria-labelledby="principles-title">
          <div className="volta-container principles-grid">
            <div className="principles-statement"><p className="volta-eyebrow">La forma VOLTA</p><h2 id="principles-title">Lo complejo,<br /><span>adentro.</span><br />Lo simple,<br /><span className="principles-accent">para vos.</span></h2><div className="shift-signature" aria-hidden="true"><span /><span /><span /></div></div>
            <div className="principles-body"><p className="principles-intro">Somos una empresa de productos y tecnología. Buscamos problemas reales donde la tecnología pueda producir una mejora importante sin volver más difícil la experiencia.</p><div className="principle-list">{principles.map(([number,title,copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><p className="principles-closing">Distintos productos. Una expectativa: que esté muy bien hecho.</p></div>
          </div>
        </section>

        <section id="en-desarrollo" className="volta-section future-section" aria-labelledby="future-title">
          <div className="volta-container">
            <div className={styles.creationIntro}><div><p className={styles.creationKicker}>En construcción · portfolio futuro</p><h2 id="future-title" className={styles.creationTitle}>Estamos construyendo<br />lo que sigue.</h2></div><p className={styles.creationAside}>No es una lista de features ni un roadmap con fechas inventadas. Son apuestas de producto en distintas etapas, con un problema concreto detrás y una hipótesis que todavía tiene que ganar evidencia.</p></div>
            <div className={styles.ventureGrid}>
              <article className={`${styles.venture} ${styles.venturePrimary}`}>
                <span className={styles.ventureNumber}>01 / COMPANY AI · PRIORIDAD ACTUAL</span><div className={styles.ventureHead}><div className={styles.ventureName}><span className={styles.ventureIcon}><ShieldCheck size={20} aria-hidden="true" /></span>VOLTA Shield</div><span className={styles.ventureStatus}>En validación</span></div><div className={styles.ventureShift} aria-hidden="true"><i/><i/><i/></div>
                <div className={styles.shieldVisual} aria-hidden="true"><span className={styles.shieldNode}>Personas</span><span className={styles.shieldRoute}>→</span><span className={styles.shieldCore}>SHIELD</span><span className={styles.shieldRoute}>→</span><span className={styles.shieldNode}>Modelos</span><small>políticas · datos · costo · calidad</small></div>
                <h3>Una sola IA para la empresa. Control debajo.</h3><p>Estamos construyendo una experiencia de IA generalista para que los empleados trabajen como ya esperan hacerlo, mientras la organización gobierna datos, políticas, modelos, calidad y costo sin trasladarles esa complejidad.</p><div className={styles.ventureMeta}><span>IA empresarial</span><span>Protección pre-egreso</span><span>Routing por calidad y costo</span><span>Gobernanza</span></div>
                <p className={styles.ventureTruth}>Objetivo actual: validar el valor del producto y sus controles en entornos reales antes de aumentar la inversión.</p>
              </article>
              <article className={`${styles.venture} ${styles.ventureSecondary} ${styles.bridgeVenture}`}>
                <div className={styles.bridgeImage} style={{ backgroundImage: `url(${teamEditorial})` }} aria-hidden="true" />
                <div className={styles.bridgeShade} aria-hidden="true" />
                <div className={styles.bridgeContent}>
                  <span className={styles.ventureNumber}>02 / OPPORTUNITY · PRODUCTO EN DESARROLLO</span><div className={styles.ventureHead}><div className={styles.ventureName}><span className={styles.ventureIcon}><Network size={20} aria-hidden="true" /></span>VOLTA Bridge</div><span className={styles.ventureStatus}>En desarrollo</span></div>
                  <h3>Que tu capacidad pueda verse antes que tu currículum.</h3><p>Bridge busca conectar personas que están construyendo su carrera con proyectos reales de emprendimientos y organizaciones. Trabajo concreto, evidencia concreta y una oportunidad de demostrar capacidad haciendo.</p><div className={styles.ventureMeta}><span>Oportunidades reales</span><span>Evidencia de trabajo</span><span>Selección transparente</span></div>
                  <p className={styles.ventureTruth}>No promete empleo ni trabajo gratuito: la tesis es crear una conexión más útil y justa entre capacidad y oportunidad.</p>
                </div>
              </article>
            </div>
            <div className={styles.explorationLane}><span className={styles.ventureIcon}><Workflow size={20} aria-hidden="true" /></span><div><strong>VOLTA Automate</strong><p>Exploramos cómo transformar procesos repetitivos en sistemas simples y confiables. Primero el problema; después la automatización.</p></div><span>Exploración · sin fecha prometida</span></div>
          </div>
        </section>

        <section id="como-funciona" className="volta-section start-section" aria-labelledby="start-title"><div className="volta-container"><div className="start-top"><div className="section-heading"><p className="volta-eyebrow">VOLTA hoy y mañana</p><h2 id="start-title" className="volta-h2">Empezá por lo que necesitás.<br /><span className="muted-heading">Nosotros seguimos construyendo.</span></h2></div><a href="#productos" className="button button-dark">Encontrá tu VOLTA<ArrowRight size={18} aria-hidden="true" /></a></div><div className="start-steps">{[["01","Elegí un problema real","Vender, organizar reservas o mostrar tu trabajo: hoy ya existen productos para empezar."],["02","Usá tecnología sin cargarla","Configurá intención y contenido. VOLTA se ocupa de buena parte de la complejidad técnica."],["03","Volvé para ver qué sigue","Shield, Bridge y nuevas tesis expanden el portfolio cuando el problema y la evidencia lo justifican."]].map(([number,title,copy]) => <article key={number}><span>{number}<ArrowRight size={18} aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="start-footnote"><span>Una compañía amplia. Productos enfocados.</span><a href="#en-desarrollo">Ver lo que sigue<ArrowUpRight size={16} aria-hidden="true" /></a></div></div></section>
      </main><VoltaFooter />
    </div>
  );
}
