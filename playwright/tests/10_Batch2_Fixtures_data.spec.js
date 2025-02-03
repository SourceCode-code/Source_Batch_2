const { test, expect } = require("@playwright/test")
const data = require("../Fixture/TestData/testdata_10_.json")


test("verify fill form in static data ", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    await page.locator('[name="first_name"]').fill("siddhant")
    await page.locator('[name="last_name"]').fill("gadakh")
    await page.locator('[name="email"]').fill("datasample1@gamil.com")
    await page.locator('[name="message"]').fill("fill with  static data ")

})




test("verify fill form in dyanimc data ", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    await page.locator('[name="first_name"]').fill(data.first_name)
    await page.locator('[name="last_name"]').fill(data.last_name)
    await page.locator('[name="email"]').fill(data.email)
    await page.locator('[name="message"]').fill(data.commnet)

})

test("verify fill form in dyanimc data2 ", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    await page.locator('[name="first_name"]').fill(data.testdata[1].first_name)
    await page.locator('[name="last_name"]').fill(data.testdata[1].last_name)
    await page.locator('[name="email"]').fill(data.testdata[1].last_name)
    await page.locator('[name="message"]').fill(data.testdata[1].commnet)

})


data.testdata.forEach((el)=>{
test(`verify fill form in with all dyanimc data with ${el.first_name} `, async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    await page.locator('[name="first_name"]').fill(el.first_name)
    await page.locator('[name="last_name"]').fill(el.last_name)
    await page.locator('[name="email"]').fill(el.last_name)
    await page.locator('[name="message"]').fill(el.commnet)
})
})


