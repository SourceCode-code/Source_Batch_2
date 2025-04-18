const {test,expect,request} = require("@playwright/test")
let token
test.beforeAll(async () =>{ 
    const api = await request.newContext() 
    const response = await api.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data:{
            "userEmail":"rickjon917@gmail.com",
            "userPassword":"Rixty$78$"
        }
    })
    // expect(response.ok()).toBeTruthy()
    const loginResp = await response.json()

    token = loginResp.token
    console.log(token)

})

test("Verify stubing of token using api to skip login flow", async({page})=>{

    page.addInitScript(value => {
        window.localStorage.setItem("token", value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")
    await page.waitForTimeout(4000)
})

test("Test the Order Place functionality", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1 :- loggin in the app
    await page.goto('https://rahulshettyacademy.com/client')

    // step 2:- fill in the credentials
    await page.locator('[id="userEmail"]').fill('rickjon917@gmail.com')
    await expect(page.locator('[id="userEmail"]')).toHaveValue('rickjon917@gmail.com')

    // 
    await page.locator('[id="userPassword"]').fill('Ricjon_9')
    await expect(page.locator('[id="userPassword"]')).toHaveValue('Ricjon_9')

   let heading =  await page.locator('[type="submit"]').click()
   await page.waitForTimeout(2000)
   await expect(heading).toEqual("Home |")































































})
