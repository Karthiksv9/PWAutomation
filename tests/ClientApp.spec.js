const {test, expect} = require('@playwright/test');
const { clear } = require('console');

test('PwTest', async({browser})=>
{
// chrome - plugins/ cookies

const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/client");
console.log(await page.title());
await page.locator("#userEmail").fill("karthik.sub@gmail.com");
await page.locator("#userPassword").fill("Automation@123");
await page.locator("#login").click();

await page.waitForLoadState("networkidle");
const allTitles = await page.locator(".card-body b").allTextContents();
console.log(allTitles);
});

