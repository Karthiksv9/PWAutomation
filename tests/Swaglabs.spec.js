const { test, expect } = require('@playwright/test');
test.only('swaglabs', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.getByText('Sauce Labs Backpack').click();
    await page.locator("button#add-to-cart").click();
    await page.locator(".back").click();
    await page.locator("a.shopping_cart_link").click();
    await page.locator("#checkout").click();
    await page.locator("#first-name").fill("Secret coder");
    await page.locator("#last-name").fill("From Sauce Labs");
    await page.getByPlaceholder('Zip/Postal Code').fill("5000");
    await page.locator('#continue').click();
    await page.locator('#finish').click();
}


);


