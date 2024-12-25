// Exercises Level 1

// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor(name,age,color,legs){
 this.name=name
 this.age=age
 this.color=color
 this.legs=legs
    }
    doginfo(){
        console.log(`Hey!!! meet my dog ${this.name}. he is ${this.age} year olds, with ${this.color} colour`)
    }

    speed(){
        console.log(`${this.name} has good runing beacuse of ${this.legs} long legs`)
    }
    
    looks(){
        console.log(`${this.name} has good looking because of ${this.color} colour and ${this.legs} long legs gives a great heights`)
    }

}

let allinfo = new Animal("Simba",2,"Brown",4)
allinfo.doginfo()
allinfo.speed()
allinfo.looks()
// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    constructor(name,age,color,legs,breed,size){
        super(name,age,color,legs)
        this.breed=breed
        this.size=size
    }
    typeofDog(){
        console.log(`${this.name} is from ${this.breed} breed`)
    }
    sizeofDog(){
        console.log(`${this.name} is ${this.size} size`)
    }
}
let Doginfo = new Dog("Simba",2,"Brown",4,"Golden Retriever",'Medium')
Doginfo.typeofDog()
Doginfo.sizeofDog()

class Cat extends Animal{
    constructor(name,age,color,legs,breed,size){
        super(name,age,color,legs)
        this.breed=breed
        this.size=size
    }

    typeofCat(){
        console.log(`hello guys!!! meet my cat ${this.name} he is from ${this.breed} breed`)
    }

    sizeofcat(){
        console.log(`${this.name} is ${this.size}  in size`)
    }

}
let catInfo = new Cat("Simba",2,"Brown",4,"Persian",'small')
catInfo.typeofCat()
catInfo.sizeofcat()

// Exercises Level 2
// Override the method you create in Animal class
class secondDog extends Animal{
    constructor(name,age,color,legs){
    super(name,age,color,legs)
      }
        doginfo(){
               console.log(`Hey!!! meet my dog ${this.name}. he is ${this.age} year olds, with ${this.color} colour`)
        }
       
        speed(){
               console.log(`${this.name} has good runing beacuse of ${this.legs} long legs`)
        }
           
        looks(){
               console.log(`${this.name} has good looking because of ${this.color} colour and ${this.legs} long legs gives a great heights`)
        }
    
}
let seconddog = new secondDog("Alex",1,"white",4)
seconddog.doginfo()
seconddog.speed()
seconddog.looks()

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below. 
class Statistics{
    constructor(ages){
        this.ages=ages
    }
    count(){
        console.log(this.ages.length)
    }
    sum(){
        let Total = this.ages.reduce((el,index)=>el+index)
        console.log(Total)
    }
    min(){
        console.log(Math.min(...this.ages))
    }
    max(){
        console.log(Math.max(...this.ages))
    }


}
let Operation = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
Operation.count()
Operation.sum()
Operation.min()
Operation.max()


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