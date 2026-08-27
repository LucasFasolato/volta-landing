import { existsSync, readFileSync } from "node:fs";

const page = readFileSync("src/app/page.tsx", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");
const css = readFileSync("src/app/globals.css", "utf8");
const flowCss = readFileSync("src/app/volta-flow.css", "utf8");
const packageJson = readFileSync("package.json", "utf8");
const analytics = readFileSync("src/components/analytics/product-intent-analytics.tsx", "utf8");
const heroSwitchboard = readFileSync("src/components/corporate/hero-switchboard.tsx", "utf8");
const productMoment = readFileSync("src/components/corporate/product-moment.tsx", "utf8");
const voltaFlow = readFileSync("src/components/corporate/volta-flow.tsx", "utf8");

const failures = [];

function requireText(source, text, label) {
  if (!source.includes(text)) failures.push(`${label}: missing ${JSON.stringify(text)}`);
}

function forbidText(source, text, label) {
  if (source.includes(text)) failures.push(`${label}: forbidden text ${JSON.stringify(text)}`);
}

requireText(page, "Tu próximo paso,", "hero");
requireText(page, "https://www.voltastore.app", "Store route");
requireText(page, "https://volta-portfolio-psi.vercel.app", "Portfolio route");
requireText(page, "https://volta-booking.vercel.app", "Booking route");
requireText(page, 'status: "En evolución"', "Booking lifecycle label");
requireText(page, 'name: "VOLTA Automate"', "Automate product representation");
requireText(page, 'status: "En preparación"', "Automate lifecycle caveat");
requireText(page, '<HeroSwitchboard />', "Hero 3.0 switchboard");
requireText(page, '<ProductMoment type={product.key} />', "interactive product moments");
requireText(page, '<VoltaFlowObserver />', "VOLTA Flow observer");
requireText(page, '<VoltaFlowIntro />', "VOLTA Flow hero signature");
requireText(page, '<VoltaFlowBranches />', "VOLTA Flow branch map");
requireText(page, 'data-volta-flow-section={product.key}', "VOLTA Flow product rail");
requireText(page, '<VoltaFlowMarker step="08" label="Activo" terminal />', "VOLTA Flow terminal state");
requireText(heroSwitchboard, 'intent: "Automatizar"', "Automate hero intent");
requireText(heroSwitchboard, 'role="tablist"', "switchboard accessibility");
requireText(productMoment, "function StoreMoment()", "Store product moment");
requireText(productMoment, "function PortfolioMoment()", "Portfolio product moment");
requireText(productMoment, "function BookingMoment()", "Booking product moment");
requireText(productMoment, "function AutomateMoment()", "Automate product moment");
requireText(voltaFlow, "OFF", "VOLTA Flow OFF state");
requireText(voltaFlow, "ONLINE", "VOLTA Flow ONLINE state");
requireText(voltaFlow, 'intent: "Vender"', "VOLTA Flow Store branch");
requireText(voltaFlow, 'intent: "Mostrarte"', "VOLTA Flow Portfolio branch");
requireText(voltaFlow, 'intent: "Reservas"', "VOLTA Flow Booking branch");
requireText(voltaFlow, 'intent: "Automatizar"', "VOLTA Flow Automate branch");
requireText(voltaFlow, "IntersectionObserver", "VOLTA Flow section activation");
requireText(layout, "VOLTA | Tu próximo paso, online.", "metadata title");
requireText(layout, "VOLTA Store, Portfolio y Booking", "metadata product map");
requireText(layout, "VOLTA Automate en preparación", "metadata Automate caveat");
requireText(layout, 'import "./volta-flow.css"', "VOLTA Flow styles");
requireText(layout, "/favicon.svg", "favicon metadata");
requireText(layout, "<ProductIntentAnalytics />", "product intent analytics");
requireText(layout, "<Analytics />", "Vercel Web Analytics");
requireText(analytics, 'track("Product selected"', "product intent event");
requireText(analytics, 'return "showcase"', "showcase analytics placement");
requireText(analytics, 'return "closing"', "closing analytics placement");
requireText(packageJson, '"@vercel/analytics": "2.0.1"', "analytics dependency");
requireText(css, "@media (max-width: 767px)", "mobile breakpoint");
requireText(css, "@media (prefers-reduced-motion: reduce)", "base reduced-motion support");
requireText(flowCss, ".volta-flow-intro", "VOLTA Flow visual signature");
requireText(flowCss, ".volta-flow-marker", "VOLTA Flow chapter rail");
requireText(flowCss, "@media (max-width: 767px)", "VOLTA Flow mobile behavior");
requireText(flowCss, "@media (prefers-reduced-motion: reduce)", "VOLTA Flow reduced-motion behavior");

forbidText(page, "Convertí tu WhatsApp en un sistema", "corporate positioning");
forbidText(page, "WhatsApp como canal. VOLTA como sistema.", "corporate positioning");
forbidText(packageJson, '"framer-motion"', "dependency cleanup");
forbidText(packageJson, '"clsx"', "dependency cleanup");
forbidText(packageJson, '"tailwind-merge"', "dependency cleanup");

const retiredPaths = [
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

console.log("Corporate source-of-truth verification passed.");
