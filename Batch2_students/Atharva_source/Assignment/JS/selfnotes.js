// Numbers / mathematical operations

//1:Math.random() - generates a random number between 0 and 1
//2: Math.round() - generates a number rounded Up = If the number is above 0.5 , else it rounds down to 0 if the number is below 0.5
//3: Math.ceiL() - generates a number with the highest integer value 
//4: Math.floor() - geneates a number with the lowest integer value

// formula to find a decimal number between a given range : 
// (Math.random() * max-min)+min

// for example :- if we want to generate a number b/n 8-19 which is decimal

let a = (Math.random() * 19 - 8)+8
console.log(a)

// and if the number should be without decimal
let b = Math.floor(Math.random()*19-8)+8
console.log(b)

console.log(Math.floor(18.5)) //18
console.log(Math.ceil(19.5)) //20
console.log(Math.round(4.5))//5
console.log(Math.random())

// -------------------------------------------------------//

// String methods//
/*
1:toUpperCase()
2:toLowerCase()
3:replace()
4:includes()
5:indexOf()
6:charAt()
7: trim()
8:startsWith()
9:endsWith()
10:concat()
11:backticks [``]
12:substr()
13:substring()
14:length()
15:length-1
16:split("")
17:repeat()


//--------------------------------------------//
// datatype conversion
//1: Number() - converts string to number
//2: String() - converts number to string
//3: parseInt() - converts string to integer
//4: parseFloat() - converts string to float
//5: Number.isInteger() - checks if number is integer
//6: Number.isFinite() - checks if number is finite
//7: Number.isNaN() - checks if number is NaN




*/
