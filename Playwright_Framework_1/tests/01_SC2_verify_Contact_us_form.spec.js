const { test, expect } = require("@playwright/test")
const { homepage } = require("../Support/PageObjects/Homepage")
const { contactusPage } = require("../Support/PageObjects/ContactusPage")
const data = require("../Fixtures/testdata.json")


test("verify the contact us from", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    let Homepagetitle = data.testdata[0].Homepagetitle
    let ContactusTitle = data.testdata[0].ContactusTitle
    let ContactusHeading = data.testdata[0].ContactusHeading
    let FirstnameFeild = data.testdata[0].FirstnameFeild
    let fristnamevalue = data.testdata[0].fristnamevalue
    //visiting the baseurl
    await page.goto("/")
    //verify title 
    await homepage.verifyHomepageTitle(page, Homepagetitle)

    const [contactuspage] = await Promise.all([
        Context.waitForEvent("page"),
        //click on the contact us page 
        await homepage.clickontitle(page, ContactusTitle)
    ])
    await page.waitForLoadState("networkidle")
    //verify the page title 
    await homepage.verifyHomepageTitle(contactuspage, ContactusHeading)
    // enter first name in the feild
    await contactusPage.enterTextinInputFeild(contactuspage, FirstnameFeild, fristnamevalue)
})
