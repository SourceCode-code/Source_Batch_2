/**
 * 
 * //1  get me the largest number and the smallest number form the array 
 * array=[1,2,3,4,5,6,7,8,9,11,22,55,88,9,99,44,55,2587452,256852,0,12585]


//2  convert this array into uppcase 
array=
[ 'vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol' ]

//3 add 2 in every element of this array 
numaarry=[1,2,3,4,5,6,7,8,9]

//4 get the me sum of this array 

numaarry=[1,2,3,4,5,6,7,8,9]

//5 get me all the value in this array above 5

numaarry=[1,2,3,4,5,6,7,8,9]

//6 --- give me 4 examples of every method taught of array .
* 
 * 
 * 
 * 
 * 
 * 
 */

 //1  get me the largest number and the smallest number form the array 
 let array=[1,2,3,4,5,6,7,8,9,11,22,55,88,9,99,44,55,2587452,256852,0,12585]

//using for loop
let largestNumber = array[0] //initializ with first element
let smallestNumber = array[0]
//use for loop
for(let i=1;i<array.length;i++){
    if(array[i]>largestNumber){
        largestNumber=array[i]
    };
    if(array[i]<smallestNumber){
        smallestNumber = array[i]
    }
}

// another way-------------
console.log("Largest Number:", largestNumber); // 2587452
console.log("Smallest Number:", smallestNumber); // 0

let largestNumber1 = Math.max(...array);
let smallestNumber1 = Math.min(...array);

console.log("Largest Number:", largestNumber1); // 2587452
console.log("Smallest Number:", smallestNumber1); // 0

//2  convert this array into uppcase 
let array2= [ 'vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol' ]
let uppcase = []
//using for loop
for(let i=0;i<array2.length;i++){
    uppcase[i]=array2[i].toUpperCase()
}
console.log(uppcase)

//3 add 2 in every element of this array 
let numaarry=[1,2,3,4,5,6,7,8,9]

let UpdatedAry = []
//using for loop
for(let i=0;i<numaarry.length;i++){
    UpdatedAry[i]=numaarry[i]+2
}
console.log(UpdatedAry)

//4 get the me sum of this array 

//let numaarry=[1,2,3,4,5,6,7,8,9]
let sum = 0
//using for loop
for(let i =0;i<numaarry.length;i++){
    sum += numaarry[i]
}
console.log(sum)

////5 get me all the value in this array above 5

//let numaarry=[1,2,3,4,5,6,7,8,9]
let UpdatedArry= []
for(let i=0;i<numaarry.length;i++){
    if(numaarry[i]>5){
    UpdatedArry.push(numaarry[i])
    }
}
console.log(UpdatedArry)

//6 --- give me 4 examples of every method taught of array .
// PUSH()--->method is used to add the value at the last of  an array
//ex1
let arr = ["pune","mumbai","hydrabad","chennai","benglor"]
arr.push("ahmedabad")
console.log(arr)  //output:[ 'pune', 'mumbai', 'hydrabad', 'chennai', 'benglor', 'ahmedabad' ]

//ex2
let arr2 = [ 'rohit', 'virat', 'surya', 'bumrah']
arr2.push("hardik")
console.log(arr2)   //output:[ 'rohit', 'virat', 'surya', 'bumrah', 'hardik' ]
//ex3
let arr3 = ["Mango","Pineapple","watermelon","chiku"]
arr3.push("apple")
console.log(arr3)
//ex4
let arr4 = ["Instagram","Whats App","Telegram"]
arr4.push("Facebook")
console.log(arr4)   //output:[ 'Instagram', 'Whats App', 'Telegram', 'Facebook' ]


// // unshift()-----> method add the value at the start of the array 
//ex1
//let arr = ["pune","mumbai","hydrabad","chennai","benglor"]
arr.unshift("Jamnagr")
console.log(arr)  

//ex2
//let arr2 = [ 'rohit', 'virat', 'surya', 'bumrah']
arr2.unshift("sachin")
console.log(arr2) //output:[ 'sachin', 'rohit', 'virat', 'surya', 'bumrah', 'hardik' ]

