import puppeteer from 'puppeteer';

let page;
let browser;
const width = 1920;
const height = 1080;

// beforeAll(async () => {
//     browser = await puppeteer.launch({
//         headless: false,
//         slowMo: 80,
//         args: [`--window-size=${width},${height}`]
//     });
//     page = await browser.newPage();
//     await page.setViewport({ width, height });
//     await page.goto('http://localhost:8000/');
// });

describe('Ensure authentication forms are loaded', () => {
    test('Check login form', async () => {
        // await page.waitForSelector('.login-form');

        // await page.click("input[name=email]");
        // await page.type("input[name=email]", 'jane@mail.com');
        // await page.click("input[name=password]");
        // await page.type("input[name=password]", 'test123');
        // await page.click(".login-devc");
        // await page.click(".link");
    }, 10000);

    test('Check signup form', async () => {
        // await page.waitForSelector('.signup-form');

        // await page.click("input[name=username]");
        // await page.type("input[name=username]", 'jan');
        // await page.click("input[name=first_name]");
        // await page.type("input[name=first_name]", 'jane');
        // await page.click("input[name=last_name]");
        // await page.type("input[name=last_name]", 'Doe');
        // await page.click("input[name=email]");
        // await page.type("input[name=email]", 'jane@mail.com');
        // await page.click("input[name=password]");
        // await page.type("input[name=password]", 'test123');
        // await page.click(".login-devc");
    }, 10000);
});

// afterAll(() => {
//     browser.close();
// });