// //Q.1 
let x = 7.2;
console.log(Math.round(x));

// //it will round off to 7 

// //Q.2. 
let gravity = 9.81;
console.log(typeof(gravity));

// //number

// //Q.3 
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// // random numbers generated : 3,8,6,7,5

// //Q.4 
let num = 5.7 ;
console.log(Math.ceil(num));
console.log(Math.floor(num));
//using Math.floor method , we get the number as 5 & using Math.ceil  method we get the number as 6. 

// //Q.5
    let dice1 = (Math.floor(Math.random() * 6) +1) ;
    let dice2 = (Math.floor(Math.random() * 6) +1 ) ;
 
    console.log("output of  dice1 is ", dice1, "output of dice2 is", dice2);
//this will give an output of dice between 1 and 2 

// //Q.6 

let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// /*for this query, the numbers are generated between 5 to  15  
/*when "console.log(Math.floor(randomVal * 10) " is executed , we get the range from 0 to 10 numbers,
 and when 5 is added , it will get us the range from 5 to 15 , means adding 5 to every output*/ 


// //Q.7 

console.log(Math.floor(Math.random() * 10) +10 );

//by using this method, we will get the range of numbers from 10 to 20//


//Q.8
let minNum = 5.5;
let maxNum = 9.3;
console.log((Math.random()*(maxNum - minNum ))+ minNum);



//Q.9 
let number = 1234.56789;
console.log((Math.round(number * 100) / 100)); 
// here the output is 1234.57 as we used round method  to round off the number to 2 decimal places. 


//Q.10 
//I need help for the logic needed here . I did try once with using a function , did not work out 
