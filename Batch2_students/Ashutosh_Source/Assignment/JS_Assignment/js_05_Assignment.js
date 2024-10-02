// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

// 2. Print the string on the browser console using console.log()
console.log(challenge)

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
Upcase = challenge.toUpperCase()
console.log(Upcase);

// 5. Change all the string characters to lowercase letters using toLowerCase() method
Locase = challenge.toLowerCase()
console.log(Locase);


// 6. Cut (slice) out the first word of the string using substr() or substring() method
 // Using substring method
let A = "Ashutosh"
console.log(A.substr(0,1));
console.log(A.substring (0,1)); 

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
B = "30 Days Of Java Script"
console.log(B.substr(3, B.length));

// 8. Check if the string contains a word Script using includes() method
console.log(B.includes("Script"));

// 9. Split the string into an array using split() method
console.log(B.split(""));

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(B.split( ));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
C = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(C.split(","));

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
D = "30 Days Of JavaScript"
console.log(D.replace("JavaScript","Python"));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(D[15]);

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()


// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(D.indexOf("a"));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(D.lastIndexOf("a"));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
F1 = "from this class we can get a job because all teachers are well profetional and because real time working"
console.log(F1.indexOf("because"));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.
console.log(F1.lastIndexOf("because"));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence.
console.log(F1.search("because"));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
E1  = " Ashutosh "
console.log(E1.trim());

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
D1 = "30 Days Of JavaScript"
console.log(D1.startsWith("3"));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(D1.endsWith("t"));

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
c1 = "30 Days Of JavaScript"
console.log(c1.match("a"));

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
A1 = '30 Days of'
B1 = 'JavaScript' 
console.log(A1.concat(B1));

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
X = "30 Days Of JavaScript"
console.log(X.repeat(2));

// Exercise: Level 2

// 1. Using console.log() print out the following statement:
// 2. Using console.log() print out the following quote by Mother Teresa:


// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence2 = 'I hope this course is not full of jargon.';

// 7. Generate a random number between 0 and 100 inclusively.
console.log((Math.random()* 100));

// 8. Generate a random number between 50 and 100 inclusively.
console.log((Math.random() *50) + 50);

// 9. Generate a random number between 0 and 255 inclusively.
console.log((Math.random() *255));
// 10. Access the 'JavaScript' string characters using a random number.
let jsString = 'JavaScript';
console.log(jsString[Math.round(Math.random() * (jsString.length + 1))]);

// 11. Use console.log() and escape characters to print the following pattern:
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// 12. Use substr to slice out the phrase because because because from the following sentence:
