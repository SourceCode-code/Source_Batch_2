// destructing and spread

// what is structure

// let arr = [1,2,3,4]



// let num1=arr[0]
// let num2=arr[1]
// let num3=arr[2]
// let num4=arr[3]

// console.log(num1,num2,num3,num4)

//destructuring --> destrucuting is a way to unpack arrays and objects  and assiginning them a distinct varaible 

// how to destructure and array 

let arr = [1, 2, 3, 4]


let [num1, num2, num3, num4] = arr

// num1 , num2, num3,num4 = 1,2,3,4
console.log(num1, num2, num3, num4)

// example 2

let arr1 = ["siddhant", "amol", "athrava", "adesh"]

let [person1, person2, person3, person4] = arr1
console.log(person1, person2, person3, person4)


let fullstack = [
    ["HTML", "CSS", "JS", "REACT", "ANGULAR"],
    ["NODE", "EXPRESS", "MOGODB", "SQL"]
]


//frontend=["HTML", "CSS", "JS", "REACT", "ANGULAR"]
//backend =  ["NODE", "EXPRESS", "MOGODB", "SQL"]

let [frontEnd, backend] = fullstack

console.log(frontEnd)
console.log(backend)
//[ 'HTML', 'CSS', 'JS', 'REACT', 'ANGULAR' ]
//[ 'NODE', 'EXPRESS', 'MOGODB', 'SQL' ]

// let [value1,value2,value3,value4]=frontEnd

let [[value1, value2, value3, value4], [value5, vlaue6, value7, value8]] = fullstack

console.log(value1, value2, value3, value4, value5, vlaue6, value7, value8)  //HTML CSS JS REACT NODE EXPRESS MOGODB SQL


// now if we want to skip any value



// let arr = [1, 2, 3, 4]

let [Num1, , , Num4] = arr

console.log(Num1, Num4)

// if any value in array is undefined and we have define it while destructing 

let names = [undefined, "siddhant", "amol"]

let [Name1 = "adesh", Name2, Name3] = names
console.log(Name1, Name2, Name3)


// now a example where we only have to destrurctre first 2 value and then get the array same

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [a, b, ...z] = numbers
console.log(z, a, b)

// loop for destructing 
let countryCapitalArray = [
    ["India", "Delhi"],
    ["USA", "Washington DC"],
    ["England", "London"]
];

for (let [country, capital] of countryCapitalArray) {
    console.log(country, capital)
}

/**'
 * India Delhi
USA Washington DC
England London 
*/



//---------------------------------------------------------------------------------------------------------------

//destructing of object


let obj={ firstName: "Vihaan", lastName: "Mehta", age: 28, experience: 6, skills: ["TypeScript", "CI/CD"], position: "Automation Tester" }

let {firstName,lastName,age,experience,skills,position}=obj
// fn,ln,ag,ex,po
console.log(firstName,lastName,age,experience,skills,position)
// renaming of values while destructing

let {firstName:fn,lastName:ln,age:ag,experience:ex,skills:sk,position:p}=obj

console.log(fn,ln,sk,ag,ex,p)

let [sk1,sk2]=sk
console.log(sk1,sk2)

//object --> dot,bracket--> loop--> bracket 
// dot --> other than loop 


// loop made in  -->  




