const { test, expect } = require("@playwright/test");
const exp = require("constants");
const alldata = require("../../Fixture/TestData/Testdata01.json")

test("01_batch2_verify the successful sumbission of details", async ({ browser }) => {

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // visiting the given url
    await page.goto(alldata.Mydata[0].MainURL)
    //verify the heading text 
    await expect(page).toHaveTitle(alldata.Mydata[0].title)
    //enter firstname 
    await page.locator('input[name="first_name"]').fill(alldata.Mydata[0].first_name)
    //verify the value enetred in firstname 
    await expect(page.locator('input[name="first_name"]')).toHaveValue(alldata.Mydata[0].first_name)
    //enter lastname 
    await page.locator('input[name="last_name"]').fill(alldata.Mydata[0].last_name)
    //verify the value enetred in lastname 
    await expect(page.locator('input[name="last_name"]')).toHaveValue(alldata.Mydata[0].last_name)
    //enter emial 
    await page.locator('input[name="email"]').fill(alldata.Mydata[0].email)
    //verify the value enetred in emial 
    await expect(page.locator('input[name="email"]')).toHaveValue(alldata.Mydata[0].email)
    //enter firstname 
    await page.locator('[name="message"]').fill(alldata.Mydata[0].commnet)
    //verify the value enetred in commnet 
    await expect(page.locator('[name="message"]')).toHaveValue(alldata.Mydata[0].commnet)
    //  verify the submit button
    await page.locator('input[type="submit"]').click()
    //  for verification of msg sfter clicking on subbmit button
    let check = await page.locator('div [id="contact_reply"] h1').textContent()

    await expect(check).toEqual("Thank You for your Message!")

})

test("validate the functionalty of reset button", async ({ browser }) => {
    let Context = await browser.newContext()
    let page = await Context.newPage()

    // visiting the given url
    await page.goto(alldata.Mydata[0].MainURL)
    //verify the heading text
    await expect(page).toHaveTitle(alldata.Mydata[0].title)
    //enter firstname 
    await page.locator('input[name="first_name"]').fill(alldata.Mydata[0].first_name)
    //verify the value enetred in firstname 
    await expect(page.locator('input[name="first_name"]')).toHaveValue(alldata.Mydata[0].first_name)
    //enter lastname 
    await page.locator('input[name="last_name"]').fill(alldata.Mydata[0].last_name)
    //verify the value enetred in lastname 
    await expect(page.locator('input[name="last_name"]')).toHaveValue(alldata.Mydata[0].last_name)
    //enter emial 
    await page.locator('input[name="email"]').fill(alldata.Mydata[0].email)
    //verify the value enetred in emial 
    await expect(page.locator('input[name="email"]')).toHaveValue(alldata.Mydata[0].email)
    //enter mmessage
    await page.locator('[name="message"]').fill(alldata.Mydata[0].commnet)
    //verify the value enetred in commnet 
    await expect(page.locator('textarea[name="message"]')).toHaveValue(alldata.Mydata[0].commnet)

    //  verify the submit button
    await page.locator('input[type="reset"]').click()

    //  verify the input feild of firstname  
    await expect(page.locator('input[name="first_name"]')).toHaveValue('')

    //  verify the input feild of lastname
    await expect(page.locator('input[name="last_name"]')).toHaveValue('')

    //  verify the input feild of emails
    await expect(page.locator('input[name="email"]')).toHaveValue('')

    //  verify the input feild of message
    await expect(page.locator('textarea[name="message"]')).toHaveValue('')
})

test("vaild the mandatory feild of webdriver university", async ({ browser }) => {
    let Context = await browser.newContext()
    let page = await browser.newPage()
    // visiting the given url
    await page.goto(alldata.Mydata[0].MainURL)
    //verify the heading text 
    await expect(page).toHaveTitle(alldata.Mydata[0].title)
    //enter firstname 
    await page.locator('input[name="first_name"]').fill(alldata.Mydata[0].first_name)
    await page.locator('input[name="last_name"]').fill(alldata.Mydata[0].last_name)
    await page.locator('input[name="email"]').fill("")
    await page.locator('[name="message"]').fill(alldata.Mydata[0].commnet)
    await page.locator('input[type="submit"]').click()
    let msgverify = await page.locator("body").textContent()
    await expect(msgverify).toContain(alldata.Mydata[0].ManditoryErrorfiled)
    let msgverify1 = await page.locator("body").textContent()
    await expect(msgverify1).toContain(alldata.Mydata[0].ManditoryErrorfiled)
})

test("webdriveruniversity valid the email feild ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto(alldata.Mydata[0].MainURL)
    await page.locator('input[name="first_name"]').fill(alldata.Mydata[0].first_name)
    await page.locator('input[name="last_name"]').fill(alldata.Mydata[0].last_name)
    await page.locator('input[name="email"]').fill(alldata.Mydata[0].email)
    await page.locator('[name="message"]').fill(alldata.Mydata[0].commnet)
    await page.locator('input[type="submit"]').click()
    // in check 2 we find the exact locator for the find the locators
    //let check2 = await page.locator("body").locator('text="Error: Invalid email address"').textContent()
    // in check 3 from the above locators it should be visible
    // let check3 = await expect(check2).toBeVisible()
    //in check 4 it should be have text wich we have to 
    //let check4 = await check2.textContent()
    // on check 4 we verify that related to text which we are contains
    //await expect(check2).toContain("Error: Invalid email address")
})

test("Check th login functionality for ORange HRM", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    // visiting the URL for Orange HRM
    await page.goto(alldata.Mydata[1].OrangeHRMurl)
    // verify the heading 
    await expect(page).toHaveTitle(alldata.Mydata[1].title)
    await expect(page).toHaveURL(alldata.Mydata[1].OrangeHRMurl)

    // enter username
    await page.locator('input[name="username"]').fill(alldata.Mydata[1].username)
    // verify the entered number is right or not
    await expect(page.locator('input[name="username"]')).toHaveValue(alldata.Mydata[1].username)

    // check and enter for Password
    await page.locator('input[name="password"]').fill(alldata.Mydata[1].password)
    //  verifry it is ok or not
    await expect(page.locator('input[name="password"]')).toHaveValue(alldata.Mydata[1].password)

    //  check for login click action 
    await page.locator("button[type='submit']").click()

    let check = await page.locator('[class="oxd-topbar-header-breadcrumb"]').textContent()
    await expect(check).toContain("Dashboard")

})