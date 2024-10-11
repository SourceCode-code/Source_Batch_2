// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while

for(let i =0; i<=10;i++){
    console.log(i)
}
console.log("------------for---------------------------------------------------------")

let i=0
while(i<=10){
    console.log(i)
    i++
}
  
console.log("------------while---------------------------------------------------------")
console.log("------------1---------------------------------------------------------")
//   // 2) Iterate 10 to 0 using for loop, do the same using while
for(let i =10; i>0;i--){
    console.log(i)
}
console.log("------------for---------------------------------------------------------")

let i1=10
while(i>0){
    console.log(i)
    i--
}
  
console.log("------------while---------------------------------------------------------")
console.log("------------2---------------------------------------------------------")

//   // 3) Iterate 0 to n using for loop
 

let n = 5

for(let i = 0 ;i<=n;i++){
    console.log(i)
}
  
console.log("------------3---------------------------------------------------------")
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
 
for(let i=0;i<=7;i++){
    console.log("#".repeat(i))
}

console.log("------------4---------------------------------------------------------")
  
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


for(let i=0;i<=10;i++){
    console.log(`${i}  ${i**2}   ${i**3}`)

}

console.log("------------5---------------------------------------------------------")

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0;i<=100;i++){
    if(i%2==0){console.log(i)}
}

console.log("------------method 2---------------------------------------------------------")

for(let i=0;i<=100;i+=2){
    console.log(i)
}
console.log("------------6---------------------------------------------------------")


//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0;i<=100;i++){
    if(i%2!=0){console.log(i)}
}

// console.log("------------method 2---------------------------------------------------------")

for(let i=1;i<=100;i+=2){
    console.log(i)
}
console.log("------------7---------------------------------------------------------")
  
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for(let num=2;num<=100;num++){
    let isprime=true
    for(let i =2 ;i<=Math.sqrt(num);i++){
        if(num%i==0){
            isprime=false
            break
        }

        if(isprime){
            console.log(num)
        }
    }
}

console.log("------------8---------------------------------------------------------")


//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum=0

for(let i =0;i<=100;i++){
sum+=i

}
console.log("sum of all numbers", sum)


console.log("------------9---------------------------------------------------------")
  
//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evensum=0
let oddsum =0
for(let i=0;i<=100;i++){
    if(i%2==0){
        evensum+=i
    }
    else{
        oddsum+=i
    }
}

console.log(evensum,oddsum)

console.log("------------10---------------------------------------------------------")
  
//   // 11) Develop a small script which generates a six-character random id.
let randomid =Math.random().toString(36).substr(2,6)
  //0-0.99
console.log(randomid)
// bxu6pn
  // a-z ---0-9 ,A_Z
//   // 12) Develop a small script which generates any number of characters random id.

let randomid2 =Math.random().toString(36).substr(2,10)
//0-0.99
console.log(randomid2)
//   // 13) Write a script which generates a random hexadecimal number.

let hexNUmber="#"+Math.floor(Math.random()*2147483647).toString(16)

console.log(hexNUmber)

//   // 14) Write a script which generates a random rgb color number.

//rgb("red","green",blue)

let r=Math.floor(Math.random()*256)
let g = Math.floor(Math.random()*256)
let b =Math.floor(Math.random()*256)

console.log(`rgb(${r},${g},${b})`)





//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *






//2

// *****
// *  *
// *  *
// *****

let row=3
for(let i=0;i<=row;i++){
    let pattern=""
    for(let j =0;j<row;j++){
        if(i===0||i===row-1||j===0||j===row-1){
            pattern+="*"
        }
        else{
             pattern+="  " 
        }
    }
    console.log(pattern)
}


//i===0||i===row-1 --- first row ()
//||j===0||j===row-1 -- last row 





//3

// 4444
// 333
// 22
// 1




// // 4
// 1111
// 222
// 33
// 4