// // // let Amol= 'Amol kantilal Jadhav'
// // // let sirName= 'Jadhav'
// // // let Job = 'Best Automation tester'
// // // console.log(Amol.substring(14,24))
// // // console.log(Amol.substr(14,10))
// // // console.log(Amol.replace('uyuyuyuyuy',' '));
// // // console.log(Amol.trim())
// // // console.log(Amol.length)
// // // let AmolJ=(Math.round((Math.random()*Amol.length)))
// // // console.log(Amol[AmolJ])
// // // console.log(Amol.repeat(2))
// // // console.log((Amol.repeat(2)).trim())
// // // console.log(Amol.concat(),sirName,Job)
// // // console.log( Amol +" "+ sirName +" "+ Job );
// // // let FullName=` ${Amol} ${sirName} ${Job}`
// // // console.log(FullName)
// // // console.log(Amol.includes("Amol"))
// // // console.log(Amol.startsWith('A'))
// // // console.log(Amol.endsWith('L'))
// // // console.log(Amol.substring(5,13))
// // // console.log(Amol.substr(5,9))
// // // let JAJA ='push push push push push "push\"'
// // // console.log(JAJA.split(" "))

// // // Even = (Math.ceil(Math.random()*50))
// // // console.log(2*Even)
// // // Even1 = (Math.ceil(Math.random()*50))
// // // console.log((2*Even1)+1)
// // // let num1= 123456778
// // // console.log(typeof(toString(num1)))

// // let Amol = "asks1234"
// // console.log(parseInt(Amol))


// // 22. Compare the length of your first name and your family name.
// let firstname = "Amol";
// let lastname = "Jadhav";
// leng1 = (firstname.length) 
// leng2 = (lastname.length)
// console.log (leng2/leng1);

// // // 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
// // let myAge = 24
// // let yourAge = 30
// // console.log(yourAge-myAge)

// // 24. Using prompt, when birth year and calculate if they are old enough to drive.
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
// //console.log(Indiatime)

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
