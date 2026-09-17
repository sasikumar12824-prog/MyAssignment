import {expect, test} from "@playwright/test"

test ('playwright locator basics', async ({page}) => {

    await page.goto('https://login.salesforce.com/')
    await page.getByRole('textbox', { name: 'Username' }).click()

    await expect( page.getByAltText('Salesforce login')).toBeVisible()

    await page.getByRole('textbox', {name:"Username"}).fill('dilipkumar.rajendran@testleaf.com')
    await page.getByRole('textbox', { name: 'Username' }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill('dilipkumar.rajendran@testleaf.com');
    await expect(page.getByText('Username', { exact: true })).toBeVisible();
    await expect(page.locator('#usernamegroup')).toContainText('Username');
    await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('dilipkumar.rajendran@testleaf.com');
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('textbox', { name: 'Password' }).click()

    await page.getByRole ('button', {name:"Log In"} ).click()

    //await page.locator('//label[text()='Password']')

    await page.getByRole('textbox', {name:"Password"}).fill('TestLeaf@2025')
    await page.getByRole('textbox', { name: 'Password' }).click()
    await page.getByRole('textbox', { name: 'Password' }).fill('TestLeaf@2025');
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('TestLeaf@2025');
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.goto('https://testleaf.lightning.force.com/lightning/page/home');
    await expect(page.getByTitle('Sales')).toBeVisible();
    await page.getByTitle('Sales').click()

    await page.getByRole ('button', {name:"Log In"} ).click()

    //await page.getByTitle('')

    await page.getByRole ('button', {name:"App Launcher"} ).click()

    await page.getByPlaceholder('Search apps and items...').nth(0).fill('Service')

    await page.getByText('home').nth(0).click()

    await page.getByRole('link', {name:"Home"}).click()

    //await page.getByTestId('').click()


} )