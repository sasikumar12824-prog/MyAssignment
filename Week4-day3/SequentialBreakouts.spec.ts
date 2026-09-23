
/* chromium.launch()
browser.newContext()
AudioContext.newPage()
await page.goto() */

import { test } from "@playwright/test"

test('', async ({page, context}) =>{

    await page.goto ('https://leafground.com/window.xhtml')

    let pagetitle = await page.title()
    console.log(pagetitle);
       
    //register the event listerner and create a promise
    let eventReferenceNextPage =  context.waitForEvent('page')
    let childpage = await eventReferenceNextPage

    //click action - triggering new page
    await page.locator('(//span[@class="ui-button-text ui-c"])[1]').click() 

    await page.waitForLoadState('domcontentloaded')

    let childtitle = await childpage.title()
    console.log(childtitle);

    let mainpagetitle = await page.title()
    console.log(mainpagetitle);

   let videoOption = await childpage.locator('(//div[@class="overview-title"])[2]')

   let videoOptionprint = await videoOption.innerText()

   console.log(videoOptionprint);
   
   //use page.bringtofront() to change to front page 

   await page.bringToFront()

   await page.locator('//h5[text()="Click and Confirm new Window Opens"]').click()
    
})
