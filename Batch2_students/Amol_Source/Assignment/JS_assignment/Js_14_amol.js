// const profiles = [
//     {
//       firstName: "Vihaan",
//       lastName: "Mehta",
//       age: 28,
//       experience: 6,
//       skills: ["TypeScript", "CI/CD"],
//       position: "Automation Tester"
//     },
//     {
//       firstName: "Rohan",
//       lastName: "Joshi",
//       age: 29,
//       experience: 11,
//       skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
//       position: "Technical Lead"
//     },
//     {
//       firstName: "Vihaan",
//       lastName: "Deshmukh",
//       age: 32,
//       experience: 1,
//       skills: ["Python", "TypeScript"],
//       position: "Software Engineer"
//     },
//     {
//       firstName: "Ishaan",
//       lastName: "Pandey",
//       age: 31,
//       experience: 14,
//       skills: ["Python", "Cypress"],
//       position: "Systems Engineer"
//     },
//     {
//       firstName: "Ishaan",
//       lastName: "Deshmukh",
//       age: 25,
//       experience: 1,
//       skills: ["Java", "Playwright", "JavaScript", "SQL"],
//       position: "Systems Engineer"
//     },
//     {
//       firstName: "Rohan",
//       lastName: "Joshi",
//       age: 33,
//       experience: 3,
//       skills: ["JavaScript", "Java", "Docker", "TypeScript"],
//       position: "Full-Stack Developer"
//     },
//     {
//       firstName: "Pranav",
//       lastName: "Joshi",
//       age: 24,
//       experience: 2,
//       skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
//       position: "Data Analyst"
//     },
//     {
//       firstName: "Rohan",
//       lastName: "Nayak",
//       age: 24,
//       experience: 10,
//       skills: ["JavaScript", "GitHub Actions", "Playwright"],
//       position: "Backend Developer"
//     },
//     {
//       firstName: "Arjun",
//       lastName: "Nayak",
//       age: 36,
//       experience: 4,
//       skills: ["Java", "Playwright", "Docker"],
//       position: "Systems Engineer"
//     },
//     {
//       firstName: "Vikram",
//       lastName: "Joshi",
//       age: 34,
//       experience: 1,
//       skills: ["Python", "GitHub Actions"],
//       position: "Full-Stack Developer"
//     }
//   ];

//   //vihan metha has experince of 3 years  his current position is autoamtion testor and his skills include   skills: [ 'TypeScript', 'CI/CD' ],
//   function Vihaninfo(array){
// return (`${array[0].firstName} ${array[0].lastName} has experince of ${array[0].experience} years his current position is  ${array[0].position} and his skills include : ${array[0].skills}`)
//   }
//   console.log(Vihaninfo(profiles)) // for [{}] object in array we work like this i.e objectname[index of perticular object ].key of a object.


// let Ishaaninfo = [{
//   firstName: "Ishaan",
//   lastName: "Deshmukh",
//   age: 25,
//   experience: 1,
//   skills: ["Java", "Playwright", "JavaScript", "SQL"],
//   position: "Systems Engineer"
// },
// {
//   firstName: "Vikram",
//   lastName: "Joshi",
//   age: 34,
//   experience: 1,
//   skills: ["Python", "GitHub Actions"],
//   position: "Full-Stack Developer"
// }
// ]

// function ishan(array){
//   return array[1]
// }
// console.log(ishan(Ishaaninfo))


// Assignment Questions on JavaScript Objects

// Question 1: Skills and Points Analysis
// Given the following users object:

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'Node', 'powerBI'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  }
};

// Tasks:
// 1. Find the person with the most skills.

// mostskills1 = 0
// mostsPerson = []
// for (let key in users){
//   if (users[key]['skills'].length > mostskills1){
//        mostskills1 = users[key]['skills'].length
//   }
// }
// for(let i in users){
// if(users[i]['skills'].length>=mostskills1){
//   mostsPerson.push(i)
// }
// }
// console.log(mostsPerson)

// 2. Count the number of users who are logged in.
// count = 0
// for (let key in users){
//   trueValue =''

//   if( users[key]['isLoggedIn']==true){
//     count ++,
//     trueValue+=(key)
//     console.log(trueValue)
//   }
// }
// console.log(count)



// 3. Count the number of users with points greater than or equal to 50.
// count = 0
// for (let key in users){
//   if(users[key]['points']>=50){
//     count ++
//   }
// }
// console.log(count)

// 4. Identify the MERN stack developers in the users object.
// Skills = ['MongoDB', 'Express', 'React', 'Node']
// let name = []
// for (let key in users){

//   let check = (users[key]['skills'].includes('MongoDB'&&'Express'&&'React'&&'Node'))
//   // console.log(check)
//   if(check==true){
// name.push(key)
//   }
// }


//  console.log(name)//[ 'Asab', 'Paul' ]

// 5. Add your own details to the users object without modifying the original object.
// users['amol'] = {
//   email: 'amolj6896@gmail.com',
//   skills: ['HTML','JavaScript','Node'],
//   age: 24,
//   isLoggedIn: false,
//   points: 45,
// }
// console.log(users)

// // 6. Retrieve all keys (properties) in the users object.
// for(let key in users){
//   console.log(key)
// }



// 7. Retrieve all values in the users object.
// for(let key in users){
//   console.log(users[key])
// }


// Question 2: Working with a Countries Object
// Using a countries object, write a program that prints:
// - Country name
// - Capital city
// - Population count
// - Languages spoken
// const countries = require('./Js_15_amol')
// console.log(countries.length)
// for(let key of countries){
//  let A  = [
//   (`Country name : ${key['name']}`),
// (`Capital city : ${key['capital']}`),
// (`Population count : ${key['population']}`),
// (`Languages spoken : ${key['languages']}`)
//  ]
// console.log(A)
// }
// import { countries } from "./Js_15_amol";
// console.log(countries)

