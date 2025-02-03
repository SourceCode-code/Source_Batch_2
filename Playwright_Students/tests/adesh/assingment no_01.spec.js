test("verify right click function",async({page})=>{
    //visit website
    await page.goto("https://demoqa.com/buttons")
    //single dynamic click
    await page.locator('[class="mt-4"].botton').nth(1).click()
    await page.waitForSelector('[id="dynamicClickMessage"]')
    await page.waitForTimeout(2000)
    await expect(page.locator('[id="dynamicClickMessage"]')).toContainText("You have done a dynamic click")


})