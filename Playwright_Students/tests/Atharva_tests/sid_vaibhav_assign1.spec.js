const {test,expect} = require('@playwright/test')
const exp = require('constants')


test('test the demo webpage of QA', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1-:- verify the url of the website
    await page.goto('https://demoqa.com/')

    // verify the  heading of the website
    await expect(page).toHaveTitle('DEMOQA')

    // step3:- clicking on the ELEMENTs button 
    let elements =await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(0).textContent()
    await expect(elements).toContain("Elements")

    // asserting it and using nth method as it is the first option 
    await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(0).click()

    // 
    let checkbox = await page.locator('[class="element-list collapse show"] ul li:nth-child(2)').textContent()
    await expect(checkbox).toContain("Check Box")

    // asserting the checkbox 
    await page.locator('[class="element-list collapse show"] ul li:nth-child(2)').click()

    //expanding all the checkbox options:
    await page.locator('[class="rct-icon rct-icon-expand-close"]').click()

    await page.locator('[for="tree-node-home"] span[class="rct-checkbox"]').check()
    await expect(page.locator('[for="tree-node-home"] span[class="rct-checkbox"]')).toBeChecked()

    await page.locator('[for="tree-node-home"] span[class="rct-checkbox"]').uncheck()


    await page.locator('[aria-label="Collapse all"]').click()

    let practiceform = await page.locator('')
    
})

test('Test the practice form', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // visit the url of the webpage
    await page.goto('https://demoqa.com/')

    // verify the  heading of the website
    await expect(page).toHaveTitle('DEMOQA')

    // clicking on FORMS button
    let formsbutton = await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(1).textContent()
    await expect(formsbutton).toContain("Forms")

    await page.locator('[class="card mt-4 top-card"] [class="card-body"] h5').nth(1).click()

    await page.locator('')
})


// DEMOQA Website BUTTON automation tests below :- //

test('testing  keyboard actions ', async({browser})=>{


    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1:- verify the url of the webpage
    await page.goto('https://gotranscript.com/text-compare')

    // step 2: enter the text in the respective textbox
    await page.locator('[name="text1"]').fill("I am learning Playwright tool at the moment and currently, I am learning how to handle the UI elements")
    
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    await page.keyboard.press("Tab")
    await page.keyboard.press('Control+V')

    await page.locator('[id="simple"]').check()
    await page.locator('[id="recaptcha"]').click()

})

test('dynamic dropdown of demo website', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step1:- visit the url of the webpage
    await page.goto("https://demoqa.com/buttons")

    // step 2:- click on the CLICK ME button
    await page.locator('[class="mt-4"] button').nth(1).click()
    // assert the button
    await page.waitForSelector('[id="dynamicClickMessage"]') 
    await page.waitForTimeout(2000)
    await expect(page.locator('[id="dynamicClickMessage"]')).toContainText('You have done a dynamic click')
    
})
test('the right click button ', async({page})=>{

    // visit the url of the webdpage
    await page.goto("https://demoqa.com/buttons")

    await page.locator('[id="rightClickBtn"]').click({button:'right'})

    await page.waitForSelector('[id="rightClickMessage"]')

    await page.waitForTimeout(2000)

    await expect(page.locator('[id="rightClickMessage"]')).toContainText("You have done a right click")
    
})

test('Demo request form', async({browser})=>{


    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1:- Visit the url
    await page.goto('https://phptravels.com/demo/')

    // step2:- verify the heading of the webpage
    await expect(page).toHaveTitle('Book Your Free Demo Now - Phptravels')

    // step 3:- enter the first name
    await page.locator('input[name="first_name"]').fill('Boris')
    // asserting that the entered name is visible
    await expect(page.locator('input[name="first_name"]')).toHaveValue('Boris')

    // step 4:- enter the last name
    await page.locator('input[name="last_name"]').fill('Brejcha')
    // asserting the last name
    await expect(page.locator('input[name="last_name"]')).toHaveValue('Brejcha')

    // step5:- selecting country from the dropdown
    await page.locator('[name="country_id"]').selectOption("India +91")
    // asserting and selecting india country from dropdown
    await expect(page.locator('[name="country_id"]')).toHaveValue("99")

    // step6:- enter the whatsapp number
    await page.locator('input[name="whatsapp"]').fill("8180968562")
    //asserting the entered number
    await expect(page.locator('input[name="whatsapp"]')).toHaveValue("8180968562")

    // step 7:- enter the business name
    await page.locator('input[name="business_name"]').fill("UltraTech Industries")
    // asserting the entered name
    await expect(page.locator('input[name="business_name"]')).toHaveValue("UltraTech Industries")

    // step8:-enter the email
    await page.locator('input[class="email form-control"]').fill("rickjon917@gmail.com")
    // asserting the enterd email
    await expect(page.locator('input[class="email form-control"]')).toHaveValue("rickjon917@gmail.com")

    // step9:-enter the result of the numbers in the text box
    let equationText = await page.textContent('[class="bg-light w-100 rounded-2"] h5')

    /*further I tried to implement the logic for 2 dynamic numbers which we need to add
    and enter the result, then only we can click on SUBMIT button and then the submission of
    the form is completed :- NEED help for this  part   */
})
// HR POrtal TESTING //
test('Testing  the HR portal', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step1:- verify the url of the webpage
    await page.goto('https://opensource-demo.orangehrmlive.com/')

    // step2:- verify the heading of the webpage
    await expect(page).toHaveTitle("OrangeHRM")

    // step 3:- enter the username
    await page.locator('input[name="username"]').fill("Admin")
    // assert the entered name
    await expect(page.locator('input[name="username"]')).toHaveValue("Admin")

    // step4:- enter the last name
    await page.locator('input[type="password"]').fill("admin123")
    // asserting the last name
    await expect(page.locator('input[type="password"]')).toHaveValue("admin123")

    // step5:- click on the login button
    await page.locator('[type="submit"]').click()

    let dash = await page.locator('[class="oxd-topbar-header-breadcrumb"]').textContent()
    await expect(dash).toContain('Dashboard')

    // clicking on MYINFO
    await page.locator('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]ul li:nth-child(4)').textContent()
})