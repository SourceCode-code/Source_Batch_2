
// Exercises: Level 1

// 1 Declare a function fullName and it print out your full name.
function fullName(){
    console.log("Ashutosh Vishwanath More");
    
}
fullName()
// 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName1(firstName,LastName){
    console.log(`${firstName} ${LastName}`);
    
}
fullName1("Ashutosh","More")
// 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2){
    console.log(num1+num2);
    
}
addNumbers(3,2)
// 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
areaOfRectangle = function(length, width){
    console.log(`Area od rect is ${length*width}`);
    
}
areaOfRectangle(10,10)
// 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width){
    return ` Perimeter of rect is ${2 *(length * width)}`
}
console.log(perimeterOfRectangle(10,10));

// 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
    console.log(`Volume of prism is ${length*width*height}`);
    
}
volumeOfRectPrism(10,10,10)
// 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
areaOfCircle = function(redius){
    console.log(`Area of circle is ${Math.PI* redius* redius}`);
    
}
areaOfCircle(10)
// 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(redius){
    console.log(`circumofcircle is ${2 *Math.PI*redius}`);
    
}
circumOfCircle(10)
// 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
let calDensity = (Mass,volume)  => {
    console.log("Density is " , Mass/volume);
    
}
calDensity(10,10)
// 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
let speed = (dist,time) =>{
    return `Speed of object is ${dist/time}`
}
console.log(speed(10,2));
let car = speed(100,2)
console.log(car);

// 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function gravity(mass){
    console.log(mass*9.81);
    
}
gravity(10)
// 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(Temp){
    console.log(`Tem in fr is ${(Temp*(9/5)) + 32}`);
    
}
convertCelsiusToFahrenheit(100)
// 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
// Write a function which calculates bmi. 
// BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight,
//  normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calBMI(name,weight,height){
    BMI = weight/(height*height)
    if(BMI < 18.5){
        console.log(`${name} is underweight`);
        
    }
    else if(BMI>18.5 && BMI < 24.9){
        console.log(`${name} is Normal weight`);
        
    }
    else if(BMI>25 && BMI < 29.9){
        console.log(`${name} is overweight`);
        
    }
    else if(BMI > 30){
        console.log(`${name} is obse `);
        
    }
}
calBMI("Ashutosh", 110, 2)

// 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    if(month == "January"|| month =="February" || month == "March" || month == "April"){
        console.log("It's a summer");
    }
    else if(month == "May"|| month =="June" || month == "July" || month == "August"){
        console.log("It's rainy");      
    }    
    else if(month == "September"|| month =="Octomber" || month == "November" || month == "December"){
        console.log(console.log("It's winter"));
    }
        
}
checkSeason("May")
// 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a,b,c){
    let A = []
    A.push(a)
    A.push(b)
    A.push(c)
    A.sort((a,b) =>(a-b))
    console.log(`Max num is ${A[A.length-1]}`);
    
}
findMax(20, 10, 5)
// 10
findMax(0, -10, -2)
// 0


// Exercises: Level 2

// 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    for (i in arr){
        console.log(i);
    }
}
printArray([1,2,3,4,5])
// 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    date = new Date()
    day = date.getDate()
    month = date.getMonth()
    year = date.getFullYear()
    time = date.getHours()
    min = date.getMinutes()
    console.log(`${String(day).padStart(2,"0")}/${String(month).padStart(2,"0")}/${year} ${time}:${min}`)
}
showDateTime()
// 08/01/2020 04:08

// 5 Declare a function name swapValues. This function swaps value of x to y.
function swapValues(X,Y){
    console.log(`X= ${Y} , Y = ${X}`);
    
}
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    let arr1 = []
    for(let i=arr.length-1; i>=0;i--){
        arr1.push(arr[i])
    }
    return arr1
}

