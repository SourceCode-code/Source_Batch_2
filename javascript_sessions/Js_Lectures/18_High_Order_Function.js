//High Order Functions --->

/**high order functions are the functions which takes other function as a parameter or 
 * as a returning value */

<<<<<<< HEAD


=======
>>>>>>> 442a081c17af8a7fc5e0a8b831a05bfda7dcd0c8
// there are two type of high order function
//1) Callback Function -->
/**call back functions are the function which can be passed as a parameter to other function*/

// this is a function
const callback = (n) => {
    return n ** 2
}

//example of call back 
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 2))

//2) Returning Function-->
/** the functions which return other function are called as returing function */

const higherorder = n => {
    const dosomething = m => {
        const dowhatever = t => {
            return 2 * n + 3 * m + t
        }
        return dowhatever
    }
    return dosomething
}

console.log(higherorder(2)(3)(10)) //23

// forEach method uses callback function

// setting time -->
/**when we exceute some acitivties in a certain interval of time or we can schedule (wait)
 * for some time to exceute that acitivty 
 */


// there are 2 method 

//1 setInterval
//2 setTimeout

// setInterval -->
/** the gobal method which takes call back function as a parameter and duration as parameter 
 * duration will be in miliseconds
*/

<<<<<<< HEAD
/**
=======
/*
>>>>>>> 442a081c17af8a7fc5e0a8b831a05bfda7dcd0c8
 * setINterval--> this will keep giving the out at a given duration or intevral
 * syntax 
 * 
 * function callback(){
 * //code 
 * }
 * 
 * setInterval(callback,duration)
 */

function SayHello(){
    console.log("hello")
}

setInterval(SayHello,2000)

console.log("world")



<<<<<<< HEAD
// set timeout--> this will delay the output by milliseconds 
=======
// set timeout--> this will delay
// the output by milliseconds 
>>>>>>> 442a081c17af8a7fc5e0a8b831a05bfda7dcd0c8

function bye(){
    console.log("bye")
}

setTimeout(bye,3000)

console.log("thank you")