const { test, expect } = require("@playwright/test")
class ContactusPage {
    inputfeildslector = '[id="contact_form"] [class="feedback-input"]'
    resetbtnselector = '[class="contact_button"][type="reset"]'
    sumbitbtnselector = '[class="contact_button"][type="submit"]'
    successmessage = '[id="contact_reply"] h1'



    //enter text into input feild
    //this is used to enter text in input feild on contact us page 
    // parameter for this function represent 
    //page -->page , inputname --> placeholder of the input feild , text --> text to enter 
    async enterTextinInputFeild(page, inputname, text) {
        await page.locator(`[id="contact_form"] [class="feedback-input"][placeholder="${inputname}"]`).fill(text)
    }

    //verify the input value in inputbox

    async verifyInputvalueinTextbox(page, inputname, text) {
        await expect(page.locator(`[id="contact_form"] [class="feedback-input"][placeholder="${inputname}"]`)).toHaveValue(text)
    }


    //verify sumbit btn 
    async verifySumbitbtn(page) {
        await page.locator(this.sumbitbtnselector).click()
    }

    //
    async verifySuccessmessage(page, Message) {
        let text = await page.locator(this.successmessage).textContent()
        await expect(text).toContain(Message)
    }
}
export const contactusPage = new ContactusPage()

