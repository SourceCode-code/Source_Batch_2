//1 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation)
//. In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Stat{
    constructor(ages){
        this.ages = ages
    }
    count() {
        let len = this.ages.length
        return len
    }
    sum(){
        return this.ages.reduce((el,index,acc) => el+index)
    }
    min(){
        return Math.min(...this.ages)
    }
    max(){
        return Math.max(...this.ages)
    }
    range(){
        return (this.max() - this.min())
    }
    mean() {
        return Math.ceil((this.sum()) / (this.count()))
    }
    median() {
        let Sortting = this.ages.sort((a,b) =>a-b)
        return Sortting[12]
    }
    mode(){

    }
}
let statistics = new Stat([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
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



//2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//  Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount{
    constructor(firstname, lastname, incomes, expenses){
        firstname = this.firstname
        lastname = this.lastname
        incomes = {Salary:20000,Farming:20000,SWP:10000}
        expenses = {rent:5000,travel:2000,mess:3000}
    }
    totalIncome(){
        let income = this.income.array.forEach(el,index,acc => {});

    }
    totalExpense(){

    }
    accountInfo(){

    }
    addIncome(){

    }
    addExpense(){

    }
    accountBalance(){

    }
}