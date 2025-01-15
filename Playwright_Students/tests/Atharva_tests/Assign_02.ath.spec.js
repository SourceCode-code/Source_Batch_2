const {test,expect} = require('@playwright/test')
const exp = require('constants')

test("Test the functionality of the CheckBox and RadioButton", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()


    //Visit the given url//
    await page.goto('https://letcode.in/radio')

    //verify the Heading  of the WebPage//
    // await expect(page).toHaveTitle("LetCode with koushik")

    //verify the text above the radio button 
    // await expect(page).toHaveTitle('Select any one')


    //select YES as  the radiobutton for SELECT ANY ONE option //
    await page.locator('input[type="radio"][id="yes"]').check()
    // verification of the selected option 
    await expect(page.locator('input[type="radio"][id="yes"]')).toBeChecked()

    //select NO as the radio Button for SELECT ANY ONE option //
    await page.locator('input[type="radio"][id="no"]').check()
    // Verify checkBox is selected for option 
    await expect(page.locator('input[type="radio"][id="no"]')).toBeChecked()
    

    //select YES as the radio button for CONFIRM  YOU CAN SELECT ANY ONE OPTION //
    await page.locator('input[type="radio"][id="one"]').check()
    //assertion for the checkbox //
    await expect(page.locator('input[type="radio"][id="one"]')).toBeChecked()
    

    //select NO as the radio button for CONFRIM YOU CAN SELECT ANY ONE OPTION//
    await page.locator('input[type="radio"][id="two"]').check()
    //assertion for the checkbox 
    await expect(page.locator('input[type="radio"][id="two"]')).toBeChecked()

    // select the radio button for FIND A BUG //
    await page.locator('input[type="radio"][id="nobug"]').check()
    //assertion for the above radiobutotn
    await expect(page.locator('input[type="radio"][id="nobug"]')).toBeChecked()

    //select the radio button for FIND A BUG//
    await page.locator('input[type="radio"][id="bug"]').check()
    //assertion for the above option 
    await expect(page.locator('input[type="radio"][id="bug"]')).toBeChecked()

    // radiobutton for foobar//
    await page.locator('input[type="radio"][id="foo"]').check()
    // assertion for the foobar
    await expect(page.locator('input[type="radio"][id="foo"]')).toBeChecked()

    // button for bar 
    await page.locator('input[type="radio"][id="notfoo"]').check()
    // assertion for bar radiobutton
    await expect(page.locator('input[type="radio"][id="notfoo"]')).toBeChecked()
    // radio button for last field being disabled//
    await page.locator('input[type="radio"][id="going"]').check()
    // assertion for going radiobutton//
    await expect(page.locator('input[type="radio"][id="going"]')).toBeChecked()
    

    // radiobutton for last field being disabled//
    await page.locator('input[type="radio"][id="notG"]').check()
    // assertion for notG radiobutton//
    await expect(page.locator('input[type="radio"][id="notG"]')).toBeChecked()
    // verify that notG button  is unchecked //
    // await page.locator('input[type="radio"][id="notG"]').uncheck()

    // Remember me checkBox
    await page.locator('input[type="checkbox"][checked]').check()
    // assertion for the checkbox
    await expect(page.locator('input[type="checkbox"][checked]')).toBeChecked()
    // verify that the checkbox for remember me has been unchecked
    await page.locator('input[type="checkbox"][checked]').uncheck()

    // agree to fake conditions checkbox
    // await page.locator('label[class="checkbox"]').check()
})


//2 : Create a test case for the radiobuton//
// // https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html//

test("Test Case for RadioButton", async({browser})=>{

    const Context = await browser.newContext();
    const page = await Context.newPage()

    //step1:- verify the url of the webpage
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    //step2:- verify the heading of the webpage//
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')

    //step 3:-verify the heading above the radiobuttons
    const btntitle = await page.locator('[class="col-sm-4 col-lg-4 col-md-4"] [class="thumbnail"]').nth(2)
    await expect(btntitle).toContainText('Radio Button(s)')

    //step4:- verify the radio button
    await page.locator('input[type="radio"][value="green"]').check()
    // assertion for green radiobutton that it has been selected or not 
    await expect(page.locator('input[type="radio"][value="green"]')).toBeChecked()
    // verify that the green radiobutton has been unchecked
    // await page.locator('input[type="radio"][value="green"]').uncheck()
    
    //step5:- verify the radio button for blue button
    await page.locator('input[type="radio"][value="blue"]').check()
    // assertion for the blue button 
    await expect(page.locator('input[type="radio"][value="blue"]')).toBeChecked()
    // await page.locator('input[type="radio"][value="blue"]').uncheck()

    //step 6:-verification for the yellow button
    await page.locator('input[type="radio"][value="yellow"]').check()
    // assertion for the yellow button 
    await expect(page.locator('input[type="radio"][value="yellow"]')).toBeChecked()

    // step7:-verification for the orange button
    await page.locator('input[type="radio"][value="orange"]').check()
    //assertion for orange button
    await expect(page.locator('input[type="radio"][value="orange"]')).toBeChecked()

    // step 8:-verification for the red button 
    await page.locator('input[type="radio"][value="purple"]').check()
    // assertion for red button 
    await expect(page.locator('input[type="radio"][value="purple"]')).toBeChecked()

})

