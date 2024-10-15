// Assignment: JavaScript Date and Time Exercises

/* 
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
Also, */

//display the current time in various formats.
//let date = new Date

// let date1 = date.getDate()
// let month = date.getMonth()+1
// let month1 = month<10? `0${month}`:`${month}`
// let month2 = date.toLocaleString('en',{month:"short"})
// let month3 = date.toLocaleString('en',{month:"long"})
// let year = date.getFullYear()
// let hour = date.getHours()
// let hour1 = hour<12 ?`0${hour}`: `${hour}`
// let min = date.getMinutes()
// let min1 = min<10 ? `0${min}`:`${min}`
// // dd:mm:yyyy HH:mm (24 hours)
// console.log(`${date1}:${month1}:${year}  ${hour}:${min1}`)
// // dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
// console.log(`${date1}:${month2}:${year}  ${hour1}:${min1}`)
// // dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
// console.log(`${date1}:${month3}:${year}  ${hour1}:${min1}`)
// // yyyy:mm:DD mm:hh 
// console.log(`${year}:${month1}:${date1}  ${min1}:${hour1}`)

// let age = 25

//  let secondslived = age*(365*24*60*60) //assume this is not a leap year 
// console.log(secondslived) //788400000

// let assumption = 100
// let secondslived2 = assumption*(365*24*60*60) //assume this is not a leap year 
// console.log(secondslived2)  //  3153600000


// Question 2: 
// Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
// (e.g., "Monday, 02 October 2024 15:30").
// let date = new Date
// let longday = date.toLocaleString('en',{weekday:"long"})
// let Tdate = date.getDate()
// let Tdate1 = Tdate<10? (`'0'${Tdate}`): (`${Tdate}`)
// let month = date.toLocaleString('en',{month:"long"})
// let year = date.getFullYear()
// let Hour = date.getHours()
// let Hour1 = Hour<=10 ? (`0${Hour}`) : (`${Hour}`)
// let min = date.getMinutes()
// let Min1 = (min<=10) ? `0${min}` : `${min}`
// let ampm = Hour>=12 ? ('pm'):('am')
// console.log(`"${longday}" ${Tdate} ${month} ${year} ${Hour1}:${Min1} ${ampm}`)

// (e.g., "Monday, 02 October 2024 3:30 pm").



// Question 3: 
// Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
// let date = new Date("2024-10-14")
// let date1= new Date("2024-12-31")
// let dateDiff = date1-date
// console.log(dateDiff/(1000*60*60*24))

 
// Question 4: 
//Check if a current  year is a leap year.
// let year = 2020
// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 ==0){
//         console.log(`${year} its not a leap Year`)
//         }
//         else{
//             (console.log(`${year} its not a leap Year`))
//         }
//     }
//     else {
//         console.log(`${year} its a leap Year`)
//     }
// }
// else {
//     console.log(`${year} its not a leap Year`)
// }




