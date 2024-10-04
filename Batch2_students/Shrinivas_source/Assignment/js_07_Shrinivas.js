/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(strTen===numTen)
// Convert string to number
let strTen1 = Number(strTen);
console.log(strTen1 === numTen)


// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let number =  parseFloat('9.8')
let result = (number === 10) ? number:Math.round(number)

console.log(result) 

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';

// Check if 'on' is found in both words
let foundWords = word1.includes('on') && word2.includes('on');

console.log(foundWords); // Output: true


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";

// Check if 'jargon' is in the sentence using the ternary operator
let output = sentence.includes('jargon') 
   
console.log(output);


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."

let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
let g= longSentence.indexOf('because')
console.log(g)

let slicedPhrase = longSentence.substr(31, 24); 

console.log(slicedPhrase); // Output: because because because


// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
// Declare variables
let firstName = "shrinivas";          // string
let lastName = "kadam";            // string
let country = "INDIA";             // string
let city = "pune";                 // string
let age = 27;                    // number
let isMarried =               // undefined
               

// Check and log the data types using typeof
console.log(typeof firstName); // string
console.log(typeof lastName);   // string
console.log(typeof country);     // string
console.log(typeof city);           // string
console.log(typeof age);             // number
console.log(typeof isMarried);      // undefined

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let x1 = '10'
let x2 = 10
//Using parseInt() - Converts a string into an integer
let x3 = parseInt(x1)
console.log(x3===x2)  //true


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let isTrue = Boolean("source&code");  // true
let isTrueNumber = Boolean(42); // true
let string = Boolean(-42)      // true

console.log(isTrue)
console.log(isTrueNumber)
console.log(string)

// 9. Write three JavaScript statements that provide falsy values.

let str = Boolean("");      
let falsyNumber = Boolean(0); 
let num = Boolean()

console.log(str);       // Output: false
console.log(falsyNumber); // Output: false
console.log(num)         // output : false

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);            // Output: true 
console.log(4 >= 3);           // Output: true
console.log(4 < 3);            // Output: false
console.log(4 <= 3);           // Output: false 
console.log(4 == 4);           // Output: true 
console.log(4 === 4);          // Output: true
console.log(4 != 4);           // Output: false
console.log(4 !== 4);          // Output: false  
console.log(4 != '4');         // Output: false 
console.log(4 == '4');         // Output: true
console.log(4 === '4');        // Output: false 

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let aa = 'python'
let bb = 'jargon'
cc=(aa.length)
dd=(bb.length)
console.log(cc>dd && cc==dd)
// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);   // Output: true
console.log(4 > 3 && 10 > 12);   // Output: false
console.log(4 > 3 || 10 < 12);   // Output: true
console.log(4 > 3 || 10 > 12);   // Output: true
console.log(!(4 > 3));           // Output: false
console.log(!(4 < 3));           // Output: true
console.log(!(false));           // Output: true
console.log(!(4 > 3 && 10 < 12)); // Output: false
console.log(!(4 > 3 && 10 > 12)); // Output: true
console.log(!(4 === '4'));        // Output: true

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = 'python';
console.log(!(dragon.includes('on') && !python.includes('on')))


// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.

let base = 5; 
let height = 10; 

// Calculate the area of the triangle
let area = (base * height) / 2;
console.log(`The area of the triangle is: ${area}`);

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

let a = 7; 
let b = 9; 
let c = 10; 

// Calculate the perimeter of the triangle
let perimeter = a + b + c;

console.log(`The perimeter of the triangle is: ${perimeter}`);

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

let length = 12; 
let width = 6;   

// Calculate the area and perimeter of the rectangle
let area1 = length * width;
let perimeter1 = 2 * (length + width);

console.log(`The area of the rectangle is: ${area1}`);
console.log(`The perimeter of the rectangle is: ${perimeter1}`);

// 17. Get the radius   calculate the area and circumference of a circle.
let radius = 6; 

// Calculate the area and circumference of the circle
const pi = Math.PI; 
let area2 = pi * radius * radius;       // Area = πr²
let circumference = 2 * pi * radius;   // Circumference = 2πr

console.log(`The area of the circle is: ${area}`);
console.log(`The circumference of the circle is: ${circumference}`);

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.
// Given equation: y = 2x - 2

// Slope
let slope = 2;

// Y-intercept (when x = 0)
let yIntercept = -2;

// X-intercept (when y = 0)
let xIntercept = 1;

// Output the results
console.log(`Slope: ${slope}`);
console.log(`Y-Intercept: (0, ${yIntercept})`);
console.log(`X-Intercept: (${xIntercept}, 0)`);

// 19. Compare the slope between two points (2, 2) and (6, 10).

let point1 =  (2, 2)
let point2 =  (4, 6 )

// Calculate the slope
let slope1= (6 -2) / (4 - 2);
console.log("slope between two point is ",slope1)

// 20. Compare the slope of the two questions above.
let que18Slope = 2
let que19Slope = 2

console.log(que18Slope==que19Slope)
// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.
let firstName1 = "shrinivas"
let familyName = "kadam"
let k =firstName1.length
let l =familyName.length
k>l?console.log("your first name,shrinivas is longar than yuor family name,kadam"):console.log("")
 
// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 27;
let yourAge = 30;

let ageDifference = yourAge - myAge;

console.log("Age difference:", ageDifference);


// 24. Using prompt, when birth year and calculate if they are old enough to drive.
let age2 = 17;
age2 > 18
? console.log(`they are old enough to drive with age of ${age2}`)
: console.log(`they are not old enough to drive with age of ${age2}`) 



