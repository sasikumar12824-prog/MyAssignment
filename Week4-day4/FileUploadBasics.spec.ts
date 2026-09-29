//File upload - setInputFiles

import {expect, test} from "@playwright/test"

test('learn file upload ', async ({page})=>{

    await page.goto('https://leafground.com/file.xhtml')

    let fileupload = page.locator('(//input[@type="file"])[1]')

    await fileupload.setInputFiles('Data/Tests.png')

    let uploadedimg = await expect(page.locator('//span[@class="ui-fileupload-filename"]')).toContainText('Tests.png ')
    console.log(uploadedimg);
    
})

//File upload - Event listener
