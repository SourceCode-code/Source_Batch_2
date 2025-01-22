const {test,expect}=require("@playwright/test")
const { waitForDebugger } = require("inspector")

//1 create mannual testcase and automated for 

//https://letcode.in/dropdowns
test("letcode:- fruits checking functionality of let code for dropdown",async ({browser})=>{
    let Context = await browser.newContext()
    let page = await Context.newPage()
    // go to website
    await page.goto("https://letcode.in/dropdowns")
    // Verify the title of Webpage
    await expect(page).toHaveTitle("LetCode with Koushik")

    // Slect the dropdown of fruit
    let check1 = await page.locator('[class="container"] h1').textContent()
    // Verify the dropdown of fruits
    await expect(check1).toContain("Dropdown")

    // Select the header of fruit select
    let check2 =await page.locator('[class="field"] label').first().textContent() //  i take to much time for this due to Await word and proper nth vlaue please keep in mind
     // Verify the header of fruit select
    await expect(check2).toContain("Select the apple using visible text")
 
    // Select the header of fruit select
    await page.locator('[class="control"] [class="select"] select[id="fruits"]').selectOption("Select Fruit")
    // Verify the header of fruit select
    await expect(page.locator('[class="control"] [class="select"] select[id="fruits"]')).toHaveValue("header")

    // Select the Fruits from dropdown:- Apple
    await page.locator('[class="control"] [class="select"] select[id="fruits"]').selectOption("Apple")
    // Verify the Fruits from dropdown:- Apple
    await expect (page.locator('[class="control"] [class="select"] select[id="fruits"]')).toHaveValue("0")
    // select the selected Fruits
    await page.locator('[class="subtitle"]').textContent()
    // Verify the selected Fruits
    await expect (page.locator('[class="subtitle"]')).toContainText('You have selected Apple')

    // Select the Fruits from dropdown:- Mango
    await page.locator('[class="control"] [class="select"] select[id="fruits"]').selectOption("Mango")
    // Verify the Fruits from dropdown:- Mango
    await expect (page.locator('[class="control"] [class="select"] select[id="fruits"]')).toHaveValue("1")
    // select the selected Fruits
    await page.locator('[class="subtitle"]').textContent()
    // Verify the selected Fruits
    await expect (page.locator('[class="subtitle"]')).toContainText('You have selected Mango')

    // Select the Fruits from dropdown:- Orange
    await page.locator('[class="control"] [class="select"] select[id="fruits"]').selectOption("Orange")
    // Verify the Fruits from dropdown:- Orange
    await expect (page.locator('[class="control"] [class="select"] select[id="fruits"]')).toHaveValue("2")
    // select the selected Fruits
    await page.locator('[class="subtitle"]').textContent()
    // Verify the selected Fruits
    await expect (page.locator('[class="subtitle"]')).toContainText('You have selected Orange')

    // Select the Fruits from dropdown:- Banana
    await page.locator('[class="control"] [class="select"] select[id="fruits"]').selectOption("Banana")
    // Verify the Fruits from dropdown:- Banana
    await expect (page.locator('[class="control"] [class="select"] select[id="fruits"]')).toHaveValue("3")
    // select the selected Fruits
    await page.locator('[class="subtitle"]').textContent()
    // Verify the selected Fruits
    await expect (page.locator('[class="subtitle"]')).toContainText('You have selected Banana')

    // Select the Fruits from dropdown:- Pine Apple
    await page.locator('[class="control"] [class="select"] select[id="fruits"]').selectOption("Pine Apple")
    // Verify the Fruits from dropdown:- Pine Apple
    await expect (page.locator('[class="control"] [class="select"] select[id="fruits"]')).toHaveValue("4")
    // select the selected Fruits
    await page.locator('[class="subtitle"]').textContent()
    // Verify the selected Fruits
    await expect (page.locator('[class="subtitle"]')).toContainText('You have selected Pine Apple')

})


