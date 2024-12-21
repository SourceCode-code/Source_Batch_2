// Exercises: Level 1
// Create a closure which has one inner function
function outerFunc(){
    let count = 0
    function innFunc(){
        count++;
       return count;
    }
    return innFunc()
}
let a = outerFunc()
console.log(a)
console.log("-------Answer.1-----------")


// Exercises: Level 2
// Create a closure which has three inner functions
function OuterFunc(){
    let Count = 0
    let sum = 0
    function innFunc1(){
        Count++;
        return Count;
    }
    function innFunc2(){
        sum+=2
        return sum;
    }
    function innFunc3(){
        return innFunc1()+innFunc2()
    }
    return innFunc3()
}
let b = OuterFunc()
console.log(b)
console.log("-------Answer.2-----------")


// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function PersonAccount(){
    firstName = "James"
    lastName = "Hype"
    incomes = {salary:45000,Instructor:15000,Online:5000}
    expenses = {Food:4000,Bills:10000,EMI: 35000}
    function totalIncome(){
        return Object.values(incomes).reduce((a,b)=>a+b)
    }
    function totalExpense(){
        return Object.values(expenses).reduce((a,b)=>a + b)
    }
    function accountInfo(){
        return `Name :- ${firstName} ${lastName}`
    }
    function addIncome(){
        let Inc = incomes
        incomes['Training'] = 15000
        return Inc
    }
    function addExpense(){
        let Exp = expenses
        expenses['Entertainment'] = 5000
        return Exp
    }
    function accountBalance(){
        let totalInc = Object.values(addIncome()).reduce((a,b)=>a+b)
        let TotalExp = Object.values(addExpense()).reduce((a,b)=>a + b)
        return totalInc - TotalExp
    }
    return{
        totalIncome:totalIncome(),
        totalExpense: totalExpense(),
        accountInfo:accountInfo(),
        addIncome: addIncome(),
        addExpense: addExpense(),
        accountBalance:accountBalance()
    }
}
let Outer= PersonAccount()
console.log(Outer)
console.log(Outer.totalIncome)
console.log(Outer.totalExpense)
console.log(Outer.accountInfo)
console.log(Outer.addIncome)
console.log(Outer.addExpense)
console.log(Outer.accountBalance)

console.log("-------Answer.3-----------")