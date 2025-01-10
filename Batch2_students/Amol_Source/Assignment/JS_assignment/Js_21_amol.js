//1 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation)
//. In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class statistical {
    constructor(ages) {
        this.ages = ages
    }
    Count() {
        let count = this.ages.length
        return count
    }
    sum() {
        return this.ages.reduce((el, index) => el + index)
    }

    min() {
        return Math.min(...this.ages)
    }

    max() {
        return Math.max(...this.ages)
    }
    range() {
        return (this.max() - this.min())
    }
    mean() {
        return Math.ceil((this.sum()) / (this.Count()))
    }
    median() {
        let check = this.ages.sort((a, b) => a - b)
        return check[12] //  im taking direct length/2
    }
    mode() {
        let sorted = {}
        this.ages.forEach((key) => {
            sorted[key] = (sorted[key] || 0) + 1
        })
        return Object.entries(sorted).map(([mode, count]) => ({ mode, count })).sort((a, b) => b.count - a.count).slice(0, 1)
    }
    var() { //  not able to solve
        return this.ages.reduce((el, index) => el + index) / (this.ages.length - 1)
        //return  this.ages.reduce((el)=>(el-this.mean())^2)/(this.ages.length)
    }
    std() {
        let num = Number(this.var())
        return Math.sqrt(num)
    }
    freqDist() { // this is remaining

    }

}
let statistics = new statistical([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])

console.log('Count:', statistics.Count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ', statistics.var()) // 17.5
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



//2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstname, lastname, accountType, incomes, expenses) {
        this.firstname = firstname,
            this.lastname = lastname,
            this.accountType = accountType
        this.incomes = { job: 65000, overtime: 20000 },
            this.expenses = { Rent: 15000, Mess: 5000, travel: 3000 }
    }
    AccounInfo() {
        return `${this.firstname} ${this.lastname} ${this.accountType}`
    }
    totalIncome() {
        let totalinco = Object.values(this.incomes).reduce((el, index) => el + index)
        return totalinco
    }
    totalExpense() {  //  we use Object.value to get diect values from object which is declare 
        let totalExp = Object.values(this.expenses).reduce((el, index) => el + index)
        return totalExp
    }
    set set_inco(addinco) {  //  here we add new income
        this.incomes = addinco
        return addinco
    }
    set set_expe(addexpe) {  //  here we add new Expence
        this.expenses = addexpe
        return addexpe
    }
    updatedtotalIncome() {  //  here we get updated income
        let totalinco = Object.values(this.incomes).reduce((el, index) => el + index)
        return totalinco
    }
    updatedtotalExpense() { //  here we get updated Expence
        let totalExp = Object.values(this.expenses).reduce((el, index) => el + index)
        return totalExp
    }
    accountBalance(){ //  here we get the current balance
        let balance = this.updatedtotalIncome()-this.updatedtotalExpense()
        return balance
    }

}
let AmolInfo = new PersonAccount("Amol", "Jadhav", "Saving-type", "incomes", "exprences")
console.log("Account info:-",AmolInfo.AccounInfo())
console.log("current Income:-",AmolInfo.totalIncome())
console.log("current Expense:-",AmolInfo.totalExpense())
let addinco = AmolInfo.incomes["freelance"] = 22000
console.log("Income Added:-",AmolInfo) //  added income source
let addexpe = AmolInfo.expenses["EMI"] = 20000
console.log("Expences Added:-",AmolInfo) //  added Expence 
console.log("Updated Income:-",AmolInfo.updatedtotalIncome()) //  updated income
console.log("Updated Expense:-",AmolInfo.updatedtotalExpense()) //  updated expenses
console.log("Total Balance :- ",AmolInfo. accountBalance()) //  we get current balance



