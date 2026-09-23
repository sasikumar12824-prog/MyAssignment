
import { chromium, expect, test} from "@playwright/test"


test('learn to launch the browser', async ({page}) => {

   await page.goto("https://leafground.com/frame.xhtml")

   //handling frames using frame locators

   //Single line of code
   //await page.frameLocator('[src="default.xhtml"]').locator('#Click').click()

   //store the frame refence in  variable 
   let singleFrameRef = page.frameLocator('[src="default.xhtml"]')

   //message before click action
   const beforeClick =await singleFrameRef.locator('#Click').innerText()
   console.log(beforeClick);   

   //Click Action
   await singleFrameRef.locator('#Click').click()

   //message After click action
   const afterClick = await singleFrameRef.locator('#Click').innerText()
   console.log(afterClick);  

   //verify using non-retry assertion
   expect(afterClick).toBe('Hurray! You Clicked Me.')

   //verify using retry assertion
   expect(singleFrameRef.locator('#Click')).toContainText("Hurray! ")
   expect(singleFrameRef.locator('#Click')).toHaveText("Hurray! You Clicked Me.")


})