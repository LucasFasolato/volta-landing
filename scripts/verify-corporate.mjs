import { existsSync, readFileSync } from "node:fs";

const page = readFileSync("src/app/page.tsx", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");
const css = readFileSync("src/app/globals.css", "utf8");
const packageJson = readFileSync("package.json", "utf8");
const analytics = readFileSync("src/components/analytics/product-intent-analytics.tsx", "utf8");
const products = readFileSync("src/data/corporate-products.ts", "utf8");
const productMoment = readFileSync("src/components/corporate/product-moment-v2.tsx", "utf8");
const webShell = readFileSync("src/components/corporate/volta-web-shell.tsx", "utf8");

const failures = [];

function requireText(source, text, label) {
  if (!source.includes(text)) failures.push(`${label}: missing ${JSON.stringify(text)}`);
}

function forbidText(source, text, label) {
  if (source.includes(text)) failures.push(`${label}: forbidden text ${JSON.stringify(text)}`);
}

requireText(page, "Tu próximo paso,", "approved corporate promise");
requireText(page, 'id="productos"', "products section");
requireText(page, 'id="como-funciona"', "how-it-works section");
requireText(page, 'id="criterio"', "VOLTA principles section");
requireText(page, "<ProductMomentV2", "compact product moments");
requireText(page, "No elijas tecnología. Elegí qué querés lograr.", "outcome-first product framing");
requireText(page, "Tres pasos. Nada de empezar de cero.", "short process framing");

const sectionCount = (page.match(/<section\b/g) || []).length;
if (sectionCount !== 5) {
  failures.push(`page length: expected exactly 5 primary sections, found ${sectionCount}`);
}

requireText(products, "https://www.voltastore.app", "Store route");
requireText(products, "https://volta-portfolio-psi.vercel.app", "Portfolio route");
requireText(products, "https://volta-booking.vercel.app", "Booking route");
requireText(products, 'status: "En evolución"', "Booking lifecycle label");
requireText(products, 'name: "VOLTA Automate"', "Automate product representation");
requireText(products, 'href: null', "Automate route guard");
requireText(products, 'status: "En exploración"', "Automate explore caveat");

requireText(productMoment, "function StoreMoment", "Store product moment");
requireText(productMoment, "function BookingMoment", "Booking product moment");
requireText(productMoment, "function PortfolioMoment", "Portfolio product moment");
requireText(productMoment, "function AutomateMoment", "Automate product moment");
requireText(productMoment, 'aria-hidden="true"', "decorative product moment accessibility");
requireText(webShell, "export function VoltaHeader", "shared header");
requireText(webShell, "export function VoltaFooter", "shared footer");
requireText(webShell, "export function SectionHeading", "shared section heading");

requireText(layout, "VOLTA | Tu próximo paso, online.", "metadata title");
requireText(layout, "VOLTA Store, Booking y Portfolio", "metadata product map");
requireText(layout, "Automate continúa en exploración", "metadata Automate caveat");
requireText(layout, "/favicon.svg", "favicon metadata");
requireText(layout, "<ProductIntentAnalytics />", "product intent analytics");
requireText(layout, "<Analytics />", "Vercel Web Analytics");

// Keep verifying the existence of the current tokenized shell without freezing
// superseded Company OS primitives such as a specific legacy font or green hex.
requireText(css, "--volta-canvas:", "canvas token");
requireText(css, "--volta-green:", "VOLTA action token");
requireText(css, ".volta-display", "display typography token");
requireText(css, ".volta-section", "section spacing token");
requireText(css, "@media (max-width: 767px)", "mobile breakpoint");
requireText(css, "@media (prefers-reduced-motion: reduce)", "reduced-motion support");

requireText(analytics, 'track("Product selected"', "product intent event");
requireText(analytics, "anchor.dataset.productPlacement", "explicit analytics placement");
requireText(packageJson, '"@vercel/analytics": "2.0.1"', "analytics dependency");

forbidText(page, "HeroSwitchboard", "legacy switchboard retirement");
forbidText(page, "VoltaFlow", "legacy Flow retirement");
forbidText(layout, "volta-flow.css", "legacy Flow stylesheet retirement");
forbidText(page, "Convertí tu WhatsApp en un sistema", "corporate positioning");
forbidText(page, "WhatsApp como canal. VOLTA como sistema.", "corporate positioning");
forbidText(packageJson, '"framer-motion"', "dependency cleanup");
forbidText(packageJson, '"clsx"', "dependency cleanup");
forbidText(packageJson, '"tailwind-merge"', "dependency cleanup");

const retiredPaths = [
  "src/app/volta-flow.css",
  "src/components/corporate/hero-switchboard.tsx",
  "src/components/corporate/product-moment.tsx",
  "src/components/corporate/volta-flow.tsx",
  "src/data/landing-content.ts",
  "src/lib/utils.ts",
  "src/components/layout/navbar.tsx",
  "src/components/sections/hero.tsx",
  "src/components/ui/mock-carousel.tsx",
  "src/components/ui/premium-background.tsx",
];

for (const path of retiredPaths) {
  if (existsSync(path)) failures.push(`legacy cleanup: retired path still exists: ${path}`);
}

if (failures.length) {
  console.error("Corporate verification failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log("VOLTA Corporate verification passed.");
