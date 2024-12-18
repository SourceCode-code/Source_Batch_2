
// rest and spread 
// high order functiion
// reg ex^
//  using reduce how we can itterate on prices - assignment no.18

/* mquestionost important */

// const fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];
// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);  
// O// let Amol= 'Amol kantilal Jadhav'
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



// console.log(0)
// let now = new Date();
// console.log(now )
// let specificdate = new Date( '2024,11,02')
// console.log(specificdate)
// console.log(now.getFullYear())
// console.log(now.getHours())
// console.log(now.getMonth()+1)
//let now = new Date()
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

//let Indiatime = now.toString("en",{day:"2-digit",month:"2-digit",year:"numeric",nowHour:"2-digit",nowMin:"2-digit",nowSec:"2-digit"})
//console.log(Indiatime)

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
// let new2 = new Date("2024-10-10")
// let diff = (new2-new1)
// console.log((diff)/(1000*60*60*24))

// Example: If the input date is "2024-10-01" and you add 10 days, the result should be "2024-10-11".
// let date = new Date()
// let date1 = date.getMonth() 
// date.setMonth(date1 -7)
// console.log(date.getMonth())

// let date = new Date()
// let curdate =(date.toLocaleString('en',{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})) 
// console.log(curdate)

// let year =1700
// if( year % 4==0){
//     if(year % 100 ==0){
//         if(year%400 ==0){
//             console.log(`${year} is a not leap year`)
//         }
//         else{
//             console.log( `${year} its leap year`)
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

//  let Pappa = 10
// console.log(String(Pappa).padStart(4,0))
// console.log(Pappa<10?`0${Pappa}`: Pappa)

// let Long = 'maiohoifdifbovhdosvlvovfohkvboxncohcbounskvohzofcbixncllnxoiuag        '
// console.log(Long.trim())
// console.log(Long.trim().length)

// let Amol ="Amol"
// console.log((Amol=="amol"&& Amol ==="Amol"));

// let Slice= "Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript"
// console.log(Slice.indexOf('S'));
// let Num = 83
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

// let number = "amol"
// switch (number) {
//     case 'Amol' : console.log(`${number} is first day`)
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
//     case 'amol' : console.log(`${number} is tenth day`)
//      break;
//     case 11 : console.log(`${number} is eleventh day`)
//     break;
//     default: console.log("enter valid number")
//  }

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

// if (Mark >50){
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
// let operator = '/'
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
//let fullName = "Amol Kantital Jadhav"
// let k = fullName.split("").reverse().join("")
// console.log(k)
//method 2
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
//let str1 = str.split(' ')
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

// let K = ['Fullname','Amol', 24, 'kantilal', 'jadhav', 9767004310, true ]

// let Fullname = "amol kantilal jadhav"
// longestword = ""
// Name = Fullname.split(" ")
// for (i=0;i<Name.length;i++){
// if(Name[i].length>longestword.length){
// longestword=Name[i]
//   }
// }
// console.log(longestword)
// str = " hello i am learning javascript and currently i am seeing the topic loops"
// let str1 = str.split(' ')
// let longestWord= ''
// for(let i = 0;i<str1.length;i++){
//   if(str1[i].length > longestWord.length){
//       longestWord = str1[i]
//   }
// }
// // console.log(longestWord)

// let date = new Date
// let curDate = date.toLocaleString("en-gb",{timeZoneName:"short"})//  from time zon u can get full date with time
// console.log(curDate)

// str = "Amol KanTilal Jadhav"
// let uppercase = str.match(/[A-Z]/g)||[]
// let lowwercase = str.match(/[a-z]/g)||[]
// console.log(uppercase.join())
// console.log(lowwercase.join())

//5 Declare a function name swapValues. This function swaps value of x to y.
// function swapvalue(x,y){
//   let swap = x
//   x=y
//   y=swap
//   return (`x=>${x}   y=>${y}`)

// }
// console.log(swapvalue(3,4))

// function change(array){
//   for (i=0;i<=array.length;i++){
//     j=0;
//   }

// }
// change([1,2,3,4,5,6,,8,9])

// function eveenodd(num){
// evencount = 0
// oddcount = 0
//   for(i=0;i<=num;i++){
//     if(i%2==0){
//       evencount++
//     }
//     else{
//       oddcount++
//     }
//   }
//   console.log(evencount,oddcount)
// }
// eveenodd(100)

// let str = " im am become AUTOMATION TESTENGINEER in January"
// let uppercase = (str.match(/[A-Z]/g)||[]).join('')
// let lowercase = (str.match(/[a-z]/g)||[]).join('')
// console.log(uppercase,uppercase.length)
// console.log(lowercase,lowercase.length)

