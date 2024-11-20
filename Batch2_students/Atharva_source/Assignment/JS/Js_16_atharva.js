
// Exercises: Level 1

// 1. Destructure and assign the elements of `constants` array to the following variables:
//    ```javascript
//    ```
const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
console.log("----------ans.1------------------")

// 2. Destructure and assign the elements of `countries` array to the following variables:
//    ```javascript
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);
console.log("----------ans.2------------------")


// 3. Destructure the `rectangle` object by its properties or keys:
//    ```javascript
//    ```
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
};
const { width: wi, height: he, area: ar, perimeter: pe } = rectangle;
console.log(wi, he, ar, pi)
console.log("----------ans.3------------------")


// Exercises: Level 2

// 1. Iterate through the `users` array and get all the keys of each object using destructuring:
//    ```javascript
const users = [
    { name: 'Brook', scores: 75, skills: ['HTM', 'CSS', 'JS'], age: 16 },
    { name: 'Alex', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
    { name: 'David', scores: 75, skills: ['HTM', 'CSS'], age: 22 },
    { name: 'John', scores: 85, skills: ['HTML'], age: 25 },
    { name: 'Sara', scores: 95, skills: ['HTM', 'CSS', 'JS'], age: 26 },
    { name: 'Martha', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
    { name: 'Thomas', scores: 90, skills: ['HTM', 'CSS', 'JS'], age: 20 }
];
//    users.forEach(({ name, scores, skills, age }) => {
//      console.log(name, scores, skills, age);
//    });


//tried by using Loops -As suggested by siddhant to use our own way\\\\
for (let key in users) {
    console.log(users[key].name, users[key].scores, users[key].skills, users[key].age)
}
console.log("----------ans.4------------------")
//    ```

// 2. Find the persons who have less than two skills:
//    ```javascript
// const usersWithLessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);
// console.log(usersWithLessThanTwoSkills);


//Tried by using Loops - As suggested by siddhant to use our own way\\
let usersWithLessThanTwoSkills = [];
for (let key in users) {
    if (users[key].skills.length < 2) {
        usersWithLessThanTwoSkills.push(users[key])
    }
}
console.log(usersWithLessThanTwoSkills)
console.log("----------ex.level-2-ans.2------------------")


//LEVEL 3

//1  Destructure the countries object print name, capital, population and languages of all countries
//(use the large data of the country object in above assignment 15)

//2 A junior developer structure student name, skills and score in array of arrays which may not easy to read.
// Destructure the following array name to name, skills array to skills, scores array to scores,
// JavaScript score to jsScore and React score to reactScore variable in one line.

  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  //console.log(Name, skills, jsScore, reactScore)
const  i =[name, skills,[, , jsScore, reactScore]] = student
console.log(i)
console.log("----------ex-lev-3-ans1--------------")
  //David (4) ["HTM", "CSS", "JS", "React"] 90 95


//3 Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

//console.log(convertArrayToObject(students))
// [
//     {
//         name: 'David',
//         skills: ['HTM', 'CSS', 'JS', 'React'],
//         scores: [98, 85, 90, 95]
//     },
//     {
//         name: 'John',
//         skills: ['HTM', 'CSS', 'JS', 'React'],
//         scores: [85, 80, 85, 80]
//     }
// ]


// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]

function  convertArrayToObject(arr){
    return arr.map(([name,skills,scores]) => ({
        name,
        skills,
        scores
    }))
}
console.log(convertArrayToObject([
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
))
console.log("-----------ex.lev-3-Ans.3-----------------")








//4 Copy the student object to newStudent without mutating the original object.
// In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
//

//const student = {
//       name: 'David',
//       age: 25,
//       skills: {
//         frontEnd: [
//           { skill: 'HTML', level: 10 },
//           { skill: 'CSS', level: 8 },
//           { skill: 'JS', level: 8 },
//           { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//           { skill: 'Node',level: 7 },
//           { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//           { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//       }
//     }
// The copied object output should look like this:

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }

