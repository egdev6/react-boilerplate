import { test, expect } from '@playwright/test'

test('Homepage visual test', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page).toHaveScreenshot('homepage-fullpage.png', { fullPage: true })
})