// function Random(num){
// let Tandom = []
// for(i=0;i<=num;i++){
// let a = Math.round(Math.random()*16777215).toString(16).padStart(7,"0")
// Tandom.push(a)
// }
// return Tandom
// }
// console.log(Random(10))

// function Shuffilearray(array){
//   for(i=array.length-1;i>=0;i--){
//     j = Math.round(Math.random()*(i+1));
//     array[i],array[j]=array[j],array[i]
//   }
//   return array
// }
// console.log(Shuffilearray([1,2,3,4,5,6,7,8,9]))

// function Factorial(num){
//   factor = 1
// for(i=1;i<=num;i++){
//   factor*=i
// }
// return factor
// }
// console.log(Factorial([3]))

// function palindrome(name){
// let k  = name.split("").reverse().join('')
// console.log(k)
// }palindrome("AMMA")

// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//           console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//           console.log("Fizz");
//       } else if (i % 5 === 0) {
//           console.log("Buzz");
//       } else {
//           console.log(i);
//       }
//   }
// }

// fizzBuzz();

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

// 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// function modifyArray(array){
//  let M =  array.splice(1,4)
//     return M
// }
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
// let a =  [97854726, 1, 5, 50, 60, 700, 800, 900, 5024, 65445, 28522, 138561, 7891];
// a.sort((a,b)=>{return a-b})
// console.log(a)
// star = 1
// for (i=5;i>=0;i--){
//   console.log(" ".repeat(i)+"#".repeat(star))
//   star +=2
// }
//var a =

//  let name = "Amol kantilal amol Jadhav 123amol "
//  console.log(name.search(/lal/gi))

//  let str17 = "I AM LEARNING JS , LEARNING CYPRESS, LEARNING PLAYWRIGHT";
// console.log(str17.match(/learning/gi))//.length

//assignment no. 13:- 1,6,8,10,16,19 and assignment no.15 = level 3 all question

array = ['vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol']
// check = array.map((el,index,arr)=>{
//   return el.toUpperCase()
// })
// console.log(check)

let s = "hello@@ my hie how Amolskiki na@@me hello is A@@kash1234567"
//console.log(s.replace(/[^a-zA-Z0-9\s]/gi,""))
//console.log(/amol\b/.test(s))
//console.log(s.match(/[aeiou]/gi))

let x = [1, 2, 3, 4, 5];
let y = [4, 5, 6, 7, 8];
let NewX = new Set(x)
let Newy = new Set(y)
let checck = x.filter((el) => !Newy.has(el))
//console.log(checck)

// let countryCapitalArray = [
//   ["India", "Delhi"],
//   ["USA", "Washington DC"],
//   ["England", "London"]
// ];
// let countryCapitalArray1 = new Map(countryCapitalArray)
// countryCapitalArray1.set("wagholi","haveli")

// console.log(countryCapitalArray1.get("India"))\

// let city  = ['sangamner','A.nagar','pune','nashik','sangamner','tuljapur','sangamner','A.nagar','pune','sangamner',]
// let filtciy = new Set (city)
// let multicheck = []
// for(let cit of filtciy){
//   let kk = city.filter((el)=>el===cit)
//   multicheck.push({cit,count:kk.length})
// }
// console.log(multicheck)





// let str = "he$llo I a%m le*arning JavaScr%ipt and curr$ently I am s&eeing the t#opicloops";
// console.log(str.replace(/[^\w+\s\b]/gi,''))

//let str2 = "i am learning python, a123455555nd i am also la22222erning the basiceeee of python, Python is a easy langauge \
//i would reccommmend everyone to learn Python"
// function checkonetwo(str2){
// let clean = (str2.replace(/[^a-z]/gi,""))//.toLowerCase())
// let word={}
// for(let el of clean){
//   (word[el]=(word[el]||0)+1)
// }
// return Object.entries(word).map(([el,count])=>({el,count})).sort((a,b)=>b.count-a.count).splice(0,10)
// } console.log(checkonetwo("hello my name is a23233mol kantilal jadhav hello 0902323232986"))

// function mostFrequentWords(sentence,limit){
//   let splitedsentence = sentence.match(/\b\w+\b/g)
// mostrepeated = {}
// splitedsentence.forEach((word)=>{
// (mostrepeated[word]=(mostrepeated[word]||0)+1)
// })
// return Object.entries(mostrepeated).map(([word,count])=>({word,count})).sort((a,b)=>b.count-a.count).slice(0,limit)

// }
// console.log(mostFrequentWords(cleanSentence,20))

