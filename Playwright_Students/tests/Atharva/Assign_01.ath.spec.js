const {test,expect} = require('@playwright/test')

test("Contact Details Page",async({browser})=>{

    const Context  = await browser.newContext();
    const page  = await Context.newPage()


    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    //verify the heading text//
    await expect(page).toHaveTitle("WebDriver | Contact Us")

    //enter the first name//
    await page.locator('input[name="first_name"]').fill("Abel")
    //verify the first name
    await expect(page.locator('input[name="first_name"]')).toHaveValue("Abel")

    //enter the last name
    await page.locator('input[name="last_name"]').fill("Tesfaye")
    //verify the last name
    await expect(page.locator('input[name="last_name"]')).toHaveValue("Tesfaye")

    //enter the email
    await page.locator('input[name="email"]').fill("abeltes@gmail.com")
    //verify the email
    await expect(page.locator('input[name="email"]')).toHaveValue("abeltes@gmail.com")
    //enter the comment
    await page.locator('[name="message"]').fill("hola123")
    await expect(page.locator('[name="message"]')).toHaveValue("hola123")

    let submitbtn = await page.locator('[class="contact_button"][type="submit"]').textContent()
    console.log(submitbtn)
    await expect(submitbtn).toEqual("Thank You for your Message!")
})


