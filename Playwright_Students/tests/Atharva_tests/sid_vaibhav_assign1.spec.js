const {test,expect} = require('@playwright/test')


test('test the demo webpage of QA', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1-:- verify the url of the website
    await page.goto('https://demoqa.com/')

    // verify the  heading of the website
    await expect(page).toHaveTitle('DEMOQA')

    // step3:- click on the ELEMENTs button 
    await page.locator('[d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]').click()
    // assert the button is clicked and the page of elements is displayed
    let eleclick = await page.locator('[class="col-12 mt-4 col-md-6"]').textContent()
    console.log(eleclick)
    await expect(eleclick).toContain("Please select an item from left to start practice")

    // step 4:- click on the checkbox button and validate it 
    await page.locator('[class="btn btn-light"][id="item-1"]').click()

    // asserting that checkbox is clicked 
    let checkbutton = await page.locator('[class="text-center"]').textContent()
    console.log(checkbutton)
    await expect(checkbutton).toContain('Check Box')

    
})