const { test, expect } = require("@playwright/test")
class Homepage {
    titleselector = '[href] [class="section-title"] h1'

    //verify the homepage title
    async verifyHomepageTitle(page, Title) {
        await expect(page).toHaveTitle(Title)
    }

    // click on heading
    async clickontitle(page, text) {
        let titlename = await page.locator(this.titleselector).count()
        for (let i = 0; i < titlename; i++) {
            let titlename = await page.locator(this.titleselector).nth(i).textContent()
            //console.log(titlename)
            if (text === titlename) {
                console.log(titlename)
                await page.locator(this.titleselector).nth(i).click()
                break
            }
        }
    }

    async clickonTitle(page, text) {
        let titlename = await page.locator(this.titleselector).count()
        for (let i = 0; i < titlename; i++) {
            await page.locator(`[href] [class="section-title"] h1:has-text("${text}")`).click()
            break
        }
    }


}
export const homepage = new Homepage()