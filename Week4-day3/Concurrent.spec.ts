
/* chromium.launch()
browser.newContext()
AudioContext.newPage()
await page.goto() */

import { test } from "@playwright/test"

test('', async ({page, context}) =>{

    await page.goto ('https://leafground.com/window.xhtml')

    let pagetitle = await page.title()
    console.log(pagetitle);
       
    //register the event listerner and create a promise in single line
    let [newpage] = await Promise.all ([context.waitForEvent('page'),page.locator('(//span[@class="ui-button-text ui-c"])[2]').click()])

   let allPages =  newpage.context().pages()

   let pagecount =  allPages.length
   console.log(pagecount); //3


   for(let index=0; index < pagecount;index++)
   {
    await page.waitForLoadState('domcontentloaded')

    let title =await allPages[index].title()
    console.log(title);

/* Window
Web Table
Dashboard */

   }


   
  
})
