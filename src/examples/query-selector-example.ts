/**
 * Example for single query selector
 */
import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // const pageUrl = 'https://www.tools4testing.com/contents/puppeteer/puppeteer-tutorial';
  const pageUrl = 'https://pptr.dev/';
  await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 90000 },);
  await page.setViewport({ width: 1366, height: 768 });
  await page.screenshot({ path: 'example.png' });
  // console.log('going for selector');
  const result = await page.$('body > content-component > pptr-api > content-box > h1:nth-child(2)');
  // console.log('selector got');
  const text = await (await result?.getProperty('innerText'))!.jsonValue();
  console.log(text);
  await browser.close();
})();
