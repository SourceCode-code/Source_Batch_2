// Simple Questions
// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log("Ans of Qes No. 1",str1.length)

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
//console.log("Ans of Qes No. 2",str2[9]);
let Lastchar= ((str2.length)-1)
console.log("Ans of Qes No. 2",str2[Lastchar])

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log("Ans of Qes No. 3",str3.toUpperCase());


// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log("Ans of Qes No. 4",str4.includes("code"));


// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log("Ans of Qes No. 5",str5.trim());


// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log("Ans of Qes No. 6",str6.substr(0,5))

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
console.log("Ans of Qes No. 7.1",str7.split(" "),"\nCypress\n is\n fun")


// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log("Ans of Qes No. 8",str8.replace('banana','pineapple'));


// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log("Ans of Qes No. 9",str9.toUpperCase().toLowerCase().toUpperCase());

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log("Ans of Qes No. 10",str10[4]);

// 11. Write a check if  a string and returns true if it includes the word "API",
let str = "API testing";
console.log("Ans of Qes No.11",str.includes("API"));

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log("Ans of Qes No. 12",str12.substr('14','18'));

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
let lowercase1 =(str13.toLowerCase().trim())
console.log("Ans of Qes No. 13",lowercase1);

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log("Ans of Qes No. 14",str14.replace("test","exam"));

//thanks 