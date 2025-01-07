// const {test,expect} =require("@plawright/test");
const {test,expect} = require("@playwright/test")

test("Verify the basic testcase structure of Playwrigt ",async({browser})=>{
    const Context  = await browser.newContext();
    const page = await browser.newPage();

    await page.goto("https://aws.amazon.com/what-is/restful-api/")
})