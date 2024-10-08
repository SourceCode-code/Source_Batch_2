
// 

// // date and on random Number 5 5 example

// //Basic Random Number Generation
// //1.Write a function that generates a random number between 1 and 50 and logs it to the console.
// console.log((Math.round(Math.random()*50)+1))
// //Random Even Number Modify the function to generate a random even number between 2 and 100.
// let even = (Math.round(Math.random()*(100-2)+2))
// console.log(2*even)
// //Random Odd Number Create a function that generates a random odd number between 1 and 99.
// let odd = (Math.round(Math.random()*(47.5-1)+1))
// console.log((2*odd)+1)
// // Random Float Write a function that generates a random floating-point number between 0 and 1, then multiplies it by 10 to give a result between 0 and 10.
// console.log(Math.random()*9)
// // for get fist and last number 
// let num = 123456
// let num1 = num/10000
// console.log(Math.round(num1)) //  for 1st two number 
// console.log(num%100) // for last 2 digit

// //*****************************************
// date = new Date(2024,0,23)//(0 for January, 1 for February, ..., 11 for December) and im not able to create month as a world
// console.log(date)

// let date = new Date
// let curTime = (date.toLocaleString('en',{year:'numeric',month:'long',weekday:'long',hour:"2-digit",minutes:'2-digit',second:"2-digit"}))
// console.log(curTime)


//now get a month which is 8 month back
let date =new Date
let Month =(date.getMonth()+1)
console.log(Month-8)
console.log(date.toLocaleString('en',{month:"long"}))

//now get a month which is 6 day back
let day6Back = (date.getDate()-6)
console.log(day6Back)

//now get a month which is 6 day front
let day6Front = (date.getDate()+6)
console.log(day6Front)

//now craete date of 29/02/3000
let year1 =date.getFullYear()+976
let month1 = (date.getMonth()+1)-8
let Month1= String(month1).padStart(2,0)
let day1= date.getDate()+22
console.log(`${day1}/${Month1}/${year1}`);




