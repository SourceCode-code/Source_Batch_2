const {test,expect}= require("@playwright/test")

test("verify  js alerts",async({page})=>{

//visit
await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")

//click on btn
await page.locator('[id="button4"]').click()
// verify alert
page.on("dialog",async (simplealert)=>{
    await simplealert.message()
    await expect (simplealert.message()).toContain("Press a button!")
    await simplealert.accept()
    console.log(simplealert.message())
})

await page.waitForTimeout(5000)
let text=await page.locator('[id="confirm-alert-text"]').textContent()
await expect(text).toContain("You pressed OK!")


})









