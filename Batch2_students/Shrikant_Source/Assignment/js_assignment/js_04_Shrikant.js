// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log("Last character is:", str2[9]);


// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
let upperCaseStr = str3.toUpperCase();
console.log("Uppercase string is:", upperCaseStr);


// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log("Includes 'code':", str4.includes("code"));

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log("trimmed string:", str5.trim());

// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
let ext = str6.substr(0, 5);
console.log("Using substr:", ext); 

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";

console.log("Cypress\n is\n fun\n");


// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
let newstr8 = str8.replace("banana", "pineapple")
console.log("Replacing banana with pineapple:", newstr8);


// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
let concat = str9.toUpperCase().toLowerCase().toUpperCase();
console.log("Result of concatination:", concat);


// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log("Character at index 5:", str10[5]);

// 11. Write a check if  a string and returns true if it includes the word "API",
let str11 = "API";
console.log(str11.includes("API"));


// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";

console.log("Last 4 character of the string is:", str12.substr('14','18'));

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
let lowerCaseStr = str13.toLowerCase()
console.log(lowerCaseStr.trim());

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
let newstr14 = str14.replace("test", "exam")
console.log(newstr14);