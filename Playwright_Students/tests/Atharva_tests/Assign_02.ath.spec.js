const {test,expect} = require('@playwright/test')

test("Test the functionality of the CheckBox and RadioButton", async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()


    //Visit the given url//
    await page.goto('https://letcode.in/radio')

    //verify the Heading  of the WebPage//
    await expect(page).toHaveTitle('Radio & Checkbox')
    //verify the text above the radio button 
    await page.locator('')

    //select either one of the radiobuttons//


    //select 

    
})