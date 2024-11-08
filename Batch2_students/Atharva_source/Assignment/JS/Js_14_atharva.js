
// Assignment Questions on JavaScript Objects

// Question 1: Skills and Points Analysis
// Given the following users object:

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
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
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
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

// Tasks:
// 1. Find the person with the most skills. 
let mostskills =''
for (let key in users){
  if (users[key]['skills'].length > mostskills.length){
       mostskills = key 
  }
}
console.log(mostskills)
console.log("---1---------")
// 2. Count the number of users who are logged in.
count = 0
for (let key in users){
  trueValue =''
 
  if( users[key]['isLoggedIn']==true){
    count ++,
    trueValue+=(key)
    console.log(trueValue)
  }
}
console.log(count)
console.log("------2-------")


// 3. Count the number of users with points greater than or equal to 50.
let Count = 0;
for (let key in users){
    if (users [key]['points'] >= 50){
        Count++
    }
}
console.log(Count);
console.log("----3---------")

// 4. Identify the MERN stack developers in the users object.
// 5. Add your own details to the users object without modifying the original object.
users['atharva'] ={
    email : 'atharvapandit84@gmail.com',
    skilss : ['Javascript','Node','Cypress'],
    age : 25,
    isLoggedIn : false,
    points : 40,
}
console.log(users);
console.log("-------5----")
// 6. Retrieve all keys (properties) in the users object.
for (let key in users){
    console.log(users[key])
}
// 7. Retrieve all values in the users object.
for (let key in users){
    console.log(users[key])
}

// Question 2: Working with a Countries Object
// Using a countries object, write a program that prints:
// - Country name
// - Capital city
// - Population count
// - Languages spoken

let Countries = {
    countryName: 'India',
    CapitalCity: 'Delhi',
    PopulationCount: '142.86Crores',
    LanguagesSpoken: 'Hindi, English, Telugu, Tamil, Kannada, Malayalam',
}
console.log(Countries)

// Question 3: Creating a personAccount Object
// Create an object literal named personAccount with the following properties and methods:

// Properties:
// - firstName
// - lastName
// - incomes: a set of income sources with descriptions.
// - expenses: a set of expenses with descriptions.
let personAccount = {
    firstName: 'Rick',
    lastName: 'Jonson',
    incomes: [
        { description: "Salary", amount: 70000 },
        { description: "Freelancing", amount: 30000 }
    ],
    expenses: [
        { description: "Rent", amount: 15000 },
        { description: "Groceries", amount: 4000 },
        { description: "Utilities", amount: 2500 }
    ],
}
// Methods:
// - totalIncome(): Calculate and return the total income.
// - totalExpense(): Calculate and return the total expenses.
// - accountInfo(): Display account details.

// - addIncome(description, amount): Add a new income.
// - addExpense(description, amount): Add a new expense.
// - accountBalance(): Calculate and return the account balance.

// total income() \\


//display account details\\
console.log(personAccount)

//addIncome \\
personAccount.incomes = [
    ...personAccount.incomes,
    {description: "Invistment dividends", amount: 1000},
    {description: "foodstall", amount: 8500}];


//AddExpense\\
personAccount.expenses = [
    ...personAccount.expenses,
    { description : "waterBill", amount : 750}
]
console.log(personAccount);

//Account Balance \\

// Question 4: Users and Products Analysis
// Consider the following arrays:

// const users = [
//   { _id: 'ab12ex', username: 'Alex', email: 'alex@alex.com', password: '123123', createdAt: '08/01/2020 9:00 AM', isLoggedIn: false },
//   { _id: 'fg12cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt: '08/01/2020 9:30 AM', isLoggedIn: true },
//   { _id: 'zwf8md', username: 'Brook', email: 'brook@brook.com', password: '123111', createdAt: '08/01/2020 9:45 AM', isLoggedIn: true },
//   { _id: 'eefamr', username: 'Martha', email: 'martha@martha.com', password: '123222', createdAt: '08/01/2020 9:50 AM', isLoggedIn: false },
//   { _id: 'ghderc', username: 'Thomas', email: 'thomas@thomas.com', password: '123333', createdAt: '08/01/2020 10:00 AM', isLoggedIn: false }
// ];

// const products = [
//   { _id: 'eedfcf', name: 'mobile phone', description: 'Huawei Honor', price: 200, ratings: [ { userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 } ], likes: [] },
//   { _id: 'aegfal', name: 'Laptop', description: 'MacPro: System Darwin', price: 2500, ratings: [], likes: ['fg12cy'] },
//   { _id: 'hedfcg', name: 'TV', description: 'Smart TV:Procaster', price: 400, ratings: [{ userId: 'fg12cy', rate: 5 }], likes: ['fg12cy'] }
// ];

// Tasks:
// 1. Sign Up Function: Create a function signUp which allows a user to add themselves to the users array. If the user already exists, display a message saying they already have an account.
// 2. Sign In Function: Create a function signIn to allow a user to log into the application.
// 3. Product Rating:
//    a. Create a function rateProduct to rate a product.
//    b. Create a function averageRating to calculate the average rating of a product.
// 4. Product Likes:
//    Create a function likeProduct to like a product if it’s not already liked, or to remove the like if it was already liked.