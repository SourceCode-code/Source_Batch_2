// let Amol= 'Amol kantilal Jadhav'
// let sirName= 'Jadhav'
// let Job = 'Best Automation tester'
// console.log(Amol.substring(14,24))
// console.log(Amol.substr(14,10))
// console.log(Amol.replace('uyuyuyuyuy',' '));
// console.log(Amol.trim()
// console.log(Amol.length)
// let AmolJ=(Math.round((Math.random()*Amol.length)))
// console.log(Amol[AmolJ])
// console.log(Amol.repeat(2))
// console.log((Amol.repeat(2)).trim())
// console.log(Amol.concat(),sirName,Job)
// console.log( Amol +" "+ sirName +" "+ Job );
// let FullName=` ${Amol} ${sirName} ${Job}`
// console.log(FullName)
// console.log(Amol.includes("Amol"))
// console.log(Amol.startsWith('A'))
// console.log(Amol.endsWith('L'))
// console.log(Amol.substring(5,13))
// console.log(Amol.substr(5,9))
// let JAJA ='push push push push push "push\"'
// console.log(JAJA.split(" "))

// Even = (Math.ceil(Math.random()*50))
// console.log(2*Even)
// Even1 = (Math.ceil(Math.random()*50))
// console.log((2*Even1)+1)
// let num1= 123456778
// console.log(typeof(toString(num1)))

// let Amol = "asks1234"
// console.log(parseInt(Amol))


// 22. Compare the length of your first name and your family name.
// let firstname = "Amol";
// let lastname = "Jadhav";
// leng1 = (firstname.length) 
// leng2 = (lastname.length)
// console.log (leng2/leng1);

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
// let myAge = 24
// let yourAge = 30
// console.log(yourAge-myAge)

// 24. Using prompt, when birth year and calculate if they are old enough to drive.
// let Age = 22;
// Age > 18
// ? console.log(`they are old enough to drive With age of ${Age}`)
// :console.log(`they are not old enough to drive With age of ${Age}`)
// 13. Check if there is no 'on' in both 'dragon' and 'python'.
// let dragon = 'dragon';
// let python ='python'
// !dragon.includes('on') || !python.includes('on')
// ? console.log('on in both dragon and python')
// : console.log('no on in both dragon and python')

// let longSentence = 'You cannot end a sentence with because because because is a conjunction.'
// let A = longSentence.indexOf('because')
// console.log(A)
// let B= longSentence.lastIndexOf('because');
// console.log(B)
// let final = (B-A)+'because'.length
// console.log(final)
// console.log (longSentence.substr(A,final))

// let Amol = 'good behaviour'
// Amol == 'good behaviour'
// ? console.log('ok')
// : console.log('check second stall')
// let a =10
// let b = ++a + a++
// console.log(b)


// let count = 0;
// X = count--
// Y= count--
// Z = count-- 
// console.log(Z)

// let Num = 87
// Num %= 80
// console.log(Num)

// let a =10
// let b = ++a + a++ + a++
// console.log(b)

// console.log(0)
// let now = new Date();
// console.log(now )
// let specificdate = new Date( '2024,11,02')
// console.log(specificdate)
// console.log(now.getFullYear())
// console.log(now.getHours())
// console.log(now.getMonth()+1)
// let now = new Date()
// console.log(typeof(now))
// let nowHour = now.getHours()
// let nowHour1 = nowHour<=10 ? `0${nowHour}`: nowHour
// let nowMin = now.getMinutes()
// let nowMin1 = String(nowMin).padStart(2,0)
// let nowSec = now.getSeconds()
// let nowSec1 = String(nowSec).padStart(2,0)
// let ampm = nowHour>=12 ? "am":"pm"
// let in12format = nowHour1% 12 
// console.log(`${in12format}:${nowMin1}:${nowSec1} ${ampm} `)

