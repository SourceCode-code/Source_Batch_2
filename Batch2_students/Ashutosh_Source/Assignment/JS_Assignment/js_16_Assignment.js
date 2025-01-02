
// Exercises: Level 1

// 1. Destructure and assign the elements of `constants` array to the following variables:
//    ```javascript
//   //    ```
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e,pi,gravity,humanBodyTemp,waterBoillingTemp] = constants
console.log(e,pi,gravity,humanBodyTemp,waterBoillingTemp);

// 2. Destructure and assign the elements of `countries` array to the following variables:
//    ```javascript
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor);

// 3. Destructure the `rectangle` object by its properties or keys:
//    ```javascript
//    const rectangle = {
//      width: 20,
//      height: 10,
//      area: 200,
//      perimeter: 60
//    };
//    const { width, height, area, perimeter } = rectangle;
//    ```
const rectangle = {
         width: 20,
         height: 10,
         area: 200,
         perimeter: 60
       };

const {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter);


// Exercises: Level 2

// 1. Iterate through the `users` array and get all the keys of each object using destructuring:
//    ```javascript
//    
//    users.forEach(({ name, scores, skills, age }) => {
//      console.log(name, scores, skills, age);
//    });
//    ```
const users = [
          { name: 'Brook', scores: 75, skills: ['HTM', 'CSS', 'JS'], age: 16 },
          { name: 'Alex', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
          { name: 'David', scores: 75, skills: ['HTM', 'CSS'], age: 22 },
          { name: 'John', scores: 85, skills: ['HTML'], age: 25 },
          { name: 'Sara', scores: 95, skills: ['HTM', 'CSS', 'JS'], age: 26 },
          { name: 'Martha', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
          { name: 'Thomas', scores: 90, skills: ['HTM', 'CSS', 'JS'], age: 20 }
        ];

users.forEach(({Name,scorres,skills,age}) => {
    console.log(Name,scorres,skills,age);
    
});        
// 2. Find the persons who have less than two skills:
//    ```javascript
//    ```
const skills2 = users.filter(({skills}) => skills.length < 2)
console.log(skills2);
