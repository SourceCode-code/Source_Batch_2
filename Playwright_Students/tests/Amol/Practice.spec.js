const {test , expect} = require("@playwright/test")
const { checkPrime } = require("crypto")
const { deserialize } = require("v8")

test("verify all the function names of TOOLS ",async({browser})=>{
    let Context = await browser.newContext()
    let page = await Context.newPage()

    await page.goto("https://demoqa.com/")
    await expect (page).toHaveTitle("DEMOQA")

    let elements = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(0).textContent()
    await expect(elements).toContain("Elements")

    let Forms = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(1).textContent()
    await expect(Forms).toContain("Forms")

    let AFW = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(2).textContent()
    await expect(AFW).toContain("Alerts, Frame & Windows")

    let Widgets = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(3).textContent()
    await expect(Widgets).toContain("Widgets")

    let Interactions = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(4).textContent()
    await expect(Interactions).toContain("Interactions")

    let BSA = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(5).textContent()
    await expect(BSA).toContain("Book Store Application")
})

test("Verify ELEMENTS function with checkbox",async({browser})=>{
 let Context =await browser.newContext()
 let page = await Context.newPage()

 await page.goto("https://demoqa.com/")
 await expect (page).toHaveTitle("DEMOQA")

 let elements = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(0).textContent()
 await expect(elements).toContain("Elements")

 await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(0).click()

 let checkbox= await page.locator('[class="element-list collapse show"] ul li:nth-child(2)').textContent()
 await expect(checkbox).toContain("Check Box")

await page.locator('[class="element-list collapse show"] ul li:nth-child(2)').click()

let checkbox1 = await page.locator('h1[class="text-center"]').textContent()
await expect(checkbox1).toContain("Check Box")

await page.locator('[class="rct-icon rct-icon-expand-close"]').click()

await page.locator('[for="tree-node-home"] span[class="rct-checkbox"]').check()
await expect(page.locator('[for="tree-node-home"] span[class="rct-checkbox"]')).toBeChecked() 
await page.locator('[for="tree-node-home"] span[class="rct-checkbox"]').uncheck()
await expect(page.locator('[for="tree-node-home"] span[class="rct-checkbox"]')).not.toBeChecked()

await page.locator('[class="rct-checkbox"]').nth(1).check()
await expect(page.locator('[class="rct-checkbox"]').nth(1)).toBeChecked()
await page.locator('[class="rct-checkbox"]').nth(1).uncheck()
await expect(page.locator('[class="rct-checkbox"]').nth(1)).not.toBeChecked()

await page.locator('[class="rct-checkbox"]').nth(2).check()
await expect(page.locator('[class="rct-checkbox"]').nth(2)).toBeChecked()
await page.locator('[class="rct-checkbox"]').nth(2).uncheck()
await expect(page.locator('[class="rct-checkbox"]').nth(2)).not.toBeChecked()

await page.locator('[class="rct-checkbox"]').nth(3).check()
await expect(page.locator('[class="rct-checkbox"]').nth(3)).toBeChecked()
await page.locator('[class="rct-checkbox"]').nth(3).uncheck()
await expect(page.locator('[class="rct-checkbox"]').nth(3)).not.toBeChecked()

})

test("Verify ELEMENTS function with ",async({browser})=>{
    let Context =await browser.newContext()
    let page = await Context.newPage()
   
    await page.goto("https://demoqa.com/")
    await expect (page).toHaveTitle("DEMOQA")
   
    let elements = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(0).textContent()
    await expect(elements).toContain("Elements")
   
    await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(0).click()
   
    let checkbox= await page.locator('[class="element-list collapse show"] ul li:nth-child(3)').textContent()
    await expect(checkbox).toContain("Radio Button")

    await page.locator('[class="element-list collapse show"] ul li:nth-child(3)').click()

    let RadioB = await page.locator('h1[class="text-center"]').textContent()
    await expect(RadioB).toContain("Radio Button")
await page.waitForTimeout(3000)
    await page.locator('[id="app"] [id="yesRadio"]').check({force:true})
    await expect(page.locator('[id="app"] [id="yesRadio"]')).toBeChecked()
   let yes= await page.locator('[class="text-success"]').textContent()
   await expect(yes).toContain("Yes")
    // await page.locator('input[type="radio"][id="yesRadio"]').uncheck()
    // await expect(page.locator('input[type="radio"][id="yesRadio"]')).not.toBeChecked()

    // await page.locator('input[type="radio"][id="impressiveRadio"]').check()
    // await expect(page.locator('input[type="radio"][id="impressiveRadio"]')).toBeChecked()

})

test("Verify Forms function with ",async({browser})=>{
    let Context =await browser.newContext()
    let page = await Context.newPage()
   
    await page.goto("https://demoqa.com/")
    await expect (page).toHaveTitle("DEMOQA")
   
    let Forms = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(1).textContent()
    await expect(Forms).toContain("Forms")
   
    await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(1).click()

    let check= await page.locator('[class="element-list collapse show"] ul li').textContent()
    await expect(check).toContain("Practice Form")

    await page.locator('[class="element-list collapse show"] ul li').click()

    let innercheck= await page.locator('[class="text-center"]').textContent()
    await expect(innercheck).toContain("Practice Form")

    let formname= await page.locator('[class="practice-form-wrapper"] h5').textContent()
    await expect(formname).toContain("Student Registration Form")

    await page.locator('[placeholder="First Name"]').fill("Amol")
    await expect(page.locator('[placeholder="First Name"]')).toHaveValue("Amol")

    await page.locator('[placeholder="Last Name"]').fill("Jadhav")
    await expect(page.locator('[placeholder="Last Name"]')).toHaveValue("Jadhav")

    await page.locator('[id="userEmail"]').fill("amoljadhav@gmail.com")
    await expect(page.locator('[id="userEmail"]')).toHaveValue("amoljadhav@gmail.com")

    // await page.waitForTimeout(3000)
    // await page.locator('[id="app"] [id="gender-radio-1"]').check({force:true})
    // await expect(page.locator('[id="app"] [id="gender-radio-1"]')).toBeChecked()

    await page.locator('[id="userNumber"]').fill('9767004310')
    await expect(page.locator('[id="userNumber"]')).toHaveValue('9767004310')

    // await page.locator('[id="dateOfBirthInput"]').fill("26 feb 1999")     
    // await expect(page.locator('[id="dateOfBirthInput"]')).toHaveValue("26 feb 1999")
 
    await page.locator('[id="subjectsContainer"]').fill("En")     

    await page.waitForSelector('class="subjects-auto-complete__menu css-26l3qy-menu"')
  
})
