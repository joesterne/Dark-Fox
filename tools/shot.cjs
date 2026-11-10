const { chromium } = require('playwright');
(async () => {
const [,, url, out, wait = '3000', w='1600', h='900'] = process.argv;
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
page.on('console', m => console.log('[console]', m.type(), m.text().slice(0, 3000)));
page.on('pageerror', e => console.log('[pageerror]', e.message));
await page.goto(url, { waitUntil: 'commit', timeout: 0 });
try { await page.waitForFunction(() => window.__done, null, { timeout: +wait, polling: 1000 }); } catch (e) { console.log('wait timeout'); }
const r = await page.evaluate(() => window.__done || window.__status);
console.log('status', r);
if (process.env.EVAL) console.log('eval', JSON.stringify(await page.evaluate(process.env.EVAL)));
await page.screenshot({ path: out, timeout: 300000 });
await browser.close();
})();
