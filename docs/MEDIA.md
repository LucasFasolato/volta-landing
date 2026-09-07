# Corporate v1 — Media provenance and refresh

## Current media

All three visuals are **screenshots of existing public product demonstrations**. They are not customer activity, logged-in admin screens, bookings that actually occurred or endorsements. Captions on the homepage explicitly identify demonstrations/examples.

| Asset | Source | Captured content |
| --- | --- | --- |
| Store | https://www.voltastore.app | NOVA Studio storefront demonstration with product photography, cart and WhatsApp handoff |
| Booking | https://volta-booking.vercel.app | Published service/day/time selection demonstration; full floating confirmation label retained |
| Portfolio | https://www.voltaportfolio.app | Published architectural portfolio example |

Machine-readable provenance: `public/showcase/provenance.json`. The original product repositories retain authority for underlying example/photo attribution. Corporate did not introduce new external stock photographs or AI-generated product screens.

## Asset contract

Each source has `-640.webp`, `-960.webp` and `-1600.webp` variants. The last suffix is a **maximum export target**, not a guarantee of 1600 actual pixels: original captures narrower than 1600 are not upscaled. HTML srcset descriptors use the actual width `Math.min(source.width, 1600)`.

Use `next/image` with explicit intrinsic dimensions, inside a native picture/source selection. Files are precompressed and served unoptimized at runtime to avoid duplicated transforms and Vercel image-optimization usage. Keep one asset under 200,000 bytes and the nine variants together under 800,000 bytes.

## Refresh procedure

Confirm the product-owned source and availability first. In a permitted browser, load only the public example, wait for fonts and all images to decode, and capture the complete composition including intentional overhanging elements. Do not log into real customer accounts, create orders or submit bookings for marketing imagery.

Export with Sharp WebP quality 86, effort 6, at 640/960/1600 maximum widths without enlargement. Update provenance and the source dimensions in `corporate-products.ts`; preserve explanatory alt text and visible example captions. Check full-size readability and mobile containment, then run `npm run check` and the browser suite. Batch this with a meaningful release; do not create repeated preview deployments for individual media changes.

A genuinely authorized, representative application capture can replace a demonstration later. Do not silently relabel an existing illustration as an actual application result.