// let day = now.getDay()
// let day1 = day<10 ? `0${day}`:day
// let month = now.getMonth()
// let month1= String(month).padStart(2,0)
// let year = now.getFullYear()

// let Indiatime = now.toString("en",{day:"2-digit",month:"2-digit",year:"numeric",nowHour:"2-digit",nowMin:"2-digit",nowSec:"2-digit"})
// console.log(Indiatime)

// let Date1 = new Date
// let samor = Date1.getDate()
// Date1.setDate(samor+7)
// console.log((Date1.getDate()))

// let  date1 = new Date('2024-12-31');
// let date2 = new Date('2024-10-03');
// let difference = Math.abs(date1 - date2);
// let days = Math.ceil(difference / (1000 * 60 * 60 * 24));    
// console.log(days);

// let date = new Date()
// let year = date.getFullYear()
// date.setFullYear(year-4)
// console.log(date.getFullYear())

// let month = date.getMonth()
// date.setMonth(month)
// let sss = date.getMonth()
// let ss1= date.toLocaleString('en',{month: "long"})
// console.log(ss1)
// /**
//  * Enter a month: January
//  * January has 31 days.
//  */
// let MNB = new Date 
// let MNB1 = MNB.getMonth()
// let MNB2 = MNB.toLocaleString('en-gb',{month:"long"})
// SSE= MNB.toLocaleString('en-gb',{weekday: "Long"})
// console.log(MNB2)


// let ABS = new Date
// let ABS1 = ABS.getDate()
// let ABS2 = ABS.getMonth()+1 //in js getmonth laways start with 0
// let ABS3 = ABS.toLocaleString('en', {month:'short'})
// console.log(ABS3)



// let year = date.getFullYear()
// date.setFullYear(year-4)
// console.log(date.getFullYear())
//  let Month4 = date.getMonth()+1
//  let wWR = date.setMonth(Month4-6)
//  let AMOL = date.toLocaleString('en',{month:"long"})
//  console.log(AMOL)
//  let LLL = new Date
// date.setFullYear()
// console.log(date.getFullYear())
// let curUStime =date.toJSON('en',{timezone : 'Mountain Standard Time (MST)',day:"2-digit",month:'long',year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit" })
// console.log(curUStime)

// 15 write a program to generate a random odd number form 15-150
// let OddNum = (Math.round(Math.random()*(75-15)+15))
// console.log((2*OddNum))

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
// let str = 'Hello\tWorld!'
// console.log(str)
// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
// let longSentence = 'You cannot end a with sentence with because because because is a conjunction.';
// console.log(longSentence.substr(31,23)) //because because because

// let firstindex=longSentence.indexOf("because")
// console.log(firstindex) //staring index

// let lastindex=longSentence.lastIndexOf("because")
// console.log(lastindex) //47

// let stringlength= lastindex-firstindex+"because".length
// console.log(stringlength)

// let finalout=longSentence.substr(firstindex,stringlength)
// console.log(finalout)

// console.log(str6.substr(11,31));

// Example: For the string "The quick brown fox" and the substring "quick", the function should return true.
// string ="The quick brown fox"
// console.log(string.includes("quick"))

// Example: For "2024-10-01" and "2024-10-10", the function should return 9.
// let new1 = new Date("2024-10-01")
// let new2 = new Date("2024-10-10",)
// let diff = (new2-new1)
// console.log((diff)/(1000*60*60*24))

// Example: If the input date is "2024-10-01" and you add 10 days, the result should be "2024-10-11".
// let date = new Date()
// let date1 = date.getMonth() 
// date.setMonth(date1 -7)
// console.log(date.getMonth())


// let year =2021
// if( year % 4==0){
//     if(year % 100 ==0){
//         if(year%400 ==0){
//             console.log(`${year} is a not leap year`)
//         }
//         else{
//             console.log( `${year}its not leap year`)
//         }
//     }
//     else{
//         console.log(`${year} its leap year`)
//     }
// }
// else{
//     console.log(`${year} its not leap year`)
// }

