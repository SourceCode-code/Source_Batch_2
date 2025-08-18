const {test, expect} = require('@playwright/test')

test("Verify saving of cookies and cache", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    let dasHel = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dasHel).toBeVisible()
    await expect(page).toHaveTitle("OrangeHRM")


    await page.context().storageState({path : "../../Playwright_Students/Fixture/Cookies/User2.json"})
})


test("Verify login by injecting the cookies", async({browser})=>{

    let Context = await browser.newContext({storageState:"../../Playwright_Students/Fixture/Cookies/User2.json"})
    let page = await Context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let dshEl = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dshEl).toBeVisible()
    await expect(page).toHaveTitle("OrangeHRM")



})