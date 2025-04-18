const {test,expect} = require("@playwright/test")

test("Test Multi-Tab handling", async ({ browser })=>{


    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/")

    // const [loginPage] = await Promise.all([
    //     Context.waitForEvent("page"),
    //     page.locator('[href="Login-Portal/index.html"] h1').click()
    // ])
    // await loginPage.locator('[id="login-button"]').click()

    const[dropDownpg] = await Promise.all([
        Context.waitForEvent("page"),
       page.locator('[href="Dropdown-Checkboxes-RadioButtons/index.html"]').click()
    ])
    await dropDownpg.locator('[value="green"]').check()
    await dropDownpg.locator('[value="blue"]').uncheck()
})