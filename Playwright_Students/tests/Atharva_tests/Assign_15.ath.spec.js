const {test,expect} =require('@playwright/test')

test("Verify GET API req", async({request})=>{


    let req = await request.get('https://reqres.in/api/users?page=2')

    console.log(await req.status())
    console.log(await req.json())

    // convert the Response to json 
    let Res = await req.json()

    console.log(Res.data[5].last_name)
    expect(req.status()).toBe(200)
})

test("verify POST req", async({request})=>{


const Req = await request.post("https://reqres.in/api/users",{
    data:{
        "name":"Tita Lau",
        "Job":"Disc Jockey"
    }
})

const Res1 = await Req.json()
console.log(Res1)
expect(Req.status()).toBe(201)
expect(Res1.Job).toBe("Disc Jockey")
console.log(Res1.createdAt)

})

test("Verify PUT req", async({request})=>{

    const REQ = await request .put('https://reqres.in/api/users/2',{
        data:{
            "name":"Siddhant Kapoor",
            "Job":"Disc Jockey"
        }
    })

    const RESP = await REQ.json()
    console.log(RESP)
    expect(REQ.status()).toBe(200)
    expect(RESP.name).toBe("Siddhant Kapoor")
    console.log(RESP.updatedAt)
})

test("Verify DELETE Req", async({request})=>{


    const ReQ = await request.delete('https://reqres.in/api/users/2')
    expect(await ReQ.status()).toBe(204)
})