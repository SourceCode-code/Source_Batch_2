// Non primitive datatype includes -->
//arrays and objects 

// which we can change and modify 

// Array ---> array is a dataype which is used to store multiple value 

// how to determine if a data type is and array 

/**
 * []---> if anything is in sqaure brackets 
 * ["a",1,2,"v","b"]==> each value is seprated by comma 
 * 
 */

// method to delecare array
let array = []

console.log(array)

//2 method delecre array 

const arr = Array()

console.log(arr)

//examples

let ar = ["siddhant", 23, "arjun", "gadakh", 7020400749, true, "@#$%^"]
//          0       1   2       3       4           5   6

// // your values in array are stored in indexes 
// // the length is always lastindex+1 ==7

// // how to calcalute the length of array 

// console.log(ar.length) //7

// let str=" hello i am learning javascript and currently i am seeing the topic loops"

// let staa=str.split(" ")
// console.log(staa)


// nonprimitive 

// extraction -- get the value form the array 
//updataion -- how to update any value in array 


//deletion -- how to delete the value in array 
//addition --- how to add any value in array 


// extraction -- get the value form array 

// let ar=["siddhant",23,"arjun","gadakh",7020400749,true,"@#$%^"]
// //          0       1   2       3       4           5   6

console.log(ar[0]) // siddhant 

console.log(ar[ar.length - 1])



//updataion -- how to update any value in array 

ar[0] = "SID"

console.log(ar)

ar[ar.length - 1] = "male"

console.log(ar)


// deleteion -- delete any value form the array 

delete ar[0]

console.log(ar)


// addtion -->

ar.unshift("hello")

console.log(ar)

//-------------------------------------------------------------------------//

// method --- 24-30 


//  
console.log(7 === 7)  // true


console.log([1] == [1]) //false

// arr =[1]

//arrr=[1]

// let ard=["siddhant",23,"arjun","gadakh",7020400749,true,"@#$%^"]

// // //d 

// // console.log(ard[0][2])



// ard[1]=25

// console.log(ard)

// //

// methods used to manipulate the arrays

let ard = ["siddhant", 23, "arjun", "gadakh", 7020400749, true, "@#$%^"]


// addition --->
// PUSH()--->method is used to add the value at the last of  an array

ard.push("lastname")

console.log(ard)


// //[
//     'siddhant', 23,
//     'arjun',    'gadakh',
//     7020400749, true,
//     '@#$%^',    'lastname'
//   ]


//---------------------------------------------------------------------

//unshift()---- method add the value at the start of the array 

//let ard=["siddhant",23,"arjun","gadakh",7020400749,true,"@#$%^"]

ard.unshift("firstname")

console.log(ard)
/**
 * [
  'firstname', 'siddhant',
  23,          'arjun',
  'gadakh',    7020400749,
  true,        '@#$%^',
  'lastname'
]
 */

//---------------------------------------------------deletion part 

// POP()--->method is used to delete the value at the last of  an array

ard.pop()
console.log(ard)
/**
 * [
  'firstname', 'siddhant',
  23,          'arjun',
  'gadakh',    7020400749,
  true,        '@#$%^'
]
 */

// Shift() --->method is used to delete the value at the first of  an array

ard.shift()
console.log(ard)

/**[
  'siddhant', 23,
  'arjun',    'gadakh',
  7020400749, true,
  '@#$%^'
] */

//--------------------------------------------------------------------

//SPLICE()---- this method is used to add or remove the value in any index of the array

//synatx ARRAYNAME.SPLICE(STATRAING INDEX,NUMBER ELEMENTS TO BE REMOVED , VALUE TO ADD)
//            arrr.splice(3,              0,                                  4)
let arrr=[1,2,3,5,6]
// adding a value in the middle 
arrr.splice(3,0,4)
console.log(arrr)

//[ 1, 2, 3, 4, 5, 6 ]


// remove elements from 2,5

// arrr.splice(1,4)

// console.log(arrr)

//[ 1, 6 ]

//SLICE()----------------> this method is used to add or remove the value in any index of the array

//nameofarray.slice(staring index , ending index) ---> ending index will not be included or removed

// let xx=arrr.slice(1,4)

// console.log(xx)
// //[ 2, 3, 4 ]


let rr=[10,9,8,7,6,5]

let cc=rr.slice(1,3)
console.log(cc)

//[ 9, 8 ]

// join --- > used to convert array into string 

//let ard = ["siddhant", 23, "arjun", "gadakh", 7020400749, true, "@#$%^"]

//-->

let zz=ard.join("-->")
console.log(zz)
console.log(typeof zz)
//siddhant-->23-->arjun-->gadakh-->7020400749-->true-->@#$%^

let dd= zz.split('-->')
console.log(dd)

//
[ 'siddhant', '23', 'arjun', 'gadakh', '7020400749', 'true', '@#$%^' ]