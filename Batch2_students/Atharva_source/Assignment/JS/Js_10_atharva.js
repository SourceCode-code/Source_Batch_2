// // 1) Iterate 0 to 10 using for loop, do the same using while
for (q = 0; q<= 10; q++){
    console.log(q);
}; 

let d =0;
while (d <= 10 ){
    console.log(d)
    d++;
}

console.log("-----------------1-------------")
  
//   // 2) Iterate 10 to 0 using for loop, do the same using while
for (T = 10 ; T >= 0 ; T--){
    console.log(T);
}

let j = 10;
while ( j >= 0){
    console.log(j);
    j--;
}
console.log("--------------2-----------")
//   // 3) Iterate 0 to n using for loop
let n = 100;
for (i = 0; i <= n; i++){
    console.log(i);
}
console.log("-------------3-------------")
  
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######

//method 1
for(i = 1; i <= 7; i++){


    for(let j = 1; j <= i; j++){
        process.stdout.write('#')
    }

    console.log();
}
console.log("---------4----------------")

//method 2 
for ( i = 1; i <= 7; i++){
    console.log("#".repeat(i))
}
console.log("-----------------4.1--------------")


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

for (i = 0; i <= 10; i++){
    console.log(`${i} ${i**2} ${i**3}`);
}
console.log("------------------------5-----------------")
//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
for(k = 0; k <= 100; k++){
    
    if (k % 2 == 0){
        console.log(k);
    }
}
console.log("---------6---------------")
//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
for (m = 0; m <= 100; m++){

    if(m %2 != 0){
        console.log(m);
    }
}
console.log("----------7----------")
  
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for ( u = 0; u <= 100; u++){

    if (u % 0!= 0){
        console.log(u);
    }
} 
console.log("---------------------8-----------")
//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for ( let b = 0; b <= 100; b++){
   sum += b
}
console.log(sum);
console.log("--------------9--------------")
  
//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evensum = 0;
let oddsum = 0;

for( let i = 0; i <= 100; i++){
    if( i % 2 === 0 ){
        console.log(evensum = evensum + i);
    }
    else {
        console.log(oddsum = oddsum + i);
    }
}
console.log("--------------10--------------------")


// 11) Develop a small script which generates a six-character random id.
// let randomid =  
// console.log(RandomId);
// console.log("-----------11--------------")
  
// 12) Develop a small script which generates any number of characters random id.

  
// 13) Write a script which generates a random hexadecimal number.

// 14) Write a script which generates a random rgb color number.

let R = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);

console.log( `rgb : ${R},${g},${b}`);
console.log("---------------14-----------")

// 15 

//     *
//   * * *
// * * * * *
//   * * *
//     *

let rows = 3;
let stars = 1;
for (let i = 3; i >= 1; i--){
    let pattern = " ".repeat(i)+"*".repeat(stars)
    console.log(pattern)
    stars += 2
}
let row1 = 2
let stars1 = 3;
for(let i = 0; i < row1; i++){
    let pattern1 = " ".repeat(i)+"*".repeat(stars1)
    console.log(" ", pattern1)
    stars1 -= 2
}
console.log("---------15-------------");

//16 
// // ****
// // *  *
// // ****
let RoW = 3;
let Star = 4;
for (let i = 1; i <= 2; i++){
    let Pattern = "".repeat(i)+"*".repeat(Star)
  if ( i == 2){
    console.log("*  *")
  }
  console.log(Pattern)
}
console.log("-----------16------------");

//17 
//4444
//333
//22
//1

let NuM = 4;
for (let i = 4; i >= 1; i--){
    console.log(i.toString().repeat(i));
}
console.log("-----------17-------------")

//18

let Num = 4;
for (let i = 1; i <= 4; i++){
    console.log(i.toString().repeat(Num--));
}
console.log("-----------------18------------");



//19) check if the given string is a palindrome 

// true 
//false

let str ="racecar";
if(str === str.split('').reverse().join('')){
    console.log("true")
}else{
    console.log("false")
}
console.log("-------------19-----------------")



//20) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"

let str1 = " hello i am learning javascript and currently i am seeing the topic loops";
let LongestWord = "";
let temp = 0;
for (i = 0; i<str1.length-1;i++){
    let wordsize = str1[i].length;
    if(temp < wordsize ){
        temp = wordsize;
        LongestWord = str1[i]
    }
    
}
console.log(LongestWord);







// let wordlengths = str1.split(" ")
// // str.split(" ")
// let lengths = str1.length