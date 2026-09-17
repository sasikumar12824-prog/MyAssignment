import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
await page.goto('https://login.salesforce.com/');
await page.getByAltText('Salesforce login').click();
await expect(page.getByAltText('Salesforce login')).toBeVisible();
await expect(page.getByRole('heading')).toContainText('Salesforce login');
await expect(page.getByText('Username', { exact: true })).toBeVisible();
await page.getByText('Username', { exact: true }).click();
await expect(page.getByText('Username', { exact: true })).toBeVisible();
await expect(page.locator('#usernamegroup')).toContainText('Username');
await expect(page.locator('#Login')).toContainText('Log In');
await expect(page.locator('#login_form')).toContainText('Remember me');
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('sasikumar');
await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('sasikumar');
});