import { test, expect } from '@playwright/test';
import { Login } from './page-objects/login.js';


test('user can login', async ({ page }) => {
  // 1. Create the instance (the "object")
  const homePage = new Login(page);

  // 2. Use the instance (lowercase 'h') to call the actions
  await homePage.navigate(); 
  await homePage.login('pavanol', 'test@123');

  await page.close();
  
})


// test('Home Page',async ({page})=>{

//     await page.goto('https://www.demoblaze.com/index.html');

//     const pageTitle=await page.title();
        
//     console.log('Page title is:', pageTitle);
    
//     await expect(page).toHaveTitle('STORE');

//     const pageURL=page.url();
//         console.log('Page URL is:', pageURL);

//     await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

//      await page.click('id=login2');


//     //PROVIDE PASSWORD - CSS
//     //await page.locator('#loginusername').fill("pavanol")
//     await page.fill('#loginusername','pavanol');

//     //PROVIDE PASSWORD - CSS
//     await page.fill('#loginpassword','test@123');

//     //CLICK LOGIN BUTTON - XPATH
//     await page.click("(//button[normalize-space()='Log in'])");

//     //VERIFY LOGOUT LINK - CSS
//     const logoutLink=await page.locator('#logout2');
//     await expect(logoutLink).toBeVisible();
//     console.log('Log out button visible');

//     //CLOSE PAGE
//     await page.close();