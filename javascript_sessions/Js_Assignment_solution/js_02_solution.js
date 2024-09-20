// assignment.js

// JavaScript Number Data Type - Assignment


// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// Hint: It will round to the nearest integer. write in comment
//ANSWER:--------
//The Output of the following code will be 7

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.

//ANSWER:--------
console.log(typeof (gravity)) // the datatype is a number 

// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it.
//ANSWER:--------
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);


// Hint: Use Math.random() and Math.floor() to generate random numbers.

// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

//ANSWER:--------
console.log(Math.floor(num))  // the output will be 6
console.log(Math.ceil(num)) // the output will be 7



// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

let dice1 = (Math.floor(Math.random() * 6) + 1)
let dice2 = (Math.floor(Math.random() * 6) + 1)
console.log("the output of dice 1 is --", dice1, "output of dice 2 is ", dice2)

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
// Hint: Understand how the number is being generated and what range it falls in.

//ANSWER:--------
//the value genetarted by the code will be form range  5 --->14
//let randomVal = Math.random(); this line will generate a random number form 0 to 0.9
//(Math.floor(randomVal * 10) this code will genrate number between 0 to 9
//console.log(Math.floor(randomVal * 10) + 5); adding 5 will make sure to get the output form 5 to 14 that is adding 5 to every genrated output



//7 generate  random number Between(10, 20) should generate a number between 10 and 20.
console.log("the number genrated form range 10 to 20 is ", Math.floor(Math.random() * 10) + 10)



// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
let startnum = 5.5
let endnum = 9.3
console.log("the number genrated form range 5.5 to 9.3 is ", ((Math.random() * (endnum - startnum)) + startnum))


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
// Hint: Multiply by 100, round it, and then divide by 100.
console.log((Math.round(number * 100) / 100))

// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let num1 = 28
console.log(Math.round(num1 / 5) * 5)

let num2 =19
console.log(Math.round(num2/6)*6)





