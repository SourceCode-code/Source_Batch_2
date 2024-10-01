// // Exercise: Level 1

// // 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// let challenge= '30 Days Of JavaScript'
// console.log("Ans of Qes No. 1",challenge);

// // 2. Print the string on the browser console using console.log()
// let A = "Amol"
// console.log("Ans of Qes No. 2",typeof(A));

// // 3. Print the length of the string on the browser console using console.log()
// let B = "length of the string"
// console.log("Ans of Qes No. 3",B.length);

// // 4. Change all the string characters to capital letters usiclsng toUpperCase() method
// let C= 'amoljadhav'
// console.log("Ans of Qes No. 4",C.toUpperCase());


// // 5. Change all the string characters to lowercase letters using toLowerCase() method
// let C1= 'AMOLJADHAV'
// console.log("Ans of Qes No. 5",C1.toLowerCase());

// // 6. Cut (slice) out the first word of the string using substr() or substring() method
//  // Using substring method
let D = "Hello Amol trtrtrt jadhav"
console.log("Ans of Qes No. 6",D.substring(10,18));
console.log("Ans of Qes No. 6.1",D.substr(10,7));

// // 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// let E="30 Days Of JavaScript."
// console.log("Ans of Qes No. 7",E.substring(3,21));
// console.log("Ans of Qes No. 7.1",E.substr(3,18));

// // 8. Check if the string contains a word Script using includes() method
// let F= "So this is my Script"

// console.log("Ans of Qes No. 8",F.includes('Script'));


// // 9. Split the string into an array using split() method
// let f1 = 'Amol kantilal jadhav'
// console.log("Ans of Qes No. 9",f1.split(" "));

// // 10. Split the string 30 Days Of JavaScript at the space using split() method
// let G ="30 Days Of JavaScript"
// console.log("Ans of Qes No. 10",G.split(" "));


// // 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let H =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// console.log("Ans of Qes No. 11",H.split(''));

// // 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// let I = "30 Days Of JavaScript"
// console.log("Ans of Qes No. 12",I.replace('JavaScript','Python'));

// // 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// let J1= '30 Days Of JavaScript'
// console.log("Ans of Qes No. 13",J1.charAt(15));

// // 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// let A1 ='30 Days Of JavaScript'
// console.log("Ans of Qes No. 14",A1.charCodeAt('J'));// need clarification

// // 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// let K= '30 Days Of JavaScript'
// console.log("Ans of Qes No. 15",K.indexOf("3"))

// // 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// console.log("Ans of Qes No. 16",J1.lastIndexOf('t'));

// // 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
// let P1= 'Because of yesterday cricket Match'
// console.log("Ans of Qes No. 17",P1.indexOf('Because'))

// // 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.
// P2 = 'we lost match because'
// console.log("Ans of Qes No. 18",P2. lastIndexOf('because'));
// console.log

// // 19. Use search to find the position of the first occurrence of the word because in the following sentence.
// let P3= 'i am tired Because of yesterday cricket Match'
// console.log("Ans of Qes No. 19",P3.search('Because'));

// // 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// let L= "  Amol  Jadhav  "
// console.log("Ans of Qes No. 20",L.trim())

// // 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// let M= '30 Days Of JavaScript'
// console.log("Ans of Qes No. 21",M.startsWith('3'));


// // 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// console.log("Ans of Qes No. 22",M.endsWith('t'))

// // 23. Use match() method to find all the a’s in 30 Days Of JavaScript
// console.log("Ans of Qes No. 23",M.match('a'));

// // 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// let S1 = '30 Days of'
// let S2 = ' JavaScript'
// console.log("Ans of Qes No. 24",S1.concat(S2))

// // 25. Use repeat() method to print 30 Days Of JavaScript 2 times
// console.log("Ans of Qes No. 25",M.repeat(2));


// // Exercise: Level 2

// // 1. Using console.log() print out the following statement:
// // 2. Using console.log() print out the following quote by Mother Teresa:


// // 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
// let sentence2 = 'I hope this course is not full of jargon.';
// console.log("Level 2:- Ans of Qes No. 6",sentence2.includes("jargon"))

// // 7. Generate a random number between 0 and 100 inclusively.
// console.log("Level 2:- Ans of Qes No. 7",Math.round(Math.random()*100));


// // 8. Generate a random number between 50 and 100 inclusively.
// console.log("Level 2:- Ans of Qes No. 8",Math.round(Math.random()*50+50));

// // 9. Generate a random number between 0 and 255 inclusively.
// console.log("Level 2:- Ans of Qes No. 9",Math.round(Math.random()*255));

// // 10. Access the 'JavaScript' string characters using a random number.
// let jsString = 'JavaScript';
// let X = jsString.length
// let Y = (Math.round(Math.random()*X));
// console.log("Level 2:- Ans of Qes No. 10",jsString[Y]);


// // 11. Use console.log() and escape characters to print the following pattern:
// // 1 1 1 1 1
// // 2 1 2 4 8
// // 3 1 3 9 27
// // 4 1 4 16 64
// // 5 1 5 25 125
// console.log("Level 2:- Ans of Qes No.11",'\n1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')


// // 12. Use substr to slice out the phrase because because because from the following sentence:
// let XYZ = "i have no idea about it because because because"
// console.log("Level 2:- Ans of Qes No. 12",XYZ.length)
// console.log("Level 2:- Ans of Qes No.12.1",XYZ.substr(24,46));