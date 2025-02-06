const {test,expect} = require('@playwright/test')


// method 1 : fill the date //


// test("Test the Datepicker method 1", async({browser})=>{

//     const Context = await browser.newContext()
//     const page = await Context.newPage()

//     await page.goto("https://demo.automationtesting.in/Datepicker.html")

//     await page.locator('#datepicker2').fill('02/03/2025')

//     await page.waitForTimeout(2000)
// })


// method 2: picking from calendar//

test("Method 2 for Date Picker", async({page})=>{

    // step 1 :- visit the url 
    await page.goto("https://webdriveruniversity.com/Datepicker/index.html")

    let date = "8"
    let month = "September"
    let year = 2025

    await page.locator('[id="datepicker"]').click()
    console.log(`${month} ${year}`)

    
    while(true){
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthyear)
        if(monthyear == `${month} ${year}`){
            break
        }
        await page.locator('[class="next"]').first().click()
    }

    let daycount = await page.locator('[class="day"]').count()
    console.log(daycount)

    for(let i=0; i<daycount; i++){
        let text = await page.locator('[class="day"]').nth(i).textContent()
        // console.log(text)
        if(text == date){
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    
    
})


// 2 autoamte selection of date which is 05/06/2027-- set date using date method in js --(webdriver )
test("DatePicker using Date method", async({page})=>{

    await page.goto("https://webdriveruniversity.com/Datepicker/index.html")

    let day = "7"
    let month ="June"
    let date = new Date()
    let curYear = date.getFullYear()
    date.setFullYear(curYear+2)
    let year = date.getFullYear()

    await page.locator('[id="datepicker"]').click()
    console.log(`${month} ${year}`)
    await page.waitForTimeout(3000)

    while(true){
        let years = await page.locator('[class="datepicker-switch"]').nth(0).textContent()
        console.log(years)
        if(years === `${month} ${year}`){
            break
        }
        await page.locator('th[class="next"]').nth(0).click()
    }
    let days = await page.locator('[class="day"]').count()
    console.log(days)
    for(let i=0; i<=days; i++){
        let DAY = await page.locator('[class="day"]').nth(i).textContent()
        if(DAY === day){
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await expect(page.locator('[class="form-control"]')).toHaveValue("06-07-2027")
    await page.waitForTimeout(2000)

})



































































































