const { test, expect } = require("@playwright/test")
const exp = require("constants")


test("verify iframe in playwright", async ({ page }) => {

    await page.goto("https://letcode.in/frame")

    //     await page.locator('[name="fname"]').fill("siddhant")

    //    await expect(page.locator('[name="fname"]')).toHaveValue("siddhant")

    await page.frameLocator('[id="firstFr"]').locator('[name="fname"]').fill("siddhant")
    await expect(page.frameLocator('[id="firstFr"]').locator('[name="fname"]')).toHaveValue("siddhant")


    await page.frameLocator('[id="firstFr"]').frameLocator('[src="innerFrame"]').locator('[name="email"]').fill("hhhhhhh")
})