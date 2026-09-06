import { ArrowUpRight, Check, Clock3, MessageCircle, ShoppingBag } from "lucide-react";
import type { CorporateProductKey } from "@/data/corporate-products";

/** Illustrative compositions of verified flows, not screenshots or customer evidence.
 * No focusable controls: the enclosing product story owns the real action.
 */
export function ArchitectureStudy() {
  return (
    <div className="architecture-study">
      <div className="architecture-sun" />
      <div className="architecture-shadow" />
      <div className="architecture-wing" />
      <div className="architecture-house"><span /><i /></div>
      <div className="architecture-ground" />
      <span className="architecture-note">ESTUDIO DE LUZ / 01</span>
    </div>
  );
}

function StoreMoment() {
  return (
    <div className="store-moment">
      <div className="sample-shop">
        <div className="sample-shop-header"><span>objeto<span className="sample-brand-dot">.</span></span><ShoppingBag size={17} /></div>
        <div className="sample-shop-copy"><span>Objetos para tu día a día</span><strong>Diseño que<br />se siente en casa.</strong></div>
        <div className="sample-products">
          <div><div className="object-scene"><div className="ceramic-vase" /></div><p>Florero Terra <span>$24.000</span></p></div>
          <div><div className="object-scene object-scene-sand"><div className="ceramic-cup" /></div><p>Taza Origen <span>$18.000</span></p></div>
        </div>
      </div>
      <div className="sample-order">
        <span className="sample-order-icon"><ShoppingBag size={18} /></span>
        <div><span className="sample-caption">Tu pedido, organizado</span><strong>2 productos en el carrito</strong></div>
        <div className="sample-whatsapp"><MessageCircle size={15} /> Continuar por WhatsApp<ArrowUpRight size={15} /></div>
      </div>
    </div>
  );
}

function BookingMoment() {
  return (
    <div className="booking-moment">
      <div className="sample-calendar">
        <div className="sample-calendar-head"><span>Elegí tu próximo turno</span><Clock3 size={16} /></div>
        <p>Un espacio para vos.</p>
        <div className="sample-days">{[["L", "14"], ["M", "15"], ["M", "16"], ["J", "17"], ["V", "18"]].map(([day, date]) => <span key={date} className={date === "16" ? "sample-day-selected" : ""}><small>{day}</small><strong>{date}</strong></span>)}</div>
        <div className="sample-times">{["10:00", "11:30", "14:30"].map(time => <span key={time} className={time === "14:30" ? "sample-time-selected" : ""}>{time}</span>)}</div>
        <div className="sample-confirmation"><span><Check size={16} /></span><div><strong>Reserva confirmada</strong><small>Miércoles 16 · 14:30</small></div></div>
      </div>
    </div>
  );
}

function PortfolioMoment() {
  return (
    <div className="portfolio-moment">
      <div className="sample-portfolio">
        <div className="sample-portfolio-header"><span>ESTUDIO / NORTE</span><span>Arquitectura & diseño<ArrowUpRight size={14} /></span></div>
        <div className="sample-portfolio-title"><span>Espacios para<br /><em>habitar.</em></span><span>Una mirada propia.<br />Una forma de construir.</span></div>
        <ArchitectureStudy />
        <div className="sample-portfolio-footer"><span>01 — Casa Patio</span><span>Explorar proyecto ↗</span></div>
      </div>
    </div>
  );
}

export function ProductMomentV2({ type }: { type: CorporateProductKey }) {
  return (
    <div className={`product-moment product-moment-${type}`} aria-hidden="true">
      {type === "store" ? <StoreMoment /> : type === "booking" ? <BookingMoment /> : <PortfolioMoment />}
      <span className="moment-caption">Vista ilustrativa · {type === "store" ? "Catálogo → carrito → WhatsApp" : type === "booking" ? "Servicio → horario → reserva" : "Proyectos → identidad → publicación"}</span>
    </div>
  );
}

export function HeroShowcase() {
  return (
    <figure className="hero-showcase">
      <div className="showcase-scene" aria-hidden="true">
        <div className="shift-plane shift-plane-back" /><div className="shift-plane shift-plane-front" />
        <div className="scene-label"><span className="signal-dot" />Una marca. Distintas posibilidades.</div>
        <div className="scene-portfolio scene-panel">
          <div className="scene-panel-bar"><span>VOLTA Portfolio</span><ArrowUpRight size={15} /></div>
          <ArchitectureStudy />
          <div className="scene-portfolio-bottom"><span>Tu trabajo.<br /><strong>Tu forma de mostrarlo.</strong></span><span>01 / 03</span></div>
        </div>
        <div className="scene-store scene-panel">
          <div className="scene-panel-bar"><span>VOLTA Store</span><ShoppingBag size={16} /></div>
          <div className="scene-store-product"><div className="ceramic-cup" /><div><span>Colección Origen</span><strong>Diseño cotidiano.</strong></div></div>
          <div className="scene-store-action"><MessageCircle size={15} />Del catálogo a WhatsApp<ArrowUpRight size={14} /></div>
        </div>
        <div className="scene-booking scene-panel">
          <div className="scene-panel-bar"><span>VOLTA Booking</span><Clock3 size={15} /></div>
          <span className="scene-booking-time">14:30<span>Tu próximo turno</span></span>
          <div className="scene-booking-confirm"><Check size={15} />Reserva confirmada</div>
        </div>
        <span className="scene-corner" />
      </div>
      <figcaption>Ejemplos de lo que podés crear con los productos VOLTA.</figcaption>
    </figure>
  );
}
