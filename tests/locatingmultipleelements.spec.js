import {test, expect} from '@playwright/test';


test('LocateMultipleElements', async ({page})=>{

await page.goto('https://www.demoblaze.com/index.html');

//LOCATE MULTIPLE WEB ELEMENTS
// const links=await page.$$('a');

// for(const link of links)
// {
//    const linkText =await link.textContent();
//    console.log(linkText);
// }

await page.waitForSelector("//div[@id='tbodyid']//h4/a");

const products=await page.$$("//div[@id='tbodyid']//h4/a");

for(const product of products)
{
    const productName =await product.textContent();
    console.log(productName);
}

await page.close();

})
