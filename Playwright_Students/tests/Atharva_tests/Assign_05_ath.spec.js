const {test,expect} = require('@playwright/test')
const Kdata = require('../../Fixture/TestData/TestData3.json')

Kdata.keydata.forEach((el)=>{
    test(`Test Static DropDown for ${el.title2}`, async({ page}) => {
        
        // step 1 :- visit the URL 
        await page.goto(el.url2)

        // step 2 :- verify the title of the Webpage
        await expect(page).toHaveTitle(el.title2)

        // step 3 :- select Apple option from dropdown
        await page.locator('[id="fruits"]').selectOption(el.fruit1)
        // asserting the selected option dynamically
        await expect(page.locator('[id="fruits"]')).toHaveValue(el.value1)
        // asserting the text after the option is selected
        let txtapp = await page.locator('[class="notification is-success"]').textContent()
        await expect(txtapp).toContain(el.txtapple)

        // step 4 :- selecting Mango option from dropdown
        await page.locator('[id="fruits"]').selectOption(el.fruit2)
        // asserting the selected option dynamically
        await expect(page.locator('[id="fruits"]')).toHaveValue(el.value2)
        // asserting the text after the option is selected
        let txtMan = await page.locator('[class="notification is-success"]').textContent()
        await expect(txtMan).toContain(el.txtMang)

        // step 5 :- select orange option from dropdown
        await page.locator('[id="fruits"]').selectOption(el.fruit3)
        // asserting the selected option
        await expect(page.locator('[id="fruits"]')).toHaveValue(el.value3)
        // asserting the text after the option is selected
        let Ortxt = await page.locator('[class="notification is-success"]').textContent()
        await expect(Ortxt).toContain(el.txtOr)

        // step 6 :- select Banana option 
        await page.locator('[id="fruits"]').selectOption(el.fruit4)
        // asserting the selected option
        await expect(page.locator('[id="fruits"]')).toHaveValue(el.value4)
        // asserting the text after the selected option
        let btxt = await page.locator('[class="notification is-success"]').textContent()
        await expect(btxt).toContain(el.txtB)

        // step 7 :- select pineapple
        await page.locator('[id="fruits"]').selectOption(el.fruit5)
        // asserting the selected option 
        await expect(page.locator('[id="fruits"]')).toHaveValue(el.value5)
        // asserting the text after the selected option
        let ptext = await page.locator('[class="notification is-success"]').textContent()
        await expect(ptext).toContain(el.txtPi)
    })
})

