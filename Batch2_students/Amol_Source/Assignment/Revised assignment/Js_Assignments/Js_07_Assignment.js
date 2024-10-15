// /** 
//  * ASSIGNMENT 6 & 7 QUESTIONS 
//  */

// // 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
// let strTen = '10';
// let numTen = 10;
// console.log(strTen==+numTen)
// let strTen1 =Number(strTen)
// console.log(strTen1===numTen)


// // 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
// let num1= '9.8'
// let Num = Number(num1)
// console.log(Math.round(Num))


// 3. Check if 'on' is found in both 'python' and 'jargon'.
// let word1 = 'python';
// let word2 = 'jargon';
// console.log(word1.includes('on')&&word2.includes('on'))


// // 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
// let sentence = "I hope this course is not full of jargon.";
// console.log(sentence.includes('jargon'))


// // 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// // "You cannot end a sentence with because because because is a conjunction."
// let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
// let a = longSentence.indexOf("because")
// let b = longSentence.lastIndexOf("because")
// let c = b-a+"because".length
// console.log(longSentence.substr(31,23))


// // 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
// let firstName = "amol"
// console.log(typeof(firstName));
// let lastName = "Jadhav"
// console.log(typeof(lastName));
// let country = "india"
// console.log(typeof(country));
// let city = "sangamner"
// console.log((city));
// let age = 24;
// console.log(typeof(age));
// let isMarried = false;
// console.log(typeof(isMarried));
// let year = 2024;
// console.log(typeof(year));

// // 7. Check if the type of '10' is equal to 10 using `parseInt`.
// let num = "10"
// let num1 = parseInt(num)
// console.log(num1==num)

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
// let a=9
// let b =10
// let m = (a>b||b>a)
// let n = (a<b&&b>a)
// let o = !(a<b&&b<a)
// console.log(m,n,o)



// // 9. Write three JavaScript statements that provide falsy values.
// let a=9
// let b =10
// let m = (a>b||b<a)
// let n = (a<b&&b<a)
// let o = (a<b&&b<a)
// console.log(m,n,o)

// // 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
// //write the output in the comments 
// console.log(4 > 3);      //true         
// console.log(4 >= 3);     // true         
// console.log(4 < 3);      //flase    
// console.log(4 <= 3);     //flase          
// console.log(4 == 4);     //true         
// console.log(4 === 4);    //true       
// console.log(4 != 4);     //flase    
// console.log(4 !== 4);    //flase        
// console.log(4 != '4');   //flase       
// console.log(4 == '4');   //true        
// console.log(4 === '4');  //flase     

// // 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
// let Word1= "python"
// let word1 = Word1.length
// let Word2 = "jargon"
// let word2 = Word2.length
// console.log(word1!==word2)

// // 12. Evaluate the following expressions and confirm with `console.log()`:
// //write the output in the comments 
// console.log(4 > 3 && 10 < 12);   //true
// console.log(4 > 3 && 10 > 12);   //flase
// console.log(4 > 3 || 10 < 12);   //true
// console.log(4 > 3 || 10 > 12);   //true
// console.log(!(4 > 3));         //flase 
// console.log(!(4 < 3));         //true  
// console.log(!(false));           //true
// console.log(!(4 > 3 && 10 < 12)); //flase
// console.log(!(4 > 3 && 10 > 12)); //true
// console.log(!(4 === '4'));       //true 

// // 13. Check if there is no 'on' in both 'dragon' and 'python'.
// let dragon = 'dragon';
// let paython = "python"
// let statment = dragon.includes('on')&&paython.includes("on")
// console.log(!statment)

// // 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
// a= 2
// b=3
// console.log(.5*a*b)
// // 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
// a=2
// b=3
// c=4
//console.log(a+b+c)
// // 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
length =2
width=4
console.log(2*(length*width)) //area
console.log((length*width)) // perimeter
// // 17. Get the radius   calculate the area and circumference of a circle.
let rad = 3
console.log(Math.round(Math.PI*rad**2))

// // 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.

// // 19. Compare the slope between two points (2, 2) and (6, 10).

// // 20. Compare the slope of the two questions above.

// // 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.
// let firstname="Amol".length

// let lastname = "jadhav".length
// console.log(firstname==lastname)

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
// let myAge = 24
// let yourAge = 30
// let agediff = myAge-yourAge
// console.log(Math.abs(agediff))
// // 24. Using prompt, when birth year and calculate if they are old enough to drive.
// let myAge = 24
// let drivingAge = 18
// let agediff = drivingAge-myAge
// myAge>drivingAge ? console.log(`you are old enough to drive`):console.log(`you are not enough to drive`)

