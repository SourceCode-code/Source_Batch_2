
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

let date=new Date()

let years = 27

let Livedtime= years*(365.25*24*60*60)
console.log(`you have lived ${years} year of your life`) 
console.log(`you have lived ${Livedtime} seconds of your life`) //you have lived 852055200 seconds of your life

//current time in various formats
//dd:mm:yyyy HH:mm (24 hours)
let currentdate=String(date.getDate()).padStart(2,"0")
let currentMonth= String((date.getMonth()+1)).padStart(2,"0")  //         0 -11 ======== 1========
let currentyear = date.getFullYear()
 
let hh=String(date.getHours()).padStart(2,"0")
let mm=String(date.getMinutes()).padStart(2,"0")


console.log(`${currentdate}:${currentMonth}:${currentyear}   time ${hh}:${mm}`)

//dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)

let curTime= date.getHours() 
let curTime1 = curTime%12
let curmin = date.getMinutes()
let curhours = curTime?curTime :12

let strmonth=date.toLocaleString('en-gb', { month: 'short' })

console.log(`${currentdate}:${strmonth}:${currentyear} ${curhours}:${curmin}`)

//dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
let strmonth1=date.toLocaleString('en-gb', { month: 'long' })
console.log(`${currentdate}:${strmonth1}:${currentyear} ${curhours}:${curmin}`)

/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").


(e.g., "Monday, 02 October 2024 3:30 pm").

*/
// Create a date object for "02 October 2024 15:30"
let curDate = new Date();

// Extracting date components
let dayOfWeek = curDate.toLocaleString('en-US', { weekday: 'long' }); // Get day of the week
let day = String(curDate.getDate()).padStart(2, '0'); // DD
let month = curDate.toLocaleString('en-US', { month: 'long' }); // Get month
let year = curDate.getFullYear(); // YYYY
let hours = String(curDate.getHours()).padStart(2, '0'); // HH
let minutes = String(curDate.getMinutes()).padStart(2, '0'); // mm


const formattedDate = `${dayOfWeek}, ${day} ${month} ${year} ${hours}:${minutes}`;
console.log(formattedDate);

//(e.g., "Monday, 02 October 2024 3:30 pm").

let curhours1 = curTime?curTime :12
let ampm = curTime >=12 ? "PM":"AM" 
console.log(`${dayOfWeek}, ${day} ${month} ${year} ${curhours1}:${minutes} ${ampm}`)
/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

31 -dec
*/
let cdate = new Date("2024-10-03")
let fdate = new Date("2024-12-31")
let final = Math.abs(cdate-fdate) //here we get ans in milisecond
let finaloutput = ((final)/(1000*60*60*24)) //this calculation for coverting milisecond to days
console.log(finaloutput)

/* 
Question 4: 
Check if a current  year is a leap year.
*/

let currentYear = new Date().getFullYear();

// Check if the current year is a leap year
let isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);
let leapYearStatus = isLeapYear ? "is" : "is not";
console.log(`The current year, ${currentYear}, ${leapYearStatus} a leap year.`);


