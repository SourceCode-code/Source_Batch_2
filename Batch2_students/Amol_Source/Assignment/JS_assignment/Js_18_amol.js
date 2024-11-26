
// // Assignment --> high order functions:

//const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: '' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]

// 1 Define a callback function before you use it in forEach, map, filter or reduce.
// callback function is nothing but we can use another function as parameter for peresent function

// 2 Use forEach to console.log each country in the countries array.
// let countR = countries.forEach((counTR)=>{
//     console.log(counTR)
// } )
// // 3 Use forEach to console.log each name in the names array.
// let naME =names.forEach((el)=>{
//     console.log(el)
// })
// // 4 Use forEach to console.log each number in the numbers array.
// let numBER = numbers.forEach((nums)=>{
//     console.log(nums)
// })
// // 5 Use map to create a new array by changing each country to uppercase in the countries array.
// let capcountry = countries.map((el,index)=>{
//     return el.toUpperCase()
// })
// console.log(capcountry)

// 6 Use map to create an array of countries length from countries array.
// let capcountry1 = countries.map((el,index)=>{
//     return el
// })
// console.log(capcountry1.length)

// 7 Use map to create a new array by changing each number to square in the numbers array
// let num = numbers.map((el)=>{
//     return el**2
// })
// console.log(num)

// 8 Use map to change to each name to uppercase in the names array
// let capname = names.map((el)=>{
//     return el.toUpperCase()
// })
// console.log(capname)

// 9 Use map to map the products array to its corresponding prices.
// let proprice = products.map((el)=>{
//     return el
// })
// console.log(proprice)//['price'])

// 10 Use filter to filter out countries containing land.
// let containland = countries.filter((el)=>{
//     return el.toLowerCase().includes("land")
// })
// console.log(containland)

// 11 Use filter to filter out countries having six character.
// let sixchar = countries.filter((el)=>{
//     return el.length==6
// })
// console.log(sixchar)

// 12 Use filter to filter out countries containing six letters and more in the country array.
// let moreThanSix = countries.filter((el)=>{
//     return el.length>=6
// })
// console.log(moreThanSix)

// 13 Use filter to filter out country start with 'E';
// let stsrtwith  = countries.filter((el=>{
//     return el.startsWith("E")
// }))
// console.log(stsrtwith)

// 14 Use filter to filter out only prices with values.
// let valuPrice = products.filter((el)=>{
//  return (el["price"])
// })
// console.log(valuPrice) //  not able to solve

// 15 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// function getStringLists(array){
// let check = []
// array.map((el)=>{
//    if(typeof(el)=="string"){
//     check.push(el)
//    }
// })
// console.log(check)
// }
// getStringLists(["amol","Kantilal","jadhav",967004310,24])

// 16 Use reduce to sum all the numbers in the numbers array.
// let sumNum = numbers.reduce((el,index)=>{
//     return el+index
// })
// console.log(sumNum)


// 17 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.
// countries.splice(4,0,"and")
// let check  = countries.reduce((el,index,arr)=>{
//     return el+" "+index
// })
// console.log(`${check} are north European countries`)

// 18 Explain the difference between some and every
// some = it gives boolean answers(i.e = true and Flase ) in some it check the condition for someof (any) element can satisfy the condition or not
// every  = it gives boolean answers(i.e = true and Flase ) in som it check the condition for every element should  satisfy the condition or not

// 19 Use some to check if some names' length greater than seven in names array
// let greaterLength = names.some((el)=>{
//     return el.length>7
// })
// console.log(greaterLength)

// 20 Use every to check if all the countries contain the word land
// let crosscheck= countries.every((el,index)=>{
//     return el.toLowerCase().includes("land")
// })
// console.log(crosscheck)

// 21 Explain the difference between find and findIndex.
// method Find = i.e  in that method it return the first occurance which is statisfy the condition.
// let nums = [10,12,45,67,92,20]
// let checks = nums.find((el)=>{
//     return el>50
// })
// console.log(checks)// 67 staisfy the condition 

