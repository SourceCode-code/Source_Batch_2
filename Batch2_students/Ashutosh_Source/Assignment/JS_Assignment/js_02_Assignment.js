// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// The output for above code is 7

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
let gravity = 9.81;
console.log(typeof(gravity));

// 3. Generate a random number between 1 and 10 (inclusive) and print it.
let ranNum = Math.round(Math.random() * 10) + 1
console.log(ranNum);

// // 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
// let num = 5.7;
// for Math.ceil() output will be 6
// for Math.floor() output will be 5

// // 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// // Hint: Each dice roll should return a number between 1 and 6.
rollDice1 = Math.round(Math.random() * 6 +1)
rollDice2 = Math.round(Math.random() * 6 +1)
console.log("Rolling dice 1 is : ", rollDice1, "Rolling dice 2 is : ", rollDice2);

// // 6. What will be the result of the following code? Explain why.
// let randomVal = Math.random();
// console.log(Math.floor(randomVal * 10) + 5);
/*The output for above code will be between 0 to 14,
the resone for this is like Math.random() will give 
you the output value between 0 to 0.9 but we have given the input as * 10 + 5 means it will give the value 
between 0 to 14.99, and we have applied the floor function so it will convert the lowest possible value.*/

// //7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
randomBetween = Math.random() * 10 + 10
console.log(randomBetween);

// // 8 generate a random number between 5.5-9.3
// //Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
console.log(Math.random() * 5.5 + 3.8);


// // 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
// 
let A = 1234.56789
B = 1234.56789 * 100
let number = Math.round(B);
let number1 = number / 100
console.log(number1);

// // 10. Write a program  that rounds any given number to the nearest multiple of 5.
// // Example:if 28 is given  should return 30, 32 should return 30.
num = 62
console.log(Math.round(num / 5) * 5)




