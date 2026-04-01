export const CONTENT = {
  nav: {
    links: [
      { label: "Sistema", href: "#sistema" },
      { label: "Impacto", href: "#impacto" },
      { label: "Modulos", href: "#modulos" },
      { label: "Demo", href: "#demo" },
    ],
    cta: "Solicitar demo",
  },

  hero: {
    badge: "Commercial operating layer for WhatsApp",
    title: "WhatsApp, convertido en",
    titleHighlight: "infraestructura comercial.",
    subtitle:
      "VOLTA responde, prioriza, ordena y ejecuta acciones para que cada conversacion termine en venta, pedido, turno o derivacion.",
    ctaPrimary: "Solicitar demo",
    ctaSecondary: "Ver sistema",
    microcopy: "Implementacion guiada  •  activacion en dias  •  sin friccion operativa",
    proof: [
      { value: "24/7", label: "Respuesta operativa" },
      { value: "<20s", label: "Primer contacto" },
      { value: "1 capa", label: "Orden sobre el caos" },
    ],
    credibility: [
      "Clasifica intencion y urgencia",
      "Recupera consultas que hoy se enfrían",
      "Deriva con contexto cuando hace falta",
      "Reduce la dependencia del celular",
    ],
  },

  signature: {
    kicker: "VOLTA operating layer",
    title: "No agregas otro bot. Instalas sistema sobre WhatsApp.",
    subtitle:
      "VOLTA toma conversaciones dispersas y las convierte en flujo comercial con criterio, prioridad y salida concreta.",
    inputs: [
      "Consultas entrando a cualquier hora",
      "Leads tibios mezclados con clientes listos para comprar",
      "Pedidos, turnos y seguimientos dispersos en chats",
    ],
    modules: [
      {
        title: "Interpreta",
        desc: "Lee intencion, contexto y urgencia en tiempo real.",
      },
      {
        title: "Decide",
        desc: "Aplica logica comercial y responde con siguiente paso.",
      },
      {
        title: "Ejecuta",
        desc: "Reserva, agenda, envia informacion o prepara cierre.",
      },
      {
        title: "Deriva",
        desc: "Escala al equipo humano con contexto, no con caos.",
      },
    ],
    outputs: [
      "Venta avanzada o cerrada",
      "Pedido listo para tomar",
      "Turno confirmado",
      "Derivacion con contexto",
    ],
    footer:
      "Resultado: una operacion comercial mas rapida, mas ordenada y menos dependiente del celular.",
  },

  problem: {
    title: "Sin sistema, WhatsApp escala el caos.",
    subtitle:
      "Lo que hoy parece atencion al cliente muchas veces es perdida silenciosa: demoras, chats sin criterio y equipo reaccionando desde el celular.",
    cards: [
      {
        title: "La venta llega y nadie la toma a tiempo",
        desc: "Cada minuto de demora baja conversion. El problema no es la demanda: es la respuesta.",
        icon: "losses",
      },
      {
        title: "Todo entra por el mismo canal y nada queda claro",
        desc: "Consultas, pedidos, agenda y soporte compiten en el mismo inbox. Sin sistema, el proceso comercial se rompe.",
        icon: "chaos",
      },
      {
        title: "El negocio depende demasiado del celular",
        desc: "Si la atencion vive en manos del equipo, escalar implica mas carga, mas friccion y menos control.",
        icon: "phone",
      },
    ],
  },

  metrics: [
    {
      value: "+35%",
      label: "consultas rescatadas",
      detail: "Mas conversaciones llegan a una accion util en lugar de enfriarse.",
    },
    {
      value: "-20h",
      label: "carga operativa",
      detail: "Menos tiempo pegado al inbox y mas tiempo gestionando negocio.",
    },
    {
      value: "24/7",
      label: "cobertura real",
      detail: "VOLTA responde incluso cuando tu equipo no esta online.",
    },
    {
      value: "1 flujo",
      label: "operacion ordenada",
      detail: "Todo entra por WhatsApp, pero ya no termina en caos.",
    },
  ],

  features: [
    {
      title: "Respuesta con criterio comercial",
      desc: "No contesta por contestar. Detecta intencion, propone siguiente paso y sostiene la conversion.",
    },
    {
      title: "Pedidos y turnos sin cuello de botella",
      desc: "Ideal para negocios que venden, agendan o coordinan por WhatsApp y necesitan ejecutar con menos friccion.",
    },
    {
      title: "Supervision, handoff y control",
      desc: "Cuando la conversacion requiere a una persona, VOLTA deriva con contexto para que el equipo entre mejor y cierre mas rapido.",
    },
  ],

  cta: {
    title: "Tu WhatsApp ya tiene demanda. Falta operarlo como un sistema.",
    subtitle:
      "Implementa VOLTA y convierte conversaciones en una capa comercial mas ordenada, mas rapida y lista para escalar.",
    button: "Agendar demo con VOLTA",
    microcopy: "Diagnostico comercial  •  setup guiado  •  foco en conversion",
  },
} as const;
