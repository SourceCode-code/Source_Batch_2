// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
var greeting = "Hello World"
console.log("Ans of Qes No. 1",typeof(greeting));

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let Price = 199.99;
console.log("Ans of Qes No. 2",Math.ceil(Math.round(Price)));

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let fullNAME= "Amol Kantilal jadhav"
console.log("Ans of Qes No. 3",fullNAME.length);// for length numbers start from 1 not from 0


// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstName= "Amol";
let middleName = "Kantilal";
let lastname = "Jadhav";

/*let Fullname = (firstName+ " "+middleName+ " "+lastname)
console.log( "My Full name is  "+ Fullname);*/

let FullName1 = `My full name is ${firstName} ${middleName} ${lastname}`;
console.log("Ans of Qes No. 4",FullName1);// here we have to use backticks other we are not able to log the result

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = 'Javascript'
console.log("Ans of Qes No. 5",language[4]);


// 6. Write a program to generate an even random number between 0-20 using `Math.random()`, then log the number.
let x = ((Math.round(Math.random()*11)*2));
console.log("Ans of Qes No. 6",x)

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let y = 'lKLlakejjjjrieiijfnfuueioppqppqppqpqjjjejjd\
ppqppqppqpqppqppqppqppqpiieiieieiidjjfjfjjfkkdk\
alalaljsjsklakjslakllkalkskslakkslk'
console.log("Ans of Qes No. 7",y)


// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
let Str1= `I \nam\nlearningn \nJavaScript.`;
console.log("Ans of Qes No. 8.1",Str1)

let Str2= `It's \"fun\" to learn JavaScript `;
console.log("Ans of Qes No. 8.2",Str2)

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85;
console.log("Ans of Qes No. 9.1",Math.floor(amount));
console.log("Ans of Qes No. 9.2",Math.ceil(amount));
console.log("Ans of Qes No. 9.3",Math.round(amount));

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote = "Learning JavaScript is awesome!"
console.log("Ans of Qes No. 10",quote.length);
console.log("Ans of Qes No. 10.1",quote.indexOf('J'))// this method im found from youtuve i.e. indexof('')

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str= '"Hello"\t"World!"'
console.log("Ans of Qes No. 12",str)

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
let STR = str1 + " " + str2
console.log("Ans of Qes No. 13",STR)


// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let B= "qwertyuiopasdfghjklzxcvbnm"
Randomelement= (Math.round(Math.random()*B.length))
console.log("Ans of Qes No. 14",B[Randomelement])


//15 write a program to generate a random odd number form 15-150
let a =15
let b= 150
let randomodd = Math.round(Math.random()*(75-15)+15)
console.log("Ans of Qes No. 15",2*randomodd+1);


