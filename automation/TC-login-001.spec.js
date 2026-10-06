import { test, expect } from '@playwright/test';

test('LOGIN - open login modal', async ({ page }) => {
  await page.goto('https://www.trialsitenews.com/');

  await page.getByRole('button', { name: 'Get Started' }).click();

  await expect(
    page.getByText('Continue with Email')
  ).toBeVisible();
});