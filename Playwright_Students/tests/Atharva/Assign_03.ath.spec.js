// 1 create mannual testcase and automated for 

// https://letcode.in/dropdowns





const {test,expect} = require('@playwright/test')

test('Test the Static Drop-downs', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step1:- verify the url of the webpage
    await page.goto('https://letcode.in/dropdowns')

    // step2:- verify the heading of the webpage
    await expect(page).toHaveTitle('LetCode with Koushik')

    // // step3:- verify the heading above the dropdown menu
    // await page.locator('class="label"').selectOption('')

    // step4:- select Apple option from the dropdown
    await page.locator('[id="fruits"]').selectOption('Apple')
    // verifying if the option has been selected or not 
    await expect(page.locator('[id="fruits"]')).toHaveValue('0')
    // verifying the text when the option is selected
    let TextApple = await page.locator('[class="notification is-success"]').textContent()
    await expect(TextApple).toContain('You have selected Apple')

    // step5:- selecting Mango option from the dropdown
    await page.locator('[id="fruits"]').selectOption('Mango')
    // verifying that the option Mango has been selected or not 
    await expect(page.locator('[id="fruits"]')).toHaveValue("1")
    // verifying the text when the option mango is selected
    let TextMango =await page.locator('[class="notification is-success"]').textContent()
    await expect(TextMango).toContain('You have selected Mango')

    // step6:- selecting orange option from the dropdown
    await page.locator('[id="fruits"]').selectOption("Orange")
    //verifying the selected option 
    await expect(page.locator('[id="fruits"]')).toHaveValue("2")
    // verifying the text when the option orange is selected
    let textOrange = await page.locator('[class="notification is-success"]').textContent()
    await expect(textOrange).toContain('You have selected Orange')

    //step7:- selecting banana option from dropdown
    await page.locator('[id="fruits"]').selectOption("Banana")
    // verifying that the option banana has been selected or not
    await expect(page.locator('[id="fruits"]')).toHaveValue("3")
    // verifying the text when the option banana is selected
    let textBanana = await page.locator('[class="notification is-success"]').textContent()
    await expect(textBanana).toContain('You have selected Banana')

    // step8:- selecting Pine Apple option from the drowpdown
    await page.locator('[id="fruits"]').selectOption("Pine Apple")
    // verifying the selected option
    await expect(page.locator('[id="fruits"]')).toHaveValue("4")
    // verifying the selected text 
    let textPine = await page.locator('[class="notification is-success"]').textContent()
    await expect(textPine).toContain('You have selected Pine Apple')
})

