
// Exercises: Level 1

// notes =  check the given varialbe is in array or in object then only you can Desructure.(i.e [] = let[] OR {}= let {})
//2. let[area1,area5,...remainingarea]=countries, we can also write sprade operator like that 
//3.  array method note use in objects nd mostly go for the for loop (be aware whe to use in and oF)


// 1. Destructure and assign the elements of `constants` array to the following variables:
//    ```javascript
//const constants = [2.72, 3.14, 9.81, 37, 100];
// let [num1,num2,num3,num4,num5] = constants
// console.log(num1,num2,num3,num4,num5)
//const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
//    ```

// 2. Destructure and assign the elements of `countries` array to the following variables:
//    ```javascript
//const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
 //const [fin, est, sw, den, nor] = countries;
 //method 2
// let[area1,area2,area3,area4,area5]=countries
// console.log(area1,area2,area3,area4,area5)

// 3. Destructure the `rectangle` object by its properties or keys:
//    ```javascript
//    const rectangle = {
//      width: 20,
//      height: 10,
//      area: 200,
//      perimeter: 60
//    };
// //  const { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter)

//method 2
// let {width:wd,height:ht,area:ar,perimeter:pr}=rectangle
// console.log(wd,ht,ar,pr)

// we dont use array methods here like=> forEach,filter abd all

//Method 3
// measurements = []
// for(let key in rectangle){
// measurements.push(rectangle[key])
// }
// console.log(measurements)

// Exercises: Level 2

// 1. Iterate through the `users` array and get all the keys of each object using destructuring:
//    ```javascript
//  const users = [
//      { name: 'Brook', scores: 75, skills: ['HTML', 'CSS', 'JS'], age: 16 },
//      { name: 'Alex', scores: 80, skills: ['HTML', 'CSS', 'JS'], age: 18 },
//      { name: 'David', scores: 75, skills: ['HTML', 'CSS'], age: 22 },
//      { name: 'John', scores: 85, skills: ['HTML'], age: 25 },
//      { name: 'Sara', scores: 95, skills: ['HTML', 'CSS', 'JS'], age: 26 },
//      { name: 'Martha', scores: 80, skills: ['HTML', 'CSS', 'JS'], age: 18 },
//      { name: 'Thomas', scores: 90, skills: ['HTML', 'CSS', 'JS'], age: 20 }
//    ];
// //    users.forEach(({ name, scores, skills, age }) => {
//      console.log(name, scores, skills, age);
//    });
//method 2
// for(let key of users){
//     //console.log(`${key.name} ${key.scores} ${[key.skills]} ${key.age}`)
//     //console.log(key.name,key.scores,[key.skills],key.age)
// }




// 2. Find the persons who have less than two skills:
//    ```javascript
//    const usersWithLessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);
//    console.log(usersWithLessThanTwoSkills);
// method 2
// for (let key of users){
//     let skil = (key.skills)
//     if(skil.length<=2){
//         console.log(key)
//     }
// }

//LEVEL 3

//1  Destructure the countries object print name, capital, population and languages of all countries
//(use the large data of the country object in above assignment 15)
// const countries = require('./Js_15_amol')
// console.log(countries)

// for (const{name, capital, population,languages} of countries){
//     console.log(name, capital, population,languages)
// }

//2 A junior developer structure student name, skills and score in array of arrays which may not easy to read.
// Destructure the following array name to name, skills array to skills, scores array to scores,
//JavaScript score to jsScore and React score to reactScore variable in one line.

//   const student1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// let [name, skill1,Score]=student1
// let[HTMLscore,CSSscore,JSscore,ReactScore]=Score
//   console.log([name, skill1,Score],JSscore,ReactScore)
  //console.log(name,jsScore,reactScore)
  //David (4) ["HTM", "CSS", "JS", "React"] 90 95


//3 Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];
function convertArrayToObject(student){
let k = []
for (key in student){
  for (let i of (students[key])){
    k.push(i)
  }
}
let obj = {
  name:k[0],
  skills:k[1],
  scores:k[2]
}
let obj2 = {
  name:k[3],
  skills:k[4],
  scores:k[5]
}
console.log([obj,obj2])
}
convertArrayToObject(students)

// console.log(convertArrayToObject(students))
    // out put = [
    //   {
    //     name: 'David',
    //     skills: ['HTM','CSS','JS','React'],
    //     scores: [98,85,90,95]
    //   },
    //   {
    //     name: 'John',
    //     skills: ['HTM','CSS','JS','React'],
    //     scores: [85, 80,85,80]
    //   }
    // ]

//4 Copy the student object to newStudent without mutating the original object.
// In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
//

const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
// Add Bootstrap with level 8 to the front end skill sets
student.skills.frontEnd.push({skill:'Bootstrap',level:8})
//.log(student.skills.frontEnd)

// Add Express with level 9 to the back end skill sets
student.skills.backEnd.push({skill:"express",level:9})
//console.log(student.skills.backEnd)

// Add SQL with level 8 to the data base skill sets
student.skills.dataBase.push({skill:"SQL",level:8})
//console.log(student.skills.dataBase)
// Add SQL without level to the data science skill sets
student.skills.dataScience.push("SQL")
//console.log(student.skills.dataScience)

//Copy the student object to newStudent without mutating the original object.
//console.dir(student, { depth: null });


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
// let x = [1, 2, 3, 4, 5,2,3,4,5,6]; //  try to ask in session what if we want to extarct duplicate numbers
// let k = x.filter((el,index)=>{
//   return x.indexOf(el)!==index
// })
// console.log(k)
// Filter out companies which have more than one 'o' without using the filter method
//let company = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]



