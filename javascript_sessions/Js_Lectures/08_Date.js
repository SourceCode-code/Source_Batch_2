// date---> gets your the date and time 

let date = new Date()

//getFullYear-- gets you the full year in 4 digits (yyyy)
//getMonth()--- gets you the month form (0-11)  // 1-12
//getDate ---- gets you the date ---(1-31)
//getHours --- gets hours --(0--23)
//getminutes -- gets you the min --0-59
//getsecond ---gets you the sec --0-59
//getmilli -- gets you the sec --0-59
// gettime ()---> seconds --------1jan 1970
// getday ---> 0-6 ()0--6


// 02-oct-2024 9.12 (2/Oct/2024)

let year= date.getFullYear()
console.log(year)
let month=date.getMonth()
 let strmonth=date.toLocaleString('en-gb', { month: 'long' })
console.log(strmonth) //October
let strmonth1=date.toLocaleString('en-gb', { month: 'short' })
console.log(strmonth1) //Oct

todaydate=date.getDate()
console.log(todaydate)
let gethours= date.getHours()
let gemin= date.getMinutes()



console.log(`${todaydate}/${strmonth1}/${year}  ${gethours}.${gemin}`) //2/Oct/2024  9.22

