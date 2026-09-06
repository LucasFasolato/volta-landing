/** Browser-only test dependencies live outside the runtime package.
 * npm install --prefix /tmp/volta-browser --no-package-lock playwright@1.57.0 @axe-core/playwright@4.11.0
 * /tmp/volta-browser/node_modules/.bin/playwright install chromium
 * npm run build && npm start; node scripts/verify-browser.mjs
 */
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
const requireTools = createRequire(`${process.env.VOLTA_BROWSER_TOOLS || "/tmp/volta-browser"}/package.json`);
const { chromium } = requireTools("playwright");
const { AxeBuilder } = requireTools("@axe-core/playwright");
const base = process.env.VOLTA_TEST_URL || "http://localhost:3000";
const output = process.env.VOLTA_TEST_OUTPUT || "/tmp/corporate-evidence";
mkdirSync(output, { recursive: true });
const browser = await chromium.launch();
const results = [];
const errors = [];
try {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  await context.route("**/_vercel/insights/**", route => route.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
  await context.addInitScript(() => { window.__events = []; window.va = (...args) => window.__events.push(args); });
  const page = await context.newPage();
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
  const response = await page.goto(base, { waitUntil: "domcontentloaded" });
  assert.equal(response.status(), 200);
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal((await page.locator("h1").innerText()).replace(/\s+/g, " "), "Tu próximo paso, online.");
  assert.equal(await page.locator("main > section").count(), 6);
  assert.equal(await page.locator(".product-card").count(), 3);
  assert.equal(await page.locator("#en-desarrollo article").count(), 2);
  assert.equal(await page.locator("#en-desarrollo a").count(), 0);
  assert.match(await page.locator("#en-desarrollo").innerText(), /VOLTA Shield/);
  assert.match(await page.locator("#en-desarrollo").innerText(), /VOLTA Bridge/);
  assert.match(await page.locator("#en-desarrollo").innerText(), /VOLTA Automate/);
  assert.match(await page.locator("#en-desarrollo").innerText(), /En validación/i);
  assert.match(await page.locator("html").getAttribute("lang"), /^es/);
  assert.match(await page.locator("body").evaluate(node => getComputedStyle(node).fontFamily), /Instrument Sans|Instrument_Sans/);
  results.push("Rendering, real product map, venture hierarchy, headline and Instrument Sans");

  for (const width of [1440, 1280, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
    await page.evaluate(() => window.scrollTo(0, 0));
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `Horizontal overflow at ${width}`);
    await page.screenshot({ path: `${output}/home-${width}.png`, fullPage: true });
    if (width === 1440 || width === 390 || width === 320) {
      const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
      writeFileSync(`${output}/axe-${width}.json`, JSON.stringify(accessibility, null, 2));
      assert.deepEqual(accessibility.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), [], `Accessibility at ${width}`);
    }
    results.push(`Responsive ${width}px without overflow`);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const trigger = page.getByRole("button", { name: "Abrir menú" });
  await trigger.click();
  assert.equal(await page.locator(".menu-trigger").getAttribute("aria-expanded"), "true");
  await page.screenshot({ path: `${output}/mobile-navigation.png` });
  await page.keyboard.press("Escape");
  assert.equal(await page.locator(".menu-trigger").getAttribute("aria-expanded"), "false");
  assert.ok(await trigger.evaluate(node => document.activeElement === node));
  await trigger.click();
  await page.locator("#mobile-menu").getByRole("link", { name: "Lo que viene" }).click();
  assert.equal(await page.locator("#mobile-menu").isVisible(), false);
  assert.ok((await page.locator("#en-desarrollo").boundingBox()).y >= 70, "Anchor must clear sticky header");
  await trigger.click();
  await page.locator("#future-title").click();
  assert.equal(await page.locator("#mobile-menu").isVisible(), false);
  await trigger.click();
  await page.setViewportSize({ width: 1280, height: 1000 });
  assert.equal(await page.locator("#mobile-menu").isVisible(), false);
  results.push("Mobile navigation: open, Escape/focus return, selection, outside click and resize");

  for (const [key, href] of Object.entries({ store: "https://www.voltastore.app", booking: "https://volta-booking.vercel.app", portfolio: "https://www.voltaportfolio.app" })) {
    const link = page.locator(`#${key} .product-link`);
    assert.equal(await link.getAttribute("href"), href);
    assert.match(await link.getAttribute("rel"), /noopener/);
    assert.equal(await link.getAttribute("target"), "_blank");
    await link.evaluate(node => node.addEventListener("click", event => event.preventDefault(), { once: true }));
    await link.click();
    const event = await page.evaluate(() => window.__events.filter(e => e[0] === "event").at(-1));
    assert.equal(event[1].name, "Product selected");
    assert.deepEqual(event[1].data, { product: key, placement: "products" });
  }
  results.push("All product destinations and real click analytics contain only product/placement");
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), "auto");
  await page.setViewportSize({ width: 640, height: 900 });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  assert.equal(new URL(canonical).href, "https://volta-landing-delta.vercel.app/");
  const og = await page.locator('meta[property="og:image"]').getAttribute("content");
  assert.ok(og);
  const ogResponse = await page.request.get(`${base}${new URL(og).pathname}`);
  assert.equal(ogResponse.status(), 200);
  writeFileSync(`${output}/social-preview.png`, await ogResponse.body());
  for (const path of ["/robots.txt", "/sitemap.xml", "/site.webmanifest", "/favicon.svg"]) {
    const resource = await page.request.get(`${base}${path}`);
    assert.equal(resource.status(), 200, path);
  }
  results.push("Reduced motion, 640px reflow, canonical/OG, robots, sitemap, manifest and favicon");
  assert.deepEqual(errors, [], "Runtime browser errors");
  results.push("No browser runtime or console errors");
} catch (error) {
  writeFileSync(`${output}/failure.txt`, error.stack || String(error));
  throw error;
} finally {
  writeFileSync(`${output}/verification.json`, JSON.stringify({ results, errors }, null, 2));
  await browser.close();
}
console.log(JSON.stringify({ passed: results.length, results }, null, 2));
