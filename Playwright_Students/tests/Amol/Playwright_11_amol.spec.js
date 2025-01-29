const { test, expect } = require('@playwright/test')

test("multiwondows:-Dynamically handle webdriver", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    await page.goto("https://webdriveruniversity.com/")
    await expect(page).toHaveTitle("WebDriverUniversity.com")

    const [contactUspage] = await Promise.all([
        Context.waitForEvent('page'),
        page.locator('[id="contact-us"]').click()
    ])
    await contactUspage.locator('[placeholder="First Name"]').fill("Amol")
    await contactUspage.locator('[placeholder="Last Name"]').fill("Jadhav")
    await contactUspage.locator('[name="email"]').fill("amoljadhav@gmail.com")

    const [clickbuttons] = await Promise.all([
        Context.waitForEvent("page"),
        page.locator('[id="button-clicks"]').click()
    ])
    let check = await clickbuttons.locator('[id="main-header"]').textContent()
    await expect(check).toContain("Lets Get Clicking!")

    const [Radiobuttons] = await Promise.all([
        Context.waitForEvent("page"),
        page.locator('[id="dropdown-checkboxes-radiobuttons"]').click()

    ])
    let verifyRadio = await Radiobuttons.locator('[class="col-sm-4 col-lg-4 col-md-4"]').nth(0).textContent()
    await expect(verifyRadio).toContain("Dropdown Menu(s)")

})

// test("Tools:- Multi windows handling", async ({browser}) => {
//     const Context = await browser.newContext()
//     const page = await Context.newPage()

//     await page.goto("https://demoqa.com/")
//     await page.locator('[id="app"] [class="card mt-4 top-card"] [class="card-body"] h5').nth(0).click()

//     // const [ElemnetButton] = await Promise.all([
//     //    Context.waitForEvent('page'),
//     //     page.locator('[id="app"] [class="card mt-4 top-card"] [class="card-body"] h5').nth(1).click()
//     // ])

//     // let check3 = await ElemnetButton.locator('[id="item-0"]').nth(0).textContent()
//     // await expect(check3).toContain("Text Box")
//})