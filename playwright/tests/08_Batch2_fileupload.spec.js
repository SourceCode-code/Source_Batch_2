const { test, expect } = require("@playwright/test")
const exp = require("constants")

test("Verify the upload functionality in playwright", async ({ page }) => {

    //visit
    await page.goto("https://webdriveruniversity.com/File-Upload/index.html")
    //upload the file
    //playwright\Fixture\Fileuploaddata\SiddhantResume.pdf
    await page.locator("#myFile").setInputFiles('../playwright/Fixture/Fileuploaddata/SiddhantResume.pdf')

    page.on("dialog", async (alert) => {
        await expect(alert.message()).toContain("Your file has now been uploaded!")
        await alert.accept()
    })

    await page.locator('[id="submit-button"]').click()
    await expect(page.url()).toContain("https://webdriveruniversity.com/File-Upload/index.html?filename=SiddhantResume.pdf")


})



