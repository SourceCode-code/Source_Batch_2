const { test, expect } = require("@playwright/test")
const exp = require("constants")
const { checkPrime } = require("crypto")
const { brotliCompress } = require("zlib")

// 1 https://letcode.in/radio 
//created a testcases and automated it

/*test("letcode:- checking the functionality of letcode, testing radiobuttons and checkbox",async({browser})=>{
    let Context = await browser.newContext()
    let page = await Context.newPage()
    // visit the url
    page.goto("https://letcode.in/radio")
     // verify title of the page
    await expect(page).toHaveTitle("LetCode with Koushik")
        //verify the heading above checkbox
        let checkheading = await page.locator('div[class="hero-body"] [class="container"]').textContent()
        await expect(checkheading).toContain("Radio & Checkbox")
   
    // check optiion yes (Select any one)
    await page.locator('[id="yes"]').check()
    await expect(page.locator('[id="yes"]')).toBeChecked()
    //uncheck optiion no
    await expect(page.locator('[id="no"]')).not.toBeChecked()

     //radio btn:- 1 check option NO (Select any one)
    await page.locator('[id="no"]').check()
    await expect(page.locator('[id="no"]')).toBeChecked()
    //uncheck optiion yes
    await expect(page.locator('[id="yes"]')).not.toBeChecked()

    //Confirm you can select only one radio button check for yes and no as well
    // check option yes 
    await page.locator('[id="one"]').check()
    await expect(page.locator('[id="one"]')).toBeChecked()
    //uncheck optiion no
    await expect(page.locator('[id="two"]')).not.toBeChecked()

     // check option NO 
    await page.locator('[id="two"]').check()
    await expect(page.locator('[id="two"]')).toBeChecked()
    //uncheck option yes
    await expect(page.locator('[id="one"]')).not.toBeChecked()

    // Find the bug
       // check option yes 
    // await page.locator('[id="nobug"]').check()
    // await expect(page.locator('[id="nobug"]')).toBeChecked()
    // //uncheck optiion no
    // await expect(page.locator('[id="bug"]')).not.toBeChecked()

     // check option NO 
    await page.locator('[id="bug"]').check()
    await expect(page.locator('[id="bug"]')).toBeChecked()
    //uncheck option yes
    await expect(page.locator('[id="nobug"]')).not.toBeChecked()


    //Find which one is selected
    // check option yes 
    await page.locator('[id="foo"]').check()
    await expect(page.locator('[id="foo"]')).toBeChecked()
    //uncheck optiion no
    await expect(page.locator('[id="notfoo"]')).not.toBeChecked()

     // check option NO 
    await page.locator('[id="two"]').check()
    await expect(page.locator('[id="two"]')).toBeChecked()
    //uncheck option yes
    await expect(page.locator('[id="notfoo"]')).not.toBeChecked()

    //Find if the checkbox is selected?
    await page.locator('div[class="field"] [type="checkbox"]').nth(0).uncheck()
    await page.locator('div[class="field"] [type="checkbox"]').nth(0).check()

   // Accept the T&C :- chhecking the functionality of checkbox 
    await page.locator('div[class="field"] [type="checkbox"]').nth(1).uncheck()
    await page.locator('div[class="field"] [type="checkbox"]').nth(1).check()

})*/


//2 create a test case for radio btn 
// https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html

