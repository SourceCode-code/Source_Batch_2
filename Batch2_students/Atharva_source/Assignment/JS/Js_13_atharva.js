// //

// Exercises: Level 1

// 1 Declare a function fullName and it print out your full name. 
function fullname(){
    let firstname ="atharva";
    let middlename="vijay";
    let lastname = "pandit";
    console.log(`my full name is ${firstname} ${middlename} ${lastname}`);
}
fullname(); 

console.log("----ex-level-1;Ans.1-----------")


// 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function FullName(FirstName, LastName){

    return `${FirstName} ${LastName}`
}
console.log(FullName("Atharva","Pandit"));
console.log("----ex-level-1;Ans.2-----------")
// 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2){
    let sumofnumbers = num1 + num2;
    return `${sumofnumbers}`
}
console.log(addNumbers(num1 =  95, num2 = 97));
console.log("----ex-lev-1;Ans.3-------------")

// 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function AreaOfRectangle(length,breadth){
    let area = length * breadth;
    return `${area}`
}
console.log(AreaOfRectangle(length = 14, breadth = 20));
console.log("---ex-lev-1;ans.4----------")


// 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function PerimeterOfRectangle(Length, Breadth){
    let perimeter =  2 * (Length + Breadth);
    return `${perimeter}`

}
console.log(PerimeterOfRectangle(Length=23, Breadth = 25));
console.log("-------ex-lev-1; Ans.5-------------")

// 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function VolOfRectPrism(LengtH, BreadtH, HeighT){
    let Volume = LengtH * BreadtH * HeighT;
    return `${Volume}`
}
console.log(VolOfRectPrism(LengtH = 15, BreadtH = 18, HeighT =20));
console.log("------ex-lev-1; Ans.6----------")
// 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function AreaOfCircle(pi, Radius, radius){
    let Area = pi * Radius * radius;
    return `${Area}`
}
console.log(AreaOfCircle(pi = 3.14, Radius = 12, radius = 9));
console.log("------ex-lev-1; Ans.7---------------")
// 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function CircumferenceOfCirc(Pi, RADIUS){
    let Circumference = 2 * Pi * RADIUS;
    return `${Circumference}`
}
console.log(CircumferenceOfCirc(Pi = 14, RADIUS = 15));
console.log("-----------ex-lev-1;Ans.8------------")
// 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function  DensityOfSubstance(Mass, Volume){
    let Density = Mass / Volume;
    return `${Density}`
}
console.log(DensityOfSubstance(Mass = 40, Volume = 25));
console.log("----ex-lev-1; Ans.9----------")

// 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function  SpeedOfMovingObject(Distance, Time){
    let  Speed = Distance / Time;
    return `${Speed}`
}
console.log(SpeedOfMovingObject(Distance = 75, Time = 30));
console.log("----ex-lev-1;Ans.10------------")

// 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function WeightOfSubstance(Mass, Gravity){
    let Weight = Mass * Gravity;
    return  `${Weight}`
}
console.log(WeightOfSubstance(Mass = 30,  Gravity = 9.8));
console.log("--ex-lev-1; Ans.11-----------------")

// 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(Celsius){
     let formula =  (Celsius * 9/5) + 32;
     return `${formula}`;
}
console.log(convertCelsiusToFahrenheit(45 *  9/5 + 32));
console.log("--------ex-lev-1; Ans.12-----------")

// 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function BmI(weight, height){
    let bmi = weight /  (height * height);
    return `${bmi}`
}
console.log(BmI(weight = 60, height = 30));
console.log("--------ex-lev-1; Ans.13-----------")
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function  checkSeason(month){
    if (month >= 3 && month <= 5) {
        return "Spring";
        }
        else if (month >= 6 && month <= 8) {
        return "Summer";
        }
        else if (month >= 9 && month <= 11) {
        return "Autumn"
        }
    }
    console.log(checkSeason(4));
console.log("----ex-lev-1;Ans.14-------------")

// 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(first,second, third){
    
}
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0


// Exercises: Level 2

// 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(){
    let A = 4;
    let B = 6;
    let X = 9;
    let Y = 7;
    let C = 2;
    let equation = A * X + B * Y + C ;
   console.log(`the linear Equation is ${equation}`)
}
solveLinEquation();
console.log("----ex-lev-2; Ans1---------")
// 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//Wrong implementation \\ Solve Again\\\\
function  solveQuadratic(a1,b1,c1){
    let x =9;
    let d  = a1 * x * 2 + b1 * x + c1;
    console.log(`the quadratic equation is ${d}`);
}
solveQuadratic(2,5,11);
console.log("----ex-level-2; Ans.2----------")


// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray([]){

}
// 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let padDayFormat = String(day).padStart(2,'0');
    let padMonthFormat = String(month).padStart(2,'0');
    let padminutes = String(minutes).padStart(2,'0');
    let padhours = String(hours).padStart(2,'0');
    console.log(`${padDayFormat}/${padMonthFormat}/${year} ${padhours}:${padminutes}`);
}
showDateTime();
console.log("----ex-level-2; Ans.4---------")
// showDateTime()
// 08/01/2020 04:08

// 5 Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x,y){
    let temp = x;
    x = y;
    y = temp;
    return (x,y);
}
let x = 7;
let y = 8;
console.log((swapValues(x,y)));
console.log("x:", y, "y:", x);
console.log("------ex-lev-2;Ans.5-----------------")

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reversearray(reverse){
    let Arr = [];
    for(i = reverse.length-1;i>=0;i--){
        Arr.push(reverse[i]);
    }
    console.log(Arr);
}
reversearray([1,2,3,4,5]);
reversearray(['A','B','C'])
console.log("---ex-lev-2; Ans.6---------")

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(ARRAY){
    let arr = ['a','b','c','d','e'];
    let yj ="";
    for (i=0;i<arr.length;i++){
        ARRAY += arr[i].toUpperCase()+"";
    }
    console.log(yj);
}
capitalizeArray(['atharva']);
console.log("--ex-lev-2; Ans.7-----------")
// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item){
    item.unshift("mobilename");
    return  item;
}
console.log(addItem(['iqoo 9pro','motog']));
console.log("---ex-lev-2;Ans.8---------")
// 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function reoveItem(Item){
    Item.pop();
    return Item
}
console.log(reoveItem(['car','mobile','asset']));
console.log("----ex---lev-2; Ans.9-----------")
// 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number){
    let sum = 0;
    for(i=0;i<=number.length-1;i++){
        sum = number[i] + sum;
    }
    return sum;
}
console.log(sumOfNumbers([3,9,12,18,36]));
console.log("----ex--lev-2;Ans,10------------")
// 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(Number){
    let sumOfOdd = 0;
    for(i=0;i<=Number.length-1;i++){
        sumOfOdd += Number[i];
    }
    return  sumOfOdd;
}
console.log(sumOfOdds([2,3,4,5,6,7,8]));
console.log("---ex-level-2; Ans.11---------")
// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(number){
    let sumeveN = 0;
    for( i=0;i<=number.length-1;i++){
        sumeveN += number[i];
    }
    return sumeveN;
}
console.log(sumOfEven([1,2,3,4,5,6,7,8,9,10,11]));
console.log("------ex-lev-2; Ans.12-----------")
// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// function evensAndOdds(integer){
//     let evenodd = 0;
//     let count = 0;
//     for(i=0;i<integer.length-1;i++){
//         if()
//     }
// }
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// 14 Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// 15 Writ a function which generates a randomUserIp.

// 16 Write a function which generates a randomMacAddress

// 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'

// 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

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

// rgbColorGenerator()
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

// 13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// 15  Write a function called isPrime, which checks if a number is prime number.

// 16 Write a functions which checks if all items are unique in the array.

// 17 Write a function which checks if all the items of the array are the same data type.

// 18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array


// ////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// //

