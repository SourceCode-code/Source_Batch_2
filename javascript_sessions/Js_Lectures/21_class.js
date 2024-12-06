//class --> class is more than a object its a blueprint to get objects and its method 

//class defines the bheaviour and of the objects , and object on other hand represent class

/**
 * syntax of object 
 * 
 * 
 */

let obj =  {
    hello:"hi",
    sampleobj:"object"
}

//---------------------------
//synatx of defining a class 
class person {
    //code 
}


let person1=new person()

console.log(person1)

//---------------------------------------------------

//ES6 class object -->

class Details{
constructor(firstname,middlename,lastname,age){
    this.firstname=firstname
    this.middlename =middlename
    this.lastname=lastname
    this.age=age
}

}

let dd = new Details()
console.log(dd)
let sidDetails= new Details("siddhant","arjun","gadakh",25)

console.log(sidDetails)

// example --> create a object in such way that if no info is given it gives default info

class Person{
constructor(name="admin",lastname="givenadimn",year="givenyear",country="given country"){

this.name=name
this.lastname=lastname
this.year =year
this.country=country



}
}



let d = new Person()

console.log(d)

let sid2=new Person ("sid","gadakh","1999","India")

console.log(sid2)

// class methods -----------> 

