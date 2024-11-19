let row = 3;
let star = 5;
for (let i = 0; i < row; i++) {
    let pattern = " ".repeat(i) + "*".repeat(star)
    console.log(pattern)
    star -= 2
}
console.log("-------pattern1----------")

let Aray = [1,2,3,4,5];
for (let i = 0; i <6; i++){
    console.log(i)
}
console.log("-----Aray-----")

let row1 = 3;
let star1 = 4;
for (let i = 1; i <= 2; i++) {
    let pattern1 = "".repeat(i) + "*".repeat(star1)
    if (i == 2) {
        console.log("*  *")
    }
    console.log(pattern1)
}
console.log("-------pattern-2---------")

//conditionals\\

for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.log("------0-10--------------")


for (let i = 10; i >= 0; i--) {
    console.log(i)
}
console.log("--------10-0--------------")


let o = 0;
while (o <= 10) {
    console.log(o);
    o++;
}
console.log("---------0-10-using while ----------")


let j = 10;
while (j >= 0) {
    console.log(j)
    j--;
}
console.log("--------10-0,using while------")


for (let i = 1; i <= 10; i++) {
    console.log(`${i * i}`);
}
console.log("--------printing square root------")

//"For...in"  Is used to iterate over an object\\
let laptop = {
    Name: 'Lenovo E14',
    Model: '2023',
    IntelGeneration: '7thgen',
    Price: 'Rs. 47,500 /-',
    color: 'Black Matte'
}

for (let key in laptop) {
    console.log(`${key} : ${laptop[key]}`)
}
console.log("----------using for loop in obj------------")


//practise on Objects \\
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'React', 'Node', 'Rprogramming'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Express', 'MongoDb', 'React', 'Node', 'React'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'MongoDb', 'React', 'Node', 'React', 'Node',],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node', 'React', 'Node',],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

//Finding the person with most skills\\
let mostSkills = 0;
let mostSkillsUser = '';
let Bperson = [];
for (let key in users) {
    if (users[key]['skills'].length >= mostSkills) {
        mostSkills = users[key]['skills'].length;
    }
}
for (let key in users) {
    if (users[key]['skills'].length == mostSkills) {
        Bperson.push(key);
    }
}
console.log(Bperson)

//Adding a new user \\
users['Sarah'] = {
    email: 'sarah@sarah.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vanilla.js', 'Express', 'MongoDb', 'PowerBi', 'TableAu', 'Bootstrap', 'DSA'],
    age: 25,
    isLoggedIn: true,
    points: 45,
}
console.log(users);
console.log("-------printing Users----------")

//finding person with the mernstack\\
let Mernstack = [];
for (let key in users) {
    if (users[key]['skills'].includes('MongoDb', 'React', 'Node', 'Express')) {
        Mernstack.push(key);
    }
}
console.log(Mernstack)
console.log("---------MStack--------")

//Count the number of users with points greater than 50 \\
let Count = 0;
let Nperson = [];
for (let key in users) {
    if (users[key]['points'] >= 50) {
        Nperson.push(key);
        Count++
    }
}
console.log(`The Count with users greater than 50 are:${Count} and the Users are:${Nperson}`)
console.log("-------count of users with points > 50---------")

//count the number of users who are loggedin\\

let count = 0;
let Lperson = [];
for (let key in users) {
    if (users[key]['isLoggedIn'] == true) {
        Lperson.push(key);
        count++;
    }
}
console.log(Lperson)
console.log("-------count of users who are logged in ----------")



// Question 2: Working with a Countries Object
// Using a countries object, write a program that prints:
// - Country name
// - Capital city
// - Population count
// - Languages spoken
let Countries = {
    Name: 'America',
    CapitalCity: 'Washington Dc',
    Population: '33490000',
    LanguagesSpoken: 'English'
}
console.log(Countries)
console.log("-------practising--obj------------")

// Question 3: Creating a personAccount Object
// Create an object literal named personAccount with the following properties and methods:

// Properties:
// - firstName
// - lastName
// - incomes: a set of income sources with descriptions.
// - expenses: a set of expenses with descriptions.
let personAccount = {
    firstName: 'John',
    lastName: 'Routledge',
    incomes: [
        { description: "Salary", amount: 50000 },
        { description: "Investment", amount: 20000 },
        { description: "FoodStall", amount: 15000 }
    ],
    Expenses: [
        { description: 'Rent', Amount: 10000 },
        { description: 'Food', Amount: 5000 },
        { description: 'Transport', Amount : 2000 },
    ],
}
console.log(personAccount)
console.log("--------personaccount----------")

//Calculating totalincome\\
// function TotalIncome() {
//     let y = personAccount['incomes'];
//     let sum = 0;
//     console.log(y)
//     for (let i of y) {
//         sum = sum + i['amount'];
//     }
//     console.log(sum)
// }
// TotalIncome()


function totalIncome() {
    let y = personAccount['incomes'];
    let sum = 0;
    //console.log(y);
    for (let i of y) {
        sum = sum + i['amount']
    }
    console.log(sum);
}
totalIncome()
console.log("------------3.1---------")


//expense\\
function totalExpenses(){
    let z = personAccount['Expenses']
    let Sum = 0;
    for (let i of z){
        Sum = Sum + i['Amount']
    }
    console.log(Sum)
}
totalExpenses()
console.log("---exp---")


