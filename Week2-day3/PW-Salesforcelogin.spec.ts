



import {test, chromium} from "@playwright/test"

test('learn CSS selectors - login to salesforce', async ({page}) => {

            await page.goto("https://login.salesforce.com/")
            await page.locator('[name="username"]').fill('dilipkumar.rajendran@testleaf.com')
            await page.locator('#Login').click()
            await page.locator('#password').fill('TestLeaf@2025')
            await page.locator('#Login').click()
            let pagetitle = await page.title();               
            console.log(`The page title is: ${pagetitle}`);
            let PageUrl = page.url();               
            console.log(`The page title is: ${PageUrl}`);
})