const {test,expect} = require('@playwright/test')


test("test Multiple Tabs Handling", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/")

    const [ContactusPage] = await Promise.all([
        Context.waitForEvent("page"),
        page.locator('[href="Contact-Us/contactus.html"]').click()

    ])
    await ContactusPage.locator('[name="first_name"]').fill("Atharva")
    await ContactusPage.locator('[name="last_name"]').fill("Pandit")
    await ContactusPage.locator('[name="email"]').fill("atharva@gmail.com")

})