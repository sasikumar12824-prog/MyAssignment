import {test} from "@playwright/test"

test('auth file to skip login', async ({page})=>{

   await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator('[id="username"]').fill('democsr2')

    await page.locator('#password').fill('crmsfa')

    await page.locator('[type="submit"]').click()

    await page.waitForTimeout(15000)

    await page.context().storageState({path:'Data/sflogin.json'})



})