/** Public presentation only. Lifecycle authority stays in volta-foundation.
 * Capabilities and destinations checked against each product repository, 2026-09-06.
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
};

export const corporateProducts = [
  {
    key: "store",
    name: "VOLTA Store",
    shortName: "Store",
    intent: "Vender online",
    audience: "Para negocios y emprendimientos",
    title: "Tu catálogo online. Tus pedidos, por WhatsApp.",
    description: "Mostrá lo que vendés en una tienda con tu identidad. Tus clientes eligen, arman su carrito y te envían un pedido ordenado por WhatsApp.",
    points: ["Catálogo y carrito", "Tu marca, tu estilo", "Pedidos organizados"],
    href: "https://www.voltastore.app",
    status: "Disponible",
  },
  {
    key: "booking",
    name: "VOLTA Booking",
    shortName: "Booking",
    intent: "Organizar reservas",
    audience: "Para profesionales y negocios con turnos",
    title: "Menos ida y vuelta. Más orden en tu agenda.",
    description: "Compartí tus servicios y horarios disponibles. Tus clientes reservan online y vos gestionás la agenda desde el celular.",
    points: ["Reservas online", "Servicios y disponibilidad", "Gestión de turnos"],
    href: "https://volta-booking.vercel.app",
    status: "En evolución",
  },
  {
    key: "portfolio",
    name: "VOLTA Portfolio",
    shortName: "Portfolio",
    intent: "Mostrar tu trabajo",
    audience: "Para profesionales, estudiantes y estudios",
    title: "Una presencia a la altura de tu trabajo.",
    description: "Convertí tus proyectos, legajos y experiencia en un portfolio que te represente. Vos elegís qué contar; VOLTA cuida cómo se ve.",
    points: ["Proyectos y legajos", "Identidad propia", "Diseño guiado"],
    href: "https://www.voltaportfolio.app",
    status: "Disponible",
  },
] as const satisfies readonly CorporateProduct[];

export const upcomingInitiatives = [
  {
    key: "shield",
    name: "VOLTA Shield",
    status: "En desarrollo",
    title: "IA para trabajar. Control para tu empresa.",
    description: "Un espacio de IA empresarial en desarrollo: una experiencia simple para las personas, con políticas de datos, modelos autorizados y control de uso y costos para la organización.",
    detail: "Estamos construyendo un MVP para validarlo en entornos controlados. La protección de información tiene límites explícitos: no es una garantía de seguridad total ni una certificación de cumplimiento.",
  },
  {
    key: "bridge",
    name: "VOLTA Bridge",
    status: "En desarrollo",
    title: "Tu capacidad, conectada con proyectos reales.",
    description: "Una plataforma en desarrollo para conectar profesionales que están construyendo su trayectoria con emprendimientos y organizaciones que tienen proyectos concretos.",
    detail: "El foco es crear oportunidades claras y justas, con selección por parte de quien lidera el proyecto y evidencia del trabajo realizado. No es una promesa de empleo ni un mercado de trabajo gratuito.",
  },
  {
    key: "automate",
    name: "VOLTA Automate",
    status: "En exploración",
    title: "Menos tareas repetidas. Más tiempo para avanzar.",
    description: "Exploramos cómo convertir procesos operativos repetitivos en flujos más simples y confiables. Primero, un problema real; después, la automatización que tenga sentido.",
    detail: "Esta iniciativa todavía no es un producto disponible. Su alcance e integraciones se definirán a partir de la validación de problemas concretos, sin fechas de lanzamiento prometidas.",
  },
] as const;
