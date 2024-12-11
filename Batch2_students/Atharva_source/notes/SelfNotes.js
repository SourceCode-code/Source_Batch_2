//This is the file which contains my own Notes for everything related to JS ; Manual \\

//-----------------------------------------------------------------------------------\\

//Question asked by interviewer Akshay Kshirsagar in Mock Interview dated : 23.Nov. 24

// 1: Create a  syntax error : 
// const num =;
// console.log(num); // SyntaxError: Unexpected end of input 

//2: in an array find the even numbers 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNum = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evenNum.push(arr[i])
    }
}
console.log(evenNum)
console.log("-------ans.1----------")

//3: Find the second most big number in an array : 

//Method 1 \\
let Arr = [1, 5, 6, 15, 20, 25, 26]
let max1 = -Infinity;
let max2 = -Infinity;
for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > max1) {
        max2 = max1
        max1 = Arr[i]
    }
    else if (arr[i] > max2) {
        max2 = Arr[i]
    }
}
console.log(`${max1} ${max2}`)
console.log("------Ans.2-Method-1---------")

//Method 2\\
let b = Arr.sort((a, b) => (b - a)).slice(0, 2)
console.log(b)
console.log("------Ans.2-Method-2---------")

//4 : Reverse the given array 
let Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let c = Arr1.slice(3, 6).reverse()
Arr1.splice(3, 3, ...c)
console.log(Arr1)
console.log("------Ans.4------------")

// 1: What are the techniques of BLACK and WHITE BOX testing ?

//Black Box Testing: 

/*1. Equivalence Partitioning: To perform Equivalence partitioning, 
split the input data into a set of values to test and choose the specific input value.


/2 . Boundary Value Analysis: 
BVA concentrates values at boundaries to examine whether a set of values is acceptable by the system or not. 
This technique helps avoid writing the number of test cases. Simply BVA tests both inner and outer limits in a range of values.

/3 Decision Table Testing(DTT): 
This Technique entirely focuses on the system input and tests the different input data combinations. 
Makes sure the behavior of the system is working fine.
 
/4  State Transition testing :  During the Testing phase input, output,
 and state of the system will be tested. After the transformation of the state from one state 
 to another works well with unique system feedback.

/5 Error Guessing Technique: 
Based on the application’s behavior and functionalities Tester uses this technique to guess the error-prone in the system.


/6: Graph-Based Testing: Graph-based testing is the same as decision-based test cases especially when we deal with test case links and input cases’


WHITE BOX Testing: 

/1 Statement coverage: 
In the statement, coverage ensures every single code is tested.
It’s one of the most commonly used techniques of all. Programming skills are important to perform this testing.


/2 Decision Coverage : 
In this technique, the code is mapped into the branches of conditional logic and ensures that unit tests cover every branch.

/3 Path Coverage: 
In this technique, make sure all the paths are tested. 
It helps to fix the defective and unnecessary errors in the path.

/

//=--------------------------------------------=\\
2: testing Principles :

a: Testing shows the prsence of defects
b: Exhaustive testing is not possible 
c: early testing
d: Defect clustering
e: Testing is context dependant 
f: Pesticide paradox
g: Absence of errors fallacy 
//==============================================\\

3: Is regression a part of testing ? : No, It is a testing technique .
4: Will retesting be performed first or Regression : Retesing first , then Regression later
5: Defect life cycle : 
New > Assigned > Fixed > Pending retest > Retest > Verified > closed
6: based on defect life cycle , scenario based question like : If dev doesn't accept the bug issued by tester , what will You do ? 
ANSwer: Ask for concrete evidence that why it is not accepted by dev, 
request to provide related screenshots, Be collaborative .
7: Queries related to Jira : like Where to raise a bug , where we can find the bugs raised by our teammates; 
8: Smoke and sanity : Difference 
9: what is test harness
*/


//Reg-Ex problems \\

// finding occurence of a word in a string :

// let Para = "I like Pune ! Pune is the Hub for IT Industry; Many Innovative companies like  startups are making a difference in Pune just like bengaluru"
// function MostUsedWords(Para, limit) {
//     let Words = Para.toLowerCase().match(/\b\w+\b/g)
//     let WordsCount = {}

//     Words.forEach(Words => {
//         WordsCount[Words] = (WordsCount[Words] || 0) + 1
//     })
//     return Object.entries(WordsCount).map(([words, count]) => ({ words, count })).sort((a, b) => b.count - a.count).slice(0, limit)
// }
// console.log(MostUsedWords(Para, 5))

//Important notation in Regular Expressions : \\

/*
\b: matches the starting and ending of a word 
\w+ : matches the word with one or more characters
[]: a set of character 


*/


let str = "sajankaaaaa in goaa and madriiiiiiiddddd"
let repeated = 11;
function mostCountLetter(str){
    let check = str.split("")
    let mostletter = {}


    check.forEach((el)=>{
        mostletter[el] = (mostletter[el] ||0 ) + 1
    })
    return Object.entries(mostletter).map(([words,count])=>({words,count})).sort()
}

let sorted = mostCountLetter(str)
console.log(sorted)


sorted.forEach((el)=>{
    if(el.count == repeated){
        console.log(el)
    }
})
console.log("----most-used-letter-Interview-query----")

///Random Problems \\\

// Star pattern problem 

let row = 3;
let star = 5;
for(let i=0;i<3;i++){
    let pattern =" ".repeat(i)+"*".repeat(star)
    console.log(pattern)
    star -= 2
}
console.log("-----pattern1---------")

let row1 =3;
let star1 =4;
for(let i=1;i<=2;i++){
    let Pattern = "".repeat(i)+"*".repeat(star1)
    if(i==2){
        console.log("*  *")
    }
    console.log(Pattern)
}
console.log("-----pattern2---------")

let row2 =7;
for(let i=1;i<=7;i++){
    console.log("#".toString().repeat(i))
}
console.log("-----pattern3--------")

let Art = [1,2,3,4,5,6,7,8,9,10]
let EvenNum = Art.filter((Art)=>{
    return Art%2==0
})
console.log(EvenNum)
console.log("----evenNum-1-----")