test("letcode:-  checking functionality of super hero's dropdown",async ({browser})=>{
    let Context = await browser.newContext()
    let page = await Context.newPage()

    // Slect the title of webPage
    await page.goto("https://letcode.in/dropdowns")
    //  verify the title of Web page
    await expect(page).toHaveTitle("LetCode with Koushik")

    // Select the Heading of Dropdown 
    let check1 = await page.locator('[class="container"] h1').textContent()
    //Verify the Dropdown Heading
    await expect(check1).toContain("Dropdown")

    //  select the title of dropDown
    let check2 =await page.locator('[class="field"] label').nth(1).textContent() //  i take to much time for this due to Await word and proper nth vlaue please keep in mind
    //  verify the title of Dropdown
    await expect(check2).toContain("Select your super hero's")

    // Select the Superheros from dropdown:- Ant-Man
    await page.locator('[id="superheros"]').selectOption('Ant-Man')
    // Select the Superheros from dropdown:- Ant-Man
    await expect(page.locator('[id="superheros"]')).toHaveValue("am")
    // select the selected superheros
    let secondaltert = await page.locator('p[class="subtitle"]').last().textContent() // hhere im using last method 
    // Verify the selected superheros
    await expect(secondaltert).toContain("You have selected Ant-Man") // and working with Toconatain

    // Select the Superheros from dropdown:- Aquaman
    await page.locator('[id="superheros"]').selectOption('Aquaman')
    // Select the Superheros from dropdown:- Aquaman
    await expect(page.locator('[id="superheros"]')).toHaveValue("aq")
    // select the selected superheros
    let secondaltert1 =await page.locator('p[class="subtitle"]').last().textContent() // whenever i store value in container then only i get passsed
    // Verify the selected superheros
    await expect(secondaltert1).toContain("You have selected Aquaman")
    
    // Select the Superheros from dropdown:- The Avengers
    await page.locator('[id="superheros"]').selectOption('The Avengers')
    // Select the Superheros from dropdown:- The Avengers
    await expect(page.locator('[id="superheros"]')).toHaveValue("ta")
    // select the selected superheros
    let secondaltert2 =await page.locator('p[class="subtitle"]').last().textContent() // whenever i store value in container then only i get passsed
    // Verify the selected superheros
    await expect(secondaltert2).toContain("You have selected The Avengers")

     // Select the Superheros from dropdown:- Batman
    await page.locator('[id="superheros"]').selectOption('Batman')
    // Select the Superheros from dropdown:- Batman
    await expect(page.locator('[id="superheros"]')).toHaveValue("bt")
    // select the selected superheros
    let secondaltert3 =await page.locator('p[class="subtitle"]').last().textContent() 
     // Verify the selected superheros
    await expect(secondaltert3).toContain("You have selected Batman")

    // Select the Superheros from dropdown:- Wonder Woman
    await page.locator('[id="superheros"]').selectOption('Wonder Woman')
    // Select the Superheros from dropdown:- Wonder Woman
    await expect(page.locator('[id="superheros"]')).toHaveValue("ww")
    // select the selected superheros
    let secondaltert4 =await page.locator('p[class="subtitle"]').last().textContent() 
    // Verify the selected superheros
    await expect(secondaltert4).toContain("You have selected Wonder Woman")



})



test("letcode:- cheecking functionality of programming language dropdown",async ({browser})=>{
    const Context=await browser.newContext()
    const page =await Context.newPage()
  //  verify the title of webPage
    await page.goto("https://letcode.in/dropdowns")
    await expect(page).toHaveTitle("LetCode with Koushik")

    // select the Main heading of dropdown
    let check1 = await page.locator('[class="container"] h1').textContent()
    // verify the Main heading of dropdown
    await expect(check1).toContain("Dropdown")

    //  Select the heading of dropdown 
    let check2 =await page.locator('[class="field"] label').nth(2).textContent()
     // verify the heading of dropdown 
    await expect(check2).toContain("Select the last programming language and print all the options")

    // Select the Language from dropdown JavaScript
    await page.locator('div[class="control"] div[class="select"] select[id="lang"]').selectOption("JavaScript")
        // Verify the Language from dropdown JavaScript
    await expect (page.locator('div[class="control"] div[class="select"] select[id="lang"]')).toHaveValue("js")
    
    // Select the Language from dropdown Java
    await page.locator('div[class="control"] div[class="select"] select[id="lang"]').selectOption("Java")
    // Verify the Language from dropdown Java
    await expect (page.locator('div[class="control"] div[class="select"] select[id="lang"]')).toHaveValue("java")

    // Select the Language from dropdown Python
    await page.locator('div[class="control"] div[class="select"] select[id="lang"]').selectOption("Python")
     // Verify the Language from dropdown Python
    await expect (page.locator('div[class="control"] div[class="select"] select[id="lang"]')).toHaveValue("py")

    // Select the Language from dropdown Swift
    await page.locator('div[class="control"] div[class="select"] select[id="lang"]').selectOption("Swift")
    // Verify the Language from dropdown Swift
    await expect (page.locator('div[class="control"] div[class="select"] select[id="lang"]')).toHaveValue("swift")

    
    // Select the Language from dropdown C#
    await page.locator('div[class="control"] div[class="select"] select[id="lang"]').selectOption("C#")
    // Verify the Language from dropdown C#
    await expect (page.locator('div[class="control"] div[class="select"] select[id="lang"]')).toHaveValue("sharp")

})


