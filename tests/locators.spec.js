//const {test, expect} = require('@playwright/test')

import {test, expect} from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    const pageURL = await page.url;
        console.log('Page URL is:' ,pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');


    //TO LOCATE ELEMENTS
    //CLICK ON LOGIN BUTTON - PROPERTY
    //await page.locator('id=login2').click();
    await page.click('id=login2');


    //PROVIDE PASSWORD - CSS
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername','pavanol');

    //PROVIDE PASSWORD - CSS
    await page.fill('#loginpassword','test@123');

    //CLICK LOGIN BUTTON - XPATH
    await page.click("(//button[normalize-space()='Log in'])");

    //VERIFY LOGOUT LINK - CSS
    const logoutLink=await page.locator('#logout2');
    await expect(logoutLink).toBeVisible();
    console.log('Log out button visible');

    //CLOSE PAGE
    await page.close();
})