// //  method findindex () = i.e in that method it return the first occurance index which is statisfy the condition.
// let nums1 = [10,12,45,67,92,20]
// let checks1 = nums1.findIndex((el)=>{
//     return el>50
// })
// console.log(checks1)//  index of 67


// 22 Use find to find the first country containing only six letters in the countries array //  ask in session
//  let Findcounrty = countries.find((el)=>{
// return el.length>6
//  })
//  console.log(Findcounrty)

// Level 2

// 1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// Method MAP
// let arrmap = products.map((el,insex,arr)=>{
//     return el['price']
// })
// //console.log(arrmap) //  here we sorted the all price
// // Method Filter
// let arrfilter = arrmap.filter((el,index,arr)=>{
//     return el
// })
// //console.log(arrfilter) //  here we filtered the number which is available in array
// // Method Reduce
// let arreduce = arrfilter.reduce((el,index,arr)=>{
//     return el+index
// })
// console.log(arreduce) // here we get total sum of prices


// 2 Find the sum of price of products using only reduce reduce(callback))
// Method 1
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// let totalinco = products.map((el,index,arr)=>{
// return el.price
// })
// let finalsum = totalinco.reduce((el,index,arr)=>{
//     return el+Number (index)
// })
// console.log(finalsum) //  im not able to solve from only reduce method ..

// Method 2
// let totalPrice = products.reduce((el,index)=>{
//     if(!isNaN(index.price)&&index.price!==""){
//     return el+index.price
//     }
//     return el
// },0)
// console.log(totalPrice)


// 3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countries = require('./Js_15_amol')
// function categorizeCountries1(array){
// return array.map((el)=>{
//     return (el.name)
// })
// }
// let countriesName = categorizeCountries1(countries)

// function comanpattern(array1){
//  let checkcountries= []
//     array1.map((el)=>{
//      if(String(el).includes('land')){
//         checkcountries.push(el)
//      }
//      if(String(el).includes('ia')){
//         checkcountries.push(el)
//      }
//      if(String(el).includes('island')){
//         checkcountries.push(el)
//      }
//      if(String(el).includes('stan')){
//         checkcountries.push(el)
//      }
//      })
//      console.log(checkcountries)
// }(comanpattern(countriesName))



// 4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country
// function mostusedchar(){
//     mostchar = {}
//     countries.forEach((el)=>{
//         charletter = el.name[0].toUpperCase()
//         mostchar[charletter]=(mostchar[charletter]||0)+1
//     })
//      return Object.entries(mostchar).map(([word,count])=>({word,count})).sort()//(a,b)=>(a.count-b.count))
// }
// console.log(mostusedchar(countries))


// 5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
//  function getFirstTenCountries(array){
//           return array.slice(0,10).map((el)=>{
//             return(el.name)
//  })
//  }
//  console.log(getFirstTenCountries(countries))


// 6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
//  function getFirstTenCountries(array){
//           return array.slice(array.length-11,array.length).map((el)=>{
//             return(el.name)
//  })
//  }
//  console.log(getFirstTenCountries(countries))

// 7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
// function mostrepeatedletter(country,limit){
// checkletter= {}
// country.map((el)=>{
//     let word =  el.name[0].toUpperCase()
//     checkletter[word]=(checkletter[word]||0)+1
// })
//  return Object.entries(checkletter).map(([word,count])=>({word,count})).sort((a,b)=>(b.count-a.count)).slice(0,limit)

// }
// console.log(mostrepeatedletter(countries,1))

//  trying to push the naes which is start with S
// function sortedcoutry(check){
//     sorted  = []
// countries.forEach((el)=>{
// num = (el.name).match(/[^S]/gi)
// if (num.length>=0){
//     sorted.push(el.name)
// }
// })
// console.log(sorted)

// }sortedcoutry(mostrepeatedletter)

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


// let str = "aaabbbccbbccaad"
// let check3 =str.split("")
// let k= 2
// checkObj = {}

// for (let i in check3){
//     checkObj[check3[i]]=(checkObj[check3[i]]||0)+1
// }
// rev =" "
// for (let key in str){
//  if(checkObj[key]>=k) {
//      rev+=key
//  }
// }
// console.log(rev)