//ex3
//let arr3 = ["Mango","Pineapple","watermelon","chiku","apple"]
arr3.unshift("peru")
console.log(arr3)  //output:[ 'peru', 'Mango', 'Pineapple', 'watermelon', 'chiku', 'apple' ]

//ex4
//let arr4 = ["Instagram","Whats App","Telegram"]
arr4.unshift("Snapchat")
console.log(arr4)

// // shift--->method is used to delete the value at the first of  an array
//ex1
let array1 = ["pune","mumbai","hydrabad","chennai","benglor"]
array1.shift()
console.log(array1)        //OutPut:[ 'mumbai', 'hydrabad', 'chennai', 'benglor' ]

//ex2
let array3 =[ 'peru', 'Mango', 'Pineapple', 'watermelon', 'chiku', 'apple' ]
array3.shift()
console.log(array3)       //[ 'Mango', 'Pineapple', 'watermelon', 'chiku', 'apple' ]

//ex3
let array4 = ['sachin', 'rohit', 'virat', 'surya', 'bumrah', 'hardik']
array4.shift()
console.log(array4)       //[ 'rohit', 'virat', 'surya', 'bumrah', 'hardik' ]

//ex4
let array5 = ['Snapchat', 'Instagram', 'Whats App', 'Telegram', 'Facebook']
array5.shift()
console.log(array5)    //[ 'Instagram', 'Whats App', 'Telegram', 'Facebook' ]

// // POP()--->method is used to delete the value at the last of  an array

//ex1
let array6 = ["pune","mumbai","hydrabad","chennai","benglor"]
array6.pop()
console.log(array6)        //OutPut:[ 'pune', 'mumbai', 'hydrabad', 'chennai' ]

//ex2
let array7 =[ 'peru', 'Mango', 'Pineapple', 'watermelon', 'chiku', 'apple' ]
array7.pop()
console.log(array7)       //[ 'peru', 'Mango', 'Pineapple', 'watermelon', 'chiku' ]

//ex3
let array8 = ['sachin', 'rohit', 'virat', 'surya', 'bumrah', 'hardik']
array8.pop()
console.log(array8)       //[ 'sachin', 'rohit', 'virat', 'surya', 'bumrah' ]

//ex4
let array9 = ['Snapchat', 'Instagram', 'Whats App', 'Telegram', 'Facebook']
array9.pop()
console.log(array9)    //['Snapchat', 'Instagram', 'Whats App', 'Telegram']

// // slice  ------(starting , ending )
//ex1
//[ 'pune', 'mumbai', 'hydrabad', 'chennai' ]
let result1= array6.splice(0,2)
console.log(result1)         //output:[ 'pune', 'mumbai' ]
//ex2
let aarr=[ 'chikoo', 'mango', 'apple', 'pineapple', 'peach', 'watermelon' ]
let result =aarr.slice(1,4)
console.log(result)       //output:[ 'mango', 'apple', 'pineapple' ]

// // splice--------(staring index , no of elemnets )
//ex1
let aarr1=[ 'chikoo', 'mango', 'apple', 'pineapple', 'peach', 'watermelon' ]
let result2 = aarr1.splice(1,4)
console.log(result2)           //[ 'mango', 'apple', 'pineapple', 'peach' ]

//ex2
let aarr3 = ["shrinivas","amol","vaibhav","siddhant","atharv"]
let result3=aarr3.splice(1,3)
console.log(result3)           //[ 'amol', 'vaibhav', 'siddhant' ]
// // sort  ------------ 
// //ex1
let array10 = ["pune","mumbai","hydrabad","chennai","benglor"]
array10.sort()
console.log(array10)        //OutPut:[ 'benglor', 'chennai', 'hydrabad', 'mumbai', 'pune' ]

//ex2
let array11 =[ 'peru', 'Mango', 'Pineapple', 'watermelon', 'chiku', 'apple' ]
array11.sort()
console.log(array11)       //[ 'Mango', 'Pineapple', 'apple', 'chiku', 'peru', 'watermelon' ]

