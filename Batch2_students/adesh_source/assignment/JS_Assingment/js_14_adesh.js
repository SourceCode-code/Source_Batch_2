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
  
  // 1. Find the person with the most skills.
  const mostSkillsUser = Object.entries(users).reduce((max, user) => user[1].skills.length > max.skills.length ? user[1] : max, { skills: [] });
  console.log(mostSkillsUser);
  
  // 2. Count the number of users who are logged in.
  const loggedInCount = Object.values(users).filter(user => user.isLoggedIn).length;
  console.log(loggedInCount);
  
  // 3. Count the number of users with points greater than or equal to 50.
  const pointsCount = Object.values(users).filter(user => user.points >= 50).length;
  console.log(pointsCount);
  
  // 4. Identify the MERN stack developers in the users object.
  const mernStackDevelopers = Object.entries(users).filter(([name, user]) => 
    user.skills.includes('MongoDB') && 
    user.skills.includes('Express') && 
    user.skills.includes('React') && 
    user.skills.includes('Node')).map(([name]) => name);
  console.log("MERN stack developers:", mernStackDevelopers);
  
  // 5. Add your own details to the users object without modifying the original object.
  const newUser = {
    email: 'newuser@domain.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    age: 22,
    isLoggedIn: false,
    points: 60
  };
  
  // Use Object.assign to create a new object that includes the new user
  const updatedUsers = Object.assign({}, users, { NewUser: newUser });
  console.log(updatedUsers);
  
  // 6. Retrieve all keys (properties) in the users object.
  const userKeys = Object.keys(users);
  console.log(userKeys);
  
  // 7. Retrieve all values in the users object.
  const userValues = Object.values(users);
  console.log("User values:", userValues);


// Question 2: Working with a Countries Object
// Using a countries object, write a program that prints:
// - Country name
// - Capital city
// - Population count
// - Languages spoken
const countries = {
    USA: {
      capital: 'Washington, D.C.',
      population: 331000000,
      languages: ['English']
    },
    Canada: {
      capital: 'Ottawa',
      population: 37742154,
      languages: ['English', 'French']
    },
    Germany: {
      capital: 'Berlin',
      population: 83783942,
      languages: ['German']
    },
    India: {
      capital: 'New Delhi',
      population: 1380004385,
      languages: ['Hindi', 'English', 'Bengali']
    },
};

for (const country in countries) {
    const { capital, population, languages } = countries[country];
    console.log(`Country: ${country}`);
    console.log(`Capital City: ${capital}`);
    console.log(`Population Count: ${population}`);
    console.log(`language:${population}`);
}
// Question 3: Creating a personAccount Object
// Create an object literal named personAccount with the following properties and methods:

// Properties:
// - firstName
// - lastName
// - incomes: a set of income sources with descriptions.
// - expenses: a set of expenses with descriptions.

// Methods:
// - totalIncome(): Calculate and return the total income.
// - totalExpense(): Calculate and return the total expenses.
// - accountInfo(): Display account details.
// - addIncome(description, amount): Add a new income.
// - addExpense(description, amount): Add a new expense.
// - accountBalance(): Calculate and return the account balance.

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