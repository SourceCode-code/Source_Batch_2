/*
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
Also, display the current time in various formats.


dd:mm:yyyy HH:mm (24 hours)
dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
yyyy:mm:DD mm:hh */









/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").
(e.g., "Monday, 02 October 2024 3:30 pm").
*/

let DateFormat = new Date();
let TodayDate =  DateFormat.getDate();
let day = DateFormat.getDate();
let StrDay = DateFormat.toLocaleString('en-gb',{ weekday: 'long'});

let TodayDate1 = TodayDate<=10 ? `0${TodayDate}`: TodayDate;
let Month = DateFormat.getMonth();
let StrMonth = DateFormat.toLocaleString('en-gb', { month : 'long'});

let ThisYear = DateFormat.getFullYear();
let time =  DateFormat.getHours();
let time1 = time <=10 ? `0${time}` : time
let min = DateFormat.getMinutes();
let  min1 = min <=10 ? `0${min}` : min;

console.log(`${StrDay} ${TodayDate1} ${StrMonth} ${ThisYear} ${time1}:${min1} `);












/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

31 -dec
*/

let  date1 = new Date('2024-12-31');
let date2 = new Date('2024-10-03');
let difference = Math.abs(date1 - date2);
let days = Math.ceil(difference / (1000 * 60 * 60 * 24));    
console.log(days);
//console.log(difference /  (60 * 60 * 24));  
 

/* EXPLANATION for line 62 and  63  : 

62: the method Math.abs returns the absolute value of  a given number (Used google to crack this method)

63 :first Divide by 1000 to convert milliseconds to seconds,
then  divide by 60 to convert seconds to minutes, 
then divide by 60 again to convert minutes to hours ,
and then finally divide by 24 to convert hours to days */ 




/* ,
Question 4: 
Check if a current  year is a leap year.

*/

let Year = new Date();
let Cur2024 = Year.getFullYear();
let BooleanCheck = (Cur2024%4 === 0 && Cur2024%100 != 0 || Cur2024%400===0);
let LeapYearCheck = (leapyear = BooleanCheck ? `2024 is a leap year` : `Year 2024 is not a leap year`);
console.log(LeapYearCheck);




//--------------------------------------------------------------------------------------------//////////////











