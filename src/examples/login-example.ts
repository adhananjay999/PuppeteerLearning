import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const pageUrl = 'https://quotes.toscrape.com/';
  await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 90000 },);
  await page.setViewport({ width: 1366, height: 768 });
  let i=0;
  await page.screenshot({ path: `ss/example.png` });

  await page.waitForSelector('div.col-md-8');
  await page.click('.col-md-4 a');
  await page.waitForSelector('#username');
  await page.type('#username', 'Dhananjay.Adhao',{delay:100});
  await page.waitForSelector('#password');
  await page.type('#password', 'Mypassword',{delay:100});
  await page.click('body > div > form > input.btn.btn-primary');

  await page.waitForSelector('body > div > div:nth-child(2) > div.col-md-8 > div:nth-child(2) > span:nth-child(2) > a:nth-child(3)');
  await page.click('body > div > div:nth-child(2) > div.col-md-8 > div:nth-child(2) > span:nth-child(2) > a:nth-child(3)');

  await page.waitForTimeout(10000);

  await browser.close();
})();
