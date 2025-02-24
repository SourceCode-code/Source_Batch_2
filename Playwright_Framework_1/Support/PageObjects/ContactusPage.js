const { test, expect } = require("@playwright/test")
class ContactusPage {
    inputfeildslector = '[id="contact_form"] [class="feedback-input"]'


    //enter text into input feild
    //this is used to enter text in input feild on contact us page 
    // parameter for this function represent 
    //page -->page , inputname --> placeholder of the input feild , text --> text to enter 
    async enterTextinInputFeild(page, inputname, text) {
        await page.locator(`[id="contact_form"] [class="feedback-input"][placeholder="${inputname}"]`).fill(text)
    }

}
export const contactusPage = new ContactusPage()

