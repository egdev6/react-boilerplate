import { test, expect } from '@playwright/test'

test('Homepage visual test', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page).toHaveScreenshot('homepage-fullpage.png', { fullPage: true })
})

test('HomePage component', async ({ page }) => {
  // Go to the page where the HomePage component is rendered
  await page.goto('http://localhost:5173')

  // Check if the h1 element with the text "React Boilerplate 1.0" is present
  const h1Element = await page.$('h1')
  const h1Text = await h1Element.innerText()
  expect(h1Text).toBe('React Boilerplate 1.0')
})
