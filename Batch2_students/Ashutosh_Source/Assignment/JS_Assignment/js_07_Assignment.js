/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(typeof(strTen) == typeof(numTen));
console.log(typeof(Number(strTen)) == typeof(numTen));
console.log(typeof(+strTen) == typeof(numTen));
console.log(typeof(parseInt(strTen)) == typeof(numTen));
console.log(typeof(strTen) == typeof(toString(numTen)));

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
A = parseFloat('9.8')
console.log(A);
console.log(Math.round(A));

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes("on")) // By using boolean
console.log(word2.includes("on"));

word1.includes("on") && word2.includes("on") ? // By using ternery operator
console.log("Both words contain on"): 
console.log("Both words not contain on");

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"));

sentence.includes("jargon") ? console.log("sentence contain jargon"): 
console.log("sentence not contain jargon");

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
console.log(longSentence.substr(30, 24));
console.log(longSentence.substring(30, 54));

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
firstName = "Ashutosh", lastName = "More", country = "india", city = 'pune', age = 25, isMarried = true, year = 2023
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
A1 = '10'
A2 = 10
console.log(typeof(A1) == typeof(A2));
console.log(typeof(parseInt(A1)) == typeof(A2));

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log(typeof(parseInt(A1)) == typeof(A2));
console.log(A1.includes("0"));
console.log(longSentence.includes("a"));

// 9. Write three JavaScript statements that provide falsy values.
console.log(typeof(parseInt(A1)) !== typeof(A2));
console.log(A1.includes("00"));
console.log(longSentence.includes("aa"));

// // 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
// //write the output in the comments 
console.log(4 > 3);  //true            
console.log(4 >= 3); //true           
console.log(4 < 3);  //false           
console.log(4 <= 3); //false            
console.log(4 == 4); //true           
console.log(4 === 4);//true           
console.log(4 != 4); //false           
console.log(4 !== 4);//false            
console.log(4 != '4');//false           
console.log(4 == '4');//true           
console.log(4 === '4');// false          

// // 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
B1 = 'python', B2 = 'jargon'
console.log(B1.length != B2.length);

// // 12. Evaluate the following expressions and confirm with `console.log()`:
// //write the output in the comments 
console.log(4 > 3 && 10 < 12);   //true
console.log(4 > 3 && 10 > 12);   //false
console.log(4 > 3 || 10 < 12);   //true
console.log(4 > 3 || 10 > 12);   //true
console.log(!(4 > 3));  //false        
console.log(!(4 < 3));  //true         
console.log(!(false));  //true         
console.log(!(4 > 3 && 10 < 12)); //false 
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true       

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = "Python";
!(dragon.includes("on") && python.includes("on")) ?
console.log("there is on in both dragon and python") :
console.log("there is NO on in both dragon and python");

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
bOfTrangle = 10
hOfTrangle = 10
aOfTrangle = (bOfTrangle * hOfTrangle)
console.log(aOfTrangle);

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
sideA = 10
sideB = 10
sideC = 10
pOfTrangle = sideA + sideB + sideC
console.log(pOfTrangle);

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
lOfrec = 10
wOfRec = 10
console.log(`Area of rectangle = ${lOfrec * wOfRec}`, `Perimeter of rectangle = ${2*(lOfrec + wOfRec)}`);


// 17. Get the radius   calculate the area and circumference of a circle.
rOfCircle = 10
console.log(`area of circle = ${(Math.PI)*(rOfCircle*rOfCircle)}`, `circumference of circle = ${2*(Math.PI*rOfCircle)}`);

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.
// y = "2x - 2"
// slope = y[0]
// x-Intercept =  
// y-Intercept = 
// 19. Compare the slope between two points (2, 2) and (6, 10).

// 20. Compare the slope of the two questions above.

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.
xValue = 2
yValue = ((2*2) + (6*(2)) + (9))
console.log(yValue);

// 22. Compare the length of your first name and your family name.
fname = "ashutosh"
faName = "more"
console.log(`${fname.length - faName.length}`);

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
myAge = 25
yourAge = 22
diff = myAge - yourAge
console.log(diff);

// 24. Using prompt, when birth year and calculate if they are old enough to drive.
age = 22
age >= 18 ? console.log("you can drive"):
console.log("you can't drive");


