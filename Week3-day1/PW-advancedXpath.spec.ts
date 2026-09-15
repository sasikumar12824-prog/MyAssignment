

import {test, chromium} from "@playwright/test"

test('learn CSS selectors - login to salesforce', async ({page}) => {

   await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator('[id="username"]').fill('democsr2')

        await page.locator('#password').fill('crmsfa')

            await page.locator('[type="submit"]').click()


            //Advanced xpath types = 8types 
            
            //1. P to C
            //form[@id="login"]/p[1]

            //2. GP to GC
            //form[@id="login"]//input[@id="username"]

            //3. C to P
            //input[@class="inputLogin"]/parent::p

            //4. C to GP
            //input[@class="inputLogin"]/ancestor::form

            //5. elder sibling
            //p[@class="top"]/following-sibling::p[2]

            //6. younger sibling
            //p[3]/preceding-sibling::p[2]
            //input[@id="username"]/preceding-sibling::label

            //7. elder cousin
            //input[@id="username"]/following::input[2]

            //8. younger cousin
            //input[@class="inputLogin"]/preceding::input[2]

})