// let l = 19;
// console.log(++l); // 20
// console.log(l++); // 20
// console.log(++l); //22
// l += l;
// console.log(l)// 42
// console.log("-------pre,post1-----------")


let r = 75;
console.log(++r);//76
console.log(r++);//76
r += r; //154
console.log(r) 
console.log("-------pre,post2-----------")

let J = 67
console.log(J++); // 67
console.log(++J);//69
J += J;//138
console.log(J)
console.log("-------pre,post3-----------")

let n = 89;
console.log(n++); // 89 
console.log(n++); // 89
console.log(++n); //  92
console.log(++n); //  //93
n += n; // 186
console.log(n)
console.log("-------pre,post4-----------")

let O = 15;
console.log(++O);//16
console.log(O++);//16
O += O;//34
console.log(O);
console.log("-------pre,post5-----------")

//generating random 10 digit number \\
let bb = Math.floor(Math.random() * 100000) * 100000;
console.log(bb)
console.log("--------random-10-digit----------")

let v = 'isthispogueland';
console.log(v.substr(5))
console.log("------substring-----") //spougeland

let h = 'johnbroutledge';
console.log(h.substr(0,5)) // johnb

//Notes : \\
/*Math.floor = converts an integer to the nearest lowest integer 
Math.ceil = converts an integer to the nearest highest integer 
Math.random = generates a random number between 0 and 1 
Math. round = a: If a number is below 0.5 , it will round DOWN to 0 
              b: if a number is 0.5 and above 0.5 , it will round up to 1 


String : Strings are sequences of characters and can be defined using single quotes and can be declared with  : "", '', `` 
 
string can be concenated with  the + operator , with the template literals `` ``, and using the keyword "concat()"
//Properties : 
1: Length:  returns the length of the string 
2: Indexing : Characters are indexed in the string  starting from 0 
3: Concatenation : string can be concatenated with  the + operator , with the template literals `` ``, 
                   and using the keyword "concat()"


*/


let arr1 = [1,2,3,4];
let arr2 = [Num1,Num2,...rest] = arr1;
console.log(Num1,Num2,...rest);
console.log("--------destructuring--------")

let arr3 = [8,9,10,11];
let arr4 = [Num8,Num9,...rest] = arr3;
console.log(Num8,Num9,...rest)
console.log("--------destructuring-1--------")


//Conversion from number to String 

let r1 = 123;
let r2 =  "231";
console.log(r2 + r1);

//conversion from string to number 
let r3 = parseInt(r2);
console.log(r3 + r1); //354
console.log(typeof r3); //number


//parseInt : Converts a string into an integer 
let u1 = "345";
let u2 = parseInt(u1);
console.log(u2)

//Number() - converts a string into a number 
let x1 =  "456";
let x2 = Number(x1);
console.log(x2);
console.log("------99---------")


let date = new Date();
//  let currdate = date.toLocaleString('en' , {})
let day = date.getDate();
let month = date.getMonth();
console.log(month)
let Year = date.getFullYear();

let padDayFormat = String(date).padStart(2,'0');
let padMonthFormat = String(month).padStart(2,'0');
console.log(`${padDayFormat}/${padMonthFormat}/${Year}`);


//local//
//global//
//block and function//


//use of Switch , case , break in loops\\
let lastName = "Pandit"
switch(lastName){
    case "panditam":(console.log("No match "));
    case "Kadhni":(console.log("No Match"));
    case "sutar": (console.log("No Match"));
    case "Pandit" :(console.log("Yep !, Its a Match"));
    break
    default: (console.log("Enter valid Data"))
}
console.log("-------switch-case-------")

//pattern of numbers//


// 55555
// 4444
// 333
// 22
// 1

let NuM = 5;
for(let i=5;i>=1;i--){
    console.log(i.toString().repeat(i)) 
}
console.log("-------pattern of numbers-------")
//toString is used because the numbers are converted to string , in order to print the pattern //



//loop to return element greater than 5 or 7 \\
let jj = [1,2,3,4,5,6,7,8];
let result = [];
for (let i = 0; i<jj.length; i++){
    if(jj[i]>=5){
        result.push(jj[i]);
    }
}
console.log(result)
console.log("----result------")


//using filter method \\
let yy = jj.filter((el)=>{
    return el >7
})
console.log(yy)

let zz = jj.forEach((el)=>{
    return el>7
})
console.log(zz)
console.log("----zz")


let ARRAY = [1,2,3,4,5,6,7,8,9,11,22,55,88,9,99,44,55,2587452,256852,0,12585];
let LargestNumber = 0;
for (let i =0; i<=ARRAY.length; i++){
    if(ARRAY[i]>LargestNumber){
        LargestNumber = ARRAY[i]
    }
}
console.log(LargestNumber)



//code for the following pattern

    //   *
    //  ***
    // *****
    //  ***
    //   *




    let kj = [1,1,2,3,1,2]
 let Result = [];
 for(let i =0; i< kj.length; i++){
    if(!Result.includes(kj[i])){
        Result.push(kj[i])
    }
 }
 console.log(Result)

 let str = "I love javascript";
 let longestword = "";
 for(let i=0; i<=str.length; i++){
    if(str[i]> longestword){
        longestword = str[i]
    }
 }
 console.log(longestword) 


//  let uv = Math.floor(Math.random()* (9.3-5.3 ) + 5.3 );
//  console.log(uv)

 let randomNumber = Math.random() * (9.3 - 5.3) + 5.3;
console.log(randomNumber);