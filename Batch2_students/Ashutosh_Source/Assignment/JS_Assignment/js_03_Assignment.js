// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello World"
console.log(typeof(greeting));

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
Price = 199.99
console.log(Math.ceil(Price));

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
fullName = "Ashutosh vishwanath more"
console.log(fullName.length);

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
firstName = "Ashutosh"
middleName = "Vishwanath"
lastName = "More"
console.log(firstName," " + middleName," " + lastName);//Concatination using + operator
console.log(`${firstName}${middleName}${lastName}`); // Concatination using template literals

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
langauge = "JavaScript"
console.log(langauge[4]); // "S" Will be the output

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
evenNum20 = Math.floor(Math.random() * 11) * 2
console.log(evenNum20);

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
multiLinestr = "Source and code is a best platform,\n Which most of the student\n using for their career"
console.log(multiLinestr);
multiLinestr1 = `Source and code is a best platform,
Which most of the student
using for their career`
console.log(multiLinestr1);

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
console.log("\tI am learning JavaScript.");
console.log("\tIt's \"fun\" to learn JavaScript!");

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
amount = 45.85
console.log(Math.floor(amount));//45
console.log(Math.ceil(amount));//46
console.log(Math.round(amount));//46

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
quote = "Learning JavaScript is awesome!"
console.log(quote.length);//31
console.log(quote.indexOf("J"));//9


// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
str = 'Hello,\t World!'
console.log(str);

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log(str1 + str2); // using + operator
console.log(`${str1}${str2}`);//Using templete litrel

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
testStr = 'qwertyuiopasdfghjklzxcvbnm'
console.log(testStr[Math.floor(Math.random()* 27)]);

//15 write a program to generate a random odd number form 15-150
randomOdd = Math.floor(Math.random() * ((150 - 15) / 2 + 1)) * 2 + 15;
console.log(randomOdd);

