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
  
  fullname = profiles[0]
  console.log(fullname)
  lastname = profiles["lastName"][1]
  console.log(lastname)
experience = profiles[0][3]
position=profiles[0][5]
skills=profiles[0][4]
//console.log(`${fullname}${lastname}has experience ${experience} his position ${position} and his skill ${skills}`)