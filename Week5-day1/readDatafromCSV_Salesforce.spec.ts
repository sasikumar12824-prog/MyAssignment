
import {test} from "@playwright/test"
/* import data from "../../../Data/loginSalesforce.json" 

above line for JSON data
*/

import {parse} from "csv-parse/sync"

import fs from 'fs'

import path from 'path'


/* 
for(let CredentialsSalesforce of data){

test(`Learn data retrival from data folder ${CredentialsSalesforce.tcid}`, async ({page})=>{

    await page.goto('https://login.salesforce.com/')

    await page.getByRole('textbox', {name:"Username"}).fill(CredentialsSalesforce.username)

    await page.getByRole ('button', {name:"Log In"} ).click()

    await page.getByRole('textbox', {name:"Password"}).fill(CredentialsSalesforce.password)

    await page.getByRole ('button', {name:"Log In"} ).click()

    await page.waitForTimeout(15000)


})} */