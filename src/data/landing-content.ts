export const CONTENT = {
  nav: {
    links: [
      { label: "Problema", href: "#problema" },
      { label: "Soluciones", href: "#soluciones" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Beneficios", href: "#beneficios" },
    ],
    cta: "Solicitar demo",
  },

  hero: {
    badge: "WhatsApp como canal. VOLTA como sistema.",
    kicker: "Soluciones conectadas a WhatsApp",
    title: "Converti WhatsApp en",
    titleHighlight: "un sistema para tu negocio.",
    subtitle:
      "VOLTA adapta flujos para atender, vender, tomar pedidos, gestionar turnos, recibir comprobantes y ordenar la operacion.",
    ctaPrimary: "Solicitar demo",
    ctaSecondary: "Ver soluciones",
    microcopy: "Implementacion guiada  -  atencion 24/7  -  operacion mas ordenada",
    proof: [
      { value: "Atiende", label: "sin demora" },
      { value: "Ordena", label: "todo en un flujo" },
      { value: "Opera", label: "con menos carga" },
    ],
  },

  problem: {
    title: "WhatsApp solo no alcanza para operar bien.",
    subtitle:
      "Cuando todo entra por el chat y nada se ordena detras, se traban ventas, turnos, pedidos, comprobantes y tareas del equipo.",
    cards: [
      {
        title: "Todo entra por el mismo lugar",
        desc: "Consultas, pedidos y gestiones terminan mezclados en un solo inbox.",
        icon: "losses",
      },
      {
        title: "La operacion pierde claridad",
        desc: "Sin un sistema, cada mensaje depende de que alguien lo vea y actue a tiempo.",
        icon: "chaos",
      },
      {
        title: "Escalar suma carga manual",
        desc: "Crecer por WhatsApp sin orden suele significar mas celular y mas desgaste.",
        icon: "phone",
      },
    ],
  },

  solutions: [
    {
      title: "Ventas y atencion",
      desc: "Respuestas utiles, consultas guiadas y derivacion cuando hace falta.",
    },
    {
      title: "Turnos y reservas",
      desc: "Confirmacion, reprogramacion y seguimiento desde el mismo canal.",
    },
    {
      title: "Pedidos y entregas",
      desc: "Toma de pedidos, validacion y salida mas clara para el equipo.",
    },
    {
      title: "Comprobantes y validacion",
      desc: "Recepcion de archivos por WhatsApp y control ordenado para operar.",
    },
    {
      title: "Panel y operacion",
      desc: "Lo que entra por WhatsApp termina en una vista util para gestionar mejor.",
    },
  ],

  steps: [
    {
      title: "El contacto entra por WhatsApp",
      desc: "Puede venir de una consulta, una landing, un pedido, un turno o un comprobante.",
    },
    {
      title: "VOLTA clasifica y resuelve",
      desc: "Responde, organiza y activa el flujo correcto segun lo que necesita cada negocio.",
    },
    {
      title: "Tu equipo recibe una salida clara",
      desc: "La conversacion termina en una accion concreta y mas facil de operar.",
    },
  ],

  metrics: [
    {
      value: "Mas orden",
      label: "para la operacion",
      detail: "WhatsApp deja de ser solo un chat y pasa a tener un flujo mas claro.",
    },
    {
      value: "Menos carga",
      label: "para el equipo",
      detail: "Se reducen tareas repetitivas, seguimientos manuales y dependencia del celular.",
    },
    {
      value: "Mas casos resueltos",
      label: "desde un mismo canal",
      detail: "Atencion, ventas, turnos, pedidos y gestion pueden convivir mejor en un sistema.",
    },
  ],

  cta: {
    title: "Si tu negocio usa WhatsApp, VOLTA puede volverlo mucho mas util.",
    subtitle:
      "Solicita una demo y mira como podemos adaptar una solucion para atender, vender, gestionar y operar mejor desde el mismo canal.",
    button: "Quiero ver VOLTA",
    microcopy: "Demo guiada  -  diagnostico rapido  -  sin compromiso",
    notes: ["Atencion", "Turnos", "Pedidos", "Operacion"],
  },
} as const;
