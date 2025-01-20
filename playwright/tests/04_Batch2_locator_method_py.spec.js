//locotor--> css
const { test, expect } = require("@playwright/test")

//getbyAltText()--> alt atrribute value 
//getByLabel()--> get locotor by label name 
// getByPlaceholder --> gets the place holder 
//getByRole --> gets the selector by role 
//getByTestId --> data test id attribute 
//getByText --> texts 
// getByTitle()--> get the selector by title value 
//.locator


test("verify getbyAltText selector", async ({ page }) => {

    await page.goto("https://letcode.in/test#google_vignette")
    let ele = await page.getByAltText("letcode")
    await expect(ele).toBeVisible()
    await expect(ele).toHaveAttribute("src", "../../assets/logo.png")
    await expect(ele).toHaveAttribute("alt", "letcode")

})


test("verify getByLabel selector", async ({ page }) => {

    await page.goto("https://letcode.in/test#google_vignette")
    let ele = await page.getByLabel("main navigation")

    await expect(ele).toBeVisible()
    // await expect(ele).toHaveAttribute("src","../../assets/logo.png")
    // await expect(ele).toHaveAttribute("alt","letcode")

})


test("verify getByPlaceholder selector", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    await page.getByPlaceholder("First Name").fill("siddhant")
    await expect(page.getByPlaceholder("First Name")).toHaveValue("siddhant")
})


test("verify getByRole selector", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    await page.getByRole("checkbox",{name:"Option 1"}).check()
    await page.waitForTimeout(2000)
    await expect(page.getByRole("checkbox",{name:"Option 1"})).toBeChecked()
})

test("verify getByText selector", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
   let ele= await page.getByText("WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))")
    await page.waitForTimeout(2000)
    await expect(ele).toBeVisible()
})

test("verify getByTitle selector", async ({ page }) => {

    await page.goto("https://letcode.in/test#google_vignette")
   let ele= await page.getByTitle("Koushik Chatterjee")
    await page.waitForTimeout(2000)
    await expect(ele).toBeVisible()
})