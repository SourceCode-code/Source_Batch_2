const { test, expect, request } = require("@playwright/test")
let token //undefined
test.beforeAll(async () => {
    const api = await request.newContext()
    const response = await api.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: {
            "userEmail": "john2k19wick@gmail.com",
            "userPassword": "vaibhavS@95"
        }
    })
    expect(response.ok()).toBeTruthy()
    const loginresponse = await response.json()

    token = loginresponse.token
    console.log(token)

})


test("verify stubing of token using api to skip login flow", async ({ page }) => {
    page.addInitScript(value => {
        window.localStorage.setItem("token", value)
    }, token)


await page.goto("https://rahulshettyacademy.com/client")
await page.waitForTimeout(4000)
// await expect(page.locator('[class="left mt-1"] h3 ')).toContain("Automation")

})


