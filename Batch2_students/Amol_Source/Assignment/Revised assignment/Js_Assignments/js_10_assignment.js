// ASSIGNMENT NO 10

// 1) Iterate 0 to 10 using for loop, do the same using while()
// for(i=0;i<=10;i++){
//     console.log(i)
// }
// let i=0;
// while(i<=10){
//     console.log(i)
//     i++
// }
  
//   // 2) Iterate 10 to 0 using for loop, do the same using while
// for(a=10;a>=0;a--){
//     console.log(a)
// }
// let a=10;
// while(a>=0){
//     console.log(a)
//     a--
// }
  
//   // 3) Iterate 0 to n using for loop
// let num =12
// for(i=0;i<=12;i++){
//     console.log(i)
// }
 
  
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
// for(i=0;i<=7;i++){
//     console.log("#".repeat(i))
// }
 
  
//   // 5) Print the following pattern using loop
//   // i    i^2   i^3
//   // 0    0     0
//   // 1    1     1
//   // 2    4     8
//   // 3    9     27
//   // 4    16    64
//   // 5    25    125
//   // 6    36    216
//   // 7    49    343
//   // 8    64    512
//   // 9    81    729
//   // 10   100   1000
// for(i=0;i<=10;i++){
//     console.log(`${i}   ${i**2}    ${i**3}`)
// }

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
// for(i=0;i<=100;i+=2){
//     console.log(i)
// }

  
//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
// for(i=1;i<=100;i+=2){
//     console.log(i)
// }
  
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// sum=0
// for(i=0;i<=100;i+=2){
//  sum += i
// }
// console.log(sum)
//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// sum1=0
// for(i=1;i<=100;i+=2){
//  sum1 += i
// }
// console.log(sum1)
  
//   // 11) Develop a small script which generates a six-character random id.
// let ranId = "NONOHjonnlacsl@@"
// let ranId1 = ranId.length
// randomId = ''
// for(i=1;i<=6;i++){
//     let kkk = Math.floor(Math.random()*ranId1)
// randomId += ranId.charAt(kkk)
// }
// console.log(randomId)

//   // 12) Develop a small script which generates any number of characters random id.
// let Num =10
// let ranId = "NONOHjonn123456$$lacsl@@"
// let ranId1 = ranId.length
// randomId = ''
// for(i=1;i<=Num;i++){
//     let kkk = Math.floor(Math.random()*ranId1)
// randomId += ranId.charAt(kkk)
// }
// console.log(randomId)

// 13) Write a script which generates a random hexadecimal number.
// let num = 2147483647 // biggest hexadecimal number by internate
// console.log('#'+ Math.floor(Math.random()*num).toString(16))
//   // 14) Write a script which generates a random rgb color number.

//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *
// let Star =1
// for(i=3;i>=1;i--){
//     console.log(" ".repeat(i)+"*".repeat(Star))
//     Star += 2 
// }
// let Star1 =3
// for(i=1;i<=2;i++){
//     let id = (" ".repeat(i)+"*".repeat(Star1))
//     Star1 -= 2
//     console.log("",id)// in reverse pyramid we have to add this for alignment
// }


//2

// ****
// *  *
// ****
// let star =4
// for(let i=1;i<=2;i++){
//     id = "".repeat(i)+"*".repeat(star)
//     if(i===2){
//         console.log("*  *")
//     }
//     console.log(id)
// }


//3

// 4444
// 333
// 22
// 1
//
// for(i=4;i>=1;i--){
//     console.log(String(i).repeat(i))
// }

// // 4
// 1111
// 222
// 33
// 4
// num=1
// for(i=4;i>=1;i--){
//    console.log(String(num++).repeat(i))
// }


//16) check if the given string is a palindrome 
// let str= "racecar"
// let front= ""
// let str1= str.length
// for(i=0;i<=str1-1;i++){
//     front += str[i]
// }
// rev =""
// for(a=str1-1;a>=0;a--){
//     rev += (str[a])
// }
// console.log(front===rev)
// true 
//false


// //17) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"
// let str1 = str.split(" ")
// let str2 = str1.length
// let longestWord= ""
// for(i=0;i<str2;i++){
//     if(str1[i].length>longestWord.length){
//  longestWord = str1[i]
//     }
// }
// console.log(longestWord)

// //17) print all vovels present in string 
// let amol = "within a few month im become a automation test engineer"
// let amol1 = amol.length
// let realvowels = ""
// vovels= "aeiou"
// for(i=0;i<amol1;i++){
//     if(vovels.includes(amol[i]))
//         realvowels+=amol[i]
// }
// console.log(realvowels,realvowels.length)