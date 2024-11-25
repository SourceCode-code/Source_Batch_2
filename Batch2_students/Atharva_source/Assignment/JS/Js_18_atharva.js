/**/
 // Assignment --> high order functions



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','Ethiopia']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1 Define a callback function before you use it in forEach, map, filter or reduce.


// 2 Use forEach to console.log each country in the countries array.
countries.forEach(country=>{
    console.log(country)
})
console.log("-----lev-1. Ans-2-----")
// 3 Use forEach to console.log each name in the names array.
names.forEach(name=>{
    console.log(name)
});
console.log("-----lev-1. Ans-3-----")
// 4 Use forEach to console.log each number in the numbers array.
numbers.forEach(number=>{
    console.log(number)
});

console.log("-----lev-1. Ans.4-----")
// 5 Use map to create a new array by changing each country to uppercase in the countries array.
let UpperCaseCount = countries.map(country=>(country.toUpperCase()))
console.log(UpperCaseCount)

console.log("-----lev -1 Ans.5-----")
// 6 Use map to create an array of countries length from countries array.
let countrylength = countries.map(country=>(country.length))
console.log(countrylength)
console.log("-----ex.lev-1 Ans.6-----")
// 7 Use map to create a new array by changing each number to square in the numbers array
let squareNumbers = numbers.map(num=>(num **2))
console.log(squareNumbers)
console.log("-----ex.lev-1 Ans.7-----")
// 8 Use map to change to each name to uppercase in the names array
let UpperNames = names.map(name=>(name.toUpperCase()))
console.log(UpperNames)
console.log("-----ex.lev-1 Ans.8-----")
// 9 Use map to map the products array to its corresponding prices.
let productPrice = products.map(product=>(product.price))
console.log(productPrice)
console.log("-----ex.lev-1 Ans.9-----")
// 10 Use filter to filter out countries containing land.
let landCountries = countries.filter(country=>(country.includes('land')))
console.log(landCountries)
console.log("-----ex.lev-1 Ans.10-----")
// 11 Use filter to filter out countries having six character.
let sixCharacterCountries = countries.filter(country=>country.length == 6)
console.log(sixCharacterCountries)
console.log("-----ex.lev-1 Ans.11-----")
// 12 Use filter to filter out countries containing six letters and more in the country array.
let sixLetterCountries = countries.filter(country=>country.length >= 6)
console.log(sixLetterCountries)
console.log("-----ex.lev-1. Ans.12-----")
// 13 Use filter to filter out country start with 'E';
let countriesstartWithE = countries.filter(country=>country.startsWith('E'));
console.log(countriesstartWithE)
console.log("-----ex.lev.1 Ans-13------")
// 14 Use filter to filter out only prices with values.
let pricesWithValues = products.filter(product=>product.price > 0)
console.log(pricesWithValues)
console.log("-----ex.lev.1 Ans14-------")
// 15 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// function getStringLists(arr){
//     return arr.filter(item=>typeof item === 'string')
// }
// console.log(getStringLists([1,2,3,'a','b','c']))
// console.log("-----ex.lev.1 Ans.15-----")
// 16 Use reduce to sum all the numbers in the numbers array.
let sumOfNumbers = numbers.reduce((acc, current) => acc + current, 0)
console.log(sumOfNumbers)
console.log("-----ex.lev-1 Ans.16-----")
// 17 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let sentence = countries.reduce((acc, current,index) =>{
    if(index === countries.length -1){
        return `${acc} and ${current} are North Europian countries`;
    }
    else{
        return `${acc}, ${current}`;
    }
});
console.log(sentence);
console.log("-----ex.lev.1 Ans17------")
// 18 Explain the difference between some and every
        /*  some() returns true if at least one element in the array passes the test implemented by the provided and function .
            every() returns true if all elements in the array pass the test implemented by the provided function */
// 19 Use some to check if some names' length greater than seven in names array 
let someNames = names.some(name=>name.length > 7)
console.log(someNames)
console.log("-----ex.lev.1 Ans19------")
// 20 Use every to check if all the countries contain the word land
let everyCountries = countries.every(country=>country.includes('land'))
console.log(everyCountries)
console.log("-----ex.lev.1 Ans20------")
// 21 Explain the difference between find and findIndex.
        /*In JavaScript, both find() and findIndex() are array methods used to search for elements based on a provided condition.*/
        /*find() returns the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.*/

// 22 Use find to find the first country containing only six letters in the countries array
let findSixletters = countries.find(country=>country.length === 6)
console.log(findSixletters)
console.log("-----ex.lev.1 Ans22------")

// Level 2

// 1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let totalPrice = products.map(product => product.price).filter(price => price > 0).reduce(( acc, current) => acc + current, 0)   //acc (accumulator) starts at 0, and current is each price from the filtered array.
console.log(`the Total Price is: ${totalPrice}`)
console.log("-------ex.lev2.Ans-1---------")
// 2 Find the sum of price of products using only reduce reduce(callback))
let TotalProducts = products.reduce((acc,item) => acc + item.price, 0)
console.log(`The Sum of price of Products is: ${TotalProducts}`)
console.log("-------ec.lev-2. Ans2---------") // wrong
// 3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// 4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// 5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// 6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// 7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

 

// Level 3


// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object.Check the output below.

// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ', statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Frequency Distribution: ', statistics.freqDist()) #[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())

// output be like 
// Count: 25
// Sum: 744
// Min: 24
// Max: 38
// Range: 14
// Mean: 30
// Median: 29
// Mode: (26, 5)
// Variance: 17.5
// Standard Deviation: 4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


 

