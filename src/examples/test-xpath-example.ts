import puppeteer, { Page } from 'puppeteer';

example();

async function example() {

    const browser = await puppeteer.launch({headless : false});

    const page = await browser.newPage();

    await page.setViewport({ width: 1366, height: 768});

    // await page.goto('https://www.tools4testing.com/contents/puppeteer/testpages/puppeteer-relative-xpath-by-attribute-testpage');

    // await enterDetails(page);
    await page.goto('https://www.tools4testing.com/contents/puppeteer/testpages/puppeteer-relative-xpath-by-text-function-testpage');
    await testXpath(page);


    //wait for some time before closing, specify time in milliseconds

    await wait(5000);

    //Close browser

    await browser.close();

}

 

async function enterDetails(page: Page) : Promise<void> {

    const element = (await page.$x("//input[@id='xyz']"))[0];

    element.type("www.tools4testing.com");

}

 
async function testXpath(page: Page) : Promise<void> {

  const element1 = (await page.$x("//button[text()='www.tools4testing.com']"))[0];

  element1.click();

  page.on('dialog', async dialog => {

      console.log(dialog.message());

      await dialog.accept();

  });

  const element2 = (await page.$x("//button[text()='www.java4coding.com']"))[0];

  element2.click();

  page.on('dialog', async dialog => {

      console.log(dialog.message());

      await dialog.accept();

  });

}


//wait if needed

async function wait(time: number | undefined) {

    return new Promise(function(resolve) {

        setTimeout(resolve, time)

    });

}