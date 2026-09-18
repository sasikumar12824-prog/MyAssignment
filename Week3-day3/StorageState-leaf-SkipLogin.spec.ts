import {test} from "@playwright/test"

test.use({

    storageState:'Data/sflogin.json'

})

test('auth file to skip login', async ({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/login')

    await page.waitForLoadState()

    console.log(await page.title());
    

})