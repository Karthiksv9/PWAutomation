const {test}= require('@playwright/test');
test('rough', async({browser})=>
{
const context = await browser.newContext();
const page= await context.newPage();
await page.goto()


});