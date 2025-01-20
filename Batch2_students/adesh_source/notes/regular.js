let ad="adesh"
let reg= new RegExp(ad)
console.log(reg)

//let reg1=new RegExp(ad,"gi")
//console.log(reg1)

let ad1="i learning javaascript"
let ad2=  /i/i.test(ad1)
console.log(ad2)


let str17 = "I AM LEARNING JS , LEARNING CYPRESS, LEARNING PLAYWRIGHT LEARNING DBMS";
console.log(str17.match(/LEARNING/gi).length) 

let str1= "h@#i my@ n@am@#e is A@#d@de#sh"
console.log(str1.replace(/@#/gi,""))

let str3= "h@#el@#lo m@#y n@#am@#e is sidd@#ha@#n@#t"

console.log(str3.replace(/@#/gi,""))