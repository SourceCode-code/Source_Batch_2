// verifying saving of cookies and session //


const {test,expect} = require('@playwright/test')

test("Verify Saving of Cookies & session", async({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    let dashboard = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dashboard).toBeVisible
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(dashboard).toContainText("Dashboard")

    await page.context().storageState({ path: "../Playwright_Students/Fixture/Cookies/User1.json" })
})

test("Verify Injecting Cookies & Cache", async({browser})=>{

    const Context = await browser.newContext({storageState : "../Playwright_Students/Fixture/Cookies/User1.json"})
    const page = await Context.newPage()


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    let dashboard = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dashboard).toBeVisible
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(dashboard).toContainText("Dashboard")
})