// function mostoccurance(str4,limit){
//   let cleanSentence = str4.replace(/\d+/gim,"")
//   let cleanSentence2 = cleanSentence.match(/\b\w+\b/gim)
//   let mostrepeated={}
//   cleanSentence2.forEach((word)=>{
// (mostrepeated[word])=(mostrepeated[word]||0)+1
//   })
//   return  Object.entries(mostrepeated).map(([word,count])=>({word,count})).sort((a,b)=>b.count-a.count).slice(0,limit)
// }
// console.log(mostoccurance("i am learning python, a123455555nd i am also la22222erning the basiceeee of python, Python is a easy langauge \
// i would reccommmend everyone to learn Python\
// amol kantilal jadhav",10))

//question for session
// function check(arr1,arr2){
// return [...arr1,...arr2]
// }
// console.log(check([1, 3, 5],[2, 4, 6]))
// let company = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// let www = []
// count = 0
// for (let key of company){
//   let oCount = (key.match(/o/g) ||0).length;
//     if(oCount>1){
//       www.push(key)
//     }
//   }
//   console.log(www)

// function mostrepeatedword(str,limit){
//   remove= str.replace(/"^ "/gi,"")
//   console.log(remove)
// let clensentence = remove.split(" ")
// mostword = {}
// clensentence.forEach((el)=>{
// mostword[el]=(mostword[el]||0)+1
// })
// return Object.entries(mostword).map(([word,count])=>({word,count})).sort((a,b)=>(a.count-b.count))//.slice(0,limit)

// }
// console.log(mostrepeatedword("my name amol amol is amol ol kantilal jadhav age is 25 now im get a class for automation test engineer may name is amol kantilal jadhav",3))

// const languages = ["English", "Spanish", "French", "English", "Spanish", "German", "French"]
// function mostrepeatedchar(langauge){ 
// let check1 = {}
// langauge.forEach((el)=>{
//   let newcheck = el//[0]
//   check1[newcheck]=(check1[newcheck]||0)+1
// })
// return Object.entries(check1).map(([word,count])=>({word,count})).sort()//(a,b)=>(a.count-b.count))
// }
// console.log(mostrepeatedchar(["English", "Spanish", "French", "English", "Spanish", "German", "French"]))

// let unique = new Set()
// unique.add(1)
// unique.add('1')
// unique.add("Amol")
// unique.delete('1')
// console.log(unique.has("Amol"))

// console.log(unique)

// let names = [["fullname","amol"],["middlename","kantilal"],["lastnmae","jadhav"]]
// let check =new Map(names)
// check.delete("fullname")//,"no single")
// console.log(check)

// let arr1 = ["amol","kantilal","jadhav","kiran","Diyu","Amol","kantilal","jadhav"]
// let nums = [1,2,4,5,6,8,9,19,12,14,1,2,3,4,4,5]

// let duplicates = nums.filter((el, index, array) => {
//     return nums.indexOf(el) !== index
//   });

//   console.log(duplicates);

// let str = "amol amol amol amol Kantilal Jadhav"
// let repeted = 8
// function mostoccuredword(str){
//   {let check  = str.split("")
//   mostletter = {}
//   check.forEach((el)=>{
//     mostletter[el]=(mostletter[el]||0)+1
//   })
// return Object.entries(mostletter).map(([word,count])=>({word,count})).sort()
//   }
// }
// let sorted  = mostoccuredword("amol amol amol amol Kantilal Jadhav")
// console.log(sorted)

// sorted.forEach((el)=>{
//   if(el.count==repeted){
//     console.log(el)
//   }
// })
// /********************************************************************************************************************** */
// // Good Method 
// function MostRepitingChara(str10, num) {
//   {
//       let check = str10.split("")
//       repetchara = {}
//       check.forEach((ele) => {
//           repetchara[ele] = (repetchara[ele] || 0) + 1
//       })
//      console.log(repetchara)
//   }
//   for (let x in repetchara) {
//       if (repetchara[x] === num) {
//           console.log()
//       }
//   }
// }
// console.log(MostRepitingChara("Siddhant Gadakh", 2))
// /********************************************************************************************************************** */
// function numgame(num,power){
//   return num**power
// }
// console.log (numgame(5,2))
// console.log (numgame(5,3))
// console.log (numgame(5,4))

//  let str4 = " App@@@@le and24 Ban45aana2322 are Frui@t67s and A Old chil#ce says A@pple a day keeps doctor away"
// console.log(str4.match(/[A-Z]/g))
// let str2 = "i am learning python, and i am also laerning the basic Of python, Python is a easy langauge \
// i would reccommmend everyone to learn Python"
// console.log(str2.match(/^A-Z/g))
// sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $i1223s nothi3333ng; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// //console.log(sentence.replace(/[^a-zA-z\s]/gi,""))///  if we mention inside the bracket it will clear as per condition and it will gives up normal string
// console.log(sentence.replace(/[^a-zA-Z\s]/gi,""))// it will gives always array // if we apply without bracket it will gives join numbers// also if we use ^ inside bracket it will gives us expect from condition we aply
/********************************************************************************************** */
//all game is on[^ ] expext from, and []with them that ..do operation
// Match is alway gives us aray
// replace alwaygives us string (keep in mind \s to use)
//when we use regex always keep in mind that caraet^ is for negation means opposite the condition and \d+\w+\s\b\b tahts are the shortcut to use in strin nf for search the patter

