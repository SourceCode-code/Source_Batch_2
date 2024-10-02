// datatypes-->

//1   primitive     --> number , string, nan, undefined , boolean , null 
//2  non primitive --> arrays & objects 


//number , string

//conversion-- number --> string 
// conversion string ---> number 


let x1=100
let x2="200"

console.log(x2+x1) //200"100"

// conversion form staring to numbers 


//1 string to intergers -->

//parseint()-- used to convert string into numbers 

//let x2="200"

let x3=parseInt(x2)

console.log(x3+x1)
console.log(typeof x3) //300 number

// Number()


// let x2="200"
let x4=Number(x2)

console.log(x4+x1)
console.log(typeof x4) //300 number


let num1="10000"
let num2 =+num1

console.log(typeof num2) //300 number


// numbers to string -->


//toString
let num3=7020400749

let num4=toString(num3)
console.log(typeof num4)