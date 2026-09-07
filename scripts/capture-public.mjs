// Read-only browser captures. Public demonstrations, not customer testimonials.
import { createRequire } from 'node:module';
import { writeFileSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';
const require = createRequire('/tmp/volta-browser/package.json');
const { chromium } = require('playwright');
const browser = await chromium.launch();
const out = '/tmp/volta-capture';
const assets = 'public/showcase';
mkdirSync(assets,{recursive:true});
const report=[];
const sources=[
 {key:'store',url:'https://www.voltastore.app',selector:'#landing-hero [class*="max-w-[760px]"]',kind:'Published NOVA storefront demonstration'},
 {key:'booking',url:'https://volta-booking.vercel.app',selector:'[class*="max-w-[590px]"]',kind:'Published reservation demonstration; not a booked appointment'},
 {key:'portfolio',url:'https://www.voltaportfolio.app',selector:'[class*="__exampleSheet"]',kind:'Published illustrative portfolio; not a customer project'},
 {key:'store-live',url:'https://www.voltastore.app/tienda/strongprotein',kind:'Public storefront already linked by VOLTA Store; no endorsement or sales claim'},
];
try {
 for(const source of sources){
  const context=await browser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:2,reducedMotion:'reduce'});
  await context.route('**/_vercel/insights/**',r=>r.fulfill({status:200,body:''}));
  const page=await context.newPage();
  const response=await page.goto(source.url,{waitUntil:'domcontentloaded',timeout:45000});
  if(response.status()!==200) throw new Error(`${source.key}: HTTP ${response.status()}`);
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForTimeout(2200);
  const target=source.selector?page.locator(source.selector).first():page.locator('body');
  await target.waitFor({state:'visible'});
  await target.scrollIntoViewIfNeeded();
  await target.evaluate(async node=>{await Promise.all([...node.querySelectorAll('img')].map(async i=>{if(!i.complete)await new Promise((r,j)=>{i.addEventListener('load',r,{once:true});i.addEventListener('error',j,{once:true});setTimeout(()=>j(new Error('image timeout')),10000)});if(i.naturalWidth===0)throw new Error('broken image');await i.decode();}));});
  let buffer;
  if(source.selector)buffer=await target.screenshot({animations:'disabled'});
  else{await page.evaluate(()=>scrollTo(0,0));buffer=await page.screenshot({animations:'disabled'});}
  writeFileSync(`${out}/${source.key}.png`,buffer);
  const meta=await sharp(buffer).metadata();
  for(const w of [640,960,1600])await sharp(buffer).resize({width:w,withoutEnlargement:true}).webp({quality:86,effort:6}).toFile(`${assets}/${source.key}-${w}.webp`);
  report.push({...source,capturedAt:new Date().toISOString(),width:meta.width,height:meta.height,images:await target.locator('img').count(),text:(await target.innerText()).slice(0,5000)});
  await context.close();
 }
}finally{await browser.close();writeFileSync(`${out}/imagery-report.json`,JSON.stringify(report,null,2));writeFileSync(`${assets}/provenance.json`,JSON.stringify(report,null,2));}
