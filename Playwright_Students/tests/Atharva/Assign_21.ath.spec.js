const {test,expect} = require('@playwright/test')

test("Randomly acquiring Tests", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://www.amazon.in/")

    // await page.locator('[class="hm-icon nav-sprite"]').click()

    const [Mobiles] = await Promise.all([
        Context.waitForEvent("page"),
        page.locator('[href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]').click()
    ])

})