test("letcode:- cheecking functionality of Nations dropdown", async({browser})=>{

    const Context=await browser.newContext()

    const page =await Context.newPage()

    //  verify the title of webPage
    await page.goto("https://letcode.in/dropdowns")
    await expect(page).toHaveTitle("LetCode with Koushik")
 
    // select the Main heading of dropdown
    let check1 = await page.locator('[class="container"] h1').textContent()
    // verify the Main heading of dropdown
    await expect(check1).toContain("Dropdown")
    
    //  Select the heading of dropdown 
    let check2 =await page.locator('div[class="filed"] label[for="name"][class="label"]').textContent()
    // verify the heading of dropdown 
    await expect(check2).toContain("Select India using value & print the selected value")
     
    // Select the country from dropdown- Argentina
    await page.locator('select[id="country"]').selectOption("Argentina")
    // Verify the country from dropdown - Argentina
    await expect(page.locator('select[id="country"]')).toHaveValue("Argentina")

    // Select the country from dropdown- Bolivia
    await page.locator('select[id="country"]').selectOption("Bolivia")
    // Verify the country from dropdown - Bolivia
    await expect(page.locator('select[id="country"]')).toHaveValue("Bolivia")

    // Select the country from dropdown- Brazil
    await page.locator('select[id="country"]').selectOption("Brazil")
    // Verify the country from dropdown - Brazil
    await expect(page.locator('select[id="country"]')).toHaveValue("Brazil")

    // Select the country from dropdown- Chile
    await page.locator('select[id="country"]').selectOption("Chile")
    // Verify the country from dropdown - Chile
    await expect(page.locator('select[id="country"]')).toHaveValue("Chile")

    // Select the country from dropdown- Colombia
    await page.locator('select[id="country"]').selectOption("Colombia")
    // Verify the country from dropdown - Colombia
    await expect(page.locator('select[id="country"]')).toHaveValue("Colombia")

    // Select the country from dropdown- Ecuador
    await page.locator('select[id="country"]').selectOption("Ecuador")
    // Verify the country from dropdown - Ecuador
    await expect(page.locator('select[id="country"]')).toHaveValue("Ecuador")

    // Select the country from dropdown- India
    await page.locator('select[id="country"]').selectOption("India")
    // Verify the country from dropdown - India
    await expect(page.locator('select[id="country"]')).toHaveValue("India")

    // Select the country from dropdown- Paraguay
    await page.locator('select[id="country"]').selectOption("Paraguay")
    // Verify the country from dropdown - Paraguay
    await expect(page.locator('select[id="country"]')).toHaveValue("Paraguay")

    // Select the country from dropdown- Peru
    await page.locator('select[id="country"]').selectOption("Peru")
    // Verify the country from dropdown - Peru
    await expect(page.locator('select[id="country"]')).toHaveValue("Peru")

    // Select the country from dropdown- Suriname
    await page.locator('select[id="country"]').selectOption("Suriname")
    // Verify the country from dropdown - Suriname
    await expect(page.locator('select[id="country"]')).toHaveValue("Suriname")

    // Select the country from dropdown- Uruguay
    await page.locator('select[id="country"]').selectOption("Uruguay")
    // Verify the country from dropdown - Uruguay
    await expect(page.locator('select[id="country"]')).toHaveValue("Uruguay")

    // Select the country from dropdown- Venezuela
    await page.locator('select[id="country"]').selectOption("Venezuela")
    // Verify the country from dropdown - Venezuela
    await expect(page.locator('select[id="country"]')).toHaveValue("Venezuela")
})


