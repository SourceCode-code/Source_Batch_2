// trying LOCATOR Methods//

const {test, expect} = require('@playwright/test')
const { ECDH } = require('crypto')
const { parseEnv } = require('util')

test('Locator Methods (getByAltText selector)', async({browser})=>{

    const Context = await browser.newContext() //opens a new browser
    const page = await Context.newPage() //opens a new page

    // step 1 :- visit the url 
    await page.goto("https://letcode.in/test#google_vignette")

    // step 2 :- verify the title 
    await expect(page).toHaveTitle('LetCode - Testing Hub')

    // step 3 :- get the selector
    let Ele = await page.getByAltText('letcode')
    // step 4 :- verify that the locator is visible 
    await expect(Ele).toBeVisible()
    //  asserting the locator
    await expect(Ele).toHaveAttribute("src", "../../assets/logo.png")
    await expect(Ele).toHaveAttribute("alt", "letcode")

})

test('verify getByLabelSelector', async({page})=>{

    // step 1 :- verify the url 
    await page.goto('https://letcode.in/test#google_vignette')

    // step 2 :- get the label 
    let elLabel = await page.getByLabel("main navigation")
    await expect(elLabel).toBeVisible()
    // await expect(elLabel).toHaveText("main navigation")

})

test('verify getByPlaceholderSelector', async({page})=>{

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')

    await page.getByPlaceholder("First Name").fill("Atharva")
    await expect(page.getByPlaceholder("First Name")).toHaveValue("Atharva")
})

test('verify getByRole', async({page})=>{

    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    await page.getByRole("checkbox", {name:"Option 1"}).check()
    await page.waitForTimeout(2000)
    await expect(page.getByRole("checkbox", {name:"Option 1"})).toBeChecked()
    await page.getByRole("checkbox", {name:"Option 1"}).uncheck()
})

test('Verify getByTextSelector', async({page})=>{

    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    let textEle = await page.getByText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")
    await expect(textEle).toBeVisible()
})  

test('Verify getByTitle Method', async({page})=>{

    await page.goto('https://letcode.in/test#google_vignette')
    let titleEl = await page.getByTitle("Koushik Chatterjee")
    await page.waitForTimeout(2000)
    await expect(titleEl).toBeVisible()
})

// static dropdown//
test('test Static Dropdown', async({page})=>{

    // step 1 :- visit  the URL 
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

    // step 2 :- verify the heading of the dropdown option 
    await page.locator('[class="col-sm-4 col-lg-4 col-md-4"] h2').nth(0).textContent()

    // step 3 :- select the desired option
    await page.locator('[id="dropdowm-menu-1"]').selectOption('JAVA')
    // asserting the selected option 
    await expect(page.locator('[id="dropdowm-menu-1"]')).toHaveValue("java")

    // step 4 :- select the next option 
    await page.locator('[id="dropdowm-menu-2"]').selectOption("Eclipse")
    // asserting the selected option 
    await expect(page.locator('[id="dropdowm-menu-2"]')).toHaveValue("eclipse")


})

// testing DYNAMIC DROPDOWN//
test ('test Dynamic Dropdown', async({page})=>{

    // step 1 :- visit the URl 
    await page.goto("https://www.snitch.co.in/")

    // step 2 :- click on the 'X' button of the popup when it appears on the website
    await page.locator('[class="modal__close js-modal-close text-link"]').nth(0).click()

    // step 3 :- click on the search bar 
    await page.locator('[class="site-nav__link site-nav__link--icon js-search-header"]').click()

    // step 4 :- enter the partial text on the search bar
    await page.locator('[id="boost-sd__search-bar-input"]').fill("jog")

    // step 5 :- wait for the response
    await page.waitForSelector('[class="boost-sd__suggestion-queries-list"]')

    // step 6 :- select one of the desired option 
    let options = await page.locator('[class="boost-sd__suggestion-queries-list"] div').count()
    console.log(options)
    for (let i=0; i < options; i++){
        let text = await page.locator('[class="boost-sd__suggestion-queries-list"] div').nth(i).click()
        console.log(text)
        if(text === "Joggers"){
            await page.locator('[class="boost-sd__suggestion-queries-list"] div').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)
    await expect(page.locator('[class="boost-sd__suggestion-queries-item"] li')).nth(1).toHaveValue("Joggers")
})

test('Download functionality', async({page})=>{


    await page.goto("https://letcode.in/file")

   const downlaodpr = await page.waitForEvent("download")

   await page.locator('[id="pdf"]').click()
   const download = await downlaodpr

   await download.saveAs("../../Playwright_Students/Fixture/FileDownload/doc1.pdf")
   
})

// D:\Source_batch2\Source_Batch_2\Playwright_Students\Fixture\FileDownload