test('Test for SuperHeroes DropDown', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1 :- verify the url of the webpage
    await page.goto('https://letcode.in/dropdowns')

    // step 2 :- verify the heading of the webdpage
    await expect(page).toHaveTitle('LetCode with Koushik')

    // step 3 :-selecting Ant-Man option from superHero dropdown
    await page.locator('[id="superheros"]').selectOption("Ant-Man")
    // verifying the selected option
    await expect(page.locator('[id="superheros"]')).toHaveValue("am")
    // verifying the text after the selected option 
    let antText = await page.locator('[class="notification is-success"]').textContent()
    await expect(antText).toContain("You have selected Ant-Man")

    // step4:-select Aquaman option from the dropdown
    await page.locator('[id="superheros"]').selectOption("Aquaman")
    // verifying the selected option
    await expect(page.locator('[id="superheros"]')).toHaveValue("aq")
    // verify the selected text
    let aqText = await page.locator('[class="notification is-success"]').textContent()
    await expect(aqText).toContain('You have selected Aquaman')

    // step 5:- select The Avengers option from the dropdown
    await page.locator('[id="superheros"]').selectOption("The Avengers")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ta")
    //  verifying the selected text
    let taText = await page.locator('[class="notification is-success"]').textContent()
    await expect(taText).toContain('You have selected The Avengers')

    // step 6:- select Batman option from dropdown
    await page.locator('[id="superheros"]').selectOption("Batman")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("bt")
    // verifying the selected text
    let btText = await page.locator('[class="notification is-success"]').textContent()
    await expect(btText).toContain("You have selected Batman")

    // step 7:- select Batwoman option from dropdown
    await page.locator('[id="superheros"]').selectOption("Batwoman")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("bw")
    // verifying the selected text
    let bwText = await page.locator('[class="notification is-success"]').textContent()
    await expect(bwText).toContain("You have selected Batwoman")

    // step 8:- select Black Panther option from dropdown
    await page.locator('[id="superheros"]').selectOption("Black Panther")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("bp")
    // verifying the selected text
    let bpText = await page.locator('[class="notification is-success"]').textContent()
    await expect(bpText).toContain("You have selected Black Panther")


    // step 9:- select Captain America option from dropdown
    await page.locator('[id="superheros"]').selectOption("Captain America")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ca")
    // verifying the selected text
    let caText = await page.locator('[class="notification is-success"]').textContent()
    await expect(caText).toContain("You have selected Captain America")


    // step 10:- select Captain Marvel option from dropdown
    await page.locator('[id="superheros"]').selectOption("Captain Marvel")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("cm")
    // verifying the selected text
    let cmText = await page.locator('[class="notification is-success"]').textContent()
    await expect(cmText).toContain("You have selected Captain Marvel")

    // step 11:- select Daredevil option from dropdown
    await page.locator('[id="superheros"]').selectOption("Daredevil")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("dd")
    // verifying the selected text
    let ddText = await page.locator('[class="notification is-success"]').textContent()
    await expect(ddText).toContain("You have selected Daredevil")

    // step 12:- select Doc Savage option from dropdown
    await page.locator('[id="superheros"]').selectOption("Doc Savage")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ds")
    // verifying the selected text
    let dsText = await page.locator('[class="notification is-success"]').textContent()
    await expect(dsText).toContain("You have selected Doc Savage")
    

    // step 13:- select Doctor Strange option from dropdown
    await page.locator('[id="superheros"]').selectOption("Doctor Strange")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ds")
    // verifying the selected text
    let DsText = await page.locator('[class="notification is-success"]').textContent()
    await expect(DsText).toContain("You have selected Doctor Strange")

    // step 14:- select Elektra option from dropdown
    await page.locator('[id="superheros"]').selectOption("Elektra")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ek")
    // verifying the selected text
    let elText = await page.locator('[class="notification is-success"]').textContent()
    await expect(elText).toContain("You have selected Elektra")

    // step 15:- select Fantatsic Four option from dropdown
    await page.locator('[id="superheros"]').selectOption("Fantastic Four")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ff")
    // verifying the selected text
    let ffText = await page.locator('[class="notification is-success"]').textContent()
    await expect(ffText).toContain("You have selected Fantastic Four")

    // step 16:- select Ghost Rider option from dropdown
    await page.locator('[id="superheros"]').selectOption("Ghost Rider")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("gr")
    // verifying the selected text
    let grText = await page.locator('[class="notification is-success"]').textContent()
    await expect(grText).toContain("You have selected Ghost Rider")
    

    // step 17:- select green lantern option from dropdown
    await page.locator('[id="superheros"]').selectOption("Green Lantern")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("gl")
    // verifying the selected text
    let glText = await page.locator('[class="notification is-success"]').textContent()
    await expect(glText).toContain("You have selected Green Lantern")

    // step 18:- select Guardians of the Galaxy option from dropdown
    await page.locator('[id="superheros"]').selectOption("Guardians of the Galaxy")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("gx")
    // verifying the selected text
    let gxText = await page.locator('[class="notification is-success"]').textContent()
    await expect(gxText).toContain("You have selected Guardians of the Galaxy")


    // step 19:- select hellboy  option from dropdown
    await page.locator('[id="superheros"]').selectOption("Hellboy")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("hb")
    // verifying the selected text
    let hbText = await page.locator('[class="notification is-success"]').textContent()
    await expect(hbText).toContain("You have selected Hellboy")


    // step 20:- select Batman option from dropdown
    await page.locator('[id="superheros"]').selectOption("Incredible Hulk")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ih")
    // verifying the selected text
    let ihText = await page.locator('[class="notification is-success"]').textContent()
    await expect(ihText).toContain("You have selected Incredible Hulk")

    // step 21:- select ironman option from dropdown
    await page.locator('[id="superheros"]').selectOption("Iron Man")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("im")
    // verifying the selected text
    let imText = await page.locator('[class="notification is-success"]').textContent()
    await expect(imText).toContain("You have selected Iron Man")

    // step 22:- select Marvelman option from dropdown
    await page.locator('[id="superheros"]').selectOption("Marvelman")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("mm")
    // verifying the selected text
    let mmText = await page.locator('[class="notification is-success"]').textContent()
    await expect(mmText).toContain("You have selected Marvelman")

    // step 23:- select Robin option from dropdown
    await page.locator('[id="superheros"]').selectOption("Robin")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("rb")
    // verifying the selected text
    let rbText = await page.locator('[class="notification is-success"]').textContent()
    await expect(rbText).toContain("You have selected Robin")

    // step 24:- select the shadow option from dropdown
    await page.locator('[id="superheros"]').selectOption("The Shadow")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ts")
    // verifying the selected text
    let tsText = await page.locator('[class="notification is-success"]').textContent()
    await expect(tsText).toContain("You have selected The Shadow")

    // step 25:- select Spiderman option from dropdown
    await page.locator('[id="superheros"]').selectOption("Spider-Man")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("sm")
    // verifying the selected text
    let spText = await page.locator('[class="notification is-success"]').textContent()
    await expect(spText).toContain("You have selected Spider-Man")

    // step 26:- select supergirl option from dropdown
    await page.locator('[id="superheros"]').selectOption("Supergirl")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("sg")
    // verifying the selected text
    let sgText = await page.locator('[class="notification is-success"]').textContent()
    await expect(sgText).toContain("You have selected Supergirl")

    // step 27:- select Superman option from dropdown
    await page.locator('[id="superheros"]').selectOption("Superman")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("sm")
    // verifying the selected text
    let SuText = await page.locator('[class="notification is-success"]').textContent()
    await expect(SuText).toContain("You have selected Superman")

    // step 28:- select Thor option from dropdown
    await page.locator('[id="superheros"]').selectOption("Thor")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("th")
    // verifying the selected text
    let thText = await page.locator('[class="notification is-success"]').textContent()
    await expect(thText).toContain("You have selected Thor")

    // step 29:- select Wolverine option from dropdown
    await page.locator('[id="superheros"]').selectOption("Wolverine")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("wv")
    // verifying the selected text
    let wvText = await page.locator('[class="notification is-success"]').textContent()
    await expect(wvText).toContain("You have selected Wolverine")

    // step 31:- select e="xm"X-Men option from dropdown
    await page.locator('[id="superheros"]').selectOption("Wonder Woman")
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue("ww")
    // verifying the selected text
    let wwText = await page.locator('[class="notification is-success"]').textContent()
    await expect(wwText).toContain("You have selected Wonder Woman")

    // step 32:- select e="xm"X-Men option from dropdown
    await page.locator('[id="superheros"]').selectOption('e="xm"X-Men')
    // verifying the selected option 
    await expect(page.locator('[id="superheros"]')).toHaveValue('e="xm"X-Men')
    // verifying the selected text
    let exText = await page.locator('[class="notification is-success"]').textContent()
    await expect(exText).toContain('You have selected e="xm"X-Men')
 
})
// 3:
test('Testing the dropdown for programming languages', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step 1:- verify the url of the webpage
    await page.goto('https://letcode.in/dropdowns')

    // Step 2:- verify the heading of the webpage
    await expect(page).toHaveTitle('LetCode with Koushik')

    // step 3 :- select Java option from dropdown
    await page.locator('select[id="lang"]').selectOption("JavaScript")
    // verify the selected option 
    await expect(page.locator('select[id="lang"]')).toHaveValue("js")
    
    // step 4:- select the Java option
    await page.locator('select[id="lang"]').selectOption("Java")
    // verify the selected option
    await expect(page.locator('select[id="lang"]')).toHaveValue("java")

    // step 5:- select the Python option 
    await page.locator('select[id="lang"]').selectOption("Python")
    // verify the selected option 
    await expect(page.locator('select[id="lang"]')).toHaveValue("py")

    // step 6:- select the Swift option
    await page.locator('select[id="lang"]').selectOption("Swift")
    // verify the selected option
    await expect(page.locator('select[id="lang"]')).toHaveValue("swift")

    // step 7:- select the C# option 
    await page.locator('select[id="lang"]').selectOption("C#")
    // verify the selected option
    await expect(page.locator('select[id="lang"]')).toHaveValue("sharp")
})

