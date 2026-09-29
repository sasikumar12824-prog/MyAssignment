//File upload - setInputFiles

import {expect, test} from "@playwright/test"

test('learn file upload ', async ({page})=>{

    await page.goto('https://www.naukri.com/registration/createAccount')

    let titles = page.title()
    console.log(titles);
    
    await page.getByLabel("I'm experienced. I have work experience (excluding internships)").click()

    let fileupload = page.locator('//button[text()="Upload Resume"]')

    await fileupload.setInputFiles('Data/my resume1.docx')

    let uploadedimg = await expect(page.locator('//span[@class="file-name ellipsis"]')).toContainText('Sasikumar_Resume_A2026.pdf')
    console.log(uploadedimg);
    
})

//File upload - Event listener