// Write a function that takes a date object and formats it in "MM/DD/YYYY" format.
// Example: For the date "2024-10-01", the output should be "10/01/2024".
// let new1 = new Date
// let nday = new1.getDate()
// new1.setDate(nday-3)
// let mani1 = (new1.getDate())
// let Mani2 = String(mani1).padStart(2,0) // first step create date object+now create (i.e todays daye)get date+ Date.setdate(createddate +- 4) +console.log(Date.getdate())
// let nYear = new1.getFullYear()
// let nmonth = new1.getMonth()+1

// console.log(`${nmonth}/${Mani2}/${nYear}`)
// let str12 = "qwertyuiopq";
// console.log(str12.indexOf("y"));
// console.log(str12[5])

// let amol = "Amol"
// console.log(String(amol).padStart(7,0))
// let Amol1 = new Date()
// let Month = Amol1.getMonth()+1
// console.log(Amol1.toLocaleString(`en`, { month: 'long'}))
// AMOL = date.toLocaleString('en',{month:"long"})

// let Pappa = 10
// console.log(String(Pappa).padStart(20,0))
// console.log(Pappa<=15?`0${Pappa}`: Pappa)

// let Long = '   maiohoifdifbovhdosvlvovfohkvboxncohcbounskvohzofcbixncllnxoiuag  '
// console.log(Long.trimStart())
// console.log(Long.length)

// let Amol ="Amol"
// console.log(Amol=="amol"&& Amol ==="Amol" );

// let Slice= "Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript"
// console.log(Slice.indexOf('S'));
// let Num = 88
// if (Num % 2 == 0) {
//     console.log(`${Num} is a even number`)
// }
// else if(Num % 2 != 0){
//     console.log(`${Num} is a odd number `)
// }
// else {
//     console.log(` Enter Valid Data`)
// }
// light = 'yjjhjhj'
// let red = 'Stop'
// let yellow= 'Caution'
// let green= 'Go'

// if(light=='red'){
//     console.log(`please stop`)
// }
// else if(light=='yellow'){
//     console.log(` you guys please check and then go`)
// }
// else if(light=='green'){
// console.log(` you guys please go`)
// }
// else {
//     console.log('please check the condition')
// }

// /*let number = 'a'
// switch (number) {
//     case "a" : console.log(`${number} is first day`)
//     break;
//     case 2 : console.log(`${number} is second day`) 
//     break;
//     case 3 : console.log(`${number} is third day`)
//     break;
//     case 4 : console.log(`${number} is fourth day`)
//     break;
//     case 5 : console.log(`${number} is fifth day`)
//     break;
//     case 6 : console.log(`${number} is sixth day`)
//     break;
//     case 7 : console.log(`${number} is seventh day`)
//     break;
//     case 8 : console.log(`${number} is eight day`)
//     break;
//     case 9 : console.log(`${number} is ninth day`)
//     break;
//     case 10 : console.log(`${number} is tenth day`)
//         break;
//         case 11 : console.log(`${number} is eleventh day`)
//         break;
//     default: console.log("enter valid number")

// }*/

// Write a function that takes a temperature in Celsius and returns whether it’s cold, mild, or hot:

// Cold: Below 15°C
// Mild: 15°C to 25°C
// Hot: Above 25°C


// let Celsius= 30
// let cold = (Celsius<15)
// let mild = (Celsius>=15 && Celsius<=25)
// let hot = (Celsius>=25)
// if(cold == true){
//     console.log(`${Celsius}c its too cold`)
// }
// else if(mild == true){
//     console.log(`${Celsius}c its too mild`)
// }
// else{
//     console.log(`${Celsius} c its too hot`)
// }

// let Mark = 50
// let MArks = (Mark>=50 && Mark<=100)
// if (MArks == true){
//     console.log('you are pass')
// }
// else{
//     console.log('You are fail')
// }

