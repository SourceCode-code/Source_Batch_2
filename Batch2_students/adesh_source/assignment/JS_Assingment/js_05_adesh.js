// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge="30 Days Of JavaScript";
console.log(challenge);

// 2. Print the string on the browser console using console.log()
let challenge1= '30 Days Of JavaScript'
console.log(typeof(challenge));
// 3. Print the length of the string on the browser console using console.log()

console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
let challenge2="30 Days Of JavaScript";
console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
let challenge3="30 Days Of JavaScript";
console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method
 // Using substring method
 let challenge4="30 Days Of JavaScript";
 console.log(challenge4.substring(0,5));
 console.log(challenge4.substr(0,5));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

let challenge5="30 Days Of JavaScript";
console.log(challenge5.substring(3,21));
console.log(challenge5.substr(3,18));

// 8. Check if the string contains a word Script using includes() method

let challenge6="30 Days Of JavaScript";
console.log(challenge6.includes("Script"));
// 9. Split the string into an array using split() method

let challenge7="30 Days Of JavaScript";
console.log(challenge7.split());
// 10. Split the string 30 Days Of JavaScript at the space using split() method
let challenge8="30 Days Of JavaScript";
console.log(challenge8.split(""));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. 
let challenge9="'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'";
console.log(challenge9.split());


// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

let challenge10="30 Days Of JavaScript";
console.log(challenge10.replace('JavaScript','Python'));
// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

let challenge11= '30 Days Of JavaScript'
console.log(challenge11.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

let challenge12 ='30 Days Of JavaScript'
console.log(challenge.charCodeAt('J'));
// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

let challenge13= '30 Days Of JavaScript'
console.log(challenge13.indexOf("3"))

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let challenge14= '30 Days Of JavaScript'
console.log(challenge14.lastIndexOf('t'));
// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:

let challenge15= 'Because tommorow i am going'
console.log(challenge15.indexOf('Because'));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.
let challenge16= 'i am here because'
console.log(challenge16. lastIndexOf('because'));


// 19. Use search to find the position of the first occurrence of the word because in the following sentence.
let challenge17= 'i am sad Because ,i am in the tens'
console.log(challenge17.search('Because'));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

let challenge18= "  Adesh Devkar "
console.log(challenge18.trim());

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let challenge19= '30 Days Of JavaScript'
console.log(challenge19.startsWith('3'));


// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let challenge20= '30 Days Of JavaScript'
console.log(challenge20.startsWith('t'));



// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
let challenge21= '30 Days Of JavaScript'
console.log(challenge21.startsWith('a'));

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let chall1 = '30 Days of'
let chall2= ' JavaScript'
console.log(chall1.concat(S2chall2))
 
// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge19.repeat(2));


// Exercise: Level 2

// 1. Using console.log() print out the following statement:
// 2. Using console.log() print out the following quote by Mother Teresa:


// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let Level = 'I hope this course is not full of jargon.';
console.log(Level.includes("jargon"))


// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.round(Math.random()*100));


// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.round(Math.random()*50+50));

// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.round(Math.random()*255));

// 10. Access the 'JavaScript' string characters using a random number.
//let jsString = 'JavaScript';
let jsString = 'JavaScript';
let A= jsString.length
let B = (Math.round(Math.random()*A));
console.log("Level 2:- Ans of Qes No. 10",jsString[B]);


// 11. Use console.log() and escape characters to print the following pattern:
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('\n1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')


// 12. Use substr to slice out the phrase because because because from the following sentence:
let chall3 = "i have no idea about it because because because"
console.log(chall3.length)
console.log(chall3.substr(24,46));Node;



let x="thank you"
console.log(x);


