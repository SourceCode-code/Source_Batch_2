//async and await --> is way to handle async code and make it sync 
//                    its a better way of writting promises 

// its a better way to handle a promise and its easy to understand and right 

/** syntax 
 * 
 * async function  name()=>{
 * }
 * 
 * 
 * await  name 
 * 
 */

//eaxmple -->

// const sqaure = async function (n) {
//     return n * n
// }


// let num2 = await sqaure(2)
// console.log(num2)

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(` waiting for ${ms} time for stabity`)
        }, ms)

    })
}

  async function getdata() {
    console.log("step 1 start")
    const wait = await delay(5000)
    console.log("step2 :begin",wait)
    console.log("step 3 : end ")
}

 getdata()