/********************************************************************************************************************** */
// Destucturing:-

//  let [a=5,b=6]=[3]
//  console.log(a,b)

//  let okJ = [1,2,3,4,5,6,7,8,9,10]
//  let okh = [...okJ,5,4]
//  console.log(okh)
//  let kkko = {a:1,B:3,c:4}
//  let jjj = {...kkko,d:4}
// console.log(jjj)

// let num = [1,2,3,4]
// sum=(a,b,c,d)=>a*b*c*d
// console.log(sum(...num))
// function sum(a,b,...aar){
//   console.log(a,b)
//   return aar.reduce((el,index)=> el+index)
// }
// console.log(sum(1,2,3,4,5,6))
// let check = (k) => {
//   let check2 = (l) => {
//     let check3 = (m) => {
//       return m*l*k
//     }
// return check3
//  }
//   return check2
// }
// console.log(check(1)(2)(3))

// function checkmsg(){
//   console.log("checkpurpose")
// }
// setInterval(checkmsg,2000)

// function checkpurpose(){
// console.log("check setTimeout")
// }
// setTimeout(checkpurpose,3000)


// const higherorder = n => {
//   const dosomething = m => {
//       const dowhatever = t => {
//           return 2 * n + 3 * m + t
//       }
//       return dowhatever
//   }
//   return dosomething
// }

// console.log(higherorder(2)(3)(10)) //23
// function printY() {
//     const y = 100;
//     console.log(y); // 100 (local variable inside the function)
//   }printY()

//   function printZ() {
//     const y = 250;
//     console.log(y); // 250 (local variable inside the function)
//   }printZ()

// let a = [1, 2, 3, 4, 5];
// let b = [4, 5, 6, 7, 8];
// AA = new Set(a)
// BB = new Set(b)
// let cross = a.filter((el)=>!BB.has(el))
// let cross1 = b.filter((el)=>!AA.has(el))
// console.log([...cross,...cross1])

// function mostwprd(langArray){
// mostoxxured = {}
// langArray.forEach((el)=>{
// mostoxxured[el]=(mostoxxured[el]||0)+1
// })
// return Object.entries(mostoxxured).map(([word,count])=>({word,count})).sort()
// }
// console.log(mostwprd(["English", "Spanish", "French", "English", "Spanish", "German", "French", "English"]))

/**************************************** 
//problemm for reapeted numbber
// let uniequal = new Set(num)
// count ={}
// num.map((el)=>{
//   count[el]=(count[el]||0)+1
// })
// repeated=[]
// diff =[]
// for (let i of uniequal){
// if(count[i]>1){
//   repeated.push(i)
// }else{
//   diff.push(i)
// }
// }
// console.log(repeated)
// console.log(diff)*/
// mm = [1,2,3,4,5]
// let setOne = new Set(mm);
// //setOne.clear(); // Set(0) {}
// console.log(setOne)

// let num = [1,2,3,4,5,6,7,8,9]
// let num2 = [1,2,3,4,5,6,8,9,10,12,11]
// let NUM = new Set(num)
// let NUM2 = new Set(num2)
// let diff = num.filter((el)=>!NUM2.has(el))
// let diff2 = num2.filter((el)=>!NUM.has(el))
// console.log(new Set(diff))
// console.log(new Set(diff2))

// let viaahn=  {
//     firstName: "Vihaan",
//     lastName: "Mehta",
//     age: 28,
//     experience: 6,
//     skills: ["TypeScript", "CI/CD"],
//     position: "Automation Tester"
//   }

//   let kk = Object.entries(viaahn)
//   console.log(kk)
// let countryCapitalArray = [
//     ["India", "Delhi"],
//     ["USA", "Washington DC"],
//     ["England", "London"]
// ];
// for (let [ country,capital] of countryCapitalArray){
//     console.log(`${country} ${capital}`)
// }
// let str = ["amol","kantilal","jadhav"]
// let check  = ([...str,967004310])
// console.log(check)


/****************************************************** missing numbers********************************* */
// let input = [3,0,1]
// Corrected = []
// for(let i=0;i<=3;i++){
// Corrected.push(i)
// }
// let missingnumber = Corrected.filter((el)=>!input.includes(el))
// console.log(missingnumber)


