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
// for (let num=2;num<=100;num++){
//   let isprime = true 
//     for(let i=2;i<Math.sqrt(num);i++){
//         if(num%i==0){
//             isprime =false;
//             break;
//        }
// }
//         if(isprime){
//             console.log(num)
//         }
//     }
// 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
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
// console.log("Ans of Question No.11:",idrandom1)// if we put console.log inside  the loop it will show and from 1 to next 6th line and if we console out side of loop it will gives one line code.

// // 12) Develop a small script which generates any number of characters random id.
// let num =10
// let charRandID =''
// let str = "ADSGHTY@#$12345"
// for(b=1;b<=num;b++){
//   Id = Math.round(Math.random()*str.length)
//   charRandID += str.charAt(Id)
// }
// // console.log("Ans of Question No.12:",charRandID)

// let amol ="bxckbnncnconxofnnedfohaodnn"
// let AMOL = ""
// for(b=1;b<=6;b++)// we created length of our random id
// {
// let R = amol.length //get the length for random nubers 
// let T = Math.round(Math.random()*R)// here we create any random number 
// AMOL+=amol.charAt(T)// here we fill up a empty string w.r.t length
// }
// console.log((AMOL))// print the last condition of last length in one line( in we console inside the loop it will be in triangle format)
//*********Method 2******
// let randomid = Math.random().toString(36).substr(2,10)
// console.log(randomid)

// 13) Write a script which generates a random hexadecimal number.
// let hexaNum="#"+ Math.floor(Math.random()*12345878799656).toString(16)
// console.log(hexaNum)


// 14) Write a script which generates a random rgb color number.
// let r = Math.floor(Math.random()*256)
// let g = Math.floor(Math.random()*256)
// let b = Math.floor(Math.random()*256)
// console.log(`${r},${g},${b}`)

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
// console.log(String(i).repeat(i))
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

//5
//      *
//     ***   
//    *****  
//   ******* 
//  *********
// star= 1
// for(i=5;i>=1;i--){
//   result = " ".repeat(i)+"*".repeat(star)
//   star+=2
//   console.log(result)
//   }
//Fibonacci Sequence:
// i=0,b=0;
// for(let i=1; i<=50;i++){
// console.log(i)
// let next = i + b;
// i = b;
// b = next;
// }

// // right angledd triangle
// for (i=1;i<=10;i++){
//     console.log('#'.repeat(i))
// }
// // inverted right angledd triangle
// for (i=10;i>=1;i--){
//     console.log('#'.repeat(i))
// }
// // 3. Pyramid Pattern

// doller = 1
// for (i=10;i>=1;i--){
//     let pyr = " ".repeat(i)+"$".repeat(doller)
//     doller +=2
// console.log(pyr)
// }

// 4. reverse Pyramid Pattern
//   ***********************
//    *********************
//     *******************
//      *****************
//       ***************
//        *************
//         ***********
//          *********
//           *******
//            *****
//             ***
//              *
// let row1 = 11
// let star1 = 23
// for(let i=0;i<=row1;i++){  
//   let pattern1 =" ".repeat(i)+"*".repeat(star1)
//   console.log(pattern1)
// star1 =star1-2
//}
//            *
//           ***
//          *****
//         *******
//        *********
//       ***********
//      *************
//     ***************
//    *****************
//   *******************
//  *********************
// ***********************
// let row2 = 11
// let star2 = 1
// for(let i=11;i>=0;i--){  
//   let pattern2 =" ".repeat(i)+"*".repeat(star2)
//   console.log(pattern2)
// star2=star2+2
// }

//16) check if the given string is a palindrome 
let str="nitin"
let lstr = str.length
let ree =""

for(i=0;i<=lstr;i++){
  ree += str.charAt(i)
}
let ree2 =""
for(i=lstr-1;i>=0;i--){
  ree2 += str.charAt(i)
}
console.log(ree==ree2)

// true 
//false

//17) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"
// let str1 = str.split(' ')
// let longestWord = ''
// for(let i = 0;i<str1.length;i++){
//   if(str1[i].length > longestWord.length){
//       longestWord = str1[i]
//   } 
// }
// console.log(longestWord)

// let Fullnamee = "amol kantilal jadhav"
// vowels = "aieou"
// vowels1 = ""
// for (i=0;i<Fullnamee.length;i++){
//   if(vowels.includes(Fullnamee[i])){
//     vowels1+=Fullnamee[i]
//   }
// }
// console.log(vowels1)

// let countries2 = "Albania Bolivia Canada Denmark Ethiopia Finland Germany Hungary Ireland Japan Kenya"
// let aa = countries2.split(" ")
// let longestWord = ""
// for(let i=0;i<aa.length;i++){
//   if(aa[i].length>longestWord.length){
//     longestWord = aa[i]
//     console.log(longestWord)
//   }
// }