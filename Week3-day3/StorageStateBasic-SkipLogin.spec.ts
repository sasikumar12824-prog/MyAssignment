import {test} from "@playwright/test"

test.use({

    storageState:'Data/sflogin.json'

})

test('auth file to skip login', async ({page})=>{

    await page.goto('https://login.salesforce.com/')

    await page.waitForLoadState()

    console.log(await page.title());
    



})