//  method 2
// function MissingNumber(Array){
//     Array.sort((a,b)=> a-b);
//     for(let i=0;i<=Array.length;i++){
//       if(Array[i]!==i){
//         return i
//       }
//     }

//     }
//     const  Input = [3,0,1];
//     console.log(MissingNumber(Input))

// let myinfo = `{
// "firstname":"AMOL", 
// "MiddleName":" Kantilal",
// "lastName":"Jadhav",
// "coNum":9767004310,
// "Age" : 24
// }` // take care you should not miss any " " ,: ,and ,  for that it should be must clear and distingt..
// let check = JSON.parse(myinfo)//,[firstname,lastName]) we have to do it manualy
// console.log(check)

// let newinfo = {
//     firstname: 'AMOL',
//     MiddleName: ' Kantilal',
//     lastName: 'Jadhav',
//     coNum: 9767004310,
//     Age: 24
//   }
//   let check2= JSON.stringify(newinfo,['firstname','MiddleName'])
//   console.log(check2)

// function Personalinfo(Firstname,middlename,lastname){
//     this.Firstname = Firstname
//     this. middlename = middlename
//     this. lastname = lastname
// }
// let amolinfo = new Personalinfo("amol","Kantilal","jadhav")
// console.log(amolinfo)

// function vikkasinfo(firstname,middlename,lastname){
//     return{
//     firstname:firstname,
//     middlename:middlename,
//     lastname:lastname
//     }
// }
// let vikas = new vikkasinfo("Vikas","Kantilal","Jadhav")
// console.log(vikas)

// best example to understand returning function
// function firstfuction(A) {
//     function secondFunction(B) {
//         function thirdFunction(C) {
//             return A*2+B**2+C**5
//         }
//         return thirdFunction
//     }
//     return secondFunction
// } 
// console.log(firstfuction(2)(3)(4))

// function fisrtcheck(k){
//     return "amol"
// }

// function namecheck(kk){
// return kk+" Jadhav"
// }
// console.log(namecheck(fisrtcheck()))


// function flatarray(arra1,arra2){

//  return [...arra1,...arra2]

// }
// console.log(flatarray([1,2,3,4,5,6],[7,8,9]))


// function Personalinfo(firstname,middlename,lastname){
//     return{
//         firstname,
//         middlename,
//         lastname
//     }
// }
// let amolinfo = new Personalinfo("amol",'Kantilal',"Jadhav")
// let vikasinfo = new Personalinfo("Vikas",'Kantilal',"Jadhav")
// console.log(amolinfo,vikasinfo)

// function Personalinfo(firstname,middlename,lastname){

//         this.firstname=firstname
//         this.middlename=middlename
//         this.lastname=lastname

// }
// let amolinfo = new Personalinfo("amol",'Kantilal',"Jadhav")
// let vikasinfo = new Personalinfo("Vikas",'Kantilal',"Jadhav")
// console.log(amolinfo)

// class Personalinfo {
//     constructor(firstname="givenname", middlename="givenMiddlename",lastname="GivenLastName",age="givenage",country="givencountry"){
//         this.firstname=firstname,
//         this.middlename=middlename,
//         this.lastname=lastname
//         this.age = age
//         this.country=country  
//     }
// } 
// let cross = new Personalinfo()
// console.log(cross)
// let amolinfo = new Personalinfo("Amol","kantilal","Jadhav",24,"India")
// console.log(amolinfo)


//  the concept of object with stringify, parse,  factory function with fucntion constructer in a single example....
// function Personalinfo(firstname, middlename, lastname) {
//     return{
//         firstname,
//         middlename,
//         lastname
//     }
// }
// let person3 = new Personalinfo("Amol", "Kantilal", "Jadhav")
// console.log(person3)
// let check = JSON.stringify(person3)
// console.log(check)
// let check2 = JSON.parse(check)
// console.log(check2)

// function Printumnber(num){
// if(num<=50){
//     console.log(num*2)
//     Printumnber(num+1)
// }
// }
// Printumnber(0)

// let name = "amolj6897@gmail.com"
// let remaingstr =name.substring(4,20)
// let check = (name.substring(0,4))
// reverse = ""
// for(let i = check.length-1; i >=0;i--){
//     reverse+=check[i]
// }
// console.log(`${remaingstr} ${reverse}`)

// // //  Methods of class // Function Stter and getter
// class personalInfo{
//     constructor(firstName="noname", Middlename="NomiddleName", Lastname="NolastName"){
//  this.firstName=firstName,
//  this.Middlename=Middlename,
//  this.Lastname=Lastname
//     }
//     amol(){    // function
//         let amolfirstlast= this.firstName+" "+this.Lastname
//         return amolfirstlast  
//      }

