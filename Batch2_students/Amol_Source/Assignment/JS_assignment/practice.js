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
// let JAJA ='push push push "\push" "\push"'
// console.log(JAJA)

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
// // console.log(typeof(now))
// let nowHour = now.getHours()
// let nowHour1 = nowHour<=10 ? `0${nowHour}`: nowHour
// // let nowMin = now.getMinutes()
// // let nowMin1 = String(nowMin).padStart(2,0)
// // let nowSec = now.getSeconds()
// // let nowSec1 = String(nowSec).padStart(2,0)
// let ampm = nowHour>=12 ? "am":"pm"
// let in12format = nowHour1% 12 
// console.log(`${in12format}:${nowHour} ${ampm} `)

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
//  let MNB = new Date 
// let MNB1 = MNB.getDate()
// let MNB2 = MNB.toLocaleString('en-gb',{month:"long"})
// SSE= MNB.toLocaleString('en-gb',{weekday:"long"})
// console.log(SSE)


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
// let date = new Date
// let curUStime =date.toLocaleString('en',{timezone : 'Mountain Standard Time (MST)',weekday:"long",month:'long',year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit" })
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
//let longSentence = 'You cannot end a with sentence with because because because is a conjunction.';
// console.log(longSentence.substr(31,23)) //because because because

// let firstindex=longSentence.indexOf("because")
// console.log(firstindex) //staring index

// let lastindex=longSentence.lastIndexOf("because")
// console.log(lastindex) //47

//  let stringlength= lastindex-firstindex+"because".length
//  console.log(stringlength)

// let finalout=longSentence.substr(firstindex,stringlength)
// console.log(longSentence.substr(firstindex,stringlength))

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

// let Long = 'maiohoifdifbovhdosvlvovfohkvboxncohcbounskvohzofcbixncllnxoiuag'
// console.log(Long.trimStart())
// console.log(Long.length)

// let Amol ="Amol"
// console.log((Amol=="amol"&& Amol ==="Amol"));

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

// let number = 1
// switch (number) {
//     case 1 : console.log(`${number} is first day`)
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

// }

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


// let str = "hello";
// let reversedStr = str.split('').reverse().join('');

// console.log(reversedStr);
// let str1 =1233444
// console.log(str1.toString().split('').reverse().join(""))

// reverse name
// let fullName = "Amol Kantital Jadhav"
// let lname = fullName.length
// let fullName1 = ""
// for(i=lname;i>=0;i--){
//     fullName1 += fullName.charAt(i)
// }
// console.log(fullName1)

// let Fullname = " my name is amol jadhav"
// let fullname = Fullname.length
// let Name=""
// vowels = "aeiou"
// for(i=0;i<fullname;i++){
//     if(vowels.includes(Fullname[i]))// here we get true or flase in boolean format
//         Name+=Fullname[i]// here we store it in empy strin        
// }
// // console.log(Name,Name.length) 

// let amolJ="AMOL JADHAV"
// chat = ""
// for(i=amolJ.length-1;i>=0;i--){
//     chat += amolJ[i]
// }
// console.log(chat)
// str = " hello i am learning javascript and currently i am seeing the topic loops"
// let str1 = str.split(' ')
// let longestWord = " "
// for(i=0;i<=str1.length-1;i++){
//     if(str1[i].length>longestWord.length)
//         longestWord =str1[i]
   
//     }
//      console.log(longestWord)

// for(i=0;i<=10;i++){

//     if(i==3)
//  break
//     console.log(i)// for break the loop we console inside the braket, if we console outside the braket it will shw only one outout
// }
// for(i=1;i<=10;i++){
   
//      if(i==5)
//         break
//      console.log(i)
// }

  // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//   let num1 = 0
// for(i=0;i<=100;i+=2){
//     num1+=i
// }
// console.log(num1)
// let num2 = 0
// for(i=1;i<=100;i+=2){
//     num2+=i
// }
// console.log(num2)
//let date = new Date
// let date1  = (date.getMonth()+1)
// let month1 = String(date1).padStart(3,0)
// console.log(month1)
// let date2 = date.getFullYear()
// let date3 = date.getFullYear() +5
// let diffMonth = date3-date2
// console.log(diffMonth)

// // Check if a current  year is a leap year.*/
// let new1 = new Date
// let cur2024 = 2025
// let booleancheck= (cur2024%4===0 && cur2024%100!==0||cur2024%400===0)
// let leapcheack = (leapyear = booleancheck ?` 2024 is leap year`:`year ${cur2024} is not leap year`)
// console.log('Ans of qestion no. 5',leapcheack)

// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
//12) Develop a small script which generates any number of characters random id.
// let num =10
// let charRandID =''
// let str = "ADSGHTY@#$12345"
// for(b=1;b<=num;b++){
//   Id = Math.round(Math.random()*str.length)
//   charRandID += str.charAt(Id)
// }
// console.log("Ans of Question No.12:",charRandID)

// let amol ="bxckbnncnconxofnnedfohaodnn"
// let AMOL = ""
// for(b=1;b<=5;b++)// we created length of our random id
// {
// let R = amol.length //get the length for random nubers 
// let T = Math.round(Math.random()*R)// here we create any random number 
// AMOL+=amol.charAt(T)// here we fill up a empty string w.r.t length

// }
// console.log((AMOL))
//console.log((AMOL))// print the last condition of last length in one line( in we console inside the loop it will be in triangle format)
// *********Method 2******
//  let randomid = Math.random().toString(36).substr(2,10)
// console.log(randomid)// ) print the longest word form the given string
// str = " hello i am learning javascript and currently i am seeing the topic loops"
// let str1 = str.split(' ')
// let longestWord= ''
// for(let i = 0;i<str1.length;i++){
//   if(str1[i].length > longestWord.length){
//       longestWord = str1[i]
//   }
// }
// // console.log(longestWord)
// let Myname= "Amol kantilal jadhav"
// let Myname1 = Myname.length
// let vovo = ""
// let vovels ="aeiou"
// for(i=0;i<Myname1;i++){
//   if(vovels.includes(Myname[i])){
//     vovo+= Myname.charAt(i)
//   }
  
// }
// console.log(vovo,vovo.length)


/****************************************** */
/*********** Functions********************* */
// function fullname(){
//   console.log("Amol kantilal jadhav")
// }
// fullname()


// function check(a,b){
// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// }
// check()

// function Fullname(name,mifname,sirname){
//   return `${name} ${mifname} ${sirname}`
// }
// let amol = Fullname("amol","kantilal","jadhav")
// console.log(amol)

// function Fullname(name,mifname,sirname){
//   return `${name} ${mifname} ${sirname}`
// }
// Fullname("amol","kantilal","jadhav")
// console.log(Fullname("amol","kantilal","jadhav").toUpperCase())


// let aaa= function (firstName,middlename,lastName){
//   return  `${firstName} ${middlename} ${lastName}`
// }

// console.log(aaa("","","amol"))


// let ard3 = ["Amol", 24, "kantilal", "jadhav", 9767004310, true]
// ard3.splice(1,1)
// console.log(ard3)//[ 'Amol', 'kantilal', 'jadhav', 9767004310, true ]
// ard3.splice(4,5)
// console.log(ard3)//[ 'Amol', 24, 'kantilal', 'jadhav' ]
// ard3.splice(1,4)
// console.log(ard3) //[ 'Amol', true ]
// ard3.splice(0,2)
// console.log(ard3)//[ 'kantilal', 'jadhav', 9767004310, true ]



