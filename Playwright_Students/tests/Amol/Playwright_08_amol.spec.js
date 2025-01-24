const {test,expect}=require("@playwright/test")

test ("File upload handling in playwright",async({page})=>{
    await page.goto("https://webdriveruniversity.com/File-Upload/index.html")

    await page.locator('[id="myFile"]').setInputFiles('../Playwright_Students/Fixture/Fileupload/Amol Jadhav.pdf')

    page.on("dialog",async(click)=>{
        await expect(click.message()).toContain("Your file has now been uploaded!")
        await click.accept()
    })
    await page.locator('[id="submit-button"]').click()
    await expect(page.url()).toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=Amol+Jadhav.pdf')
})



test ("multiple File upload handling in playwright",async({page})=>{

    let file1 = '../Playwright_Students/Fixture/Fileupload/Amol Jadhav.pdf'
    let file2 = '../Playwright_Students/Fixture/Fileupload/It Domain PDF.pdf'

  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

  await page.locator('[id="filesToUpload"]').setInputFiles([file1,file2]) // here we have to add in Array...

  await page.waitForTimeout(4000)

  let forf1= await page.locator('[id="fileList"] li:nth-child(1)').textContent()
  await expect(forf1).toContain("Amol Jadhav.pdf")

  let forf2= await page.locator('[id="fileList"] li:nth-child(2)').textContent()
  await expect(forf2).toContain("It Domain PDF.pdf")

  // for removing purpose
  await page.locator('[id="filesToUpload"]').setInputFiles([]) // here we have to add in Array...

  await page.waitForTimeout(4000)

  let nofile= await page.locator('[id="fileList"] li').textContent()
  await expect(nofile).toContain("No Files Selected")
  

})

