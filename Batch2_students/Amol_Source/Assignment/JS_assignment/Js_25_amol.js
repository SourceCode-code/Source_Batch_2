// Exercises: Level 1
// Create a closure which has one inner function
function outerFunction() {
    let value1 = 12
    function innerfunction() {
        return value1 + 12
    }
    return innerfunction()
}
let outsideFunction = outerFunction()
console.log(outsideFunction)


// Exercises: Level 2
// Create a closure which has three inner functions
function mainFunction() {
    let personalInfo1 = []
    let personalInfo2 = []
    let personalInfo3 = []
    function firstInnerFunction() {
         personalInfo1.push("Amol")
         return personalInfo1
    }

    function secondInnerFunction(){
         personalInfo2.push("Kantilal")
         return personalInfo2
    }

    function thirdInnerFunction(){
     personalInfo3.push("Jadhav")
        return personalInfo3
    }

    return {
        firstfunction:firstInnerFunction(),
        secondfunction:secondInnerFunction(),
        thirdfunction:thirdInnerFunction()
    }
}
let Main = mainFunction()
console.log(Main)
console.log(Main.firstfunction)
console.log(Main.secondfunction)
console.log(Main.thirdfunction)


// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(){
    let firstname = "Amol"
    let lastname = "Jadhav"
    let incomes = { job: 65000, overtime: 20000 }
    let expenses = { Rent: 15000, Mess: 5000, travel: 3000 }

    function totalinco(){
return Object.values(incomes).reduce((el,index)=>el+index)
    }

    function totalExpense(){
        return Object.values(expenses).reduce((el,index)=>el+index)
    }

    function accountInfo(){
return `Customer Name:-${firstname} ${lastname}`
    }

    function addIncome(){
 let addedInco = incomes
    incomes["freelance"] = 22000
    return addedInco
    }

    function addExpense(){
    let addedExpe = expenses
    expenses["EMI"] = 20000
    return addedExpe

    }
    function accountBalance(){
      let totainco= Object.values(addIncome()).reduce((el,index)=>el+index)
      let totaExp = Object.values(addExpense()).reduce((el,index)=>el+index)
      return totainco-totaExp
    }
    return {
        totalinco:totalinco(),
        totalExpense:totalExpense(),
        accountInfo:accountInfo(),
        addIncome:addIncome(),
        addExpense:addExpense(),
        accountBalance:accountBalance()
    }

}
let OuterMain = personAccount()
console.log(OuterMain)
console.log(OuterMain.totalinco)
console.log(OuterMain.totalExpense)
console.log(OuterMain.accountInfo)
console.log(OuterMain.addIncome)
console.log(OuterMain.addExpense)
console.log(OuterMain.accountBalance)