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
let Day = new Date()
let Day1 = Day.getDate()
let day2 = Day1<=10?`0${Day1}`:Day1
let Month = Day.getMonth();
let month1 = String(Month).padStart(2,0);
    let month2= Day.toLocaleString('en-gb',{Month:'short'})
        let month3= Day.toLocaleString('en-gb',{Month:'long'})
let year1 = Day.getFullYear();
let hr =Day.getHours()
let hr1 = hr<=10?`0${hr}`:hr
      let Hr2 = hr%12
let min= Day.getMinutes()
let min1 = min<=9?`0${min}`:min
let ampm1= hr<=12?'am':'pm'

console.log(`${day2}:${month1}:${year1} ${hr1}:${min1} ${ampm1}`)
console.log(`${day2}:${month2}:${year1} ${Hr2}:${min1} ${ampm1}`)
console.log(`${day2}:${month3}:${year1} ${Hr2}:${min1} ${ampm1}`)
console.log(`${year1}:${month1}:${day2} ${min1}:${hr1} ${ampm1}`)

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




// Question 4: 
// Check if a current  year is a leap year.

let currentYear = new Date().getFullYear();

let isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);

// Output the result
let leapcheck = (currentYear = isLeapYear)
    ? console.log("The given year is a leap")
    : console.log("The given year is not leap");