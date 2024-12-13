//------------sync and async 


// javascript -- 

//syncrous  --> your code will be exceuted line by line 

console.log("hello")
console.log("world")
console.log("!!!!!!")
console.log(">>>>>>")

// anscyncorus--> the code which is easy to complie or which gets compile first it gets to the out puts first


console.log("hello")
console.log("world") ///
console.log("!!!!!!")
console.log(">>>>>>")

//output 
console.log("world") ///
console.log("!!!!!!")
console.log(">>>>>>")
console.log("hello")



// javascript is by nature syncrous --->

//your tool cypress and playwright --> anscyncorus  but 

// its made syncoruns using conversions 


//---------------------------------------------------------------------------------------------------

console.log("_______________________________ example of sync code____________________")
console.log("Step 1 - start the testcases")
console.log("Step 2: exceute the code ")
console.log("Step 3:get the results ")
console.log("Step 4: generate reports  ")

console.log("_______________________________ example of async code____________________")

console.log("Step 1 - start the testcases")

setTimeout(() => {
    console.log("Step 2: exceute the code ")
}, 3000)

console.log("Step 3:get the results ")
console.log("Step 4: generate reports  ")


//setInterval --> print output after a time given  (prints everytime after given delay)
//setTimeout --> prints the output after given time (prints only once after given delay)