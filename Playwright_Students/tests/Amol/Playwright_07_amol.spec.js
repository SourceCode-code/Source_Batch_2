const{test,expect}=require("@playwright/test")

test("JavaScript Confirm Box:- verify js alerts",async({page})=>{

    await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")

    await page.locator('[id="button4"]').click()

    page.on("dialog",async (simplealert)=>{
        await simplealert.message() 
        await expect(simplealert.message()).toContain("Press a button!")
        await simplealert.accept()
        console.log(simplealert.message())
    })
    await page.waitForTimeout(5000)
    let text= await page.locator('[id="confirm-alert-text"]').textContent()
    await expect(text).toContain("You pressed Cancel!")
    

})

test("JavaScript Alert:- verify js alerts",async({page})=>{

    await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")

    await page.locator('[id="button1"]').click()

    page.on("dialog",async (simplealert)=>{
        await simplealert.message() 
        await expect(simplealert.message()).toContain("I am an alert box!")
        await simplealert.accept()
        console.log(simplealert.message())
    })  

})

test("Modal Popup:- verify js alerts",async({page})=>{

    await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")

    await page.locator('[id="button2"]').click()

    page.on("dialog",async (simplealert)=>{
        await simplealert.message() 
        await expect(simplealert.message()).toContain("We can inject and use JavaScript code if all else fails! Remember always try to use WebDriver Library method(s) first such as WebElement.click(). (The Selenium development team have spent allot of time developing WebDriver functions etc).")
        await simplealert.dismiss()
        //console.log(simplealert.message())
    })  

})

test (" the internate:- Js alert",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.locator('[onclick="jsAlert()"]').click()

    page.on("dialog",async(dialog)=>{
        await dialog.message()
        await expect(dialog.message()).toContain("I am a JS Alert")
        await dialog.accept()
    })
    await page.waitForTimeout(5000)
    let check = await page.locator('[id="result"]').textContent()
    await expect(check).toContain("You successfully clicked an alert")
})

test(" the internate:- Click for JS Confirm",async({page})=>{
  
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.locator('[onclick="jsConfirm()"]').click()

    page.on("dialog",async(dialog)=>{
        await dialog.message()
        await expect(dialog.message()).toContain("I am a JS Confirm")
        await dialog.dismiss()
    })
    await page.waitForTimeout(3000)
    let check = await page.locator('[id="result"]').textContent()
    await expect(check).toContain("You clicked: Cancel")
    
})

test(" the internate:- I am a JS prompt",async({page})=>{
  
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.locator('[onclick="jsPrompt()"]').click()

    page.on("dialog",async(dialog)=>{
        await dialog.message()

        await expect(dialog.message()).toContain("I am a JS Confirm")
        await dialog.type("Amol")
       // await (dialog.defaultValue()).toContain("Amol")
        await dialog.accept("Amol")
    })
    await page.waitForTimeout(3000)
    let check = await page.locator('[id="result"]').textContent()
    await expect(check).toContain("You entered: Amol") // 
    
})