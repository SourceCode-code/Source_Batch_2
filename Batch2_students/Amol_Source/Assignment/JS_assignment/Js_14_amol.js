const profiles = [
    {
      firstName: "Vihaan",
      lastName: "Mehta",
      age: 28,
      experience: 6,
      skills: ["TypeScript", "CI/CD"],
      position: "Automation Tester"
    },
    {
      firstName: "Rohan",
      lastName: "Joshi",
      age: 29,
      experience: 11,
      skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
      position: "Technical Lead"
    },
    {
      firstName: "Vihaan",
      lastName: "Deshmukh",
      age: 32,
      experience: 1,
      skills: ["Python", "TypeScript"],
      position: "Software Engineer"
    },
    {
      firstName: "Ishaan",
      lastName: "Pandey",
      age: 31,
      experience: 14,
      skills: ["Python", "Cypress"],
      position: "Systems Engineer"
    },
    {
      firstName: "Ishaan",
      lastName: "Deshmukh",
      age: 25,
      experience: 1,
      skills: ["Java", "Playwright", "JavaScript", "SQL"],
      position: "Systems Engineer"
    },
    {
      firstName: "Rohan",
      lastName: "Joshi",
      age: 33,
      experience: 3,
      skills: ["JavaScript", "Java", "Docker", "TypeScript"],
      position: "Full-Stack Developer"
    },
    {
      firstName: "Pranav",
      lastName: "Joshi",
      age: 24,
      experience: 2,
      skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
      position: "Data Analyst"
    },
    {
      firstName: "Rohan",
      lastName: "Nayak",
      age: 24,
      experience: 10,
      skills: ["JavaScript", "GitHub Actions", "Playwright"],
      position: "Backend Developer"
    },
    {
      firstName: "Arjun",
      lastName: "Nayak",
      age: 36,
      experience: 4,
      skills: ["Java", "Playwright", "Docker"],
      position: "Systems Engineer"
    },
    {
      firstName: "Vikram",
      lastName: "Joshi",
      age: 34,
      experience: 1,
      skills: ["Python", "GitHub Actions"],
      position: "Full-Stack Developer"
    }
  ];

  //vihan metha has experince of 3 years  his current position is autoamtion testor and his skills include   skills: [ 'TypeScript', 'CI/CD' ],
  function Vihaninfo(array){
return (`${array[0].firstName} ${array[0].lastName} has experince of ${array[0].experience} years his current position is  ${array[0].position} and his skills include : ${array[0].skills}`)
  }
  console.log(Vihaninfo(profiles)) // for [{}] object in array we work like this i.e objectname[index of perticular object ].key of a object.


// let Ishaaninfo = [{
//   firstName: "Ishaan",
//   lastName: "Deshmukh",
//   age: 25,
//   experience: 1,
//   skills: ["Java", "Playwright", "JavaScript", "SQL"],
//   position: "Systems Engineer"
// },
// {
//   firstName: "Vikram",
//   lastName: "Joshi",
//   age: 34,
//   experience: 1,
//   skills: ["Python", "GitHub Actions"],
//   position: "Full-Stack Developer"
// }
// ]

// function ishan(array){
//   return array[1]
// }
// console.log(ishan(Ishaaninfo))

// let array = [1,2,3,4,5,6,7,8,9]
// let B = array.reduce((el,index,arr)=>{
//   return el+index
// })
// console.log(B)


