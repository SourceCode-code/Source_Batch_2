// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log("Qes no.1 Ans is :",Math.round(x));
// Hint: It will round to the nearest integer. write in comment
// Ans. 7

// 2. Write code to check the type of the variable gravity = 9.81 using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.
console.log("Qes no.2 Ans is :",typeof(gravity));


// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it.
let randomNum = Math.floor(Math.random() * 10) + 1;
//console.log(randomNum);
// Hint: Use Math.random() and Math.floor() to generate random numbers.
console.log("Qes no.3 Ans is :",randomNum);

// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
console.log(Math.ceil(num));
//math ceil= 6

 // Hint: Rounds down to the nearest integer.
console.log(Math.floor(num));
 //Math.Floor = 5


// 5. Write program  rollDice that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
let rollDice = Math.ceil(Math.random()*6);
console.log("Qes no.5(i.e single dice) Ans :",rollDice);
let rollDice1 = Math.ceil(Math.random()*6);
let rollDice2 = Math.ceil(Math.random()*6);
console.log("Qes no.5(i.e Two dice) Ans :",rollDice1,rollDice2);

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log("Qes no.6 Ans is : Number in between 1 to 14 ",Math.floor(randomVal *10));
// write the output and reason in commnets
// Hint: Understand how the number is being generated and what range it falls in.
// Ans= The Result in beteen 1 to 14 
// Reason = Becuase we used Math.floor is always start with before./left/ base value 

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
//console.log(randomBetween(10, 20));
let randomBetween=(Math.ceil(Math.random()*10)+10)
console.log("Qes no.7 Ans is :",randomBetween);

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
let X=5.5;
let Y= 9.3;
console.log("Qes no.8 Ans :",Math.random()*(9.3-5.5)+5.5);

// 9. Given a number x = 1234.56789, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
// Hint: Multiply by 100, round it, and then divide by 100.
let number1 = 1234.56789;
console.log("Qes no.9 Ans is :",Math.floor(number1*100)/100)

// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let a=30;
let a2=Math.ceil(a/5)*5;
console.log(a);