/*test("webdriveruniversity:- check the functiionality of webdriveruniversity",async({browser})=>{
    const Context = await browser.newContext()
    const page = await Context.newPage()

    //2 create a test case for radio btn 
// https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html

    //visit the URL
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    //verify title of the page 
    await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)")

    let check2 = await page.locator('[class="col-sm-4 col-lg-4 col-md-4"] [class="thumbnail"]').nth(1)
    await expect(check2).toContainText("Checkboxe(s)")

    await page.locator('input[type="checkbox"][value="option-1"]').check()
    await expect(page.locator('input[type="checkbox"][value="option-1"]')).toBeChecked()

    await page.locator('input[type="checkbox"][value="option-2"]').check()
    await expect(page.locator('input[type="checkbox"][value="option-2"]')).toBeChecked()

    await page.locator('input[type="checkbox"][value="option-3"]').check()
    await expect(page.locator('input[type="checkbox"][value="option-3"]')).toBeChecked()

    await page.locator('input[type="checkbox"][value="option-4"]').check()
    await expect(page.locator('input[type="checkbox"][value="option-4"]')).toBeChecked()
    
     //i have to check the functionality  of radio buttons 
    let check3 = await page.locator('[class="col-sm-4 col-lg-4 col-md-4"] [class="thumbnail"]').nth(2)
    await expect(check3).toContainText("Radio Button(s)")
     
    //check for green 
    await page.locator('input[type="radio"][value="green"]').check()
    await expect(page.locator('input[type="radio"][value="green"]')).toBeChecked()
    //uncheck for green 
    await page.locator('input[type="radio"][value="green"]').uncheck()
    await expect(page.locator('input[type="radio"][value="green"]')).not.toBeChecked()
    
    // check for blue
    await page.locator('input[type="radio"][value="blue"]').check()
    await expect(page.locator('input[type="radio"][value="blue"]')).toBeChecked()
    //uncheck for blue
    await page.locator('input[type="radio"][value="blue"]').uncheck()
    await expect(page.locator('input[type="radio"][value="blue"]')).not.toBeChecked()

    // check for yellow
    await page.locator('input[type="radio"][value="yellow"]').check()
    await expect(page.locator('input[type="radio"][value="yellow"]')).toBeChecked()
   // uncheck for yellow
    await page.locator('input[type="radio"][value="yellow"]').uncheck()
    await expect(page.locator('input[type="radio"][value="yellow"]')).not.toBeChecked()

    // check for yellow
    await page.locator('input[type="radio"][value="orange"]').check()
    await expect(page.locator('input[type="radio"][value="orange"]')).toBeChecked()
   //uncheck for yellow
    await page.locator('input[type="radio"][value="orange"]').uncheck()
    await expect(page.locator('input[type="radio"][value="orange"]')).not.toBeChecked()


    // // check for yellow
    await page.locator('input[type="radio"][value="purple"]').check()
    await expect(page.locator('input[type="radio"][value="purple"]')).toBeChecked()
   //uncheck for yellow
    await page.locator('input[type="radio"][value="purple"]').uncheck()
    await expect(page.locator('input[type="radio"][value="purple"]')).not.toBeChecked()



})*/


//3 create and automated this page 
//https://demo.guru99.com/test/radio.html

/*test("guru99:- check the functiionality of guru99", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://demo.guru99.com/test/radio.html")
    await expect(page).toHaveTitle("Radio Button & Check Box Demo")

    let check1 = await page.locator("div strong").nth(0).textContent()
    await expect(check1).toContain("Radio")

    // check for the option 1
    await page.locator('[id="vfb-7-1"]').check()
    await expect(page.locator('[id="vfb-7-1"]')).toBeChecked()
    //uncheck for the option 1
    await page.locator('[id="vfb-7-1"]').uncheck()
    await expect(page.locator('[id="vfb-7-1"]')).not.toBeChecked()

    //check for the option 2
    await page.locator('[id="vfb-7-2"]').check()
    await expect(page.locator('[id="vfb-7-2"]')).toBeChecked()
    //uncheck for the option 2
     await page.locator('[id="vfb-7-2"]').uncheck()
     await expect(page.locator('[id="vfb-7-2"]')).not.toBeChecked()

    //check for the option 3
     await page.locator('[id="vfb-7-3"]').check()
    await expect(page.locator('[id="vfb-7-3"]')).toBeChecked()
    //uncheck for the option 3
    await page.locator('[id="vfb-7-3"]').uncheck()
    await expect(page.locator('[id="vfb-7-3"]')).not.toBeChecked()

    let check2 = await page.locator("div strong").nth(1).textContent()
    await expect(check2).toContain("Checkbox")
 // for button 1
    await page.locator("#vfb-6-0").check()
    await expect(page.locator("#vfb-6-0")).toBeChecked()
    await page.locator("#vfb-6-0").uncheck()
    await expect(page.locator("#vfb-6-0")).not.toBeChecked()
// for button  2
    await page.locator("#vfb-6-1").check()
    await expect(page.locator("#vfb-6-1")).toBeChecked()
    // await page.locator("#vfb-6-1").uncheck()
    // await expect(page.locator("#vfb-6-1")).not.toBeChecked()
// for button 3
    await page.locator("#vfb-6-2").check()
    await expect(page.locator("#vfb-6-2")).toBeChecked()
    await page.locator("#vfb-6-2").uncheck()
    await expect(page.locator("#vfb-6-2")).not.toBeChecked()

})*/


