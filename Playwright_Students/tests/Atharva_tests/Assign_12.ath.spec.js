const {test,expect, chromium} = require('@playwright/test')
const { checkPrimeSync } = require('crypto')
const { copyFileSync } = require('fs')

// test("Test the tables", async({browser})=>{

//     const Context = await browser.newContext()
//     const page = await Context.newPage()

//     // step 1 :- visit the url 
//     await page.goto("https://webdriveruniversity.com/Data-Table/index.html")

//     // step 2 :- get the rows and columns of the table 
//     let Names = await page.locator('[id="t01"] tbody tr td:nth-child(1)').count()
//     let text = await page.locator('[id="t01"] tbody tr td:nth-child(1)')
//     let lastTxt = await page.locator('[id="t01"] tbody tr td:nth-child(2)')
//     let age = await page.locator('[id="t01"] tbody tr td:nth-child(3)')
//     for(let i=0; i<Names; i++){
//         let nametext = await text.nth(i).textContent()
//         // console.log(text1)
//         let snames = await lastTxt.nth(i).textContent()
//         // console.log(snames)
//         let agtext = await age.nth(i).textContent()
//         // console.log(agtext)
//         console.log(`My name is ${nametext} & my lastname is ${snames} and I'm ${agtext} years old`)
//     }
// })


test("Test the BookName Table", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1 :- visit the URL 
    await page.goto("https://testautomationpractice.blogspot.com/")

    // step 2 :- get the rows and columsn from the table
    let Bookname = await page.locator('[name="BookTable"] tbody  tr td:nth-child(1)').count()

    // step 3 :- getting the BookName of the table 
    let Bktext = await page.locator('[name="BookTable"] tbody  tr td:nth-child(1)')

    // step 4 :- getting the name of the author from the table
    let author = await page.locator('[name="BookTable"] tbody  tr td:nth-child(2)')

    // step 5 :- getting the subject of the book from the table
    let subject = await page.locator('[name="BookTable"] tbody  tr td:nth-child(3)')

    // step 6 :- getting the BookPrice from the table
    let price = await page.locator('[name="BookTable"] tbody  tr td:nth-child(4)')


    for(let i=0; i<Bookname; i++){
        //1 : printing the names of the book  
        let bkname = await Bktext.nth(i).textContent()
        // console.log(bkname) //prints all the booknames in the table

        // 2 : printing the name of the author 
        let auth = await author.nth(i).textContent()
        // console.log(auth)

        // 3: printing the name of the subject 
        let subnm = await subject.nth(i).textContent()
        // console.log(subnm)

        // 4: printing the price of the book 
        let bprice = await price.nth(i).textContent()
        // console.log(bprice)

        console.log(`These are the  names of the Books :${bkname}, these are the authors of the books :${auth} , these are the Subject Names of the books :${subnm} and following are their respective prices : ${bprice}`)


    }
})

test("Test the BrowserNames table", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1 :- visit the URL 
    await page.goto('https://testautomationpractice.blogspot.com/')

    // step 2 :- get the name of the browser from the tables 
    let brownames = await page.locator('[id="taskTable"] tbody tr td:nth-child(1)').count()
    let Txt = await page.locator('[id="taskTable"] tbody tr td:nth-child(1)')
    // step 3 :- getting the Network speed of the browser 
    let NtSpeed = await page.locator('[id="taskTable"] tbody tr td:nth-child(2)')

    // step 4 :- getting the memory of the browser
    let membr = await page.locator('[id="taskTable"] tbody tr td:nth-child(3)')

    // step 5 :- getting the DiskSize of the browser
    let dsksz = await page.locator('[id="taskTable"] tbody tr td:nth-child(4)')

    // step 6 :- getting the CPU usage of the browser
    let cpuus = await page.locator('[id="taskTable"] tbody tr td:nth-child(5)')

    for(let i=0; i<brownames; i++){
        // 1 :- printing the name of the browsers
        let brnm = await Txt.nth(i).textContent()
        // console.log(brnm)

        // 2 :- printing the speed of the browser
        let speed = await NtSpeed.nth(i).textContent()
        // console.log(speed)

        // 3 :- printing the memory of the browser
        let mem = await membr.nth(i).textContent()
        // console.log(mem)

        // 4 :- printing the DiskSize of the browser
        let disk = await dsksz.nth(i).textContent()
        console.log(disk)

        // 5 :- printing the CPU usage of the browser
        let cp = await cpuus.nth(i).textContent()
        console.log(cp)
        


    }

})
// [id="taskTable"] tbody tr td:nth-child(1)


// create a function , that checks the checkbox based on the name//

// function checkBrowser(browserName) {
//     return page.locator('[id="taskTable"] tbody tr td:nth-child(1)').filter
//     (el => el.textContent() === browserName)
// }
// checkBrowser(chromium)

test("Test the Pagination Checkbox", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1 :- visit the URL of the WebPage
    await page.goto('https://testautomationpractice.blogspot.com/')

    let names = await page.locator('[id="productTable"] tbody tr td:nth-child(1)').count()
    
    let gadgetName1 = "Smartphone"
    let Name = await page.locator('[id="productTable"] tbody tr td:nth-child(2)')
    const chekbox = await page.locator('[id="productTable"] tbody tr td:nth-child(4) [type="checkbox"]')
    for(let i=0; i<names; i++){
        let gadName = await Name.nth(i).textContent()
        if(gadName === gadgetName1){
            await chekbox.nth(i).check()
        }
    }

})

test("Test Table handling Again", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")

    let NameS = await page.locator('[id="t01"] tbody tr td:nth-child(1)').count()

    let txtt = await page.locator('[id="t01"] tbody tr td:nth-child(1)')
    let lstNm = await page.locator('[id="t01"] tbody tr td:nth-child(2)')
    let lstxt = await page.locator('[id="t01"] tbody tr td:nth-child(2)')

    for(let i=0; i<NameS; i++){

        // 1 :printing first name of the table
        let nmtxt = await txtt.nth(i).textContent()
        console.log(nmtxt)

        // 2 : printing the lastname of the table
        let ltn = await lstxt.nth(i).textContent()
        console.log(ltn)

    }
})

test("Test Shadow-DOM", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://letcode.in/shadow")

    await page.locator('[id="fname"]').fill("Atharva")
    await page.locator('[id="lname"]').fill("kulkarni")
    // await page.keyboard.press("Tab")
    // await page.keyboard.type("Hola")
})