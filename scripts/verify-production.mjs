/** Read-only post-merge smoke check. Never deploys or submits product forms. */
import assert from "node:assert/strict";
import { setTimeout as delay } from "node:timers/promises";
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
const url = "https://volta-landing-delta.vercel.app";
const out = "/tmp/corporate-evidence/production";
mkdirSync(out, { recursive: true });
let html = "";
let ready = false;
for (let attempt = 0; attempt < 40; attempt++) {
  try {
    const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(10000) });
    html = await response.text();
    if (response.ok && html.includes('data-corporate-version="1.0"') && html.includes("/showcase/store-")) { ready = true; break; }
  } catch (error) { console.log(`Public alias retry ${attempt + 1}: ${error.message}`); }
  await delay(3000);
}
assert.ok(ready, "Public alias must serve the final Corporate v1 before closing the release");
const deploymentId = html.match(/data-dpl-id="([^"]+)"/)?.[1] || null;
writeFileSync(`${out}/public-release.json`, JSON.stringify({ url, checkedAt: new Date().toISOString(), workflowCommit: process.env.GITHUB_SHA, deploymentId, version: "1.0", status: 200 }, null, 2));
const result = spawnSync(process.execPath, ["scripts/verify-browser.mjs"], { stdio: "inherit", env: { ...process.env, VOLTA_TEST_URL: url, VOLTA_TEST_OUTPUT: out }, timeout: 180000 });
if (result.error) throw result.error;
assert.equal(result.status, 0, "Public production browser verification");