// 3://3 create and automated this page 
// https://demo.guru99.com/test/radio.html
test("Test the radiobuttons and checkboxes", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step1: verify the url of the webpage
    await page.goto('https://demo.guru99.com/test/radio.html')

    // step2:- verify the heading of the webpage
    await expect(page).toHaveTitle('Radio Button & Check Box Demo')

    // step3:-verify theo option 1 selected of radio buttons
    await page.locator('input[type="radio"][value="Option 1"]').check()
    // assertion for the option 1
    await expect(page.locator('input[type="radio"][value="Option 1"]')).toBeChecked()
    // unchecking the selected option 
    // await page.locator('input[type="radio"][value="Option 1"]').uncheck()

    // step4:-verify the option 2 selected of radio button
    await page.locator('input[type="radio"][value="Option 2"]').check()
    // assertion for the option 2
    await expect(page.locator('input[type="radio"][value="Option 2"]')).toBeChecked()

    // step 5:- verify the option 3 selected  of radio button
    await page.locator('input[type="radio"][value="Option 3"]').check()
    // assertion for the option 3
    await expect(page.locator('input[type="radio"][value="Option 3"]')).toBeChecked()

    // step6:- verify the checkbox 1  selected 
    await page.locator('input[type="checkbox"][value="checkbox1"]').check()
    // assertion for the checkbox 1
    await expect(page.locator('input[type="checkbox"][value="checkbox1"]')).toBeChecked()

    // step7:- verify the checkbox 2 selected
    await page.locator('input[type="checkbox"][value="checkbox2"]').check()
    // assertion for the checkbox 2
    await expect(page.locator('input[type="checkbox"][value="checkbox2"]')).toBeChecked()

    // step8:- verify the checkbox 3 selected
    await page.locator('input[type="checkbox"][value="checkbox3"]').check()
    // assertion for the checkbox 3
    await expect(page.locator('input[type="checkbox"][value="checkbox3"]')).toBeChecked()

})

// 4: test for radiobutton
// https://rahulshettyacademy.com/AutomationPractice/
test("Test the radiobuttons and checkbox", async({browser})=>{

    const Context  = await browser.newContext()
    const page = await Context.newPage()

    // step1: verify the url of the webpage
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // step2:- verify the heading of the webpage
    await expect(page).toHaveTitle('Practice Page')

    // step3:- verify the heading of the radiobuttons
    const heading = await page.locator('h1').textContent()
    // await expect(heading).toContain('Radio Button Example')

    // step4:- verify the radiobutton 1
    await page.locator('input[value="radio1"]').check()
    // assertion for the radiobutton 1
    await expect(page.locator('input[value="radio1"]')).toBeChecked()
    // uncheck the selected button 
    await expect(page.locator('input[value="radio1"]')).not.toBeChecked()

    // step5:- verify the radiobutton 2
    await page.locator('input[value="radio2"]').check()
    // assertion for the radiobutton 2
    await expect(page.locator('input[value="radio2"]')).toBeChecked()

    // step6:- verify the radiobutton 3
    await page.locator('input[value="radio3"]').check()
    // assertion for the radiobutton 3
    await expect(page.locator('input[value="radio3"]')).toBeChecked()

    // step7:- verify the checkbox 1 selected
    await page.locator('input[value="option1"][type="checkbox"]').check()
    // assertion for checkbox1 selected
    await expect(page.locator('input[value="option1"][type="checkbox"]')).toBeChecked()

    // step8:- verify the checkbox 2 selected
    await page.locator('input[value="option2"][type="checkbox"]').check()
    // assertion for checkbox 2 selected
    await expect(page.locator('input[value="option2"][type="checkbox"]')).toBeChecked()

    // step9:- verify the checkbox 3 selected
    await page.locator('input[value="option3"][type="checkbox"]').check()
    // assertion for checkbox 3 selected
    await expect(page.locator('input[value="option3"][type="checkbox"]')).toBeChecked()
})

