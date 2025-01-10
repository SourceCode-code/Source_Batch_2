/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.


/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */
let Person = 22;
let AgeDiff = (18 -Person);
if(Person >= 18){
    console.log('You are Old Enough to Drive')
}else{
    console.log(`You are left with ${AgeDiff} years to drive`)
}



// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.



/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

let MyAge = 24;
let YourAge = 30;
let AgeDiff1 = Math.abs(MyAge - YourAge);
if (MyAge > YourAge){
    console.log(`I am ${AgeDiff1} years older than you`)
}else {
    console.log(`You are ${AgeDiff1} years older than me`)
}

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 9;
let b = 10;

let compareab = a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`
console.log(compareab);
if (a>b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${b} is greater than ${a}`)
}
// Using if...else


// Using ternary operator


/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.


let Num = 66;
if(Num % 2 === 0){
    console.log(`${Num} is an even number`)
}else{
    console.log(`${Num} is an odd number`)
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
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let Score = 88;
if(Score >= 80 && Score <= 100){
    console.log(`You get 'A' Grade`)
}else if (Score >= 70 && Score <=79){
    console.log(`You get 'B' Grade`)
}else if (Score >=60 && Score <=69){
    console.log(`You get 'C' Grade`)
}else if (Score >= 50 && Score <= 59){
    console.log(`You get 'D' Grade`)
}else if (Score >= 0 && Score <= 49){
    console.log(`You have failed `)
}



// 2. Check the season based on user input month.
let User= 'February'
let User1 = User.toLowerCase()
let Summer = 'march, april, may'
let Monsoon = 'june, july, august, september'
let Winter = 'october, november, december,january, february'

if(Summer.includes(User1)){
    console.log("Enjor the summer")
}
else if (Monsoon.includes(User1)){
    console.log("Enjor the Monsoon")
}
else if (Winter.includes(User1))
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



/**
 * Enter a month: January
 * January has 31 days.
 */
let Month ="August";
let check12 = Month.toLowerCase()
switch(check12){
case "january" : 
case "march"   : 
case "may"     : 
case "july"    : 
case "august"  :
case "october" : 
case "december": console.log(`${check12} has 31 days`)
break;
case "april"   :
case "june "   :
case "september": 
case "november": console.log (`${check12}  has 30 days`)
break;
case "february": console.log(`${check12} has 28 or 29 days (29 days/ Leap year i.e once in 4 year) `)
break;
default: console.log(`Enter Valid data`)
}

