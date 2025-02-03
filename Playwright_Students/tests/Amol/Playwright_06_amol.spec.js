const{test,expect}=require("@playwright/test")

test("webdriveruniversity:- Verify the drag and drop",async({page})=>{
    
    await page.goto("https://webdriveruniversity.com/Actions/index.html")

    let drag = await page.locator('[id="draggable"]')
    let dropele = await page.locator('[id="droppable"]')
    let final = await page.locator('div[id="droppable"] p')
    
    await drag.dragTo(dropele)
    await expect(final).toHaveAttribute('style',"background-color: rgb(244, 89, 80); height: 100%;")
})

 test ("webdriveruniversity:-hover Action ",async({page})=>{
    
    await page.goto("https://webdriveruniversity.com/Actions/index.html")
     
    let check1=await page.locator('[id="double-click"]').dblclick()

    })

test ("the Internate:- Verify drag and drop ",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop")

    let drag = await page.locator('[id="column-a"]')
    let drop = await page.locator('[id="column-b"]')
    let locationA = await page.locator('div[id="column-a"] header')
    let locationB = await page.locator('div[id="column-b"] header')
    
    await drag.dragTo(drop)

    await expect(locationA).toHaveText("B")
    await expect(locationB).toHaveText("A")

})