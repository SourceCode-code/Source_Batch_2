// Exercise: Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  

// Declare an empty array
//let Earr = []

// Declare an array with more than 5 number of elements
//let Earr1 = [0,1,2,3,4,5]

// Find the length of your array
//console.log(Earr1.length)

// Get the first item, the middle item and the last item of the array
// let Arr =Earr1[0]
// let Arr1 =Earr1 [3]
// let Arr2 = Earr1[5]
// console.log(Arr,Arr1,Arr2)

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let mixedDataTypes = ["Amol", "kantilal", "jadhav","@#$%&*",24, 9767004310, true]
// console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
//console.log(itCompanies)

// Print the number of companies in the array
//console.log(itCompanies.length)

// Print the first company, middle and last company
// let aa1 = itCompanies[0]
// let aa2 = itCompanies[3]
// let aa3 = itCompanies[itCompanies.length-1]
// console.log(aa1,aa2,aa3)

// Print out each company
// itCompanies.forEach((el,index,arr)=>{
//     console.log(el)
// })

// Change each company name to uppercase one by one and print them out
// itCompanies.forEach((el,index,arr)=>{
//     console.log(el.toUpperCase())
// })
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
//console.log(`${itCompanies} are big IT companie`)
// let newit = "Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies."
// console.log(newit.split(" "))

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
// let company = "Facebook"
// let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// // if(itCompanies1.includes(company)){
// //     console.log(`${company} is there`)
// // }else{
// //    console.log(`${company} is not found'`) 
// // }

// //Method 2 : but here we have to make it on lowercase
// let checkcompany = itCompanies.some((el,index,arr)=>{
//     return el == company
// })
// if (checkcompany == true){
//     console.log(`${company} is there`)
// }
// else{
//     console.log(`${company} is not found'`) 
// }

// Filter out companies which have more than one 'o' without using the filter method(

// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// let itCompanies1 = []
// for(i=0;i<itCompanies.length;i++){
//   let comapany = itCompanies[i]
//   let company1 =comapany.toLowerCase().includes('o')//.repeat(2)
//   if(company1==true){
//     console.log(comapany)
//   }
// } // im not getting ans for more than one 'o'  

// Sort the array using sort() method
//console.log(itCompanies.sort()) 

// Reverse the array using reverse() method
// let rev1 = itCompanies.reverse()
// console.log(rev1)

// Slice out the first 3 companies from the array
// let first3 = itCompanies.slice(0,3)
// console.log(first3)
// Slice out the last 3 companies from the array
// let last1 = itCompanies.slice(4,itCompanies.length)
// console.log(last1)

// Slice out the middle IT company or companies from the array
// let mid1 = itCompanies.slice(2,3)
// console.log(mid1) //out put [ 'Microsoft' ]
// let mid2 = itCompanies.slice(2,5)
// console.log(mid2) 

// Remove the first IT company from the array
// let fisrt = itCompanies.shift()
// console.log(itCompanies)

// Remove the middle IT company or companies from the array
// itCompanies.splice(3,1)
// console.log(itCompanies) /// here we font required new vaiable nd with splice method we have to inter index number and then next number wich is not inclusive

// Remove the last IT company from the array
// let lastel = itCompanies.pop()
// console.log(itCompanies)

// Remove all IT companies
//console.log(itCompanies.slice(itCompanies.indexOf(0),itCompanies.lastIndexOf(itCompanies.length)))

// Exercise: Level 2

// Create a separate countries.js file and store the countries array in it, create a separate file web_techs.js and store the webTechs array in it. Access both files in main.js file

// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(text.split(" "))
// console.log(text.split(" ").length)
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
//const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift("Meat")
// console.log(shoppingCart)

// add Sugar at the end of your shopping cart if it has not been already added
// shoppingCart.push("Sugar")
// console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey
// Method 1 
//delete shoppingCart[shoppingCart.length-1]
// console.log(shoppingCart)

//Method2
// shoppingCart.pop()
// console.log(shoppingCart)

// modify 'Tea' to 'Green Tea'
// shoppingCart[2] = "Green tea"
// console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
//comapany = 'Ethiopia'
// let check1 =countries.some((el,index,arr)=>{
//     return el == 'Ethiopia'})
//     if(el==comapany){
//     console.log(comapany.toUppercase())
//  }
//Correct Method =2
// for(i=0;i<countries.length;i++){
//     if(countries[i]==comapany){ 
//         console.log(comapany.toUpperCase())
//     }
// }

// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
// let webTechs1 = 'Sass'
// for(i=0;i<=webTechs.length-1;i++){
//        if(webTechs1.includes(webTechs[i])){
//         console.log(`${webTechs1} is present in aray`)
//        }
// }
// console.log(`${webTechs1} is not present in aray`)

// webTechs.push("'Sass'")
// console.log(webTechs)

/******************************* */
// Concatenate the following two variables and store it in a fullStack variable:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
//  let fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

// The following is an array of 10 students' ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
// let age1 = (Math.max(...ages))
// console.log(age1)
// let age2 =(Math.min(...ages))
// console.log(age2)

// Find the median age(one middle item or two middle items divided by two)

// Find the average age(all items divided by number of items)
// let age3 = ages.reduce((el,index,arr)=>{
//     return el+index
// })
// console.log(Math.round(age3/ages.length))

// Find the range of the ages (max minus min)
// let average = (Math.abs(age2-age1))
// console.log (average)

// Compare the value of (min - average) and (max - average), use abs() method
// let coma = (age2-average)/(age1-average)
// console.log(Math.abs(coma))

// Slice the first ten countries from the countries array
// console.log(countries.slice(0,10))

// Find the middle country(ies) in the countries array
// let midcou = countries.length
// console.log(countries[5])
// method 2
// let slice = countries.slice(4,8)
// console.log(slice)

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
// let countries1 = countries.slice(0,5)
// let countries2 = countries.slice(6,12)
// console.log(countries1)
// console.log(countries2)
  