// let amol = "Amol"
// let sirname ='jadhav'
// let fatherv = 'Kantilal'
// console.log(amol.includes('.'))
// console.log(amol.replace('Amol.','AMOL'))
// console.log(amol.concat(sirname,fatherv))
// let str10 = "I am learning JavaScript";
// let newStr1 = str10.replace("a", "z");
// console.log("After replacing 'a' with 'z':", newStr1);

//Simple Calculator: Create a simple calculator that takes two numbers and an operator (+, -, *, /) as input and returns the result. Use a switch statement to perform the calculation based on the operator.
// let operator = '%'
// let num = 34
// let num1 = 65
// switch(operator){
//     case'+':console.log(num+num1)
//     break
//     case'-':console.log(num-num1)
//     break
//     case'*': console.log(num*num1)
//     break
//     case"/":console.log(num/num1)
//     break
//     default:console.log(`put Valid operator`)
// }

//Fruit Price List: Write a program that takes the name of a fruit as input (e.g., "Apple", "Banana", "Orange") and returns its price using a switch statement. Define prices for at least five different fruits.
// let fruitname1 = 'watermelon'
// let fruitname = fruitname1.toLowerCase()
// if (fruitname == 'apple') {
//     console.log(`${fruitname} is 120rs/kg`)
// }
// else if (fruitname == 'orange') {
//     console.log(`${fruitname} is 8ors/kg`)
// }
// else if (fruitname == 'banana') {
//     console.log(`${fruitname} is 40rs/12 piece`)
// }
// else if (fruitname == 'mango') {
//     console.log(`${fruitname} is 100rs/kg`)
// }
// else {
//     console.log(`fruits ch tak re ganduuuuu`)
// }

//Grade Evaluation: Write a program that takes a letter grade (A, B, C, D, F) as input and returns a message about the performance (e.g., "Excellent", "Good", "Average", "Poor", "Fail"). Use a switch statement for this.

// let Grade = 'E'
// switch(Grade){
// case'A': console.log(`you get grade ${Grade} Excellent`)
// break
// case'B': console.log(`you get grade ${Grade} good`)
// break
// case'C': console.log(`you get grade ${Grade} Average`)
// break
// case'D': console.log(`you get grade ${Grade} poor`)
// break
// default: console.log(`you are Fail`)
// }

// let amol = "Amoljadhav"
// console.log(String(amol).padStart(11,0))

// console.log(amol.includes('Ja'))

// let diceroll= (Math.ceil(Math.random()*2))
// console.log((2*diceroll)+1)
// let y = 10
// console.log(++y)
// console.log(y++)
// let date = new Date
// let date1= date.getDate()
// console.log(date1)
// console.log(date.toLocaleString('en',{weekday:"long"}))
// let date2 = date.getDate()
// date.setDate(date+19)
// console.log("check",date.getDate())
// console.log(date.toLocaleString("en", {weekday:"long"}))
// let date3 = date.getMonth()
// date.setMonth(date3+6)
// console.log(date.getMonth())
// console.log(date.toLocaleString('en',{month:'long'}))
// let date5=date.getFullYear()
// date.setFullYear(2028)
// console.log(date.getFullYear())
// console.log(date.toLocaleString('en',{year:"2-digit"}))
// US timezone
//let curUSTime = (date.toLocaleString('en',{year:"numeric",month:'long',weekday:"long",hour:"2-digit",second:"2-digit"}))
// console.log(curUSTime)
// let Amol=88
// console.log((Amol>=20?`${Amol} ok`: "not okk please check the value"))
// let Num = 88
// if (Num % 2 == 0) {
//     console.log(`${Num} is a even number`)
// }
// else {
//     console.log(`${Num} is a odd number `)}


let str = "hello";
let reversedStr = str.split('').reverse().join('');

console.log(reversedStr);
let str1 ="Amol Jadhav"
console.log(str1.split('').reverse().join(""))