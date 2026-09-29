
import test from "@playwright/test"
import data from "../../../Data/loginSalesforce.json"


for(let CredentialsSalesforce of data){

test(`Learn data retrival from data folder ${CredentialsSalesforce.tcid}`, async ({page})=>{

    await page.goto('https://login.salesforce.com/')

    await page.getByRole('textbox', {name:"Username"}).fill(CredentialsSalesforce.username)

    await page.getByRole ('button', {name:"Log In"} ).click()

    await page.getByRole('textbox', {name:"Password"}).fill(CredentialsSalesforce.password)

    await page.getByRole ('button', {name:"Log In"} ).click()

    await page.waitForTimeout(15000)


})}