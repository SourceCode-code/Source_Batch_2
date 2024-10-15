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
let arrr = [1, 2, 3, 5, 6]
// adding a value in the middle 
arrr.splice(3, 0, 4)
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


let rr = [10, 9, 8, 7, 6, 5]

let cc = rr.slice(1, 3)
console.log(cc)

//[ 9, 8 ]

// join --- > used to convert array into string 

//let ard = ["siddhant", 23, "arjun", "gadakh", 7020400749, true, "@#$%^"]

//-->

let zz = ard.join("-->")
console.log(zz)
console.log(typeof zz)
//siddhant-->23-->arjun-->gadakh-->7020400749-->true-->@#$%^

let dd = zz.split('-->')
console.log(dd)

//
// [ 'siddhant', '23', 'arjun', 'gadakh', '7020400749', 'true', '@#$%^' ]



// Array : - a non primitive that stores multiple values of differnet type 
// it is defined by [] and the values in the array are , separted 
// the value in array are stroed in indexs and the value starts form zero 
// array has a one property that is length 

// how to define an array 

let arr1 = ["qwerty", "oiuyt", "xcvbnm"]

console.log(arr1)

// using array constructor 

let arr2 = Array("qwerty", "oiuyt", "xcvbnm")
console.log(arr2)

// example == "qwerty uioplkjh gfdszxc vbnm"
// covernt the string into array 
let strr = "qwerty uioplkjh gfdszxc vbnm"
let arr3 = strr.split("")

console.log(arr3)

//getting the length of array 
console.log(arr1.length)
// getting the last elemnt
console.log(arr1[arr1.length - 1])


let arra = ["siddhant", "vaibhav", "al", "athrava", "shrinivas", "sneha"]
// methods to manipulate the array 

// how to retrive any valur form array 

console.log(arra[2]) //amol


// update the value in array 

arra[2] = "Amol"
console.log(arra)


// other method 

// push()--> method -- add the value at the end of the array
//"qwert"

arra.push("qwerty")
console.log(arra)

/**[
  'siddhant',
  'vaibhav',
  'Amol',
  'athrava',
  'shrinivas',
  'sneha',
  'qwerty'
] */


//unshift()-- add the value at first of the array 
//"kjhgfdS"

arra.unshift("kjhgfd")
console.log(arra)

/**[
  'kjhgfd',  'siddhant',
  'vaibhav', 'Amol',
  'athrava', 'shrinivas',
  'sneha',   'qwerty'
] */


//Splice()--- method add any value in middle of the array 
arra.splice(2, 0, "ZXCVB")
console.log(arra)

// [
//   'kjhgfd',    'siddhant',
//   'ZXCVB',     'vaibhav',
//   'Amol',      'athrava',
//   'shrinivas', 'sneha',
//   'qwerty'
// ]


// pop()---> used to delete the last elemet of the array 


arra.pop()
console.log(arra)

/**
 * [
  'kjhgfd',    'siddhant',
  'ZXCVB',     'vaibhav',
  'Amol',      'athrava',
  'shrinivas', 'sneha'
]
 */

// shift()-- used to delete the value at the first of the array 

arra.shift()
console.log(arra)

/**
 * [
  'siddhant',
  'ZXCVB',
  'vaibhav',
  'Amol',
  'athrava',
  'shrinivas',
  'sneha'
]
 */


// slice -- extarct value in a seprate array form the given array 

// ["vaibhav","amol",aratahav]

let newarr = arra.slice(2, 5)
//syntax slice(starting index,ending index )
console.log(newarr)
//[ 'vaibhav', 'Amol', 'athrava' ]


//splice --- used to delete value in any position in the given array 
//syntax splice(starting index,number of elements )
arra.splice(1, 1)

console.log(arra)  //[ 'siddhant', 'vaibhav', 'Amol', 'athrava', 'shrinivas', 'sneha' ]

//sort()--- sorts the array aplhabaticllay

arra.sort()

console.log(arra) //[ 'Amol', 'athrava', 'shrinivas', 'siddhant', 'sneha', 'vaibhav' ]

//number sorting 
let numarra = [97854726, 1, 5, 50, 60, 700, 800, 900, 5024, 65445, 28522, 138561, 7891]


numarra.sort()

console.log(numarra)
/**[
         1, 138561, 28522,
         5,     50,  5024,
        60,  65445,   700,
      7891,    800,   900,
  97854726
] */


//loops -->

// let sorted = numarra.sort((a, b) => {
//   a - b 
// })
// console.log(`[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]`)
// console.log(sorted)



// revrese () -- used to revsere the array 

arra.reverse()

console.log(arra)  //[ 'vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol' ]
 

//inculdes-- if you have to check wheater a rray has a element of not 

console.log(arra.includes("siddhant")) //true

// indexof()----> used to find the index of a specific element 

console.log(arra.indexOf("shrinivas")) //3


console.log(arra[3])

// join --> convert array into string 

 let str=arra.join(" ")
 console.log(str) //"vaibhav ->sneha ->siddhant ->shrinivas ->athrava ->Amol"
 console.log(typeof str)



 // concat --> if you have to combine 2 or more array the you can use concant method 

 let num1=[1,2,3]
 let num2=[4,5,6
 ]
 let num3=[7,8,9]

let comnibe= num1.concat(num2,num3)
console.log(comnibe) //[ 1, 2, 3, 4, 5, 6 ]


// flat ()---->used to get one array form a single array that has multiple arrays

let mix=[1,2,3,4,["qwertyu","asdfgh","zxcvbn"],[true,false]]

let slove=mix.flat()
console.log(slove) 
/**[
  1,         2,
  3,         4,
  'qwertyu', 'asdfgh',
  'zxcvbn',  true,
  false
] */


//----------------------//

