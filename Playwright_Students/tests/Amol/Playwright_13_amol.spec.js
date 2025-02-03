const { test, expect } = require("@playwright/test")
const { waitForDebugger } = require("inspector")

test("UIVISION Frames:- Frames handling ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://ui.vision/demo/webtest/frames/")

    await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]').fill("Amol")
    await expect(page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]')).toHaveValue("Amol")
    await page.waitForTimeout(3000)

    await page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]').fill("Kantilal")
    await expect(page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]')).toHaveValue("Kantilal")
    await page.waitForTimeout(3000)

    await page.frameLocator('[src="frame_4.html"]').locator('[name="mytext4"]').fill("Jadhav")
    await expect(page.frameLocator('[src="frame_4.html"]').locator('[name="mytext4"]')).toHaveValue("Jadhav")
    await page.waitForTimeout(3000)

    await page.frameLocator('[src="frame_3.html"]').locator('[name="mytext3"]').fill("Amol Kantilal jadhav")
    await expect(page.frameLocator('[src="frame_3.html"]').locator('[name="mytext3"]')).toHaveValue('Amol Kantilal jadhav')

    let check1 = await page.frameLocator('[src="frame_3.html"]').frameLocator('[src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').locator('[class="ahS2Le"] div').textContent()
    await expect(check1).toContain("Form Filling Demo Page")

    await page.frameLocator('[src="frame_3.html"]').frameLocator('[src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').locator('[class="nWQGrd zwllIb"] [id="i6"]').check()//.click()
    await expect(page.frameLocator('[src="frame_3.html"]').frameLocator('[src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').locator('[class="nWQGrd zwllIb"] [id="i6"]')).toBeChecked()

})

test("Webdriver Frames", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/IFrame/index.html")
    let check1 = await page.frameLocator('[id="frame"]').locator('[id="nav-title"]').nth(0).textContent()
    await expect(check1).toContain("WebdriverUniversity.com (Page Object Model)")
  
    await page.frameLocator('[id="frame"]').locator('[id="div-main-nav"] ul li:nth-child(3)').click()
    await page.waitForTimeout(3000)

    let check3 = await page.frameLocator('[id="frame"]').locator('[name="contactme"]').textContent()
    await expect(check3).toContain("CONTACT US")

    await page.frameLocator('[id="frame"]').locator('[name="first_name"]').fill("AMOL")
    await expect (page.frameLocator('[id="frame"]').locator('[name="first_name"]')).toHaveValue("AMOL")
    
    await page.frameLocator('[id="frame"]').locator('[name="last_name"]').fill("Jadhav")
    await expect ( page.frameLocator('[id="frame"]').locator('[name="last_name"]')).toHaveValue("Jadhav")

    await page.frameLocator('[id="frame"]').locator('[name="email"]').fill("AMOLJADHAV@gmail.com")
    await expect (page.frameLocator('[id="frame"]').locator('[name="email"]')).toHaveValue("AMOLJADHAV@gmail.com")

    await page.frameLocator('[id="frame"]').locator('[name="message"]').fill("i'll get job in March 1st week")
    await expect (page.frameLocator('[id="frame"]').locator('[name="message"]')).toHaveValue("i'll get job in March 1st week")

    await page.frameLocator('[id="frame"]').locator('[type="submit"]').click()
    await page.waitForTimeout(3000)

    let check4 = await page.frameLocator('[id="frame"]').locator('[id="contact_reply"] h1').textContent()
    await expect(check4).toContain('Thank You for your Message!')

})

test ("Letcode iframe ",async({browser})=>{
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://letcode.in/frame")

    await page.frameLocator('[id="firstFr"]').locator('[name="fname"]').fill("Amol")
    await expect(page.frameLocator('[id="firstFr"]').locator('[name="fname"]')).toHaveValue("Amol")

    await page.frameLocator('[id="firstFr"]').locator('[name="lname"]').fill("Jadhav")
    await expect(page.frameLocator('[id="firstFr"]').locator('[name="lname"]')).toHaveValue("Jadhav")

    await page.frameLocator('[id="firstFr"]').frameLocator('[src="innerFrame"]').locator('[name="email"]').fill('AmolJadhav@gmail.com')
    await expect(page.frameLocator('[id="firstFr"]').frameLocator('[src="innerFrame"]').locator('[name="email"]')).toHaveValue("AmolJadhav@gmail.com")

})








