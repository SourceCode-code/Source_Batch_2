const {test,expect}=require('@playwright/test')
//mouse Actions
// click
//double click 
// right click 
// hover 
test("verify dynamic Click", async ({ page }) => {
    //visit the website 
    await page.goto("https://demoqa.com/buttons")

    await page.locator('[class="mt-4"] button').last().click()
    await page.waitForSelector('[id="dynamicClickMessage"]')// when u clinck on button it takes littlebit time to display thats why wait for locator after click action
    await page.waitForTimeout(2000)
    await expect(page.locator('[id="dynamicClickMessage"]')).toContainText("You have done a dynamic click")

})

test("verify right click function",async({page})=>{
     //visit the website 
     await page.goto("https://demoqa.com/buttons")
     await page.locator('[class="mt-4"] button').nth(0).click({button:'right'})
     await page.waitForSelector('[id="rightClickMessage"]')
     await page.waitForTimeout(3000)
     await expect(page.locator('[id="rightClickMessage"]')).toContainText("You have done a right click")
  
})

test("verify double click function",async({page})=>{
    
    await page.goto("https://demoqa.com/buttons")
    await page.locator('button[id="doubleClickBtn"]').dblclick() //.click().click()
    await page.waitForSelector('[id="doubleClickMessage"]')
    await page.waitForTimeout(2000)
    await expect(page.locator('[id="doubleClickMessage"]')).toContainText("You have done a double click")
})


//keyboard actions 
//pressing the key 


// test("verify keyboard action in playwright",async({page})=>{

//     await page.goto('https://gotranscript.com/text-compare')
//     // to press any key page dn key 
//     // await page.keyboard.press("PageDown")
//     //enetr text 
//     await page.locator('[name="text1"]').fill("I am Learning PLaywright ")
//     // select and copy 
//     await page.keyboard.press('Control+A')
//     await page.keyboard.press('Control+C')
//     //
//     // await page.locator('[name="text2"]').click()
//     await page.keyboard.press("Tab")
//     await page.keyboard.press('Control+V')
// })

