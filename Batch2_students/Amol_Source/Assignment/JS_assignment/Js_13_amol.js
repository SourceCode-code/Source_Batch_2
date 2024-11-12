

// Exercises: Level 1

// // 1 Declare a function fullName and it print out your full name.
// function Fullname(){
//     console.log("Amol Kantilal Jadhav")
// }
// Fullname()

// // 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function fullName(firstname,lastname){
//     return (`${firstname} ${lastname}`)
// }
// let Amolinfo = fullName("Amol",'Jadhav')
// console.log(Amolinfo)

// // 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
// function sum(a,b){
//     console.log(`addition : ${a+b}`)
// }
// sum(2,1)
// // 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function area(l,w){
//     console.log(`areaOfRectangle=${l*w}`)
// }
// area(4,4)
// // 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// function perimeter(l,w){
//     console.log(`perimeter:${2*(l*w)}`)
// }
// perimeter(2,3)

// // 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// function volume(l,w,h){
//     console.log(`volumeOfRectPrism =${l*w*h}`)
// }
// volume(2,5,7)

// // 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// function circleArea(r){
// console.log(`Area of circle = ${Math.PI*r**2}`)
// }
// circleArea(3)

// // 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// function circumOfCircle(r){
// console.log(`circumOfCircle = ${2*Math.PI*r}`)
// }
// circumOfCircle(3)
// // 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// function density(Mass,volume){
// console.log(`density = ${Mass/volume}`)
// }
// density(12,13)

// // 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// function trainSpeed(distance,time){
//     console.log(`Speed of Train = ${distance/time} km/hr`)
// }
// trainSpeed(200,2)
// // 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// function weight(mass,gravity){
//     console.log(`Weight of Substance = ${mass*gravity} KG`)
// }
// weight(12,9.81)

// // 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// function tempinFahrenheit(celcious){
//     console.log(`convertCelsiusToFahrenheit = ${(celcious*(9/5))+32}`)
// }
// tempinFahrenheit(24)

// 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// function BMI(weight,height){
//     return (`${(weight)/height**2}`)
// }
// height  = 6
// let heightin_m2 =height*.3048
// let check  = (BMI(82,heightin_m2))
// console.log(check)
// if( check<=18.5){
//     console.log(`Underweight: BMI = ${Math.round(check)}: is less than 18.5`)
// }
// else if (check>=18.5 && check<=24.9){
//     console.log(`Normal weight: BMI = ${check} ; is in between 18.5 to 24.9`)
// }
// else if(check>=25 && check<=29.9){
//    console.log(`Overweight: BMI = ${check} ; is in between 25 to 29.9`)
// }
// else{
//     console.log(`Obese:${check} ; that is 30 or more`)
// }
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// // 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// function checkSeason(month){
//     return (`${month.toLowerCase()}`)
// }
// let check = (checkSeason("january"))

// let Autumn = "september,october,november"
// let Winter = "december,january,february"
// let Spring = "march,april,may"
// let Summer = "june,july,august"

// if(Autumn.includes(check)){
//     console.log(`${check} enjoy "Autumn"`)
// }
// else if (Winter.includes(check)){
//     console.log(`${check} enjoy "Winter"`)
// }
// else if (Spring.includes(check)){
//     console.log(`${check} enjoy "Spring"`)
// }
// else if( Summer.includes(check)){
//     console.log(`${check} enjoy "Summer"`)
// }
// else{
//     console.log(`Enter Valid Month`)
// }

////////15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

//function largestNumber(Check){
//Array1 = Math.max(...Check)
//console.log(Array1)
//}
//largestNumber([0,10,5])
//largestNumber([0,-10,-2])

// console.log(findMax(0, 10, 5))// here im getting two ans 0 and 10
// 10
// console.log(findMax(0, -10, -2))
// 0
// array= [1,2,3,4,5,6,7]
// Max= array.reduce((el,index)=>{
//   return index>el?index:el
// })
// console.log(Max)


// Exercises: Level 2