console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr){
    let arr1 = []
    for(i in arr){
        arr1.push(arr[i].toUpperCase())
    }
    console.log(arr1);
}
capitalizeArray(["a","b","c"])
// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(reverseArray,A){
    newAr = reverseArray.push(A)
    return newAr

}
console.log(addItem([1,2],5))
// 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(A,B){
    let sum1 = 0
    for(let i=A;i<=B;i++){
        sum1 = sum1 + i
    }
    console.log(sum1);   
}
sumOfNumbers(1,5)
// 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(A,B){
    let oddSum = 0
    for(let i=A;i<=B;i++){
        if(i%2 != 0){
            oddSum = oddSum+i
        }
    }
    console.log(oddSum);
}
sumOfOdds(2,10)
// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(A, B){
    let evenSum = 0
    for(let i=A;i<=B;i++){
        if(i%2 == 0){
            evenSum = evenSum+i
        }
    }
    console.log(evenSum);
}
sumOfEven(1,10)
// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
evensAndOdds = function(num1){
    countEven = 0
    countOdd = 0
    for(let i=0;i<=num1;i++){
        if(i%2 == 0){
            countEven++
        }
        else if(i%2 !=0){
            countOdd++
        }
    }
    console.log(`The number of odds are ${countOdd}`);
    console.log(`The number of even are ${countEven}`);
}
evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// 14 Write a function which takes any number of arguments and return the sum of the arguments
function sum(...args){
    let add = args.reduce((el,index,arr) => {
        return el+index

    })
    console.log(add);
    
}
(sum(1, 2, 3)) // -> 6
sum(1, 2, 3, 4) // -> 10

// 15 Writ a function which generates a randomUserIp.
function randomUserIp(){
    let a = Math.round(Math.random()*256)
    let b = Math.round(Math.random()*256)
    let c = Math.round(Math.random()*256)
    let d = Math.round(Math.random()*256)
    console.log(`${a}${b}${c}${d}`);
    
}
randomUserIp()
// 16 Write a function which generates a randomMacAddress
function randomMacAddress(){
    let a = Math.round(Math.random()*20).toString(16).padStart(2,"0")
    let b = Math.round(Math.random()*20).toString(16).padStart(2,"0")
    let c = Math.round(Math.random()*20).toString(16).padStart(2,"0")
    let d = Math.round(Math.random()*20).toString(16).padStart(2,"0")
    let e = Math.round(Math.random()*20).toString(16).padStart(2,"0")
    let f = Math.round(Math.random()*20).toString(16).padStart(2,"0")
    console.log(`${a},${b},${c},${d},${e},${f}`);
    
}
randomMacAddress()

// 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(){
    num2 = '#'+Math.random().toString(16).substr(2,6)
    console.log(num2);
    
}
randomHexaNumberGenerator()
// '#ee33df'

// 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(){
    return (Math.random()).toString(16).substr(3,10)
    
}
console.log(userIdGenerator());
// 41XTDbE

// Exercises: Level 3

// 1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser(a,b){
    d = 100*a
    let userID = (Math.random()*d).toString().substr(2,a)
    for(let i=0;i<=b;i++){
        console.log((Math.random()).toString(36).substr(2,a));  
    }
}
userIdGeneratedByUser(50,10)
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
function rgbColorGenerator(){
    r = Math.round(Math.random()*256)
    g = Math.round(Math.random()*256)
    b = Math.round(Math.random()*256)
    console.log(`rgb (${r},${g},${b})`);
    
}
rgbColorGenerator()
// rgb(125,244,255)

// 3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// 4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// 7 Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// 10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// 11 Call your function sum, it takes any number of arguments and it returns the sum.

// 12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array){
    let sum1 = 0
    for(let i=0;i<=array.length-1;i++){
        if(typeof(array[i] == typeof(4))){
            sum1 = sum1+array[i]
        }
        else{console.log("given element is not a number");
        }
    }
    console.log(sum1);
    
}
sumOfArrayItems([1,2,3,4,5,"p"])
// 13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr,A){
    arr[4] = A
    return arr
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'],"Ashu"));
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// 15  Write a function called isPrime, which checks if a number is prime number.
function isPrime(n){
        for(i=2;i<=n;i++){
            if(n%i===0){
                return `${n} it is not a prime number`
            }
            else{
         return `${n} is A prime number`
        }
    
        }
    }

console.log(isPrime(7))
// 16 Write a functions which checks if all items are unique in the array.

// 17 Write a function which checks if all the items of the array are the same data type.

// 18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers(){
    let arr12 = []
    for(let i=0;i=8;i++){
        arr12.push(Math.round(Math.random()*10))
    }
    console.log(arr12);
}
sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array





