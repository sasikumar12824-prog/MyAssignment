import {test, chromium, expect} from "@playwright/test"

test('assertion basics in playwright', async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    const title = await page.title()
    console.log(title)
     const titleurl = await page.url()
    console.log(titleurl)

    //retry assertion
    await expect(page).toHaveURL('https://leaftaps.com/opentaps/control/main')
    await expect(page).toHaveTitle('Leaftaps - TestLeaf Automation Platform')
    
    //Non retry assertion 
    expect(title).toBe('Leaftaps - TestLeaf Automation Platform')
    expect(titleurl).toContain('https://leaftaps.com/opentaps/control/main')

    await expect (page.locator('//label[@for="username"]')).toBeVisible()

    const usernameTextbox = page.locator('//input[@id="username"]')
    expect(usernameTextbox).toBeEditable()
    expect(usernameTextbox).toBeEnabled()
    expect.soft(usernameTextbox).toBeHidden()
    expect(usernameTextbox).toBeEmpty({timeout:2000})
    
})