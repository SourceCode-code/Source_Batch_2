const {test,expect} = require('@playwright/test')

// test("Test the Datepicker method 1", async({browser})=>{

//     const Context = await browser.newContext()
//     const page = await Context.newPage()

//     await page.goto("https://demo.automationtesting.in/Datepicker.html")

//     await page.locator('#datepicker2').fill('02/03/2025')

//     await page.waitForTimeout(2000)
// })

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

    // getting DATE of the future
    let manipulateddate = new Date()
    let futuredate = manipulateddate.getDate()
    manipulateddate.setDate(futuredate +2)
    console.log(manipulateddate.getDate()) //outputs : 5 , the required future date

    // getting MONTH of the future
    let futuremonth = manipulateddate.getMonth()
    manipulateddate.setMonth(futuremonth + 4)
    console.log(manipulateddate.getMonth() + 1)//outputs : 6 , june month which is required month

    // getting future year
    let futureyear = manipulateddate.getFullYear()
    manipulateddate.setFullYear(futureyear + 2)
    console.log(manipulateddate.getFullYear())//2027

    await page.locator('[id="datepicker"]').click()
    console.log(`${futuremonth} ${futureyear}`)

    while(true){
        await page.locator('[class="datepicker-switch"]').first().click() //here we are clicking on the month, doing so because on the UI , we need to change the year by clicking the button :">>" 
        await page.locator('[class="next"]').first().click()//clickin on ">>", but not working ,test getting failed
        // console.log()
        if(Monthyr == `${futuremonth} ${futureyear}`){
            await page.locator('[class="next"]').first().click()
            break
        }
        //since the ">>" next button is not getting clicked, the future month&year are not getting selected, 
        // need help for this //
    }




})



































































































// test("Test Table Handling", async({page})=>{

//     await page.goto("https://webdriveruniversity.com/Data-Table/index.html")

//     let fnames = await page.locator('[id="t01"] tbody tr td:nth-child(1)').count()
    
//     let text = await page.locator('[id="t01"] tbody tr td:nth-child(1)')
//     let lnames = await page.locator('[id="t01"] tbody tr td:nth-child(2)')

//     for (let i=0; i<fnames; i++){
//         let nms = await text.nth(i).textContent()
//         console.log(nms)
//         let ln = await lnames.nth(i).textContent()
//         console.log(ln)
//     }


// })