//      get get_middlename(){ //  getter
//         return this.Middlename
//      }

//      set set_firstname(newname){  //  setter
//        return this.firstName = newname
//      }
//      set set_age(Age){  // when we have to add somthing to class
//        return this.age = Age
//      }

// }
// let empty = new personalInfo()
// console.log(empty)
// let amolInfo = new personalInfo("amol","Kantilal","Jadhav")
// console.log(amolInfo)
// console.log(amolInfo.amol())
// console.log(amolInfo.get_middlename)
// amolInfo.set_firstname="AMOL"
// console.log(amolInfo)
// amolInfo.set_age = 25
// console.log(amolInfo)

//    let year  =2021
//    heck  = (year%4==0&&year%100!==0||year%400==0)
// console.log(heck)
// if (heck == true){
//    console.log("this is a leap year")
// }
// else{
//    console.log(" this is not a leap year")
// }

// sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interes12344ting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

// console.log(sentence.replace(/[\w+\s]/gi,""))

// let str = "my name is amol kantila jadhav"
// console.log(str.match(/[^amol]/gi))

//code for Answer 2 ; assignment 21  :  atharvas Method
// class  personAccount{
//     constructor(firstName,lastName  ){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.incomes = []
//         this.expenses = []
//     }

//     addIncome(description,amount){
//          this.incomes.push({description:description,amount:amount})
//     }
//     addExpense(description,amount){
//         this.expenses.push({description:description,amount:amount})
//     }

//     get totalIncome(){
//         return this.incomes.reduce((total , income)=>total + income.amount)
//     }
//     get totalExpense(){
//         return this.expenses.reduce((total,expense)=>total + expense.amount)
//     }

//     get accountBalance(){
//         return this.totalIncome - this.totalExpense
//     }   

//     accountInfo(){
//         return  `
//         Account holder : ${this.firstName} ${this.lastName}
//         Total Income : ${this.totalIncome}
//         Total Expense: ${this.totalExpense}
//         Account Balance: ${this.accountBalance}`
//     }


// }
// const myAccount = new personAccount('Joel ','Corry')
// myAccount.addIncome('salary',50000)
// myAccount.addIncome('Food Stall',6000)

// myAccount.addExpense('Car EMI',4000)
// myAccount.addExpense('Light Bills',4000,'fuel',750)

// console.log(`Total Income: ${myAccount.totalIncome}`);
// console.log(`Total Expense: ${myAccount.totalExpense}`);
// console.log(`Account Balance : ${myAccount.accountBalance}`);
// console.log(myAccount)


//let date = new Date()
// let futureDate = date.getDate()
// date.setDate(futureDate+23)
// console.log(date.getDate())

// let futureMonth = date.getMonth()+1
// date.setMonth(futureMonth+13)
// console.log(date.getMonth())

// let futureYear = date.getFullYear()
// date.setFullYear(futureYear+23)
// console.log(date.getFullYear())
// let humanreadale = date.toLocaleString("en-gb",{day:"2-digit",weekday:"long",month:"2-digit",year:"numeric",hour:"2-digit",hourCycle:"h12",minute:"2-digit",second:"2-digit"})
// console.log(humanreadale)

// let str = "my name is amol kantilal jadhav"
// let str1 = str.split(" ")
// longest  = " "
// for(let i = 0;i<=str1.length-1;i++){
//     if(longest.length<str1[i].length)
//     {
//       longest=str1[i]
//     }
// }
// console.log(longest)



// let str = "my name is amol kantilal jadhav"
// console.log(str.match(/[aeiou]/gi))

// let personalInfo = {fistname:"Amol",
//     Middlename:"Kantilal",
//     Lastname:"Jadhav"
// }
// amolInfo = JSON.stringify(personalInfo)
// console.log(amolInfo)


//let date = new Date()
// let futureDate = date.getDate()
// date.setDate(futureDate+23)
// console.log(date.getDate())

// let futureMonth = date.getMonth()+1
// date.setMonth(futureMonth+13)
// console.log(date.getMonth())

// let futureYear = date.getFullYear()
// date.setFullYear(futureYear+23)
// console.log(date.getFullYear())
// let humanreadale = date.toLocaleString("en-gb",{day:"2-digit",weekday:"long",month:"2-digit",year:"numeric",hour:"2-digit",hourCycle:"h12",minute:"2-digit",second:"2-digit"})
// console.log(humanreadale)

