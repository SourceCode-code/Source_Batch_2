// Exercises Level 1


// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.

class Animal{
    constructor(name,age,color,legs,weight,breed){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.weight = weight
        this.breed=breed
    }
    speak(){
        console.log(`Animals make sound `)
    }
    eat(){
        console.log(`${this.name} barks whenever I show him a bone`)  
    }
    play(){
        console.log(`${this.name} gets happy when I take him to the park and he gets to  see other dogs of ${this.breed} breed`)
    }
    train(){
        console.log(`I have trained ${this.name} so well ! He is now a pro in sitting and staying`)
    }


}
class dog extends Animal{
    constructor(name,age,color,legs,weight,breed){
        super(name,age,color,legs);
        this.name = name
        this.breed = breed;
        this.weight = weight
        
    }
    
}

let myDog = new dog("Max",3,"Black",4,23,"Labrador")
// let cat = new Animal("Lucy",4,"White",4,24,"Persian")

myDog.speak()
myDog.eat()
myDog.play()
myDog.train()

console.log(myDog)
// console.log(cat)

console.log("-------------Answer-1---------------")


// Exercises Level 2
// Override the method you create in Animal class
class Cat extends Animal{
    constructor(name,age,color,legs,weight,breed){
        super(weight)
        this.weight = weight;
        this.breed = breed;
        this.name = name
        this.age = age;
        this.color= color;
        this.legs = legs;
        
    }
    play1(){
        console.log(`${this.name} gets happy whenever I give her a toy which look exactly like a Fish`)
    }
    eat1(){
        console.log(`${this.name} gets happy whenever I give her fish to eat`)
    }
    type(){
        console.log(`My Cat is of ${this.breed} breed and Its one of a Kind to be in a country like India`)
    }
}
let cats = new Cat("Alie",3,"Brown",4,21.5,"Turkish Van")
cats.eat1()
cats.play1()
cats.type()
console.log(cats)
console.log("---------------Answer-2----------------")
// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
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


// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = {'Job':48000,'FreeLancing':3500,'FoodStall':15000}
        this.expenses = {'InternetBill':900,'HomeEMI':15000,'CarEmi':5000}
    }    
}

class Account extends PersonAccount{
    constructor(income){
        super(income)
        this.income = income;
    }
}

console.log("----------Ans-3-----------")