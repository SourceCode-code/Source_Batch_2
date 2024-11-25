let data = {
    firstName: "Vihaan",
    lastName: "Mehta",
    age: 28,
    experience: 6,
    skills: ["TypeScript", "CI/CD"],
    position: "Automation Tester"
}

//retrive -->
// dot notaion
console.log(data.firstName) //Vihaan -->dot notation doesnt work in loop 

// by bracket notataion
console.log(data["lastName"]) //Mehta -->

//add     -->

data.pacakage="12 LPA"
console.log(data)

// barcket -->

data["inHandsalary"]="10LPA"
console.log(data)

//delete  -->

 delete data["inHandsalary"]

 console.log(data)



//update  -->

data.pacakage="15LPA"
console.log(data)

data["pacakage"]="18 LPA"
console.log(data)