//ex3
let array12 = ['sachin', 'rohit', 'virat', 'surya', 'bumrah', 'hardik']
array12.sort()
console.log(array12)       //[ 'bumrah', 'hardik', 'rohit', 'sachin', 'surya', 'virat' ]

//ex4
let array13 = ['Snapchat', 'Instagram', 'Whats App', 'Telegram', 'Facebook']
array13.sort()
console.log(array13)      //[ 'Facebook', 'Instagram', 'Snapchat', 'Telegram', 'Whats App' ]


// // reverse--------------- used to reveser an array 
//ex1
let array14 = ["pune","mumbai","hydrabad","chennai","benglor"]
array14.reverse()
console.log(array14)        //OutPut:[ 'benglor', 'chennai', 'hydrabad', 'mumbai', 'pune' ]

//ex2
let array15 =[ 'peru', 'Mango', 'Pineapple', 'watermelon', 'chiku', 'apple' ]
array15.reverse()
console.log(array15)       //[ 'Mango', 'Pineapple', 'apple', 'chiku', 'peru', 'watermelon' ]

//ex3
let array16 = ['sachin', 'rohit', 'virat', 'surya', 'bumrah', 'hardik']
array16.reverse()
console.log(array16)       //[ 'bumrah', 'hardik', 'rohit', 'sachin', 'surya', 'virat' ]

//ex4
let array17 = ['Snapchat', 'Instagram', 'Whats App', 'Telegram', 'Facebook']
array17.reverse()
console.log(array17)      //[ 'Facebook', 'Instagram', 'Snapchat', 'Telegram', 'Whats App' ]


//includes
//ex1
let skills=["html","css","js","php","sql","py","java","rust",".net"]
// includes ------------( the output will be in booelan)
//  check wheatr the element is present in the array or not 
console.log(skills.includes("rust"))
//ex2
console.log(skills.includes("Js"))
//ex3
console.log(skills.includes(".net"))

//indexoff-->use to find the index of the elemnt in the array
console.log(skills.indexOf("js"))
console.log(skills[7])


//join ----//"html:css:js:php:sql:py:java:rust:.net
// join------------ this is used to convert an array into a string using a specific
console.log(skills.join(" "))
console.log(skills.join(','))

//concat
//ex1
let skills1=["html","css","js","php","sql","py","java","rust",".net"]
let skills2=["react","angular","sql","vbscript"]
console.log(skills1.concat(skills2))

//ex2
let num = [1,2,3]
let num1 = [4,5,6,7,8]
console.log(num.concat(num1))


//flat --> it used to combine multiple array into one
//ex1
let arw=[1234,23456,"shrinivas",[2345,9876,567,"shrinivas"],["ert",3456,"dfghj"]]

console.log(arw.flat())
//ex2
let arw1 =[234,765,56,"skills",[1,3,5,7],["qwert"]]
console.log(arw1.flat())

//-------------------------//

//1. Write a code to reverse a given array without using reverse function
let aarray= [2, 5, 7, 1]
//Expected output [1, 7, 5, 2]
let reversed = []
for (let i = aarray.length - 1; i >= 0; i--) {
    reversed.push(aarray[i])
}

console.log(reversed) 

// 2. Write a code to find out whether the given element is present in the given sorted array or not.
// Eg. Given array [1, 2, 4 , 7, 15, 22, 25] given element 22.
// Expected output:True
// Explanation :
// as 22 is present in a given array print true. 

// In case of given element as 8 output should be false because 8 is not in given array

let aarray1 =[1, 2, 4 , 7, 15, 22, 25]

let Find1 = 22
let Find2 = 8
// Choose the element to check
let target = Find2; // Change this to elementToFind2 to check for 8
let found = false;

// Iterate through the array
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        found = true; // Element found
        break; // Exit the loop
    }
}

console.log(found); // Output: true for 22, false for 8

// let target = 22;
// let found = true
// for(let i=0;i<aarray.length;i++){
//     if(array[i]===target){
//         found = true
//     }  
// }
// console.log(found)
 
