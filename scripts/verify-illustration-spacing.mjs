import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
const requireTools = createRequire(`${process.env.VOLTA_BROWSER_TOOLS || "/tmp/volta-browser"}/package.json`);
const { chromium } = requireTools("playwright");
const base = process.env.VOLTA_TEST_URL || "http://localhost:3000";
const output = process.env.VOLTA_TEST_OUTPUT || "/tmp/corporate-evidence";
mkdirSync(output, { recursive: true });
const browser = await chromium.launch();
const results = [];
try {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  await context.route("**/_vercel/insights/**", route => route.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
  const page = await context.newPage();
  await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  for (const width of [1440, 1280, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    // Resize/scroll anchoring may update between two protocol calls. Measure the
    // pair atomically after layout settles instead of comparing different frames.
    const gap = await page.evaluate(async () => {
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const confirmation = document.querySelector(".sample-confirmation")?.getBoundingClientRect();
      const caption = document.querySelector(".product-moment-booking .moment-caption")?.getBoundingClientRect();
      if (!confirmation || !caption) throw new Error("Missing Booking illustration");
      return caption.top - confirmation.bottom;
    });
    results.push({ width, captionGap: gap });
    if (width === 390 || width === 1280) {
      await page.locator(".product-moment-booking").screenshot({ path: `${output}/booking-illustration-${width}.png` });
    }
  }
  assert.deepEqual(results.filter(result => result.captionGap < 8), [], "Booking example caption must remain clear of the confirmation");
} catch (error) {
  writeFileSync(`${output}/illustration-failure.txt`, error.stack || String(error));
  throw error;
} finally {
  writeFileSync(`${output}/illustration-spacing.json`, JSON.stringify(results, null, 2));
  await browser.close();
}
console.log("Illustrative labels remain clear at every tested viewport.");
