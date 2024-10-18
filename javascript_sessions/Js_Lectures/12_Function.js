// Functions---> to make your code dynamic and resusable you use function 


// let a=10
// let b =20

// console.log("Addition",a+b)
// console.log("Substarction",a-b)
// console.log("division",a/b)
// console.log("multipication",a*b)
// console.log("modulus",a%b)


// //-----------------------------

// let c = 100
// let d =50

// console.log("Addition",c+d)
// console.log("Substarction",c-d)
// console.log("division",c/d)
// console.log("multipication",c*d)
// console.log("modulus",c%d)


// advatange===>

//1 keeps your code clean and dynamic 
// makes it easy to understand
//3 easy to test

// there 6 functions 

// its divided in two major catageries
//1 the way of writting  --- 3
//2 parameter and retrun type ---3


/**
 * syntax for function 
 * 
 * 
 * function functionname ( parameter){
 * // code
 * }
 * 
 * functionname(parameter)
 */



//  type of functions with examples 

//1 parameter and return type ---3

// function without parameter without return type

function fullname() {
    console.log("siddhant arjun gadakh")
}

// 

fullname()


// function with parameter without return type

function calculator(a, b) {

    console.log(`the calcuation of values ${a} & ${b} are`)
    console.log("Addition", a + b)
    console.log("Substarction", a - b)
    console.log("division", a / b)
    console.log("multipication", a * b)
    console.log("modulus", a % b)

}

calculator(10,20)

calculator(30,20)


// function with parameter with return type


function fullName(firstName,middlename,lastName){
    return  `${firstName} ${middlename} ${lastName}`

}


let siddhantinfo=fullName("siddhant","arjun","gadakh")
let vaibhavinfo=fullName("vaibhav","pratap","suryawanshi")
console.log(siddhantinfo)
console.log(vaibhavinfo)


console.log(siddhantinfo.toLocaleUpperCase())




//1 the way of writting  --- 3

//1 delecrative type --
// because your delacrting the name of the function while writting its as delecrative type 
function fullNamE(firstName,middlename,lastName){
    return  `${firstName} ${middlename} ${lastName}`

}
console.log(fullNamE("siddhant","arjun","gadakh"))

//2 expression type
// because this function is stored in a expression so its called and experssion type
let fullnaME =function (firstName,middlename,lastName){
    return  `${firstName} ${middlename} ${lastName}`

}

console.log(fullnaME(("siddhant","arjun","gadakh")))
//3 arrow type


let s= (firstName,middlename,lastName)=>{
  return  `${firstName} ${middlename} ${lastName}`
}

console.log(s("siddhant","arjun","gadakh"))


//Iterate 0 to n using for loop, do the same using while



function iteratenumbers(n){
    for(let i=0;i<=n;i++){
        console.log(i)
    }

}

iteratenumbers(100)


let printnumber=function(n){
    for(let i=0;i<=n;i++){
        console.log(i)
    }
}



printnumber(2)