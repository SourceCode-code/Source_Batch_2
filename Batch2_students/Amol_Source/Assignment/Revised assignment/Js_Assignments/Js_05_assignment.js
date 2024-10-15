// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// let challenge = '30 Days Of JavaScript'
// console.log(challenge)

// 2. Print the string on the browser console using console.log()
//let Full = "Amol kantilal jadhav"
// console.log(Full)


// 3. Print the length of the string on the browser console using console.log()
// consolelog(Full.length)

// 4. Change all the string characters to capital letters using toUpperCase() method
//console.log(Full.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase() method
//console.log(Full.toLowerCase())

// 6. Cut (slice) out the first word of the string using substr() or substring() method
 // Using substring method
//  let Full1 = "Amol kantilal jadhav"
//  console.log(Full1.substring(0,4))

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// console.log(Full1.substr(0,4))

// 8. Check if the string contains a word Script using includes() method
// let sent1 = "30 Days Of JavaScript"
// console.log(sent1.includes("Script"))

// 9. Split the string into an array using split() method
//  let sent1 = "30 Days Of JavaScript"
// console.log(sent1.split(""))
// 10. Split the string 30 Days Of JavaScript at the space using split() method
//console.log(sent1.split(" "))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let company ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// console.log(company.split(","))

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let AA= "30 Days Of JavaScript"
// console.log(AA.replace("JavaScript","Python"))

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// console.log(AA[15])

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// console.log(AA.indexOf("J"))

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// console.log(AA.indexOf(3))

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
//console.log(AA.lastIndexOf('t'))

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
// let sents = "first occurrence of the word because in the following sentence"
// console.log(sents.indexOf("because"))


// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.
// let sent = "the word in the becausE following sentence"
// console.log(sent.lastIndexOf("E"))

// 19. Use search to find the position of the first occurrence of the word because in the following sentence.
// let sent = "the word because in the following sentence"
// console.log(sent.indexOf("because"))

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// let Name = " Amol jadhav  "
// console.log(Name.trim())

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// let sent = "30 Days Of JavaScript"
// console.log(sent.startsWith(3))

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// let sent = "30 Days Of JavaScript"
// console.log(sent.endsWith('t'))

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
// let sent = "30 Days Of JavaScript"
// console.log(sent.match('a'))

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// let first = 'JavaScript'
// let second = '30 Days of'
// console.log(second.concat(first))

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
// let days = "30 Days Of JavaScript"
// console.log(days.repeat(2))


// Exercise: Level 2

// 1. Using console.log() print out the following statement:
// 2. Using console.log() print out the following quote by Mother Teresa:


// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
// let sentence2 = 'I hope this course is not full of jargon.';
// console.log(sentence2.includes("jargon"))


// 7. Generate a random number between 0 and 100 inclusively.
//console.log(Math.round(Math.random()*100))

// 8. Generate a random number between 50 and 100 inclusively.
//console.log(Math.round(Math.random()*50+50))


// 9. Generate a random number between 0 and 255 inclusively.
//console.log(Math.round(Math.random()*255))

// 10. Access the 'JavaScript' string characters using a random number.
// let jsString = 'JavaScript'
// let js = jsString.length
// let mo = Math.round(Math.random()*js-1)
// console.log(jsString[mo])

// 11. Use console.log() and escape characters to print the following pattern:
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
//console.log("1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

// 12. Use substr to slice out the phrase because because because from the following sentence:
// let sentence = "i am learing automation because because because"
// let a =sentence.indexOf("because")
// let b = sentence.lastIndexOf("because")
//     console.log(sentence.substr(a,b))