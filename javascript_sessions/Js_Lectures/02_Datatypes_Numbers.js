// USing Number Datatype

// number --
// what is consdier as numbers in js 
// intergets --(-infinty,+infinty)
// float numbers -- 9.81 ,100.01

//  correct example of delacrting numbers 
let age = 25
let garvity = 9.81
let pi = 3.14
let radius = 2


console.log(" my current age is ",age)
console.log(garvity)

// type of operator is used to chech the datatype of given variable

console.log(typeof(age))
console.log(typeof("dfghj"))

// everytype we will have some methods --->
//methods --> methods are predefined logic that are used to futhter the usecase of datatype

// how to indentify the method is of number 
//Math  ---> when you have a math operator delecraed then its a method of number 

//rounding --  if the floats are below 0.5 -->0  if the numberds are gretaer or equal to 0.5 -->1

let num = 0.4
let num1 = 0.5

console.log(Math.round(num)) // correct syntax to use math method 
console.log(Math.round(num1))

//ceil-- converts the float number to highest intergert  -- 0.1-->1
//6.1---6.9

/*6
6.1
6.2
6.3
6.4
6.5
6.6
6.7
6.8
6.9
7
*/

let q=9.81
let w =Math.ceil(q)
console.log(w)
let ww=6.1
console.log(Math.ceil(ww))

//floor--  converts the float number to lowest intergert  -- 0.9-->0

let n=6.1
let n1=6.9
console.log(Math.floor(n))

console.log(Math.floor(n1))

// random -- generated random number

//dice  --- 1>>6

// 1--6

console.log(Math.random()) 
//  generates a random number from 0--0.9

//generate random numbers form 0-10

console.log(Math.floor(Math.random()*11)) //0.0--->10.9

console.log(Math.ceil(Math.random()*10)) //0.0--->10.9

//dice  --- generate random number form a dice 

console.log(Math.ceil(Math.random()*5))

// 0.1 ----------5.9 ----- --ceil --1--6

// 
console.log(Math.floor(Math.random()*6)+1)

//Math.floor(Math.random()*6
// 0.0---5.9

// 0---5+1 --- 1--->6

// summary 
// rounding 
// ceil
//floor
// random








