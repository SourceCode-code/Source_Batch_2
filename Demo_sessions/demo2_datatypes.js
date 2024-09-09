// // datatypes -- 

// // 1 primitive datatype  -- already defined immutable datatype   
// // 2 non promitive       -- the dataype which we delcare and its mutable 


// // primitive -- 

// // string 
// // numbers -- intergers (-infinty - infty ) , float number  (0.0000-100.0000)
// // boolean -- true and false value ( on - off )
// // null -- there is nothing (0)
// // undefined  - the value of variable is not defined 

// // non primitive datatypes 

// // arrays -- [1,2,3,4,5,5,6,"fghj"] 
// // objects {name:"siddhant"} 

// //numbers -- primitve datatype 

// // let age = 25
// //  console.log(typeof(age))

// // const g =9.81

// // console.log(typeof(g))


// // numbers methods 

// const pi = 3.143

// const PI= Math.PI

// console.log(PI)

// // ----------------

// //rounding off


// let num = 7.6

// // 8  highest -- ceil 

// //7 lowest value -- floor 

// //converts into lowest value
// console.log(Math.floor(num))
// ////converts into highest value
// console.log(Math.ceil(num))

// // 7.5 ------ below -- 7 // 7.6-8 ------ above 

// console.log(Math.round(num))

//  generate a random number upto 10 

let number = Math.floor(Math.random()*10 )  // ------- 0--0.99 //  0.99-10.99  - 0-10  -- 10.67 ==== 11
console.log(number)

// abs

let x =Math.abs(-10)
console.log(x)

// sq.root
//power 
//log --
// trionagymy 


// string ------- "",'',``

let str = 'siddhant 758154 $%^&* true '
let str1 = "siddhanthgjhbkjnlk 758154          null  $%^&* true undfgh "

let str3 = `                                      `
console.log(typeof(str))
console.log(typeof(str1))
console.log(typeof(str3))





// Assignment 2 

//random number between zero to 100

let zero = Math.floor((Math.random()*101))  // 0-100.99
console.log(zero)


// 50-100
let zero1 = Math.floor((Math.random()*51)) +50
console.log(zero1)

// 0 -256

let zero2 = Math.floor((Math.random()*257))  // 0-100.99
console.log(zero2)

// 0-6

let zero3 = Math.floor((Math.random()*6))+1  
console.log("the output for a single dice role is ",zero3)



// 
//1-6
//1-6

let dice1 = Math.floor((Math.random()*6))+1  
console.log("the output for a  dice1 role is ",dice1)

let dice2 = Math.ceil((Math.random()*6))  
console.log("the output for a  dice2 role is ",dice2)