// Question 3: Creating a personAccount Object
// Create an object literal named personAccount with the following properties and methods:

// let personAccount = {
//   firstName: "Amol",
//   lastName: " Jadhav",
//   incomes: [
//     { description: "job", amount: 55000 },
//     { description: "business", amount: 100000 }
//   ],
//   expenses: [
//     {description :"Rent",amount :12000},
//      {description : "travel",amount: 3000},
//       {description : "food",amount: 7000 }
//   ]
// }


// Properties:
// - firstName
// - lastName
// - incomes: a set of income sources with descriptions.
// - expenses: a set of expenses with descriptions.

// Methods:
// - totalIncome(): Calculate and return the total income.
// function totalIncome(){
//   sumofIncome = 0
// let y =personAccount.incomes
// for (let i in y){
//   sumofIncome=sumofIncome+(y[i].amount)
// }
// }totalIncome()
// console.log(sumofIncome)

// - totalExpense(): Calculate and return the total expenses.
// function totalExpense(){
//   sumofexpence = 0
//   let k = personAccount.expenses
//   for(let i in k){
//     sumofexpence= sumofexpence+(k[i].amount)
//   }
// console.log(sumofexpence)
// }totalExpense()

// - accountInfo(): Display account details.
//console.log(personAccount)

// - addIncome(description, amount): Add a new income.
// personAccount.incomes.push("ShareMarket")
// console.log(personAccount)

// - addExpense(description, amount): Add a new expense.
//personAccount.expenses.push(35)
// console.log(personAccount)

// - accountBalance(): Calculate and return the account balance.
// let total = personAccount.filter(personAccount=>personAccount.expenses)
//     console.log(total)


// Question 4: Users and Products Analysis
// Consider the following arrays:

// const users1 = [
//   { _id: 'ab12ex', username: 'Alex', email: 'alex@alex.com', password: '123123', createdAt: '08/01/2020 9:00 AM', isLoggedIn: false },
//   { _id: 'fg12cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt: '08/01/2020 9:30 AM', isLoggedIn: true },
//   { _id: 'zwf8md', username: 'Brook', email: 'brook@brook.com', password: '123111', createdAt: '08/01/2020 9:45 AM', isLoggedIn: true },
//   { _id: 'eefamr', username: 'Martha', email: 'martha@martha.com', password: '123222', createdAt: '08/01/2020 9:50 AM', isLoggedIn: false },
//   { _id: 'ghderc', username: 'Thomas', email: 'thomas@thomas.com', password: '123333', createdAt: '08/01/2020 10:00 AM', isLoggedIn: false }
// ];


// Tasks:
// 1. Sign Up Function: Create a function signUp which allows a user to add themselves to the users array. If the user already exists, display a message saying they already have an account.
// function signUp(mail){
// for (let key in users1){
//   if(users1[key]['email']===mail){
//   return true
// }
// return false}
// }
// let check = signUp('amolj6896@gmail')
// if (check){
//   console.log("user already exits")
// }
// else{
//   console.log("user not exits")
// }

// 2. Sign In Function: Create a function signIn to allow a user to log into the application.
// let approveID = []
// function signIn(password1) {
//   for (let key in users1) {
//     let M = (users1[key].password)
//     if (M == password1) {
//       //console.log(`${users1[key].email} password Math user can log into Application`)
//       approveID.push(users1[key].email)
//       return true
//     }
//   }
//   return false
// }
// let check1 = signIn(123333)
// if(check1){
//   console.log(`${approveID} password Math user can log into Application`)
// }
// else{
//   console.log("passward not Match")
// }
// const products = [
//   { _id: 'eedfcf', name: 'mobile phone', description: 'Huawei Honor', price: 200, ratings: [ { userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 } ], likes: [] },
//   { _id: 'aegfal', name: 'Laptop', description: 'MacPro: System Darwin', price: 2500, ratings: [], likes: ['fg12cy'] },
//   { _id: 'hedfcg', name: 'TV', description: 'Smart TV:Procaster', price: 400, ratings: [{ userId: 'fg12cy', rate: 5 }], likes: ['fg12cy'] }
// ];

// 3. Product Rating:
//    a. Create a function rateProduct to rate a product.
// function rateProduct(product_id){
//   for (let key in products){
//     let m = (products[key]._id)
//     if(m==product_id){
//       let s= (products[key].ratings)
//       for(let k in s){
//         console.log(s[k].userId,":",s[k].rate)
//       }
//     }
//   }
// }rateProduct('hedfcg')// i dont think so that is right way

//    b. Create a function averageRating to calculate the average rating of a product.
// function rateProduct(product_id){
//     for (let key in products){
//       let m = (products[key]._id)
//       if(m==product_id){
//         let s= (products[key].ratings)
//         AvgRate = 0
//         count = 0
//       for(let A in s){
//         AvgRate= AvgRate+s[A].rate
//         if(s[A].rate=Number){
//           count++
//         }
//       }
//       console.log(`Avg rating for perticular user : ${AvgRate/count}`)
//       }
//     }
//   }
//   rateProduct('hedfcg')

// 4. Product Likes:
//    Create a function likeProduct to like a product if it’s not already liked, or to remove the like if it was already liked.
// function likeProduct(productlike){
// for(let key in productlike){
//   let checklike = (productlike[key].likes)
// if(checklike.length>0){
//   console.log((productlike[key].likes))
// }
// else {
//   console.log("likes have no value")
// }
// }
// }
// (likeProduct(products))// this programe is for check all object at single time i also make it for a single id

