// const {test,expect} =require("@plawright/test");
const {test,expect} = require("@playwright/test") // line used to import assertions and commands

test("Verify the basic testcase structure of Playwrigt ",async({browser})=>{
    const Context  = await browser.newContext(); //opens a new context in the browser
    const page = await browser.newPage(); // opens a new page in the browser


    //visiting a page :-//
    await page.goto("https://aws.amazon.com/what-is/restful-api/")
})