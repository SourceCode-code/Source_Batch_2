
// Simple Questions
// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)


// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log("Last element in the string:", str2[str2.length - 1])

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
let uppercase = str3.toUpperCase()
console.log(uppercase)


// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
let includes = str4.includes("code")
console.log(includes)


// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim())


// Tough and Advanced Questions
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substr(0,5))

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
console.log(str7.split(" "))


// 8. Replace  occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replace("banana","pineapple"))


// 9. Use method chaining to convert the string "JavaScript" to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log("Character at index 5:", str10[5])
// 11. Write a check if  a string and returns true if it includes the word "API",
let str11 = "I am learning API "
console.log(str11.includes("API"))

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12.length)
console.log(str12.substr(14,18))

// 13. Convert the string "HELLOworld" to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim())

// 14. Replace the first occurrence of "test" with "exam" in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test","exam"))

//thanks
