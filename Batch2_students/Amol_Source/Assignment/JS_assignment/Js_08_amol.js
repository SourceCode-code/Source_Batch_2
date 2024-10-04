// Assignment: JavaScript Date and Time Exercises

/* 
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 



Question 1.1 :display the current time in various formats.

1.1 dd:mm:yyyy HH:mm (24 hours)
1.2 dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
1.3 dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
1.4 yyyy:mm:DD mm:hh 

*/
let Day = new Date()
let Day1 = Day.getDate()
let day2 = Day1<=10?`0${Day1}`:Day1
let month = Day.getMonth();
let month1 = String(month).padStart(2,0);
    let month2= Day.toLocaleString('en-gb',{month:'short'})
        let month3= Day.toLocaleString('en-gb',{month:'long'})
let year = Day.getFullYear();
let hr =Day.getHours()
let hr1 = hr<=10?`0${hr}`:hr
      let Hr2 = hr%12
let min= Day.getMinutes()
let min1 = min<=9?`0${min}`:min
let ampm= hr<=12?'am':'pm'

console.log('Ans of qestion no. 1.1',`${day2}:${month1}:${year} ${hr1}:${min1} ${ampm}`)
console.log('Ans of qestion no. 1.2',`${day2}:${month2}:${year} ${Hr2}:${min1} ${ampm}`)
console.log('Ans of qestion no. 1.3',`${day2}:${month3}:${year} ${Hr2}:${min1} ${ampm}`)
console.log('Ans of qestion no. 1.4',`${year}:${month1}:${day2} ${min1}:${hr1} ${ampm}`)

 
/*Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").*/
let tday= new Date()
let Ttoday = tday.getDate()
let Ttoday1 = tday.toLocaleString('en-gb', {weekday:'long'});

let tday1 = Ttoday<=10 ?`0${Ttoday}`:Ttoday
let cMonth = tday.getMonth()
let cMonth1=tday.toLocaleString('en-gb',{month: 'long'})
let cYear = tday.getFullYear()
let cTime = tday.getHours()
let cTime1 = cTime<=10 ? `0${cTime}`: cTime
let cMin = tday.getMinutes()
let cMin1 = cMin<=10 ? `0${cMin}`: cMin
console.log('Ans of qestion no. 2',`"${Ttoday1} , ${tday1} ${cMonth1} ${cYear}  ${cTime1}:${cMin1}"`)


/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
31 -dec*/
let datte = new Date("2024-10-03")
let fdatte = new Date("2024-12-31")
let Final = Math.abs(datte-fdatte) //  here we get ans in miliseconds
let Finaloutput = ((Final)/(1000*60*60*24))// this Calculation for converting milisecond to days
console.log('Ans of qestion no. 4',Finaloutput)


// /* 
// Question 4: 
// Check if a current  year is a leap year.*/
let new1 = new Date
let cur2024 = new1.getFullYear()
let booleancheck= (cur2024%4===0 && cur2024%100!==0||cur2024%400===0)
let leapcheack = (leapyear = booleancheck ?` 2024 is leap year`:`year 2024 is not leap year`)
console.log('Ans of qestion no. 5',leapcheack)


// let check =(cur2024% 4)
// console.log(check)
// let currentYear = check
// currentYear == 0
// ? console.log(`${cur2024} is leap not leap year`):console.log(`${cur2024} is a leap year`)
// im tring to push a file on github but the pull request is not visible






