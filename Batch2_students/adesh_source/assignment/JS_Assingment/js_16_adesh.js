// Exercises: Level 1

// 1. Destructure and assign the elements of constants array to the following variables:
//    
  const constants = [2.72, 3.14, 9.81, 37, 100];
  const [e, pi, gravity, xyz, abc] = constants;

  console.log(e);        
  console.log(pi);       
  console.log(gravity);  
  console.log(xyz);  
  console.log(abc);



// 2. Destructure and assign the elements of countries array to the following variables:
//    
//javascript
    const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
    const [finland, estonia, sweden, denmark, norway] = countries;

    console.log(finland); 
    console.log(estonia); 
    console.log(sweden);  
    console.log(denmark); 
    console.log(norway); 



// 3. Destructure the rectangle object by its properties or keys:
//    
//javascript
  const rectangle = {
  width: 20,
  height: 10,
 area: 200,
 perimeter: 60
 };
  
 const { width, height, area, perimeter } = rectangle;

console.log(width);     
console.log(height);    
console.log(area);     
console.log(perimeter); 


// Exercises: Level 2

// 1. Iterate through the users array and get all the keys of each object using destructuring:
//    
//javascript
  const users = [
  { name: 'Brook', scores: 75, skills: ['HTM', 'CSS', 'JS'], age: 16 },
 { name: 'Alex', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
  { name: 'David', scores: 75, skills: ['HTM', 'CSS'], age: 22 },
 { name: 'John', scores: 85, skills: ['HTML'], age: 25 },
 { name: 'Sara', scores: 95, skills: ['HTM', 'CSS', 'JS'], age: 26 },
  { name: 'Martha', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
 { name: 'Thomas', scores: 90, skills: ['HTM', 'CSS', 'JS'], age: 20 }
  ];
  users.forEach(({ name, scores, skills, age }) => {
    console.log(`${name}, ${scores},${skills},${age}`);
  });


// 2. Find the persons who have less than two skills:
const TwoSkills = users.filter(({ skills }) => skills.length < 2);
console.log(TwoSkills);
