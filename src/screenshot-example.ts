/**
 * Example for screenshot
 */
import puppeteer from 'puppeteer';
const url = 'https://stackoverflow.com/questions';
if (!url) {
    throw "Please provide URL as a first argument";
}
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.goto(url);
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();