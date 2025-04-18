const {test,expect} = require('@playwright/test')


test('File Upload Functionality', async({page})=>{

    // step 1 :- visit  the URL of the webpage
    await page.goto("https://webdriveruniversity.com/File-Upload/index.html")

    // step 2 :- verify the heading of the webpage
    // await expect(page).toHaveTitle("WebdriverUniversity.com (File Upload)")

    // step 3 :- click on the choose file button 
    await page.locator("#myFile").setInputFiles('../playwright/Fixture/Fileuploaddata/AtharvaResume.pdf')
    
    page.on("dialog", async(alert1)=>{

        await expect(alert1.message()).toContain("Your file has now been uploaded!")
        await alert1.accept()
    })

    await page.locator('[id="submit-button"]').click()
    await expect(page.url()).toContain("https://webdriveruniversity.com/File-Upload/index.html?filename=AtharvaResume.pdf")
})

// --------------------------------------download-functionality-below-----------------------------------------//

test('Download Functionality', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto('https://letcode.in/file')

    const downloadPromise = await page.waitForEvent("download")

    await page.locator('[id="pdf"]').click()
    const download = await downloadPromise

    await download.saveAs("../playwright/Fixture/Fileuploaddata/Download1.pdf")
})