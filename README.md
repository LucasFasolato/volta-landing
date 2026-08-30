# VOLTA Corporate

Sitio corporativo y superficie pública de distribución del ecosistema VOLTA.

## Responsabilidad

Este repositorio presenta qué es VOLTA, comunica sus iniciativas customer-ready y dirige a cada solución. **No es un producto SaaS independiente** y no debe convertirse en una fuente paralela de verdad sobre Store, Booking, Portfolio u otras iniciativas.

La autoridad company-level vive en `LucasFasolato/volta-foundation`.

Fuentes canónicas principales:

- Company OS → `volta-foundation/registry/canonical-documents.yaml`
- Portfolio actual → `volta-foundation/registry/portfolio.yaml`
- Brand → `VOLTA-BRD-001`
- Visual Foundation → `VOLTA-VIS-001`
- Design → `VOLTA-DSN-001`
- Strategy → `VOLTA-STR-001`

Los repos de producto siguen siendo autoridad sobre su implementación y verdad local actual.

## Rol estratégico

VOLTA Corporate es un:

- **Brand / Distribution Asset**;
- **Ecosystem Asset**.

Su trabajo es:

1. representar VOLTA con precisión;
2. transferir confianza entre iniciativas;
3. ayudar a un visitante a reconocer qué solución puede servirle;
4. enrutarlo al destino correcto;
5. medir esa selección con el mínimo tracking necesario.

No debe inventar producto para tener algo que comunicar.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel

## Operating context

Antes de trabajo material:

1. [`AGENTS.md`](./AGENTS.md)
2. [`docs/CURRENT_STATE.md`](./docs/CURRENT_STATE.md)
3. [`docs/GUARDRAILS.md`](./docs/GUARDRAILS.md)
4. [`docs/EVIDENCE.md`](./docs/EVIDENCE.md)
5. [`docs/PRODUCT.md`](./docs/PRODUCT.md)
6. [`docs/ROADMAP.md`](./docs/ROADMAP.md)

`docs/VOLTA-WEB-DESIGN-SYSTEM-2.md` describe la implementación web local heredada y sigue siendo útil para mantener coherencia mientras Corporate converge incrementalmente hacia Visual Foundation v1. No es una autoridad company-wide superior a `VOLTA-VIS-001` / `VOLTA-DSN-001`.

## Development

```bash
npm install
npm run dev
```

Usar los checks disponibles del repositorio antes de integrar cambios. Los cambios visuales requieren verificación real desktop/mobile cuando la infraestructura de render/deploy lo permita.

## Canonical rule

> **Corporate represents VOLTA. It does not redefine VOLTA.**
