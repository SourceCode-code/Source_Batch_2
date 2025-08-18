const{test,expect} = require("@playwright/test")

test("Test the data", async({page})=>{

    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=5440288752605902930&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301798&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")

    await page.locator('[href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]').click()


})