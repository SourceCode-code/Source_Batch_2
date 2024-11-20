

// Exercises: Level 1

// 1 Declare a function fullName and it print out your full name.

// 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// 3 Declare a function addNumbers and it takes two two parameters and it returns sum.

// 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

// 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

// 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

// 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function checkBMI(weight, height) {
    const bmivalue = weight / (height * height);

    if (bmivalue < 18.5) {
        return "Underweight"
    }

    else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
        return "Normal weight"
    }

    else if (bmivalue >= 25 && bmivalue <= 29.9) {
        return "Overweight"
    }

    else { return "Obese" }

}


console.log(checkBMI(68, 5))





// 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findMax(a, b, c) {
    let max = a
    if (b > max) {
        max = b
    }
    if (c > max) { max = c }
    return max
}

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

// Exercises: Level 2

// 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

function solveQuadEquation(a = 0, b = 0, c = 0) {
    const discrimatnt = b * b - 4 * a * c

    if (discrimatnt < 0) {
        return "no real roots"
    }
    const root1 = ((-b + Math.sqrt(discrimatnt) / 2 * a))
    const root2 = ((b - Math.sqrt(discrimatnt) / 2 * a))

    return discrimatnt === 0 ? `${root1}` : `${root1},${root2}`
}

// console.log(solveQuadEquation()) // {0}
// console.log(solveQuadEquation(1, 4, 4)) // {-2}

console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    arr.forEach(element => {
        console.log(element)
    });
}

printArray([1, 2, 58, 68, 9, 10])


// 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08



// 5 Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.



// 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

function evensAndOdds(n) {
    let evens = 0, odds = 0
    for (let i = 1; i < n; i++) {
        i % 2 === 0 ? evens++ : odds++
    }
    return ` the number of evens are ${evens}
    the number of odds are ${odds}`
}

console.log(evensAndOdds(150))



// 14 Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

function sum(...args) {
    return args.reduce((acc, curl) => acc + curl, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// 15 Writ a function which generates a randomUserIp(){
// }
// 192.168.123.132. 

function randomUserIp() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
}

console.log(randomUserIp())

// 16 Write a function which generates a randomMacAddress
//a3:7f:21:5e:06:73




// 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'

function randomHexaNumberGenerator() {
    let hexNUmber = "#" + Math.floor(Math.random() * 2147483647).toString(16)

    return hexNUmber
}


console.log(randomHexaNumberGenerator())

// #764e6d2f #20e2be8d

// 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE


function userIdGenerator() {
    let randomid = Math.random().toString(36).substr(2, 7)
    //0-0.99
    console.log(randomid)
}

userIdGenerator()
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

function userIdGeneratedByUser(numofCharacter, numofid) {
    let ids = []
    for (let i = 0; i < numofid; i++) {
        let id = ""
        for (let j = 0; j < numofCharacter; j++) {
            id += Math.random().toString(36).substring(2, numofCharacter)
        }
        ids.push(id)




    }
    return ids
}

console.log(userIdGeneratedByUser(4, 5))

// 2 Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)

function rgbColorGenerator() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return (`rgb(${r},${g},${b})`)
}

rgbColorGenerator()


// 3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(num) {
    let color = []
    for (let i = 0; i < num; i++) {
        let hexNUmber = "#" + Math.floor(Math.random() * 2147483647).toString(16)
        color.push(hexNUmber)
    }
    return color
}

console.log(arrayOfHexaColors(30))

// 4 Write a function  arrayOfRgbColors(){} which return any number of RGB colors in an array.

function arrayOfRgbColors(num) {
    let colors = []
    for (let i = 0; i < num; i++) {
        colors.push(rgbColorGenerator())
    }

}

console.log(arrayOfRgbColors(5))

// 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16)
    let g = parseInt(hex.substring(3, 5), 16)
    let b = parseInt(hex.substring(3, 5), 16)
    console.log(`rgb(${r},${g},${b})`)
}

convertHexaToRgb(randomHexaNumberGenerator())


// 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.



// 7 Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'


// function generateColors(type, num) {
//     let colorss = []
//     if (type === "hexa") {
//         colorss = arrayOfHexaColors(num)

//     }
//     if (type === "rgb") {
//         colorss = arrayOfRgbColors(num)
//     }

// }



generateColors("hexa", 3)
generateColors("rgb", 3)
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



