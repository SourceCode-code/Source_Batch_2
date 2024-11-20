// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// It will round to the nearest integer is = 7

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// typeof to determine the data type.
console.log(typeof(gravity));

// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it.
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
// Hint: Use Math.random() and Math.floor() to generate random numbers.



// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
console.log(Math.ceil(num));
console.log(Math.floor(num));



// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
// Simulate rolling the first die
let die1 = Math.floor(Math.random() * 6) + 1;

// Simulate rolling the second die
let die2 = Math.floor(Math.random() * 6) + 1;

// Calculate the combined result
let combinedResult = die1 + die2;

// Print the result
console.log("Die 1: " + die1);
console.log("Die 2: " + die2);
console.log("Combined Result: " + combinedResult);

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);

/* Ans- The code generates a random integer between 5 to 14, inclusive.
 Explanation=first of all the random function generates the nearest decimals, In his scenario there are multiply by 10, 
So here generate the the integers between 0 to 9 but Adding 5 to the floored number shifts the range from [0, 9] to [5, 14].
*/


//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
let min = 10;
let max = 20;
randomBetween = Math.floor(Math.random() * (max - min - 1)) + min + 1;
console.log(randomBetween); 

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
let Min = 5.5;
let Max = 9.3;

// Generate a random floating-point number between min and max (inclusive)
let randomFloat = Math.random() * (Max - Min) + Min;

console.log(randomFloat);


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;

// Multiply by 100, round it, and then divide by 100
let roundedNumber = Math.round(number * 100) / 100;

console.log(roundedNumber); 

// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let Number1 = 17; 

// Round to the nearest multiple of 5
let RoundedNumber = Math.round(Number1 / 5) * 5;

console.log(RoundedNumber); // for number 17 outout is = 15

// For 22
Number2 = 22;
roundedNumber = Math.round(Number2 / 5) * 5;

console.log(roundedNumber); // for number 22 outout is = 20