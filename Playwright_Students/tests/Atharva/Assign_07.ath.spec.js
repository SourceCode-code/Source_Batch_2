const {test, expect} = require("@playwright/test")

// test("Test Iframes", async({browser})=>{

//     const Context = await browser.newContext();
//     const page  = await Context.newPage()

//     await page.goto('https://letcode.in/frame')

//     await page.frameLocator('[id="firstFr"]').locator('[name="fname"]').fill("Skylar")
//     await expect(page.frameLocator('[id="firstFr"]').locator('[name="fname"]')).toHaveValue("Skylar")

//     await page.frameLocator('[id="firstFr"]').locator('[name="lname"]').fill("Mae")
//     await expect(page.frameLocator('[id="firstFr"]').locator('[name="lname"]')).toHaveValue("Mae")

//     await page.frameLocator('[id="firstFr"]').frameLocator('[src="innerFrame"]').locator('[name="email"]').fill("skylarm@gmail.com")
//     await expect(page.frameLocator('[id="firstFr"]').frameLocator('[src="innerFrame"]').locator('[name="email"]')).toHaveValue("skylarm@gmail.com")
// })

test('Test Iframes', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/IFrame/index.html")

    let tisframe= await page.frameLocator('[id="frame"]').locator('[id="nav-title"]').nth(0).textContent()
    await expect(tisframe).toContain("WebdriverUniversity.com (Page Object Model)")

    let navbar = await page.frameLocator('[id="frame"]').locator('[id="div-main-nav"] ul li:nth-child(3)').click()
    await page.waitForTimeout(2000)

    let cntcpg= await page.frameLocator('[id="frame"]').locator('[name="contactme"]').textContent()
    await expect(cntcpg).toContain("CONTACT US")

    await page.frameLocator('[id="frame"]').locator('[name="first_name"]').fill("Skylar")
    await expect(page.frameLocator('[id="frame"]').locator('[name="first_name"]')).toHaveValue("Skylar")

    await page.frameLocator('[id="frame"]').locator('[name="first_name"]').fill("Skylar")
    await expect(page.frameLocator('[id="frame"]').locator('[name="first_name"]')).toHaveValue("Skylar")

    await page.frameLocator('[id="frame"]').locator('[name="last_name"]').fill("Mae")
    await expect(page.frameLocator('[id="frame"]').locator('[name="last_name"]')).toHaveValue("Mae")

    await page.frameLocator('[id="frame"]').locator('[name="email"]').fill("sklyar@gmail.com")
    await expect(page.frameLocator('[id="frame"]').locator('[name="email"]')).toHaveValue("sklyar@gmail.com")

    await page.frameLocator('[id="frame"]').locator('[name="message"]').fill("Hello, I am Skylar")
    await expect(page.frameLocator('[id="frame"]').locator('[name="message"]')).toHaveValue("Hello, I am Skylar")

    let sbmtbtn = await page.frameLocator('[id="frame"]').locator('[class="contact_button"][type="submit"]').textContent()
    await expect(sbmtbtn).toContain("Thank You for your Message!")

    
})