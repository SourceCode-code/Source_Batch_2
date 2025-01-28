const {test, expect} = require('@playwright/test')
const alldata = require("../../Fixture/TestData/TestData1.json")

test('Dynamic data test', async({page})=>{

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

    await page.locator('[name="first_name"]').fill(alldata.Mydata[0].first_name)
    await page.locator('[name="last_name"]').fill(alldata.Mydata[0].last_name)
    await page.locator('[name="email"]').fill(alldata.Mydata[0].email)
    await page.locator('[name="message"]').fill(alldata.Mydata[0].comment)
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[id="contact_reply"]')).toContainText("Thank You for your Message!")
})

test('Dynamic test1', async({page})=>{

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(alldata.Mydata[1].first_name)
    await page.locator('[name="last_name"]').fill(alldata.Mydata[1].last_name)
    await page.locator('[name="email"]').fill(alldata.Mydata[1].email)
    await page.locator('[name="message"]').fill(alldata.Mydata[1].comment)
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[id="contact_reply"]')).toContainText("Thank You for your Message!")
})

// ------------------RadioBtn and Checkboc-------------\\

