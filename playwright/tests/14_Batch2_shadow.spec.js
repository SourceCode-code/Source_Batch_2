const { test, expect } = require("@playwright/test")


test("verify shadow in playwright", async ({ page }) => {

    await page.goto("https://letcode.in/shadow")
await page.locator('[id="fname"]').fill("hello")

await page.keyboard.press('Tab')
await page.keyboard.type("heyyy!!!")
})


