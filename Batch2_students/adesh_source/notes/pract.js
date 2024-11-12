
//number
let age =50
let age2=40
console.log("my age is", typeof age);
console.log("my age is",typeof age2);

let x=10
let y=20
console.log(x);
console.log(y);

let num = 0.4;
let num1 = 0.5;

console.log(Math.round(num));
console.log(Math.round(num1));

let q = 5.9;
console.log(Math.ceil(q));

let d=5.2
console.log(Math.floor(d))

let t=7.5
console.log(Math.random(t));

let r=5.6

console.log(Math.round(r));
console.log(Math.random(r));
console.log(Math.floor(r));
console.log(Math.ceil(r));

//strings methods
let ct= 'india is great country';
console.log(ct.toUpperCase());
console.log(ct.replace('great','good'));
console.log(ct.substring(0,5));
console.log(ct.match('is'));
console.log(ct.length);
console.log(ct[7]);

//concatination

let firstname="adesh"
let middlename="vyankat"
let lastname="devkar"
let fullname= firstname+"  "+middlename+"  "+lastname;
console.log(fullname);
//es6


let a= "i\nam/ lear\n to\n java"
console.log(a);

// (\t) - Tab (used to add 8 spaces):
let str9 = 'adesh\tdevkar';
console.log(str9);


let str12= 'adesh\"tdevkar\"';
console.log(str9);

let sandesh= "adershvyankatdevkar";
console.log(sandesh[sandesh.length-1]);

//specifi chartecter ondex
console.log(sandesh[10]);

//upeercase

console.log(sandesh.toUpperCase());

console.log(sandesh.toUpperCase().toLowerCase().toUpperCase());

console.log(sandesh.toUpperCase().length);

//substr

console.log(sandesh.substr(0,6));
console.log(sandesh.substring(6,9));
//split
let ad= "adesh vyabnakt devkar";
console.log(ad.split (" "));

console.log(ad.split("v"));

console.log(ad.indexOf("y"));

console.log(ad.replace('a','z'));

//startwitch

console.log(ad.startsWith('a'));
//enswith



console.log(ad.endsWith('k'));

console.log(ad.match("devkar"));



//conversion

let x1=100
let x2="200"

consaole.log(x2+x1);

let x3 =parseInt(x2);
console.log(x3+x1);
//nunber to string

let num3 = 7020400749;
let num4 = num3.toString();
console.log(typeof num4);


//arithmatic

let xx=6
let x11=8
console(xx+xx1);