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

let Numbers = [20,30,40,50]

function printNumbers(Number){
    console.log(Number);
}

Numbers.forEach(printNumbers)
console.log("-----ex.lev-1. Ans-1--------")

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
function getStringLists(arr){
    
}
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
let TotalProducts = products.reduce((acc,item) => {
    const price  = parseFloat(item.price) || 0; 
    return acc + price 
}, 0)
console.log(`The Sum of price of Products is: ${TotalProducts}`)
console.log("-------ec.lev-2. Ans2---------") // 27


// 3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(countries, pattern){
    return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()))
}
console.log(categorizeCountries(countries, 'land','ia', 'island','stan'))
console.log("-------ex.lev2.Ans3---------")

// 4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countLetter(countries){
    let result = []
    countries.forEach(country => {                                            //looping through each country
        let firstLetter = country[0].toLowerCase()                           // getting the first letter of the country, by extracting the first character of the string and converting it to lower case
        if(result.find(item => item.letter === firstLetter)){                //checking if the "firstletter already exists"
            result.find(item => item.letter === firstLetter).count += 1      //updating the count  if the letter exists
        }
        else{
            result.push({letter:firstLetter, count:1})                      // adding a new object if the letter does not exist 
        }
    })
    return result
}
console.log(countLetter(countries))
console.log("-----ex.lev-2. Ans4-------")


// 5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const countries1 = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://restcountries.eu/data/and.svg',
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        flag: 'https://restcountries.eu/data/ago.svg',
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://restcountries.eu/data/aia.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://restcountries.eu/data/ata.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://restcountries.eu/data/atg.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400,
        flag: 'https://restcountries.eu/data/arg.svg',
        currency: 'Argentine peso'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://restcountries.eu/data/arm.svg',
        currency: 'Armenian dram'
    },
    {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        flag: 'https://restcountries.eu/data/abw.svg',
        currency: 'Aruban florin'
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        languages: ['English'],
        population: 24117360,
        flag: 'https://restcountries.eu/data/aus.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Austria',
        capital: 'Vienna',
        languages: ['German'],
        population: 8725931,
        flag: 'https://restcountries.eu/data/aut.svg',
        currency: 'Euro'
    },
    {
        name: 'Azerbaijan',
        capital: 'Baku',
        languages: ['Azerbaijani'],
        population: 9730500,
        flag: 'https://restcountries.eu/data/aze.svg',
        currency: 'Azerbaijani manat'
    },
    {
        name: 'Bahamas',
        capital: 'Nassau',
        languages: ['English'],
        population: 378040,
        flag: 'https://restcountries.eu/data/bhs.svg',
        currency: 'Bahamian dollar'
    },
    {
        name: 'Bahrain',
        capital: 'Manama',
        languages: ['Arabic'],
        population: 1404900,
        flag: 'https://restcountries.eu/data/bhr.svg',
        currency: 'Bahraini dinar'
    },
    {
        name: 'Bangladesh',
        capital: 'Dhaka',
        languages: ['Bengali'],
        population: 161006790,
        flag: 'https://restcountries.eu/data/bgd.svg',
        currency: 'Bangladeshi taka'
    },
    {
        name: 'Barbados',
        capital: 'Bridgetown',
        languages: ['English'],
        population: 285000,
        flag: 'https://restcountries.eu/data/brb.svg',
        currency: 'Barbadian dollar'
    },
    {
        name: 'Belarus',
        capital: 'Minsk',
        languages: ['Belarusian', 'Russian'],
        population: 9498700,
        flag: 'https://restcountries.eu/data/blr.svg',
        currency: 'New Belarusian ruble'
    }
]
function getFirstTenCountries(countries1){
    let firstTen =countries1.slice(0,10)
    return firstTen    
}
console.log(getFirstTenCountries(countries1))
console.log("-----ex.lev-2. Ans5-------")
// 6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.


function getLastTenCountries(countries1){
    let lastTen = countries1.slice(-10)
    return lastTen
}
console.log(getLastTenCountries(countries1))
console.log("-----ex.lev-2 Ans.6------")
// 7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function findMostUsedInitial(countries){
    let count = {}                                //obj to track the count of each initial 

    countries.forEach(country=>{ 
        let initial = country[0].toLowerCase()      // extract the first letter and convert it to lower case
        count[initial] = (count[initial] || 0) + 1  //increment count for the initial
    });
    return Object.entries(count).map(([initial, count ])=>({initial , count})).sort((a,b) => b.count - a.count)     //converting the 'count' object to array, sorting it by frequency, and returning the result 

}
console.log(findMostUsedInitial(countries))
console.log("------ex.lev-2 Ans.7---------")


 

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


 


//Akshay's question \\
//let bc = "aaabbbccbccaadd";

// function filterString(inputString, k) {
//     const charCount = {};
    
//     for (const char of inputString) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     let filteredChars = '';
    
//     for (const char of inputString) {
//         if (charCount[char] >= k) {
//             filteredChars += char;
//         }
//     }
    
//     const reversedOutput = filteredChars.split('').reverse().join('');
//     return reversedOutput;
// }

// const inputString = "pilot";
// const k = 2;

// const output = filterString(inputString, k);
// console.log(output);  
// console.log("----") 

// function FilterString(inputString,k){
//     let char = 'aabbccdd';
//     let charCount = {}

//     inputString.forEach(charCount=>{
//         charCount[char] = (charCount[char] || 0) + 1
//     })
   
//     const reversedOutput = Object.entries(charCount).map(([char,count])=>({char,count})).sort((a,b)=> Object.values(b)[0] - Object.values(a)[0])
//     return reversedOutput.slice(0,limit)
// }
// console.log(FilterString(inputString,k)) 


