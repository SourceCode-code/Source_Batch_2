const { test, expect } = require("@playwright/test")

test("03_Batch2_dropdowns_ static ex_1", async function ({ browser }) {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    //step1 :- visit the url 
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    //ck(WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)") the the page heading
    await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)")
    //verify the heading above dropdwon --->\
    let headertitle = await page.locator('[class="col-sm-4 col-lg-4 col-md-4"] h2').first()
    await expect(headertitle).toContainText(" Dropdown Menu(s)")
    //select in 1 dropdown value python
    await page.locator('[id="dropdowm-menu-1"]').selectOption("Python")
    // verify the selected value 
    await expect(page.locator('[id="dropdowm-menu-1"]')).toHaveValue("python")
    //select in 2 dropdown value TestENg
    await page.locator('[id="dropdowm-menu-2"]').selectOption("TestNG")
    // verify the selected value 
    await expect(page.locator('[id="dropdowm-menu-2"]')).toHaveValue("testng")
   //select in 3 dropdown value JS
   await page.locator('[id="dropdowm-menu-3"]').selectOption("JavaScript")
   // verify the selected value 
   await expect(page.locator('[id="dropdowm-menu-3"]')).toHaveValue("javascript")

})

test("03_Batch2_dropdowns_ static ex_2",async function({page}){

 //step1 :- visit the url 
 await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
 //ck(WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)") the the page heading
 await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)")
 //verify the heading above dropdwon --->\
 let headertitle = await page.locator('[class="col-sm-4 col-lg-4 col-md-4"] h2').first()
 await expect(headertitle).toContainText(" Dropdown Menu(s)")
 //select in 1 dropdown value pear
 await page.locator('[id="fruit-selects"]').selectOption("Pear")
 // verify the selected value 
 await expect(page.locator('[id="fruit-selects"]')).toHaveValue("pear")

})