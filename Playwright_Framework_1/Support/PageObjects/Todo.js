const {test,expect} = require("@playwright/test")
const data = require("../../Fixtures/testdata.json")

class Todo{
nameselector = '[href] [class="section-title"] h1'

    async verifyToDopageTitle(page,Text){
        await expect(page).toHaveTitle(Text)
    }

    async ClickonTitle(page,Text){
        let TitleName = await page.locator(this.nameselector).count()
        for (let i=0; i < TitleName; i++){
            await page.locator(`[href] [class="section-title"] h1:has-text("${Text}")`).click()
            break
        }
    }

    async entertaskinlist(page, TEXTval){
        await page.locator(`[id="container"] input`).fill(TEXTval)
        await page.keyboard.press("Enter")
    }

    

}

export const toDopage = new Todo()
