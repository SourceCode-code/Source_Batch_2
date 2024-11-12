
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
for  (let key in users) {
    if (users[key].skills.length < 2){
        usersWithLessThanTwoSkills.push(users[key])
    }
}
console.log(usersWithLessThanTwoSkills)
console.log("----------ans.5------------------")
