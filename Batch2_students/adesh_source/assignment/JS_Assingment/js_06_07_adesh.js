let strTen = '10';
let numTen = 10;

console.log(typeof strTen === typeof numTen);
let convertedStrTen = Number(strTen);
console.log(convertedStrTen === numTen);


// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let parsedFloat = parseFloat('9.8');
console.log(parsedFloat === 10);
let roundedValue = Math.round(parsedFloat);
console.log(roundedValue === 10);


// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes('on')); // true
console.log(word2.includes('on')); // false


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes('jargon')); // true


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
let slicedPhrase = longSentence.substr(39, 23);
console.log(slicedPhrase);


// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 30;
let isMarried = false;
let year = 2024;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number


// 7. Check if the type of '10' is equal to 10 using `parseInt`.
console.log(parseInt(strTen) === numTen); // true


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log(1 == '1'); // true
console.log(!!'non-empty string');
console.log(!!{}); 


// 9. Write three JavaScript statements that provide falsy values.
console.log(0 == false); 
console.log(null == false);
console.log(undefined == false); 


/*
10. Figure out the result of the following comparison expressions:
Output:
true
true
false
false
true
true
false
true
false
true
false
*/
console.log(4 > 3);              
console.log(4 >= 3);             
console.log(4 < 3);             
console.log(4 <= 3);             
console.log(4 == 4);            
console.log(4 === 4);           
console.log(4 != 4);            
console.log(4 !== 4);           
console.log(4 != '4');           
console.log(4 == '4');           
console.log(4 === '4');          

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let lenPython = word1.length; 
let lenJargon = word2.length; 
console.log(lenPython === lenJargon);


// 12. Evaluate the following expressions and confirm with `console.log()`:
console.log(4 > 3 && 10 < 12);   // true
console.log(4 > 3 && 10 > 12);   // false
console.log(4 > 3 || 10 < 12);   // true
console.log(4 > 3 || 10 > 12);   // true
console.log(!(4 > 3));           // false
console.log(!(4 < 3));           // true
console.log(!(false));           // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));         // true

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
console.log(!dragon.includes('on') && !word1.includes('on')); 


// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base = parseFloat("Enter the base of the triangle:");
let height = parseFloat("Enter the height of the triangle:");
let triangleArea = 0.5 * base * height;
console.log("Area of the triangle: " + triangleArea);


// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let a = prompt("Enter side a of the triangle:");
let b = prompt("Enter side b of the triangle:");
let c = prompt("Enter side c of the triangle:");
let trianglePerimeter = parseFloat(a) + parseFloat(b) + parseFloat(c);
console.log("Perimeter of the triangle: " + trianglePerimeter);


// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");
let rectangleArea = length * width;
let rectanglePerimeter = 2 * (parseFloat(length) + parseFloat(width));
console.log("Area of the rectangle: " + rectangleArea);
console.log("Perimeter of the rectangle: " + rectanglePerimeter);


// 17. Get the radius   calculate the area and circumference of a circle.
let radius = prompt("Enter the radius of the circle:");
let circleArea = Math.PI * Math.pow(radius, 2);
let circleCircumference = 2 * Math.PI * radius;
console.log("Area of the circle: " + circleArea);
console.log("Circumference of the circle: " + circleCircumference);


// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.
let slope = 2; // coefficient of x
let xIntercept = -(-2 / slope); // where y=0, so x = -(-2/2) = 1
let yIntercept = -2; // when x=0
console.log("Slope: " + slope);
console.log("X-intercept: " + xIntercept);
console.log("Y-intercept: " + yIntercept);


// 19. Compare the slope between two points (2, 2) and (6, 10).
let point1 = { x: 2, y: 2 };
let point2 = { x: 6, y: 10 };
let calculatedSlope = (point2.y - point1.y) / (point2.x - point1.x); // (y2 - y1) / (x2 - x1)
console.log("Slope between points: " + calculatedSlope);


// 20. Compare the slope of the two questions above.
console.log("Is the slope of y = 2x - 2 equal to the slope between the two points? " + (calculatedSlope === slope)); // false


// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.
for (let x = -10; x <= 10; x++) {
    let y = Math.pow(x, 2) + 6 * x + 9; // y = x^2 + 6x + 9
    console.log(`For x = ${x}, y = ${y}`);
}


// 22. Compare the length of your first name and your family name.
let myFirstName = "John"; // Example first name
let myLastName = "Doe"; // Example last name
console.log(myFirstName.length === myLastName.length); // false (6 vs 3)


// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 30; // Example age
let yourAge = 25; // Example age
let ageDifference = Math.abs(myAge - yourAge);
console.log("Age difference: " + ageDifference);


// 24. Using prompt, when birth year and calculate if they are old enough to drive.
let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
let age1 = currentYear - birthYear;
if (age1 >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log("You are not old enough to drive.");
}