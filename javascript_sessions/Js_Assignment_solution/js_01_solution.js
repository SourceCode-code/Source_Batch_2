// ass.js

// Single line comment saying, "comments can make code readable"
// comments can make code readable

// Single line comment saying, "Welcome to 30DaysOfJavaScript"
// Welcome to 30DaysOfJavaScript

/* 
   Multiline comment saying, 
   "comments can make code readable, easy to reuse and informative"
   comments can make code readable, easy to reuse and informative 
*/

// Create variable.js file and declare variables with string, boolean, undefined, and null data types:
let name = "John";        // string
let isMarried = false;    // boolean
let job;                  // undefined
let empty = null;         // null

// Create datatypes.js file and check the data type using typeof operator:
console.log(typeof name);         // string
console.log(typeof isMarried);    // boolean
console.log(typeof job);          // undefined
console.log(typeof empty);        // object (null is technically an object in JavaScript)

// Declare four variables without assigning values:
let var1;
let var2;
let var3;
let var4;

// Declare four variables with assigned values:
let city = "New York";
let age = 30;
let hasLicense = true;
let country = "USA";

// Declare variables to store your first name, last name, marital status, country, and age in multiple lines:
let firstName = "John";
let lastName = "Doe";
let maritalStatus = "single";
let countryName = "USA";
let userAge = 25;

// Declare variables to store your first name, last name, marital status, country, and age in a single line:
let fName = "John", lName = "Doe", status = "single", userCountry = "USA", uAge = 25;

// Declare two variables, myAge and yourAge, assign initial values, and log to the console:
let myAge = 30;
let yourAge = 25;

console.log("My age is " + myAge + " years.");
console.log("Your age is " + yourAge + " years.");
