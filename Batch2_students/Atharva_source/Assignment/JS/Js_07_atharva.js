// ASSIGNMENT 6 AND 7  //

//Q1.  Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(typeof(strTen)); // strTen is a string

let D1 = parseInt(strTen);
console.log(typeof(D1)); // D1 is a number


//Q2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
// let NUM = parseFloat('9.8');
// NUM == 10 ? console.log("NUM is not uqual to 10 "):
// console.log(Math.round(NUM));
// console.log("NUM is uequal to 10 ")

let NUMBER1 = parseFloat('9.8');
let NUMBER2 = 10;
console.log(Math.round(NUMBER1) === NUMBER2);



//Q.3  Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
let FoundInBoth = word1.includes('on') && word2.includes('on');
console.log(FoundInBoth); //true 

//Q.4 Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes('jargon')); //true 

//Q.5 Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
console.log(longSentence.indexOf('because because because'));
console.log(longSentence.substr(31,23));


//Thought of a diffenrent approach/ way to extract 'beacuse' ; i think it is wrong // 
let startIndex = longSentence.indexOf('because because becasue');

let extractedPhrase = longSentence.substr(startIndex, 'because because becasue'.length);
console.log(extractedPhrase);

//Q.6Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.

let firstName = 'Atharva';
let lastName = 'Pandit';
let country = 'India';
let city = 'Pune';
let age = 25;
let isMarried = 'No';
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));

//Q.7Check if the type of '10' is equal to 10 using `parseInt`.
let Y = '10';
let Num = 10 ;
let Z = parseInt(Y);
console.log(Y == Num);

console.log(parseInt("10")===10);




//Q.8 Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
//1 
let stateMent1 = 'This is javascript language';
let istrue = Boolean('javascript');
console.log(istrue);

//2 
let stateMent2 = "9999";
let IsTrueNumber = Boolean("9999");
console.log(IsTrueNumber);

//3 
let stateMent3 = 'Guten Tag';
let isTrue = Boolean('Tag');
console.log(isTrue);


//9   Write three JavaScript statements that provide falsy values.
//1
let Statement1 = "";
let IsFalse = Boolean("");
console.log(IsFalse);

//2 
let Statement2 = 0;
let isFalseNumber = Boolean(Statement2);
console.log(isFalseNumber);

//3 
let Statement3 = null;
let isFalse = Boolean(Statement3);
console.log(isFalse);

//Q.10  Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);  //true             
console.log(4 >= 3);  //  true         
console.log(4 < 3);    //false         
console.log(4 <= 3);   //false          
console.log(4 == 4);    //true        
console.log(4 === 4);   //true        
console.log(4 != 4);    //false        
console.log(4 !== 4);  // false         
console.log(4 != '4'); //false        
console.log(4 == '4');  //True        
console.log(4 === '4'); //false

//Q.11 Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let A1 = 'python';
let A2 = 'jargon';
let Length1 = A1.length;
let Length2 = A2.length;
let FalsyLength = Length1!== Length2;
console.log(FalsyLength); //false , as both the lengths are same .

// console.log((py.lentgth!==ja.length))

//Q.12 Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);   // True 
console.log(4 > 3 && 10 > 12);  // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12);  // true
console.log(!(4 > 3)); //false         
console.log(!(4 < 3)); //true          
console.log(!(false)); //true           
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true 
console.log(!(4 === '4')); // true  

//Q.13  Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = 'python';
console.log(!(dragon.includes("on")&& python.includes('on')));



//Q.14 
let height = 87;
let base = 65;
let AreaOfTriangle = base * height;
console.log( .5 * base*height);


//Q.15  Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter

let a = 20;
let b = 30;
let c = 50;
let perimeter = a + b + c;
console.log(perimeter);

//Q.16 Calculate the area and perimeter of a rectangle, prompting for length and width.
let Length = 79;
let Width = 67;
let Area = Length * Width;
let Perimeter = 2 * Length * Width;
console.log(Area);
console.log(Perimeter);

//Q.17 Get the radius   calculate the area and circumference of a circle
let radius = 4.8;
let AreaOfCircle = 3.14 * radius *radius;
let circumferenceOfCircle = 2 * 3.14 * radius;
console.log(AreaOfCircle);
console.log(circumferenceOfCircle);

//Q.18 
let slope = 2;
let y = -2;
let x = -y/slope;
console.log(x);

//Q.19 
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
console.log((10-2)/(6-2));
let slope2 = (10-2)/(6-2);

//Q.20 
console.log(slope === slope2)


//Q.21 = advanced will be discussed later 
//Q.22 
let FirstName = 'Atharva';
let FamilyName = 'Pandit';
let CompareNames = FirstName == FamilyName;
console.log(CompareNames);

//Q.23 
let myAge = 24;
let yourAge = 55;
let CompareAge = myAge < yourAge;
console.log(CompareAge); 

//Q.24 
let AGE1 = 13;

AGE1>18
?console.log("you are allowed to drive")
:console.log("you are not allowed to drive");
