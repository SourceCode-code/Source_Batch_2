const{test,expect} =require('@playwright/test')

class Homepage{
titleselector ='[href] [class="section-title"] h1'
    async verifyHomePagetitle(page,title){
        await expect(page).toHaveTitle(title)
    }

    // click on the title to open the page
    async clickOntitle(page){
        let titlename = page.locator(this.titleselector)
    }
}
export const homepage = new Homepage()