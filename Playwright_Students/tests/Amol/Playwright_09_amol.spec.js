const {test,expect}=require("@playwright/test")

test("download the file by playwright",async({page})=>{
    
    await page.goto('https://letcode.in/file')
    
    const downloaded = page.waitForEvent("download")
    
    await page.locator('[id="xls"]').click()

    const download = await downloaded

    await download.saveAs("../Playwright_Students/Fixture/FileDownload/Download1.xlxs")

})