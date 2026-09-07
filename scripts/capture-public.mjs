// Read-only capture of public product presentation; no authentication or form submission.
import { createRequire } from 'node:module';
import { writeFileSync, mkdirSync } from 'node:fs';
const require = createRequire('/tmp/volta-browser/package.json');
const { chromium } = require('playwright');
const browser = await chromium.launch();
const out = '/tmp/volta-capture';
mkdirSync(out, { recursive: true });
const report = [];
for (const [key,url] of Object.entries({corporate:'https://volta-landing-delta.vercel.app',store:'https://www.voltastore.app',booking:'https://volta-booking.vercel.app',portfolio:'https://www.voltaportfolio.app'})) {
  const context = await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  await context.route('**/_vercel/insights/**', r=>r.fulfill({status:200,body:''}));
  const page = await context.newPage();
  try {
    const response = await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(3000);
    for (let y=0;y<Math.min(await page.evaluate(()=>document.body.scrollHeight),18000);y+=900){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(130);}
    await page.evaluate(()=>scrollTo(0,0));
    await page.screenshot({path:`${out}/${key}-desktop.png`,fullPage:true});
    writeFileSync(`${out}/${key}.html`,await page.content());
    const info = await page.evaluate(()=>({title:document.title,text:document.body.innerText,links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.innerText,href:a.href})),images:[...document.images].map(i=>({alt:i.alt,src:i.currentSrc,width:i.naturalWidth,height:i.naturalHeight})),fonts:performance.getEntriesByType('resource').filter(r=>r.name.includes('.woff')).map(r=>r.name)}));
    report.push({key,url,status:response.status(),...info});
    if(key==='corporate') for(const [i,font] of info.fonts.entries()){const r=await page.request.get(font);writeFileSync(`${out}/font-${i}.woff2`,await r.body());}
    await page.setViewportSize({width:390,height:844});
    await page.screenshot({path:`${out}/${key}-mobile.png`,fullPage:true});
  } catch(error){report.push({key,url,error:String(error)});}
  await context.close();
}
await browser.close();
writeFileSync(`${out}/report.json`,JSON.stringify(report,null,2));
