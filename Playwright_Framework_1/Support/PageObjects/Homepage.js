const { test, expect } = require("@playwright/test")
class Homepage {
titleselector = '[href] [class="section-title"] h1'

    //verify the homepage title
    async verifyHomepageTitle(page, Title) {
        await expect(page).toHaveTitle(Title)
    }

    //click on the title to open a page
     async clickONTitle(page,text){
        let titleName=page.locator(this.titleselector)
     }

} 
export const homepage = new Homepage()