//2  autoamte and create testcases
//https://rahulshettyacademy.com/AutomationPractice/
test ("Rahulshetty :-of dropdwon at rahulshetty acadamychecking the functionality",async({browser})=>{
    const Contex = await browser.newContext()
    const page = await Contex.newPage()

    // Select the title of Webpage
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // Verify the title of Webpage
    await expect (page).toHaveTitle("Practice Page")
 
     // select the heading of dropdwon
    let check1 = await page.locator('[class="cen-right-align"]').textContent()
    // verify the heading of dropdwon
    await expect(check1).toContain("Dropdown Example")

    // select the option-01
    await page.locator('[id="dropdown-class-example"]').selectOption("Option1")
    // verify the option-02
    await expect (page.locator('[id="dropdown-class-example"]')).toHaveValue("option1")

    // select the option-02
    await page.locator('[id="dropdown-class-example"]').selectOption("Option2")
    // verify the option-02
    await expect (page.locator('[id="dropdown-class-example"]')).toHaveValue("option2")

    // select the option-03
    await page.locator('[id="dropdown-class-example"]').selectOption("Option3")
    // verify the option-03
    await expect (page.locator('[id="dropdown-class-example"]')).toHaveValue("option3")

})


//dynamic dropdown assignment -->

//1 visit and write mannual testcase and automate dynamic dropdown to select ireland
//-> 
//https://rahulshettyacademy.com/AutomationPractice/

test("verify Dynamic dropdown for Rahulshetty",async ({browser})=>{
    const Contex =await browser.newContext()
    const page = await Contex.newPage()

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page).toHaveTitle("Practice Page")

    // verify the subheader of dynamic locater
    let check = await page.locator('[id="select-class-example"] legend').textContent()
    await expect(check).toContain("Suggession Class Example")
    
    // select the elemnt for get the value
    await page.locator('[id="autocomplete"]').fill("ire")

    // wait for selectors that is related the context
    await page.waitForSelector('[id="ui-id-1"]')

    //  verify the number of elements are present
    let numOfcontex = await page.locator('[class="ui-menu-item"] div').count()
    console.log(numOfcontex)
    // ittrate through
    for(let i=0;i<=numOfcontex;i++){
        // verify the number of elemnet is related contex for subjected initials
        let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent()
        console.log(text)
        //  check the condition is matching or not through out the loops
        if(text=="Ireland"){
              await page.locator('[class="ui-menu-item"] div').nth(i).click()
              break
         }
    }
   // wait for 3 seconds
    await page.waitForTimeout(3000)
  // verify for Exact selected country 
    await expect (page.locator('[id="autocomplete"]')).toHaveValue("Ireland")

})



//2 visit filpkart and in dynmiac dropdown select iphone 15

test("Flipkart:- verify Dynamic dropdown for Flipkart",async ({browser})=>{
    const Contex =await browser.newContext()
    const page = await Contex.newPage()

    await page.goto("https://www.flipkart.com/")
    await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
    
    await page.locator('[class="Pke_EE"]').fill("iphone 15")

    await page.waitForSelector('[class="_1sFryS _2x2Mmc _3ofZy1"]')

    let options = await page.locator('div[class="YGcVZO _2VHNef"] span').count()
     console.log(options) 
    for (let i = 0; i < options; i++) {
        let text = await page.locator('div[class="YGcVZO _2VHNef"] span').nth(i).textContent()
        console.log(text)
        // if (text === "iphone 15 pro max"){
        //     await page.locator('div[class="YGcVZO _2VHNef"] span').nth(i).click()
        //     break
        // }
    }
    //static wait for stability
    await page.waitForTimeout(3000)
    //verify the selected value 
    await expect(page.locator('[class="Pke_EE"]')).toHaveValue("iphone 15 pro max")

})

//3 visit red bus and select from wakad to homwtown 
//https://www.redbus.in/

test ("Redbus:- checking the Functionality of Dynamic dropdown",async({browser})=>{
    const Contex = await browser.newContext()
    const page = await Contex.newPage()

    await page.goto("https://www.redbus.in/")
    await expect(page).toHaveTitle("Bus Ticket Booking Online made Easy, Secure with Top Bus Operators - redBus")

    //await expect(page).toHaveTitle("www.googletagmanager.com")
})