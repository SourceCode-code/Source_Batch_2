/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.
age = 18
if (age >= 18){
    console.log("You are old enough to drive");
}    
else{
    console.log(`${18 - age} years left to tern 18`);
}
    

/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */

// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.
myAge = 25
yourage = 25
if(myAge>yourage){
    console.log(`you are ${myAge - yourage} years younger than me`);
}
else{
    console.log(`you are ${yourage - myAge} years older than me`);
    
}

/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.
let a = 2;
let b = 3;
// Using if...else
if (a > b){console.log(`${a} is greter than ${b}`);
}
else{`${b} is greter than ${a}`}

// Using ternary operator
(a>b) ? console.log(`${a} is greter than ${b}`):
console.log(`${b} is greter than ${a}`);

/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
num = 99
if (num%2 == 0){console.log(`${num} is a even number`)}
else{console.log(`${num} is a odd number`);
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
marks = 72
if(marks>= 80 && marks<= 100){
    console.log("Your grade is A");
}
else if(marks>= 70 && marks<= 79)
    console.log("Your grade is B");

else if(marks>= 60 && marks<= 69)
    console.log("Your grade is C");

else if(marks>= 50 && marks<= 59)
    console.log("Your grade is D");

else if(marks>= 0 && marks<= 49)
    console.log("Your grade is F")

// 2. Check the season based on user input month.
month = "June"
if(month == "January" || month == "february" || month == "March" || month == "April")
    console.log("Season is summer");

else if(month == "May" || month == "June" || month == "July" || month == "August")
    console.log("Season is rainy");

else if (month == "September" || month == "Octomber" || month == "November" || month == "December")
    console.log("Season is winter");


// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
day = "Sunday"
if(day == "Monday" || day == "Tuesday" || day == "Wednsday" || day == "Thursday" || day == "Friday")
    console.log(`${day} is a working day`);
else if (day == "Saturday" || day == "Sunday")
    console.log(`${day} is a holiday`);
        
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
month1 = "April"
if (month1 = "january")
    console.log(`${month1} has a 31 days`);

else if (month1 = "February")
    console.log(`${month1} has a 29 days`);

else if (month1 = "March")
    console.log(`${month1} has a 31 days`);

else if (month1 = "April")
    console.log(`${month1} has a 30 days`);

else if (month1 = "May")
    console.log(`${month1} has a 31 days`);

else if (month1 = "jane")
    console.log(`${month1} has a 30 days`);

else if (month1 = "july")
    console.log(`${month1} has a 31 days`);

else if (month1 = "August")
    console.log(`${month1} has a 31 days`);

else if (month1 = "september")
    console.log(`${month1} has a 30 days`);

else if (month1 = "Octomber")
    console.log(`${month1} has a 31 days`);

else if (month1 = "November")
    console.log(`${month1} has a 30 days`);

else if (month1 = "December")
    console.log(`${month1} has a 31 days`);

else("please enter valid month")


/**
 * Enter a month: January
 * January has 31 days.
 */
