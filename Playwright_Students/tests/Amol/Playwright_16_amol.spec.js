const { test, expect } = require("@playwright/test")
test("Handling date table", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('[id="datepicker"]').fill("26-02-1999")
    await page.waitForTimeout(2000)
})

test("Webdriver university :- verify date handling in example 2", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Datepicker/index.html")
    let date = "1"
    let month = "April"
    let year = 2025
    await page.locator('[id="datepicker"]').click()
    console.log(`${month} ${year}`)

    while (true) {
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
        if (monthyear == `${month} ${year}`) {
            break
        }
        await page.locator('[class="next"]').first().click()
    }

    let daycount = await page.locator('[class="day"]').count()
    console.log(daycount)

    for (let i = 0; i <= daycount; i++) {
        let days = await page.locator('[class="day"]').nth(i).textContent()
        if (date == days) {

            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await expect(page.locator('[class="form-control"]')).toHaveValue("04-01-2025")
    await page.waitForTimeout(2000)


})




test("assignment NO.16 first on webdriver website", async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')

    let day = "6"
    let month = "May"
    let date = new Date();
    let curyear = date.getFullYear()
    date.setFullYear(curyear + 2)
    let year = date.getFullYear()

    //     let year2 = manipulatedDate.getFullYear();
    // manipulatedDate.setFullYear(year2 - 2); // Subtracts 2 years
    // console.log(manipulatedDate.getFullYear())

    await page.locator('[id="datepicker"]').click()
    console.log(`${month} ${year}`)
    await page.waitForTimeout(2000)

    while (true) {
        let years = await page.locator('[class="datepicker-switch"]').nth(0).textContent()
        if (years == `${month} ${year}`) {
            break
        }
        await page.locator('th[class="next"]').nth(0).click()
    }

    let days = await page.locator('[class="day"]').count()
    console.log(days)
    for (let i = 0; i <= days; i++) {
        let day1 = await page.locator('[class="day"]').nth(i).textContent()
        if (day1 === day) {

            await page.locator('[class="day"]').nth(i).click()
            break

        }
    }
    await expect(page.locator('[class="form-control"]')).toHaveValue("05-06-2027")
    await page.waitForTimeout(2000)

})



test("Automation website Handling date table -1 ", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('[id="datepicker"]').click()
    let day = "4"
    let month = "March"
    let year = 2025
    console.log(`${month} ${year}`)

    // whenver u go for date picker always use while loop coz u have to verify the number which is infinite
    while (true) {
        let curyear = await page.locator('[class="ui-datepicker-year"]').textContent()
        console.log(curyear) // find teh curent number
        let curmonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        console.log(curmonth) // verify the curent month
        // veryfy that u mention date and year using a if conditions 
        if (month == curmonth && year == curyear) {
            break
        }
        //  if condition satisfy then click the event 
        await page.locator('[class="ui-icon ui-icon-circle-triangle-e"]').click()
    }

    // so the next step is verify the date which we have to verify 

    // fine the total number of days in month
    let curday = await page.locator('[class="ui-state-default"]').count()
    console.log(curday)
    //  using of total numbers of days just apply loop in which we can match the exact number 
    for (let i = 0; i <= curday; i++) {
        //  verrify the all says passu=ing through the perticular loops
        let checkday = await page.locator('[class="ui-state-default"]').nth(i).textContent()
        console.log(checkday)
        if (checkday === day) { // apply the if condition to veryfy the exact match of the day 
            await page.locator('[class="ui-state-default"]').nth(i).click()
            break // u just forgot to  break that why u stuck for 1.30 hr 
        }
    }
    // just verfy the final output with the input field
    await expect(page.locator('[id="datepicker"]')).toHaveValue("03/04/2025")
    await page.waitForTimeout(2000)

})

test('Automation website Handling date table -2 ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    let day = 10
    let month = "Mar"
    let year = "2023"

    console.log(`${month} ${year}`)

    await page.locator('[id="txtDate"]').click()

    await page.locator('[data-event="change"]').first().click()

    await page.locator('[data-event="change"]').first().selectOption(month)

    await page.locator('[id="txtDate"]').click()

    await page.locator('[data-event="change"]').last().click()

    await page.locator('[data-event="change"]').last().selectOption(year)

    let daycount = await page.locator('[class="ui-state-default"]').count()
    console.log(daycount)
    for (let i = 0; i < daycount; i++) {
        let checkday = await page.locator('[class="ui-state-default"]').nth(i).textContent()
        if (checkday == day) {
            await page.locator('[class="ui-state-default"]').nth(i).click()
        }

    }
 await expect(page.locator('[id="txtDate"]')).toHaveValue("10/03/2023")
await page.waitForTimeout(2000)




    // let month1 = await page.locator('[class="ui-datepicker-month"] option ').count()
    // console.log(month1)
    // let checkMonth = await page.locator('[class="ui-datepicker-month"] option ').nth(i).textContent()
    // for(let i=0;i<month1;i++){
    //     let checkMonth = await page.locator('[class="ui-datepicker-month"] option ').nth(i).textContent()
    //         console.log(checkMonth)
    //      if(checkMonth=== month){
    //         await page.locator('[class="ui-datepicker-month"] option ').nth(i).click()
    //     }
    // }


})
