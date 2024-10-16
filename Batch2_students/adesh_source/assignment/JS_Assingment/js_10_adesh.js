// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while

  for(let i=0;i<=10;i++){
    console.log(i)
  }

let i=0;
while(i<=10){console.log(i)
    i++
}

//   // 2) Iterate 10 to 0 using for loop, do the same using while
  
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
//   // 3) Iterate 0 to n using for loop
let n=10;
 for(let i=0;i<=n;i++){
    console.log(i)
 }
  
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
 
for(let i =1;i<=5;i++){
    console.log("#".repeat(i));

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
for(i=0;i<=10;i++){
 console.log(`${i}    ${i**2}    ${i**3}`)
}

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0;i<=100;i++){
    if(i % 2 == 0)
    console.log(i);
    }

  
//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0;i<=100;i++){
    if(!i % 2 == 0)
    console.log(i);
    }

  
  
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i=2;i<=100;i++){
    let isPrime=true;

    for(j=2;j<=Math.sqrt(i);j++){
        if(i%j===0){
        isPrime=false;
        break

    }
}
if(isPrime){
    console.log(i);
}
}
  
//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum =0
  for(let i=0;i<=100;i++){
sum+=i;
  }
  console.log(sum);
//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

  let sumeven=0;
  let sumodd=0;
  for(let i=0;i<=100;i++){
    if(i%2==0){
        sumeven+=i;
    }else{
        sumodd+=i;

    }   
  }
  console.log(sumeven);
  console.log(sumodd);
//   // 11) Develop a small script which generates a six-character random id.

//   // 12) Develop a small script which generates any number of characters random id.

  
//   // 13) Write a script which generates a random hexadecimal number.

//   // 14) Write a script which generates a random rgb color number
let r = Math.floor(Math.random()*256)
let g = Math.floor(Math.random()*256)
 let b = Math.floor(Math.random()*256)
 console.log(`${r},${g},${b}`)

 //15) print the following patterns 
  //*  
 //*** 
//******
 //***
  //*



 let row = 3
let stars = 1
for(let i=3;i>=1;i--){  
let pattern = " ".repeat(i)+"*".repeat(stars)
console.log(pattern)
 stars += 2 
}
let row1 = 2
let star1 = 3
for(let i=0;i<row1;i++){  
  let pattern1 =" ".repeat(i)+"*".repeat(star1)
  console.log(" ",pattern1)
  star1 -= 2
}


//2 ****
 // *  *
 // ****


 let row12 = 3
 let star = 4
 for(i=1;i<=2;i++){
output ="".repeat(i)+'*'.repeat(star)
 if(i==2){
     console.log("*  *")}
 console.log(output)
}


    //3
  //4444
 // 333
 //  22
  // 1

for(let i=4;i>=1;i--){
    console.log(String(i).repeat(i))
    }



  // 4
 // 1111
 // 222
// 33
// 4
 let number=4
 for(let i=1;i<=4;i++){
 console.log(i.toString().repeat(number--))
}