// 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function solveLinEquation(a,b,c,x,y){
//     return (`${a*x + b*y + c}`)
// }
// console.log(solveLinEquation(1,2,-3,1,1))

// //2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
//     function solveQuadEquation(a,b,c,x,y){
//    return (`${a*x**2+b*y+c}`)
//     }
// console.log(solveQuadEquation(1,4,4,-2,-1))

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// function printArray(array){
// for (i=0;i<=array.length-1;i++){
//     console.log(`${array[i]}`)
// }
// }
// printArray([1,2,3])
// printArray(['a','b','c'])

// 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// function showDate(Date){
// console.log(`${Date}`)
// }
// let Date1 = new Date 
// let day = Date1.getDate()-13
// let day1 = String(day).padStart(2,0)
// let Month = (Date1.getMonth()+1)-9
// let Month1 = String(Month).padStart(2,0)
// let year = Date1.getFullYear()-4
// let hour = Date1.getHours()-2
// let Hour1 = String(hour).padStart(2,0)
// let min = Date1.getMinutes()+6
// let min1 =String(min).padStart(2,0) 
// showDate(`${day1}/${Month1}/${year} ${Hour1}:${min1}`)

// showDateTime()
// 08/01/2020 04:08

//// 5 Declare a function name swapValues. This function swaps value of x to y.

// function swapValues(x, y) {
//     let swap = x
//     x=y
//     y=swap
//     return (`x=>${x} y=>${y}`)
// }
// console.log(swapValues(3,4))
// console.log(swapValues(4,5)) //
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// function reverseArray(reverse){
//     let REV = []
//     for(i=reverse.length-1;i>=0;i--){
    
//         REV.push(reverse[i])
        
//    }
//    console.log(REV)
// }
// reverseArray([1,2,3,4,5])
// reverseArray(['A','B','C'])

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
//Method 1
// function capitalizeArray(array){
// let Capital = []
//   array.forEach((el,index,arr)=>{
//        Capital.push(el.toUpperCase())
// })
// console.log(Capital)
// }
// (capitalizeArray(['Amol','kantilal',"jadhav"]))
// Method 2
//  function capitalizeArray(array){ 
//     let Array1 =""
//     for(i=0;i<array.length;i++){
//         Array1+= array[i].toUpperCase()+" "
//     }
//     console.log(Array1)
//  }
//  capitalizeArray(["amol", "Kantilal", "Jadhav"]) // not getting Exact ans

 

// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// function addItem(item){
//    item.unshift("Fullname")
//    return item
// }
// console.log(addItem(['amol','Kantilal','jadhav']))

// 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// function removeItem(index){
// index.pop()
// return index
// }
// console.log(removeItem(["Amol","Kantilal","Jadhav", "typomistake"]))

// 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// function sumOfNumbers(number){
// sum =0
// for(i=0;i<=number.length-1;i++){
// sum =number[i]+sum
// }
// return sum
// }
// console.log(sumOfNumbers([1,2,3,4,5,6,7,8,9]))
//using Reduce Method : 
// function sumofItem(array){
//   let k = array.reduce((el,index,arr)=>{
//   return el+index
// })
// console.log(k)
// }
// (sumofItem([1,2,3,4,5,6,7,8,9]))
   
// 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// function sumOfodds(number){
//     sumodd =0
//     for(i=1;i<=number.length-1;i+=2){
//      sumodd =  number[i]+ sumodd
//     }
//     return sumodd
// }
// console.log(sumOfodds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// function sumOfeven(number){
//     let sumEven = 0
//     for(i=0;i<=number.length-1;i+=2){
//        sumEven+=number[i]
//     }
//     return sumEven
// }
// console.log(sumOfeven([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))
// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// function evensAndOdds(positiveinteger){
//     let even = 0
//    let odd =0
// for(i=0;i<=positiveinteger;i++){
//     if(i%2 === 0){
//         even++
//     }
//     else {
//         odd++
//     }
// }
//     return {
//         even,odd
//     }
// }
//    console.log(evensAndOdds(100))

