// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge =  '30 Days Of JavaScript';

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method
 // Using substring method
 console.log("first word of the string:", challenge.substring(0, 2));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log("Slice out the phrase of the string:", challenge.substring(3, 21));

// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

// 9. Split the string into an array using split() method
console.log(challenge.split(""));

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(","));

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("30 Days Of JavaScript", "30 Days Of Python"));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J"));

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
let str4 = "i am learning JavaScript because because i want a job"
console.log(str4.indexOf("because"));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.
console.log(str4.lastIndexOf("because"));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence.
console.log(str4.indexOf("because"));
 

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
console.log(challenge.trim());

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"));

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"));

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let str2 = '30 Days of'
let str3 = 'JavaScript'
console.log(str2.concat(str3));

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

// Exercise: Level 2

// 1. Using console.log() print out the following statement:
// 2. Using console.log() print out the following quote by Mother Teresa:


// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence2 = 'I hope this course is not full of jargon.';


// 7. Generate a random number between 0 and 100 inclusively.
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// 8. Generate a random number between 50 and 100 inclusively.
let randomNum1 =Math.floor(Math.random() * (101 - 50)) + 50;
console.log(randomNum1);


// 9. Generate a random number between 0 and 255 inclusively.
let randomNum2 = Math.floor(Math.random()* 256);
console.log(randomNum2);


// 10. Access the 'JavaScript' string characters using a random number.
let jsString = 'JavaScript';

let randomNumber = Math.round(Math.random() * jsString.length);
console.log(jsString[randomNumber]);

// 11. Use console.log() and escape characters to print the following pattern:
console.log('1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125\n');

// 12. Use substr to slice out the phrase because because because from the following sentence:
let str5 = "i am learning JavaScript because because because i want a job"
console.log(str5.substr(24, 24 ));