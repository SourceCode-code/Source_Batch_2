// 



import {test,expect} from '@playwright/test'

test("Veriy the home page of the given website", async({browser})=>{
    const Context = await browser.newContext()
    const page = await browser.newPage()

    await page.goto("https://demoblaze.com/")
    await page.click("text=Cart")
    // await page.click("text=Laptop")
    // await page.click("text=Monitors")
})