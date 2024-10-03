// date---> gets your the date and time 

let date = new Date()

//getFullYear-- gets you the full year in 4 digits (yyyy)
//getMonth()--- gets you the month form (0-11)  // 1-12
//getDate ---- gets you the date ---(1-31)
//getHours --- gets hours --(0--23) // 24
//getminutes -- gets you the min --0-59
//getsecond ---gets you the sec --0-59
//getmilli -- gets you the sec --0-59
// gettime ()---> seconds --------1jan 1970
// getday ---> 0-6 ()0--6


// 02-oct-2024 9.12 (2/Oct/2024)

let year= date.getFullYear() //2024
console.log(year)
let month=date.getMonth() // oct
 let strmonth=date.toLocaleString('en-gb', { month: 'long' })
console.log(strmonth) //October
let strmonth1=date.toLocaleString('en-gb', { month: 'short' })
console.log(strmonth1) //Oct

todaydate=date.getDate()
console.log(todaydate)
let gethours= date.getHours() //
let gemin= date.getMinutes() //



console.log(`${todaydate}/${strmonth1}/${year}  ${gethours}.${gemin}`) //2/Oct/2024  9.22

//---------------------------------------------------------------------------------------------------//

/**
 * human readable formated date 
 * 
 * conversion of 24 hours into 12 hours
 * time conversion in diferent timezone
 * set date ------ to manipluate the date 
 */

//human readable formated date  (dd/mm/yyyy) 

let day = date.getDate()//
let month1 = date.getMonth()
let year1 = date.getFullYear()

console.log(`${day}/${month1}/${year1}`) //3/9/2024


//03/09/2024

// method 1 --(logic and teranary opertor)

let dayformat = day <10 ? `0${day}`:day
let monthformat = month <10 ?`0${month}`:month

console.log(`${dayformat}/${monthformat}/${year}`)  //03/09/2024

// method 2 --(using string methods -- padstart()& padEnd())
//padstart(final length of string ,which elemnt to be added)---
//"1" --- 


let str = "1"

console.log(str.padStart(2,0)) //01

console.log(str.padStart(5,"------------"))

console.log(str.padEnd(5,"---------")) // 1----

let paddayformat = String(day).padStart(2,0)
let padmonthformat = String(month1).padStart(2,0)

console.log(paddayformat)
console.log(padmonthformat)

console.log(`${paddayformat}/${padmonthformat}/${year}`)  //03/09/2024


//----------------------------------------------------------------------------

// time i 12 hours format 


let curTime= date.getHours() 
let curmin = date.getMinutes()
let cursec = date.getSeconds()

//24 -----------converts  12


console.log(`${curTime}:${curmin}:${cursec}`) //8:27:37 

let ampm = curTime >=12 ? "PM":"AM" //13 --- pm
// 13:09:01 pm
// convert time in 12 hour format 
let curhours = curTime %12 //  12/12 --------0  24/12===========0
//0
//1
//2
curhours = curhours?curhours :12
// 13/12 -----1
//14/12 -------2
// 12/12 --- 0
// 24/12 ---0
// to pad the time 
let paddedtime = String(curhours).padStart(2,0)
let paddedmin = String(curmin).padStart(2,0)
console.log(paddedtime)
console.log(`${paddedtime}:${paddedmin}:${cursec} ${ampm}`) // 08:37:54 AM //08:38:2 AM


// ---------------------------------


//  time conversion in diferent timezone

//us , indian, eupore , aus

let curindiantime= date.toLocaleString("en",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}) 
console.log("Indiantimezone",curindiantime) 
//12/08/2022, 08:51:07 AM

let curustime = date.toLocaleString("en",{timeZone:'America/New_York',day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})

console.log("US-TIME-ZONE",curustime)
//US-TIME-ZONE 12/07/2022, 10:24:13 PM

//------------------------------------------------------------------------------------------------------
//set date -- used to manipulate the date 

// generate a date 5 later form today 
// 
let manidate = new Date()

let futuredate= manidate.getDate() // 3

console.log(futuredate) // 3\

manidate.setDate(futuredate+5) //8

console.log(date.getDate()) // 8 

//-------------------- month -------------------
let futuremon = manidate.getMonth() // 9

console.log(futuremon)+1 //10

manidate.setMonth(futuremon +2) //12
console.log(manidate.getMonth()+1) //12 --------0-11

// 2024 

//2022

console.log(year) //2024

date.setFullYear(year -2)


console.log(date.getFullYear()) // 2022


// Indiantimezone 10/03/2024, 08:57:46 AM
// US-TIME-ZONE 10/02/2024, 11:27:46 PM