test('Test the Countries dropdown', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step1:-verify the url 
    await page.goto("https://letcode.in/dropdowns")

    // step 2:- verify the heading of the url 
    await expect(page).toHaveTitle('LetCode with Koushik')

    // step 3 :- select Argentina country from dropdown 
    await page.locator('[id="country"]').selectOption("Argentina")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Argentina")

    // step 4:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Bolivia")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue('Bolivia')

    //step 5:- select the brazil country
    await page.locator('[id="country"]').selectOption("Brazil")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue('Brazil')

    //step 6:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Bolivia")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue('Bolivia')

    //step 7:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Bolivia")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue('Bolivia')

    //step 8:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Bolivia")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Bolivia")

    //step 9:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Chile")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Chile")

    //step 10:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Colombia")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Colombia")
    
    //step 11:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Ecuador")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Ecuador")

    //step 12:- select the bolivia country
    await page.locator('[id="country"]').selectOption("India")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("India")

    //step 13:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Paraguay")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Paraguay")

    // step 14:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Peru")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Peru")

    // step 15:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Suriname")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Suriname")

    // step 16:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Uruguay")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Uruguay")

    //step 17:- select the bolivia country
    await page.locator('[id="country"]').selectOption("Venezuela")
    // verifying the option selected 
    await expect(page.locator('[id="country"]')).toHaveValue("Venezuela")

})
// -----------------------------------------------------------------------------------------------------------//