// let date = new Date()
// // let humanreadale = date.toLocaleString("en-gb",{weekday:"long",month:"long",year:"numeric",hour:"2-digit",hourCycle:"h12",minute:"2-digit",second:"2-digit"})
// // console.log(humanreadale)
// let curdate = date.getDate()
// date.setDate(curdate+40)
// console.log(date.getDate())
//(****************************************** Method for occurance of Words **************************)
// let str = "hello my name is Amol Kantilal jadhav"
// let str1 = str.split("")
// mystring = {}
// for(let key of str1){
// mystring[key]=(mystring[key]||0)+1
// }
// let check = Object.entries(mystring).map(([word,count])=>({word,count})).sort((a,b)=>(b.count-a.count))
// console.log(check)


// function personalInfo(user,callback){
//     setTimeout(()=>{
//  console.log(`hello my name is ${user}`)
//  callback()
//     },3000)

// }
// function AfterinFo(){
//     console.log("This is the callback function.");
// }
// personalInfo("Amol",AfterinFo)


//general -->


/**
 * create a program to replicate zomato 
 * 
 * open app
 * select restarut 
 * select food
 * order food 
 * enter addres
 * pay for the order thourgh upi
 * get the foood
 * place review 
 */
// function openApp(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} opens the app`)
//         callback()
//     }, 1000)
// }

// function selectRestaurant(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} should select the Restaurant`)
//         callback()
//     }, 2000)
// }

// function selectFood(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} will select food from the menu`)
//         callback()
//     }, 3000)
// }

// function orderFood(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} ordered food whichever he want`)
//         callback()
//     }, 4000)
// }

// function enterAddress(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} enter the delivery address`)
//         callback()
//     }, 2000);
// }

// function PaymentMethod(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} pay for the order thourgh upi`)
//         callback()
//     }, 1000)
// }

// function ReciveFood(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} get the food`)
//         callback()
//     }, 3000)
// }

// function review(user, callback) {
//     setTimeout(() => {
//         console.log(`${user} place review`)
//         callback()
//     }, 1000)
// }
// openApp("Amol", () => {
//     selectRestaurant("Amol", () => {
//         selectFood("Amol", () => {
//             orderFood("Amol", () => {
//                 enterAddress("Amol", () => {
//                     PaymentMethod("Amol", () => {
//                         ReciveFood("Amol", () => {
//                             review("Amol", () => {
//                                 console.log("the program was successfully excueted")
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
/***************************************************( Promise)****************************************************** */

// const promiseOne = new Promise(function (resolve, reject) {
//     //  Do an async task
//     // DB calls , crypography,network replated
//     setTimeout(function () {
//         console.log(`async task is completed`)
//         resolve() //  to connect resolve paratmeter and .then function 
//     }, 1000)
// })
// promiseOne.then(function () {
//     console.log(`promise consume`)
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("async Task 2")
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log(`async 2 resolve`)
// })

// const Promisethree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "Amol", email: "Amolj6896@gmail.com" })
//     }, 1000)
// })
// Promisethree.then(function (User) {
//     console.log(User)
// })

// const PromiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({ username: "Amol", password: "Amol@123" })
//         }
//         else {
//             reject("Error:Somthing went Wrong")
//         }
//     }, 1000);
// })
// PromiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
// console.log(error) //  this process is nothing but chaining
// }).finally(()=>{
//     console.log(`The promise is either resolve or rejected`)
// })


// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "Javascript", password: "Amol@123" })
//         }
//         else {
//             reject("Error:JS went Wrong")
//         }
//     }, 1000);
// })

// async function consumePromisefive(){
//     try {
//     const response = await promisefive
//     console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromisefive()

// // using try and Catch

// async function getallUser(){
//    try {
//     const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() //  we use await  here its take a time to catch
//     console.log(data)
//    } catch (error) {
//     console.log(`Error:-${error}`)
//    }
// }
// getallUser()

// // now using .then .catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>console.log(error))
/******************************************** end of promise******************************************************* */

// function generatefibonacci(n){
//     let nums = []
// let a =0 
// let b = 1
// for (let i=0;i<=n;i++){
//     nums.push(a)
// let next=a+b;
// a=b;
// b=next;
// }
// return nums
// }
// console.log(generatefibonacci(10))

// best example to understand returning function
// function firstfuction(A){
//     function secondFunction(B){
//         function thirdFunction(C){
//             return A*2+B**2+C**5
//         }
//         return thirdFunction
//     }
//     return secondFunction
// } 
// console.log(firstfuction(2)(3)(4))


// function firstfunction(A){
//     function secondFunction(B){
//         function thirdFunction(C){ 
//             return A+B+C
//         }
//         return thirdFunction
//     }
// return secondFunction
// }
// let finalfunction = firstfunction(2)(3)(4)

// it will continue showing the out with respect to time whichever is mention..
// function myName(){
//     console.log("Amol")
// }
// setInterval(myName,2000) 

