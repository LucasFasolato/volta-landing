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
    const confirmation = await page.locator(".sample-confirmation").boundingBox();
    const caption = await page.locator(".product-moment-booking .moment-caption").boundingBox();
    assert.ok(confirmation && caption);
    const gap = caption.y - (confirmation.y + confirmation.height);
    assert.ok(gap >= 8, `Booking example caption overlaps or crowds confirmation at ${width}px: ${gap}px`);
    results.push({ width, captionGap: gap });
  }
} finally {
  writeFileSync(`${output}/illustration-spacing.json`, JSON.stringify(results, null, 2));
  await browser.close();
}
console.log("Illustrative labels remain clear at every tested viewport.");
