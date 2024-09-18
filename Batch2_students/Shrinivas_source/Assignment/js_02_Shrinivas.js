// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2
console.log(Math.round(x))
console.log(Math.floor(x))


// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
let gravity = 9.81
console.log(typeof(gravity))

// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it.
console.log(Math.floor(Math.random()*10) + 1)


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()?
let number = 5.7
console.log(Math.ceil(number)) 
console.log(Math.floor(number)) 


// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
let dice1 = (Math.floor(Math.random() * 6) + 1)
let dice2 = (Math.floor(Math.random() * 6) + 1)
console.log(`output of dice1 is ${dice1} output of dice2 is ${dice2}`)


// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5)

//ANSWER
//the output will be form range (5 ---14)
//let randomVal = Math.random() this line will generate a random number form 0 to 0.9
//(Math.floor(randomVal * 10) this code will genrate number between 0 to 9
//console.log(Math.floor(randomVal * 10) + 5) adding 5 will make sure to get the output form 5 to 14 that is adding 5 to every genrated output


//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
let num = Math.floor(Math.random() * 10) + 10
console.log(`the number genrated form range 10 to 20 is ${num}`)

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
let num1 = 5.5
let num2 = 9.3
console.log("the number genrated form range 5.5 to 9.3 is ", ((Math.random() * (num1- num2)) + num1))



// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let x1 = 1234.56789
console.log((Math.round(x1 * 100) / 100))

// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let num3 = 28
console.log(Math.round(num3 / 5) * 5)