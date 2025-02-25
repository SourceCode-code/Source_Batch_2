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
    let LastnameFeild = data.testdata[0].LastnameFeild
    let Lastnamevalue = data.testdata[0].Lastnamevalue
    let emailFeild = data.testdata[0].emailFeild
    let emailvalue = data.testdata[0].emailvalue
    let commentFeild = data.testdata[0].commentFeild
    let commnetvalue = data.testdata[0].commnetvalue

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
    // fill last 
    await contactusPage.enterTextinInputFeild(contactuspage, LastnameFeild, Lastnamevalue)
    //fill email
    await contactusPage.enterTextinInputFeild(contactuspage, emailFeild, emailvalue)
    //fill comment
    await contactusPage.enterTextinInputFeild(contactuspage, commentFeild, commnetvalue)
    //verify input value in inputboxes
    await contactusPage.verifyInputvalueinTextbox(contactuspage, FirstnameFeild, fristnamevalue)
    await contactusPage.verifyInputvalueinTextbox(contactuspage, LastnameFeild, Lastnamevalue)
    await contactusPage.verifyInputvalueinTextbox(contactuspage, emailFeild, emailvalue)
    await contactusPage.verifyInputvalueinTextbox(contactuspage, commentFeild, commnetvalue)
    //click on sumbit btn
    await contactusPage.verifySumbitbtn(contactuspage)
    //verify success message 
    await contactusPage.verifySuccessmessage(contactuspage, "Thank You for your Message!")
})
