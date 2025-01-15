const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("01_batch2_verify the successful sumbission of details", async ({ browser }) => {

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // visiting the given url
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    //verify the heading text 
    await expect(page).toHaveTitle("WebDriver | Contact Us")
    //enter firstname 
    await page.locator('input[name="first_name"]').fill("Amol")
    //verify the value enetred in firstname 
    await expect(page.locator('input[name="first_name"]')).toHaveValue("Amol")
    //enter lastname 
    await page.locator('input[name="last_name"]').fill("Jadhav")
    //verify the value enetred in lastname 
    await expect(page.locator('input[name="last_name"]')).toHaveValue("Jadhav")
    //enter emial 
    await page.locator('input[name="email"]').fill("amoljadhav@gmail.com")
    //verify the value enetred in emial 
    await expect(page.locator('input[name="email"]')).toHaveValue("amoljadhav@gmail.com")
    //enter firstname 
    await page.locator('[name="message"]').fill("this is my first test")
    //verify the value enetred in commnet 
    await expect(page.locator('[name="message"]')).toHaveValue("this is my first test")
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
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    //verify the heading text
    await expect(page).toHaveTitle("WebDriver | Contact Us")
    //enter firstname 
    await page.locator('input[name="first_name"]').fill("Amol")
    //verify the value enetred in firstname 
    await expect(page.locator('input[name="first_name"]')).toHaveValue("Amol")
    //enter lastname 
    await page.locator('input[name="last_name"]').fill("Jadhav")
    //verify the value enetred in lastname 
    await expect(page.locator('input[name="last_name"]')).toHaveValue("Jadhav")
    //enter emial 
    await page.locator('input[name="email"]').fill("amoljadhav@gmail.com")
    //verify the value enetred in emial 
    await expect(page.locator('input[name="email"]')).toHaveValue("amoljadhav@gmail.com")
    //enter mmessage
    await page.locator('[name="message"]').fill("this is my first test")
    //verify the value enetred in commnet 
    await expect(page.locator('textarea[name="message"]')).toHaveValue("this is my first test")

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
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    //verify the heading text 
    await expect(page).toHaveTitle("WebDriver | Contact Us")
    //enter firstname 
    await page.locator('input[name="first_name"]').fill("Amol")
    await page.locator('input[name="last_name"]').fill("Jadhav")
    await page.locator('input[name="email"]').fill("")
    await page.locator('[name="message"]').fill("this is my first test")
    await page.locator('input[type="submit"]').click()
    let msgverify = await page.locator("body").textContent()
    await expect(msgverify).toContain("Error: all fields are required")
    let msgverify1 = await page.locator("body").textContent()
    await expect(msgverify1).toContain("Error: all fields are required")
})

test("webdriveruniversity valid the email feild ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    await page.locator('input[name="first_name"]').fill("Amol")
    await page.locator('input[name="last_name"]').fill("Jadhav")
    await page.locator('input[name="email"]').fill("Amoljadhav")
    await page.locator('[name="message"]').fill("this is my first test")
    await page.locator('input[type="submit"]').click()
    // in check 2 we find the exact locator for the find the locators
    let check2 = await page.locator("body").locator('text="Error: Invalid email address"').textContent()
    // in check 3 from the above locators it should be visible
    // let check3 = await expect(check2).toBeVisible()
    //in check 4 it should be have text wich we have to 
    //let check4 = await check2.textContent()
    // on check 4 we verify that related to text which we are contains
    await expect(check2).toContain("Error: Invalid email address")
})

test("Check th login functionality for ORange HRM", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    // visiting the URL for Orange HRM
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // verify the heading 
    await expect(page).toHaveTitle("OrangeHRM")
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // enter username
    await page.locator('input[name="username"]').fill("Admin")
    // verify the entered number is right or not
    await expect(page.locator('input[name="username"]')).toHaveValue("Admin")

    // check and enter for Password
    await page.locator('input[name="password"]').fill("admin123")
    //  verifry it is ok or not
    await expect(page.locator('input[name="password"]')).toHaveValue("admin123")

    //  check for login click action 
    await page.locator("button[type='submit']").click()

    let check = await page.locator('[class="oxd-topbar-header-breadcrumb"]').textContent()
    await expect(check).toContain("Dashboard")

})