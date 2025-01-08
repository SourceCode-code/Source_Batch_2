const{test,expect}=require("@playwright/test") // this line is to import your commant and assertions

test("this is practice purpose for how to write test case",async(browser)=>{
const context = await browser.newContext()
const test = await browser.newPage()

})