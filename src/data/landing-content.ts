export const CONTENT = {
  nav: {
    links: [
      { label: "Problema", href: "#problema" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Beneficios", href: "#beneficios" },
    ],
    cta: "Solicitar demo",
  },

  hero: {
    badge: "Sistema de ventas por WhatsApp",
    kicker: "VOLTA convierte chats en ventas",
    title: "Tu WhatsApp puede vender",
    titleHighlight: "sin depender del celular.",
    subtitle:
      "VOLTA responde al instante, ordena conversaciones y lleva cada chat hacia una venta, pedido o turno.",
    ctaPrimary: "Solicitar demo",
    ctaSecondary: "Como funciona",
    microcopy: "Implementacion guiada  -  respuesta 24/7  -  foco en conversion",
    proof: [
      { value: "24/7", label: "responde" },
      { value: "<20s", label: "primer contacto" },
      { value: "mas orden", label: "menos caos" },
    ],
  },

  problem: {
    title: "Sin sistema, WhatsApp te quita tiempo y ventas.",
    subtitle:
      "El problema no es recibir mensajes. El problema es responder tarde, mezclar todo y depender del celular para que el negocio avance.",
    cards: [
      {
        title: "Se enfria la venta",
        desc: "Si tardas en responder, el cliente sigue de largo.",
        icon: "losses",
      },
      {
        title: "Se mezcla todo",
        desc: "Consultas, pedidos y turnos terminan en el mismo caos.",
        icon: "chaos",
      },
      {
        title: "Tu equipo carga con todo",
        desc: "Sin automatizacion, crecer implica mas desgaste.",
        icon: "phone",
      },
    ],
  },

  steps: [
    {
      title: "El cliente escribe",
      desc: "VOLTA responde en segundos y evita que la conversacion se enfrie.",
    },
    {
      title: "VOLTA ordena",
      desc: "Detecta que necesita el cliente y guia el siguiente paso.",
    },
    {
      title: "Tu negocio avanza",
      desc: "La salida es clara: venta, pedido, turno o derivacion.",
    },
  ],

  metrics: [
    {
      value: "Mas rapido",
      label: "menos demora",
      detail: "Respuestas inmediatas para no perder conversaciones valiosas.",
    },
    {
      value: "Mas orden",
      label: "menos carga",
      detail: "Pedidos, turnos y consultas dejan de competir en el mismo inbox.",
    },
    {
      value: "Mas ventas",
      label: "mejor conversion",
      detail: "Cada chat tiene un siguiente paso claro en lugar de quedar colgado.",
    },
  ],

  cta: {
    title: "Si WhatsApp es tu canal de venta, tiene que operar como sistema.",
    subtitle:
      "Solicita una demo y mira como VOLTA puede responder, ordenar y convertir mejor que una gestion manual.",
    button: "Quiero ver VOLTA",
    microcopy: "Demo guiada  -  diagnostico rapido  -  sin compromiso",
    notes: ["Mas claridad", "Menos carga", "Mejor conversion"],
  },
} as const;
