const {test,expect} = require('@playwright/test')

test('Verigy the architecture of playwright',async({browser})=>{
    const Context = await browser.newContext()
    const page = await browser.newPage()

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    
})