// //  Settimeout =  it will throw output with a perticular time (in milisecond)
// function lastname(){
//     console.log("Jadhav")
// }
// setTimeout(lastname,3000)

// //object to JSON

// let Myinfo = {
// firstname : " Amol",
// middlename :"Kantilal",
// lastname : "Jadhav"
// }

// let AmolInfo = JSON.stringify(Myinfo)
// console.log(AmolInfo)


// //JOSN to Obj

// let Myinfo1 = `{
//     "firstname" : " Amol",
//     "middlename" :"Kantilal",
//     "lastname" : "Jadhav"
//     }`

//     let amolINFOO = JSON.parse(Myinfo1)
//     console.log(amolINFOO)



// let user1={
//     firstname:"asabeneh",
//     lastname:"yeta",
//     country:"finland",
//     city:"helsinki",
//     email:"alex@alex.com",
//     skills:["html","css","js"],
//     age:35,
//     islogin:true
// }
// let personalInfo = JSON.stringify(user1,['firstname','lastname','country'])
// console.log(personalInfo)


// const personAccount = require("./Js_14_amol")
// console.log(personAccount)

//  we will continue from 



// let pro = new Promise((resolve,rejected)=>{
//     let condi = true
//     if(condi!==true){
//         resolve("program will executed")
//     }
//     else{
//         rejected("somthing gets wrong")
//     }
// })
// .then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })

// let anotherchecck = new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         let name = "amol"
//         if(name.endsWith("a")){
//             resolved("the given string is starts with a")
//         }
//         else{
//             rejected("the given string is not starts with a")
//         }
//     },1000)
// }).then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })


// let Str = "jadhav"
// let name2 = Str.toLowerCase()

// switch(name2){
// case "amol": console.log(" name match in all directtion")
// break
// case "jadhav": console.log("Name Match with Sirname") 
// break
// case "Kantilal": console.log("NAme match with middlename")
// break
// default:console.log("Please enter  Valid name")
// } 

// let DAY = "sunday"
// let updateday = DAY.toLowerCase()
// switch(updateday){
//     case"monday": console.log(`its ${updateday}`)
//     break
//     case "tuesday":console.log(`its ${updateday}`)
//     break
//     case"wednesday":console.log(`its ${updateday}`)
//     break
//     case "thursday":console.log(`its ${updateday}`)
//     break
//     case " friday":console.log(`its weedend,${updateday}`)
//     break
//     case"saturday":console.log(`its,holiday ${updateday}`)
//     break
//     case "sunday":console.log(`its ${updateday}`)
//     break
//     default:console.log(`enter Valid Day`)

// }



//  Switch Case
// let day = "MonDAY"

// let day1 = day.toLowerCase()

// switch(day1){
//     case "monday": 
//     case "tuesday":
//     case "Wednesday":
//     case"thursday":
//     case"friday":console.log(`${day} its a working day`)
//     break
//     case"saturday":console.log(`${day} its a weekend day`)
//     break
//     case " sunday":console.log(`${day} its a working day`)
//     break
//     default:console.log(`enter valid day`)
// }
/************************************ promises and async and await************************************************* */
// function userregistration(user){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         console.log(`The ${user} has been register now`)
//         resolve(user)
//         }, 3000)
//     })
// }

// // function to send otp 
// function SendOTPToUSER(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('the otp was sucessfuly registor for user')
//             resolve(user)
//         }, 2000)
//     })
// }

// //set perefences 
// function fetchuserperfrences(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`the perfrences for ${user} have been registor `)
//             resolve(user)
//         },4000)
//     })
// }
// function startuseracitivity(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`start the use`)
//             resolve(user)
//         }, 500)
//     })
// }
// userregistration("SID")
//     .then(SendOTPToUSER)
//     .then(fetchuserperfrences)
//     .then(startuseracitivity) // this is function wright if we use () then we get async output and without that we get ans sync
//     .then((message) => {
//         console.log(message)
//     }) //  this msg is linked with

/*************************************************** Async and Await************************************************/
    // function delay(ms) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(` waiting for ${ms} time for stabity`)
    //         }, ms)
    
    //     })
    // }
    
    //   async function getdata() {
    //     console.log("step 1 start")
    //     const wait = await delay(3000)
    //     console.log("step2 :begin",wait)
    //     console.log("step 3 : end ")
    // }

    // getdata()

    
//eg.2

// function firstcheck(time){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log(`check${time}`)
//             resolve()
//         }, time);
//     })
// }
// async function checkfirst(){
// console.log("step1:- first step towards async")
// let timechck = await firstcheck(3000)
// console.log(`step2:- again check`, timechck)
// console.log(`step3:- end of check`)
// }
// checkfirst()










































