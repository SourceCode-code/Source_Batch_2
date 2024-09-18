// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello World"
console.log(typeof(greeting));


// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let Price = 199.99;
console.log(Math.ceil(Price));

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = "Shrikant khaire";
console.log(name.length);

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstname = "Shrikant";
let lastname = "Khaire";
let middlename = "Udhav";
// by using + operator
let Fullname = firstname + " " + middlename + " " + lastname;

console.log(Fullname);

// by using template literals
let fullname = `My full name is ${firstname} ${middlename} ${lastname}`;
console.log(fullname);


// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = "JavaScript";
console.log(language[4]);


// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let evenNum = Math.floor(Math.random() * 11) * 2;
console.log(evenNum);

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let longLit = "Hello I'M Shrikant Khaire from pune, I'm looking for a opportunties in IT sector as a Automation Test Engineer."
console.log(longLit);

let longLit1 = `Hello I'M Shrikant Khaire from pune, 
I'm looking for a opportunties in IT sector 
as a Automation Test Engineer.`
console.log(longLit1);

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
console.log("I\n am\n learning \'JavaScript\'.")
console.log("\tIt's \"fun\" to \nlearn \"JavaScript!\"")


// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85;
console.log(Math.floor(amount));
console.log(Math.ceil(amount));
console.log(Math.round(amount));

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote = "Learning JavaScript is awesome!"
console.log(quote.length);
console.log(quote.indexOf("J"));


// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str = 'Hello,\n World!'
console.log(str);
let Str1 = 'Hello,\t World!'
console.log(Str1);


// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
// using + operator
console.log(str1 + str2);

//Using templete litrel
console.log(`${str1}${str2}`);


// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let ABC = 'qwertyuiopasdfghjklzxcvbnm'
console.log(ABC[Math.floor(Math.random()* 10)]);


//15 write a program to generate a random odd number form 15-150*/
let x = 15;
let z = 150;
let randomOdd = Math.floor(Math.random() * ((z - x) / 2 + 1)) * 2 + x;
console.log(randomOdd);