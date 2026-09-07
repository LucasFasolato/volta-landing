// Read-only final crop of the published Booking demonstration. No form submissions.
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';
const require=createRequire('/tmp/volta-browser/package.json');
const {chromium}=require('playwright');
const browser=await chromium.launch();
const context=await browser.newContext({viewport:{width:1440,height:1100},deviceScaleFactor:2,reducedMotion:'reduce'});
await context.route('**/_vercel/insights/**',r=>r.fulfill({status:200,body:''}));
const page=await context.newPage();
const assets='public/showcase';
mkdirSync('/tmp/volta-capture',{recursive:true});
try {
 const response=await page.goto('https://volta-booking.vercel.app',{waitUntil:'domcontentloaded'});
 if(response.status()!==200)throw new Error('Booking capture failed');
 await page.evaluate(()=>document.fonts.ready);
 const target=page.locator('[class*="max-w-[590px]"]').first();
 await target.waitFor({state:'visible'});
 await target.scrollIntoViewIfNeeded();
 const rect=await target.evaluate(el=>{const b=el.getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height+32};});
 // Include the real component's floating confirmation label, previously cropped.
 const buffer=await page.screenshot({clip:rect,animations:'disabled'});
 const meta=await sharp(buffer).metadata();
 for(const width of [640,960,1600])await sharp(buffer).resize({width,withoutEnlargement:true}).webp({quality:86,effort:6}).toFile(`${assets}/booking-${width}.webp`);
 const report=JSON.parse(readFileSync(`${assets}/provenance.json`,'utf8'));
 const item=report.find(p=>p.key==='booking');
 Object.assign(item,{width:meta.width,height:meta.height,capturedAt:new Date().toISOString(),cropNote:'Includes the original floating confirmation label; no content edits.'});
 writeFileSync(`${assets}/provenance.json`,JSON.stringify(report,null,2));
 writeFileSync('/tmp/volta-capture/booking.png',buffer);
 writeFileSync('/tmp/volta-capture/imagery-report.json',JSON.stringify(report,null,2));
}finally{await browser.close();}
