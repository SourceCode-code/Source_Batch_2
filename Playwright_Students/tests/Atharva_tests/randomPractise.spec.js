const { test, expect } = require('@playwright/test')
const { parseEnv } = require('util')

test('Testing the TRINET HR Solutions WebPage', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // Step 1:- visit the url of the webpage
    await page.goto('https://www.trinet.com/')

    // Step 2:- Verify the Title of the webpage
    await expect(page).toHaveTitle('HR Solutions, Payroll, and HR Outsourcing | TriNet')

    // step 3:- clicking on solutions button
     await page.locator('[id="cs0d21a04eda23ed89"]').click()

    // step4:- Opening the solutions option 
    await  page.locator('[aria-label="Solutions Navigation"]').textContent()

    // step 5:- hovering over the TRINET PEO option
    await page.locator('[class="material-design-icon__svg"]').nth(0).click()

    // step6:- hovering over the element 
    let element = await page.locator('[id="cs1c832a349072682a"]')
    await element.hover()




})

test('Test dynamic dropdown of ClearTrip', async ({ browser }) => {

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1: - visit url 
    await page.goto('https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjNkcaEsYeLAxXepGYCHRw4JVYYABAAGgJzbQ&ae=2&aspm=1&co=1&ase=5&gclid=Cj0KCQiAqL28BhCrARIsACYJvkdyoQztftmfZcII_HhZ8YtvUnPJorkP5c9hSA66cdCicO0PnQWlAvgaAkTeEALw_wcB&ei=RN-PZ4SmNI2VseMPy77s-A0&ohost=www.google.com&cid=CAESVuD2R2lneH2bqhAN3QD_L0CRrrvmPVw_UCt8oFhUjG9MiGUjJy62mmPN9qLF0lgHXQctOoVRJWdVkBbIrwT7wTEC2qq5Rcp0swJCPV5KoHDrAy45yjez&sig=AOD64_0EHgzfxl0BCb19pFNRi0pfPZJniQ&q&sqi=2&adurl&ved=2ahUKEwiE2MGEsYeLAxWNSmwGHUsfG98Q0Qx6BAgIEAE')

    //  step 2:- verify the heading of the page
    await expect(page).toHaveTitle('Flight bookings, Cheap flights, Lowest Air tickets @Cleartrip')

    // step 3:- click on the X button of the mobile number login functionality
    await page.locator('[class="pb-1 px-1 flex flex-middle nmx-1"]').click()
    // step 4:- enter the WHERE FROM destination
    await page.locator('[placeholder="Where from?"]').fill('pun')

    // waiting for selector
    await page.waitForSelector('[class="dropdown p-absolute t-13 ln-1 w-100p"]')

    // step 4:- click and select the desired option
    let options = await page.locator('[class="dropdown p-absolute t-13 ln-1 w-100p"] div').count()
    console.log(options)
    for (let i = 0; i < options; i++) {
        let text = await page.locator('[class="dropdown p-absolute t-13 ln-1 w-100p"] div').nth(i).textContent()
        console.log(text)
        if (text === "Pune, IN - Lohegaon (PNQ)") {
            await page.locator('[class="dropdown p-absolute t-13 ln-1 w-100p"] div').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(2000)

    // step 5:- select WHERE TO destination
    await page.locator('[placeholder="Where to?"]').fill('ban')

    // step 6:- wait for selector
    await page.waitForSelector('[class="dropdown p-absolute t-13 ln-1 w-100p"]')

    // step 7:- click and select the desired location
    let options1 = await page.locator('[class="dropdown p-absolute t-13 ln-1 w-100p"] div').count()
    console.log(options1)
    for (let i = 0; i < options1; i++) {
        let text1 = await page.locator('[class="dropdown p-absolute t-13 ln-1 w-100p"] div').nth(i).textContent()
        console.log(text1)
        if(text1 === "Bangalore, IN - Kempegowda International Airport (BLR)"){
            await page.locator('[class="dropdown p-absolute t-13 ln-1 w-100p"] div').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(2000)

    // step 8:- click on the calendar option for the date of travelling
    await page.locator('[class="sc-aXZVg dSvAMK mr-2 mt-1"]').click()

    // step 9:- select the desired date
    // await page.locator('[class="Day-grid flex flex-middle flex-column flex-top"]').nth(1).click()
})

test('Alerts of WebDriver page', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1: - visit the URL of the webpage
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // step 2:- click on the desired button 
    await page.locator('[onclick="jsAlert()"]').click()

    // step 3: -
   page.on("dialog", async(theAlert)=>{
    await theAlert.message()
    await expect(theAlert.message()).toContain("Click for JS Alert")
    await theAlert.accept()
   })
   await page.waitForTimeout(3000)
   let Text = await page.locator('[id="result"]').textContent()
   await expect(Text).toContain("You successfully clicked an alert")

})

test('Adding Product to Cart PopUp', async({page})=>{

    await page.goto('https://www.demoblaze.com/prod.html?idp_=1')

    await page.locator('[onclick="addToCart(1)"]').click()

    page.on("dialog", async(addAlert)=>{

        await addAlert.message()
        await expect(addAlert.message()).toContain("Product added")
        await addAlert.accept()
    })
    await page.waitForTimeout(3000)

})