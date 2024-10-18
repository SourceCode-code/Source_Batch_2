// we assign variables by (const , let , var )

// const -- once value is assign you cant update the value (localscope)
// let --> once value is assign you can update the value (local scope)
// var -->once value is assign you can update the value (gobal scope)


// global scope --> when a varaibale is delecraed outside any function of block and they are accsessable anywhere
// in the page so there called global scope

var x=20

console.log(x) //20

function printx(){
    console.log(x) //20
}

printx()//20
if(true){
    console.log(x) //20
}

console.log(x) //20

// local scope --> when a varaiable is delecred in a function or a block it cant be access outside the block so its called local scope

//1 function scope


function printy(){
    let y=100
    console.log(y) //100
}

function printz(){
    let y = 250
    console.log(y)
}
printy()
printz()
let y="newvalue"
console.log(y) // undefined

//2 block scope

if(true){
    let a= 456
    console.log(a)
}

console.log(a)



