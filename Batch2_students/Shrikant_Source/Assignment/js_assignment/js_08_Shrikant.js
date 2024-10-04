// Assignment: JavaScript Date and Time Exercises

/* 
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
Also, display the current time in various formats.


dd:mm:yyyy HH:mm (24 hours)
dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
yyyy:mm:DD mm:hh 

*/

// Question 2: 
// Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
// (e.g., "Monday, 02 October 2024 15:30").
// (e.g., "Monday, 02 October 2024 3:30 pm").
let date = new Date()
let day = date.getDate();
let strDay = date.toLocaleString(`en-gb`, {weekday: 'long'});
console.log(strDay);
let paddayformat = String(day).padStart(2,0)
let month = date.getMonth();
let strMonth = date.toLocaleString('en-gb', {month: 'long'} )

let year = date.getFullYear();

let gethours= date.getHours()
let getmin= date.getMinutes()
let curTime= date.getHours() 

 let ampm = gethours >=12 ? "PM":"AM"
 let curhours = curTime %12
console.log(`${strDay} ${paddayformat} ${strMonth} ${year}     ${gethours}.${getmin} ${ampm} `);

// Question 3: 
// Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
// 31 -dec
// let strDate = '2024-12-31';
// let targetDate = new Date(strDate);
// let today = date.getDate();
// letDiffdate = (strDate.getDate()) - (targetDate.getDate());
// console.log(letDiffdate);

let  date1 = new Date('2024-12-31');
let date2 = new Date('2024-10-04');
let difference = Math.abs(date1 - date2);
let days = Math.ceil(difference / (1000 * 60 * 60 * 24));    
console.log(days);



/* 
Question 4: 
Check if a current  year is a leap year.

*/

