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
let a1array = []

// Declare an array with more than 5 number of elements
let a2array = [1,2,3,4,5,6,7,8,9]
// Find the length of your array
console.log(a2array.length);

// Get the first item, the middle item and the last item of the array
console.log(a2array[0]);//first element
console.log(a2array[(a2array.length-1)/2]);//middle element
console.log(a2array[a2array.length-1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["Ashutosh",26,true,undefined,NaN,"More"]
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0]);//first company
console.log(itCompanies[(itCompanies.length-1)/2]);//Middle company
console.log(itCompanies[itCompanies.length-1]);//Last company

// Print out each company
Ele = itCompanies.forEach((e1,index,arr)=>{
    console.log(e1);
    
})

// Change each company name to uppercase one by one and print them out
Ele = itCompanies.forEach((e1,index,arr)=>{
    console.log(e1.toUpperCase());
    
})
upper =  itCompanies.map((el, index, arr) => {
    return el.toUpperCase()

})
console.log(upper);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(", ")} are big IT companies.`);

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
// let checkCompany = "AMAZON"
// for(let i=0; i<=itCompanies.length-1;i++){
// if(itCompanies[i]==checkCompany){
//     console.log(checkCompany);
// }
// else{console.log(`${checkCompany} is not found`);}
// }
// Filter out companies which have more than one 'o' without using the filter method
Companyy = []
count = 0
for (let i = 0; i < itCompanies.length; i++) { 
    for (let char of itCompanies[i].toLowerCase()) {
      if (char === "o") {
        count++
      }
    }
    if (count > 1) {
      Companyy.push(itCompanies[i])
    }
  }
console.log(Companyy)

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.sort().slice(0,3));

// Slice out the last 3 companies from the array
console.log(itCompanies.reverse().slice(0,3));

// Slice out the middle IT company or companies from the array
console.log(itCompanies);
console.log(itCompanies[((itCompanies.length-1)/2)]);

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies);

// Remove the middle IT company or companies from the array
itCompanies.pop((itCompanies.length-1)/2)
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies);

// Remove all IT companies
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies);

// Exercise: Level 2

// Create a separate countries.js file and store the countries array in it, create a separate file web_techs.js and store the webTechs array in it. Access both files in main.js file

// First remove all the punctuations and change the string to an array and count the number of words in the array:
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
newText = ''
Punn = "!@#$%^&*()<>,."
for(let i=0;i<text.length;i++){
    A = Punn.includes((i))
    if(A = false){
        continue
    }
    else{newText+=text[i]}
}   
console.log(newText);

// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart[1] = "Sprite"//edit
console.log(shoppingCart);
shoppingCart.unshift('Meat')//Add at start
shoppingCart.push("Sugar")//Add at end
console.log(shoppingCart);
shoppingCart.pop()//delete at end
console.log(shoppingCart);
delete shoppingCart[4]
console.log(shoppingCart);
shoppingCart[3] = "green tea"
console.log(shoppingCart);

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of your shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify 'Tea' to 'Green Tea'

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable:
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

// The following is an array of 10 students' ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
console.log(ages[0]);// min age
console.log(ages[ages.length-1]);//Max age
console.log(ages);

// Find the median age(one middle item or two middle items divided by two)
let midindex = (ages.length/2-1)
console.log(midindex);
midArray = ages.slice(midindex, 6)
console.log(midArray);
let midelement = midArray.reduce((e1,index,arr) => {
    return (e1 +=e1)/2
})
console.log(midelement);

// Find the average age(all items divided by number of items)
sumAge = 0
let avgAge = ages.reduce((e1,index, arr) => {
    return (sumAge +=e1)  //(ages.length)

})
console.log(sumAge);

// Find the range of the ages (max minus min)
ages.sort()
lastElement = ages[ages.length -1]
firstElement = ages[0]
console.log(lastElement);
console.log(firstElement);
console.log(lastElement - firstElement);

// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs((lastElement-firstElement-(firstElement-lastElement))));

// Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
