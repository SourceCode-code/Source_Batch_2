const {test,expect}=require("@playwright/test")
const { lstatSync } = require("fs")


// Table handling

test ("Webdriver table No.2 ",async({browser})=>{
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")

    let names = await page.locator('[id="t02"] tbody tr td:nth-child(1)').count() //  here we just check the numbers

    let firstname =await page.locator('[id="t02"] tbody tr td:nth-child(1)')
    let lastname = await page.locator('[id="t02"] tbody tr td:nth-child(2)')
    let age = await page.locator('[id="t02"] tbody tr td:nth-child(3)')


    for( let i=0;i<3;i++){
        let nametext = await firstname.nth(i).textContent()
        let lastnametext = await lastname.nth(i).textContent()
        let cuAge = await age.nth(i).textContent()

        console.log(`My name is "${nametext} ${lastnametext}" and my age is "${cuAge}"`) 
    }

})

test ("Automation testing static web page",async({browser})=>{
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    let headingCount = await page.locator('[name="BookTable"] tbody tr td:nth-child(1)').count()

    let booknames = await page.locator('[name="BookTable"] tbody tr td:nth-child(1)')
    let author =await page.locator('[name="BookTable"] tbody tr td:nth-child(2)')
    let subject = await page.locator('[name="BookTable"] tbody tr td:nth-child(3)')
    let price = await page.locator('[name="BookTable"] tbody tr td:nth-child(4)')

    for (let i=0;i<headingCount;i++){
       let book = await booknames.nth(i).textContent()
       let auth = await author.nth(i).textContent()
       let sub = await subject.nth(i).textContent()
       let pri = await price.nth(i).textContent()
       console.log(`The bookname is ${book} author name ${auth} and having subject ${sub} with price of ${pri}`)
    }
})

test ("Pagination Web Table",async({browser})=>{
   const Context = await browser.newContext()
   const page = await Context.newPage()

   await page.goto("https://testautomationpractice.blogspot.com/")

   const namecount =  await page.locator('[id="productTable"] tbody tr td:nth-child(1)').count()

   const specificname = "Smartphone"
   const Name = await page.locator('[id="productTable"] tbody tr td:nth-child(2)')
   const checkbox = await page.locator('[id="productTable"] tbody tr td:nth-child(4) [type="checkbox"]')
   for (let i=0;i<namecount;i++){
     let checkname = await Name.nth(i).textContent()
     if(specificname==checkname){
        //console.log(checkname)
        await checkbox.nth(i).check()
     }
   }

   const specificname1 = "Laptop"
   const Name1 = await page.locator('[id="productTable"] tbody tr td:nth-child(2)')
   const checkbox1 = await page.locator('[id="productTable"] tbody tr td:nth-child(4) [type="checkbox"]')
   for (let i=0;i<namecount;i++){
     let checkname = await Name1.nth(i).textContent()
     if(specificname1==checkname){
        //console.log(checkname)
        await checkbox1.nth(i).check()
     }
   }

   const specificname2 = "Tablet"
   const Name2 = await page.locator('[id="productTable"] tbody tr td:nth-child(2)')
   const checkbox2 = await page.locator('[id="productTable"] tbody tr td:nth-child(4) [type="checkbox"]')
   for (let i=0;i<namecount;i++){
     let checkname = await Name2.nth(i).textContent()
     if(specificname2==checkname){
        //console.log(checkname)
        await checkbox2.nth(i).check()
     }
   }

   const specificname3 = "Smartwatch"
   const Name3 = await page.locator('[id="productTable"] tbody tr td:nth-child(2)')
   const checkbox3 = await page.locator('[id="productTable"] tbody tr td:nth-child(4) [type="checkbox"]')
   for (let i=0;i<namecount;i++){
     let checkname = await Name3.nth(i).textContent()
     if(specificname3==checkname){
        //console.log(checkname)
        await checkbox3.nth(i).check()
     }
   }

   const specificname4 = "Wireless Earbuds"
   const Name4 = await page.locator('[id="productTable"] tbody tr td:nth-child(2)')
   const checkbox4 = await page.locator('[id="productTable"] tbody tr td:nth-child(4) [type="checkbox"]')
   for (let i=0;i<namecount;i++){
     let checkname = await Name4.nth(i).textContent()
     if(specificname4==checkname){
        //console.log(checkname)
        await checkbox4.nth(i).check()
     }
   }
})
