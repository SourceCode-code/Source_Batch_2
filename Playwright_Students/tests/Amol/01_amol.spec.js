const { test, expect } = require ("@playwright/test");
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
    //click on the btn submit
    await page.locator('input[type="submit"]').click()
    //verify the sumbit message 
   let sumbittext= await page.locator('[id="contact_reply"] h1').textContent()
   console.log(sumbittext)
    await expect(sumbittext).toEqual("Thank You for your Message!")
})