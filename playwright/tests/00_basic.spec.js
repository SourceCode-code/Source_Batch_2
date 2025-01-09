const {test,expect} = require("@playwright/test") // this line is used to import your commands and asserations 

// testcases  --> single file to check feature 
// test suite --> collection of silimar testcases used to check a feature 


test("verify the basic testcases  structure of playwright",async({browser})=>{
const Context = await browser.newContext() // this opens a new context in a browser
const page = await browser.newPage() // this opens a new context in a browser

// // visit a website 

// await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")



 
}) 

