//1 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation)
//. In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
class Statistics{
    constructor (data){
        this.data= data
        this.sortedData = [...data].sort((a,b)=> a -b);
    }
    count(){
        return this.data.length
    }
    max(){
        return Math.max(...this.data)
    }
    min(){
        return Math.min(...this.data)
    }
    range(){
        return this.max - this.min
    }
    sum(){
        return this.data.reduce((total,value)=> total + value, 0)
    }

    mean(){
        return Math.ceil((this.sum() / this.count()))
    }
    median(){
        let a = this.data.sort((a,b)=>a-b)
        return a[12] //taking length /2 as median index
    }
    mode(){
        let frequency = {}
        for(let i = 0; i < this.data.length; i++){
            frequency[this.data[i]] = (frequency[this.data[i]] || 0) + 1
        }
        let maxCount = Math.max(...Object.values(frequency))
        let modes = Object.keys(frequency).filter(key => frequency[key] === maxCount)
        return modes
    }

    //about variance and standard deviation ; Did not understand what needs to be done exactly ;need help

}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const stats =new  Statistics(ages)

console.log('Count:', stats.count());
console.log('Max:', stats.max());
console.log('Min:', stats.min());
console.log('Sum :', stats.sum());
console.log('Mean:', stats.mean());
console.log('Median:', stats.median());
console.log('Mode:', stats.mode());
console.log("------Answer-1---------")






//2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class  personAccount{
    constructor(firstName,lastName  ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = []
        this.expenses = []
    }

    addIncome(description,amount){
         this.incomes.push({description:description,amount:amount})
    }
    addExpense(description,amount){
        this.expenses.push({description:description,amount:amount})
    }

    get totalIncome(){
        return this.incomes.reduce((total , income)=>total + income.amount,0)
    }
    get totalExpense(){
        return this.expenses.reduce((total,expense)=>total + expense.amount,0)
    }

    get accountBalance(){
        return this.totalIncome - this.totalExpense
    }   

    accountInfo(){
        return  `
        Account holder : ${this.firstName} ${this.lastName}
        Total Income : ${this.totalIncome}
        Total Expense: ${this.totalExpense}
        Account Balance: ${this.accountBalance}`
    }


}
const myAccount = new personAccount('Joel ','Corry')
myAccount.addIncome('salary',50000)
myAccount.addIncome('Food Stall',6000)

myAccount.addExpense('Car EMI',4000)
myAccount.addExpense('Light Bills',4000,'fuel',750)

console.log(`Total Income: ${myAccount.totalIncome}`);
console.log(`Total Expense: ${myAccount.totalExpense}`);
console.log(`Account Balance : ${myAccount.accountBalance}`);

console.log(myAccount)


//Example of PROMISE using callback Hell\\
function replZomato(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Open the Application")
            resolve(user)
        },3000)
        
    })
}

function selectRest(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Select the Restaurant from which ${user} want to order Food`)
            resolve(user)
        },3000)  
    })
}

function order(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Select the food to be ordered")
            resolve(user)
        },3500)
    })
}

function entAdd(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Please enter the address ")
            resolve(user)
        },3500)
    })
}

function orderPlaced(user){
    return new Promise((resolve)=>{
        console.log("The order has been placed and it will be delivered soon within the estimated time")
        resolve(user)
    },4000)
}

function rate(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Please rate the food and the service")
            resolve(user)
        },4500)
    })
}

replZomato("Rick")
.then(selectRest)
.then(order)
.then(entAdd)
.then(orderPlaced)
.then(rate)
.then((message)=>{
    console.log(message)
})