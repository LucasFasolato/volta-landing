export type CorporateProductKey = "store" | "booking" | "portfolio" | "automate";

export type CorporateProduct = {
  key: CorporateProductKey;
  name: string;
  shortName: string;
  intent: string;
  title: string;
  description: string;
  points: readonly string[];
  href: string | null;
  status: "Disponible" | "En evolución" | "En preparación";
};

export const corporateProducts: readonly CorporateProduct[] = [
  {
    key: "store",
    name: "VOLTA Store",
    shortName: "Store",
    intent: "Vender",
    title: "Tu tienda online, lista para vender por WhatsApp.",
    description:
      "Mostrá productos, armá pedidos y llevá la compra a una conversación ya ordenada.",
    points: ["Catálogo y carrito", "Identidad personalizable", "Pedidos por WhatsApp"],
    href: "https://www.voltastore.app",
    status: "Disponible",
  },
  {
    key: "booking",
    name: "VOLTA Booking",
    shortName: "Booking",
    intent: "Reservas",
    title: "Tus clientes reservan. Tu agenda queda ordenada.",
    description:
      "Servicios, profesionales y disponibilidad en una experiencia simple para reservar y gestionar turnos.",
    points: ["Reservas online", "Agenda y disponibilidad", "Gestión desde el negocio"],
    href: "https://volta-booking.vercel.app",
    status: "En evolución",
  },
  {
    key: "portfolio",
    name: "VOLTA Portfolio",
    shortName: "Portfolio",
    intent: "Mostrarte",
    title: "Tu trabajo merece una presencia a su altura.",
    description:
      "Proyectos, legajos y contenido profesional con composición guiada y una identidad propia.",
    points: ["Proyectos y legajos", "Dirección visual", "Publicación responsive"],
    href: "https://volta-portfolio-psi.vercel.app",
    status: "Disponible",
  },
  {
    key: "automate",
    name: "VOLTA Automate",
    shortName: "Automate",
    intent: "Automatizar",
    title: "Lo repetitivo no debería depender de vos.",
    description:
      "La dirección de VOLTA para convertir procesos repetitivos en flujos claros y automatizados.",
    points: ["Flujos de trabajo", "Menos tareas repetitivas", "Orientado a resultados"],
    href: null,
    status: "En preparación",
  },
] as const;
