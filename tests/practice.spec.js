import {test, expect} from '@playwright/test';

test('Practice', async({page})=>{

await page.goto('https://www.demoblaze.com/index.html');

    const pageURL = await page.url();
        console.log('Page URL is:' ,pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    const samsungGalaxyS6= await page.locator("//a[normalize-space()='Samsung galaxy s6']");
        await expect(samsungGalaxyS6).toBeVisible();
        console.log('Samsung Galaxy S6 is visible');
        
    await samsungGalaxyS6.click();

    page.on('dialog', async (dialog) => {
        console.log('Dialog Type:', dialog.type());    // Should be 'alert'
        console.log('Dialog Message:', dialog.message()); // Should be 'Product added'
        await dialog.accept(); // Clicks the OK button
    });

    const addToCart= await page.locator("//a[normalize-space()='Add to cart']");
        await expect(addToCart).toBeVisible();
        
    await addToCart.click();

    const cart= await page.locator("//a[normalize-space()='Cart']")
        await expect(cart).toBeVisible();

    await cart.click();

    const placeOrder = await page.locator("//button[normalize-space()='Place Order']")
        await expect(placeOrder).toBeVisible();
        console.log('Place order button is visible');

    // await placeOrder.click();

    await page.close();

})