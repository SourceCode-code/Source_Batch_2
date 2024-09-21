// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello World";
console.log(typeof greeting); // Outputs: string

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price = 199.99;
let roundedPrice = Math.ceil(price);
console.log(roundedPrice); // Outputs: 200

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = "Your Full Name"; // Replace with your actual full name
console.log(name.length); // Outputs the number of characters in the name string

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";
let fullNamePlus = firstName + " " + middleName + " " + lastName;
let fullNameTemplate = `${firstName} ${middleName} ${lastName}`;
console.log(fullNamePlus); // Outputs: John Doe Smith
console.log(fullNameTemplate); // Outputs: John Doe Smith

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = 'JavaScript';
console.log(language[4]); // Outputs: S

// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
evenNum20 = Math.floor(Math.random() * 11) * 2;
console.log(evenNum20);


// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
console.log("I am learning JavaScript.\nIt's \"fun\" to learn JavaScript!");

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85;
console.log(Math.floor(amount)); // Outputs: 45
console.log(Math.ceil(amount)); // Outputs: 46
console.log(Math.round(amount)); // Outputs: 46

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote = "Learning JavaScript is awesome!";
console.log(quote.length); // Outputs the length of the quote
console.log(quote.indexOf('J')); // Outputs: 9

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str = 'Hello,\tWorld!';
console.log(str); // Outputs: Hello,   World!

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
let concatenatedPlus = str1 + str2;
let concatenatedTemplate = `${str1}${str2}`;
console.log(concatenatedPlus); // Outputs: abcdef
console.log(concatenatedTemplate); // Outputs: abcdef

// 14. Write a program to pick a random element from the string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let characters = "qwertyuiopasdfghjklzxcvbnm";
let randomIndex = Math.floor(Math.random() * characters.length);
console.log(characters[randomIndex]); // Outputs a random character from the string

//15 write a program to generate a random odd number form 15-150
let max=150
let min = 15
let randomOdd = Math.floor(Math.random() * ((max - min) / 2 + 1)) * 2 + min;
