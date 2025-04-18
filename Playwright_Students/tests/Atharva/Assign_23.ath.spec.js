const {test, expect} = require('@playwright/test')

test("Test the static dropdown", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')

    await page.locator('[id="dropdowm-menu-1"]').selectOption("JAVA")
    await expect(page.locator('[id="dropdowm-menu-1"]')).toHaveValue("java")

    await page.locator('[id="dropdowm-menu-1"]').selectOption("Python")
    await expect(page.locator('[id="dropdowm-menu-1"]')).toHaveValue("python")

})


test("Test dynamic dropdown", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/") 

    await expect(page).toHaveTitle("Practice Page") 

    await page.locator('[id="autocomplete"]').fill("ind")

    await page.waitForSelector('[id="ui-id-1"]')

    let Ops = await page.locator('[class="ui-menu-item"] div').count()
    console.log(Ops)
    for (let i=0; i< Ops; i++){
        let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent()
        console.log(text)
        if (text === "India"){
            await page.locator('[class="ui-menu-item"] div').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)
    await expect(page.locator('[id="autocomplete"]')).toHaveValue("India")
}) 


test("verify alerts, pop-ups", async({page})=>{

   

    await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")

    await page.locator('[id="button4"]').click()
    
    page.on("dialog", async(simalert)=>{
        await simalert.message()
        await expect(simalert.message()).toContain("Press a button!")
        await simalert.accept()
        console.log(simalert.message())
    })

    await page.waitForTimeout(5000)
    let text1 = await page.locator('[id="confirm-alert-text"]').textContent()
    await expect(text1).toContain("You pressed OK!")
})

