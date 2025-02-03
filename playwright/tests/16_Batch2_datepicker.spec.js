const {test , expect} = require("@playwright/test")


// test("verify handling date example 1",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('#datepicker').fill('02/05/2025')

//     await page.waitForTimeout(10000)
// })


test("verify date handling in example 2 ",async({page})=>{
//05-05-2025
await page.goto("https://webdriveruniversity.com/Datepicker/index.html")


let date = "5"
let month = "May"
let year=2025

await page.locator('[id="datepicker"]').click()
console.log(`${month} ${year}`)


while(true){
    let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
    console.log(monthyear)
    if(monthyear ===`${month} ${year}`){
        break
    }
    await page.locator('[class="next"]').first().click()
}


let daycount = await page.locator('[class="day"]').count()
console.log(daycount)

for(let i =0;i<daycount;i++){
    let text = await page.locator('[class="day"]').nth(i).textContent()
    if(text ==date){
        await  page.locator('[class="day"]').nth(i).click()
        break
    }
}
await expect(page.locator('[class="form-control"]')).toHaveValue("05-05-2025")
await page.waitForTimeout(10000)

})

// assignment -- autoamateb  2 date on first link
// 2 autoamte selection of date which is 05/06/2027-- set date using date method in js --(webdriver )