const {test,expect}=require("@playwright/test")

test("verify file download",async({page})=>{

await page.goto("https://letcode.in/file")

const downloadPromise = page.waitForEvent("download")

await page.locator('[id="pdf"]').click()
const download = await downloadPromise

//wait for downlaod to happen and save it in a specif 
await download.saveAs("../playwright/Fixture/FileDownload/Download1.pdf")



})