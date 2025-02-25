const {test,expect} = require("@playwright/test")
const {homepage} = require("../Support/PageObjects/Homepage")
const {toDopage} = require("../Support/PageObjects/Todo")
const data = require("../Fixtures/testdata.json")


test("Verify ToDo List", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()
    let todopgtitle = data.testdata[1].todopagetitle
    let Hometitle = data.testdata[1].HomeTitle
    let toheading = data.testdata[1].todoheading
    let textfield = data.testdata[1].textfield
    let textvalue = data.testdata[1].textvalue

    await page.goto("https://webdriveruniversity.com")

    await homepage.verifyHomepageTitle(page,Hometitle)

    const [TodoPage] = await Promise.all([

        Context.waitForEvent("page"), 
        await toDopage.ClickonTitle(page, todopgtitle)
    ])
    await page.waitForLoadState("networkidle")

    await toDopage.verifyToDopageTitle(TodoPage, toheading)

    await toDopage.entertaskinlist(TodoPage, textfield,textvalue)
})
