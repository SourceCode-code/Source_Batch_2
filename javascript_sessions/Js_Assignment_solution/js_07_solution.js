/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10'; //string value 10
let numTen = 10; // number  value 10

console.log(strTen===numTen) //fasle
console.log(Number(strTen)===numTen) //true   // number --value 10 // number value 10

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let num1=parseFloat("9.8") //9.8 -->10
let num2 = 10

console.log(Math.round(num1)===num2)  // math.round() ----> 0.5--> 1  0.4==>0



// // 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';

console.log(word1.includes("on")&& word2.includes('on'))


// // 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";

console.log(sentence.includes('jargon'))


// // 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// // "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a with sentence with because because because is a conjunction.';
console.log(longSentence.substr(31,23)) //because because because

let firstindex=longSentence.indexOf("because")
console.log(firstindex) //staring index

let lastindex=longSentence.lastIndexOf("because")
console.log(lastindex) //47

let stringlength= lastindex-firstindex+"because".length
console.log(stringlength)

let finalout=longSentence.substr(firstindex,stringlength)
console.log(finalout)


// // 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = "siddhant" 
let lastname = "gadakh"
let age = 25
let year = 1999

console.log(typeof(firstName),typeof(lastname),typeof(age),typeof(year))

// // 7. Check if the type of '10' is equal to 10 using `parseInt`.
console.log(parseInt("10")===10)


// // 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log(4>3,3>2,2>1)

// // 9. Write three JavaScript statements that provide falsy values.
console.log(!(4>3),!(3>2),!(2>1))

// // 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
// //write the output in the comments 
console.log(4 > 3);     //true         
console.log(4 >= 3);    //true         
console.log(4 < 3);     //false        
console.log(4 <= 3);     //false        
console.log(4 == 4);           //true 
console.log(4 === 4);           //true
console.log(4 != 4);           //false 
console.log(4 !== 4);            //false
console.log(4 != '4');           //false
console.log(4 == '4');      //     true
console.log(4 === '4');          //fasle

// // 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let py="python"
let ja="jargon"
console.log((py.length!==ja.length)) //true

// // 12. Evaluate the following expressions and confirm with `console.log()`:
// //write the output in the comments 
console.log("----------------------------------------------")
console.log(4 > 3 && 10 < 12);   // true
console.log(4 > 3 && 10 > 12);   //false
console.log(4 > 3 || 10 < 12);   //true
console.log(4 > 3 || 10 > 12);   //true
console.log(!(4 > 3));          //false
console.log(!(4 < 3));           //true
console.log(!(false));           //true
console.log(!(4 > 3 && 10 < 12)); //fasle
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));        //true

// // 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = "python"

console.log(!(dragon.includes("on")&& python.includes('on')))



// // 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.

// triangle == 0.5 8 base 8 height

console.log(0.5* 23*40)


// // 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.


console.log(22+33+44)
// // 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
console.log((2*(20)))*(2*(10))


// // 17. Get the radius   calculate the area and circumference of a circle.
// pi*r*R

console.log(Math.PI*20**2)

// // 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.
//(y=mx+b)

// -2=2x-2

let slope = 2
let y = -2
let x= -y/slope
console.log(x) //1


 //                                             x1 1        x2 y2
 // // 19. Compare the slope between two points (2, 2) and (6, 10).
//
let slope2=(10-2)/(6-2)


// // 20. Compare the slope of the two questions above. (y=mx+b) 
console.log(slope===slope2)


// // 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.


// // 22. Compare the length of your first name and your family name.


// // 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.



// // 24. Using prompt, when birth year and calculate if they are old enough to drive.

// age >18

let age1=13

age1>18
?console.log("you are allowed to drive")
:console.log("you are not allowed to drive")









