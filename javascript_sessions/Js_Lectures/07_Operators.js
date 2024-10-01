
//Operators -- there are some signs or symbols used to perform operations 

//Assignment Operator
// Assignment Operator (=) it is used to assign the value to a variable 

let var1 = 20

console.log(var1)

// x = y

//(+=)

//x +=y -->(x=x+y)

// x -=y --> (x=x-y)


//-------------------------------------------------------------------

// Arithmatic operators 

/**
 * + ---> addtion 
 * - ---> substarction
 * * ---> multiplication
 * / ---> division
 * % ---> modulus  -- reminder 
 * ** --> exponetional -- power
 */

console.log(2**3) // 8

//comparison operators 

/**
 * > -- greater than 
 * < -- less than 
 * >= -- gerater than equal to 
 * <= -- less equal to 
 * ! -- not  -- its reverses your values 
 * == -- check similar values 
 *=== -- 
 */

console.log(8=="8") // true --> values 
console.log(8 === "8")//false -->checks values and datatypes 

console.log(8 !== "8") //fasle (true)

console.log(NaN == NaN) //true -->  //false -->

// logical operator 

//AND ( && )

/**
 * T && T ==> True
 * F && F ==> false 
 * T && F ==> Fasle
 * F && T ==> false 

examples
//           T       T
console.log(4>3 && 10>5) 
//           F      T      

console.log(2>3 && 10>5)




//OR (||)

/**
  * T || T ==> True
 * F || F ==> false 
 * T || F ==> true
 * F || T ==> true 
 * 
 * //           T       T
console.log(4>3 || 10>5)   // true
//           F      T      

console.log(2>3 || 10>5) //true
 * 
 */
//NOT (!)

/**
 * T!F
 * F!T
 * 
 * 
 * 
console.log(!(4>3)) // true  -->false
 */

// increment operator  (++ variable)

//pre increment -- increment is done before that varaible 
let incr= 10
console.log(++incr) // 11
console.log(incr) //11

//post inccrement--
let incr1= 20
console.log(incr1++)  //20
console.log(incr1) //21

// decrement operator (--)



//pre dercement -- decrement is done before that varaible 
let incr3= 10
console.log(--incr3) // 9
console.log(incr3) //9

//post decrement--
let incr4= 2
console.log(incr4--)  //2
console.log(incr4) //1


//Ternaray operators (if else ) 

// syntax 

// condition 1 ? output of condition 1 :output of condition 2 

let num =-5
num >0 ? console.log(` your given number ${num} is positive number`):
console.log(`your given number ${num} is negative number`)

let season = "dfgbjkuygt"

season=="raining"?console.log("carry raincoats "):
console.log("do not carry any raincoats ")


// ternaary operators 

/**
 * ?--> if 
 * :-->else 
 */

let status1 = "DSR SENT"

// dsr sent --> work done considered 
// dsr not sent --> marked as abesent 


 status1==" not DSR SENT"?console.log("work done considered "):console.log("marked as abesent ")


