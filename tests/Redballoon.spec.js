const {test, expect} = require('@playwright/test');

test('browser context pwTest', async({browser})=>
{

// chrome - plugins/ cookies
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
// css, xpath
await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("input#password").fill("learning");
await page.locator("input#signInBtn").click();

});


test('Page context pwTest', async({page})=>
    {
    
    // chrome - plugins/ cookies
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://www.redballoon.com.au/");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("RedBalloon - Trending experiences, perfect to gift");
    await page.locator("a[aria-label='Driving experiences']").click();
    console.log(await page.title());
    await expect(page).toHaveTitle("Driving Experiences - Supercars, Quad Biking & More | RedBalloon");
    //await page.locator("a[href='/product/v8-front-seat-hot-laps-ride---2-laps---sydney/VRF058-M.html']").click();
    await Promise.all(

        [
            page.waitForLoadState,
            await page.locator("img[title='V8 Front Seat Hot Laps Ride - 2 Laps - Sydney'][alt='V8 Front Seat Hot Laps Ride - 2 Laps - Sydney'][src='https://redballoon.com.au/dw/image/v2/BCRD_PRD/on/demandware.static/-/Sites-rb-au-catalog/default/images/products/VRF058-M/djd77onosnpei4m39lxw.jpg?sw=540&sh=302&q=70']").first().click(),
        ]

    );
    
    await page.locator("#buy-voucher-btn-desktop").click();
    await page.locator(".btn.btn-primary.checkout-add-to-cart-btn.pl-2.pr-2").click();
   await page.getByRole('textbox', { name: 'Your first name *' }).fill('David');
    await page.locator(input[placeholder='Last Name']).fill("Jones");
    await page.locator(input[placeholder='Your email']).fill("davidjones@gmail.com");
   /* await page.getByRole('textbox', { name: 'Your first name *' }).click();
    await page.getByRole('textbox', { name: 'Your first name *' }).fill('David');
    await page.getByRole('textbox', { name: 'Your last name *' }).click();
    await page.getByRole('textbox', { name: 'Your last name *' }).fill('Jones');
    await page.getByRole('textbox', { name: 'Your email *' }).click();
    await page.getByRole('textbox', { name: 'Your email *' }).fill('david.jones@gmail.com');
    await page.getByText('OffOn').click();
    await page.getByRole('textbox', { name: 'To (Optional)' }).click();
    await page.getByRole('textbox', { name: 'To (Optional)' }).fill('Sheldon');
    await page.getByRole('textbox', { name: 'From (Optional)' }).click();
    await page.getByRole('textbox', { name: 'From (Optional)' }).fill('Jones');
    await page.getByRole('textbox', { name: 'Message (Optional)' }).click();
    await page.getByRole('textbox', { name: 'Message (Optional)' }).fill('Happy working');
    await page.getByRole('checkbox', { name: 'I have a promo code' }).check();
    await page.getByRole('textbox', { name: 'Enter Code' }).click();
    await page.getByRole('textbox', { name: 'Enter Code' }).fill('HBD@25');*/
    
    //await new Promise(() => {}); // prevents your script from exiting! 
    
    //await browser.close();



    
    
    });