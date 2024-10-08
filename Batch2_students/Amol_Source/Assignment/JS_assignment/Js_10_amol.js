// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
// for(let i =0;i<=10;i++){
//     console.log(i)
// }
// while loop
// let i =0
// while(i<=10){
//     console.log(i)
//     i++
// }

// // 2) Iterate 10 to 0 using for loop, do the same using while
// for(let i =10;i>=0;i--){
//     console.log(i)
// }
// let a=10
// while(a>=0){
//     console.log(a)
//     a--
// }

// 3) Iterate 0 to n using for loop
// let a = 200
// for(let i=0;i<=a;i++){
//     console.log(i)
// }


// 4) Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
// let a= '#'
// for (i=0;i<=7;i++){
//     console.log(a.repeat(i)) // i go thourgh chat gpt then i get idea if we use repeat then it working, till console.log(a*i)i solve bt after that i 
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
//     console.log(`${i}    ${i**2}    ${i**3}`)
// }

// //   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i =0;i<=50;i++){
//     console.log(2*i)
// }
//and
// for(let i=2;i<=100;i+=2){
//     console.log(i)
// }

// //   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i = 0;i<+50;i++){
//     console.log((2*i)+1)
// // }
// for(let i=0;i<=99;i+=2){
//     console.log((i+1))
// }

// //8) Use for loop to iterate from 0 to 100 and print only prime numbers // the numbers which are self divisible and only by 1   
//   let num = 100
// for(i=2;i<=num;i++){
//   for (j=2;j<=prime;j++){
//      let prime = (i%i == 0 && i%2 != 0)
//     if(prime === true){
//       console.log(`${i} its a prime number`)
//       }
//     }
//   }

// //   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let num = 0
// for(let i=0;i<=100;i++){
//     console.log(num+=i)
// } // for thi ans i use chat gpt please explain..



// //10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let num1 = 0
// for(i=0;i<=100;i+=2){
//     console.log(num1+=i)
// }
// let num2 = 0
// for(i=1;i<=100;i+=2){
//     console.log(num2+=i)
// }

// // 11) Develop a small script which generates a six-character random id.
// let idrandom1=''
// let randomID ='JSHHDYTRsgdjkdfojoigjonvoi@19'
// for (let a=1;a<=6;a++){
//     idrandom1 += randomID.charAt(Math.floor(Math.random() * randomID.length))
//     // idrandom when we have to create random string, create one empty string and then roll it (empty variable) += (operation)
// }
// console.log("Ans of Question No.12:",idrandom1)// if we put console.log inside  the loop it will show and from 1 to next 6th line and if we console out side of loop it will gives one line code.

// // 12) Develop a small script which generates any number of characters random id.
// let num =10
// let charRandID =''
// let str = "ADSGHTY@#$12345"
// for(b=1;b<=num;b++){
//   Id = Math.round(Math.random()*str.length)
//   charRandID += str.charAt(Id)
// }
// console.log("Ans of Question No.12:",charRandID)

// 13) Write a script which generates a random hexadecimal number.

// 14) Write a script which generates a random rgb color number.

//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *
// let row = 3
// let stars = 1
// for(let i=3;i>=1;i--){  
//   let pattern = " ".repeat(i)+"*".repeat(stars)
//   console.log(pattern)
//   stars += 2 
// }
// let row1 = 2
// let star1 = 3
// for(let i=0;i<row1;i++){  
//   let pattern1 =" ".repeat(i)+"*".repeat(star1)
//   console.log(" ",pattern1)
//   star1 -= 2
  
// }

// //2
// // ****
// // *  *
// // ****
// let roW = 3
// let star = 4
// for(i=1;i<=2;i++){
//   result ="".repeat(i)+'*'.repeat(star)
// if(i==2){
//   console.log("*  *")
// }
//   console.log(result)
// }


// // //3
// // // 4444
// // // 333
// // // 22
// // // 1
// for(let i=4;i>=1;i--){
// console.log(i.toString().repeat(i))
//  }

// // // 4
// // 1111
// // 222
// // 33
// // 4
// let num=4
// for(let i=1;i<=4;i++){
// console.log(i.toString().repeat(num--))
// }