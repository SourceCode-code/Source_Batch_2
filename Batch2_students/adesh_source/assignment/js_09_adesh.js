
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
let age1 = 30
if (age1 >= 18) {
    console.log(`'You are old enough to drive.'`)
}
else {
    console.log(` years are left to turn 18.`)
}

//
let age = 15;

if (age >= 18) {
    console.log("You are old enough to drive.");
}
else {
    let yearsLeft = 18 - age;
    console.log(`You have ${yearsLeft} years left to turn 18.`);
}


// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.


/**
 * Enter your age: 30
 * You are 5 years older than me.
 */
let myAge = 35
let yourAge = 30
if (myAge > yourAge) {
    console.log("You are 5 years older than me.")
}
else {
    console.log("Your are smaller than me")
}
// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 3;

// Using if...else

if (a > b) {
    console.log('a is greater than b');
}
else {
    console.log('a is not greater than b');
}

// Using ternary operator
let output = (a > b) ? 'a is greater than b' : 'a is not greater than b';
console.log(output);


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
// Check if the number is even or odd using if...else

let number = 22

if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
}

else {
    console.log(`${number} is an odd number.`);
}

// 99 is an odd number.
let number1 = 99;

if (number1 % 2 === 0) {
    console.log(number1 + " is an even number.");
} else {
    console.log(number1 + " is an odd number.");
}


/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let scores = 179
switch (true) {
    case (scores >= 80 && scores <= 100): console.log(`You got grade- A`)
        break
    case (scores >= 70 && scores < 80): console.log(`You got grade- B`)
        break
    case (scores >= 60 && scores < 70): console.log(`You got grade- C`)
        break
    case (scores >= 50 && scores < 60): console.log(`You got grade- D`)
        break
    case (scores >= 0 && scores < 50): console.log(`You are FAIL`)
        break
    default: console.log(`You have enter the wrong score!`)
}


// 2. Check the season based on user input month.

let month = "aPril"
let months = month.toLowerCase()
switch (months) {
    case 'december':
    case 'january':
    case 'february':
        console.log(`${months} in winter season`)
        break
    case 'march':
    case 'april':
    case 'may':
        console.log(`${months} in summer season`)
        break
    case 'june':
    case 'july':
    case 'august':
        console.log(`${months} in mansoon season`)
        break
    case 'september':
    case 'october':
    case 'november':
        console.log(`${months} in post mansoon season`)
        break
    default: console.log(`You have enter Invalid month`)


}

// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.

let day = "SAturday"
let days = day.toLowerCase()

switch (days) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${days} is a working day`)
        break
    case "saturday":
    case "sunday":
        console.log(`${days} is weekend`)
        break
    default: console.log("enter correct data")
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

// jan == 30
// feb == 28
// mar == 31
// apr == 30
// may == 31

let month1 = "AUG"
let month2 = month1.toLowerCase()

switch (month2) {
    //for the case the month is jan
    case "jan": console.log("jan has 31 days")
        break
    //for the case the month is feb
    case "feb": console.log("feb has 28 days")
        break
    //for the case the month is mar
    case "mar": console.log("mar has 31 days")
        break
    // for the case where month is APr 
    case "apr": console.log("apr has 30 days")
        break
    // for the case where month is feb 
    case "may": console.log("Feb has 31 days")
        break
    // for the case where month is feb 
    case "jun": console.log("jun has 30 days")
        break
    // for the case where month is feb 
    case "jul": console.log("jul has 31 days")
        break
    // for the case where month is feb 
    case "aug": console.log("aug has 31 days")
        break
    // for the case where month is feb 
    case "sept": console.log("sept has 30 days")
        break
    // for the case where month is feb 
    case "oct": console.log("oct has 31 days")
        break
    // for the case where month is feb 
    case "nov": console.log("nov has 30 days")
        break
    // for the case where month is feb 
    case "dec": console.log("dec has 31 days")
        break
    // invalid 
    default: console.log("your input is wrong")

}

/**
 * Enter a month: January
 * January has 31 days.
 */