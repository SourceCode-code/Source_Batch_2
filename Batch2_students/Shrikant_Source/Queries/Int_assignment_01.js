// typeof 
let str = "Shrikant"
console.log(typeof(str));

let age = 28;
console.log(typeof(age));

let str1;
console.log(typeof(str1));

let str2 = "0";
console.log(typeof(str2));

let str3 = 5.5;
console.log(typeof(str3));

// Math.round
console.log(Math.round(0.4));
console.log(Math.round(0.7));
console.log(Math.round(1.4));
console.log(Math.round(10.5));
console.log(Math.round(21.4));

// Math.ceil()
console.log(Math.ceil(0.4));
console.log(Math.ceil(0.7));
console.log(Math.ceil(1.4));
console.log(Math.ceil(10.5));
console.log(Math.ceil(21.4));

// Math.floor()
console.log(Math.floor(5.6));
console.log(Math.floor(4.7));
console.log(Math.floor(1.9));
console.log(Math.floor(10.1));
console.log(Math.floor(50.5));

// Math.random()
console.log(Math.random(5.6));
console.log(Math.random(4.7));
console.log(Math.floor(Math.random() *  7));
console.log(Math.ceil(Math.random() * 9.7));
console.log(Math.floor(Math.random() * 6) + 1);


// String methods
let str4 = "I am Shrikant Khaire, looking job opportunities as a role of automation test engineer"

console.log(str4.toUpperCase());  // Converts string to uppercase
console.log(str4.toLowerCase());  // Converts string to lowercase

console.log(str4.substring(5, 15));
console.log(str4.substring(0, 15));
console.log(str4.substring(0, 9));  // Extracts a part of the string (substring)


console.log(str4.match('Shrikant'));
console.log(str4.match('khaire'));
console.log(str4.match('test'));
console.log(str4.match('role'));    // Searches for a match in string


console.log(str4.replace('automation', 'manual'));
console.log(str4.replace('looking', 'searching'));
console.log(str4.replace('as', 'for')); // Replaces part of the string

console.log(str4.length);
console.log(str.length);
console.log(str2.length);
console.log(str3.length);


//  Escape Characters:

let str5 = "We\n are\n using\n JavaScript\n for\n automation\n testing"
console.log(str5) // \n for new line

console.log("Shrikant\tkhaire");
console.log("I am Shrikant Khaire, looking job opportunities as a role of \'automation test engineer\'")
console.log("I am Shrikant Khaire, looking job opportunities as a role of \"automation test engineer\"")

// indexof

console.log("Character at index 10:", str4[10]);
console.log("Character at index 12:", str4[12]);
console.log("Character at index 15:", str4[15]);
console.log("Character at index 24:", str4[24]);
console.log("Character at index 30:", str4[30]);

// substr
console.log(str4.substr(0, 9))
console.log(str4.substr(5, 15))
console.log(str4.substr(0, 15))
console.log(str4.substr(14, 25))
console.log(str4.substr(0, 25))

// split

console.log("Split by space:", str4.split(" "));
console.log("Split by 'o':", str4.split("o")); 
console.log("Split by characters:", str4.split(""));

//  Trim
let str6 = "  Shrikant  "
console.log("Original length:", str6.length);
console.log("Trimmed string:", str6.trim()); 
console.log("Trimmed length:", str6.trim().length); 

// include
console.log(str4.includes("role"));
console.log(str4.includes("Shrikant"));
console.log(str4.includes("test"));
console.log(str4.includes("123"));

// repeat

let num = "1234";
console.log(num.repeat(10));
console.log(num.repeat(2));


// Date

let date = new Date();
let todayDate = date.getDate();
console.log(todayDate);

let month = date.getMonth();
console.log(month+ 1);

let year = date.getFullYear();
console.log(year);

console.log(`${todayDate}/${month}/${year}`); 

let paddedDate= String(todayDate).padStart(2 , '0')
let paddedmonth = String(month).padStart(2, '0')

console.log(`${paddedDate}/${paddedmonth}/${year}`);

let strMonth = date.toLocaleString('en-gb', { month: 'long' }); // "October"
let strMonthShort = date.toLocaleString('en-gb', { month: 'short' }); // "Oct"

console.log(`${paddedDate}/${strMonth}/${year}`);//08/October/2024

console.log(`${paddedDate}/${strMonthShort}/${year}`); //08/Oct/2024

let curHours = date.getHours();
let curMin = date.getMinutes();
let curSec = date.getSeconds();

console.log(`${paddedDate}/${strMonthShort}/${year}    ${curHours}:${curMin}`);

let amPm = curHours >= 12 ? "PM" : "AM";
let curTime = curHours % 12;
curTime = curTime ? curHours : 12;

let paddedTime = String(curHours).padStart(2, '0');
let paddedMin = String(curMin).padStart(2, '0');

console.log(`${paddedDate}/${strMonthShort}/${year}    ${curTime}:${paddedMin}:${curSec} ${amPm}`);


// setdate

let manipulatedDate = new Date()
let futureDate = manipulatedDate.getDate(); 
manipulatedDate.setDate(futureDate + 10); 
console.log(manipulatedDate.getDate());

let futureMonth = manipulatedDate.getMonth();
manipulatedDate.setMonth(futureMonth + 4);
console.log(manipulatedDate.getMonth() + 1); 

let year1 = manipulatedDate.getFullYear();
manipulatedDate.setFullYear(year1 + 2); 
console.log(manipulatedDate.getFullYear());


// if-else
//1
let num1 = -10
if(num1>0){console.log(`The ${num1} is positive number`)}
else{console.log(`The ${num1} is negative number`)};
//2
let num2 = 150;
if(num2<200){console.log(`The ${num2} is smaller than 200`)}
else{console.log(`The ${num2} is greater than 200`)};

// else if
//1
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//2
let age1 = 25;
if (age1 < 2) {
    console.log("Baby");
} else if (age1 < 13) {
    console.log("Child");
} else if (age1 < 20) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

//3
let hour =14; 

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}


// switch case
//1
let fruit = "orange";

switch (fruit) {
    case "banana":
        console.log("Bananas are high in potassium.");
        break;
    case "apple":
        console.log("Apples are great for your health.");
        break;
    case "orange":
        console.log("Oranges are rich in vitamin C.");
        break;
    default:
        console.log("Unknown fruit.");
}

//2
let color = "pink";

switch (color) {
    case "red":
        console.log("You selected red.");
        break;
    case "blue":
        console.log("You selected blue.");
        break;
    case "green":
        console.log("You selected green.");
        break;
    default:
        console.log("Unknown color.");
}

