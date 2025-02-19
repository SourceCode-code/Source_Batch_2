const { test, expect } = require("@playwright/test")
const { homepage } = require("../Support/PageObjects/Homepage")
const data  = require("../Fixtures/testdata.json")


test("verify the contact us from", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    let Homepagetitle = data.testdata[0].Homepagetitle


    //visiting the baseurl
    await page.goto("/")
    //verify title 
    await homepage.verifyHomepageTitle(page, Homepagetitle)
    //click on the contact us page 


})
