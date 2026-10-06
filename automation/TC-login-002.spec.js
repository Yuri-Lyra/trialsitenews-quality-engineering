import { test, expect } from '@playwright/test';

test('LOGIN - display email field', async ({ page }) => {
  await page.goto('https://www.trialsitenews.com/');

  await page.getByRole('button', { name: 'Get Started' }).click();

  await page.getByRole('button', { name: 'Continue with Email' }).click();

  await expect(
    page.getByLabel('E-mail')
  ).toBeVisible();
});