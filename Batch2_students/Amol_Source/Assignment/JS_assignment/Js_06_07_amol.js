/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10 ;
console.log("Ans of Qes No. 1",strTen===numTen)
console.log("Ans of Qes No. 1.1",parseInt((strTen))===numTen)


// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
console.log(parseFloat('9.8'));
console.log(Math.round(9.8));
//true

// 3. Check if 'on' is found in both 'python' and 'jargon'.

let word1 = 'python'
let word2 = 'jargon';
console.log("Ans of Qes No. 3",(word1.includes('on') && word2.includes('on')));


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log("Ans of Qes No. 4",sentence.includes('jargon'));

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
let A1 = longSentence.indexOf('because')
let A2 = longSentence.lastIndexOf('because')
let A3 = A2-A1+"because".length
console.log("Ans of Qes No. 5",longSentence.substr(A1,A3));
//console.log(longSentence.substr(31,24))
//console.log("Ans of Qes No. 5",longSentence.substr(indexof('becuase'),lastindexof('because')));

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = "Amol"
console.log("Ans of Qes No. 6.1",typeof(firstName));
let lastName = "Jadhav"
console.log("Ans of Qes No. 6.2",typeof(lastName));
let country = "India"
console.log("Ans of Qes No. 6.3",typeof(country));
let city = "Sangamner"
console.log("Ans of Qes No. 6.4",typeof(city));
let age = 24;
console.log("Ans of Qes No. 6.5",typeof(age));
let isMarried = false;
console.log("Ans of Qes No. 6.6",typeof(isMarried));
let year = 1999;
console.log("Ans of Qes No. 6.7",typeof(year));

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let A = '10';
let B = (parseInt(A));
console.log(parseInt(A)===10)
// console.log("Ans of Qes No.7",typeof(A));
// console.log("Ans of Qes No.7.1",typeof(B));

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log("Ans of Qes No.8", A==A);
console.log("Ans of Qes No.8.1",(100>99));
console.log("Ans of Qes No.8.2",(4>3)&&(3>0));

// 9. Write three JavaScript statements that provide falsy values.
console.log("Ans of Qes No.9",4>13 || 4<3 );
console.log("Ans of Qes No.9.1",!(123<456));
console.log("Ans of Qes No.9.2",3>0 && 4>7);


// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log("Ans of Qes No.10",4 > 3);        // true    . 4 is greater than 3
console.log("Ans of Qes No.10.1",4 >= 3);     //true     . 4 is greater and equal to 3 
console.log("Ans of Qes No.10.2",4 < 3);      //false    . 3 is not greater than 4 
console.log("Ans of Qes No.10.3",4 <= 3);     //false    . 3 is not greater and equal to 4 
console.log("Ans of Qes No.10.4",4 == 4);     //true     . here e check only value
console.log("Ans of Qes No.10.5",4 === 4);    //true     . here the datatype and value also same
console.log("Ans of Qes No.10.6",4 != 4);     //false    . its only provide opposite ans
console.log("Ans of Qes No.10.7",4 !== 4);    //false    . here ans of == is true but ! make it false   
console.log("Ans of Qes No.10.8",4 != '4');   //flase    . its only provide opposite ans
console.log("Ans of Qes No.10.9",4 == '4');   // true    . here only check the value   
console.log("Ans of Qes No.10.10",4 === '4'); //flase    . here e check value with datatype 

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let X ='python'
let Y ='jargon'
Z = X.length !== Y.length
console.log("Ans of Qes No.11",Z);

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log("Ans of Qes No.12",4 > 3 && 10 < 12);   // true. here is both condition true
console.log("Ans of Qes No.12.1",4 > 3 && 10 > 12);   // flase. here the 10>12 condition as fail thats why flase in AND oprtaion
console.log("Ans of Qes No.12.2",4 > 3 || 10 < 12);   // true .  here is OR oprtaion thats why if one is true then its output is true
console.log("Ans of Qes No.12.3",4 > 3 || 10 > 12);   // true .  here is one condition is true thats why its output is true in OR oprators
console.log("Ans of Qes No.12.4",!(4 > 3));            //flase. bcoz ! showa always opposite output (Condition is true)but !
console.log("Ans of Qes No.12.5",!(4 < 3));            //true . bcoz ! show always opposite output (Condition is Flase)but !
console.log("Ans of Qes No.12.6",!(false));            //true .  ! always show opposite output
console.log("Ans of Qes No.12.7",!(4 > 3 && 10 < 12)); // flase . both condition is true but due to ! itd output is False
console.log("Ans of Qes No.12.8",!(4 > 3 && 10 > 12)); // True. in AND oprator if one condition is false then out put ill be flase . but ! oprator its true .
console.log("Ans of Qes No.12.9",!(4 === '4'));        // true . condition is fail but due to ! opratoe is shows true

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python ='python'
console.log("Ans of Qes No.13",(!dragon.includes('on')&& python.includes('on')))
// !dragon.includes('on') && python.includes('on')
// ? console.log("Ans of Qes No.13",'on in both dragon and python')
// : console.log("Ans of Qes No.13",'no on in both dragon and python')

 // ternary operator

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base = 20; 
let height = 45; 
let Area = .5 * 6* 8
console.log("Ans of Qes No.14:Area",Area)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let a = 3;
let b = 5;
let c = 7;
XYZ = a+b+c
console.log("Ans of Qes No.15: perimeter",XYZ);

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let length = 10;
let width = 20;
console.log("Ans of Qes No.15: Perimeter ",2*(length+width));
console.log("Ans of Qes No.15: Area ",length*width);

// 17. Get the radius   calculate the area and circumference of a circle.
let cicleR = 9
console.log ("Ans of Qes No.17", Math.round(Math.PI*cicleR**2));

// 18. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2.
// let Standard Equation = y=mx+b
//i.e m=slope, 
// given equation = y=2x-2 
//if we conside x =0 then i.e y= 2(0)-2 so y= -2 so slope of Y axis = (o,-2)
//if we conside y=0 then i.e 0= 2x-2, 2= 2x, x=2/2, x=1 so slope of x axis = (1,0)
let a1 =1
let c1 =0
let a2 =0
let c2 = -2
let slope1 = (c2-c1)/(a2-a1);
console.log("Ans of Qes No.18",slope1)
// 19. Compare the slope between two points (2, 2) and (6, 10).
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let Slope = (y2-y1)/(x2-x1)
console.log("Ans of Qes No.19",Slope);  // this formula i get it from chrome. bcoz im not able to remember it.

// 20. Compare the slope of the two questions above.
let state1 =((c2-c1)/(a2-a1))!==((y2-y1)/(x2-x1))
console.log("Ans of Qes No.20",state1)

// 21. Calculate the value of y (y = x^2 + 6x + 9) for different x values and figure out when y equals 0.

// 22. Compare the length of your first name and your family name.
let firstname = "Amol";
let lastname = "Jadhav";
leng1 = (firstname.length) 
leng2 = (lastname.length)
console.log ("Ans of Qes No.22",leng1===leng2);

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 24;
let yourAge = 30;
console.log("Ans of Qes No.23",yourAge-myAge);

// 24. Using prompt, when birth year and calculate if they are old enough to drive.
let Age = 20;
Age > 18
? console.log("Ans of Qes No.24",`they are old enough to drive With age of ${Age}`)
: console.log("Ans of Qes No.24",`they are not old enough to drive With age of ${Age}`)