
import {test, chromium} from "@playwright/test"

test('Advanced xpath using salesforce login', async ({page}) =>{

    await page.goto("https://login.salesforce.com/")

    //Attribute xpath
    await page.locator('//label[@class="label usernamelabel"]').click()
    await page.locator('//input[@name="username"]').click()
    //partial attribute xpath
    await page.locator('//input[contains( @name,"usern")]').fill('dilipkumar.rajendran@testleaf.com')

    await page.locator('//input[@id="Login"]').click()

    //sibling xpath
    await page.locator('//input[@id="password"]/preceding-sibling::label').click()
    await page.locator('//label[@for="password"]/following-sibling::input[1]').fill('TestLeaf@2025')

    await page.locator('//input[@id="Login"]').click()

})