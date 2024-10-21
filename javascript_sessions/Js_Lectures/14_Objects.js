//Object--> object in js is a variable container that is used to store values
//          the value stored in object is in key and value pair 
//          objects are non primitive datatypes 


// let tatacurv=["adventure","16,00,000","Whitecolor",530,2020]
// length
// string

// how to define a objects ==

let tatacurv = {
    modelName: "adventure",
    Ex_showroomPrice: 1600000,
    Color: "white",
    boot_space: 530,
    makeYear: 2021,
    details:function(){
        return `${this.modelName} the exshowroom price is ${this.Ex_showroomPrice}`
    }
    // there is a hidden property in a object called as prototype 
}

// property  is the key and value pair that we define in a object and 
// method : the functions that we define in a object

//let tatacurv2 = { modelName: "adventure", Ex_showroomPrice: 1600000, Color: "white", boot_space: 530, makeYear: 2021 }//


// Math --> object 
// string --> object 
// array--> object 



// let tatacurv = {
//     modelName: "adventure",
//     Ex_showroomPrice: 1600000,
//     Color: "white",
//     boot_space: 530,
//     makeYear: 2021,
//     details:function(){
//         return `${this.modelName} the exshowroom price is ${this.Ex_showroomPrice}`
//     }
//     // there is a hidden property in a object called as prototype 
// }

/**
 * when we have any non-primitive datatype we have 4 major operation to perform

//1 retriving the value 
//2 adding a new value 
//3 upadting exsiting value 
//4 delete the value 
 */

// array.push("value")

// 1 barcket notiation --> beacuse dot notions dosent work in loop 
// 2 dot notations --> easy to understand 




//1 retriving the  any value from an objects

// by dot notations
console.log(tatacurv.Ex_showroomPrice) // output value ->1600000

//by bracket notations

console.log(tatacurv["modelName"])// output value ->adventure



// console.log(tatacurv.details())


//2 adding a new value
// by dot notations
tatacurv.engine_Warrenty="1 year full replacement" // output value ->1600000

console.log(tatacurv)
//by bracket notations

// tatacurv["battery_warrenty":"2years"]
tatacurv["battery_warrenty"]="2years"

console.log(tatacurv)


//3 upadting exsiting value 

// by dot notations
tatacurv.engine_Warrenty="1 year full replacement and 1 year maintaince" // output value ->1600000

console.log(tatacurv)
//by bracket notations

// tatacurv["battery_warrenty":"2years"]
tatacurv["battery_warrenty"]=" 2 years replacement warrenty"

console.log(tatacurv)


//4 delete the value 
// by dot notations
 delete tatacurv.battery_warrenty

 console.log(tatacurv)

 //by bracket notations
 delete tatacurv['engine_Warrenty']

 console.log(tatacurv)



 // retive the skills cypress form the below object 

 let person={
    name:"siddhant",
    age:25,
    skills:["js","cypress","playwright","PSM","REACT/ANGULAR","GIT_GITHUB","AZURE","AWS"]
 }



 console.log(person.skills[1])

 console.log(person["skills"][1])