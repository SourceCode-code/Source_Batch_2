const {test, expect} = require('@playwright/test')
const data = require("../Fixture/TestData/")


test('Test the daynamic data', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1 :- visit the url
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')

    await page.locator('[name="first_name"]').fill("atharva")
    await expect(page.locator('[name="first_name"]')).toHaveValue("atharva")

})