// method 2 using ternary operater
// function evenodd(num){
// even = 0
// odd = 0
//   for (i=0;i<=num;i++){
//   (i%2==0)?even++:odd++
// }
// console.log(even,odd)
// }
// (evenodd(100))

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// 14 Write a function which takes any number of arguments and return the sum of the arguments
// function sum(array){
//     let sum1=0
//     for(i=0;i<=array.length-1;i++)
//     sum1 = sum1+array[i]
// return sum1
// }
// console.log(sum([1,2,3]))
// console.log(sum([1,2,3,4]))
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// 15 Writ a function which generates a randomUserIp.
// function randomUserIP(){
// let a = Math.round(Math.random()*256)
// b = Math.round(Math.random()*256)
// c = Math.round(Math.random()*256)
// d = Math.round(Math.random()*256)
// e = Math.round(Math.random()*256)
// console.log (`${a}.${b}.${c}.${d}.${e}`)
// }randomUserIP()
/////////Method 2 
// function ranomUserIp(){
// let user = ""
//     for (i=0;i<4;i++){
    
//     let user1 = Math.round(Math.random()*256)
//     user+=user1
// if(i<4){
//     user+="."
//        }
//     }
// return user
//    }
// console.log(ranomUserIp())

// 16 Write a function which generates a randomMacAddress
// function randonMacAdsress(){
// let randomMac=''
// for (i=0;i<6;i++){
// let random = Math.round(Math.random()*256).toString(16).padStart(2,"0")
// randomMac+=(random)
// if(i<5){
//     randomMac+=':'
// }
// }
// return randomMac
// }
// console.log(randonMacAdsress())

// 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// function randomHexaNumberGenerator(){
//     return hexanumber ="#"+ Math.random().toString(16).substr(2,6)
//     }
// console.log(randomHexaNumberGenerator())

// console.log(randomHexaNumberGenerator());
// '#ee33df'

// 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// function userIdGenerator(ranID){
//     return ranID = (Math.random().toString(16)).substring(3,10)
// }
// console.log(userIdGenerator())
// console.log(userIdGenerator());
// 41XTDbE

// Exercises: Level 3

// 1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// 2 Write a function name rgbColorGenerator and it generates rgb colors.
// let r = Math.floor(Math.random()*256)
// let b = Math.floor(Math.random()*256)
// let g = Math.floor(Math.random()*256)
// function rgbColorGenerator(){
//     return(`rgb (${r},${b},${g})`)
// }
// console.log(rgbColorGenerator())
// // rgbColorGenerator()
// rgb(125,244,255)

// 3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
// function arrayOfHexaColors(num){
//     let Hexa =[]
//     for(i=0;i<num;i++){
//     let a = Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")
//     Hexa.push(a)
//     }
//     return Hexa
// } 
// console.log(arrayOfHexaColors(4))

// 4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.
// let r = Math.floor(Math.random()*256)
// let b = Math.floor(Math.random()*256)
// let g = Math.floor(Math.random()*256)
// function rgbColorGenerator(){
//     return(`(#${r},#${b},#${g})`)
// }
// console.log(rgbColorGenerator().split())

// 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
// function convertHexaToRgb(Hexa){
//     let r=parseInt(Hexa.slice(1,3),16)
//     let b=parseInt(Hexa.slice(3,5),16)
//     let g=parseInt(Hexa.slice(5,7),16)
// return[r, g, b]
// }
// console.log(convertHexaToRgb("#19EDef"))


// 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.


// /////7 Write a function generateColors which can generate any number of hexa or rgb colors.
// function generateColors(num){
//     let array = []
//     for(i=0;i<num;i++){
//     let r ='#'+ Math.round(Math.random()*16777215).toString(16)
//     let b = '#'+ Math.round(Math.random()*16777215).toString(16)
//     let g = '#'+ Math.round(Math.random()*16777215).toString(16)
//     let  k = (`${r},${b},${g}`)
//       array.push(r)
      
