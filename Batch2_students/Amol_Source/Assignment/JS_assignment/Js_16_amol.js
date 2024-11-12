
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
