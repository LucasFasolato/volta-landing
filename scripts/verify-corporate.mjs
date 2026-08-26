import { existsSync, readFileSync } from "node:fs";

const page = readFileSync("src/app/page.tsx", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");
const css = readFileSync("src/app/globals.css", "utf8");
const packageJson = readFileSync("package.json", "utf8");
const analytics = readFileSync("src/components/analytics/product-intent-analytics.tsx", "utf8");

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
requireText(layout, "VOLTA | Tu próximo paso, online.", "metadata title");
requireText(layout, "VOLTA Store, Portfolio y Booking", "metadata product map");
requireText(layout, "/favicon.svg", "favicon metadata");
requireText(layout, "<ProductIntentAnalytics />", "product intent analytics");
requireText(layout, "<Analytics />", "Vercel Web Analytics");
requireText(analytics, 'track("Product selected"', "product intent event");
requireText(analytics, 'return "showcase"', "showcase analytics placement");
requireText(analytics, 'return "closing"', "closing analytics placement");
requireText(packageJson, '"@vercel/analytics": "2.0.1"', "analytics dependency");
requireText(css, "@media (max-width: 767px)", "mobile breakpoint");
requireText(css, "@media (prefers-reduced-motion: reduce)", "reduced-motion support");

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
