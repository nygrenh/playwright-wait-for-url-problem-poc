const { test, expect } = require('@playwright/test');

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click('text=Page 2');
  expect(page.url()).toBe('http://localhost:3000/page-2');
});
