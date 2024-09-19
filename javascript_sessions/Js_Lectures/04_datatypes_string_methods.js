// Let's learn about the methods used in string manipulation
let str = "siddhantarjungadakh";

// 1. Length of the string
console.log("Length of the string:", str.length); // Output: 19

// 2. Getting the last element in the string
console.log("Last element in the string:", str[str.length - 1]); // Output: 'h'

// 3. Retrieving a specific character by index
console.log("Character at index 18:", str[18]); // Output: 'h'
console.log("Character at index 2:", str[2]); // Output: 'd'

// 4. Converting the string to uppercase
let upperCaseStr = str.toUpperCase();
console.log("Uppercase string:", upperCaseStr); // Output: 'SIDDHANTARJUNGADAKH'

// 5. Converting the string to lowercase
let lowerCaseStr = upperCaseStr.toLowerCase();
console.log("Lowercase string:", lowerCaseStr); // Output: 'siddhantarjungadakh'

// 6. String concatenation using method chaining
let methodConcat = str.toUpperCase().toLowerCase().toUpperCase();
console.log("Method concatenation result:", methodConcat); // Output: 'SIDDHANTARJUNGADAKH'

// 7. Explanation of method chaining
// Method chaining is when the output of one method is a valid input for the next method.
// For example, `str.toUpperCase().length` returns a number, but `toUpperCase()` can't be applied to a number.

try {
    let invalidConcat = str.toUpperCase().length.toUpperCase();
    console.log(invalidConcat);
} catch (e) {
    console.log("Error: Cannot apply toUpperCase() to a number.");
}

// 8. Substr method to get part of a string (start index, number of characters)
let newStr = str.substr(0, 2);
console.log("Using substr:", newStr); // Output: 'si'

// 9. Substring method to get part of a string (start index, end index - non-inclusive)
let str3 = "javascript";
let substring = str3.substring(0, 4);
console.log("Using substring:", substring); // Output: 'java'

// 10. Difference between substr() and substring()
let str4 = "hello";
let substrResult = str4.substr(0, 4); // Output: 'hell'
let substringResult = str4.substring(0, 4); // Output: 'hell'
console.log("Using substring:", substringResult);
console.log("Using substr:", substrResult);

// 11. Splitting strings
let str6 = "siddhant arjun gadakh";
console.log("Split by space:", str6.split(" ")); // Output: ['siddhant', 'arjun', 'gadakh']
console.log("Split by 'a':", str6.split("a")); // Output: ['siddh', 'nt ', 'rjun g', 'd', 'kh']
console.log("Split by characters:", str6.split("")); // Output: ['s', 'i', 'd', 'd', 'h', ...]

// 12. Trim, TrimStart, and TrimEnd methods
let str7 = " Amol ";
console.log("Original length:", str7.length); // Output: 6
console.log("Trimmed string:", str7.trim()); // Output: 'Amol'
console.log("Trimmed length:", str7.trim().length); // Output: 4

// 13. Checking if a string contains a substring using includes()
let str9 = "I am learning JavaScript";
console.log("Includes 'JavaScript':", str9.includes("JavaScript")); // Output: true
console.log("Includes 'javascript':", str9.includes("javascript")); // Output: false

// 14. Replacing part of a string
let str10 = "I am learning JavaScript";
let newStr1 = str10.replace("a", "z");
console.log("After replacing 'a' with 'z':", newStr1); // Output: 'I zm learning JavaScript'

// Replacing a word
let newStr2 = str10.replace("JavaScript", "Cypress");
console.log("After replacing 'JavaScript' with 'Cypress':", newStr2); // Output: 'I am learning Cypress'

// 15. Another example of using trim()
let str11 = " Am  ol ";
console.log("Original string:", str11);
console.log("Trimmed string:", str11.trim()); // Output: 'Amol'
console.log("Trimmed length:", str11.trim().length); // Output: 4
