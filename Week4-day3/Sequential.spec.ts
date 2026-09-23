
/* chromium.launch()
browser.newContext()
AudioContext.newPage()
await page.goto() */

import { test } from "@playwright/test"

test('', async ({page, context}) =>{

    await page.goto ('https://www.amazon.in/')

   let sBox = await page.locator('[id="twotabsearchtextbox"]')

   await sBox.fill('Iphone')

    await sBox.press('Enter')

    //register the event listerner and create a promise

    let eventReferenceNextPage =  context.waitForEvent('page')

    //click action - triggering new page

    await page.locator('(//span[contains(text(),"iPhone 17 256 GB: 15.93 cm (6.3″) ")])[1]').click()

    //resolve the promise and capture new page

    let childpage = await eventReferenceNextPage

    await page.waitForLoadState('domcontentloaded')

    let childtitle = await childpage.title()
    console.log(childtitle);

    let mainpagetitle = await page.title()
    console.log(mainpagetitle);

   let price = await childpage.locator('(//span[text()="98,900"])[5]')

   let priceprint = await price.innerText()

   console.log(priceprint);
   
   //use page.bringtofront() to change to front page 

   await page.bringToFront()

   await page.locator('//a[text()="Flights"]').click()
    
})
