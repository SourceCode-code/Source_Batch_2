//datatypes -->
// primitive --> string , boolean , numbers, null, undefined
// nonprimitive -->arrays , objects 

// sets and map

// set --> set is a collection of elements ,set only conatins a unqiue value   
// let arr = [1,2,4,5,6,7,4,6,2] // example of array 

//set = [1,2,4,5,6]

// how to delcare a set 
const set_one=new Set()

console.log(set_one)
//Set(0) {}

// 2 way -->
const lang = ["English","Spanish","French","English","Spanish","german","French"]

let setOfLang= new Set(lang)

console.log(setOfLang)
//Set(4) { 'English', 'Spanish', 'French', 'german' }


//how use  loops in set
for(const lan of setOfLang){

    console.log(lan)
}

/**
 * English
Spanish
French
german
 */

//--------------------------------------------------------------------------------


//operations on set 

// add element in the set 

let Companies = new Set()

console.log(Companies) //Set(0) {}

Companies.add("Google")


console.log(Companies) //Set(1) { 'Google' }

Companies.add("Microsoft")

console.log(Companies)  //Set(2) { 'Google', 'Microsoft' }


//--------------------------------------------------------------------------------


let comp = ["google","amazon","microsoft","orcale"]

let com= new Set()

for( let i of comp){
    com.add(i)
}
console.log(com) //Set(4) { 'google', 'amazon', 'microsoft', 'orcale' }



//Set(4) { 'google', 'amazon', 'microsoft', 'orcale' }


//---------------------------------------------------------------------------------
//deleting value form set
com.delete("orcale")
console.log(com) //Set(3) { 'google', 'amazon', 'microsoft' }

com.delete("amazon")
console.log(com)//Set(2) { 'google', 'microsoft' }


// -----------------------------------------------------------
//delete all value for set 

//Set(4) { 'English', 'Spanish', 'French', 'german' }

setOfLang.clear()

console.log(setOfLang) //Set(0) {}


let numarr=[1,1,2,2,4,4,5,5,6,6,67,7,7,8,8,5]

let setofnum=new Set(numarr)

console.log(setofnum) //Set(8) { 1, 2, 4, 5, 6, 67, 7, 8 }



// uuion of set  -- fnding common elements


let a = [1,2,3]
let b =[4,5,6,7,8]

// (A U B)


let c =[...a,...b]
console.log(c)

// //[
//     1, 2, 3, 1,
//     2, 3, 4, 5
//   ]

let A=new Set(a)

let B =new Set(b)

let C = new Set(c)


console.log(C) //Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }



// intersection -- >


let x = [1,2,3,4,5]
let y =[4,5,6,7,8]


let X= new Set(x)
let Y= new Set(y)

let z = x.filter((el)=>{Y.has(el)})

console.log(z)// [4,5]
let Z = new Set(z)

console.log(Z) //Set(2) { 4, 5 }


// difference -- >

let uncomon= x.filter((el)=>!Y.has(el)) // {1,2,3}
let uncoom  = y.filter((el)=>!X.has(el)) //{6,7,8}
console.log(uncoom)

let diff = [...uncomon,...uncoom]



let Diff = new Set(diff)
console.log(Diff) //Set(6) { 1, 2, 3, 6, 7, 8 }