//4 create and automated for radio btn and checkboxes
//https://rahulshettyacademy.com/AutomationPractice/

// test ("rahulshettyacademy: - checkking functionality for rahulshettyacademy",async({browser})=>{
//     const Context = await browser.newContext()
//     const page = await Context.newPage()

//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

//     await expect(page).toHaveTitle("Practice Page")

//     let check = await page.locator('[id="radio-btn-example"]').textContent()
//     await expect (check).toContain("Radio Button Example")

//  // checking functionality for Radio button 1 - click
//     await page.locator('[value="radio1"]').check()
//     await expect(page.locator('[value="radio1"]')).toBeChecked()
// // checking functionality for Radio button 1 - unclick
//     await page.locator('[value="radio1"]').uncheck()
//     await expect(page.locator('[value="radio1"]')).not.toBeChecked()

// // checking functionality for Radio button 2 - click
//     await page.locator('[value="radio2"]').check()
//     await expect(page.locator('[value="radio2"]')).toBeChecked()
// // checking functionality for Radio button 2 - unclick
//     await page.locator('[value="radio2"]').uncheck()
//     await expect(page.locator('[value="radio2"]')).not.toBeChecked()

// // checking functionality for Radio button 2 - click
//     await page.locator('[value="radio3"]').check()
//     await expect(page.locator('[value="radio3"]')).toBeChecked()
// // checking functionality for Radio button 2 - unclick
//     await page.locator('[value="radio3"]').uncheck()
//     await expect(page.locator('[value="radio3"]')).not.toBeChecked()
// 
// //************* */  check the functionality of checkbox***********

// let check2  = await page.locator('[id="checkbox-example"]').textContent()
// await expect(check2).toContain("Checkbox Example")

// //  checking the functionality for button 1 = click
// await page.locator('[id="checkBoxOption1"]').check()
// await expect(page.locator('[id="checkBoxOption1"]')).toBeChecked()
// //  checking the functionality for button 1 = unclick
// await page.locator('[id="checkBoxOption1"]').uncheck()
// await expect(page.locator('[id="checkBoxOption1"]')).not.toBeChecked()

// //  checking the functionality for button 2 = click
// await page.locator('[id="checkBoxOption2"]').check()
// await expect(page.locator('[id="checkBoxOption2"]')).toBeChecked()
// //  checking the functionality for button 2 = unclick
// await page.locator('[id="checkBoxOption2"]').uncheck()
// await expect(page.locator('[id="checkBoxOption2"]')).not.toBeChecked()

// //  checking the functionality for button 3 = click
// await page.locator('[id="checkBoxOption3"]').check()
// await expect(page.locator('[id="checkBoxOption3"]')).toBeChecked()
// //  checking the functionality for button 3 = unclick
// await page.locator('[id="checkBoxOption3"]').uncheck()
// await expect(page.locator('[id="checkBoxOption3"]')).not.toBeChecked()

// })




