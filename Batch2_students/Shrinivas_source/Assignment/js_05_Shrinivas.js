// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'


// 2. Print the string on the browser console using console.log()
let string = "i am learning playwright"
console.log(string)

// 3. Print the length of the string on the browser console using console.log()
let str3 = "JavaScript"
console.log(str3.length)

// 4. Change all the string characters to capital letters using toUpperCase() method
let str4 = "playwright"
console.log(str4.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase() method
let str5 = "Shrinivas Kadam"
console.log(str5.toLowerCase())

// 6. Cut (slice) out the first word of the string using substr() or substring() method
// Using substring method
let str6 = 'i am learning playwright'
console.log(str6.substring(0,2))
// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let str7 = "30 Days Of JavaScript"
let daysPhrase = str7.substring(2) // Start slicing from index 2
console.log(daysPhrase)
// another way
console.log(str7.length)
console.log(str7.substr(3, 21))

// 8. Check if the string contains a word Script using includes() method
let str8 = "30 Days Of JavaScript"
console.log(str8.includes("Script"))


// 9. Split the string into an array using split() method
let str9 = "Rohit Gurunath Sharma"
console.log(str9.split(""))

// 10. Split the string 30 Days Of JavaScript at the space using split() method
let str10 = "30 Days Of JavaScript"
console.log(str10.split(" "))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str11 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(str11.split(','))

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let str12 = "30 Days Of JavaScript"
console.log(str12.replace("JavaScript", "Python"))

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let str13 = "30 Days Of JavaScript"
console.log(str13[15])
console.log(str13.charAt(15)) // another way

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let str14 = "30 Days Of JavaScript"
console.log(str14.charCodeAt("J"))

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let str15 = "30 Days Of JavaScript"
console.log(str15.indexOf("a")) // first occurrence

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let str16 = "30 Days Of JavaScript"
console.log(str15.lastIndexOf("a")) //last occurrence

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
let str17 = "Because it was raining,we decided to cancle outdoor event."
console.log(str17.indexOf("Because"))
// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence.
let str18 = "he was in trouble because his scholar would not study"
console.log(str18.lastIndexOf("because"))

// 19. Use search to find the position of the first occurrence of the word because in the following sentence.
let str19 = "Because it was raining,we decided to cancle outdoor event."
console.log(str19.search("Because "))
// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
let str20 = "  30 Days Of JavaScript  "
console.log(str20.trim())
// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let str21 = "30 Days Of JavaScript"
console.log(str21.startsWith(3))
// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let str22 = "30 Days Of JavaScript"
console.log(str22.endsWith("t"))

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
let str23 = "30 DAYS OF JAVASCRIPT"
console.log(str23.match("A", "S"))
let strr23 = "30 Days Of JavaScript"
let regs = /\a+/gi
console.log(strr23.match(regs))
// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let str24 = '30 Days of'
let strr24 = 'JavaScript'
console.log(str24.concat(strr24))
// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
let str25 = "30 Days Of JavaScript"
console.log(str25.repeat(2))
// Exercise: Level 2

// 1. Using console.log() print out the following statement:
let sent = "i am learning playwright"
console.log(sent)
// 2. Using console.log() print out the following quote by Mother Teresa:
console.log("“Spread love everywhere you go. Let no one ever come to you without leaving happier.” - Mother Teresa")

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence2 = 'I hope this course is not full of jargon.';
console.log(sentence2.includes('jargon'))

// 7. Generate a random number between 0 and 100 inclusively.
let max1 = 100
let min1 = 0
console.log(Math.floor(Math.random() * (max1 - min1) + min1))
// 8. Generate a random number between 50 and 100 inclusively.
let max = 100
let min = 50
console.log(Math.floor(Math.random() * (max - min) + min))

// 9. Generate a random number between 0 and 255 inclusively.
let max2 = 255
let min2 = 0
console.log(Math.floor(Math.random() * (max2 - min2) + min2))
// 10. Access the 'JavaScript' string characters using a random number.
let jsString = 'JavaScript'

let s = console.log(Math.random(jsString.indexOf('S')))
console.log(Math.random() * 4)

//let randomNum = (Math.round(Math.random()*jsString.length))
console.log(jsString[4])
// 11. Use console.log() and escape characters to print the following pattern:
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log(" 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")

// 12. Use substr to slice out the phrase because because because from the following sentence:
let sentence = "I think you should do it because because because."
console.log(sentence.indexOf("b"))
console.log(sentence.length)
console.log(sentence.substr(25, 49))


