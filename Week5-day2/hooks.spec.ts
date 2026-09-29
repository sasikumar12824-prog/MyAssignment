import {test} from "@playwright/test"

import {parse} from "csv-parse/sync"

import fs from 'fs'

let value:any[]



//data connections

test.beforeAll('data connectivity', async ()=>{

    console.log("runs before all the test");

    value = parse(fs.readFileSync('Data/loginLeaftabs.csv','utf-8'), {columns:true,skip_empty_lines:true })
    
})

//login functionality

test.beforeEach('login', async({page})=>{

    console.log("before all executed");
    
    await page.goto('https://leaftaps.com/opentaps/control/main')
    
    await page.locator('[id="username"]').fill(value[0].username)

    await page.locator('#password').fill(value[0].password)

    await page.locator('[type="submit"]').click()

    await page.locator('text=CRM/SFA').click()            

})

//create lead 

test('TS1: create Leads',async({page})=>{

    await page.locator('//a[text()="Leads"]').click()
})

test('TS2: create Accounts',async({page})=>{

    await page.locator('//a[text()="Accounts"]').click()
})

//test result 

test.afterEach('print the result', async({},testinfo)=>{

console.log('result ');
console.log(testinfo.status);
console.log(testinfo.title);
console.log(testinfo.duration);

})

//close the data connection

test.afterAll('close the connection', async({})=>{
    console.log('after all');
    
})