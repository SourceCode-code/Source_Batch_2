// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
let person = 24
let agediff = (18 -person)
if (person>=18){
    console.log('You are old enough to drive')
}
else{console.log(`You are left with ${agediff} years to drive`)}


/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */

// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.
let myAge = 31
let yourAge = 30
let agediff1 = Math.abs(myAge-yourAge)
if (myAge>yourAge){
    console.log( `I am  ${agediff1} years older than you`)
}
else{
    console.log(`You are ${agediff1} years older than me`)
}
/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 7;
let b = 6;
// Using ternary operator
let CompareAB = a>b ?`${a} is greater than ${b}` : `${b} is greater than ${a}`
console.log(CompareAB);
// Using if...else
if(a>b){
    console.log(`${a} is greater than ${b}`)
}
else{
    console.log(`${b} is greater than ${a}`)
}


/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
let num1 = 78
if(num1 % 2 === 0){
    console.log(`${num1} is an even number`)
}
else{
    console.log(`${num1} is an odd number`)
}
/** 
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 */


/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: Fail
let score1 = 56;
if(score1>= 80 && score1<=100){
console.log(`you get 'A' grade`)
}
else if (score1>=70 && score1<=79){
    console.log(`you get 'B' grade`)
}
else if (score1>=60 && score1<=69){
   console.log(`you get 'C' grade`)
}
else if (score1>=50 && score1<=59){
    console.log(`you get 'D' grade`)
}
else if(score1>=0 && score1<=49) {
    (console.log()`you get Fail grade`)
}
else {
    console.log(`Invalid score`)
}
// let MArks1 = 80
// let score1 = Number(MArks1)
// (score1>= 80 && score1<=100) ?  console.log(`marks ${score1}: you get 'A' grade`):
// (score1>=70 && score1<=79)  ?  console.log(`marks ${score1}: you get 'B' grade`):
// (score1>=60 && score1<=69)  ?  console.log(`marks ${score1}: you get 'C' grade`):
// (score1>=50 && score1<=59)  ?  console.log(`marks ${score1}: you get 'D' grade`):
// (score1>=0 && score1<=49)   ?  console.log(`marks ${score1}: you get 'F' grade`): 
// console.log(`Invalid score`);
// im not geeting ans when i use ternary oprator.


// 2. Check the season based on user input month.
let user= 'February'
let user1 = user.toLowerCase()
let Summer = 'march, april, may'
let Monsoon = 'june, july, august, september'
let Winter = 'october, november, december,january, february'
// is it possible to take output when user is in mix case or only lowercase or uppercase
if(Summer.includes(user1)){
    console.log("Enjor the summer")
}
else if (Monsoon.includes(user1)){
    console.log("Enjor the Monsoon")
}
else if (Winter.includes(user1))
   { console.log("Enjoy the winter")
}
else {
    console.log('enter Valid Data')
}


// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
let Day = "SunDay"
let Day1 = Day.toLowerCase()
switch(Day1)
{
case "monday"   : console.log(`${Day1} is a working day`)
case "tuesday"  : console.log(`${Day1} is a working day`)
case "wednesday": console.log(`${Day1} is a working day`)
case "thursday" : console.log(`${Day1} is a working day`)
case "friday"   : console.log(`${Day1} is a working day`)
break
case "saturday" : console.log(`${Day1} is a Weekend`)
break
case "sunday"   : console.log(`${Day1} is a non working day`)
break
default : console.log(`Enter Valid data`)
}


/**
 * What is the day today? Saturday
 * Saturday is a weekend.
 *
 * What is the day today? FrIDAy
 * Friday is a working day.
 */


/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.
let MONTH ="MArch";
let Check12 = MONTH.toLowerCase()
switch(Check12){
case "january" : 
case "march"   : 
case "may"     : 
case "july"    : 
case "august"  :
case "october" : 
case "december": console.log(`${Check12} has 31 days`)
break;
case "april"   :
case "june "   :
case "september": 
case "november": console.log (`${Check12} January has 30 days`)
break;
case "february": console.log(`${Check12} has 28 or 29 days (29 days/ Leap year i.e once in 4 year) `)
break;
default: console.log(`Enter Valid data`)
}


/**
 * Enter a month: January
 * January has 31 days.
 */
