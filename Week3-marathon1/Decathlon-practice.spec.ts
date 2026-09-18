import {expect, test} from "@playwright/test"

test ('Decathlon page - product shoe search ', async({page}) =>{

    //1. launch the browser
    //2. Navigate to decathlog web page 
    await page.goto('https://www.decathlon.in/')

    //3. Verify the home page 
    console.log(await page.title())

    //4. Click the search in home page 
    let searchbox = page.locator('//input[@type="search"]')
    await expect( searchbox).toBeVisible()
    await searchbox.click()

    //5. Verify the search field is enabled
    await expect( searchbox).toBeEditable()

    //6. enter product name in shoes
    await searchbox.fill('shoes')

    //7. Press enter shoe
    await searchbox.press('Enter')

    //8. print page title 
    console.log(await page.title())

    //9. ensure the page name 
    expect( page.getByTitle('Search | shoes'))

    //ensure the result 
    let result = await page.locator('//div[text()="Showing 516 results for shoes"]')
    console.log(result);

    //Select the sorting
    await expect(page.locator('//span[text()="Most relevant"]')).toBeVisible()
    await page.locator('//span[text()="Most relevant"]').click()

    let sortingOption = await page.locator('//ul[@role="listbox"] //li[@role="presentation"]')
    console.log(sortingOption);
    let sortingCount = await sortingOption.count();
    console.log(sortingCount);
    sortingOption.nth(2).click()



    /* for (let i=0; i<=sortingCount; i++)
    {
        console.log(i);
        sortingOption.first().click()
        
    }   */  
        









})