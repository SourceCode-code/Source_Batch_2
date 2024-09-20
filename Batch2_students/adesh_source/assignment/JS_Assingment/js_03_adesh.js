// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.

let greetings="Hello world";
console.log(typeof greetings);

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price=199.99;
let roundPrice=Math.ceil(price);
console.log(roundPrice);

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let Name="Adesh vyankat Devkar";
console.log(Name.length);

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstname="adesh";
let middlename="vyankat";
let lastname="devkar";

let fullname = `My full name is ${firstname} ${middlename} ${lastname}`;
console.log(fullname); 


// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language="JAVASCRIPT";
console.log(language[4]);


// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let a=Math.floor(Math.random()*11)*2;
console.log(a);

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let longString = "rtdfghjgggggggttttttdfghjxcvbnfghjdfghdfghjfghhhbbgfdecgrtyuhghjk\
bdfghjdfghjjdfghjertyughj";

console.log(longString);

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
let x = "adesh\vyankat\devkar\at\karla\ta\tuljapur";
console.log(x);


// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount=45.85;
console.log(Math.floor(amount));
console.log(Math.ceil(amount));
console.log(Math.round(amount));


// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.

let quote='Learning javascript is awesome!'
console.log(quote.length);
console.log(quote.indexOf('j'));
// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.

let ste='Hello world';
console.log(str);


// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1="abc";
let str2="def";
let str5=str1+ "" +str2;

let str = `My full name is ${str1} ${str2} ${str3}`;
console.log(str); 
console.log(str5);
// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let x1="qwertyuiopasdfghjklzxcvbnm";
randomelement=(Math.round(Math.random()*x1.length))

//15 write a program to generate a random odd number form 15.
const randomOddNumber=(Math.floor()*8)*2+1;
console.log(randomOddNumber);

