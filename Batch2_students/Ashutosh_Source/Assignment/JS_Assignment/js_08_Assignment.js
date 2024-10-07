let date = new Date()
day = date.getDay()
datee = date.getDate()
year = date.getFullYear()
month = date.getMonth()
time = date.getHours()
min = date.getMinutes()
sec = date.getSeconds()
// console.log(datee);
// console.log(year);
// console.log(month);
// console.log(time);
// console.log(min);
// console.log(sec);
// today = `${datee}/${month}/${year}.${time}.${min}.${sec}`
// console.log(today);




// Assignment: JavaScript Date and Time Exercises


// Question 1: 
// Prompt the user to enter the number of years they have lived. 
// Then, calculate the number of seconds a person can live. 
// Assume someone lives 100 years as the maximum. 
// Also, display the current time in various formats.
age = 10

// dd:mm:yyyy HH:mm (24 hours)
console.log(`${String(datee).padStart(2,0)}:${String(month).padStart(2,0)}:${year} ${time}:${min}`);

// dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
console.log(`${String(datee).padStart(2,0)}:${String(month).padStart(2,0)}:${year} ${time%12}:${min}`);

// dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
// console.log(`${String(datee).padStart(2,0)}:${toLocaleString(month).padStart(2,0)}:${year} ${time%12}:${min}`);

// yyyy:mm:DD mm:hh 
console.log(`${year}:${String(month).padStart(2,0)}:${String(datee).padStart(2,0)} ${time%12}:${min}`);


// */

// /* 
// Question 2: 
// Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
// (e.g., "Monday, 02 October 2024 15:30").
// (e.g., "Monday, 02 October 2024 3:30 pm").
let Ttoday = date.getDate()
let daystr = date.toLocaleString('en-gb', {weekday:'long'});
let monthstr = date.toLocaleString('en-gb',{month: 'long'})
console.log(`${daystr},${String(datee).padStart(2,0)} ${monthstr} ${year} ${time}:${min}`);

// /* 
// Question 3: 
// Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
let newdate = new Date("2024-12-31")
timeremaining = Math.abs(datee-newdate)
console.log((timeremaining)/(1000*60*60*24));

// 31 -dec


// */

// /* 
// Question 4: 
// Check if a current  year is a leap year.
(year%4==0 && year%100!=0||year%400==0) ? console.log(`${year} is a leap year`):
console.log(`${year} is not a leap year`);


