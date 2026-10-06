/*loadurl()
enter the username
enter the password
click on the login button
verify the login is successful 
 */

import {chromium, Page} from "playwright"

class loginPage{

    //global property
    page:Page

    constructor(temppage:Page){

        this.page = temppage
    }


    async loadurl(url:string){

        await this.page.goto(url)
    }

    async logincredentials(username:string,password:string){

        await this.page.locator("#username").fill(username);
        await this.page.locator("#password").fill(password);
    }

    async clickloginbutton(){
        await this.page.locator("input[type='submit']").click();
    }

    async closebrowser(){
        await this.page.close();
    }


}

async function dologin(){

let browser = await chromium.launch({headless:false})
let context = await browser.newContext()
let page = await context.newPage()

let lp = new loginPage(page)
await lp.loadurl("https://leaftaps.com/opentaps/control/main")
await lp.logincredentials("democsr","crmsfa")
await lp.clickloginbutton()
await lp.closebrowser()     
}

dologin()