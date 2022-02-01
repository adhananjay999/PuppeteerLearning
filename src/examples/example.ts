import { launch, Page } from 'puppeteer';

example();

async function example() {

    const browser = await launch({headless : false});

    const page = await browser.newPage();

    await page.setViewport({ width: 1366, height: 768});

    await page.goto('https://www.tools4testing.com/contents/puppeteer/testpages/puppeteer-relative-xpath-by-attribute-testpage');

    await enterDetails(page);

    //wait for some time before closing, specify time in milliseconds

    await wait(5000);

    //Close browser

    await browser.close();

}

 

async function enterDetails(page: Page) : Promise<void> {

    const element = (await page.$x("//input[@id='xyz']"))[0];

    element.type("www.tools4testing.com");

}

 

//wait if needed

async function wait(time: number | undefined) {

    return new Promise(function(resolve) {

        setTimeout(resolve, time)

    });

}