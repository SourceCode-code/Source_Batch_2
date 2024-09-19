// lets learns the methods in string datatype

let str = "siddhantarjungadakh"

// lets see some of the methods used in maniopulationof the string 

//length ----
console.log(str.length)
// to get the last element in the string
console.log(str[(str.length)-1])
// exaplination of above code 
console.log(str[18])
// to revtrire any element 
console.log(str[2])

//lowercase -- qwertyuioikjhg (small letters )
//uppercase -- QWERTRE (captial letter)

//toUpperCase
// to convert the sring in uppercase -->(toUpperCase)
//syntax of using methods 
 //name of your string . name of your method ()
let uppercasestr= str.toUpperCase()
console.log(uppercasestr)
//output -->SIDDHANTARJUNGADAKH

//toLowerCase()
// to convert the sring in lowercase -->(toUpperCase)
let lowerstr= uppercasestr.toLowerCase()
console.log(lowerstr)
// output -->siddhantarjungadakh


//string concatiation (combining)--> we can add 2 string 
// method concatiation --> 


//let str = "siddhantarjungadakh"
//    your string --->uppercase -->lowercase-->uppercase
let methodcon=str.toUpperCase().toLowerCase().toUpperCase()
console.log(methodcon)

// example
// let methodcon2=str.toUpperCase().toLowerCase().toUpperCase().length.toUpperCase()
// console.log(methodcon2)
//str.toUpperCase().toLowerCase().toUpperCase()--- string 
//error -->  
//length ---> number // 
//toUpperCase is not a method of numbers its of string


//in method concatation the output of first method should be a vaild input for the second 

//a method to get some caharcter of the string --> substr()

// let str = "siddhantarjungadakh"
//substr( starting--index,numbercharacter)
let newstr= str.substr(0,2)

console.log(newstr)

let str3= "javascript"

let script=str3.substr(4,10)
console.log(script)


// substring()--->
//a method to get some caharcter of the string --> substring()

// syantx --
//substr(staring index , number characters ) //0  --->2  // ja 
//substring (staring index ,ending index ) // this doesnt inculde ending index 

let substring=str3.substring(0,1) //ja
let substr=str3.substr(0,2)

console.log("i am the output for substring method",substring)
console.log("i am the output for substr method",substr)


let str4="hello"
 //          (staring index, endingindex)-->doesnt inculde ending index
let substring1=str4.substring(0,4)  // hell
//            (starting index, number of charcter)
let substr1=str4.substr(0,5) //hello

console.log("i am the output for substring method",substring1)
console.log("i am the output for substr method",substr1)




// let str4="hello"
//  //          (staring index, endingindex)-->doesnt inculde ending index
// let substring1=str4.substring(0,5)  // hell
// //            (starting index, number of charcter)
// let substr1=str4.substr(0,5) //hello

// console.log("i am the output for substring method",substring1)
// console.log("i am the output for substr method",substr1)


// // spilt ---> to break to seprate 
let str6 = "siddhant arjun gadakh"
//  spilt("parameter where the string is needed to split" )
console.log(str6.split(" "))

console.log(str6.split("a"))
// ["s","i","d"]


console.log(str6.split(""))

//toUppercase
//toLowercase
//substr
//substring
//spilt

//trim , trimStart,trimEnd

let str7 = " Amol "

console.log(str7.length) //6
//trim -- removes starting spaces and ending space
console.log(str7.trim())//"siddhant"
console.log(str7.trim().length)// 8

//trimStart,
//trimEnd,


let str9= "i am learning Javascript"

//Javascript
//inculdes -- check whetaer the character is present in the string or not 
// --- output (booleans (True or false))

console.log(str9.includes("Javascript")) // true
//ex 2 
console.log(str9.includes("javascript")) // false 

// 0--1 binarary ------ code scan 

// cypress  --
//replace()--->used to replace the charter in string (first occrance)
let str10= "i am learning Javascript"

//replace("words you want to replace","the words you want to replace with")

// example replace first occurance
let newstr1= str10.replace("a","z")

console.log(newstr1)
// replace the word
let newstr11= str10.replace("Javascript","cypress")

console.log(newstr11)


let str11 = " Am  ol "
console.log(str11)
console.log(str11.length)//6  " Amol "
console.log(str11.trim()) // "Amol" //4
console.log(str11.trim().length) //4