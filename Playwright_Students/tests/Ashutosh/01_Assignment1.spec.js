const {test, expect} = require("@playwright/test")

test("validate the functionality od reset btn", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    // Visit URL
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    //Verifying the title
    await expect(page).toHaveTitle('WebDriver | Contact Us')
    //Filling the first name
    await page.locator('[name="first_name"]').fill("Ashutosh")
    //Verify the first name
    await expect(page.locator('[name="first_name"]')).toHaveValue("Ashutosh")
    //Filling the last name
    await page.locator('[name="last_name"]').fill("More")
    // Verifying lastname
    await expect(page.locator('[name="last_name"]')).toHaveValue("More")
    //filling email ID
    await page.locator('[name="email"]').fill("ashutoshmore@gmail.com")
    // Verifying email id
    await expect(page.locator('[name="email"]')).toHaveValue("ashutoshmore@gmail.com")
    // Filling the comment
    await page.locator('[name="message"]').fill("Please forgive me")
    // Verify the comment
    await expect(page.locator('[name="message"]')).toHaveValue("Please forgive me")
    // Click on the reset btn
    await page.locator('input[value="RESET"]').click()
    // Verify first name should be emplty
    await expect(page.locator('[name="first_name"]')).toHaveValue("")
    // Verify first last name should be emplty
    await expect(page.locator('[name="last_name"]')).toHaveValue("")
    // Verify first email should be emplty
    await expect(page.locator('[name="email"]')).toHaveValue("")
    // Verify first comment msg should be emplty
    await expect(page.locator('[name="message"]')).toHaveValue("")

})
// //1 automate and write mannual testcases for following sceriono

// https://webdriveruniversity.com/Contact-Us/contactus.html

// 1  validate the functionalty of reset btn 
// 2  vaild the mandatory feild 
// 3  valid the email feild 

// Validate the functanility of submit btn
test("Verify the functionality of submit btn", async({browser}) =>{
    const Context =await browser.newContext()
    const page = await Context.newPage()
    // Visit URL
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    //Verifying the title
    await expect(page).toHaveTitle('WebDriver | Contact Us')
    //Filling the first name
    await page.locator('[name="first_name"]').fill("Ashutosh")
    //Verify the first name
    await expect(page.locator('[name="first_name"]')).toHaveValue("Ashutosh")
    //Filling the last name
    await page.locator('[name="last_name"]').fill("More")
    // Verifying lastname
    await expect(page.locator('[name="last_name"]')).toHaveValue("More")
    //filling email ID
    await page.locator('[name="email"]').fill("ashutoshmore@gmail.com")
    // Verifying email id
    await expect(page.locator('[name="email"]')).toHaveValue("ashutoshmore@gmail.com")
    // Filling the comment
    await page.locator('[name="message"]').fill("Please forgive me")
    // Verify the comment
    await expect(page.locator('[name="message"]')).toHaveValue("Please forgive me")
    // Click on the submit btn
    await page.locator('input[type="submit"]').click()
    //  for verification of msg sfter clicking on subbmit button
    expect(await page.locator('div [id="contact_reply"] h1').textContent("Thank You for your Message!"))

})

test("Validate the mandatory field", async({browser}) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    // Visite the page
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    // Validate the mandatory first name
    // fill the last name
    await page.locator('[name="last_name"]').fill("More")
    // fill the email
    await page.locator('[name="email"]').fill("moreashutosh777@gmail.com")
    // fill comment
    await page.locator('[name="message"]').fill("Please forgive me")
    // clock on submit btn
    await page.locator('[value="SUBMIT"]').click()
    // Verify the error message
    expect(page.locator("body").textContent("Error: all fields are required"))

})
test("verify the email address", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    // fill the first name
    await page.locator('[name="first_name"]').fill("Ashutosh")    
    // fill the last name
    await page.locator('[name="last_name"]').fill("More")
    // fill the email
    await page.locator('[name="email"]').fill("moreashutosh")
    // fill comment
    await page.locator('[name="message"]').fill("Please forgive me")
    // clock on submit btn
    await page.locator('[value="SUBMIT"]').click()
    // Verify the error message
    expect(page.locator("body").textContent("Error: Invalid email address"))

})

// //2 automated the login flow 
// https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

// // create a positive login follow
// // create a negative login flow 
test("Positive login flow to orangehrm", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    // visit to page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // verify the title
    await page.locator('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').textContent("Login")
    // fill the correct userid and pass
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill("admin123")
    // click on login btn
    await page.locator('button[type="submit"]').click()
    // Verify the title
    expect(page).toHaveTitle("Dashboard")
})

test("Negative login flow to orangehrm", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    // visit to page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // verify the title
    await page.locator('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').textContent("Login")
    // fill the correct userid and  incorrect pass
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill("admin")
    // click on login btn
    await page.locator('button[type="submit"]').click()
    // Verify the title
    expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').textContent("Invalid credentials"))
})

