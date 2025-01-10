
// ASSIGNMENT NO 10



// // 1) Iterate 0 to 10 using for loop, do the same using while
//using for loop
for(let i=0;i<=10;i++){
    console.log(i)
}

//using while loop
let i=0;
while(i<=10){
    console.log(i);
    i++
}
  
//   // 2) Iterate 10 to 0 using for loop, do the same using while
  //using for loop
for(let a=10;a>=0;a--){
    console.log(a)
}

//using while loop

let a=10;
while (a >= 0) {
    console.log(a);
    a--;
}

//   // 3) Iterate 0 to n using for loop
let n = 15
 for(let k=0;k<=n;k++){
    console.log(k)
 }
  
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
// x+=y (x=x+y)

for(let i=1;i<=7;i++){
    console.log("#".repeat(i))
}
 
  
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

for(let i =0;i<=10;i++){
    let output = `${i}\t ${i*i}\t ${i**3}`
    console.log(output)
}

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers

for(let i=0;i<100;i++){
    if(i%2 === 0){
        console.log(i)
    }
}


//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0;i<=100;i++){
    if(i%2 !==0){
        console.log(i)
    }
}
//
// for(let i=1;i<=100;i+=2){
//     console.log(i)
// }

//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum=0
for (let i=0; i<=100; i++) {
    sum += i; // Add the current number to the sum
}

console.log("The sum of all numbers from 0 to 100 is:", sum);

//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let evensum = 0
// let oddsum = 0
// for(let i=0;i<=100;i++){
// if(i%2==0){
//     evensum+=i;  
// }
// else{
// oddsum+=i
// }
// }
// console.log(`the sum of even numbers is ${evensum} & sum of odd number is ${oddsum}`)
let evensum = 0
let oddsum = 0
for(let i = 0;i<=100;i++){
    if(i%2==0){
        evensum += i;
     }
     else{
        oddsum += i;
     }
}
console.log(`the sum of even number is ${evensum} & sum of odd number is ${oddsum}`)
  
//   // 11) Develop a small script which generates a six-character random id.
let randomId =''
let characters ="ASDFGLKJHqwert"
for(let i=1;i<=6;i++){
    randomId+= characters.charAt(Math.floor(Math.random()*characters.length))
}
console.log(randomId)
console.log(".........method2......")

//method2
let randomId2= Math.random().toString(36).substr(1,6)

  
//   // 12) Develop a small script which generates any number of characters random id.
let randomId1 =''
let characters1 ="LKJHASDFG@hhgftrsd"
let length = 9
for(let i =0;i<length;i++){
    randomId1 +=characters1.charAt(Math.floor(Math.random()*characters1.length))
}
  console.log(randomId1)
//   // 13) Write a script which generates a random hexadecimal number.
// Prompt for the length of the hexadecimal number
let length1 = 15
let randomHex = '';

// Generate random hexadecimal characters
for (let i = 0; i < length; i++) {
    randomHex += Math.floor(Math.random() * 16).toString(16);
}

// Output the result in uppercase
console.log(`Random Hexadecimal Number ${randomHex}`);
console.log("....Q13 method2...")
let hexNumber = "#"+Math.floor(Math.random()*2147483647).toString(16)

//   // 14) Write a script which generates a random rgb color number.


let r = Math.floor(Math.random() * 256); 
let g = Math.floor(Math.random() * 256); 
let b = Math.floor(Math.random() * 256); 

let rgbColor = `rgb(${r}, ${g}, ${b})`; 

console.log(rgbColor); // Output the random RGB color

// rgb(260,260,260)




//
//       *
//      ***
//    *******
//      ***
///      *
//
//


// for (let i = 1; i <= 3; i++) {
//     console.log(' '.repeat(3 - i) + '*'.repeat(2 * i - 1));
// }
// for (let i = 2; i >= 1; i--) {
//     console.log(' '.repeat(3 - i) + '*'.repeat(2 * i - 1));
// }

//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *
// let rows1 =3
// let stars =1
// for(let i =0;i<rows1;i+=2){
//   let pattern =''.repeat(i)+ "*".repeat(stars)
//   console.log(pattern)
//    stars += 6
 
//  }



//2

// ****
// *  *
// ****
let rows2 = 3; // Number of rows
let cols = 4; // Number of columns

for (let i = 0; i < rows2; i++) {
    if (i === 0 || i === 2) {
        // Print full row
        console.log('*'.repeat(cols));
    } else {
        // Print row with spaces
        console.log('*' + ' '.repeat(cols - 2) + '*');
    }
}
  

// //3

// 4444
// 333
// 22
// 1
for (let i = 4; i > 0; i--) {
    console.log(String(i).repeat(i));
}

// 4

// 1111
// 222
// 33
// 4

for (let i = 1; i <= 4; i++) {
    console.log(String(i).repeat(5 - i));
}

////16) check if the given string is a palindrome 
let str="racecar"
let isPalindrome = str === str.split('').reverse().join('');

console.log(isPalindrome); // Output: true


// true 
//false

//17) print the longest word form the given string

let str1 = "hello i am learning javascript and currently i am seeing the topic loops";

let words = str1.split(' ')
let longestWord = ''

//use a for loop
for(let i = 0; i<words.length; i++){
    if(words[i].length > longestWord.length){
        longestWord = words[i]
    }
}

console.log(longestWord)




// // Split the string into words
// const words = str1.split(' ');

// let longestWord = '';

// // Use a for loop to iterate through the words
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//     }
// }

 