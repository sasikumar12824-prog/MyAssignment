import test, { Page } from "@playwright/test";

test('frame locators for nested frame', async({page}) =>{

    await page.goto('https://leafground.com/frame.xhtml')

    const titleofPage = await page.title()
    console.log(titleofPage);

    //handling frames using frame locators
     const frameGparent = page.frameLocator('[src="page.xhtml"]')

     const frameparent = frameGparent.frameLocator('[src="framebutton.xhtml"]')

    await frameparent.locator('#Click').click()


})