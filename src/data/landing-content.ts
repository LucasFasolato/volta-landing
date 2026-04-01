export const CONTENT = {
  nav: {
    links: [
      { label: "Plataforma", href: "#plataforma" },
      { label: "Soluciones", href: "#soluciones" },
      { label: "Integraciones", href: "#integraciones" },
      { label: "Pricing", href: "#pricing" },
    ],
    cta: "Start Free Trial",
  },

  hero: {
    badge: "+50 negocios ya están automatizando su atención con VOLTA",
    title: "Convertí tu WhatsApp en un",
    titleHighlight: "sistema de ventas automático.",
    subtitle:
      "Dejá de perder clientes por demoras. VOLTA responde, organiza y guía conversaciones para que tu negocio venda sin depender del celular.",
    ctaPrimary: "Empezar ahora →",
    ctaSecondary: "Ver demo",
    microcopy: "Sin tarjeta • Activación en 24h • Funciona desde el día 1",
  },

  problem: {
    title: "¿Tu WhatsApp vende… o te hace perder ventas?",
    subtitle:
      "El costo de botellas de tu negocio no es el producto: es tu tiempo de respuesta, el desorden y la dependencia constante del celular.",
    cards: [
      {
        title: "Ventas perdidas",
        desc: "Si no respondés en minutos, el cliente se va. Cada demora es una oportunidad menos.",
        icon: "losses",
      },
      {
        title: "Caos de gestión",
        desc: "Mensajes sin leer, pedidos desordenados y seguimientos perdidos. El proceso comercial se rompe.",
        icon: "chaos",
      },
      {
        title: "Esclavo del celular",
        desc: "Tu negocio no puede depender de que estés pegado a la pantalla 24/7 para no perder ventas.",
        icon: "phone",
      },
    ],
  },

  flow: [
    {
      title: "Cliente escribe",
      desc: "El cliente inicia el contacto por WhatsApp con una consulta, pedido o intención de compra.",
    },
    {
      title: "VOLTA interpreta",
      desc: "El sistema responde al instante, entiende la intención y guía la conversación con lógica comercial.",
    },
    {
      title: "Resultado claro",
      desc: "Tu negocio recibe información ordenada y una acción concreta: venta, pedido, turno o derivación.",
    },
  ],

  steps: [
    {
      title: "Cliente escribe",
      desc: "Sin importar la hora, tu WhatsApp está siempre abierto y listo para recibir consultas.",
    },
    {
      title: "VOLTA interpreta",
      desc: "Nuestra IA entiende la intención del cliente, detecta contexto y responde en segundos con precisión humana.",
    },
    {
      title: "Acción concreta",
      desc: "Se cierra la venta, se agenda el turno o se envía el catálogo. Objetivo cumplido.",
    },
  ],

  metrics: [
    { value: "+35%", label: "Ventas rescatadas" },
    { value: "-20h", label: "Tiempo operativo" },
    { value: "100%", label: "Organización" },
    { value: "24/7", label: "Activo" },
  ],

  features: [
    {
      title: "Atención automática",
      desc: "Responde consultas repetitivas y organiza derivaciones, stocks o preguntas frecuentes sin fricción.",
    },
    {
      title: "Agendamiento de turnos",
      desc: "Ideal para negocios con agenda. Reserva, confirma, recuerda y reordena turnos desde WhatsApp.",
    },
    {
      title: "Dashboard de métricas",
      desc: "Visualizá ventas, tiempos de respuesta y performance en tiempo real para optimizar tu operación.",
    },
  ],

  cta: {
    title: "Dejá de responder mensajes. Empezá a vender en automático.",
    subtitle:
      "Sumate a los negocios que ya escalaron su operación con VOLTA.",
    button: "Empezar mi prueba gratis →",
    microcopy: "Sin tarjeta de crédito",
  },
} as const;