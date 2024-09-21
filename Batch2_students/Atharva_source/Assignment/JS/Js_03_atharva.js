//Q.1 

let greeting = "Hello world";
console.log(typeof(greeting));

//Q.2 
let price = '199.99';
console.log(Math.ceil(Math.round(price)));

//Q.3 
let Name = "Atharva Vijay Pandit";
console.log(Name.length);

//Q.4 
let firstName = "Atharva";
let middleName = "Vijay";
let  lastName = "Pandit";

console.log("My name is " + firstName  + " " + middleName + " " + lastName); //Using + operator 
console.log( 'My name is ' + `${firstName}  ${middleName} ${lastName}`); //Using template literals

//Q.5 
let language = "JavaScript";
console.log(language[4]);

//Q.6
let number = (Math.round(Math.random()*20 /2) *2);
console.log(number);

//Q.7
let G = 'kfkfbfbdflfbfbdfdbfbdjgghghgj\
kjhgfdslkjhgfdslkjhgfdsalkjhgfds\
zxcvbnmzxcvb';
console.log(G);

//Q.8
let string1 = `I \nam\nlearning \nJavaScript.`;
let string2 = `It's \"fun\" to learn Javascript`;
console.log(string1);
console.log(string2);

//Q.9
let amount = '45.85';
console.log(Math.floor(amount));
console.log(Math.ceil(amount));
console.log(Math.round(amount));

//Q.10
let Quote = "Learning Javascript is awesome !";
console.log(Quote.length);
console.log(Quote.indexOf('J'));

//Q.12
let Str =  ' "Hello"\t"World !" ';
console.log(Str);

//Q.13
let str1 = 'abc';
let str2 = 'def';
console.log("str1 is " + str1 + " " + "  str2 is " + str2);
console.log(` ${str1}  ${str2}`);

//q.14
let This = "qwertyuiopasdfghjklzxcvbnm";
Randomelement= ((Math.round(Math.random()*This.length))-1);
console.log(This[Randomelement]);

//Q.15
let u = 15;
let i = 150;
let randomOdd = Math.round(Math.random()* (75-15) + 15);
console.log(randomOdd); // have doubt for this query , will get it cleared .