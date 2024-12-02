// Exercises:Level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const democountries = ['Finland', 'Sweden', 'Norway']

//1 create an empty set
const emptySet = new Set();
//2 Create a set containing 0 to 10 using loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
//3 Remove an element from a set
numberSet.delete(5);
console.log(numberSet);
//4 Clear a set
numberSet.clear(); // Clear the set
console.log( numberSet);
//5 Create a set of 5 string elements from array
const stringSet = new Set(democountries);
console.log(stringSet);
//6 Create a map of countries and number of characters of a country

// Exercises:Level 2

// 1. Find the union of a and b
const union = [...new Set([...a, ...b])];
console.log( union);

// 2. Find the intersection of a and b
const setA = new Set(a);
const setB = new Set(b);
const intersection = a.filter((el)=> setB.has(el));
console.log(intersection);



// 3. Find the difference (a with b)
const difference = a.filter((el)=> !setB.has(el));
console.log(difference);

