

import {expect, test} from "@playwright/test"

test('playwright locators using testleaf', async({page}) =>{

    await page.goto('https://leaftaps.com/opentaps/control/main')

    //await expect( page.getByAltText('Leaftaps Login')).toBeVisible()

    await page.getByText('Leaftaps Login').click()

    await expect( page.getByRole('textbox', {name:'Username'})).toBeEditable()

    await page.getByRole('textbox', {name:'Username'}).fill('democsr2')

    await expect( page.getByRole('textbox', {name:'Password'})).toBeEditable()

    await expect( page.getByLabel('Password')).toBeVisible()

    await page.getByRole('textbox', {name:'Password'}).fill('crmsfa')

    await page.getByRole('button', {name:'Login'}).click()

    await page.getByRole('link', {name: 'CRM/SFA'}).click()

    await page.getByRole('link', {name: 'Leads'}).click()



})