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
  'Kenya'
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
let emparr = [];
// Declare an array with more than 5 number of elements
let ofc = [2, 5, 6, 9, 10, 0, 8, 11, 323, 545];
// Find the length of your array
let lenofc = ofc.length;
console.log(lenofc); // 10 

// Get the first item, the middle item and the last item of the array 
let getarr = ofc.slice(0, 6);
console.log(getarr);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["lenovo", 678, 'true', '',]
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies);
// Print the first company, middle and last company
console.log(itCompanies.length);

// console.log(itCompanies[0, length-1]);


// Print out each company

// Change each company name to uppercase one by one and print them out
let mapitCompanies = itCompanies.map(company => company.toUpperCase());
console.log(mapitCompanies);
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let sentence = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'and Amazon', ['are', 'big IT companies']];
let solved = sentence.flat();
console.log(solved)

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'

// Filter out companies which have more than one 'o' without using the filter method
// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);
// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
console.log("----------------ItCompanies");
// Slice out the first 3 companies from the array
let utt = itCompanies.slice(0, 3);
console.log(utt);
// Slice out the last 3 companies from the array
let ttu = itCompanies.slice(4, 7);
console.log(ttu);
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array

// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

// Exercise: Level 2

// Create a separate countries.js file and store the countries array in it, create a separate file web_techs.js and store the webTechs array in it. Access both files in main.js file
// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] 
// // add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift('Meat');
// // add Sugar at the end of your shopping cart if it has not been already added
// shoppingCart.push('Sugar');
// // remove 'Honey' if you are allergic to honey
// console.log(shoppingCart);
// shoppingCart.pop();

// // modify 'Tea' to 'Green Tea'
// shoppingCart[2] = "Green Tea";
// console.log(shoppingCart);



// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

// The following is an array of 10 students' ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages (max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

// Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.



