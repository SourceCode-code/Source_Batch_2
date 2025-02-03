const {test,expect} = require('@playwright/test')
const Kdata = require("../../Fixture/TestData/TestData3.json")
// const btndata = require('../../Fixture/TestData/TestData2.json')

// btndata.formdata.forEach((data,radioOption)=>{
//     test(`Test radiobtn & checkbox`, async ({page}) => {

//         await page.goto("https://letcode.in/radio")
//         await page.locator(`input[type="radio"][value="${radioOption}"]`).check()
// })

// })

test('Drag and drop functionality', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/Actions/index.html")

    let dragel = await page.locator('[id="draggable"]')

    let dropel = await page.locator('[id="droppable"]')

    let css = await page.locator('[id="droppable"] p')

    //  await dragel.dragTo(dropel)
    await expect(css).toHaveAttribute('style="background-color: rgb(244, 89, 80); height: 100%;"')
    
})

// test ('Double-Click functionality', async({browser})=>{

//     const Context = await browser.newContext()
//     const page = await Context.newPage()

//     await page.goto("https://webdriveruniversity.com/Actions/index.html")

//     await page.locator('[id="double-click"]').dblclick()
// })


// dynamic test for keyboard //
test('Dynamic Keyboard functionality', async({page})=>{

    await page.goto(Kdata.keydata[0].url)
    await expect(page).toHaveTitle(Kdata.keydata[0].title)
    await page.locator('[name="text1"]').fill(Kdata.keydata[0].text)
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.locator('[name="text2"]').click()
    await page.keyboard.press("Control+V")

})

// Dynamic test for FILE UPLOAD//

test('File Upload functionality', async({page})=>{
    
    await page.goto(Kdata.keydata[1].url)
    await page.locator("#myFile").setInputFiles(Kdata.keydata[1].path)
    
    page.on("dialog", async({Alert})=>{
        await expect(Alert.message()).toContain(Kdata.keydata[1].alert)
        await Alert.accept()
    })
    await page.locator('[id="submit-button"]').click()
    await expect(page.url()).toContain(Kdata.keydata[1].url1)

})
//Playwright_Students\Fixture\FileUpload\AtharvaResume.pdf