//Q.1 

let challenge = '30 Days of JavaScript';

//Q.2 
console.log(challenge);

//Q.3 
console.log(challenge.length);

//Q.4
console.log(challenge.toUpperCase());

//Q.5
console.log(challenge.toLowerCase());

// //Q.6
console.log(challenge.substring(0,2));

//Q.7
console.log(challenge.substring(3));

//Q.8
console.log(challenge.includes('Script'));

//Q.9
console.log(challenge.split(" "));

//Q.10 
console.log(challenge.split(" "));

//Q.11
let Str = 'Facebook ,Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(Str.split(""));

//Q.12
let Challenge = '30 Days of JavaScript';
let newStr = Challenge.replace("JavaScript",  "Python");
console.log(newStr);

//Q.13
console.log(challenge.charAt(15));

//Q.14
console.log(challenge.charCodeAt('J'));

//Q.15
console.log(challenge.indexOf("3"));

//Q.16
console.log(challenge.lastIndexOf('t'));

//Q.17
let a1 = 'Because of yesterday cricket Match';
console.log(a1.indexOf('Because'));

//Q.18
let a2 = 'we lost match because';
console.log(a2.indexOf('because'));

//Q.19
let a3 = 'i am tired Because of yesterda cricket Match';
console.log(a3.search('Because'));

//Q.20
let a4 = "  Atharva Pandit  ";
console.log(a4.trim());

//Q.21
let a5 = '30 Days of JavaScript';
console.log(a5.startsWith('3'));

//Q.22
let a6 = '30 Days of JavaScript';
console.log(a6.endsWith('t'));

//Q.23
let  a7 = '30 Days of JavaScript';
console.log(a7.match('a'));

//Q.24
let B1 = '30 Days of';
let B2 = 'JavaScript';
 console.log(B1.concat(B2));

//Q.25
let C1 = '30 Days of JavaScript';
console.log(C1.repeat('2'));

//Exercise Level2 
//6
let sentence2 = 'I hope this course is not full of jargon.';
console.log(sentence2.includes("jargon"));

//7
console.log(Math.round(Math.random()*100));

//8
console.log(Math.round(Math.random()*50+50));

//9
console.log(Math.round(Math.random()*255));

//10
let jsString = 'JavaScript';
let a = jsString.length;
let b = (Math.round(Math.random()*a));
console.log(jsString[b]);

//11
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('\n1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 6\n5 1 5 25 125');

//12
let T = "i have no idea about it because because because";
console.log(T.length);
console.log(T.substr(24,46));