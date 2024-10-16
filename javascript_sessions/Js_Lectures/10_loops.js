// Loops --> loops are used to perform repetitive actions
// for  -- used 99% of the time
// while -- used 1% of the time

// 1. For Loop --> when the output is definitive or finite

/**
 * Syntax for loop (FOR) --->
 * for(initialization; condition; increment/decrement) {
 *     // your code
 * }
 */

// Example 1: Count from 0 to 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4 5 6 7 8 9 10

// Example 2: Count backward from 10 to 0
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
// Output: 10 9 8 7 6 5 4 3 2 1 0

// Example 3: Iterate through a string
let str = "siddhant";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
// Output: s i d d h a n t

// ------------------------------------------------------------

// Example 4: Multiplication table for 2
let num = 2;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
// Output:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

// Example 5: Multiplication table for 5
let num1 = 5;
for (let a = 1; a <= 10; a++) {
    console.log(`${num1} x ${a} = ${num1 * a}`);
}
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// ------------------------------------------------------------

// 2. While Loop --> used when the output is infinite

/**
 * Syntax for while loop --->
 * let i = 0;
 * while (condition) {
 *     // code
 *     increment/decrement
 * }
 */

// Example 1: Count from 0 to 5
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 0 1 2 3 4 5

// Example 2: Print squares of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`${i * i}`);
}
// Output: 1 4 9 16 25 36 49 64 81 100



//----------------------------------------more examples for logic buliding ---------


// *****
//  ***
//   *
//method 1
let n =3 // number no rows
let stars = 5 // the stars in staring line 

// using for loop 
for(let i=0;i<n;i++){
    let pattern = " ".repeat(i)+"*".repeat(stars)
console.log('using for loop ',pattern)
// to minus the stars
stars-=2
}

// *****
//  ***
//   *

//-----------------------------------------------------------------------------//
//method 2

//
for(let i = 0; i<n;i++){
    let pattern =" "
    for(let j =0;j<i;j++){
pattern+=" "
    }
    for(let k =0;k<(n-i)*2;k++){
pattern+="*"

    }
console.log(pattern)
}

// ******
//  ****
//   **



//-------------------------------------------------------------------------
// ******
// *****
// ***
// **
// *


let rows = 5
let stars1=6

for(let i=0;i<rows;i++){
let pattern ="".repeat(i)+"*".repeat(stars1)
console.log(pattern)
stars1-=1
}

// //method 2 

let ro = 5
for(let i =ro; i>0;i--){

let pattern=""
for(let j = 0;j<i;j++){
    pattern +="*"
}
console.log(pattern)
}

// method 3 

for(let rows=0;rows<=n;rows++){
    let pattern = "*".repeat(ro-rows)
    console.log(pattern)
}

// *****
// ****
// ***
// **
// *

// *****
// ****
// ***
// **



//---------------------------------------

//1 break -- this keyword would terminate the loop when the condition is met   (loop , condition)
//2 continue  -- this keyword would skip the output when the condition is met



//examples

//break 
//1 print till 0-5--- but range should be 0-10

for(let i=0;i<=10;i++){
console.log(i)
    if(i===5){
    break
}


}

/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 
 */


// //2 contiune --- 
//print form 0-10 but skip 5

for(let i=0;i<=5;i++){
 
    if(i===2){
        continue
    }
   console.log(i)
}

// /**
//  * 0
1
2
3
4
5
//  */


//logical examples in string 

// reverse the following string without using any method 

let revstr = "hello"

//5

// console.log(str[5])

//olleh
// use loop ( for , while ) 

//      i =4 ; 4 
// for(let i=str1.length;i=<str1.length;i--){
// console.log(4)
// 0
// -1


// }
let ree=""
for(let i = revstr.length-1;i>=0;i--){
// console.log(revstr[i])
    ree += revstr[i];

}

console.log(ree)

//olleh
//tnahddis
//tnahddis


// count the number of  vowels in the given string

let vstr="amol"
let rstr=""
console.log(vstr.length)
console.log(vstr[9])
let count=0
let vowels="aeiou"

for(let i=0;i<vstr.length;i++){
    if(vowels.includes(vstr[i])){
        rstr+=vstr[i]
        count++ 
    }
}

console.log(`the vowels in the string are ${rstr} and the total count of vowels is ${count} `)






