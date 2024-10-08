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
let userAge1 = 30;
let userAge2 = 15;
userAge1 > 18

? console.log("You are old enough to drive:", (userAge1))
: console.log("not able to drive with age:", (userAge1));

userAge2 > 18
? console.log("able to drive with age:", (userAge2))
: console.log("You are left with 3 year to drive:", (userAge2));


// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.



/**
 * Enter your age: 30
 * You are 5 years older than me.
 */
let myAge = 25;
let yourAge = 30;
if(myAge<yourAge) {console.log("You are 5 years older than me")}
else {console.log("You are not older than me")}

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.
// Using if...else
let a = 4;
let b = 3;
if(a>b) {console.log("a is greter than b")}
else{console.log("a is not greter than b")};

// Using ternary operator
let diff = (a>b) ?console.log("a is greter than b") :("a is not greter than b");

/**
 * 4 is greater than 3
 */



// 4. Check if a number is even or odd.
/**
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 */
let number = 22;
let number2 = 99;
// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}

if (number2 % 2 !==0) {
    console.log(`${number2} is an odd number.`);
} else {
    console.log(`${number2} is an even number.`);
}
/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let score = 80;
let grade;

switch (true) {
    case (score >= 80 && score <= 100):
    grade = 'A';
    break;
    case (score >= 70 && score < 80):
    grade = 'B';
    break;
    case (score >= 60 && score < 70):
    grade = 'C';
    break;
    case (score >= 50 && score < 60):
    grade = 'D';
    break;
    case (score >= 0 && score < 50):
    grade = 'F';
    break;
    default:
    grade = 'Invalid score';
}

console.log(`The grade for a score of ${score} is: ${grade}`);



// 2. Check the season based on user input month.
let month = "april";
let season;
if (month === 'november' || month === 'december' || month === 'january' || month === 'february') {
    season = 'Winter'}
 else if (month === 'march' || month === 'april' || month === 'may' || month ==='june') {
    season = 'Summer'}
 else if (month === 'july' || month === 'august' || month === 'september' || month ==='october') {
    season = 'Monsoon'}
 else {
    season = 'Invalid month';
}

console.log(`The season for ${month} is: ${season}`);



// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
let day = "sunday";
let today =day.toLowerCase();
switch(true){
    case(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'): today = 'Working Day';
    break;
    case(day === 'saturday' || day === 'sunday'): today = 'Weekend';
    break;
    default: today = 'Invalid date'
}
console.log(`${day} is the ${today}`);
 

//using else if
if (day === 'saturday' || day === 'sunday') { todayday = 'weekend'
    
} else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' 
    || day === 'friday') { today = 'working day'
    
} else {
    day = 'unknown day'
   
}
console.log(`${day} is the ${today}.`)
/**
 * What is the day today? Saturday
 * Saturday is a weekend.
 *
 * What is the day today? FrIDAy
 * Friday is a working day.
 */


/**
 * 
 * 
 * 
 * 
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.
let month1 = 'september'; 
 

let date = month1.toLowerCase() 
switch(date){
    case "january":
    case "march":
    case  "may":
    case "july":
    case "august":
    case "october":
    case "december": console.log(`${date} has 31 days`)
    break;
    case "april":
    case "june":
    case "september":
    case "november": console.log(`${date} has 30 days`)
    break;
    case "february": console.log(`${date} has 28 or 29 days`)
    break;
    default: console.log('Invalid data')
}

// number of days in the month
// let daysInMonth = month1.getDate();

// console.log(`The month ${month1} has ${daysInMonth} days.`);


// /**
//  * Enter a month: January
//  * January has 31 days.
