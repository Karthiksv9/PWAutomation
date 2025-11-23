const {test, expect} = require('@playwright/test');
const { clear } = require('console');

test('PwTest', async({browser})=>
{
// chrome - plugins/ cookies

const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator('#username');
const pwd = page.locator('#password');
const signIn = page.locator('#signInBtn');
const cardTitles = page.locator(".card-title a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await userName.fill("rahulshettyacademy");
await pwd.fill("learning");
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
await userName.fill("");
await userName.fill("rahulshettyacademy");
await pwd.fill("learning");
await signIn.click();
console.log(cardTitles.first().textContent());
//const allTitles = await cardTitles.allTextContents();
//console.log(allTitles);
});

test('UI Controls', async({browser})=>
{
// chrome - plugins/ cookies

const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator("#username");
const pwd = page.locator("#password");
const dropdown = page.locator("select.form-control");
const documentLink = page.locator("[href*='request']");  //css -> [attribute='value']
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await userName.fill("rahulshettyacademy");
await pwd.fill("learning");
await page.locator(".checkmark").last().click();
await expect(page.locator(".checkmark").last()).toBeChecked();
await page.locator("#okayBtn").click();
await dropdown.selectOption("consult");
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect (await page.locator("#terms").isChecked()).toBeFalsy();

await expect(documentLink).toHaveAttribute('class','blinkingText');

//await page.locator(".blinkingText").click();

//await page.locator("#signInBtn").click();

//await page.pause();

});

test('childTab', async({browser})=>  //  Section 5: vdo20
{

const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentLink = page.locator("[href*='request']");  //css -> [attribute='value']
const [newPage] = await Promise.all(                            //------- (?)why await for promise when promise is to wait
[
context.waitForEvent('page'), // listen for any new page with promise pending, rejected, fulfilled (stream at 13:10)
documentLink.click(),
])

const text= await newPage.locator(".red").textContent();
console.log(text);




});
