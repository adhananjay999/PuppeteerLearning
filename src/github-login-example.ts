import puppeteer from 'puppeteer';
import { password, username } from './constants/global.consts';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const pageUrl = 'https://github.com/';
  await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 90000 },);
  await page.setViewport({ width: 1366, height: 768 });
  await page.screenshot({ path: `ss/example.png` });

  const LOGIN_PAGE_SELECTOR = 'body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > div.position-relative.mr-3.mb-4.mb-lg-0.d-inline-block > a';
  const USERNAME_SELECTOR = '#login_field';
  const PASSWORD_SELECTOR = '#password';
  const SUBMIT_BUTTON_SELECTOR = '#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button';

  console.log(`Username: ${username}`);

  await page.waitForSelector(LOGIN_PAGE_SELECTOR);
  await page.click(LOGIN_PAGE_SELECTOR);
  await page.waitForSelector(USERNAME_SELECTOR);
  await page.type(USERNAME_SELECTOR, username, { delay: 100 });
  await page.waitForSelector(PASSWORD_SELECTOR);
  await page.type(PASSWORD_SELECTOR, password, { delay: 100 });
  await page.click(SUBMIT_BUTTON_SELECTOR);

  await page.waitForTimeout(10000);
  await browser.close();
})();