//     }
//     return array
// }
// console.log(generateColors(1))

// function generateColors1(num){
//     let array = ("")
//     for(i=0;i<num;i++){
//     let r =Math.round(Math.random()*256)
//     let b = Math.round(Math.random()*256)
//     let g = Math.round(Math.random()*256)
//     let  k = (`rgb(${r},${b},${g})`)
//       array+=(k)
//       if(i<2){
//         array+= ","
//       }
      
//     }
//     return array
// }
// console.log(generateColors1(3))

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// function ShuffleArray(array){
// for (i=array.length-1;i>0;i--){
//     j = Math.floor(Math.random()*(i+1));// at this line ";" when i applied that, then only i get the output
//     [array[i],array[j]]=[array[j],array[i]]   
//     // original array    // shuffules array
// }
// return array
// }
// console.log(ShuffleArray([1,2,3,4,5,6,7,8,9]))

// 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
// function factorial(wholeNumber){
// let fact = 1
//     for(i=1;i<=wholeNumber;i++){
//     fact=fact*i
   
// }
// console.log(fact)
// }
// factorial([5])
// 10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// function isEmpty([]){

// }
// isEmpty([])

// 11 Call your function sum, it takes any number of arguments and it returns the sum.
// function sum(n){
//     check=0
//     for(i=0;i<=n;i++){
//         check+=i
//     }
//     console.log(check)
    
// }
// sum(10)

// 12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// function sumOfArrayItems(array){
//     let kkk=array.reduce((el,index,arr)=>{
//         return el+index
// })
// console.log(kkk,typeof(kkk))
// }
// sumOfArrayItems([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

// 13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// function average(array){
//     sum =0
//     for (i=0;i<=array.length-1;i++){
//      sum=sum+array[i]
    
//     }
//     console.log(sum/array.length)
// }
// average([1,2,3,4,5,6,7,8,9,10])

// 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// function modifyArray(array){
//     array.splice(4,1,"LEMON")
//     return array
// }
//  console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
//console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

// function modifyArray1(array1){
// array1[4]="MICROSOFT"
// return array1
// }
// console.log(modifyArray1(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']

// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// 15  Write a function called isPrime, which checks if a number is prime number.
// function isPrime(n){
//     for(i=2;i<=n;i++){
//         if(n%i===0){
//             return `${n} it is not a prime number`
//         }
//         else{
//      return `${n} is A prime number`
//     }

//     }
// }
//console.log(isPrime(8))

// 16 Write a functions which checks if all items are unique in the array.
// function UniqueArray(array){
//     array.forEach((acc,el,index,)=>{
//      console.log(acc==el)
//     }) 
// }
// (UniqueArray([1,2,2,3,3,6,7,8,9]),0)

// 17 Write a function which checks if all the items of the array are the same data type.
// function datatypes(array2){
// array2.forEach((acc,el,index)=>{
// if(typeof(acc)===typeof(el)){
//     console.log("Yes Datatypes is Same")
// }
// else{
//     console.log("data type is not same")
// }

// })

// }datatypes(["amol",24,true,9767004310,null,undefined],0)

// 18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
// function isValidvariable(array){
//     str1 = array.join(" ")
//     if (str1.includes("$")||str1.includes("_"))
//       {  console.log('Variable is valid')
//     }
//     else{
//        console.log('Variable is invalid')
//     }
// }
// isValidvariable(["Amol_1234"])


// 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// function randomArray(array){
// let RanNum = []
//     for(i=0;i<=array.length-1;i++){
//     let Check = Math.floor(Math.random()*array[i])
//     RanNum.push(Check)
// }
// console.log(RanNum.splice(1,7))
// }
// randomArray([0,1,2,3,4,5,6,7,8,9])
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]///not geting random numbers

// 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
// function reverseCountries(countries){
// let reverse = []
//     for(i=countries.length-1;i>=0;i--){
//     reverse.push(countries[i])
// }
// console.log(reverse)
// }
// reverseCountries([
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ])