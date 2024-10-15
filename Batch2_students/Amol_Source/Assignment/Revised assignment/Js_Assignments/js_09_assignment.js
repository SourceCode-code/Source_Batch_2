/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
// let age = 16
// let agediff = Math.abs(age-18)
// if(age>=18){
//     console.log(`your age is ${age}, you are ready to drive`)
// }
// else {
// console.log(`You are left with ${agediff} years to drive`)
// }
/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */




// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.
// let myage = 45
// let yourAge = 40
// let agediff = Math.abs(myage-yourAge);
// if(myage>yourAge){
//     console.log(`I am ${agediff} year older than you `)
// }
// else{
//     console.log(`i am ${agediff} year younger than you `)
// }



/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

// let a = 6;
// let b =7;

// // Using if...else
// if(a>b){
//     console.log(`${a} is graeter than ${b}`)
// }
// else {
//     console.log(`${b} is graeter than ${a}`)
// }

// Using ternary operator
//a>b ?console.log(`${a} is graeter than ${b}`):console.log(`${b} is graeter than ${a}`)

/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
// num =98
// if(num%2==0){
//     console.log(`${num} its even number`)
// }
// else{
//     console.log(`${num} its odd  number`)
// }

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
// num =65
// if(num>=85&&num<=100){
//     console.log(`you get ${num} marks, its 'A' grade congratulation`)
// }
// else if (num>=70&&num<=79){
//     console.log(`you get ${num} marks,its 'B' grade congratulation`)
// }
// else if (num>=60&&num<=69){
//     console.log(`you get ${num} marks,its 'C' grade need improvement`)
// }
// else if (num>=50&&num<=59){
//     console.log(`you get ${num} marks,its  'D' grade bring your parents with you`)
// }
// else if (num>=0&&num<=49){
//     console.log(`you get ${num} marks, 'F' fail. try next time `)
// }
// else{
//     console.log(`please enter valid data`)
// }

/*// 2. Check the season based on user input month
let month1 = "july"
let month = month1.toLowerCase()
let Summer = 'march, april, may'
let Monsoon = 'june, july, august, september'
let Winter = 'october, november, december,january, february'
switch(month){
    case"october":
    case"november":
    case"december":
    case"january":
    case"february":console.log(`${month},Enjoy the Winter`)
    break;
    case"june":
    case"july":
    case"august":
    case"september":console.log(`${month},Enjoy the Monsoon`)
    break;
    case"march":
    case"april":
    case"may":console.log(`${month},Enjoy the Summer`)
    break;
    default:console.log('Enter Valid data')
}
*/


// // 3. Check if a day is a weekend or working day. Take day input and check its case insensitively
// let day1= "friDay"
// let day = day1.toLowerCase()
// if(day=="monday"){
//     console.log(`${day} its working day`)
// }
// else if(day=="tuesday"){
//     console.log(`${day} is a working day`)
// }
// else if(day=="wednesday"){
//     console.log(`${day} is a working day`)
// }
// else if(day=="thusrday"){
//     console.log(`${day} is a working day`)
// }
// else if(day=="friday"){
//     console.log(`${day} is a working day`)
// }
// else if(day=="saturday"){
//     console.log(`${day} is a half working day`)
// }
// else if(day=="sunday"){
//     console.log(`${day} is a non working day`)
// }


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
// let month1 = "november"
// let month = month1.toLowerCase()
// switch(month){
// case "january" : 
// case "march"   : 
// case "may"     : 
// case "july"    : 
// case "august"  :
// case "october" : 
// case "december":console.log(`${month} has 31 days`)
// break;
// case "april"   :
// case "june "   :
// case "september": 
// case "november":console.log(`${month} has 30 days`)
// break;
// case "february":console.log(`${month} has 28 or 28 days(i.e. leap year`)
// default:console.log(`Enter Valid data`)
// }


//  * Enter a month: January
//  * January has 31 days.