// 2nd TASK :
// create automated test for the following //

test('Test the dropdown', async({browser})=>{

    const Context = await browser.newContext();
    const page = await Context.newPage();

    // step 1:-verify the url of the page
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // step 2:- verify the heading of the dropdown menu
    await page.locator('div[class="cen-right-align"]').textContent()

    // step 3:- select the Option 1 from the dropdown
    await page.locator('[id="dropdown-class-example"]').selectOption("Option1")
    // asserting the selected option 
    await expect(page.locator('[id="dropdown-class-example"]')).toHaveValue("option1")

    // step 4:- select the Option 1 from the dropdown
    await page.locator('[id="dropdown-class-example"]').selectOption("Option2")
    // asserting the selected option 
    await expect(page.locator('[id="dropdown-class-example"]')).toHaveValue("option2")

    // step 5:- select the Option 1 from the dropdown
    await page.locator('[id="dropdown-class-example"]').selectOption("Option3")
    // asserting the selected option 
    await expect(page.locator('[id="dropdown-class-example"]')).toHaveValue("option3")

})

// ------------------------------------------------------------------------------------------------------// 

// PART 2 Of Assignment 03 // 
// Automate the Dynamic dropdown 



test(' Test the Dynamic DropDowns ', async({browser})=>{


    const Context = await browser.newContext()
    const page = await Context.newPage()

    // step1:- verify the URL of the webpage
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // step 2:- verify the heading of the webpage
    await expect(page).toHaveTitle('Practice Page')

    // step 3:- verify the heading of the dynamic dropdown
    let droptitle = await page.locator('[class="cen-left-align"][id="select-class-example"]').first()
    await expect(droptitle).toContainText('Suggession Class Example')

    // step4:- enter the partial text in the dynamic dropdown
    await page.locator('[id="autocomplete"]').fill("ire")
    // waiting for the locator :- meaning when we enter "ind" in the dropdown , the following locator will help to fetch the country
    await page.waitForSelector('[id="ui-id-1"]') // this is that locator when we type partial text in the dropdown , it will fetch the country name
    // click on the correct option 
    let Options = await page.locator('[class="ui-menu-item"] div').count()
    console.log(Options)
    for (let i=0; i < Options; i++){
        let Check = await page.locator('[class="ui-menu-item"] div').nth(i).textContent() //this line implies that we are iterating over the available options in the dropdown
        console.log(Check)
        if(Check === "Ireland"){
            await page.locator('[class="ui-menu-item"] div').nth(i).click() //this is a condition which implies that if the text is "Ireland", then click on it // and "nth(i)" is used to iterate over the options of dropdown available
            break     //we areusing break keyword here so that when playwright will search for desired option , it will stop right there
        }
    }
    //step5:- wait for the dropdown to be selected
    await page.waitForTimeout(2000)
    // step 6:- verify the selected option 
    await expect(page.locator('[id="autocomplete"]')).toHaveValue("Ireland")


})

// Task 2:- Dynamic dropdown of flipkart for searching iphone15

test('Test the dropdown of flipkart', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    // Step1:- verify the url of the webpage
    await page.goto('https://www.flipkart.com/')

    // step 2:- verify the heading of the webpage

    // step3:- enter the partial text in the search bar
    await page.locator('[class="Pke_EE"]').fill('iph')

    // step 4:- wait for the dropdown to be visible
    await page.waitForSelector('[class="YGcVZO _2VHNef"] div')

    // options 
    let text = await page.locator('').count()
})



test('test the keyboard actions', async({browser})=>{

    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://demoqa.com/text-box")

    await page.locator('[placeholder="Current Address"]').fill('the elegance park, ravet, pune')

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    await page.locator('[id="permanentAddress"]').click()
    await page.keyboard.press('Control+V')
})