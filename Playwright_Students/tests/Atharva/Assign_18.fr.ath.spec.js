const{test,expect} =require('@playwright/test')
const {homepage} = require('../../Fixture/Support/Homepage')
const data = require("../../Fixture/TestData/Testdata04.json")

test("Verify contact page", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()
    let homepagetitle = data.testdata[0].homepagetitle

    // visit the url 
    await page.goto("https://webdriveruniversity.com")

    // goto homepage 
    await homepage.verifyHomePagetitle(page,homepagetitle)




})