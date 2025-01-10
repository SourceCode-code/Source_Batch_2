
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
let maxSkills = 0
for (let i in users){
    if((users[i]['skills']).length > maxSkills);{
        maxSkills = (users[i]['skills']).length + 1
        
    }    
}
console.log(maxSkills);
let mostSpersone = []
for(let key in users){
    if((users[key]['skills']).length == maxSkills){
        mostSpersone.push([key])

    }
}
console.log(mostSpersone);

// 2. Count the number of users who are logged in.
loggedusers = []
for(let i in users){
    if(users[i]["isLoggedIn"] == true){
        loggedusers.push(i)

    }
}
console.log(`Number of isers loged in is : ${loggedusers.length}`);

// 3. Count the number of users with points greater than or equal to 50.
userpoint = []
for(i in users){
    if(users[i]["points"] >=50){
        userpoint.push(i)
    }
}
console.log(userpoint);
// 4. Identify the MERN stack developers in the users object.
let MERNStack = []
for(i in users){
    if(users[i]["skills"].includes('MongoDB'&&'Express'&&'React'&&'Node')){
        MERNStack.push(i)
    }

}
console.log(MERNStack);
// 5. Add your own details to the users object without modifying the original object.
users["Ashutosh"] = {email: 'Ashutosh@more.com',
skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
age: 26,
isLoggedIn: true,
points: 50}
console.log(users);

// 6. Retrieve all keys (properties) in the users object.
for(let i in users){
    console.log(i);
    
}
// 7. Retrieve all values in the users object.
for(let i in users){
    console.log(users[i]);
    
}
// Question 2: Working with a Countries Object
// Using a countries object, write a program that prints:
// - Country name
// - Capital city
// - Population count
// - Languages spoken

// Question 3: Creating a personAccount Object
// Create an object literal named personAccount with the following properties and methods:
personAccount = {
    firstName : "Ashutosh",
    lastName : "More",
    incomes : {salary : 50000, SWP : 3000, farming : 40000, Wifesalary : 20000},
    expenses : {roomRent : 2000, food : 1500, traveling : 3000, shopping : 10000},
    totalIncome : function(){    // Function calculate the total income
        return this.incomes["salary"]+this.incomes["farming"]+this.incomes["Wifesalary"]+this.incomes["SWP"]
    },
    totalExpense : function(){  /// calculate the total rxpenses
        return this.expenses["roomRent"]+this.expenses["food"]+this.expenses["traveling"]+this.expenses["shopping"]
    },
    accountInfo : function (){   // gives the acount information
        return `Persone ${this.firstName} ${this.lastName} having total income ${this.totalIncome()} and his expenses
        are ${this.totalExpense()}, his saving is ${this.totalIncome() - this.totalExpense()}`
    },
    addIncome : function(desc,amount){    // Add income in income array
        return this.incomes[desc] = amount

    },
    addExpense : function(description, amount){   // Add expeses into expese array
        return this.expenses[description] = amount
    },
    accountBalance : function(){    // calcu;late the accountg balance
        return `Account balance is ${this.totalIncome() - this.totalExpense()}`
    }
}
console.log(personAccount.accountBalance());
// console.log(personAccount.expenses);


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

const users1 = [
  { _id: 'ab12ex', username: 'Alex', email: 'alex@alex.com', password: '123123', createdAt: '08/01/2020 9:00 AM', isLoggedIn: false },
  { _id: 'fg12cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt: '08/01/2020 9:30 AM', isLoggedIn: true },
  { _id: 'zwf8md', username: 'Brook', email: 'brook@brook.com', password: '123111', createdAt: '08/01/2020 9:45 AM', isLoggedIn: true },
  { _id: 'eefamr', username: 'Martha', email: 'martha@martha.com', password: '123222', createdAt: '08/01/2020 9:50 AM', isLoggedIn: false },
  { _id: 'ghderc', username: 'Thomas', email: 'thomas@thomas.com', password: '123333', createdAt: '08/01/2020 10:00 AM', isLoggedIn: false }
];

const products = [
  { _id: 'eedfcf', name: 'mobile phone', description: 'Huawei Honor', price: 200, ratings: [ { userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 } ], likes: [] },
  { _id: 'aegfal', name: 'Laptop', description: 'MacPro: System Darwin', price: 2500, ratings: [], likes: ['fg12cy'] },
  { _id: 'hedfcg', name: 'TV', description: 'Smart TV:Procaster', price: 400, ratings: [{ userId: 'fg12cy', rate: 5 }], likes: ['fg12cy'] }
];

// Tasks:
// 1. Sign Up Function: Create a function signUp which allows a user to add themselves to the users array. If the user already exists, display a message saying they already have an account.
// function signUp(userName,ID,email,pass,login){
//     for(i of users1){
//         if(i["username"] == userName){
//             console.log(`${userName} is already available`);
//         }
//         else if(i["username"] != userName){
//             users1.push({_id: this.ID, username: this.userName, email: `'${this.email}'`, password: this.pass, isLoggedIn: `${login}` })}
//     }
// }
// signUp("Ashu","1234","ashu@gmail.com","7776",true)
// console.log(users1);

// 2. Sign In Function: Create a function signIn to allow a user to log into the application.
function signIn(nm){
    for(i of users1){
        console.log([i])
        if(users1[i]["username"] == nm){
            users1[i]["isLoggedIn"] == true
        }
    }
}
// signIn("Alex")
// console.log(users1);

// 3. Product Rating:
//    a. Create a function rateProduct to rate a product.
function rateProduct(pName,UserID,rating){
    for(i of products){
        if(i["name"] = pName){
            for(p in i){                             
                p[ratings].push({ userId: UserID, rate: rating })
            }
        }
    }
}
rateProduct("Laptop","AVM",5)
console.log(products);

//    b. Create a function averageRating to calculate the average rating of a product.
// 4. Product Likes:
//    Create a function likeProduct to like a product if it’s not already liked, or to remove the like if it was already liked.

