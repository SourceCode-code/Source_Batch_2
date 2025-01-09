/*
 ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(typeof(strTen))

let numTen1 = parseInt(strTen)
console.log(typeof(numTen1));

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let parseFloat = 9.8;
console.log((9.8 == 10))
console.log(Math.round(parseFloat))




// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
 console.log(word1.match('on'), word2.match('on'));



// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes('jargon'));

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';

let substr = longSentence.substr(30, 24);
console.log("the slice out is:", substr);

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = "Adesh";
let lastName = "Devkar";
let country = "India";
let city = "Tuljapur";
let age = 28;
let isMarried = "Unmarried";
let year = 2024;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));



// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let str = '10';
let str1 = 10;
let str2 = parseInt(str)
console.log(str2)
console.log(str2 === str1);


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let str3 = Boolean(6<5);
console.log(str3);

let str4 = Boolean("welcome");
console.log(str4);

let str5 = Boolean(10==10);
console.log(str5);

// 9. Write three JavaScript statements that provide falsy values.
let str6 = Boolean(5<3);
console.log(str6);

let str7 = Boolean("");
console.log(str7);

let str8 = Boolean(15==12);
console.log(str8);

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3); //  true             
console.log(4 >= 3); // true            
console.log(4 < 3);  // false           
console.log(4 <= 3); // false            
console.log(4 == 4); //  true         
console.log(4 === 4); // true          
console.log(4 != 4);  //  false          
console.log(4 !== 4); // false           
console.log(4 != '4'); // false          
console.log(4 == '4'); // true         
console.log(4 === '4'); //false         

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
console.log(word1.length);
console.log(word2.length);

console.log(word1.length != 6);
console.log(word2.length === 7); 

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);  // true 
console.log(4 > 3 && 10 > 12);  // false
console.log(4 > 3 || 10 < 12);  // true
console.log(4 > 3 || 10 > 12); //  true  
console.log(!(4 > 3));         //  false 
console.log(!(4 < 3));         //  true  
console.log(!(false));         //  true  
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));        // true

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon'; // using ternary operator
let python = "python";
console.log(dragon.includes,python.includes);



// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base = 10;
let height = 12;
console.log(1/2 * base * height);

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let sideA = 3;
let sideB = 3;
let sideC = 6;
console.log(sideA + sideB + sideC);

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let length = 12;
let width = 10;
console.log( length * width);
console.log( 2 * (length + width));

// 17. Get the radius   calculate the area and circumference of a circle.
let radius = 20;
console.log(3.14 * radius * radius);
console.log( 2 * 3.14 * radius);

// 18. Calculate the slope, x-intercept and y-intercept of y = 2x - 2.
let slope1 = 2
let y = -2
let x= -y/slope1
console.log(x)

// 19. Compare the slope between two points (2, 2) and (6, 10).
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope = (6-2)/(10-2);
console.log(slope);


// 20. Compare the slope of the two questions above.
console.log(slope===slope1)



// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.
// help me to solvethis que

// 22. Compare the length of your first name and your family name.
let firstName1 = "Adesh";
let familyName1 = "Devkar";
console.log(firstName1.length);
console.log(familyName1.length);
console.log(firstName1.length > familyName1.length);


// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 22;
let yourAge = 25;
console.log(myAge - yourAge);



// 24. Using prompt, when birth year and calculate if they are old enough to drive.*/
