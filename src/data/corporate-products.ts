/** Presentation cache, not portfolio authority. Verified against product-owned
 * sources and public demonstrations for Corporate v1. Lifecycle stays in Foundation.
 */
export type CorporateProductKey = "store" | "booking" | "portfolio";
export type CorporateProduct = {
  key: CorporateProductKey;
  name: string;
  shortName: string;
  intent: string;
  audience: string;
  title: string;
  description: string;
  points: readonly string[];
  href: string;
  status: "Disponible" | "En evolución";
  media: { width: number; height: number; alt: string; caption: string };
};

export const corporateProducts = [
  {
    key: "store", name: "VOLTA Store", shortName: "Store", intent: "Vender online",
    audience: "Para negocios y emprendimientos",
    title: "Tu tienda online. La venta sigue por WhatsApp.",
    description: "Mostrá tu catálogo con tu identidad. Tus clientes eligen, arman su carrito y te envían un pedido ordenado. Vos seguís la conversación.",
    points: ["Catálogo", "Carrito", "Pedido por WhatsApp"], href: "https://www.voltastore.app", status: "Disponible",
    media: { width: 1446, height: 1226, alt: "Catálogo NOVA Studio publicado como demostración de Store: productos con fotos y precios, carrito y continuación por WhatsApp.", caption: "NOVA Studio · demostración pública de Store" },
  },
  {
    key: "booking", name: "VOLTA Booking", shortName: "Booking", intent: "Organizar reservas",
    audience: "Para profesionales y negocios con turnos",
    title: "Menos ida y vuelta. Más orden en tu día.",
    description: "Compartí tus servicios y horarios. Tus clientes reservan online y vos gestionás la agenda desde el celular. Seguimos afinando la experiencia.",
    points: ["Servicios", "Disponibilidad", "Agenda"], href: "https://volta-booking.vercel.app", status: "En evolución",
    media: { width: 1180, height: 880, alt: "Demostración pública de Booking con selección de servicio, día y horario. Los datos son de ejemplo.", caption: "Servicio, día y horario · demostración pública de Booking" },
  },
  {
    key: "portfolio", name: "VOLTA Portfolio", shortName: "Portfolio", intent: "Mostrar tu trabajo",
    audience: "Para profesionales, estudiantes y estudios",
    title: "Tu trabajo merece un lugar propio.",
    description: "Reuní proyectos, imágenes y documentación en un portfolio que te represente. Elegí qué contar y compartilo. Sin diseñar una web desde cero.",
    points: ["Proyectos", "Documentación", "Identidad propia"], href: "https://www.voltaportfolio.app", status: "Disponible",
    media: { width: 1228, height: 1272, alt: "Ejemplo de VOLTA Portfolio con composición editorial, fotografía de arquitectura y presentación de un proyecto.", caption: "Estudio visual · ejemplo publicado en VOLTA Portfolio" },
  },
] as const satisfies readonly CorporateProduct[];

export const upcomingInitiatives = [
  {
    key: "shield", name: "VOLTA Shield", status: "En validación",
    title: "IA para tu equipo. Control para tu empresa.",
    description: "Estamos construyendo un espacio de IA donde las personas trabajan con naturalidad y la organización define cómo se usan sus datos, qué modelos se habilitan y cómo se cuidan calidad y costos.",
    detail: "MVP en desarrollo para validación controlada. Aún no disponible de forma general.",
  },
  {
    key: "bridge", name: "VOLTA Bridge", status: "En desarrollo",
    title: "Tu capacidad, conectada con oportunidades reales.",
    description: "Una plataforma en desarrollo para conectar profesionales que están construyendo su carrera con proyectos concretos de emprendimientos y organizaciones.",
    detail: "El foco: proyectos con alcance claro, condiciones justas y evidencia del trabajo realizado.",
  },
  {
    key: "automate", name: "VOLTA Automate", status: "En exploración",
    title: "Menos tareas repetidas. Más tiempo para avanzar.",
    description: "Exploramos cómo simplificar procesos operativos con automatización útil. Alcance en definición, sin fecha de lanzamiento.",
    detail: "No es un producto disponible.",
  },
] as const;
