/** Exercise production HTML/JS. Browser-only dependencies are isolated from runtime. */
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
const tools = createRequire(`${process.env.VOLTA_BROWSER_TOOLS || "/tmp/volta-browser"}/package.json`);
const { chromium } = tools("playwright");
const { AxeBuilder } = tools("@axe-core/playwright");
const base = process.env.VOLTA_TEST_URL || "http://localhost:3000";
const out = process.env.VOLTA_TEST_OUTPUT || "/tmp/corporate-evidence";
const expectedOrigin = "https://volta-landing-delta.vercel.app";
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const results = [];
const errors = [];
const imageEvidence = [];
const widths = [1440, 1920, 1280, 1024, 900, 768, 640, 390, 360, 320];
try {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 1000 } });
  await context.route("**/_vercel/insights/**", route => route.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
  await context.addInitScript(() => {
    window.__events = [];
    window.va = (...args) => window.__events.push(args);
  });
  const page = await context.newPage();
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  const response = await page.goto(base, { waitUntil: "networkidle", timeout: 30000 });
  assert.equal(response.status(), 200);
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal((await page.locator("h1").innerText()).replace(/\s+/g, " "), "Tu próximo paso, online.");
  assert.equal(await page.locator("main > section").count(), 5);
  assert.equal(await page.locator("#productos article").count(), 3);
  assert.equal(await page.locator("#en-desarrollo article").count(), 3);
  assert.equal(await page.locator("#en-desarrollo a, #en-desarrollo button, #en-desarrollo input").count(), 0);
  assert.match(await page.locator("#shield").innerText(), /En validación/i);
  assert.match(await page.locator("#shield").innerText(), /Aún no disponible de forma general/i);
  assert.match(await page.locator("#bridge").innerText(), /En desarrollo/i);
  assert.match(await page.locator("#automate").innerText(), /En exploración/i);
  assert.match(await page.locator("#automate").innerText(), /sin fecha de lanzamiento/i);
  assert.equal(await page.locator("main img").count(), 3);
  assert.match(await page.locator("html").getAttribute("lang"), /^es/);
  assert.match(await page.locator("body").evaluate(n => getComputedStyle(n).fontFamily), /Instrument Sans|Instrument_Sans/);
  results.push("Five chapters, three product showcases, accurate future hierarchy, headline and Instrument Sans");

  // Screenshots must never pass with blank placeholders or still-loading assets.
  await page.locator("main img").evaluateAll(images => images.forEach(i => { i.loading = "eager"; }));
  for (const width of widths) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForFunction(() => [...document.querySelectorAll("main img")].every(i => i.complete && i.naturalWidth > 0));
    await page.evaluate(() => Promise.all([...document.querySelectorAll("main img")].map(i => i.decode())));
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `Horizontal overflow: ${width}px`);
    const images = await page.locator("main img").evaluateAll(items => items.map(i => ({ src: i.currentSrc, width: i.naturalWidth, height: i.naturalHeight, alt: i.alt, rendered: i.getBoundingClientRect().toJSON() })));
    for (const image of images) {
      assert.ok(image.alt.length > 30);
      assert.ok(new URL(image.src).pathname.startsWith("/showcase/"), "Owned local capture");
      assert.ok(image.rendered.width > 150 && image.rendered.height > 140, "Readable visual, not a decorative thumbnail");
    }
    imageEvidence.push({ viewport: width, pageHeight: await page.evaluate(() => document.body.scrollHeight), images });
    await page.screenshot({ path: `${out}/home-${width}.png`, fullPage: true });
    if ([1440, 768, 390, 320].includes(width)) {
      const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
      writeFileSync(`${out}/axe-${width}.json`, JSON.stringify(axe, null, 2));
      assert.deepEqual(axe.violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) })), [], `Automated accessibility: ${width}`);
    }
    results.push(`${width}px: reflow, all media decoded, full-page visual evidence`);
  }

  const links = await page.locator('a[href^="#"]').evaluateAll(items => items.map(a => a.getAttribute("href")));
  for (const hash of new Set(links)) assert.equal(await page.locator(`[id="${hash.slice(1)}"]`).count(), 1, `Unique destination ${hash}`);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => scrollTo(0, 0));
  await page.locator(".skip-link").focus();
  assert.ok((await page.locator(".skip-link").boundingBox()).y >= 0, "Visible keyboard skip link");
  await page.keyboard.press("Enter");
  assert.equal(new URL(page.url()).hash, "#contenido");
  await page.evaluate(() => scrollTo(0, 0));
  const trigger = page.locator(".menu-trigger");
  await trigger.click();
  assert.equal(await trigger.getAttribute("aria-expanded"), "true");
  assert.equal(await page.locator("#mobile-menu").isVisible(), true);
  await page.screenshot({ path: `${out}/mobile-navigation.png` });
  const menuAxe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  assert.deepEqual(menuAxe.violations.map(v => v.id), [], "Open-menu accessibility");
  await page.keyboard.press("Escape");
  assert.equal(await trigger.getAttribute("aria-expanded"), "false");
  assert.ok(await trigger.evaluate(n => document.activeElement === n));
  await trigger.click();
  await page.locator("#mobile-menu").getByRole("link", { name: "Lo que viene" }).click();
  assert.equal(await page.locator("#mobile-menu").isVisible(), false);
  assert.ok((await page.locator("#en-desarrollo").boundingBox()).y >= 80, "Anchor clears header");
  await trigger.click();
  await page.locator("#future-title").click();
  assert.equal(await page.locator("#mobile-menu").isVisible(), false);
  await trigger.click();
  await page.setViewportSize({ width: 1280, height: 1000 });
  assert.equal(await page.locator("#mobile-menu").isVisible(), false);
  results.push("All anchors resolve; keyboard skip; menu open, Escape/focus, selection, outside click and resize");

  for (const [key, href] of Object.entries({ store: "https://www.voltastore.app", booking: "https://volta-booking.vercel.app", portfolio: "https://www.voltaportfolio.app" })) {
    const link = page.locator(`#${key} .product-link`);
    assert.equal(await link.getAttribute("href"), href);
    assert.equal(await link.getAttribute("target"), "_blank");
    assert.match(await link.getAttribute("rel"), /noopener/);
    await link.evaluate(n => n.addEventListener("click", e => e.preventDefault(), { once: true }));
    await link.click();
    let event = await page.evaluate(() => window.__events.filter(e => e[0] === "event").at(-1));
    assert.deepEqual(event[1], { name: "Product selected", data: { product: key, placement: "products" } });
    const footerLink = page.locator(`footer a[href="${href}"]`);
    await footerLink.evaluate(n => n.addEventListener("auxclick", e => e.preventDefault(), { once: true }));
    await footerLink.dispatchEvent("auxclick", { button: 1, bubbles: true });
    event = await page.evaluate(() => window.__events.filter(e => e[0] === "event").at(-1));
    assert.deepEqual(event[1], { name: "Product selected", data: { product: key, placement: "footer" } });
  }
  results.push("Product destinations, noopener and click/middle-click analytics limited to product/placement");

  let imageBytes = 0;
  const urls = [...new Set(imageEvidence.flatMap(v => v.images.map(i => i.src)))];
  for (const url of urls) {
    const resource = await page.request.get(url);
    assert.equal(resource.status(), 200, url);
    assert.match(resource.headers()["content-type"], /image\/webp/);
    imageBytes += (await resource.body()).byteLength;
  }
  assert.ok(imageBytes < 800_000, `Responsive image transfer budget: ${imageBytes}`);
  for (const link of await page.locator('figure a[href^="/showcase/"]').all()) {
    const resource = await page.request.get(`${base}${await link.getAttribute("href")}`);
    assert.equal(resource.status(), 200);
  }
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), "auto");
  assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute("href")).origin, expectedOrigin);
  const og = await page.locator('meta[property="og:image"]').getAttribute("content");
  const social = await page.request.get(`${base}${new URL(og).pathname}`);
  assert.equal(social.status(), 200);
  writeFileSync(`${out}/social-preview.png`, await social.body());
  for (const path of ["/robots.txt", "/sitemap.xml", "/site.webmanifest", "/favicon.svg"]) assert.equal((await page.request.get(`${base}${path}`)).status(), 200, path);
  results.push(`Local WebP loads and enlargement destinations; ${imageBytes} image bytes across tested variants; metadata/discovery and reduced motion`);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ forcedColors: "active" });
  await page.evaluate(() => scrollTo(0, 0));
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
  await page.screenshot({ path: `${out}/forced-colors-mobile.png`, fullPage: true });
  await page.emulateMedia({ forcedColors: "none" });
  await page.addStyleTag({ content: "p, a, h1, h2, h3 { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } p { margin-bottom: 2em !important; }" });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), "Text-spacing reflow");
  await page.screenshot({ path: `${out}/text-spacing-mobile.png`, fullPage: true });
  results.push("Forced-colors visual evidence and expanded text-spacing reflow");
  assert.deepEqual(errors, [], "Runtime and console errors");
  results.push("No runtime or console errors");
} catch (error) {
  writeFileSync(`${out}/failure.txt`, error.stack || String(error));
  throw error;
} finally {
  writeFileSync(`${out}/verification.json`, JSON.stringify({ base, results, errors, imageEvidence }, null, 2));
  await browser.close();
}
console.log(JSON.stringify({ passed: results.length, results }, null, 2));
