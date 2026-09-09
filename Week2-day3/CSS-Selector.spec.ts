

import {test, chromium} from "@playwright/test"

test('learn CSS selectors', async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator('[id="username"]').fill('democsr2')

        await page.locator('#password').fill('crmsfa')

            await page.locator('[type="submit"]').click()


})

