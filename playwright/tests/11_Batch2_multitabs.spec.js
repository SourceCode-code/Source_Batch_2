const { test, expect } = require("@playwright/test")
const { CONNREFUSED } = require("dns")


test("validate the multitabs in playwright", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()



    await page.goto("https://webdriveruniversity.com/")
    // await expect(page.title()).toContain("WebDriverUniversity.com")

const [Contactuspage] = await Promise.all([
    Context.waitForEvent("page"),
    page.locator('[href="Contact-Us/contactus.html"] h1').click()
])
    // await page.locator('[href="Contact-Us/contactus.html"] h1').click()

    await Contactuspage.locator('[name="first_name"]').fill("el.first_name")
    await Contactuspage.locator('[name="last_name"]').fill("el.last_name")



    // select dropdown page 
await expect(page.locator('[href="Click-Buttons/index.html"] h1')).toContainText("BUTTON CLICKS")

const [ButtonPage]= await Promise.all([
    Context.waitForEvent("page"),
    page.locator('[href="Click-Buttons/index.html"] h1').click()
])

await expect(ButtonPage.locator('[id="button1"] p')).toContainText("CLICK ME!")
})



