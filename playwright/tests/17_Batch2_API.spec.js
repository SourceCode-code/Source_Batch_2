const { test, expect } = require("@playwright/test")
const exp = require("constants")
const { request } = require("http")
//----------------
//API --> Application progarmining interface 

// its a communication medium between fornt end and back backend or softwares

//   Soap --xml  //------------ REST-- json()


//REST API 

// get   -- retrive 
// post  -- adding 
// put  --- update info
//delete  -- remove 

// maunnal tool for api testing -->  postman / swagger /soap ui \\\


// test suite--->collection of testcases   //collection --> group of multiple api request
// testcases --->single testcases         // single api call --> api request 


//           base url                  // query parameter
//   https://reqres.in/api/users      ?page=2

//             base url              // path parameter 
//   https://reqres.in/api/          users



//https://www.google.com/search ?q=what+is+api&rlz=1C1FHFK_enIN936IN936&oq=what+is+api&gs_lcrp=EgZjaHJvbWUyEQgAEEUYFBg5GIcCGLEDGIAEMgoIARAAGLEDGIAEMg8IAhAAGBQYhwIYsQMYgAQyBggDEEUYQDIHCAQQABiABDINCAUQABiDARixAxiABDIHCAYQABiABDIHCAcQABiABNIBCDIyODZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8



//manually hitting api testcases

//----->


//GET    -->
//POST   -->
//UPDATE -->
//DELETE -->


test("verify get api", async ({ request }) => {
    // let COntext = await brower.newContext
    let req = await request.get("https://reqres.in/api/users?page=2")

    console.log(await req.status())
    console.log(await req.json())
    //converst the respone into json
    let res = await req.json()

    console.log(res.data[3].first_name)
    expect(req.status()).toBe(200)
    expect(res.data[3].first_name).toEqual("Byron")
    expect(res.per_page).toBe(6)


})


test("verify POST api", async ({ request }) => {
    let req1 = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Vaibhav",
            "job": "Cheif Automation Architect"
        }
    })
    let res1 = await req1.json()
    console.log(res1)
    expect(req1.status()).toBe(201)
    expect(res1.job).toBe("Cheif Automation Architect")
    console.log(res1.createdAt)

})


test("verify PUT API ", async ({ request }) => {
    let req2 = await request.put(`https://reqres.in/api/users/2`, {
        data: {
            "name": "amol",
            "job": "zion resident"
        }
    })
    let res2 = await req2.json()

    console.log(res2)
   expect(req2.status()).toBe(200)
   expect(res2.name).toBe('amol')
})


test("verify DELETE API",async({request})=>{

let req4 = await request.delete("https://reqres.in/api/users/2")

expect(await req4.status()).toBe(204)



})



