// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
//using for loop
for(let i = 0 ; i<=10; i++){
    console.log(i);
}
//using while loop
let i = 0
while(i <= 10){
    console.log(i);
    i++
}  
//   // 2) Iterate 10 to 0 using for loop, do the same using while
//for loop
for (let i = 10; i>=0; i--){
    console.log(i);   
}
// While loop
i = 10
while (i >= 0){
    console.log(i);
    i--
}
//   // 3) Iterate 0 to n using for loop
N = 20
for (let i = 0; i<=N; i++){
    console.log(i);
}
  
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
for(i=1;i<=7; i++){
    let patt = " "
    for(let j = 1; j <=i; j++){
        patt +="#"
    }
    console.log(patt);
} 
let str13 ="#"
for(i = 0; i<= 7; i++){
    console.log(str13.repeat(i));
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
for(i = 1; i<=10; i++){
    console.log(`${i} ${i*i} ${i*i*i}`);
}
//using whilw loop
i = 1
while(i<=10){
    console.log(`${i} ${i*i} ${i*i*i}`);
    i++
}

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
for(i = 0; i<=100; i+=2){
    console.log(i);
}
// using while loop
i = 0
while(i <=100){
    console.log(i);
    i += 2
}
  
//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
for(i = 0; i<100; i+=2){
    console.log(i+1);
}
//using while loop
i = 0
while(i<100){
    console.log(i+1);
    i += 2
}
  // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for(i = 0; i<=100; i++){
    if(i%2 != 0) {
        console.log(i);
            
    }
    else{console.log(i);
    }
}
//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
Sum = 0
for (i = 0; i <=100; i++){
    Sum += i
}
console.log(Sum);

//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
sumOfOdd = 0
sumOfEven = 0
for(i = 0; i<=100; i++){
    if(i%2 == 0){
        sumOfEven += i
    }    
    else{sumOfOdd +=i}

}
console.log(sumOfEven);
console.log(sumOfOdd);

  
//   // 11) Develop a small script which generates a six-character random id.
let randomid = Math.floor(Math.random().toString(36).substr(2,10))
console.log(randomid)
//   // 12) Develop a small script which generates any number of characters random id.
let num =10
let randID =''
let str = "ADSssTY@#$67345"
Id = Math.round(Math.random()*str.length)
randID += str[Id]
console.log(randID)

  
//   // 13) Write a script which generates a random hexadecimal number.
let hexaNum="#"+Math.floor(Math.random()*98765432198765).toString(16)
console.log(hexaNum)


//   // 14) Write a script which generates a random rgb color number.
let r = Math.floor(Math.random()*256)
let g = Math.floor(Math.random()*256)
let b = Math.floor(Math.random()*256)
console.log(`${r},${g},${b}`)



// 16) check if the given string is a palindrome 
// let str1="racecar"
// let str11=""
// console.log(str1.length);

// for(i=str1.length-1;i>=0;i--){
//     // console.log(i);
//     str11 += str1[i]
// }    
// if(str1 = str11){
//     console.log(`${str1} is a palindrome string`)    
// }
// else{console.log(`${str1} is not a palondome string`);
// }


// console.log(str1);
// console.log(str11);

// true 
//false

//17) print the longest word form the given string

// let str2 = " hello i am learning javascript and currently i am seeing the topic loops"
// newString = str2.split(" ")
// console.log(str2.split(" "));
// console.log(newString[1]);
// console.log(newString.length)
// for(i=0;i<=newString.length;i++){


// }
//