// Exercises
// ASSIGNMENT DATA 
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


// Exercises Level 1
//1 Change skills array to JSON using JSON.stringify()
console.log(JSON.stringify(skills))
console.log("----Answer-1----")

//2 Stringify the age variable
console.log(JSON.stringify(age))
console.log("----Answer-2----")
//3 Stringify the isMarried variable
let a = JSON.stringify(isMarried)
console.log(a)
console.log("----Answer-3----")
//4 Stringify the student object
let b = JSON.stringify(student)
console.log(b)
console.log("----Answer-4----")

//1 Exercises Level 2
//2 Stringify the students object with only firstName, lastName and skills properties
let c = JSON.stringify(student,["firstName","lastName","skills"])
console.log(c)
console.log("----Answer-1.Level-2----")

// Exercises Level 3
//1 Parse the txt JSON to object.
let d = JSON.parse(txt)
console.log(d)
console.log("----Answer-2.Level-2----")
//2 Find the user who has many skills from the variable stored in txt.
let mostSkillsUser = {}
let maxSkills = 0
for(let i in d){
    if((d[i]['skills'].length)>maxSkills){
        mostSkillsUser = d[i]
    }
}
console.log(mostSkillsUser)
console.log("----Answer-3.Level-3----")