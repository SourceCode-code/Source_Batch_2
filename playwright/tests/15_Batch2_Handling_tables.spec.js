const { test, expect } = require("@playwright/test")


test("verify table in playwright", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
let names = await page.locator('[id="t01"] tbody tr td:nth-child(1)').count()

let text =await page.locator('[id="t01"] tbody tr td:nth-child(1)')
let lastname = await page.locator('[id="t01"] tbody tr td:nth-child(2)')
let age =  await page.locator('[id="t01"] tbody tr td:nth-child(3)')

for(let i=0;i<names;i++){
    let nametext = await text.nth(i).textContent()
    let lasttext = await lastname.nth(i).textContent()
    let agenumber= await age.nth(i).textContent()
    console.log(`my name is ${nametext} ${lasttext} and my age is ${agenumber}`)
}


// let www =await names.textContent()
// console.log(www)

//jhon micheal

// my name is jhon smith my age is 45 



})

