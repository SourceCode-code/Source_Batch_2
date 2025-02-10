const { test, expect } = require("@playwright/test")

test("verify saving of cookiesand session", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    let dashboardel = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dashboardel).toBeVisible()
    await expect(dashboardel).toHaveText("Dashboard")
    await expect(page).toHaveTitle("OrangeHRM")

    // to save cookies and cahce 
    await page.context().storageState({ path: "../playwright/Fixture/Cookies/User.json" })

})


test("verify injecting the cookies and cahce", async ({ browser }) => {

    let Context = await browser.newContext({ storageState: "../playwright/Fixture/Cookies/User.json" })
    let page = await Context.newPage()


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let dashboardel = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dashboardel).toBeVisible()
    await expect(dashboardel).toHaveText("Dashboard")
    await expect(page).toHaveTitle("OrangeHRM")



})

//directory -->

/** 
 * 1 browser -->browser 
 * 
 * 2 context --> data --> fresh data //    --> user   
 * old context --> contiune with storage
 * 
 * 3 page --> tab
 * 
 *  
 */