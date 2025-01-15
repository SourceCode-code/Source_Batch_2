const { test, expect } = require("@playwright/test")

test("02_Batch2_checkboxes_RadioBtn", async ({ browser }) => {

    const Context = await browser.newContext() //opens a fresher 
    const page = await Context.newPage() // opens a new page 

    // visit the url
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    //verify title of the page 
    await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)")
    //verify the heading above checkbox 
    const divtitle = await page.locator('[class="col-sm-4 col-lg-4 col-md-4"] [class="thumbnail"]').nth(1)
    await expect(divtitle).toContainText("Checkboxe(s)")
    //uncheck option 3 
    await page.locator('[id="checkboxes"] [value="option-3"]').uncheck()
    // step3 :- check in checkbox select option 1 and 4
    await page.locator('[id="checkboxes"] [value="option-1"]').check() // action
    await page.locator('[id="checkboxes"] [value="option-4"]').check()
    //verify checkbox selected for option 1 and 4
    await expect(page.locator('[id="checkboxes"] [value="option-1"]')).toBeChecked() //asseration
    await expect(page.locator('[id="checkboxes"] [value="option-4"]')).toBeChecked()
    // step5 :- unselect checbox 4 and verify its unselected
    await page.locator('[id="checkboxes"] [value="option-4"]').uncheck()
    await expect(page.locator('[id="checkboxes"] [value="option-4"]')).not.toBeChecked()

    // step 6 :- in checkbox select option 3
    await page.locator('[id="checkboxes"] [value="option-3"]').check()
    await expect(page.locator('[id="checkboxes"] [value="option-3"]')).toBeChecked()
    // step7 :- verify checkbox selected for option 1 and 3
    await expect(page.locator('[id="checkboxes"] [value="option-1"]')).toBeChecked()
    await expect(page.locator('[id="checkboxes"] [value="option-3"]')).toBeChecked()

    // step 8 :- uncheck all the checkboxs
    await page.locator('[id="checkboxes"] [value="option-3"]').uncheck()
    await page.locator('[id="checkboxes"] [value="option-1"]').uncheck()
})