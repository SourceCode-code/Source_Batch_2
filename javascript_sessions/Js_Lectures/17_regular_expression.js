//Regular Expression:----
/** its a small programing syntax used to find pattern in the data  */

// how to dELECARE  regaular expression 

//1) you can use regular experssion constaructor 
//2) use to forward slashes following a flag


//pattern --> a patteren could be a text or any form of pattern which have some simliarity 

// emails --> @gmail.com

//Flags --> flags are optional parameter in an regex which deteremine the type of searching

/**
 * g: a gobal flag which means it will search in the whole text pattern
 * i: this is a case insenetive flag ( that is it will search the pattern in upper as well as lower case)
 * m : multiline (allows to search in multi line )
 * 
 */


//1) you can use regular experssion constaructor 

let pattern ="siddhant"

let regex= new RegExp(pattern)

console.log(regex) //        /siddhant/
// this is a cretion of simple regualr expression which doesnt use any flag



let regex1= new RegExp(pattern,"gi")

console.log(regex1)  //     /siddhant/gi

// this is a cretion of simple regualr expression which  use flag


//2) creater regex mannual 

let regex3= /siddhant/gim


// methods in regex 

//1) test(): returns true of false and check wheater the string contains the word


let str = "I am Learning Javascript"

let result= /learning/i.test(str)

// synTX 
 //regex.test(string)

console.log(result) // 


//  Using match() to search for a pattern
let str17 = "I AM LEARNING JS , LEARNING CYPRESS, LEARNING PLAYWRIGHT";
console.log(str17.match(/learning/gi).length) // Output: [ 'LEARNING', index: 5, input: 'I AM LEARNING...', groups: undefined ]

// search ()--> search method matchs the pattern in string and returns index or -1


// let str = "I am Learning Javascript"


console.log(str.search(/am/gi))
console.log(str17.search(/learn/gi))