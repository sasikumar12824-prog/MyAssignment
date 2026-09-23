import test, { expect, Page } from "@playwright/test";

test('frame locators for nested frame', async({page}) =>{

    await page.goto('https://leafground.com/frame.xhtml')

    //store the reference 
   let fr = page.frame({url:"https://leafground.com/default.xhtml"})

    // ? is for optional chaining only for .frame method- we can check the frame present or null

     //message before click action
   const beforeClick =await fr?.locator('#Click').innerText()
   console.log(beforeClick); 
   expect(beforeClick).toBe('Click Me')

   await fr?.locator('#Click').click()

})