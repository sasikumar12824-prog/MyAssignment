

//Data parametrizations 

/* 
data driven testing 

* no need to use hard coded data 
* test multiple scenrios 
* reduce duplicates

1.JSON : for dynamic datas (most common)
2.CSV .csv: bulk data driven - easy to read 
3.ENV .env: diff environment 

JSON: java script object notation

*/


import test from "@playwright/test";
import data from "../../../Data/loginLeadtabs.json"

console.log(data[0].tcid);
console.log(data[0].username);
console.log(data[0].password);

//for of loop is used to read the data in login json

for(let credentials of data){

test(`retrive data from json ${credentials.tcid}`, async ({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator('[id="username"]').fill(credentials.username)

        await page.locator('#password').fill(credentials.password)

            await page.locator('[type="submit"]').click()

})}