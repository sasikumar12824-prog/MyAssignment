

import {test, expect} from "@playwright/test";

test.describe('group: lead management tab',{tag:'@crmlead'}, ()=>{

    test.describe.configure({mode: 'serial'})
    //serial - one by one execution of test cases - serial, retries - 1 time if failed  

   test.use(
       {
          storageState:'Data/sflogin.json' 
       }
   )
   
   test('auth file to skip the login', async ({page}) => {
   
   //await page.goto("https://login.salesforce.com/")
   await page.goto("https://orgfarm-4a009fdc51-dev-ed.develop.lightning.force.com/lightning/page/home")
   
   await page.waitForLoadState('domcontentloaded')
   
   console.log(await page.title());

    await page.locator('//div[@class="slds-icon-waffle"]').click()

    let searchbox = await page.getByRole('combobox', { name: 'Search apps and items...' })
    searchbox.click()
    searchbox.fill('marketing')
    searchbox.press('Enter',{timeout: 5000})
    await page.waitForLoadState('domcontentloaded')

    await page.getByRole('link', { name: 'Leads' }).click()
    let Leadsdashboardpage = await page.getByRole('link', { name: 'Leads' }).innerText()
    console.log(Leadsdashboardpage);
    expect(Leadsdashboardpage).toBe('Leads')

    await page.getByRole('button',{name: 'New'}).click()
    await page.waitForLoadState('domcontentloaded')

    let NewLeadPopup = await page.locator('//h2[text()="New Lead"]').innerText()
    console.log(NewLeadPopup);
    expect(NewLeadPopup).toBe('New Lead')

    let Salutationcombobox =await page.getByRole('combobox', { name: 'Salutation' })
    await Salutationcombobox.click()
    await Salutationcombobox.press('ArrowDown')
    await Salutationcombobox.press('Enter')      

    await page.getByRole('textbox', { name: 'First Name' }).fill('Sasi')

    await page.getByRole('textbox', { name: 'Last Name' }).fill('Kumar')    

    await page.getByRole('textbox', { name: 'Company' }).fill('TEST-QA')

     let saveButton = await page.locator('//button[text()="Save"]')
     await saveButton.waitFor({state:'visible'})
     await saveButton.click()

    await page.waitForLoadState('domcontentloaded')

     let leadName = await page.locator('//lightning-formatted-name[@slot="primaryField"]').innerText()
     console.log(leadName)
     expect(leadName).toContain('Mr. Sasi Kumar')

    await page.getByRole('link', { name: 'Opportunities' }).click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('//th[@class="slds-cell-edit"]').click()
    


})
})