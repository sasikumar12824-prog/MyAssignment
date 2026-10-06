

import {test, expect} from "@playwright/test";

test.describe('group: lead management tab',{tag:'@crmlead'}, ()=>{

    test.describe.configure({mode: 'serial', retries: 1})
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
    searchbox.fill('service')
    searchbox.press('Enter')

    await page.getByRole('link', { name: 'Cases' }).click()
    await page.getByRole('button',{name: 'New'}).click()
    await page.waitForLoadState('domcontentloaded')

    let NewLeadPopup = await page.locator('//h2[text()="New Case"]').innerText()
    console.log(NewLeadPopup);
    expect(NewLeadPopup).toBe('New Case')

    await page.getByRole('combobox', { name: 'Status' }).click()

    let caseselectioncombobox =await page.getByRole('combobox', { name: 'Case Origin' })
    await caseselectioncombobox.click()
    await caseselectioncombobox.press('ArrowDown')
    await caseselectioncombobox.press('Enter')      

    

   
   })
})