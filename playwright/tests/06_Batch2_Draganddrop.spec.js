const {test,expect}=require("@playwright/test")

test("verify drag and drop action ",async({page})=>{

//visit 
await page.goto("https://webdriveruniversity.com/Actions/index.html")
//
let dragele= await page.locator('[id="draggable"]')
let dropaele  = await page.locator('[id="droppable"]')
let css = await page.locator('[id="droppable"] p')

// way 1
await dragele.dragTo(dropaele)

await expect(css).toHaveAttribute("style","background-color: rgb(244, 89, 80); height: 100%;")

// way 2 

// await dragele.hover()
// //
// await page.mouse.down()

// // 
// await dropaele.hover()
// //
// await page.mouse.up()

//  await expect(css).toHaveAttribute("style","background-color: rgb(244, 89, 80); height: 100%;")
})