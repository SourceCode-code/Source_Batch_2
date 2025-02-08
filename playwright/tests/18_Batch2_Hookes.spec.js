// Hookes in playwright 
//hookes are the special function that run before or after the tests 
/**
 * 
 * beforeAll  --> runs before all testcases are starting        ---> to read your fixture or import your dependcy (login)  
 * afterAll --> runs after all the testcases are completed      ---> to generate reports  and cealning all the cahce 
 *  
 * beforeEach --> this hook will run before every testcases    ---> to set some precondition befre each testcases
 * afterEach --> this hook will run after every testcase       --->to set some post condition after each testcases
 */




 const {test,expect}=require("@playwright/test")

test.beforeAll(async()=>{
    console.log("setting up before all")
})


test.beforeEach(async()=>{
    console.log("setting up before Each ")
})

// test1 
test("Testcase 1 ",async({page})=>{
    console.log("I am running the testcases ")
})

// test 2
test("Testcase 2 ",async({page})=>{
    console.log("hello i am testcases 2 ")
})




test.afterEach(async()=>{
    console.log("setting up after Each ")
})


test.afterAll(async()=>{
    console.log("setting up after all")
})