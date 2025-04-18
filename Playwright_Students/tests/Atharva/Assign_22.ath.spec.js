const {test, expect} =require("@playwright/test")

test("Verify GET Api request", async({request})=>{
    const req = await request.get("https://reqres.in/api/users?page=2")

    console.log(await req.json())
    console.log(await req.status())

    let resP = await req.json()
    console.log(resP.data[1].email)
})

test("Verify POST APi req", async({request})=>{
    const ReQ = await request.post("https://reqres.in/api/users",
        {
        data:{    
        "name":"Atharva",
        "Job":"Jr.Quality Engineer"
        }
    })
   let resP = await ReQ.json()
   console.log(resP)
   expect(ReQ.status()).toBe(201)
   expect(resP.Job).toBe("Jr.Quality Engineer")
   console.log(resP.createdAt)
})

test("Verify PUT API req", async({request})=>{

    const reqp = await request.put("https://reqres.in/api/users/2",{
        data:{
            "Name":"Jennifer",
            "Job":"Manager"
        }
    })
    let rsp = await reqp.json()
    console.log(rsp)
    expect(reqp.status()).toBe(200)
    console.log(rsp.updatedAt)
})

test("Verify DELETE api req", async({request})=>{
    
})