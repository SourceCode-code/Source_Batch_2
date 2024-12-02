// This is the ASSIGNMENT From the 1st to 10th Assignment//
 
/*COMMENTS  : comments make our code readable , they are easy to reuse and they are informative 

1:  (//) : this is a single line commment 
2: / *this is a
 multi line 
 commment
 */  
 

/*Variables: Variables are containers for storing data values.  
they can be decalred with 3 type of keywords , namely : 
a: let : using this keyword , any variable can be declared 
b: var :  using this keyword , any variable can be declared 
c: const : using this keyword , a variable can be declared just once, once declared , it cannot be changed .

// Datatypes: data types classify the different kinds of data that can be stored and manipulated. 
There are two main categories of data types in JavaScript: 

1: PRIMITIVE Datatypes: These datatypes are immutable  and cannot be changed once they are created.  
2: N0N-PRIMITIVE Datatypes: These datatypes are mutable , they can be changed at any stage of the program 

1: PRIMITIVE : 
  a:Null 
  b: Undefined
  c: Boolean
  d: String
  e: Number

2: NON -PRIMITIVE : 
  a: ARRAYS
  b: OBJECTS

---------------------/////////////////////\\\\\\\\\\\\\\\\\\\\----------------------------------


1: Null : This datatype is considered as null or datatype with no value .
2: Undefined : This datatype is considered as undefined or datatype with no value . whenever a variable or 
any other specific things are not defined, JS returns the datatype undefined
3: Boolean : This datatype is represented with 2 values : True and false. this datatype returns these 2 values only.
4:  String : This datatype is used to store a sequence of characters, it can be enclosed in single quotes,double quotes ,backticks etc.
5: Number : To perform arithmetic operations in our program , we use the datatype number ,
it can be positive or negative or zero.

*/
// 

// Number :  in js , to work with numbers or operations related to numbers , there are many methods predefined by js for math, below are the most important one's:

//1: Math.random() : this method generates a random number between the range of 0 to 9.9 
//example : 
console.log(Math.floor(Math.random()* 10)); //will return a range of number between 0 to 9 

//2: Math.floor() : this method returns the lowest integer value  that is less than or equal to the given number .
//example :
console.log(Math.floor(149.76)); // output : 149 

//3: Math.round : This method generates a number : a)if the number is below 0.5 , it rounds down to 0 ;
//b) if the number is 0.5 and above 0.5 , it will round up to 1 

//example : 
console.log(Math.round(0.6)); // output : 1 
console.log(Math.round(0.3)); // output : 0

//4: Math.ceil(): this method will generate the highest integer  value that is greater 
//than or equal to the given number . 
//example:  
console.log(Math.ceil(98.87)); //output : 99 

////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//STRINGS : Strings are sequences of characters and can be defined with single , double quotes, backticks.

//example : 
let hij = 'atharva';
let olk = "atharva";
let okl = `atharva`;
//all the above 3 variables will store the same value : atharva 

//we can use strings in js with the help of methods like : 
//1: checking the datatype of a variable : 
let io = "lenovo";
console.log(typeof io); //output : string 

//2: toUppercase() : 
//example : 
let uuu = "qwerty";
console.log(uuu.toUpperCase()); // output : QWERTY 
//3: toLowerCase()
//example 
let hhh = "QWERTY";
console.log(hhh.toLowerCase()); // output : qwerty
//4:  trim() : 
//example : 
let yty = " input ";
console.log(yty.trim()); //output: 'input'
//5:  split()
//example:  
let iii = "thisisjavascript";
console.log(iii.split(" ")); //output :[ 'thisisjavascript' ]
console.log(iii.split('')); /*output : [
    't', 'h', 'i', 's',
    'i', 's', 'j', 'a',
    'v', 'a', 's', 'c',
    'r', 'i', 'p', 't'
  ] */
console.log(iii.split("")); /*output : 
[
  't', 'h', 'i', 's',
  'i', 's', 'j', 'a',
  'v', 'a', 's', 'c',
  'r', 'i', 'p', 't'
]

*/

//6: substr(),substring() 
//exapmple : 
let yuy = "javascriptisquirky" ;
console.log(yuy.substr(0,14)); //output: javascriptisqu 
console.log(yuy.substring(10)); //output: isquirky 
//7: replace() 
let jkj = "pointers";
console.log(jkj.replace("pointers",'jack')); //jack
//8: concat() 
let a = "hello";
let b = "this is";
let c = "javascript";
console.log(a.concat(b,c)); //output: hellothis isjavascript
//9:match() 
let hjh = "hola, como estas?";
console.log(hjh.match("como")); //output : [ 'como', index: 6, input: 'hola, como estas?', groups: undefined ]
//10: includes 
let lkl = "thisisjavascript";
console.log(lkl.includes('is')); //output:  true

// conversion of number to string: 
// 1: toString()

let x1 = 100;
let x2 = "200";
console.log(x2 + x1); // Output: "200100" (String concatenation) 

//-----------------------------------------------------------------------------------------------\\

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.


let greeting = "Hello World"; 
console.log(typeof(greeting)); // string

// 2. Declare a number variable `price` with a value of 199.99, 
//then use Math.ceil() to round it up to the nearest whole number and log the result.

let price =`199.99`;
console.log(Math.ceil(price)); // 200 

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = `atharvapandit`;
console.log(name.length); // 13

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.



// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.


// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.


// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!


// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.


// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.


// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.


// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';



// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.

//15 write a program to generate a random odd number form 15-150












































































































































//Logic for returning the last digits of a number 
// let abc = 45678;
// let lastdigits = abc % 100;
// console.log(lastdigits); 

// /* substr Method
//  the substr method is used to extract the specific  characters from a string. 
//  It takes 2 Parameters : The starting index as well as the ending index:
// Example :
// */
// //1 
// let Len = "redgear"; 
// console.log(Len.substr(0,4)); // output = redg

// //2 
// let Jhu = 'cluster';
// console.log(Jhu.substr(0,6));

// //3 
// let fgh = 'Qwertyishelpfulandnice';
// console.log(fgh.substring(19));

// console.log(fgh.substr(0,15));

// console.log(fgh.substring(0,19)); //qwertyishelpfulandniandn

// console.log(fgh.substr(20)); //e

// console.log(fgh.substring(17));//dnice

// console.log(fgh.substring(15));//andnice 

// console.log(fgh.substring(4));//yishelpfulandnice

// let llk = 'madelyncliene';
// console.log(llk.substring(9)); //ene

// console.log(llk.substring(8)); //liene

// console.log(llk.substring(4));//lyncliene 

// console.log(llk.substring(5));//yncliene 

// let y2k = 'rickandmorty';
// console.log(y2k.substring(9));//rty

// console.log(y2k.substring(5));//ndmorty 

// console.log(y2k.substr(0,9));//rickandmort \\wrong//



// let ikr = 'longestwordd';
// console.log(ikr.substr(0,8)); //longestw

// console.log(ikr.substr(0,9));//longestwo

// console.log(8 > 18 || 6 > 7);// f : F || T = F 
// console.log(9 > 30 && 98 > 102); //false : T && F = F 

// console.log(6 > 5 || 99 < 104 );// true : T || F = T 
// console.log(7 > 24 && 99 < 108); //F && F = F
// console.log(!( 99 < 1090)); // f

// console.log(!(8 > 14)); //t 

// console.log(!(9 > 45)); //t 

// console.log(8 > 5 || 99 < 1080); //t
// console.log(8 > 5 && 66 < 78); //


// let nnn = 'iamlearningjavascript';
// console.log(nnn.substr(0,7));//iamlaerningjavascr 
// //console.log(nnn.substr(0,));

// let str = 100;
// let ii = parseInt(str);
// //console.log(ii, typeof(str)); 
// // console.log(Number(str));
// // console.log(typeof(str));
// console.log(typeof (ii))

// let x = Number(str);
// console.log(typeof(x));

// let y = toString(str);
// console.log(typeof(y));


// console.log(Math.floor(Math.random ()* 100000)* 100000);
// console.log(Math.floor(Math.random()* 100000)* 100000);

// let n = 144.1;
// console.log(Math.round(n)); 




// // using for loop print 10 - 1
// for ( i = 10; i >= 0; i--){
//     console.log(i)
// } 
// console.log("_---------------------------------------------_")

// //using while loop print 10-1
// let M = 10;
// while (M >= 0){
//     console.log(M);
//     M--;
// } 
// console.log("_---------------------------------------------_")

// let N = 1;
// while (N <= 10){
//     console.log(N);
//     N++;
// }
// console.log("_while loop for 10 -1---------------------------------_")

// let K = 10;
// while (K >= 0){
//     console.log(K);
//     K--;
// }
// console.log("_while loop for 10-1-------------------------------------_") 

// /* 
//     ******
//      ****
//       ** 
// */ 

// // let rows = 3;
// // let star = 5;
// // for ( let i = 0; i < rows; i++){
// //     let pattern = " ".repeat(i).repeat+"*".repeat(star)
// //     console.log(pattern);
// //     star -= 2
// // }

//  // ******
//  // *****
//  // ****
//  // ***
//  // **
//  // *

// //  let rows = 6;
// //  let stars = 5;
// //  for(let i = 0; i < rows; i++){
// //     let pattern = "".repeat(i)+"*".repeat(stars)
// //     console.log(pattern);
// //     stars -= 1;
// //  } 



// //  let rows = 5;
// //  let stars = 5;
// //  for (let i = 0; i<rows; i++){
// //     let pattern = "".repeat(i)+"*".repeat(stars)
// //     console.log(pattern)
// //     stars -= 1;
// //  }



// let ko = "javascriptiswierdandfunny";
// console.log(ko.substring(10)); //iswierd
// console.log(ko.substr(0,22));//

// console.log(Math.floor(Math.random()*100000)*100000); 

// let yyy = 99786;
// let jk = yyy % 100;
// console.log(jk);

// console.log( 8 > 10 || 1000 < 999); //f
// console.log( 99 < 54 && 76 > 265); //f
// console.log(!(99 < 87)); //t 

// let rows = 3;
// let stars = 5;
// for (let i = 0; i<rows; i++){
//     let pattern = " ".repeat(i)+"*".repeat(stars);
//     console.log(pattern);
//     stars -= 2;
// } 

// let Rows = 4;
// let Star = 5;
// for (let i = 0; i<rows; i++){
//     let Pattern = "".repeat(i)+"*".repeat(Star);
//     console.log(Pattern);
//     Star -= 2;
// }


