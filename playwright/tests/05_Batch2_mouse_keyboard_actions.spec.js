const {test,expect}=require('@playwright/test')
//mouse Actions
// click
//double click 
// right click 
// hover 
test("verify dynamic Click", async ({ page }) => {
    //visit the website 
    await page.goto("https://demoqa.com/buttons")
    //perform a single dynamic click
    await page.locator('[class="mt-4"] button').nth(1).click()
    await page.waitForSelector('[id="dynamicClickMessage"]')
    await page.waitForTimeout(2000)
    //asseration to validate the click 
    await expect(page.locator('[id="dynamicClickMessage"]')).toContainText("You have done a dynamic click")

})

test("verify right click function",async({page})=>{
     //visit the website 
    await page.goto("https://demoqa.com/buttons")
    //perform a right click
    await page.locator('[id="rightClickBtn"]').click({button:'right'})
    await page.waitForSelector('[id="rightClickMessage"]')
    await page.waitForTimeout(2000)
    //asseration to validate the click 
    await expect(page.locator('[id="rightClickMessage"]')).toContainText("You have done a right click")

})

test("verify double click function",async({page})=>{
    //visit the website 
   await page.goto("https://demoqa.com/buttons")
   //perform a double click
   await page.locator('[id="doubleClickBtn"]').dblclick()
   await page.waitForSelector('[id="doubleClickMessage"]')
   await page.waitForTimeout(2000)
   //asseration to validate the click 
   await expect(page.locator('[id="doubleClickMessage"]')).toContainText("You have done a double click")

})


//keyboard actions 
//pressing the key 


test("verify keyboard action in playwright",async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')
    // to press any key page dn key 
    // await page.keyboard.press("PageDown")
    //enetr text 
    await page.locator('[name="text1"]').fill("I am Learning PLaywright ")
    // select and copy 
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    //
    // await page.locator('[name="text2"]').click()
    await page.keyboard.press("Tab")
    await page.keyboard.press('Control+V')
})

